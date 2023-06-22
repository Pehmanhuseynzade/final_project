const express = require('express');
const res_router = express.Router();
const resModelController = require("../controllers/res.controller")

res_router.get('/',resModelController.getAll);

res_router.get('/:id', resModelController.getOne);

res_router.delete('/:id',resModelController.delete);

res_router.post('/',resModelController.post);

res_router.put('/:id',resModelController.edit);


module.exports = res_router;