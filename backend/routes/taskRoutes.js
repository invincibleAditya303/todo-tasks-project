const express = require('express')
const router = express.Router()

const taskController = require('../controllers/taskController')
const authMiddleware = require('../middleware/authMiddleware')

// Add Task
router.post('/tasks', authMiddleware, taskController.createTask)

// Get all Tasks
router.get('/tasks', authMiddleware, taskController.getTasks)

// Get Task by ID
router.get('/tasks/:id', authMiddleware, taskController.getTaskById)

// Update Task
router.put('/tasks/:id', authMiddleware, taskController.updateTask)

// Delate Task
router.delete('/tasks/:id', authMiddleware, taskController.deleteTask)

module.exports = router