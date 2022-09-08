const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Task = require('./Task')

const User = db.define('User', {
    nome: {
        type: DataTypes.STRING
    },

    sobrenome: {
        type: DataTypes.STRING
    }
})


Task.hasMany(User)
User.belongsTo(Task)


module.exports = User