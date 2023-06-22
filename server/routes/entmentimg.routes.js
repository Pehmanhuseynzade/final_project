const express = require('express');
const entmentimg_router = express.Router();
const entmentimgModelController = require("../controllers/entmentimg.controller")

entmentimg_router.get('/',entmentimgModelController.getAll);

entmentimg_router.get('/:id', entmentimgModelController.getOne);

entmentimg_router.delete('/:id',entmentimgModelController.delete);

entmentimg_router.post('/',entmentimgModelController.post);

entmentimg_router.put('/:id',entmentimgModelController.edit);


module.exports = entmentimg_router;