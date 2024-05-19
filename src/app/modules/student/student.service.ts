import { Student } from "../student.model"
import { TStudent } from "./student.interface"

const createStudentIntoDB = async (studentData: TStudent) => {
    //  static & instance methods
    if (await Student.isStudentExists(studentData.id)) {
        throw new Error("Student already exists from static methods")
    } else {
        const result = await Student.create(studentData)
        return result;
    }

    // custom instance methods
    // const student = new Student(studentData);
    // if (await student.isStudentExists(studentData.id)) {
    //     throw new Error("Student already exists from instance methods")
    // }
    // else {
    //     const result = await student.save();
    //     return result;
    // }
}

const getAllStudentsFromDB = async () => {
    const result = await Student.find();
    return result;
}

const getSingleStudentsFromDB = async (studentId: string) => {
    const result = await Student.findOne({ id: studentId })
    return result;
}

export const StudentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentsFromDB
}