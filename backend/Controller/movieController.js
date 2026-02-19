const movies = require('../Model/movieSchema')

//logic to upload movie
exports.uploadMovieController = async(req,res)=>{
    console.log('inside movie controller logic');
    const {title,poster,coverimg,rated,released,runtime,genre,director,actors,language,plot} = req.body

    console.log(`${title},${poster},${coverimg},${rated},${released},${runtime},${genre},${director},${actors},${language},${plot}`);

    try {
        const existingMovie = await movies.findOne({title})
        if(existingMovie){
            res.status(406).json(`${title} already exist...`)
        }
        else{
            const newMovie = new movies({
                title,
                poster,
                coverimg,
                rated,
                released,
                runtime,
                genre,
                director,
                actors,
                language,
                plot
            })
            await newMovie.save()
            res.status(200).json(newMovie)
        }
    } catch (err) {
        res.status(401).json(`request failed due to ${err}`)
    }


}

//logic to get movie
exports.getAllMovieController = async(req,res)=>{
    try {
        const allMovies = await movies.find()
        res.status(200).json(allMovies)

    } catch(err){
        res.status(401).json(`Request Failed due to ${err}`)
    }
}

//logic for update movie detials
exports.editMovieController = async(req,res)=>{
    const {id} = req.params
    const {title,poster,coverimg,rated,released,runtime,genre,director,actors,language,plot} = req.body

    try {
        const updateMovie = await movies.findByIdAndUpdate({_id:id},{title,poster,coverimg,rated,released,runtime,genre,director,actors,language,plot},{new:true})

        await updateMovie.save()
        res.status(200).json(updateMovie)

    } catch (err) {
        res.status(401).json(err)
    }
}

//delete movie
exports.deleteMovieController = async(req,res)=>{
    const {id} = req.params

    try {
        const removeMovie = await movies.findByIdAndDelete({_id:id})
        res.status(200).json(removeMovie)
    } catch (err) {
        res.status(401).json(err)
    }
}