const roomModel = require("../models/rooms.model")

const roomModelController = {
    getAll: async (req, res) => {
        const { roomname } = req.query
        const getroom = await roomModel.find()
        if (!roomname) {
            res.status(200).send(getroom)
        }
        else {
            const searched = get.filter((x) =>
                x.roomname.toLowerCase().trim().includes(roomname.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const roomID = await roomModel.findById(id)
        res.status(200).send(roomID)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deleteroom = await roomModel.findByIdAndDelete(id)
        res.status(200).send(deleteroom)
    },
    post: async (req, res) => {
        const { roomname, roomimg1,roomimg2,roomimg3,roomimg4,roomcount } = req.body
        const postroom = new roomModel({
            roomname: roomname,
            roomimg1: roomimg1,
            roomimg2: roomimg2,
            roomimg3: roomimg3,
            roomimg4: roomimg4,
            roomcount:roomcount
        })
        await postroom.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postroom
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { roomname, roomimg1,roomimg2,roomimg3,roomimg4,roomcount } = req.body
        const putroom = {
            roomname: roomname,
            roomimg1: roomimg1,
            roomimg2: roomimg2,
            roomimg3: roomimg3,
            roomimg4: roomimg4,
            roomcount:roomcount
        }
        await roomModel.findByIdAndUpdate(id, putroom)
        res.status(200).send(roomModel)
    }
}

module.exports = roomModelController;