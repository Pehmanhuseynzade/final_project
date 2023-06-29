const endformModel = require("../models/endform.model")

const endformModelController = {
    getAll: async (req, res) => {
        const { firstname } = req.query
        const getendform = await endformModel.find()
        if (!firstname) {
            res.status(200).send(getendform)
        }
        else {
            const searched = getendform.filter((x) =>
                x.firstname.toLowerCase().trim().includes(firstname.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deleteendform = await endformModel.findByIdAndDelete(id)
        res.status(200).send(deleteendform)
    },
    post: async (req, res) => {
        const { startdate,enddate,status } = req.body
        const postendform = new endformModel({
            // firstname: firstname,
            // lastname: lastname,
            // usermail: usermail,
            // userphone: userphone,
            startdate: startdate,
            enddate:enddate,
            status:status

        })
        await postendform.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postendform
        })
    }
}

module.exports = endformModelController;