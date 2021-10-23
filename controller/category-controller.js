
let category = [];


exports.getAllCategory = (request,response)=>{
    response.json(category);
}
// const getAllCategory = (request, response) => {
//     response.json(category);
// }

exports.store = (request, response) => {
    category.push(request.body);
    response.status(201).json(request.body);
}

// const store = (request, response) => {
//     category.push(request.body);
//     response.status(201).json(request.body);
// }

exports.getById = (request, response) => {
    let userIndex = category.find(user => user.id === parseInt(request.params.id));
     if (!userIndex) {
         return response.json({
             error : "the given category id was not found"
         })
     }
     response.json(userIndex);
}

exports.updateCategory = (request, response) => {
    let userIndex = category.findIndex(cat=> cat.id === parseInt(request.params.id));
    if (userIndex === -1) {
        return response.status(404).send({
            error : "The given ID was not found"
        })
    }
    category[userIndex]["id"] = request.body.id;
    category[userIndex]["title"] = request.body.title;
    category[userIndex]["createdDate"] = request.body.createdDate;
    response.json(request.body);
}

exports.deleteCategory = (request, response) => {
    let userIndex = category.findIndex(cat => cat.id === parseInt(request.params.id));
    if (userIndex === -1) {
        return response.json({
            error : "The given ID was not found"
        })
    }
    category.splice(userIndex, 1);
    response.status(204).json();
}
// module.export = {
//     store, 
//     getById,
// }
