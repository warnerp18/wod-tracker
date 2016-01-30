Template.lift.events({
    'submit .add-wod-form': function (e) {
      console.log('test');
      debugger;
      e.preventdefault();
      var lift = [];
      $('#lift-input input.liftname').each( function(i, node){
        lift.push(node.value);
        console.log(lifts.push(node.value));
      });
      var liftresult= [];
      $('#lift-input input.liftresult').each(function(i, node){
        liftresult.push(node.value);
      });

      lifts.insert({
        lift: lift,
        liftresult: liftresult,
        createdat: new date(),
      });
    },
});
