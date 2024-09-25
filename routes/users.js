const express = require('express');
const router = express.Router();
const controller = require('../controllers/users'); 
// Se requiere el archivo users.js que está en la carpeta de controllers
// se asigna ese contenido a la variable controller

// Importante enviar el comando correcto especificado en cada funcion del controlador

router.post('/', controller.create); 

router.get('/', controller.list); 

router.get('/:id', controller.index); 

router.put('/:id', controller.replace); 

router.patch('/:id', controller.update); 

router.delete('/:id', controller.destroy); 

module.exports = router;

