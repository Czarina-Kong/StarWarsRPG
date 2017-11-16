//let's make some global vars
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

//counters
enemies = 3 //defeat 3 enemies to win game

//let's set some booleans for our conditionals
var charChosen = false      //did user choose character
var defenderChosen = false  //did user choose defender
var gameOver = false        //is the game over

//let's make some global functions
function resetCharacter(c) {                  //set character stats to chosen Character stats
  character.name = c.name
  character.health = c.health
  character.attack = c.attack
  character.powerUp = c.powerUp
}
function relocateEnemies(){                   //move remaining characters to chooseEnemy div
  $('.charOption').removeClass('charOption').addClass('enemyOption')
  $('#chooseEnemy').append($('.enemyOption'))
}
function resetDefender(d) {                   //set defender stats to chosen Defender stats
  defender.name = d.name
  defender.health = d.health
  defender.attack = d.attack
  defender.powerUp = d.powerUp
}


//Game Time!
//make page ready for js
$(document).ready(function(){

  $('#restart').hide()                                          //hide reset button
  $('#Obi1').on('click', function (){                           //when Obi1 is clicked

    if(charChosen == false){                                    //if char not chosen
      $('#status').empty()                                      //display empty status div
      resetCharacter(obi1)                                      //set Obi1 properties to char object
      $('#begin').hide()
      $('#Obi1').removeClass('charOption').addClass('charFight')//assign new class to Obi1
      $('#charSelected').append($('#Obi1'))                     //move Obi1 to charSelected div
      relocateEnemies()                                         //move remaining characters to chooseEnemy div
      charChosen = true                                         //communicate that char is chosen

    } else if ((charChosen==true) && (defenderChosen==false)) { //if char chosen and defender not chosen
      $('#status').empty()                                      //clear status
      resetDefender(obi1)                                       //set Obi1 properties to defender object
      $('#Obi1').addClass('defenderFight')                      //assign new class to Obi1
      $('#defender').append($('#Obi1'))                         //move Obi to defender div
      defenderChosen = true                                     //communicate that defender is chosen
    } 
  })

  $('#Luke').on('click', function (){
    if(charChosen == false){
      $('#status').empty()
      resetCharacter(luke)
      $('#Luke').removeClass('charOption').addClass('charFight')
      $('#charSelected').append($('#Luke'))
      relocateEnemies()
      charChosen = true
    } else if ((charChosen==true) && (defenderChosen==false)) {
      $('#status').empty()
      resetDefender(luke)
      $('#Luke').addClass('defenderFight')
      $('#defender').append($('#Luke'))
      defenderChosen = true
    } 
  })
  $('#DarthS').on('click', function (){
    if(charChosen == false){
      $('#status').empty()
      resetCharacter(darthS)
      $('#DarthS').removeClass('charOption').addClass('charFight')
      $('#charSelected').append($('#DarthS'))
      relocateEnemies()
      charChosen = true
    } else if ((charChosen==true) && (defenderChosen==false)) {
      $('#status').empty()
      resetDefender(darthS)
      $('#DarthS').addClass('defenderFight')
      $('#defender').append($('#DarthS'))
      defenderChosen = true
    } 
  })
  $('#DarthM').on('click', function (){
    if(charChosen == false){
      $('#status').empty()
      resetCharacter(darthM)
      $('#DarthM').removeClass('charOption').addClass('charFight')
      $('#charSelected').append($('#DarthM'))
      relocateEnemies()
      charChosen = true
    } else if ((charChosen==true) && (defenderChosen==false)) {
      $('#status').empty()
      resetDefender(darthM)
      $('#DarthM').addClass('defenderFight')
      $('#defender').append($('#DarthM'))
      defenderChosen = true
    } 
  })

//when attack button clicked
//if char and defender chosen and game is not over
  //calculate character attack on defender
  //update defender health in html and status div
  //powerup character attack
        //if defender not defeated
          //calculate counterattack
          //update char health in html
                //if char not defeated--update status div
                //else--you lose
        //else
          //update enemy counter
          //hide defeated defender
          //communicate defender is not chosen
          //update status
                //if no more enemies--game over
//else if char not chosen and game not over
  //update status
//else if defender chosen and game over
  //update status
  $('#attack').on('click', function(){
    if (charChosen && defenderChosen && !gameOver) {
      defender.health = defender.health - character.attack
      $('.defenderFight').html(defender.health)
      $('#status').html('<p>You attacked ' + defender.name + ' for ' + character.attack + ' damage.')
      character.attack = character.attack + character.powerUp
      if(defender.health > 0){
        $(character.health = character.health - defender.attack)
        $('.charFight').html(character.health)
        if(character.health > 0) {
          $('#status').append('<p>' + defender.name + ' counterattacked for ' + defender.attack + ' damage.')
        } else {
          gameOver = true
          $('#status').html("<p>You fail because you don't believe.")
          $('#restart').show()
        }
      } else {
        enemies--
        $('.defenderFight').hide()
        defenderChosen = false
        $('#status').html('<p>You have defeated ' + defender.name +'. Choose another enemy.')
        if (enemies===0) {
          gameOver = true
          $('#status').html('<p>The force is strong with you.<p>Play again?')
          $('#restart').show()
        }
      }
    } else if (!charChosen && !gameOver) {
      $('#status').html('<p>Choose game character you must.')
    } else if (!defenderChosen && !gameOver){
      $('#status').html('<p>Choose enemy you must.')
    }
  })
//function to restart game
  $('#restart').on('click',function(){
    $('#Obi1').html(obi1.health)          //reset health WRONG!!!
    $('#Luke').html(luke.health)
    $('#DarthS').html(darthS.health)
    $('#DarthM').html(darthM.health)
    
    $('.thumbnail').removeClass('charFight defenderFight enemyOption').addClass('charOption').show()
    $('#chooseChar').append($('.charOption'))


    $('#restart').hide()
    $('#status').empty()

    character = {}
    defender = {}

    charChosen = false
    defenderChosen = false
    gameOver = false
    enemies = 3
  })
})


