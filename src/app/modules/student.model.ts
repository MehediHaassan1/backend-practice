import { Schema, model } from 'mongoose';
import { StudentModel, TAddress, TGuardian, TName, TParents, TStudent, TStudentMethods } from './student/student.interface';

const nameSchema = new Schema<TName>({
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true }
})

const addressSchema = new Schema<TAddress>({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true }
})

const guardianSchema = new Schema<TGuardian>({
    guardianName: nameSchema,
    age: { type: Number, required: true },
    relation: {
        type: String,
        required: true,
        enum: {
            values: ["Father", "Mother"],
            message: "Make sure it contains Father or Mother"

        }
    },
    address: addressSchema,
    contactNo: { type: String, required: true }
})

const parentsSchema = new Schema<TParents>({
    fatherName: nameSchema,
    fatherOcuppation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: nameSchema,
    motherOcuppation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
})

const studentSchema = new Schema<TStudent, StudentModel, TStudentMethods>({
    id: { type: String, required: true, unique: true },
    name: nameSchema,
    age: { type: Number, required: true },
    gender: {
        type: String,
        required: true,
        enum: {
            values: ["male", "female", "other"],
            message: "{VALUE} is not valid. Make sure it must be male, female or others type"

        }
    },
    presentAddress: addressSchema,
    permanentAddress: addressSchema,
    guardian: guardianSchema,
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    parents: parentsSchema,
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    },
    dateOfBirth: { type: String, required: true },
    profileImg: { type: String }
})


// studentSchema.methods.isUserExists = async function (id: string) {
//     const existsUser = await Student.findOne({ id })
//     return existsUser;
// }

studentSchema.statics.isStudentExists = async function (id: string) {
    const studentUser = await Student.findOne({ id });
    return studentUser;
}
// create model

export const Student = model<TStudent, StudentModel>('Student', studentSchema);