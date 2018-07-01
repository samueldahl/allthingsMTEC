var gamebox = document.getElementById("gamebox");
bamebox.innerHTML = "<a href ='javascript: mygame.rungame()'>Start Game</a>";

var Game = function(){

    this.rungame = function(){
        console.log('game is running')
    }
}
var mygame = new Game();

document.createElement()