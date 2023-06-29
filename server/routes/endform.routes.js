const express = require('express');
const endform_router = express.Router();
const endformModelController = require("../controllers/endform.controller")

endform_router.get('/',endformModelController.getAll);

// endform_router.get('/:id', endformModelController.getOne);

endform_router.delete('/:id',endformModelController.delete);

endform_router.post('/',endformModelController.post);

// endform_router.put('/:id',endformModelController.edit);


module.exports = endform_router;