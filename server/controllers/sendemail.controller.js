const sendemailModel = require("../models/sendemail.model")

const sendemailModelController = {
    getAll: async (req, res) => {
        const { sendemail } = req.query
        const getsendemail= await sendemailModel.find()
        if (!sendemail) {
            res.status(200).send(getsendemail)
        }
        else {
            const searched = get.filter((x) =>
                x.sendemail.toLowerCase().trim().includes(sendemail.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deletesendemail = await sendemailModel.findByIdAndDelete(id)
        res.status(200).send(deletesendemail)
    },
    post: async (req, res) => {
        const { sendemail } = req.body
        const postsendemail = new sendemailModel({
            sendemail:sendemail
        })
        await postsendemail.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postsendemail
        })
    }
}

module.exports = sendemailModelController;