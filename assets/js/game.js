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

var charChosen = false //did user choose character
var defenderChosen = false  //did user choose defender
var gameOver = false        //is the game over





//make page ready to run JS
//hide restart button
//determine user character
//reset character
function resetCharacter(c) {
  character.name = c.name
  character.health = c.health
  character.attack = c.attack
  character.powerUp = c.powerUp
}
function relocateEnemies(){
  $('#enemyOptions').append($('#charOptions'))
}
function resetDefender(d) {
  character.name = d.name
  character.health = d.health
  character.attack = d.attack
  character.powerUp = d.powerUp
}
//function to make chosen character move to charSelected div
//reset character value to global object variable
//when clicked on
//and other characters move to enemyOptions div
//prompt user to select an enemy in message div
//function to make chosen enemy move to defender div
//reset defender value to global object variable
//move other characters to enemyOptions div
//when defender chosen by click
//prompt user to press attack button
$(document).ready(function(){
  $('#restart').hide()
  $('#Obi1').on('click', function (){
    if(charChosen == false){
      $('#status').empty()
      resetCharacter(obi1)
      charChosen = true
      $('#charSelected').append($('#Obi1'))
      relocateEnemies()
    } else if ((charChosen==true) && (defenderChosen==false)) {
      $('#messageDiv').empty();
      resetDefender(obi1)
      defenderChosen = true
      $('#defender').append($('#Obi1'))
    } 
  })
  $('#Luke').on('click', function (){
    if(charChosen == false){
      $('#status').empty()
      resetCharacter(luke)
      charChosen = true
      $('#charSelected').append($('#Luke'))
      relocateEnemies()
    } else if ((charChosen==true) && (defenderChosen==false)) {
      $('#messageDiv').empty();
      resetDefender(luke)
      defenderChosen = true
      $('#defender').append($('#Luke'))
    } 
  })
  $('#DarthS').on('click', function (){
    if(charChosen == false){
      $('#status').empty()
      resetCharacter(darthS)
      charChosen = true
      $('#charSelected').append($('#DarthS'))
      relocateEnemies()
    } else if ((charChosen==true) && (defenderChosen==false)) {
      $('#messageDiv').empty();
      resetDefender(darthS)
      defenderChosen = true
      $('#defender').append($('#DarthS'))
    } 
  })
  $('#DarthM').on('click', function (){
    if(charChosen == false){
      $('#status').empty()
      resetCharacter(darthM)
      charChosen = true
      $('#charSelected').append($('#DarthM'))
      relocateEnemies()
    } else if ((charChosen==true) && (defenderChosen==false)) {
      $('#messageDiv').empty();
      resetDefender(darthM)
      defenderChosen = true
      $('#defender').append($('#DarthM'))
    } 
  })
})





//function to subtract chosen character powerUp from chosen enemy health
//subtract defender counter powerUp from chosen character health
//if character health < enemy health, player looses
//prompt player to play again
//if character health > enemy health, prompt player to choose another enemy
//if character health > enemy health and no enemies left, player wins
//alert player they win and prompt to play again

//function to reset game
//reset all character values global object variable

