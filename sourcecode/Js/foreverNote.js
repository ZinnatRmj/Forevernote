var ForeverNoteApp = new Backbone.Marionette.Application();

var ForeverNoteController = Backbone.Marionette.Controller.extend({
  displayNotes : function(){
    console.log("I will display notes...");
  }
});

var ForeverNoteRouter = Backbone.Marionette.AppRouter.extend({
  controller : ForeverNoteController,
  appRoutes : {
    " " : "displayNotes"
  }
});

ForeverNoteApp.addInitializer( function() {
  var controller = new ForeverNoteController();
  var router = new ForeverNoteRouter ({ controller : controller });
  console.log(" addInitializer ");
});

ForeverNoteApp.on( 'initialize:after', function() {
  if (Backbone.history) {
    Backbone.history.start();
    console.log("Initialize:after");
  }
});

ForeverNoteApp.start();
