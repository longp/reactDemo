var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/reactDemo')
var db = mongoose.connect;
module.exports = db
