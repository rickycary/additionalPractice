import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"

// Get my env variables
dotenv.config()

// Create express app
const app = express()

// Register middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// Routes and routers 
app.get("/", (req, res) => {
    res.json({message: "it works"})
})

// Listener
const PORT = process.env.PORT ?? 4444
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))