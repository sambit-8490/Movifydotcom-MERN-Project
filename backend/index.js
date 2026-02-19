// 1) import .env
// load .env file contents into process.env by defualt
require('dotenv').config()

// 2) import express to create server
const express = require('express')

// 3) import cors
const cors = require('cors')

// import router
const router = require('./Router/router')

//import connection,js file
require('./DB/connection')

// 4) create server - creates an express application . the express() function is a top-level function
const mdcServer = express()

// 5) use of cors by server
mdcServer.use(cors())

// 6) return middleware that only parses json and convert it into javascript object
mdcServer.use(express.json())

//server
mdcServer.use(router)

//pfserver should use uploads folder
//first arg - how the other application should use this file
//second arg - to export the upload folder
mdcServer.use('/uploads',express.static('./uploads'))


const PORT = 5000 || process.env.PORT

//8) run server
mdcServer.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
})

// 9) get http request to baseUrl
mdcServer.get('/',(req,res)=>{
    res.send('<h1> Movidydotcom server running successfully and waiting for request</h1>')
})


