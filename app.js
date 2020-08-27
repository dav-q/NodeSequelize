const express=require('express')
const bodyParser = require('body-parser')
const app = express()
// Llamamos las variables de entorno
require('dotenv').config()


// Llamamos las rutas 'api' y 'web' del aplicativo
const apiRoutes = require('./routes/api')
const webRoutes = require('./routes/web')

// Definimos las configuraciones antes de definir las rutas
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Configuramos los cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})

// Si la ruta llega con el prefijo 'api' usamos las rutas de api
app.use('/api',apiRoutes)
app.use('/web',webRoutes)

// Puerto donde arranca el servidor
const port=process.env.PORT || 3030

app.listen(port,()=>{
    console.log("Servidor Arriba");
})