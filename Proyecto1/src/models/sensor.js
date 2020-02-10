const mongoose = require('mongoose');
const { Schema } =mongoose;

const sensor = new Schema ({
    arduino: String,
    user: String,
    temperatura: Number,
    humedad: Number,
    latitud: Number,
    longitud: Number,
    fecha: Date

});

module.exports=mongoose.model('Sensor', sensor);