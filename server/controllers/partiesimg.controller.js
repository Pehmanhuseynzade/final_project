const partieimgModel = require("../models/partiesimg.model")

const partieimgModelController = {
    getAll:async(req,res)=>{
        const {partieimgname} = req.query
        const getpartieimg = await partieimgModel.find()
        if(!partieimgname){
          res.status(200).send(getpartieimg)
        }
        else{
          const searched = get.filter((x)=>
            x.partieimgname.toLowerCase().trim().includes(partieimgname.toLowerCase().trim())
          )
          res.status(200).send(searched)
        }
      },
    getOne:async(req,res)=>{
        const {id} = req.params
        const newpartieimg = await partieimgModel.findById(id)
        res.status(200).send(newpartieimg)
      },
    delete:async(req,res)=>{
        const id = req.params.id
        const deletepartieimg = await partieimgModel.findByIdAndDelete(id)
        res.status(200).send(deletepartieimg)
      },
    post:async(req,res)=>{
        const {partieimgname,partieimg} = req.body
        const postpartieimg = new partieimgModel({
            partieimgname:partieimgname,
            partieimg:partieimg
        })
        await postpartieimg.save()
        res.status(200).send({
          message:"Posted succefully!",
          payload:postpartieimg
        })
      },
    edit:async(req,res)=>{
      const id = req.params.id
      const {partieimgname,partieimg} = req.body
      const putpartieimg = {
        partieimgname:partieimgname,
        partieimg:partieimg
      }
      await partieimgModel.findByIdAndUpdate(id,putpartieimg)
         res.status(200).send(partieimgModel)
    }
}

module.exports = partieimgModelController;