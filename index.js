// importamos libreria Express
const express = require('express');
// importamos libreria Path
const path = require('path');

const app = express();

// se coloca una ruta estatica para los archivos del proyecto
app.use(express.static(path.join(__dirname, '/assets/pages')));

// creamos una funcion de una ruta get
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/prueba', (req,res) =>{
    res.sendFile(path.join(__dirname+'/assets/pages/prueba.html'));
});

const port = process.env.PORT || 3000;

// Inicializamos el app en el puerto 3000
app.listen(port);

// en consola imprimimos por que puerto esta corriendo
console.log('App is listening on port ' + port);