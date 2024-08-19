const sequelize = require('sequelize')
const config = require('../models/Endereco')

const Endereco = require('../models/Endereco')

const connection = new sequelize.Sequelize(config)

Endereco.init(connection)
Endereco.associate(connection.models)

module.exports = connection