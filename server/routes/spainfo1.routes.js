const express = require('express');
const spainfo1_router = express.Router();
const spainfo1ModelController = require("../controllers/spainfo1.controller")

spainfo1_router.get('/',spainfo1ModelController.getAll);

spainfo1_router.get('/:id', spainfo1ModelController.getOne);

spainfo1_router.delete('/:id',spainfo1ModelController.delete);

spainfo1_router.post('/',spainfo1ModelController.post);

spainfo1_router.put('/:id',spainfo1ModelController.edit);


module.exports = spainfo1_router;