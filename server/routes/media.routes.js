const express = require('express');
const media_router = express.Router();
const mediaModelController = require("../controllers/media.controller")

media_router.get('/',mediaModelController.getAll);

media_router.get('/:id', mediaModelController.getOne);

media_router.delete('/:id',mediaModelController.delete);

media_router.post('/',mediaModelController.post);

media_router.put('/:id',mediaModelController.edit);


module.exports = media_router;