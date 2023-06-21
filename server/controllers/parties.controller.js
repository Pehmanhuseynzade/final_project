const partiesModel = require("../models/parties.model")



const partiesModelController = {
    getAll: async (req, res) => {
        const { partiesname } = req.query
        const getparties = await partiesModel.find()
        if (!partiesname) {
            res.status(200).send(getparties)
        }
        else {
            const searched = get.filter((x) =>
                x.partiesname.toLowerCase().trim().includes(partiesname.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const parties = await partiesModel.findById(id)
        res.status(200).send(parties)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deleteparties = await partiesModel.findByIdAndDelete(id)
        res.status(200).send(deleteparties)
    },
    post: async (req, res) => {
        const { partiesname, partiesdesc1, partiesdesc2, partiesimg,partiesimg2 } = req.body
        const postparties = new partiesModel({
            partiesname: partiesname,
            partiesdesc1: partiesdesc1,
            partiesdesc2: partiesdesc2,
            partiesimg: partiesimg,
            partiesimg2:partiesimg2
        })
        await postparties.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postparties
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { partiesname, partiesdesc1, partiesdesc2, partiesimg,partiesimg2 } = req.body
        const putparties = {
            partiesname: partiesname,
            partiesdesc1: partiesdesc1,
            partiesdesc2: partiesdesc2,
            partiesimg: partiesimg,
            partiesimg2:partiesimg2
        }
        await partiesModel.findByIdAndUpdate(id, putparties)
        res.status(200).send(partiesModel)
    }
}

module.exports = partiesModelController;