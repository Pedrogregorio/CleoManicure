const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'app/views')

app.use(express.static('./app/public'))

consign()
    .include('./app/views')
    .then('./app/routes')
    .then('./app/controllers')
    .into(app)


app.listen('8000')