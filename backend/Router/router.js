// 1) import express
const express = require('express')

// 2) create an object for the class Router in express
const router = new express.Router()

//import usercontroller
const userController = require('../Controller/userController')

//import movieController
const movieController = require('../Controller/movieController')

//import theatreController
const theatreController = require('../Controller/theatreController')

// 3) path to resolve requests

    // 1) register
    router.post('/user/register',userController.register)

    // 2) login
    router.post('/user/login',userController.login)

    // 3) Upload movie
    router.post('/user/movies',movieController.uploadMovieController)

    // 3) get movie
    router.get('/movies/allmovies',movieController.getAllMovieController)

    // 4) Upload theatre
    router.post('/user/theatres',theatreController.uploadTheatreController)

    // 3) get movie
    router.get('/theatres/allTheatres',theatreController.getAllTheatreController)

    // 4) update movie
    router.put('/movie/update/:id',movieController.editMovieController)

    // 5) update movie
    router.put('/theatre/update/:id',theatreController.editTheatreController)

    //6) delete movie
    router.delete('/movie/delete/:id',movieController.deleteMovieController)

    //7) delete theatre
    router.delete('/theatre/delete/:id',theatreController.deleteTheatreController)

    // 8) get users
    router.get('/users/fetch',userController.getAllUsersController)

    //7) delete user
    router.delete('/user/delete/:id',userController.deleteUserController)

    

// 4) Export router
module.exports = router