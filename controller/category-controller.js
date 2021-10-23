const { request, response } = require("express");

let category = [];

const getAllCategory = (request, response) => {
    response.json(category);
}

const store = (request, response) => {
    category.push(request.body);
    response.status(201).json(request.body);
}

const getById = (request, response) => {
    let category = category.find((user) => category.id === parseInt(request.params.id));
    if (!category) response.json(404).send 
    "The category with the given ID was not found."
    response.json(category);
}

module.export = {
    getAllCategory,
    store, 
    getById,
}
