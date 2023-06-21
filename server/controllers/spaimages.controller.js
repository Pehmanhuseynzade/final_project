// const spaimagesModel = require("../models/spaimages.model")

// const spaimagesModelController = {
//     getAll:async(req,res)=>{
//         const {name} = req.query
//         const getspaimages = await spaimagesModel.find()
//         if(!name){
//           res.status(200).send(spaimages)
//         }
//         else{
//           const searched = get.filter((x)=>
//             x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
//           )
//           res.status(200).send(searched)
//         }
//       },
//     getOne:async(req,res)=>{
//         const {id} = req.params
//         const newspaimages = await spaimagesModel.findById(id)
//         res.status(200).send(newspaimages)
//       },
//     delete:async(req,res)=>{
//         const id = req.params.id
//         const deletespaimages = await spaimagesModel.findByIdAndDelete(id)
//         res.status(200).send(deletespaimages)
//       },
//     post:async(req,res)=>{
//         const {name,spaimg} = req.body
//         const postspaimages = new spaimagesModel({
//             name:name,
//             spaimg:spaimg
//         })
//         await postspaimages.save()
//         res.status(200).send({
//           message:"Posted succefully!",
//           payload:postspaimages
//         })
//       },
//     edit:async(req,res)=>{
//       const id = req.params.id
//       const {name,spaimg} = req.body
//       const putspaimages = {
//         name:name,
//         spaimg:spaimg
//       }
//       await spaimagesModel.findByIdAndUpdate(id,putspaimages)
//          res.status(200).send(spaimagesModel)
//     }
// }

// module.exports = spaimagesModelController;