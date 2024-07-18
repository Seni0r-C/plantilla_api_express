const express = require('express');
// const mysql = require('mysql2');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.use(express.json());

// Endpoints para la tabla Coche
app.post('/coches', async (req, res) => {
    const { matricula, marca, modelo, color, precio_venta } = req.body;
    try {
        const [result] = await db.query('INSERT INTO Coche (matricula, marca, modelo, color, precio_venta) VALUES (?, ?, ?, ?, ?)', [matricula, marca, modelo, color, precio_venta]);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/coches', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Coche');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Endpoints para la tabla Coche
app.post('/coches', async (req, res) => {
    const { matricula, marca, modelo, color, precio_venta } = req.body;
    try {
        const [result] = await db.query('INSERT INTO Coche (matricula, marca, modelo, color, precio_venta) VALUES (?, ?, ?, ?, ?)', [matricula, marca, modelo, color, precio_venta]);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/coches', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Coche');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/coches/:matricula', async (req, res) => {
    const { matricula } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM Coche WHERE matricula = ?', [matricula]);
        if (rows.length === 0) {
            res.status(404).json({ error: 'Coche no encontrado' });
        } else {
            res.status(200).json(rows[0]);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/coches/:matricula', async (req, res) => {
    const { matricula } = req.params;
    const { marca, modelo, color, precio_venta } = req.body;
    try {
        const [result] = await db.query('UPDATE Coche SET marca = ?, modelo = ?, color = ?, precio_venta = ? WHERE matricula = ?', [marca, modelo, color, precio_venta, matricula]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Coche no encontrado' });
        } else {
            res.status(200).json({ message: 'Coche actualizado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/coches/:matricula', async (req, res) => {
    const { matricula } = req.params;
    try {
        const [result] = await db.query('DELETE FROM Coche WHERE matricula = ?', [matricula]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Coche no encontrado' });
        } else {
            res.status(200).json({ message: 'Coche eliminado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/clientes', async (req, res) => {
    const { numero_cedula, nombres, apellidos, direccion, ciudad, numero_telefono } = req.body;
    try {
        const [result] = await db.query('INSERT INTO Cliente (numero_cedula, nombres, apellidos, direccion, ciudad, numero_telefono) VALUES (?, ?, ?, ?, ?, ?)', [numero_cedula, nombres, apellidos, direccion, ciudad, numero_telefono]);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/clientes', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Cliente');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/clientes/:cedula', async (req, res) => {
    const { cedula } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM Cliente WHERE codigo_cliente = ?', [cedula]);
        if (rows.length === 0) {
            res.status(404).json({ error: 'Cliente no encontrado' });
        } else {
            res.status(200).json(rows[0]);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/clientes/:codigo_cliente', async (req, res) => {
    const { codigo_cliente } = req.params;
    const { numero_cedula, nombres, apellidos, direccion, ciudad, numero_telefono } = req.body;
    try {
        const [result] = await db.query('UPDATE Cliente SET numero_cedula = ?, nombres = ?, apellidos = ?, direccion = ?, ciudad = ?, numero_telefono = ? WHERE codigo_cliente = ?', [numero_cedula, nombres, apellidos, direccion, ciudad, numero_telefono, codigo_cliente]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Cliente no encontrado' });
        } else {
            res.status(200).json({ message: 'Cliente actualizado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/clientes/:codigo_cliente', async (req, res) => {
    const { codigo_cliente } = req.params;
    try {
        const [result] = await db.query('DELETE FROM Cliente WHERE codigo_cliente = ?', [codigo_cliente]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Cliente no encontrado' });
        } else {
            res.status(200).json({ message: 'Cliente eliminado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpoints para la tabla Compra
app.post('/compras', async (req, res) => {
    const { matricula, codigo_cliente, fecha_compra } = req.body;
    try {
        const [result] = await db.query('INSERT INTO Compra (matricula, codigo_cliente, fecha_compra) VALUES (?, ?, ?)', [matricula, codigo_cliente, fecha_compra]);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/compras', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Compra');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/compras/:codigo_compra', async (req, res) => {
    const { codigo_compra } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM Compra WHERE codigo_compra = ?', [codigo_compra]);
        if (rows.length === 0) {
            res.status(404).json({ error: 'Compra no encontrada' });
        } else {
            res.status(200).json(rows[0]);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/compras/:codigo_compra', async (req, res) => {
    const { codigo_compra } = req.params;
    const { matricula, codigo_cliente, fecha_compra } = req.body;
    try {
        const [result] = await db.query('UPDATE Compra SET matricula = ?, codigo_cliente = ?, fecha_compra = ? WHERE codigo_compra = ?', [matricula, codigo_cliente, fecha_compra, codigo_compra]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Compra no encontrada' });
        } else {
            res.status(200).json({ message: 'Compra actualizada' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/compras/:codigo_compra', async (req, res) => {
    const { codigo_compra } = req.params;
    try {
        const [result] = await db.query('DELETE FROM Compra WHERE codigo_compra = ?', [codigo_compra]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Compra no encontrada' });
        } else {
            res.status(200).json({ message: 'Compra eliminada' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Endpoints para la tabla Revision
app.post('/revisiones', async (req, res) => {
    const { matricula, cambio_filtro, cambio_aceite, cambio_frenos, costo_revision, fecha_hora_recepcion, fecha_hora_entrega } = req.body;
    try {
        const [result] = await db.query('INSERT INTO Revision (matricula, cambio_filtro, cambio_aceite, cambio_frenos, costo_revision, fecha_hora_recepcion, fecha_hora_entrega) VALUES (?, ?, ?, ?, ?, ?, ?)', [matricula, cambio_filtro, cambio_aceite, cambio_frenos, costo_revision, fecha_hora_recepcion, fecha_hora_entrega]);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/revisiones', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Revision');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/revisiones/:codigo_revision', async (req, res) => {
    const { codigo_revision } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM Revision WHERE codigo_revision = ?', [codigo_revision]);
        if (rows.length === 0) {
            res.status(404).json({ error: 'Revision no encontrada' });
        } else {
            res.status(200).json(rows[0]);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/revisiones/:codigo_revision', async (req, res) => {
    const { codigo_revision } = req.params;
    const { matricula, cambio_filtro, cambio_aceite, cambio_frenos, costo_revision, fecha_hora_recepcion, fecha_hora_entrega } = req.body;
    try {
        const [result] = await db.query('UPDATE Revision SET matricula = ?, cambio_filtro = ?, cambio_aceite = ?, cambio_frenos = ?, costo_revision = ?, fecha_hora_recepcion = ?, fecha_hora_entrega = ? WHERE codigo_revision = ?', [matricula, cambio_filtro, cambio_aceite, cambio_frenos, costo_revision, fecha_hora_recepcion, fecha_hora_entrega, codigo_revision]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Revision no encontrada' });
        } else {
            res.status(200).json({ message: 'Revision actualizada' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/revisiones/:codigo_revision', async (req, res) => {
    const { codigo_revision } = req.params;
    try {
        const [result] = await db.query('DELETE FROM Revision WHERE codigo_revision = ?', [codigo_revision]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Revision no encontrada' });
        } else {
            res.status(200).json({ message: 'Revision eliminada' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(port, () => {
    console.log('Server running on port 3000');
});