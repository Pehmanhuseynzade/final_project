const express = require('express');
const postreserve_router = express.Router();
const postreserveModelController = require("../controllers/postreserve.controller")

postreserve_router.get('/',postreserveModelController.getAll);

// postreserve_router.get('/:id', postreserveModelController.getOne);

postreserve_router.delete('/:id',postreserveModelController.delete);

postreserve_router.post('/',postreserveModelController.post);

// postreserve_router.put('/:id',postreserveModelController.edit);


module.exports = postreserve_router;