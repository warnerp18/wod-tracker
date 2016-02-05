Template.skill.events({
  'submit button': function (e) {
    console.log('hello');
    debugger;
    e.preventDefault();
    var skill = [];
    $('input.skillName').each( function(i, node){
      skill.push(node.value);
    });
    var skillResult= [];
    $('input.skillResult').each(function(i, node){
      skillResult.push(node.value);
    });

    Skills.insert({
      skill: skill,
      skillResult: skillResult,
      createdAt: new Date(),
    });
  },
});
