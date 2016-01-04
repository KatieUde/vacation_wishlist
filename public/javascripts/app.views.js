var app = app || {};
var active = active || {};

app.addVacationView = Backbone.View.extend({
  el: $("#vacation_tag"),
  events: {
    "click button": "addVacation"
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

app.ModelView = Backbone.View.extend({
  initalize: function() {
    this.render();
  },
  render: function() {
    var data = this.model.attributes;
    var template = $("#vacation_template").html();
    var compileTemplate = _.template(template);
    var html = compileTemplate(data);
    this.$el.append(html);
  }
}); // end of ModelView Function

app.CollectionView = Backbone.View.extend({
  el: $("#vacation_list_tag"),
  initialize: function() {
    this.$el.empty();
    this.render();
  },
  render: function() {
    this.$el.empty();
    var models = this.collection.models;
    for (var model in models) {
      new app.ModelView({
        model: models[model],
        el: this.el
      })
    }
  }
})
