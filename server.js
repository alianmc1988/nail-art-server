// class //Server generated
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
//var fs = require('fs');
const ExpressMongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean')
var app = express();
//passport
//const passport = require ('passport');

// =====Server Config===========
var Port = process.env.PORT || 3000;
var IP = process.env.IP || 'localhost';

app.set('port', Port)

// ======DB_Starting=============
const DB = require ('./src/database/db');


// =====Middlewares====
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors({
        origin:['http://localhost:4200', 'http://127.0.0.1:4200'],
        credentials:true
    }));
    app.use(ExpressMongoSanitize());
    app.use(xss());
    app.use(morgan('dev'));
    //session
    //app.use(passport());
    
    
    



//=============Routes============
app.use('/api/services', require('./src/routes/servicesRoutes'));
app.use('/api/appointments', require('./src/routes/appointmentRoutes'));
app.use('/api/blog', require('./src/routes/blogRoutes'));
app.use('/api/login', require('./src/routes/userRoutes'));


// ======Server Configs==========


app.listen(app.get('port'), IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log('Server is listening at ' + IP + ':' + app.get('port'));
    }
});
