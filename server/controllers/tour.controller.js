const tourModel = require("../models/tour.model")

const tourModelController = {
    getAll: async (req, res) => {
        const { tourname } = req.query
        const gettour = await tourModel.find()
        if (!tourname) {
            res.status(200).send(gettour)
        }
        else {
            const searched = get.filter((x) =>
                x.tourname.toLowerCase().trim().includes(tourname.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const tour = await tourModel.findById(id)
        res.status(200).send(tour)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deletetour = await tourModel.findByIdAndDelete(id)
        res.status(200).send(deletetour)
    },
    post: async (req, res) => {
        const { tourname, tourdesc, tourimg } = req.body
        const posttour = new tourModel({
            tourname: tourname,
            tourdesc: tourdesc,
            tourimg: tourimg
        })
        await posttour.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: posttour
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { tourname, tourdesc, tourimg } = req.body
        const puttour = {
            tourname: tourname,
            tourdesc: tourdesc,
            tourimg: tourimg
        }
        await tourModel.findByIdAndUpdate(id, puttour)
        res.status(200).send(tourModel)
    }
}

module.exports = tourModelController;