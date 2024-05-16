import express, { Application } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.routes";
const app: Application = express()

// parsers
app.use(express.json())
app.use(cors());

// routing
app.use("/api/v1/students", StudentRoutes)

app.get('/', (req, res) => {
    const a = 10;
    res.send('Hello World!')
})

export default app;
