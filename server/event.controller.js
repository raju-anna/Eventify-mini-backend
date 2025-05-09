import { Event } from "./Models/events.model.js"
import { ApiError } from "./utils/ApiError.js"
import { ApiResponse } from "./utils/ApiResponse.js"
import { asyncer } from "./utils/asyncer.js"

const eventFunction = asyncer( async(req, res) => {
    
    const {eventId, eventName, roomNumber, startTime, endTime} = req.body

    if(
        [eventId, eventName, roomNumber, startTime, endTime].some((field)=> field?.trim() === "")
    ){
        throw new ApiError(400,"All fields are required")
    } 

    const existingEvent = await Event.findOne({
        $or: [{eventId},{
            roomNumber,
            startTime : {$lt : endTime},
            endTime : {$gt : startTime} 
        }]
    })

    if(existingEvent){
        throw new ApiError(409, "An event has been booked at this location at the same time")    
    }

    const event = await Event.create({
        eventId,
        eventName,
        roomNumber,
        startTime,
        endTime
    })

    if(!event){
        throw new ApiError(500, "Something went wrong while creating the event")
    }

    return res.status(201).json(
        new ApiResponse(200, event, "Event created successfully")
    )
})

export { eventFunction }