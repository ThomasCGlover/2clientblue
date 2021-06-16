import React from 'react'
// import {Grid} from '@material-ui.com/components/'

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: "maroon",
          backgroundColor: "maroon",
          height: 5
      }}
  />
);


const FAQ = (props) =>{
return(<div>
<h1 Text style={{textAlign: 'center'}} >D &amp; D Character Creator</h1>
<h2 Text style={{textAlign: 'center'}} >FAQ</h2>
<ColoredLine />

<dl class="row" Text style={{textAlign: 'center'}}>
  <h3>Purpose of this site:</h3>
  <p>For players or storytellers to be able to create a secure account 
  and store their various characters, including common attribute values. 
</p>
<dl class="row"></dl>
  <h3>Create, Edit, and Delete Characters</h3>
  <p>
    <p>Create virtually unlimited hordes of characters, edit them as-needed and delete the ones you no longer need to reference.</p>
  </p>

  <h3>Add Real Depth to Your Character Data</h3>
  <p>Each character you create can include a description as elaborate as you would 
  like to make it. Characters can also be assigned to specific campaigns.</p>

  <h3>Character Values that can be stored here include:</h3>
  <dd>
    <dl class="row">
      <h3>Classes</h3>
      <dd class="col-sm-8">Bard</dd>
      <dd class="col-sm-8">Cleric</dd>
      <dd class="col-sm-8">Druid</dd>
      <dd class="col-sm-8">Fighter</dd>
      <dd class="col-sm-8">Monk</dd>
      <dd class="col-sm-8">Paladin</dd>
      <dd class="col-sm-8">Ranger</dd>
      <dd class="col-sm-8">Rouge</dd>
      <dd class="col-sm-8">Sorcerer</dd>
      <dd class="col-sm-8">Warlock</dd>
      <dd class="col-sm-8">Wizard</dd>
    </dl>
    <dl class="row">
      <h3>Races</h3>
      <dd class="col-sm-8">Dwarf</dd>
      <dd class="col-sm-8">Elf</dd>
      <dd class="col-sm-8">Halfling</dd>
      <dd class="col-sm-8">Human</dd>
      <dd class="col-sm-8">DragonBorn</dd>
      <dd class="col-sm-8">Gnome</dd>
      <dd class="col-sm-8">Half-Elf</dd>
      <dd class="col-sm-8">Half-Orc</dd>
      <dd class="col-sm-8">Tiefling</dd>
    </dl>
    <dl class="row">
        <h3>Abilities (d20 system)</h3>
        <dd class="col-sm-8">Charisma</dd>
        <dd class="col-sm-8">Constitution</dd>
        <dd class="col-sm-8">Dexterity</dd>
        <dd class="col-sm-8">Strength</dd>
        <dd class="col-sm-8">Wisdom</dd>
    </dl>
  </dd>
</dl>

</div>)
}
export default FAQ;