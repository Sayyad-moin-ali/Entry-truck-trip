import mongoose, { connection } from "mongoose";
import dotenv from 'dotenv'


dotenv.config(); 
export async function connect() {
    try {
       await mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on('connected',()=>{
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