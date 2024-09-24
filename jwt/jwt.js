const jwt = require('jsonwebtoken');
const { LLAVE } = require('../.env');

exports.autenticar = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ exito: false, mensaje: 'No se ha autenticado' });
    jwt.verify(token, LLAVE, (err, decoded) => {
        if (err) return res.status(401).json({ exito: false, mensaje: 'No se ha autenticado' });
        req.user = decoded;
        next();
    });
};