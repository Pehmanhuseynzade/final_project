const express = require('express');
const tourimg_router = express.Router();
const tourimgModelController = require("../controllers/tourimg.controller")

tourimg_router.get('/',tourimgModelController.getAll);

tourimg_router.get('/:id', tourimgModelController.getOne);

tourimg_router.delete('/:id',tourimgModelController.delete);

tourimg_router.post('/',tourimgModelController.post);

tourimg_router.put('/:id',tourimgModelController.edit);


module.exports = tourimg_router;