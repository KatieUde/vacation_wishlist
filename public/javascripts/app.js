var app = app || {};
var active = active || {};

app.Model = Backbone.Model.extend({

});

app.Collection = Backbone.Collection.extend({
  model: app.Model,
  url: '/vacations',
  Initialize: function() {
    this.on('change', function(){
      console.log('Our vacations collection has changed');
      var view = new app.CollectionView({
        collection: self
      });
      this.on('sync', function(){
        console.log('Our collection synced with the vacations API');
        var view = new app.CollectionView({
          collection: self
        });
      });
      this.fetch();
    });
  } // end inititialize function
});

Backbone.Model.idAttribute = "_id";

$(document).ready(function(){
  active.collection = new app.Collection();
  active.displayVacationView = new app.addVacationView({
    collection: active.collection
  });
});
