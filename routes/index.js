const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category-controller")

let category = [];  // { ID, Title, CreatedDate}

// GET ALL CATEGORY, REQUEST METHOD = GET
router.get('/category', categoryController.getAllCategory);

// CREATE NEW CATEGORY, REQUEST METHOD = POST
router.post('/category',categoryController.store);

// GET CATEGORY BY ID, REQUEST METHOD = GET
router.get('/category/:id',categoryController.getById);

// UPDATE CATEGORY BY ID, REQUEST METHOD = PUT
router.put('/category/:id', categoryController.updateCategory);

// DELETE CATEGORY BY ID, REQUEST METHOD = DELETE
router.delete('/category/:id', categoryController.deleteCategory);


module.exports = router