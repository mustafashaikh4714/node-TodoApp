var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

module.exports = {mongoose}
  
//if property and variable has same name then use {mongoose} that is ES6 feature.