import express from "express"
const app = express()
import cors from "cors"
import mongoose from"mongoose"
import { Router } from "express"
import { eventFunction } from "./event.controller.js"
import { Event } from "./Models/events.model.js"

app.use(cors())
app.use(express.json()) // gives access to req.body

app.use(cors({
    origin : "*",
    credentials : true
}))

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://rajsimhamv:rajuanna@trialbackend.4mghlro.mongodb.net/TrialBackend")

    } catch (error) {
        console.error("MongoDB connection Error", error)
    }
}

connectDB().
then(() => {
    app.listen(3000, () => {
    console.log("Server has started on port 3000")
 })
}).catch((err)=>{
    console.log("MONGO DB connection failed")
})

const router = Router()

router.route("/create-event").post(eventFunction)
app.use(router)


