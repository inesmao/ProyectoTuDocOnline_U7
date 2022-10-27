const express = require('express');
const conectarBD = require('./config/db');
const cors = require ('cors');


// creamos nuestro servidor 

const app = express();
const port = 7000;

// conectamos con la base de datos
conectarBD();
app.use(cors());
app.use(express.json());

// rutas
app.use('/api/citas', require('./routes/citas'));

//estamos conectados desde la web
app.get("/", (req,res) => {
    res.send("Bienvenidos ya estamos conectados con el navegador");
    });

    
app.listen(port, () => {
    console.log(" el servidor esta corriendo perfectamente",port);
});