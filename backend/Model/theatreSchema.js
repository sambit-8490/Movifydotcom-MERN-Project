//importing mongoose
const mongoose = require("mongoose")


const theatreSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        require:true
    }
})

//create model
const theatres = mongoose.model("theatres",theatreSchema)

//export the model
module.exports = theatres