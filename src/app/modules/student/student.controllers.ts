import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentValidationSchema from "./student.validation";

const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;
        const zodValidationData = studentValidationSchema.parse(studentData);

        const result = await StudentServices.createStudentIntoDB(zodValidationData);
        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: result,
        })
    }
    catch (err:any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            data: err,
        })
    }
}

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: "All students were successfully retrieved",
            data: result,
        })
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            data: err,
        })
    }
}

const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const studentId = req.params.studentId;
        const result = await StudentServices.getSingleStudentsFromDB(studentId)
        res.status(200).json({
            success: true,
            message: "Student is getting successfully",
            data: result
        })
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            data: err,
        })
    }
}

export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent
}