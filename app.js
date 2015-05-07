/*

1. create board and board object

2. create turn logic

3. Create visual representation of the resources on the board (basically )

turn seq
-alert turncount
-roll dice
-return value
-return # of resources
-buildphase(select space)
-end turn

*/

//1
var gameBoard = {
  turnCount : 0,
  p1:{
    points: 0,
    resource: 1,
  },
  p2:{
    points: 0,
    resource: 0,
  },
  spaces: {
    space1 : {
    resource:true,
    house: "p1",
    },
    space2: {
    resource:true,
    house: "p1",
    },
  }

}

var alertTurnCount = function(){
  console.log(gameBoard.turnCount);
  gameBoard.turnCount ++;
}

var rollDice = function(){
  var roll = Math.floor(Math.random()* 9 + 1);
  console.log("You rolled a", roll);
}

var returnResources = function(player){
  for(var key in gameBoard.spaces){
    if(gameBoard.spaces[key].house === player){
      gameBoard[player].points += 1;
      console.log(gameBoard[player].points);
    }
  }
}

var buildPhase = function(player){
  var userInput = prompt("do you want to build? you have " + gameBoard[player].resource + " resources. (y/n)");
  if(userInput === y){
    var inputSpace = prompt("Enter the Square that you want to place on");
    if (inputSpace === undefined || gameBoard.spaces[inputSpace].house !== undefined){
      // ask for another space
    } else {
      //space gets filled with the players building
    }
  }
}

var endTurn = function (){

}



alertTurnCount();
rollDice();
returnResources("p1");
buildPhase("p1");
