const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.post('/create/task', TaskController.createTask)
router.get('/tasks', TaskController.showTasks)
router.get('/tasks/:id', TaskController.showTask)
router.get('/edit/:id', TaskController.editTaskGet)
router.post('/edit/:id', TaskController.editTaskPost)
router.post('/delete/:id', TaskController.deleteTask)

router.post('/users/add', TaskController.createOwnerTask)


router.get('/', TaskController.home)

module.exports = router