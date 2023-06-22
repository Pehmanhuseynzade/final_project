const entmentModel = require("../models/entertainment.model")

const entmentModelController = {
    getAll: async (req, res) => {
        const { entmentname } = req.query
        const getentment = await entmentModel.find()
        if (!entmentname) {
            res.status(200).send(getentment)
        }
        else {
            const searched = get.filter((x) =>
                x.entmentname.toLowerCase().trim().includes(entmentname.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const entment = await entmentModel.findById(id)
        res.status(200).send(entment)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deleteentment = await entmentModel.findByIdAndDelete(id)
        res.status(200).send(deleteentment)
    },
    post: async (req, res) => {
        const { entmentname, entmentdesc, entmentimg } = req.body
        const postentment = new entmentModel({
            entmentname: entmentname,
            entmentdesc: entmentdesc,
            entmentimg: entmentimg
        })
        await postentment.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postentment
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { entmentname, entmentdesc, entmentimg } = req.body
        const putentment = {
            entmentname: entmentname,
            entmentdesc: entmentdesc,
            entmentimg: entmentimg
        }
        await entmentModel.findByIdAndUpdate(id, putentment)
        res.status(200).send(entmentModel)
    }
}

module.exports = entmentModelController;