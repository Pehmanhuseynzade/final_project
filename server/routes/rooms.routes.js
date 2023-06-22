const express = require('express');
const room_router = express.Router();
const roomModelController = require("../controllers/rooms.controller")

room_router.get('/',roomModelController.getAll);

room_router.get('/:id', roomModelController.getOne);

room_router.delete('/:id',roomModelController.delete);

room_router.post('/',roomModelController.post);

room_router.put('/:id',roomModelController.edit);


module.exports = room_router;