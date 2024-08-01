const express = require('express');
const mysql = require('mysql2');
const db = require('./db');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

const app = express();
const port = 3000;

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Endpoints para la tabla Coche
app.post('/coches', async (req, res) => {
    const { matricula, marca, modelo, color, precio_venta } = req.body;

    // Verificar que ningún campo esté vacío
    if (!matricula || !marca || !modelo || !color || precio_venta === undefined) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Verificar que el precio no sea negativo
    if (precio_venta < 0) {
        return res.status(400).json({ error: 'El precio no puede ser negativo.' });
    }

    try {
        // Verificar si la matrícula ya existe
        const [existingCar] = await db.query('SELECT * FROM Coche WHERE matricula = ?', [matricula]);

        if (existingCar.length > 0) {
            // Si la matrícula ya existe, actualizar los datos
            await db.query('UPDATE Coche SET marca = ?, modelo = ?, color = ?, precio_venta = ? WHERE matricula = ?', [marca, modelo, color, precio_venta, matricula]);
            res.status(200).json({ message: 'Coche actualizado correctamente.' });
        } else {
            // Si la matrícula no existe, insertar un nuevo coche
            const [result] = await db.query('INSERT INTO Coche (matricula, marca, modelo, color, precio_venta) VALUES (?, ?, ?, ?, ?)', [matricula, marca, modelo, color, precio_venta]);
            res.status(201).json({ id: result.insertId });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/coches', async (req, res) => {
    try {
        const [rows] = await db.query(`
        SELECT * FROM Coche
        WHERE matricula NOT IN (
            SELECT matricula FROM Compra
        )
    `);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/cochescomprados/:numero_cedula', async (req, res) => {
    const { numero_cedula } = req.params;

    const query = `
      SELECT coche.matricula, coche.marca, coche.modelo, coche.color
      FROM cliente
      JOIN compra ON cliente.codigo_cliente = compra.codigo_cliente
      JOIN coche ON compra.matricula = coche.matricula
      WHERE cliente.numero_cedula = ?`;
    try {
        const [rows] = await db.query(query, [numero_cedula]);
        if (rows) {
            res.status(200).json(rows);
        } else {
            res.status(404).json({ error: 'El Cliente no Tiene Vehículos' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/clientes', async (req, res) => {
    const { numero_cedula, nombres, apellidos, direccion, ciudad, numero_telefono, matricula, fecha_compra } = req.body;

    try {
        let client;
        let clientId;

        // Verifica si la cédula ya existe
        const [existingClient] = await db.query('SELECT codigo_cliente FROM cliente WHERE numero_cedula = ?', [numero_cedula]);

        if (existingClient.length === 0) {
            // Si el cliente no existe, lo inserta
            const [insertResult] = await db.query('INSERT INTO cliente (numero_cedula, nombres, apellidos, direccion, ciudad, numero_telefono) VALUES (?, ?, ?, ?, ?, ?)', [numero_cedula, nombres, apellidos, direccion, ciudad, numero_telefono]);

            clientId = insertResult.insertId;
        } else {
            // Si el cliente existe, obtiene su ID
            clientId = existingClient[0].codigo_cliente;
        }
        //un cosa solo puede ser comprado por un solo cliente
        const [existingCar] = await db.query('SELECT * FROM compra WHERE matricula = ?', [matricula]);

        if (existingCar.length > 0) {
            // Si ya existe una compra con el mismo cliente, devuelve error
            res.status(400).json({ error: 'Ya existe una compra De este Vehículo' });
            return;
        }
        // Inserta en la tabla Compra usando el ID del cliente
        const [insertCompraResult] = await db.query('INSERT INTO compra (matricula, codigo_cliente, fecha_compra) VALUES (?, ?, ?)', [matricula, clientId, fecha_compra]);

        res.status(201).json({ id2: insertCompraResult.insertId });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/clientes', async (req, res) => {
    const query = `
      SELECT 
        c.codigo_cliente, 
        c.numero_cedula, 
        c.nombres, 
        c.apellidos, 
        c.direccion, 
        c.ciudad, 
        c.numero_telefono,
        GROUP_CONCAT(CONCAT(v.marca, ' ', v.modelo, ' (', v.matricula, ')') SEPARATOR ', ') AS vehiculos,
        COUNT(v.matricula) AS total_vehiculos
      FROM cliente c
      LEFT JOIN compra cp ON c.codigo_cliente = cp.codigo_cliente
      LEFT JOIN coche v ON cp.matricula = v.matricula
      GROUP BY c.codigo_cliente, c.numero_cedula, c.nombres, c.apellidos, c.direccion, c.ciudad, c.numero_telefono
    `;
    try {
        const [results] = await db.query(query);
        res.json(results);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/revisiones', async (req, res) => {
    const { matricula, cambio_filtro, cambio_aceite, cambio_frenos, costo_revision, fecha_hora_recepcion, fecha_hora_entrega } = req.body;
    try {
        const [result] = await db.query('INSERT INTO Revision (matricula, cambio_filtro, cambio_aceite, cambio_frenos, costo_revision, fecha_hora_recepcion, fecha_hora_entrega) VALUES (?, ?, ?, ?, ?, ?, ?)', [matricula, cambio_filtro, cambio_aceite, cambio_frenos, costo_revision, fecha_hora_recepcion, fecha_hora_entrega]);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/mantenimientos/:matricula', async (req, res) => {
    const { matricula } = req.params;

    const query = `
      SELECT 
        r.codigo_revision, 
        r.matricula, 
        r.cambio_filtro, 
        r.cambio_aceite, 
        r.cambio_frenos, 
        r.costo_revision, 
        r.fecha_hora_recepcion, 
        r.fecha_hora_entrega
      FROM revision r
      WHERE r.matricula = ?
      ORDER BY r.fecha_hora_recepcion DESC
    `;
    try {
        const [results] = await db.query(query, [matricula]);
        res.json(results);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    console.log(`Documentación disponible en http://localhost:${port}/api-docs`);
});