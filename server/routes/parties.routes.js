const express = require('express');
const parties_router = express.Router();
const partiesModelController = require("../controllers/parties.controller")

parties_router.get('/',partiesModelController.getAll);

parties_router.get('/:id', partiesModelController.getOne);

parties_router.delete('/:id',partiesModelController.delete);

parties_router.post('/',partiesModelController.post);

parties_router.put('/:id',partiesModelController.edit);


module.exports = parties_router;