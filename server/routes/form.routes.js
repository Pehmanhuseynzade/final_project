const express = require('express');
const form_router = express.Router();
const formModelController = require("../controllers/form.controller")

form_router.get('/',formModelController.getAll);

// form_router.get('/:id', formModelController.getOne);

form_router.delete('/:id',formModelController.delete);

form_router.post('/',formModelController.post);



module.exports = form_router;