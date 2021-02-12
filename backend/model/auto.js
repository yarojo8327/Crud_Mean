// importacion de mongoose
const mongoose = require('mongoose');
const esquemaAuto = new mongoose.Schema({
    marca: {
        type: String,
        default: "generico"
    },
    modelo: Number,
    color: String,
    precio: Number,
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
});

//Creamos el exports
const auto = mongoose.model("auto", esquemaAuto);
module.exports = auto;