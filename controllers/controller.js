const db = require('../db');
const jwt = require('jsonwebtoken');
const { LLAVE } = require('../.env');

exports.auth = (req, res) => {
    const { user, password } = req.body;
    db.query('SELECT * FROM users WHERE user = ? AND password = ?', [user, password], (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            res.status(401).json({
                exito: false,
                mensaje: 'Usuario o contraseña incorrectos'
            });
        } else {
            const token = jwt.sign({ user, password }, LLAVE);
            res.json({
                exito: true,
                mensaje: 'Usuario autenticado',
                token
            });
        }
    });
};


exports.algo = (req, res) => {
    res.send('Hola mundo desde el controlador');
};