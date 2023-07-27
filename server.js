import express from "express"
import cors from "cors" 
import authRoute from "./route/authRoute.js"
import { connectDB } from "./connection/connection.js"
// import 

const app = express()
app.use(cors())
app.use(express.json())
connectDB()
const port = 5000

app.use("/api/v1/auth",authRoute)   

app.listen(port,()=>{
    console.log(`your backend server is running on port ${port}`);
})