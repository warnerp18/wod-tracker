  Template.addWodForm.events({
    'change #typeSelection': function(e, template){

      var getWorkoutType = template.$('#typeSelection').val();
      Session.set('wod', getWorkoutType);
      Session.set('skill', getWorkoutType);
      Session.set('lift', getWorkoutType);
      $('.liftTemplate-container').remove();
    },


    'submit .add-wod-form': function (e) {
      e.preventDefault();
      var movement = [];
      $('#movement input.movement').each( function(i, node){
        movement.push(node.value);
      });
      var result= [];
      $('#movement input.result').each(function(i, node){
        result.push(node.value);
      });
      var addMovement = [];
      $('#movement input.addmovement').each( function(i, node){
        addMovement.push(node.value);
      });
      var addResult = [];
      $('#movement input.addresult').each( function(i, node){
        addResult.push(node.value);
      });

      Wods.insert({
        wodname: e.target.wodname.value,
        movement: movement,
        addMovement: addMovement,
        result: result,
        addResult: addResult,
        createdAt: new Date(),
      });
    },

  });


  Template.addWodForm.helpers({
    wodResult: function(doc){
      //console.log(Wods.find({id: Session.get('id')}).fetch());
      return Wods.findOne({wodname: 'murph'});
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
