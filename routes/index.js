const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const CategoryController = require("../controller/category-controller")

let category = [];  // { ID, Title, CreatedDate}

// GET ALL CATEGORY, REQUEST METHOD = GET
router.get('/category', (request, response) => {
    response.json(category);
})

// CREATE NEW CATEGORY, REQUEST METHOD = POST
router.post('/category', (request, response) => {
    category.push(request.body);
    response.status(201).json(request.body);
})

// GET CATEGORY BY ID, REQUEST METHOD = GET
router.get('/category/:id', (request, response) => {
    let userIndex = category.find(user => user.id === parseInt(request.params.id));
     if (!userIndex) 
          return response.status(404).send
    ({
        error: "The given ID was not found"
    })
    response.json(userIndex)
    // response.json
    // ({
    //     id: request.params.id 
    // });
})

// UPDATE CATEGORY BY ID, REQUEST METHOD = PUT
router.put('/category/:id', (request, response) => {
    let userIndex = category.findIndex(cat => category.id === parseInt(request.params.id));
    if (!userIndex === -1) {
        return response.status(404).send
        ({
            error : "The given ID was not found"
        })
    }
    users[userIndex] ["id"] = request.body.id;
    users[userIndex] ["title"] = request.body.title;
    users[userIndex] ["createdDate"] = request.body.createdDate;
    response.json(request.body);
})

// DELETE CATEGORY BY ID, REQUEST METHOD = DELETE
router.delete('/category/:id', (request, response) => {
    let userIndex = category.findIndex((cat) => user.id === parseInt(request.params.id));
    if (userIndex === -1) {
        return response.json
        ({
            error : "The given ID was not found"
        })
    }
    users.splice(userIndex, 1);
    response.json(request.body);
})


module.exports = router