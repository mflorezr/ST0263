const express = require('express');
const morgan= require('morgan');
const mongoose = require ('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/sensor-db')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

//Settings
app.set('port' ,process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/sensor',require('./routes/sensor'));

//Static filesç
app.use(express.static(__dirname+'/public'));

//Server is listening
app.listen(app.get('port'),() =>{
    console.log('server on port', app.get('port'));
});