const express = require('express');
const tour_router = express.Router();
const tourModelController = require("../controllers/tour.controller")

tour_router.get('/',tourModelController.getAll);

tour_router.get('/:id', tourModelController.getOne);

tour_router.delete('/:id',tourModelController.delete);

tour_router.post('/',tourModelController.post);

tour_router.put('/:id',tourModelController.edit);


module.exports = tour_router;