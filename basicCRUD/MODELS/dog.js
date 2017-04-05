var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DogSchema   = new Schema({
    name: String
    type: String
});

module.exports = mongoose.model('Dog', DogSchema);