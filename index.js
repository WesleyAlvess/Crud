const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./src/db/db')

const app = express()
const port = 3000

const router = require('./src/routes/main.routes')

// Configurar o middleware
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/', router)


// Inicia o servidor
app.listen({ 
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})