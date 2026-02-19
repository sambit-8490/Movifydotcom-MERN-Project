//import model
const users = require('../Model/userSchema')

// logic for register
exports.register = async(req,res)=>{
    //logic
    console.log('inside user controller register logic');
    
        const {name,email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){

            res.status(406).json('Account already exist.....please login')
        }
        else{

            const newUser = new users({
                name, //only use one word if both key and value name is same
                email,
                password
            })
            //inorder to add above object use save method in mongoose
            await newUser.save()

            //response
            res.status(200).json(newUser)
        }
    }
    catch(err){
        res.status(401).json('Resgiter request failed due to',err)
    }
    
}

//logic for login
exports.login = async(req,res)=>{
    console.log('inside user controller login logic');

    const {email,password} =req.body

   try{ 
    const existingUser = await users.findOne({email,password})
    if(existingUser){
        //const token = jwt.sign({userId: existingUser._id},"secretkey123")
        res.status(200).json({
            existingUser /* , token */
        })
    }
    else{
        res.status(404).json('Invalid email id or password')
    }
    }
    catch(err){
        res.status(401).json('login failed due to ',err)
    }
}

//logic to get users
exports.getAllUsersController = async(req,res)=>{
    try {
        const allUsers = await users.find()
        res.status(200).json(allUsers)

    } catch(err){
        res.status(401).json(`Request Failed due to ${err}`)
    }
}

//delete user
exports.deleteUserController = async(req,res)=>{
    const {id} = req.params

    try {
        const removeUser = await users.findByIdAndDelete({_id:id})
        res.status(200).json(removeUser)
    } catch (err) {
        res.status(401).json(err)
    }
}
