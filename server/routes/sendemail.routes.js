const express = require('express');
const sendemail_router = express.Router();
const sendemailModelController = require("../controllers/sendemail.controller")

sendemail_router.get('/',sendemailModelController.getAll);


sendemail_router.delete('/:id',sendemailModelController.delete);

sendemail_router.post('/',sendemailModelController.post);



module.exports = sendemail_router;