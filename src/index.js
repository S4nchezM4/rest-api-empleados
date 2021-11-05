const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000) //Cambiar con el servicio de la nube

// Middlewares (funciones que se ejecutan antes de lleghar a la ruta final o funcion final)
app.use(express.json());


// Routes
app.use(require('./routes/employees.js'))

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});