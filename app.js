const express = require('express')
const pageRoute = require('./routes/pageRoute')
const ejs = require('ejs')

const app = express()

//Template Engine
app.set('view engine', 'ejs')

//Middlewares
app.use(express.static('public'))

//Routes
app.use('/', pageRoute)

const port = 3000

app.listen(port, () => {
  console.log(`server running on ${port}`)
})
