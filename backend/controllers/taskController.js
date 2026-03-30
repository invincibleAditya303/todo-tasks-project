const { request } = require('http')
const Task = require('../models/Task')
const User = require('../models/User')

exports.createTask = async (request, response) => {
    try {
        const {title, userId} = request.body

        if (!title || title.trim() === '') {
            return response.status(400).json({message: 'Title is required'})
        }

        let assignedUser

        if (request.user.role === 'admin') {
            if (!userId) {
                return response.status(400).json({message: 'userId is required for admin'})
            }

            const userExists = await User.findById(userId)

            if (!userExists) {
                return response.status(404).json({message: 'User not found'})
            }

            assignedUser = userId
        } else {
            assignedUser = request.user.id
        }

        const task = await Task.create({
            ...request.body,
            user: request.user.id
        })

        response.status(201).json({message: 'Task added successfully'})
    } catch (e) {
        return response.status(500).json({message: 'Server Error'})
    }
}

exports.getTasks = async (request, response) => {
    try {
        let tasks

        if (request.user.role === 'admin') {
            tasks = await Task.find().populate('user', 'name email')
        } else {
            tasks = await Task.find({user: request.user.id})
        }

        return response.status(200).json({message: tasks})
    } catch (e)  {
        return response.status(500).json({message: 'Server Error'})
    }
}

exports.getTaskById = async (request, response) => {
    try {
        const {id} = request.params
        const task = await Task.findById(id)

        if (!task) {
            return response.status(404).json({message: 'Task not found'})
        }

        if (task.user.toString() !== request.user.id && request.user.role !== 'admin') {
            return response.status(403).json({message: 'Forbidden'})
        }

        response.status(200).json({message: task})
    } catch (e) {
        return response.status(500).json({message: 'Server Error'})
    }
}

exports.updateTask = async (request, response) => {
    try {
        const {title, completed} = request.body

        const {id} = request.params
        const task = await Task.findById(id)

        if (!task) {
            return response.status(404).json({message: 'Task not found'})
        }

        if (task.user.toString() !== request.user.id && request.user.role !== 'admin') {
            return response.status(403).json({message: 'Forbidden'})
        }

        if (!title && title !== undefined) {
            if (title.trim() === '') {
                return response.status(400).json({message: 'Title cannot be empty'})
            }

            task.title = title.trim()
        }

        if (!completed && completed !== undefined) {
            if (typeof completed !== 'boolean') {
                return response.status(400).json({message: 'Completed must be boolean'})
            }

            task.completed = completed
        }

        await task.save()
        response.status(200).json({message: 'Task updated successfully'})
    } catch (e) {
        return response.status(500).json({messgae: 'Server Error'})
    }
}

exports.deleteTask = async (request, response) => {
    try {
        const {id} = request.params
        const task = await Task.findById(id)

        if (!task) {
            return response.status(404).json({message: 'Task not found'})
        }

        if (task.user.toString() !== request.user.id && request.user.role !== 'admin') {
                return response.status(403).json({message: 'Forbidden'})
        }

        await task.deleteOne()

        response.status(200).json({message: 'Task deleted'})
    } catch (e) {
        return response.status(500).json({message: 'Server Error'})
    }
}