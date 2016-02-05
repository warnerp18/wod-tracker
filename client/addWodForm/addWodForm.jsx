addWodForm = React.createClass({

  render (){
  <form class="add-wod-form">
    <p>Choose what type of workout this is</p>
    <SELECT id="typeSelection" required>
      <option value="lift">Lift</option>
      <option value="skill">Skill</option>
      <option value="wod">WOD</option>
      <option value="other">Other</option>
    </SELECT>
  </form>
  },
});
