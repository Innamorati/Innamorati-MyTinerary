require('dotenv').config()
const cors = require('cors')
const express = require('express')
require('./configuracion/basededato')
const Router = require('./rutas/rutas')
const PORT = 4000
const app = express()
const passport = require('passport')

const path = require('path');

app.use(cors())
app.use(express.json())
app.use('/api', Router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}


app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', () => console.log(`server ready on PORT ${process.env.PORT || 4000}`))
