Template.wod.events({
  'click .add-more-movements': function(){
    var newField = '<div><input type="text" class="addmovement" name="addmovement" placeholder="Movement name"/></div>';
    $('#movement').append(newField);
  },
})
