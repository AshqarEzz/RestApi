const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require ('./middleware/errorMiddleware')
const Port = process.env.PORT || 5000
const connectDB = require('./config/db')
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes '))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${Port}`))
