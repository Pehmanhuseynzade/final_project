const express = require('express');
const about_router = express.Router();
const aboutModelController = require("../controllers/about.controller")

about_router.get('/',aboutModelController.getAll);

about_router.get('/:id', aboutModelController.getOne);

about_router.delete('/:id',aboutModelController.delete);

about_router.post('/',aboutModelController.post);

about_router.put('/:id',aboutModelController.edit);


module.exports = about_router;