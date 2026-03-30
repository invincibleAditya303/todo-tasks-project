const express = require('express')
const cors = require('cors')

const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes')

const app = express()

const allowedOrigins = [
  'http://localhost:3000', // Local development
  'https://todo-tasks-project.vercel.app', // Production domain
]

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
}

app.use(cors(corsOptions))
app.use(express.json())

require('dotenv').config()


const  PORT = process.env.PORT || 5000

connectDB()

app.use('/api/auth', authRoutes)
app.use('/api', taskRoutes)

//Listening to the PORT
app.listen(PORT, () => {
    console.log('Server running on http://localhost:5000')
})