require('dotenv').config()
const cors = require('cors')
const express = require('express')
require('./configuracion/basededato')
const Router = require('./rutas/rutas')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', Router)

const path = require('path')

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
});