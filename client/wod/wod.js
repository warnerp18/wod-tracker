Template.wod.events({
  'click .add-more-movements': function(){
    var newField = '<div><input type="text" class="addmovement" name="addmovement" placeholder="Movement name"/></div>';
    $('#movement').append(newField);
  },

  'submit form.add-wod-form-template': function (e) {
    console.log('hello');
    debugger;
    e.preventDefault();
    var wodName = [];
    $('input.wodname').each( function(i, node){
      wodName.push(node.value);
    });
    var girl = [];
    $('input.girl').each( function(i, node){
      girl.push(node.value);
    });
    var wodType = [];
    $('input.wodtype').each( function(i, node){
      wodType.push(node.value);
    });
    var movement = [];
    $('input.movement').each( function(i, node){
      movement.push(node.value);
    });
    var result = [];
    $('input.result').each(function(i, node){
      result.push(node.value);
    });
    var addMovement = [];
    $('input.addmovement').each(function(i, node){
      addMovement.push(node.value);
    });

    Wod.insert({
      wodName: wodName,
      wodType: wodType,
      girl: girl,
      movement: movement,
      result: result,
      addMovement: addMovement,
      createdAt: new Date(),
    });
  },
});
