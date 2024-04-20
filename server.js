if (process.env.NODE_ENV !== 'production') {
    require('dotenv').parse()
}
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const router = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/',router)

mongoose.connect("mongodb+srv://amanuelbekele771:Sunnyburgers21@sunnyburger.h36iwb6.mongodb.net/?retryWrites=true&w=majority&appName=sunnyBurger ")
.then(() => {
    console.log('connected to database')
})

const port =  process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listing on ${port}...`)
})
