import { Schema, model, connect } from 'mongoose';
import { Address, Name, Student } from './student/student.interface';

const nameSchema = new Schema<Name>({
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true }
})

const addressSchema = new Schema<Address>({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true }
})

const studentSchema = new Schema<Student>({
    id: String,
    name: nameSchema,
    age: { type: Number, required: true },
    gender: ["Male", "Female"],
    presentAddress: addressSchema,
    permanentAddress: addressSchema,
    guardian: {
        guardianName: nameSchema,
        age: { type: Number, required: true },
        relation: ["Father", "Mother"],
        address: addressSchema,
        contactNo: { type: String, required: true }
    },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    parents: {
        fatherName: nameSchema,
        fatherOcuppation: { type: String, required: true },
        fatherContactNo: { type: String, required: true },
        motherName: nameSchema,
        motherOcuppation: { type: String, required: true },
    },
    bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    dateOfBirth: { type: String, required: true },
    profileImg: { type: String, required: false }
})


// create model

export const StudentModel = model<Student>('Student', studentSchema);