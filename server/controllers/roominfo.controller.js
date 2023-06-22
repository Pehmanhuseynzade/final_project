const roominfoModel = require("../models/roominfo.model")

const roominfoModelController = {
    getAll: async (req, res) => {
        const { totalname } = req.query
        const getroominfo = await roominfoModel.find()
        if (!totalname) {
            res.status(200).send(getroominfo)
        }
        else {
            const searched = get.filter((x) =>
                x.totalname.toLowerCase().trim().includes(totalname.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const roominfoID = await roominfoModel.findById(id)
        res.status(200).send(roominfoID)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deleteroominfo = await roominfoModel.findByIdAndDelete(id)
        res.status(200).send(deleteroominfo)
    },
    post: async (req, res) => {
        const { totalname, roominfos } = req.body
        const postroominfo = new roominfoModel({
            totalname: totalname,
            roominfos: roominfos,
        })
        await postroominfo.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postroominfo
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { totalname, roominfos } = req.body
        const putroominfo = {
            totalname: totalname,
            roominfos: roominfos
        }
        await roominfoModel.findByIdAndUpdate(id, putroominfo)
        res.status(200).send(roominfoModel)
    }
}

module.exports = roominfoModelController;