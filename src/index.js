const express = require('express')
const usersRoutes = require('./route/users.js')
const app = express()
const PORT = process.env.PORT || 5000

const middlewareLogRequest = require('./middleware/logs')

app.use(middlewareLogRequest)
app.use(express.json())

app.use((req, res, next) => {
    console.log('middleware ke 2')
    next()
})

app.use('/users', usersRoutes)

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
