require('dotenv').config()
const cors = require('cors')
const express = require('express')
require ('./configuracion/basededato')
const Router = require('./rutas/rutas')
const PORT = 4000 
const app = express()


//middlewares
app.use(cors())
app.use(express.json())
app.use('/api', Router)

app.listen(PORT, ()=>console.log("Servidor listo en puerto " + PORT))