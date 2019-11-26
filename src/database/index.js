const Sequelize = require('sequelize')
const dbConfig = require('../config/database');

//Take user
const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');

const connection = new Sequelize(dbConfig)

User.init(connection)
Address.init(connection)
Tech.init(connection)

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;