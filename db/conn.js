// Importa
const { Sequelize } = require('sequelize');

// Passa o banco na nova instância, username do banco, a senha, objeto que tem (host e qual tipo de banco quer usar)
const sequelize = new Sequelize('sequelize', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;


