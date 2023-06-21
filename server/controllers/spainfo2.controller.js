const spasecondModel = require("../models/spainfo2.model")

const spainfosecondModelController = {
    getAll: async (req, res) => {
        const { spaname2 } = req.query
        const getspainfo2 = await spasecondModel.find()
        if (!spaname2) {
            res.status(200).send(getspainfo2)
        }
        else {
            const searched = get.filter((x) =>
                x.spaname2.toLowerCase().trim().includes(spaname2.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const spainfo2 = await spasecondModel.findById(id)
        res.status(200).send(spainfo2)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deletespainfo2 = await spasecondModel.findByIdAndDelete(id)
        res.status(200).send(deletespainfo2)
    },
    post: async (req, res) => {
        const { spaname2, spa2desc1, spa2desc2, spaimg2 } = req.body
        const postspainfo2 = new spasecondModel({
            spaname2: spaname2,
            spa2desc1: spa2desc1,
            spa2desc2: spa2desc2,
            spaimg2: spaimg2
        })
        await postspainfo2.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postspainfo2
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { spaname2, spa2desc1, spa2desc2, spaimg2 } = req.body
        const putspainfo2 = {
            spaname2: spaname2,
            spa2desc1: spa2desc1,
            spa2desc2: spa2desc2,
            spaimg2: spaimg2
        }
        await spasecondModel.findByIdAndUpdate(id, putspainfo2)
        res.status(200).send(spasecondModel)
    }
}

module.exports = spainfosecondModelController;