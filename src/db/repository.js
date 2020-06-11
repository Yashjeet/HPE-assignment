const mongoose = require('mongoose');
var url = "mongodb://mongo:27017/assignment";

mongoose.connect(url, { useNewUrlParser: true }, function (err) {
    if (err) throw err;
    else {
        console.log(`Database created!`);
    }
});