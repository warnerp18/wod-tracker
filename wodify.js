Wods = new Mongo.Collection('wods');

if (Meteor.isClient) {
  Template.body.helpers({
    workout: function () {
      return Wods.find({});
    }
  });
  //Template.addWod.helpers({
    //wods: function(){
      //return Wods.find({});
    //}
  //});

  Template.addWod.events({
    'submit .add-wod': function (e) {
      e.preventDefault();
      var movement = [];
      $('#movement input').each( function(i, node){
        console.log(node.value);
        movement.push(node.value);

      });
      Wods.insert({
        wodname: e.target.wodname.value,
        movement: movement,
        createdAt: new Date(),
      });
    },

    'click .add-more-movements': function(){
      var newField = '<input type="text" name="addmovement" placeholder="Movement name"/>';
      $('#movement').append(newField);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
