  Template.addWodForm.events({
    'change #typeSelection': function(e, template){

      var getWorkoutType = template.$('#typeSelection').val();
      Session.set('wod', getWorkoutType);
      Session.set('skill', getWorkoutType);
      Session.set('lift', getWorkoutType);
      $('.liftTemplate-container').remove();
    },
});

  Template.addWodForm.helpers({
    wodResult: function(doc){
      return Wods.find().fetch();
    },
    renderWodForm: function(){
      if(Session.get('wod') === 'wod'){
        return Session.get('wod');
      }
    },
    renderSkillForm: function(){
      if(Session.get('skill') === 'skill'){
        return Session.get('skill');
      }
    },
    renderLiftForm: function(){
      if(Session.get('lift') === 'lift'){
        return Session.get('lift');
      }
    },
  });
