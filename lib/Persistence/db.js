var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log('Connected to MongoDB!');
});

process.on('SIGINT', function() {
    console.log('Interrupt received. Closing Mongoose connections.');
    mongoose.connection.close(function() {
        console.log('Mongoose connections closed. ');
        process.exit(0);
    });
});