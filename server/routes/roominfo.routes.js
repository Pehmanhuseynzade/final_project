const express = require('express');
const roominfo_router = express.Router();
const roominfoModelController = require("../controllers/roominfo.controller")

roominfo_router.get('/',roominfoModelController.getAll);

roominfo_router.get('/:id', roominfoModelController.getOne);

roominfo_router.delete('/:id',roominfoModelController.delete);

roominfo_router.post('/',roominfoModelController.post);

roominfo_router.put('/:id',roominfoModelController.edit);


module.exports = roominfo_router;