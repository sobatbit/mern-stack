const express = require('express')
require('dotenv').config()
const app = express()
const authRoutes = require('./routes/authRoutes')
const goalRoutes = require('./routes/goalRoutes')
const { logRequest } = require('./middleware/logs')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logRequest)


app.use('/v1/goals', goalRoutes)
app.use('/v1/auth', authRoutes)
app.use(errorHandler)

app.listen(port, () => console.log(`Server berhasil berjalan di port ${port}`))

