const express = require('express')

const routes = express.Router()
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello World' })
})

const middleware = (req, res, next) => {
    next();
}

routes.get('/users', middleware, UserController.fetch)
routes.post('/users', UserController.store)

routes.get('/users/:user_id/addresses', AddressController.fetch)
routes.post('/users/:user_id/addresses', AddressController.store)

routes.get('/users/:user_id/techs', TechController.fetch)
routes.post('/users/:user_id/techs', TechController.store)



module.exports = routes;