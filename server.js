const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Conectar a MongoDB (asegúrate de tener un servidor MongoDB en ejecución)
mongoose.connect('mongodb://localhost:27017/academiaDanza', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir el modelo de turnos
const Turno = mongoose.model('Turno', {
    nombre: String,
    hora: String
});

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());

// Ruta para obtener turnos disponibles
app.get('/turnos', async (req, res) => {
    const turnos = await Turno.find();
    const turnosDisponibles = turnos.map(turno => turno.hora);
    res.json(turnosDisponibles);
});

// Ruta para solicitar un turno
app.post('/turnos', async (req, res) => {
    const { nombre, hora } = req.body;

    // Guardar el turno en la base de datos
    await Turno.create({ nombre, hora });

    res.json({ mensaje: 'Turno solicitado exitosamente' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
