const tourimgModel = require("../models/tourimg.model")

const tourimgModelController = {
    getAll: async (req, res) => {
        const { tournameimg } = req.query
        const gettourimg = await tourimgModel.find()
        if (!tournameimg) {
            res.status(200).send(gettourimg)
        }
        else {
            const searched = get.filter((x) =>
                x.tournameimg.toLowerCase().trim().includes(tournameimg.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const tourimgid = await tourimgModel.findById(id)
        res.status(200).send(tourimgid)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deletetourimg = await tourimgModel.findByIdAndDelete(id)
        res.status(200).send(deletetourimg)
    },
    post: async (req, res) => {
        const { tournameimg, tourimgs } = req.body
        const posttourimg = new tourimgModel({
            tournameimg: tournameimg,
            tourimgs: tourimgs
        })
        await posttour.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: posttourimg
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { tournameimg, tourimgs } = req.body
        const puttourimg = {
            tournameimg: tournameimg,
            tourimgs: tourimgs
        }
        await tourimgModel.findByIdAndUpdate(id, puttourimg)
        res.status(200).send(tourimgModel)
    }
}

module.exports = tourimgModelController;