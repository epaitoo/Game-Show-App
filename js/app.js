/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Event listener to start game
let game;

document.getElementById('btn__reset').addEventListener('click', function(){
    game = new Game();
    game.startGame();
});



document.getElementById('qwerty').addEventListener('click', function(e){
    game.handleInteraction(e.target);
});

