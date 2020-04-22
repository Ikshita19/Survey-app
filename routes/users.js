const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dbnh');

let userSchema = mongoose.Schema({
  question: String,
  option: String
});

module.exports = mongoose.model('user', userSchema);