const roomreserveModel = require("../models/postreserve.model")

const postreserveModelController = {
    getAll: async (req, res) => {
        const { nameroom } = req.query
        const roomrsvget = await roomreserveModel.find()
        if (!nameroom) {
            res.status(200).send(roomrsvget)
        }
        else {
            const searched = get.filter((x) =>
                x.roomrsvget.toLowerCase().trim().includes(nameroom.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
        const deletepostreserve = await roomreserveModel.findByIdAndDelete(id)
        res.status(200).send(deletepostreserve)
    },
    post: async (req, res) => {
        const { nameroom, price,personcount,capacity,countroom,formusername,lastname,formemail,phonenum,start,end } = req.body
        const roompost = new roomreserveModel({
            nameroom: nameroom,
            price: price,
            personcount: personcount,
            capacity:capacity,
            countroom:countroom,
            formusername:formusername,
            lastname:lastname,
            formemail:formemail,
            phonenum:phonenum,
            start:start,
            end:end,
            // isActive : false
        })
        await roompost.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: roompost
        })
    }
}

module.exports = postreserveModelController;