/*

One Player -

WELCOME PHASE - Introduce player to game and set board.
  - Set new game board and adjust board object accordingly
  -Allow them to place first building (with build class on game board)

TURN PHASE - list the turn number
  - look at object and return number
  - increment turn
ROLL PHASE - allow player to roll dice
  - roll random number and print it to school
RESOURE RETURN PHASE - return number of resources

Two Player -

1. Welcome
2. Player 1 turn.
(build, roll, resource, build) - switch -checkWinner
3. Player 2 turn
(build, roll, resource, build) - switch - checkWinner

features
- adjust the roll function to add resource to both Ps DONE
- add instructions during welcome phase
- hover function
- add indexes for squares
- expand the board to 25 sq DONE
- * add cant play next to other players peice
- CSS styling

*/

//DATA STORAGE FOR GAME

var gameBoard = {
  turnCount : 0,
  p1:{
    points: 0,
    resource: 0,
  },
  p2:{
    points: 0,
    resource: 0,
  },
  spaces: {
    space1 : {
    resource:false,
    house: false,
    },
    space2: {
    resource:false,
    house: false,
    },
    space3: {
    resource:false,
    house: false,
    },
    space4: {
    resource:false,
    house: false,
    },
    space5: {
    resource:false,
    house: false,
    },
    space6: {
    resource:false,
    house: false,
    },
    space7: {
    resource:false,
    house: false,
    },
    space8: {
    resource:false,
    house: false,
    },
    space9: {
    resource:false,
    house: false,
    },
    space10: {
    resource:false,
    house: false,
    },
    space11: {
    resource:false,
    house: false,
    },
    space12: {
    resource:false,
    house: false,
    },
    space13: {
    resource:false,
    house: false,
    },
    space14: {
    resource:false,
    house: false,
    },
    space15: {
    resource:false,
    house: false,
    },
    space16: {
    resource:false,
    house: false,
    },
    space17: {
    resource:false,
    house: false,
    },
    space18: {
    resource:false,
    house: false,
    },
    space19: {
    resource:false,
    house: false,
    },
    space20: {
    resource:false,
    house: false,
    },
    space21: {
    resource:false,
    house: false,
    },
    space22: {
    resource:false,
    house: false,
    },
    space23: {
    resource:false,
    house: false,
    },
    space24: {
    resource:false,
    house: false,
    },
    space25: {
    resource:false,
    house: false,
    },
    space26: {
    resource:false,
    house: false,
    },
    space27: {
    resource:false,
    house: false,
    },
    space28: {
    resource:false,
    house: false,
    },
    space29: {
    resource:false,
    house: false,
    },
    space30: {
    resource:false,
    house: false,
    },
    space31: {
    resource:false,
    house: false,
    },
    space32: {
    resource:false,
    house: false,
    },
    space33: {
    resource:false,
    house: false,
    },
    space34: {
    resource:false,
    house: false,
    },
    space35: {
    resource:false,
    house: false,
    },
    space36: {
    resource:false,
    house: false,
    },
  }

};



//UNIVERSAL FUNCTIONS
var setGameBoard = function(){

  for(var i = 0; i < 16; i++){
    var randomspace = "space" + Math.floor(Math.random()* 24 + 1);
    gameBoard.spaces[randomspace].resource = true;
    var $randomspace = "#" + randomspace;
    $($randomspace).addClass('randomResource');
  }
    $('.turn, .return, .build, .build1').hide();
    gameBoard.turnCount = 1;
    gameBoard.p1.resource = 4;
    gameBoard.p2.resource = 4;
};

var switchPlayer = function(){
  if(player === "p1"){
    $('.btn').css('background-color', 'coral');
    $('span .play').css('color', 'coral');
    return "p2";
  } else if (player === "p2"){
    $('.btn').css('background-color', 'lightgreen');
    $('span .play').css('color', 'lightgreen');
    return "p1";
  }
};

$('.hover').click(function(){
  $(this).addClass('building');
  var space = $(this).attr('id');
  gameBoard.spaces[space].house = player;
});

var rollDice = function(){
  var roll = Math.floor(Math.random() * 16 + 1);
  return roll;
};

var returnResources = function(player, number){
  var space = "space" + number;

  var pointCount = 0;

    if(gameBoard.spaces[space].house){
      var resident = gameBoard.spaces[space].house;
      gameBoard[resident].resource += 1;
      alert(resident + ' grabbed a resource!');
    }
  return pointCount;
};

var checkWinner = function(){
  if(gameBoard.p1.points >= 3){
    alert("player one wins");
  } else if (gameBoard.p2.points >= 3){
    alert("player one wins");
  }
};


var buildPhase = function(player){
  var userInput = prompt("do you want to build? you have " + gameBoard[player].resource + " resources. (y/n)");
  if(userInput === 'y'){
    var inputSpace = prompt("Enter the Square that you want to place on");
    while (gameBoard.spaces[inputSpace].house !== undefined){
      inputSpace = prompt('That space is taken, choose another, or end your build phase. enter end to end turn or a new space in format "space1"');
    } if (inputSpace === undefined){
      var inputSpace = prompt('please enter a valid space. format is "space1, space2, etc."');
    } else if (gameBoard.spaces[inputSpace].house === undefined){
         //space gets filled with the players building
      gameBoard.spaces[inputSpace].house = player;
    }
  }
};

setGameBoard();


//TURNS

var player = "p1",
round = gameBoard.turnCount/2;



//BUILD 1

$('.welcomeB').click(function(){

//hide all control panels
  $('.turn, .return, .build, .welcome').hide();
  $('.build1').show();
  $('.board').removeClass('hidden');

//populate the text
  $('.build1 .play').html(player);
  $('.build1 .rsc').html(gameBoard[player].resource);

//change background color for player
  if(player === "p1"){
    $('.btn').css('background-color', 'lightgreen');

  } else if (player === "p2"){
    $('.btn').css('background-color', 'coral');
  }

//toggle first buildphase
  $('.board').toggleClass('building');
  $('.board').children().click(function(){

    var space = $(this).attr('id');
    // $(this).css('-webkit-animation:bounceIn');

    if(player === "p1"){
      if(gameBoard[player].resource >= 2){
        $(this).addClass('p1building');
        gameBoard.spaces[space].house = player;
        gameBoard[player].resource -=2;
        gameBoard[player].points += 1;
        $('.build1 .rsc').html(gameBoard[player].resource);
      } else {
        alert("sorry" + player + "you dont have enough resources");
      }
    } else if (player === "p2")
      if(gameBoard[player].resource >= 2){
        $(this).addClass('p2building');
        gameBoard.spaces[space].house = player;
        gameBoard[player].resource -=2;
        gameBoard[player].points += 1;
        $('.build1 .rsc').html(gameBoard[player].resource);
      } else {
        alert("sorry " + player + " you dont have enough resources");
      }
  });

});

//ROLLRETURN AND RESOURCE

$('.build1B').click(function(){

//hide panel and show new panel
  $('.build1').hide();
  $('.return').show();

//toggle build
  $('.board').toggleClass('building');

//roll dice
  var playerRoll = rollDice();
  $('.return .rl').html(playerRoll);
  $('.return .ret').html(gameBoard[player].resource);
  returnResources(player, playerRoll);

});


//BUILD PHASE

$('.returnResources').click(function(){

//hide panel and show new panel
  $('.return').hide();
  $('.build').show();

//add text to page
  $('.build .rs').html(gameBoard[player].resource);
  $('.build .pts').html(gameBoard[player].points);

});

//set final button function
  $('.buildPhase').click(function(){
      checkWinner();
      $('.turn, .return, .build, .welcome').hide();
      $('.build1').show();
      gameBoard.turnCount ++;
      player = switchPlayer();
      $('.build1 .play').html(player);
      $('.build1 .rsc').html(gameBoard[player].resource);

  });














