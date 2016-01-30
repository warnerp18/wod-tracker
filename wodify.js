Skills = new Mongo.Collection('skills');
Wods = new Mongo.Collection('wods');
Lifts = new Mongo.Collection('lifts');

if (Meteor.isClient) {
  Template.body.helpers({
    workout: function () {
      return Wods.find({});
    },
    skillmovement: function(){
      return SKills.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
