var mongoose = require('mongoose');

var VacationSchema = new mongoose.Schema({
  name: String,
  location: String,
  duration: Number,
  description: String,
  season: String,
  budget: Number
});

module.exports = mongoose.model('Vacation', VacationSchema);
