import { StudentModel } from "../student.model"
import { TStudent } from "./student.interface"

const createStudentIntoDB = async (student: TStudent) => {
    const result = await StudentModel.create(student)
    return result;
}

const getAllStudentsFromDB = async () => {
    const result = await StudentModel.find();
    return result;
}

const getSingleStudentsFromDB = async (studentId: string) => {
    const result = await StudentModel.findOne({ id: studentId })
    return result;
}

export const StudentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentsFromDB
}