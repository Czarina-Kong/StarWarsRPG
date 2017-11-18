//let's make some global vars
var character = {}  //store user's character
var defender = {}   //store user's defender
var newHealth;
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
  powerUp: 10,
}
var darthS = {
  name: 'Darth Sidious',
  health: 150,
  attack: 20,
  powerUp: 20,
}
var darthM = {
  name: 'Darth Maul',
  health: 180,
  attack: 25,
  powerUp: 25,
}

//let's set some booleans for our conditionals
var charChosen = false      //did user choose character
var defenderChosen = false  //did user choose defender
var gameOver = false        //is the game over

//counters
enemies = 3 //defeat 3 enemies to win game

//let's make some global functions
function charStats(c) {                  //set character stats to chosen Character stats
  character.name = c.name
  character.health = c.health
  character.attack = c.attack
  character.powerUp = c.powerUp
}
function relocateEnemies(){                   //move remaining characters to chooseEnemy div
  $('.charOption').removeClass('charOption').addClass('enemyOption')
  $('#chooseEnemy').append($('.enemyOption'))
}
function defenderStats(d) {                   //set defender stats to chosen Defender stats
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
      charStats(obi1)                                           //set Obi1 properties to char object
      $('#Obi1').removeClass('charOption').addClass('charFight')//assign new class to Obi1
      $('#charSelected').append($('#Obi1'))                     //move Obi1 to charSelected div
      relocateEnemies()                                         //move remaining characters to chooseEnemy div
      $('#begin').hide()                                        //hide choose character heading
      $('#status').empty()                                      //display empty status div
      charChosen = true                                         //communicate that char is chosen

    } else if ((charChosen==true) && (defenderChosen==false)) { //if char chosen and defender not chosen
      defenderStats(obi1)                                       //set Obi1 properties to defender object
      $('#Obi1').addClass('defenderFight')                      //assign new class to Obi1
      $('#defender').append($('#Obi1'))                         //move Obi to defender div
      $('#status').empty()                                      //clear status
      defenderChosen = true                                     //communicate that defender is chosen
    } 
  })

  $('#Luke').on('click', function (){
    if(charChosen == false){
      charStats(luke)
      $('#Luke').removeClass('charOption').addClass('charFight')
      $('#charSelected').append($('#Luke'))
      relocateEnemies()
      $('#status').empty()
      charChosen = true
    } else if ((charChosen==true) && (defenderChosen==false)) {
      defenderStats(luke)
      $('#Luke').addClass('defenderFight')
      $('#defender').append($('#Luke'))
      $('#status').empty()
      defenderChosen = true
    } 
  })
  $('#DarthS').on('click', function (){
    if(charChosen == false){
      charStats(darthS)
      $('#DarthS').removeClass('charOption').addClass('charFight')
      $('#charSelected').append($('#DarthS'))
      relocateEnemies()
      $('#status').empty()
      charChosen = true
    } else if ((charChosen==true) && (defenderChosen==false)) {
      defenderStats(darthS)
      $('#DarthS').addClass('defenderFight')
      $('#defender').append($('#DarthS'))
      $('#status').empty()
      defenderChosen = true
    } 
  })
  $('#DarthM').on('click', function (){
    if(charChosen == false){
      charStats(darthM)
      $('#DarthM').removeClass('charOption').addClass('charFight')
      $('#charSelected').append($('#DarthM'))
      relocateEnemies()
      $('#status').empty()
      charChosen = true
    } else if ((charChosen==true) && (defenderChosen==false)) {
      defenderStats(darthM)
      $('#DarthM').addClass('defenderFight')
      $('#defender').append($('#DarthM'))
      $('#status').empty()
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
// THIS IS WRONG!!!
      $('.defenderFight').children('.health').html(defender.health)
      $('#status').html('<p>You attacked ' + defender.name + ' for ' + character.attack + ' damage.')
      character.attack = character.attack + character.powerUp
          if(defender.health > 0){
            $(character.health = character.health - defender.attack)
// THIS IS WRONG!!
        newHealth = this.value;
            $('.charFight').children('.health').html(character.health)
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
//reset health
    $('#Obi1').children('.health').html(obi1.health)
    $('#Luke').children('.health').html(luke.health)
    $('#DarthS').children('.health').html(darthS.health)
    $('#DarthM').children('.health').html(darthM.health)
//reset classes so thumbnails are in correct divs
    $('.thumbnail').removeClass('charFight defenderFight enemyOption').addClass('charOption').show()
    $('#chooseChar').append($('.charOption'))
//show begining directions hide restart button and clear status div
    $('#begin').show()
    $('#restart').hide()
    $('#status').empty()
//reset vars
    character = {}
    defender = {}
    charChosen = false
    defenderChosen = false
    gameOver = false
    enemies = 3
  })
})


