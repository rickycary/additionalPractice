import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config() // get dotenv vars 

const DATABASE_URL = process.env.DATABASE_URL ?? "mongodb://localhost:27017/default"

// connect
mongoose.connect(DATABASE_URL)

// connection message
mongoose.connection
.on("open", () => console.log(`connected to mongo db ${DATABASE_URL}`))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error))

export default mongoose