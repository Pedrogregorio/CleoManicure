const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser');

const app = express()

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({ extended: true }))

consign()
    .include('app/routes')
    .into(app);

app.listen(process.env.PORT || 8000, function(){
    console.log('serve on')
})