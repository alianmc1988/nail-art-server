const mongoose = require ('mongoose');
const url_DB = 'mongodb://localhost/nailStyle_db';
const objConfig = { useNewUrlParser: true, useUnifiedTopology: true };



mongoose.connect(url_DB, objConfig)
    .then(db=> {
            console.log('DB is connected')
            })
    .catch(err=> {
    console.log(err);
    return err
    });
    


module.exports = mongoose;

