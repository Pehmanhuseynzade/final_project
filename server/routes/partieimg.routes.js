const express = require('express');
const partieimg_router = express.Router();
const partieimgModelController = require("../controllers/partiesimg.controller")

partieimg_router.get('/',partieimgModelController.getAll);

partieimg_router.get('/:id', partieimgModelController.getOne);

partieimg_router.delete('/:id',partieimgModelController.delete);

partieimg_router.post('/',partieimgModelController.post);

partieimg_router.put('/:id',partieimgModelController.edit);


module.exports = partieimg_router;