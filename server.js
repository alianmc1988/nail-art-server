// class //Server generated
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

// =====Middlewares====
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname));


//=============Routes============
app.get('/', (req, res) => {
    return res.send('<h2>Welcome to Express App<h2>');
})





// ======DB_Starting=============
const {mongo} = require('./src/database/db')

// ======Server Configs==========
var Port = process.env.PORT || 3000;
var IP = process.env.IP || '127.0.0.1';
app.listen(Port, IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log('Server is listening at ' + IP + ':' + Port);
    }
});
