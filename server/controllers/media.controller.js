const mediaModel = require("../models/media.model")

const mediaModelController = {
    getAll:async(req,res)=>{
        const {medianame} = req.query
        const getmedia = await mediaModel.find()
        if(!medianame){
          res.status(200).send(getmedia)
        }
        else{
          const searched = get.filter((x)=>
            x.medianame.toLowerCase().trim().includes(medianame.toLowerCase().trim())
          )
          res.status(200).send(searched)
        }
      },
    getOne:async(req,res)=>{
        const {id} = req.params
        const newmedia = await mediaModel.findById(id)
        res.status(200).send(newmedia)
      },
    delete:async(req,res)=>{
        const id = req.params.id
        const deletemedia = await mediaModel.findByIdAndDelete(id)
        res.status(200).send(deletemedia)
      },
    post:async(req,res)=>{
        const {medianame,mediaimage} = req.body
        const postmedia = new mediaModel({
            medianame:medianame,
            mediaimage:mediaimage
        })
        await postmedia.save()
        res.status(200).send({
          message:"Posted succefully!",
          payload:postmedia
        })
      },
    edit:async(req,res)=>{
      const id = req.params.id
      const {medianame,mediaimage} = req.body
      const putmedia = {
        medianame:medianame,
        mediaimage:mediaimage
      }
      await mediaModel.findByIdAndUpdate(id,putmedia)
         res.status(200).send(mediaModel)
    }
}

module.exports = mediaModelController;