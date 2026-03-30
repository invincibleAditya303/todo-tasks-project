# Task Manager Application
A full-stack task management system with authentication and role-based access where users can manage
their own tasks and admin can manage all users and assign tasks.

---

## Setup Instructions
  ### CLone the repository
  git clone https://github.com/invincibleAditya303/todo-tasks-project.git
  cd project root

---

### Backend Setup
```
cd backend
npm install

create .env file
MONGO_URI = your_mongodb_connection
JWT_SECRET = your_secret_key

Run backend: 
npm run dev
```
---

### Frontend Setup
```
cd frontend
npm install
npm start
```

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt

### Frontend
- React.js (Create React App)

### Tools
- Postman (API Testing)

---

## API Endpoints
### Auth
- POST `api/auth/register -> Register user
- POST `api/auth/login` -> Login user

### Tasks
- POST `api/tasks` -> Create task
- GET `api/tasks` -> Get tasks (user: own, admin: all)
- GET `api/tasks/:id` -> Get Single task
- PUT `api/tasks/:id` -> Update task
- DELETE `api/tasks/:id` -> Delete task

---

## Authentication Flow
1. User registers with name, email and password
2. Password is hashed using bcrypt before storing
3. User logs in with credentials
4. Server verifies credentails and generates JWT token
5. Token is send to client
6. Client includes token in request headers: Authorization <token>
7. Middleware verifies token and attaches user data ('id', 'role')
8. Protected routes allow access based on role

---

## Database Schema
 ### User Schema
 ```
{
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, {timestamps: true}
```

### Task Schema
```
{
    title: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true}
```

## Project Structure
```todo-tasks-project/
├── backend/
│   ├── .env
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Task.js
│   │   └── User.js
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── seedAdmin.js
│   └── userTasks.http
└── frontend/
    ├── .env.devlopment
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── public/
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── README.md
    └── src/
        ├── App.js
        ├── App.test.js
        ├── components/
        │   ├── Dashboard/
        │   │   ├── index.js
        │   │   └── styledComponents.js
        │   ├── Header/
        │   │   ├── index.js
        │   │   └── styledComponents.js
        │   ├── LoginForm/
        │   │   ├── index.js
        │   │   └── styledComponents.js
        │   ├── ProtectedRoute/
        │   │   └── index.js
        │   ├── RegisterForm/
        │   │   ├── index.js
        │   │   └── styledComponents.js
        │   ├── TaskForm/
        │   │   ├── index.js
        │   │   └── styledComponents.js
        │   └── TaskItemCard/
        │       ├── index.js
        │       └── styledComponents.js
        ├── index.css
        ├── index.js
        ├── reportWebVitals.js
        └── setupTests.js
```

---

##Scalability Concepts

- **Horizontal Scaling**
  The application can be scaled by running multiple instances of the server across multiple machines to handle increased traffic.

- **Load Balancing**
  A load balancer distributes incoming requests across multiple servers to ensure better performance and high availability.

- **Microservice Architecture**
  The application can be split into smaller independent services such as authentication, user management, task management for
  better scalability and maintainability.

  - **Caching using Redis**
    Frequently accessed data can be cached using Redis to reduce database load and improve response time.

  - **Database Indexing**
    Indexes can be added to frequently queried fields (e.g., UserId in tasks) to speed up database queries and improve performance.
