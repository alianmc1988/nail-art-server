// class //Server generated
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
var fs = require('fs');


var app = express();

// =====Server Config===========
var Port = process.env.PORT || 3000;
app.set('port', Port)

// ======DB_Starting=============
const {mongo} = require('./src/database/db');


// =====Middlewares====
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


//=============Routes============
app.use('/api/services', require('./src/routes/servicesRoutes'));
app.use('/api/appointments',require('./src/routes/appointmentRoutes'));







// ======Server Configs==========

var IP = process.env.IP || '127.0.0.1';
app.listen(app.get('port'), IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log('Server is listening at ' + IP + ':' + app.get('port'));
    }
});
