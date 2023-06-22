const express = require('express');
const home_router = express.Router();
const homeModelController = require("../controllers/home.controller")

home_router.get('/',homeModelController.getAll);

home_router.get('/:id', homeModelController.getOne);

home_router.delete('/:id',homeModelController.delete);

home_router.post('/',homeModelController.post);

home_router.put('/:id',homeModelController.edit);


module.exports = home_router;