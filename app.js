const express = require('express');
const app = express();
const router = require('./src/routes/index')
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'src', 'views'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname,'src', 'public')))
app.use('/', router)

app.listen(3000, ()=>{console.log('servidor rodando na porta 3000')})