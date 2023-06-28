const roomreserveModel = require("../models/roomreserve.model")

const roomreserveModelController = {
    getAll: async (req, res) => {
        const { nameroom } = req.query
        const roomget = await roomreserveModel.find()
        if (!nameroom) {
            res.status(200).send(roomget)
        }
        else {
            const searched = get.filter((x) =>
                x.nameroom.toLowerCase().trim().includes(nameroom.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const roomreserveID = await roomreserveModel.findById(id)
        res.status(200).send(roomreserveID)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deleteroomreserve = await roomreserveModel.findByIdAndDelete(id)
        res.status(200).send(deleteroomreserve)
    },
    post: async (req, res) => {
        const { nameroom, imageroom,price,personcount,countroom,capacity } = req.body
        const roompost = new roomreserveModel({
            nameroom: nameroom,
            imageroom: imageroom,
            price: price,
            personcount: personcount,
            countroom:countroom,
            capacity:capacity

        })
        await roompost.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: roompost
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { nameroom, imageroom,price,personcount,countroom,capacity } = req.body
        const roomput = {
            nameroom: nameroom,
            imageroom: imageroom,
            price: price,
            personcount: personcount,
            countroom:countroom,
            capacity:capacity
        }
        await roomreserveModel.findByIdAndUpdate(id, roomput)
        res.status(200).send(roomreserveModel)
    }
}

module.exports = roomreserveModelController;