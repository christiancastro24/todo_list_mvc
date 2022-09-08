const Task = require('../models/Task')
const User = require('../models/User')

module.exports = class TaskController {
    
    static async createTask(req, res) {
        const { title, description, done } = req.body

        try {
            await Task.create({ title, description, done })
            res.redirect('/tasks')

        } catch (err) {
            console.log(err)
        }
    }

    static async showTasks(req, res)  {
        try {
            const data = await Task.findAll({ raw: true })
            res.render('tasks/alltasks', { data })

        } catch (err) {
            console.log(err)
        }
    }

    static async showTask(req, res) {
        const { id } = req.params
        try {
            const data = await Task.findOne({ raw: true, where: { id: id } })
            res.render('tasks/task', { data })

        } catch (err) {
            console.log(err)
        }
    }

    static async editTaskGet (req, res)  {
        const { id } = req.params

        try {
            const data = await Task.findOne({ raw: true, where: { id: id }})
            res.render('tasks/edittask', { data })
            
        } catch (err) {
            console.log(err)
        }
    }

    static async editTaskPost (req, res) {
        const { id } = req.params
        const { title, description, done } = req.body

        try {
            await Task.update({ title, description, done}, { where: { id: id } })
            res.redirect('/tasks')

        } catch (err) {
            console.log('Erro ao atualizar', err)
        }
    }

    static async deleteTask(req, res) {
        const { id } = req.params

        try {
            Task.destroy({ where: { id: id } })
            res.redirect('/tasks')

        } catch (err) {
            console.log(err)
        }
    }


    /** @USER */
    static async createOwnerTask (req, res) {
        const { nome, sobrenome, TaskId } = req.body

        try {
            await User.create({ 
                nome, 
                sobrenome 
            }, { 
                where: { id: TaskId }
            })
            res.redirect('/tasks')

        } catch (err) {
            console.error(err)
        }
    }


    static async home(req, res) {
        await res.render('tasks/home')
    }
}