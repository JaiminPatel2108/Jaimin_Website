import mongoose from "mongoose"

export const connectDB = ()=>{
    mongoose.connect(process.env.DATABASE)
    .then(()=>{console.log("your connection with moongodb is done")})

}
// connectDB()
