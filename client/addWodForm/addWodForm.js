  Template.addWodForm.events({
    'submit .add-wod-form': function (e) {
      e.preventDefault();
      var movement = [];
      $('#movement input').each( function(i, node){
        console.log(node.value);
        movement.push(node.value);
      });

      Wods.insert({
        movement: movement,
        wodname: e.target.wodname.value,
        createdAt: new Date(),
      });
    },

    'click .add-more-movements': function(){
      var newField = '<input type="text" name="addmovement" placeholder="Movement name"/>';
      $('#movement').append(newField);
    }
  });
