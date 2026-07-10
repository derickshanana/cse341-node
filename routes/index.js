const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

 
routes.get('/', lesson1Controller.derickRoute);
routes.get('/prim', lesson1Controller.primRoute);

module.exports = routes;