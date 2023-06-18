const express = require('express');
const infohotel_router = express.Router();
const infohotelController = require("../controllers/hotelinfo.controller")

infohotel_router.get('/',infohotelController.getAll);

infohotel_router.get('/:id', infohotelController.getOne);

infohotel_router.delete('/:id',infohotelController.delete);

infohotel_router.post('/',infohotelController.post);

infohotel_router.put('/:id',infohotelController.edit);


module.exports = infohotel_router;