import express from 'express'
import {registerUser,hireMe,getUsers} from "../controllers/authController.js"

const Router = express.Router()

Router.get("/",(req,res)=>{
    res.send("this is router.get")
})

Router.post("/register",registerUser)

Router.post("/hireme",hireMe)

Router.get("/getUsers",getUsers)

export default Router;