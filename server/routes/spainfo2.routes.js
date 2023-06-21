const express = require('express');
const spainfo2_router = express.Router();
const spainfo2ModelController = require("../controllers/spainfo2.controller")

spainfo2_router.get('/',spainfo2ModelController.getAll);

spainfo2_router.get('/:id', spainfo2ModelController.getOne);

spainfo2_router.delete('/:id',spainfo2ModelController.delete);

spainfo2_router.post('/',spainfo2ModelController.post);

spainfo2_router.put('/:id',spainfo2ModelController.edit);


module.exports = spainfo2_router;