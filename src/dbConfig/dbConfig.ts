import mongoose, { connection } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connnection = mongoose.connection

        connnection.on('connected',()=>{
            console.log("mongodbb connected")
        })
        connection.on('error',(error)=>{
            console.log("mongodb connection error"+error)
           process.exit()
        })

    } catch (error) {
        console.log("something went wrong in connecting to db")
        console.log(error)
    }
}