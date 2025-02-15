const express = require('express');
const app = express();

// Configurar para que Express pueda recibir datos en formato JSON
app.use(express.json());

// Ruta POST para realizar la suma
app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;
    
    // Verificar que los números han sido enviados en el cuerpo de la solicitud
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Faltan los parámetros num1 y num2' });
    }

    // Realizar la suma
    const resultado = num1 + num2;

    // Enviar la respuesta con el resultado
    res.json({ resultado });
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
