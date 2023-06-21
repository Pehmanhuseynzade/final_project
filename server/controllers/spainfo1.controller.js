const spafirstModel = require("../models/spainfo1.model")

const spainfofirstModelController = {
    getAll: async (req, res) => {
        const { spaname } = req.query
        const getspainfo1 = await spafirstModel.find()
        if (!spaname) {
            res.status(200).send(getspainfo1)
        }
        else {
            const searched = get.filter((x) =>
                x.spaname.toLowerCase().trim().includes(spaname.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const spainfo1 = await spafirstModel.findById(id)
        res.status(200).send(spainfo1)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deletespainfo1 = await spafirstModel.findByIdAndDelete(id)
        res.status(200).send(deletespainfo1)
    },
    post: async (req, res) => {
        const { spaname, spadesc1, spadesc2, spaimg1 } = req.body
        const postspainfo1 = new spafirstModel({
            spaname: spaname,
            spadesc1: spadesc1,
            spadesc2: spadesc2,
            spaimg1: spaimg1
        })
        await postspainfo1.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postspainfo1
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { spaname, spadesc1, spadesc2, spaimg1 } = req.body
        const putspainfo1 = {
            spaname: spaname,
            spadesc1: spadesc1,
            spadesc2: spadesc2,
            spaimg1: spaimg1
        }
        await spafirstModel.findByIdAndUpdate(id, putspainfo1)
        res.status(200).send(spafirstModel)
    }
}

module.exports = spainfofirstModelController;