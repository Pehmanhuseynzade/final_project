const formModel = require("../models/form.model")

const formModelController = {
    getAll: async (req, res) => {
        const { formusername } = req.query
        const getform = await formModel.find()
        if (!formusername) {
            res.status(200).send(getform)
        }
        else {
            const searched = get.filter((x) =>
                x.formusername.toLowerCase().trim().includes(formusername.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deleteform = await formModel.findByIdAndDelete(id)
        res.status(200).send(deleteform)
    },
    post: async (req, res) => {
        const { formusername, surname, phonenum, formemail,messages } = req.body
        const postform = new formModel({
            formusername: formusername,
            surname: surname,
            phonenum: phonenum,
            formemail: formemail,
            messages: messages
        })
        await postform.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postform
        })
    }
}

module.exports = formModelController;