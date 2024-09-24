const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const db = require('./db');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.use(cors());
app.use(express.json());

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API del Concesionario',
            version: '1.0.0',
            description: 'Documentación de la API del Complexivo',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor de desarrollo',
            },
        ],
    },
    apis: ['./docs.js'], // Aquí pones la ruta a tus archivos con la documentación
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Endpoints para la tabla Coche
const router = require('./routes/routes');
app.use('/algo', router.router);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    console.log(`Documentación disponible en http://localhost:${port}/docs`);
});