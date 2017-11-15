//let's make some globals

var character = {}  //store user's character
var defender = {}   //store user's defender

//character objects and their properties

var obi1 = {              //object
  name: 'Obi-Wan Kenobi', //property: 'value'
  health: 120,
  attack: 8,
  powerUp: 8,
}

var luke = {
  name: 'Luke Skywalker',
  health: 100,
  attack: 5,
  powerUp: 5,
}

var darthS = {
  name: 'Darth Sidious',
  health: 150,
  attack: 20,
  powerUp: 20,
}

var darthM = {
  name: 'Darth Maul',
  health: 150,
  attack: 25,
  powerUp: 25,
}

//let's set some booleans

var characterChosen = false //did user choose character
var defenderChosen = false  //did user choose defender
var gameOver = false        //is the game over





//make page ready to run JS
//hide restart button
//determine user character
//reset character
//function to make chosen character move to charSelected div
//reset character value to global object variable
$(document).ready(function(){
  $('#restart').hide()

})



//when clicked on
//and other characters move to enemyOptions div
//prompt user to select an enemy in message div
//function to make chosen enemy move to defender div
//reset defender value to global object variable
//move other characters to enemyOptions div
//when defender chosen by click
//prompt user to press powerUp button

//function to subtract chosen character powerUp from chosen enemy health
//subtract defender counter powerUp from chosen character health
//if character health < enemy health, player looses
//prompt player to play again
//if character health > enemy health, prompt player to choose another enemy
//if character health > enemy health and no enemies left, player wins
//alert player they win and prompt to play again

//function to reset game
//reset all character values global object variable



