const homeModel = require("../models/home.model")

const homeModelController = {
    getAll: async (req, res) => {
        const { homename } = req.query
        const gethome = await homeModel.find()
        if (!homename) {
            res.status(200).send(gethome)
        }
        else {
            const searched = get.filter((x) =>
                x.homename.toLowerCase().trim().includes(homename.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const home = await homeModel.findById(id)
        res.status(200).send(home)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deletehome = await homeModel.findByIdAndDelete(id)
        res.status(200).send(deletehome)
    },
    post: async (req, res) => {
        const { homename, homedesc, homeimg } = req.body
        const posthome = new homeModel({
            homename: homename,
            homedesc: homedesc,
            homeimg: homeimg
        })
        await posthome.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: posthome
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { homename, homedesc, homeimg } = req.body
        const puthome = {
            homename: homename,
            homedesc: homedesc,
            homeimg: homeimg
        }
        await homeModel.findByIdAndUpdate(id, puthome)
        res.status(200).send(homeModel)
    }
}

module.exports = homeModelController;