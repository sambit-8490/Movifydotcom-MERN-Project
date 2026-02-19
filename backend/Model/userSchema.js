//importing mongoose
const mongoose = require("mongoose")

//import validator
const validate = require("validator")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:[3,'Must be atleast 3 character , got only {value}']
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validate(value){
            if(!validate.isEmail(value)){
            throw new Error('Invalid Email')
            }
        }
    },
    password:{
        type:String,
        require:true
    },
})

//create model
const users = mongoose.model("users",userSchema)

//export the model
module.exports = users
