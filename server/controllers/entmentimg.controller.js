const entmentimgModel = require("../models/entmentimg.model")

const entmentimgModelController = {
    getAll: async (req, res) => {
        const { entmentnameimg } = req.query
        const getentmentimg = await entmentimgModel.find()
        if (!entmentnameimg) {
            res.status(200).send(getentmentimg)
        }
        else {
            const searched = get.filter((x) =>
                x.entmentnameimg.toLowerCase().trim().includes(entmentnameimg.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const entmentimgid = await entmentimgModel.findById(id)
        res.status(200).send(entmentimgid)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deleteentmentimg = await entmentimgModel.findByIdAndDelete(id)
        res.status(200).send(deleteentmentimg)
    },
    
    post: async (req, res) => {
        const { entmentnameimg, entmentimgs } = req.body
        const postentmentimg = new entmentimgModel({
            entmentnameimg: entmentnameimg,
            entmentimgs: entmentimgs
        })
        await postentmentimg.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postentmentimg
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { entmentnameimg, entmentimgs } = req.body
        const putentmentimg = {
            entmentnameimg: entmentnameimg,
            entmentimgs: entmentimgs
        }
        await entmentimgModel.findByIdAndUpdate(id, putentmentimg)
        res.status(200).send(entmentimgModel)
    }
}

module.exports = entmentimgModelController;