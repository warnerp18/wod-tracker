Skills = new Mongo.Collection('skills');
Wods = new Mongo.Collection('wods');
Lifts = new Mongo.Collection('lifts');
Wod = new Mongo.Collection('wod');

Tasks = new Mongo.Collection('tasks');


if (Meteor.isClient) {
  //Template.body.helpers({
    //workout: function () {
      //return Wods.find({});
    //},
  //});
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });
  Meteor.startup(function() {
    //Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<App />, document.getElementById("render-target"));
  });
}

//if (Meteor.isServer) {
  //Meteor.startup(function () {
    //// code to run on server at startup
  //});
//}
