var app = app || {};
var active = active || {};

app.addVacationView = Backbone.View.extend({
  el: $("#vacation_tag"),
  events: {
    'click button': 'addVacation'
  },
  intialize: function() {
    console.log("add VacationView initialized");
  },
  addVacation: function() {
    var vacation = {
      name: $("#vacation_name").val(),
      location: $("#vacation_location").val(),
      duration: $("#vacation_duration").val(),
      description: $("#vacation_description").val(),
      season: $("#vacation_season").val(),
      budget: $("#vacation_budget").val()
    }
    console.log(vacation);
    this.collection.create(vacation);
  }
});
