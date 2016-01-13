  Template.addWodForm.events({
    'submit .add-wod-form': function (e) {
      e.preventDefault();
      var movement = [];
      $('#movement input.movement').each( function(i, node){
        //console.log(node.value);
        //console.log('hello');
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

    'click .add-more-movements': function(){
      var newField = '<div><input type="text" class="addmovement" name="addmovement" placeholder="Movement name"/> <input type="text" class="addresult" name="addresult" placeholder="Enter your result"/></div>';
      $('#movement').append(newField);
    }
  });
  Template.addWodForm.helpers({
    var selectListVal = $('#workoutSelection').val();
    console.log(selectListVal);
  })
