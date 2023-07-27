import mongoose from "mongoose"

export const connectDB = ()=>{
    mongoose.connect("mongodb+srv://pjaimind031:jaimin21082002@cluster0.vngpvxa.mongodb.net/Jaimin_OwnWebsite?retryWrites=true&w=majority")
    .then(()=>{console.log("your connection with moongodb is done")})

}
// connectDB()
