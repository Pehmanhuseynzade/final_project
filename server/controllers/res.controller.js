const resModel = require("../models/res.model")

const resModelController = {
    getAll: async (req, res) => {
        const { resname } = req.query
        const getres = await resModel.find()
        if (!resname) {
            res.status(200).send(getres)
        }
        else {
            const searched = get.filter((x) =>
                x.resname.toLowerCase().trim().includes(resname.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const rest = await resModel.findById(id)
        res.status(200).send(rest)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deleteres = await resModel.findByIdAndDelete(id)
        res.status(200).send(deleteres)
    },
    post: async (req, res) => {
        const { resname, resdesc, resimg } = req.body
        const postres = new resModel({
            resname: resname,
            resdesc: resdesc,
            resimg: resimg
        })
        await postres.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postres
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { resname, resdesc, resimg } = req.body
        const putres = {
            resname: resname,
            resdesc: resdesc,
            resimg: resimg
        }
        await resModel.findByIdAndUpdate(id, putres)
        res.status(200).send(resModel)
    }
}

module.exports = resModelController;