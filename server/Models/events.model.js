import mongoose,{Schema} from "mongoose"

const eventSchema = new Schema({
    eventId:{
        type : String,
        required : true,
        unique : true
    },
    eventName:{
        type : String,
        required : true
    },
    roomNumber:{
        type : String,
        required : true
    },
    startTime:{
        type : Date,
        required : true
    },
    endTime:{
        type : Date,
        required : true
    }
})

export const Event = mongoose.model("Event",eventSchema)