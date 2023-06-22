const express = require('express');
const entment_router = express.Router();
const entmentModelController = require("../controllers/entment.controller")

entment_router.get('/',entmentModelController.getAll);

entment_router.get('/:id', entmentModelController.getOne);

entment_router.delete('/:id',entmentModelController.delete);

entment_router.post('/',entmentModelController.post);

entment_router.put('/:id',entmentModelController.edit);


module.exports = entment_router;