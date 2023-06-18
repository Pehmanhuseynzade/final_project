const infoBlog = require("../models/hotelinfo.model")

const infohotelController = {
    getAll:async(req,res)=>{
        const {name} = req.query
        const get = await infoBlog.find()
        if(!name){
          res.status(200).send(get)
        }
        else{
          const searched = get.filter((x)=>
            x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
          )
          res.status(200).send(searched)
        }
      },
    getOne:async(req,res)=>{
        const {id} = req.params
        const newID = await infoBlog.findById(id)
        res.status(200).send(newID)
      },
    delete:async(req,res)=>{
        const id = req.params.id
        const deleteInfo = await infoBlog.findByIdAndDelete(id)
        res.status(200).send(deleteInfo)
      },
    post:async(req,res)=>{
        const {count,name} = req.body
        const post = new infoBlog({
          count:count,
          name:name
        })
        await post.save()
        res.status(200).send({
          message:"Posted succefully!",
          payload:post
        })
      },
    edit:async(req,res)=>{
      const id = req.params.id
      const {count,name} = req.body
      const put = {
        count:count,
        name:name
      }
      await infoBlog.findByIdAndUpdate(id,put)
         res.status(200).send({
              message:`${put.name} update is succesfully!`
          })
    }
}

module.exports = infohotelController;