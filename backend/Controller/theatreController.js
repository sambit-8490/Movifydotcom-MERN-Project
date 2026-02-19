const theatres = require('../Model/theatreSchema')

//logic to upload theatre
exports.uploadTheatreController = async(req,res)=>{
    const {name,location,rating} = req.body

    console.log(`${name},${location},${rating}`);

    try {
        const existingTheatre = await theatres.findOne({name})
        if(existingTheatre){
            res.status(406).json(`${name} already exist...`)
        }
        else{
            const newtheatre = new theatres({
                name,
                location,
                rating
            })
            await newtheatre.save()
            res.status(200).json(newtheatre)
        }
    } catch (error) {
        console.log(error);
        res.status(401).json(`request failed due to ${error}`)
    }
}

//logic to get theatre
exports.getAllTheatreController = async(req,res)=>{
    try {
        const allTheatres = await theatres.find()
        res.status(200).json(allTheatres)

    } catch(err){
        res.status(401).json(`Request Failed due to ${err}`)
    }
}

//logic for update theatre detials
exports.editTheatreController = async(req,res)=>{
    const {id} = req.params
    const {name,location,rating} = req.body

    try {
        const updateTheatre = await theatres.findByIdAndUpdate({_id:id},{name,location,rating},{new:true})

        await updateTheatre.save()
        res.status(200).json(updateTheatre)

    } catch (err) {
        res.status(401).json(err)
    }
}

//delete theatre
exports.deleteTheatreController = async(req,res)=>{
    const {id} = req.params
    try {
        const removeTheatre = await theatres.findByIdAndDelete({_id:id})
        res.status(200).json(removeTheatre)
    } catch (err) {
        res.status(401).json(err)
    }
}