const spaimagesModel = require("../models/spaimages.model")

const spaimagesModelController = {
    getAll:async(req,res)=>{
        const {spaimgname} = req.query
        const getspaimages = await spaimagesModel.find()
        if(!spaimgname){
          res.status(200).send(getspaimages)
        }
        else{
          const searched = get.filter((x)=>
            x.spaimgname.toLowerCase().trim().includes(spaimgname.toLowerCase().trim())
          )
          res.status(200).send(searched)
        }
      },
    getOne:async(req,res)=>{
        const {id} = req.params
        const newspaimages = await spaimagesModel.findById(id)
        res.status(200).send(newspaimages)
      },
    delete:async(req,res)=>{
        const id = req.params.id
        const deletespaimages = await spaimagesModel.findByIdAndDelete(id)
        res.status(200).send(deletespaimages)
      },
    post:async(req,res)=>{
        const {spaimgname,spaimg} = req.body
        const postspaimages = new spaimagesModel({
            spaimgname:spaimgname,
            spaimg:spaimg
        })
        await postspaimages.save()
        res.status(200).send({
          message:"Posted succefully!",
          payload:postspaimages
        })
      },
    edit:async(req,res)=>{
      const id = req.params.id
      const {spaimgname,spaimg} = req.body
      const putspaimages = {
        spaimgname:spaimgname,
        spaimg:spaimg
      }
      await spaimagesModel.findByIdAndUpdate(id,putspaimages)
         res.status(200).send(spaimagesModel)
    }
}

module.exports = spaimagesModelController;