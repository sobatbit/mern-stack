const express = require ('express')
require('dotenv').config()
const app = express()
const {logRequest} = require('./middleware/logs')
// console.log(typeof(logRequest)) cari tau mengapa logRequest tidak bisa dibungkus dengan kurung kurawal
const { errorHandler } = require('./middleware/errorMiddleware')
// console.log(typeof(errorHandler)) cari tau mengapa errorHandler harus dibungkus dengan kurung kurawal
const port = process.env.PORT || 5000




app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(logRequest)
app.use(errorHandler)

app.listen(port, () => console.log(`Server berhasil berjalan di port ${port}`))

