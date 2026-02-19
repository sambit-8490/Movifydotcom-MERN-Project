//importing mongoose
const mongoose = require("mongoose")


const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    poster:{
        type:String,
        require:true
    },
    coverimg:{
        type:String,
        require:true
    },
    rated:{
        type:String,
        require:true
    },
    released:{
        type:String,
        require:true
    },
    runtime:{
        type:String,
        require:true
    },
    genre:{
        type:String,
        require:true
    },
    director:{
        type:String,
        require:true
    },
    actors:{
        type:String,
        require:true
    },
    language:{
        type:String,
        require:true
    },
    plot:{
        type:String,
        require:true
    }
})

//create model
const movies = mongoose.model("movies",movieSchema)

//export the model
module.exports = movies