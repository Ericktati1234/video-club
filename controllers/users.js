const express = require('express');

function create(req, res, next) {
    res.send(`POST => /users/ => ${req.body.name}`); 
    // Creamos un nuevo usuario el cual esta especificado en el body del request
}

function list(req, res, next) {
    res.send(`GET => /users/`);
    // Respondemos con la lista de usuario por medio del metodo get
}

function index(req, res, next) {
    res.send(`GET => /users/:id => ${req.params.id}`);
    //Retornamos en los parametros de nuestro request, la informacion de un solo usuario
}

function replace(req, res, next) {
    res.send(`PUT => /users/:id`);
    // Reemplazamos un usuario existente con la id que esta especificado en la ruta users/id, respondemos confirmando que se logró hacer el put
}

function update(req, res, next) {
    res.send(`PATCH => /users/:id`);
    // Actualizamos la informacion de un usuario igualmente especificado en la ruta users/id, respondemos confirmando que se logró hacer el patch
}

function destroy(req, res, next) {
    res.send(`DELETE => /users/:id`);
    //POr ultimo elminamos un usuario que su id fue especificado en la ruta users/id y respondemos confirmando que se logró realizar el delete.
}

module.exports = {create, list, index, replace, update, destroy};
// Exportamos nuestras funciones a todo nuestro proyecto
