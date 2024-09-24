const express = require('express');
const controller = require('../controllers/controller');
const autenticar = require('../jwt/jwt');

router.post('/auth', casoController.auth);
router.get('/coche', autenticar, controller.algo);

exports.router = router;