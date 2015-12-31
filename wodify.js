Wods = new Mongo.Collection('wods');

if (Meteor.isClient) {
  Template.body.helpers({
    workout: function () {
      return Wods.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
