import mongoose,{Schema} from "mongoose"

const inputSchema = new Schema({
    input1:{
        type : String,
        required : true
    }
})

export const Input = mongoose.model("Input",inputSchema)