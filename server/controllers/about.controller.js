const aboutModel = require("../models/about.model")

const aboutModelController = {
    getAll:async(req,res)=>{
        const {desc1} = req.query
        const get = await aboutModel.find()
        if(!desc1){
          res.status(200).send(get)
        }
        else{
          const searched = get.filter((x)=>
            x.desc1.toLowerCase().trim().includes(desc1.toLowerCase().trim())
          )
          res.status(200).send(searched)
        }
      },
    getOne:async(req,res)=>{
        const {id} = req.params
        const newID = await aboutModel.findById(id)
        res.status(200).send(newID)
      },
    delete:async(req,res)=>{
        const id = req.params.id
        const deleteInfo = await aboutModel.findByIdAndDelete(id)
        res.status(200).send(deleteInfo)
      },
    post:async(req,res)=>{
        const {desc1,desc2,aboutimage} = req.body
        const post = new aboutModel({
            desc1:desc1,
            desc2:desc2,
            aboutimage:aboutimage

        })
        await post.save()
        res.status(200).send({
          message:"Posted succefully!",
          payload:post
        })
      },
    edit:async(req,res)=>{
      const id = req.params.id
      const {desc1,desc2,aboutimage} = req.body
      const put = {
        desc1:desc1,
        desc2:desc2,
        aboutimage:aboutimage
      }
      await aboutModel.findByIdAndUpdate(id,put)
         res.status(200).send(aboutModel)
    }
}

module.exports = aboutModelController;