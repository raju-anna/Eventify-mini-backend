const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")


app.use(cors())
app.use(express.json) // gives access to req.body

app.listen(3000, () => {
    console.log("Server has started on port 5000")
})


async () => {
    try {
        await mongoose.connect("mongodb+srv://rajsimhamv:rajuanna@trialbackend.4mghlro.mongodb.net/TrialBackend")
    } catch (error) {
        console.error("MongoDB connection Error", error)
    }
}