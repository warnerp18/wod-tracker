Template.skill.events({
  'submit .submit-skill': function (e) {
    e.preventDefault();
    var skill = [];
    $('#skill-input input.skillName').each( function(i, node){
      skill.push(node.value);
    });
    var skillResult= [];
    $('#skill-input input.skillResult').each(function(i, node){
      skillResult.push(node.value);
    });

    Skills.insert({
      skill: skill,
      skillResult: skillResult,
      createdAt: new Date(),
    });
  },
});
