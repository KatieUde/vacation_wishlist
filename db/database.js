// mongoose is my ORM
var mongoose = require('mongoose');

// specify protocol://server/dbname
var connectionString = "mongodb://localhost/vacation_wishlist";

// physically connect to mongodb
mongoose.connect(connectionString);

// events to listen to!
mongoose.connection.on('connected', function() {
  console.log("server is up & running")
});

mongoose.connection.on('error', function(error) {
  console.log("something appears to be amiss:" + error)
});

mongoose.connection.on('disconnected', function() {
  console.log("gone on vacation, try again later")
});
