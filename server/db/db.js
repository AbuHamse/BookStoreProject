import mongoose from "mongoose";

const MONGO_URI= process.env.MONGO_URI
const connectToDB = async()=>{
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Mongo DB succesfully running")
    } catch (error) {
        console.error("MongoDB not connected, please make sure URI is correct.")
        process.exit(1)
    }
}

export default connectToDB
