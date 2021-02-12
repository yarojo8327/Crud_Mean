const express = require('express');
const router = express.Router();
const Auto = require('../model/auto');

router.get('/listaAutos', async (req, res) => {
    const autos = await Auto.find();
    res.send(autos);
});

router.post('/', async (req, res) => {
    const auto = new Auto({
        marca: req.body.marca,
        modelo: req.modelo,
        color: req.color,
        precio: req.precio
    });

    const resultado = await Auto.save();
    res.status(200).send(resultado);
});

module.exports = router;