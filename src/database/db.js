const mongoose = require ('mongoose');
const url_DB = 'mongodb://localhost';

mongoose.connect(`${url_DB}/nailStyle_db`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db=> console.log('DB is connected'))
    .catch(err=> console.log(err));
    
module.exports = mongoose;  