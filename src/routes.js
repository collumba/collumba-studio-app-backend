const express = require('express');
const routes = express.Router();

const ClienteController = require('./controllers/ClienteController');

routes.get('/cliente', ClienteController.index);
routes.get('/cliente/:id', ClienteController.show);
routes.post('/cliente', ClienteController.store);
routes.put('/cliente/:id', ClienteController.update);
routes.delete('/cliente/:id', ClienteController.destroy);

module.exports = routes;