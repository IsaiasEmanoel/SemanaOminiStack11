const express = require('express');

const OngsController = require('./controllers/OngControllers');
const IncidentsController = require('./controllers/IncidentControllers');
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionControllers')
const routes = express.Router(); //desestrutura as rotas do express

routes.get('/ongs',OngsController.index);//acessa ao controlador
routes.post('/ongs', OngsController.create);

routes.get('/profile',ProfileController.index);

routes.post('/sessions',SessionController.create)

routes.post('/incidents',IncidentsController.create);
routes.get('/incidents',IncidentsController.index);
routes.delete('/incidents/:id',IncidentsController.delete);

module.exports = routes;