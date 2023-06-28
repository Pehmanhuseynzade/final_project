const express = require('express');
const reserve_router = express.Router();
const roomreserveModelController = require("../controllers/roomreserve.controller")

reserve_router.get('/',roomreserveModelController.getAll);

reserve_router.get('/:id', roomreserveModelController.getOne);

reserve_router.delete('/:id',roomreserveModelController.delete);

reserve_router.post('/',roomreserveModelController.post);

reserve_router.put('/:id',roomreserveModelController.edit);


module.exports = reserve_router;