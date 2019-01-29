/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
    createPhrases() {
        const phrases = [new Phrase('A safe pair of hands'),
                         new Phrase('Back to square one'),
                         new Phrase('Love of my life'),
                         new Phrase('Get off the hook'),
                         new Phrase('Time to act')];
       return phrases;
    }


   /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
   getRandomPhrase() {
       return this.phrases[Math.floor(Math.random() * this.phrases.length)];
   }

   /**
   * Begins game by selecting a random phrase and displaying it to user
   */
   startGame() {
       document.getElementById('overlay').style.display = 'none';
       this.activePhrase = this.getRandomPhrase();
       this.activePhrase.addPhraseToDisplay();
       this.resetGame(); //calls the reset game for a new game
   };

   /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
   handleInteraction(button) {
       if (button.tagName == 'BUTTON') { //event only listen to `BUTTON` elements on click

           let letter = button.textContent
           button.disabled = true;
           
           if (!game.activePhrase.checkLetter(letter)) {
               button.className = 'wrong';
               this.removeLife();
           } else {
               button.className = 'chosen';
               game.activePhrase.showMatchedLetter(letter);
               this.checkForWin();     
               
           }
       } 

       if (this.checkForWin() == true) { //check if the user has won
           this.gameOver(true); //call the gamewon is equal to true
       } 
   
   }

 

   /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't
   won
   */
   checkForWin() {

     const hiddenLetters = document.getElementsByClassName('hide').length;

       if (!hiddenLetters) {
           return true;
       } else {
           return false;
       }

   }


   /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
   removeLife() {
     this.missed += 1;
     const img = document.querySelectorAll('img');

       for (let i = 0; i < img.length; i++) {
           if (this.missed === 1) {
               img[0].src = 'images/lostHeart.png';
           } else if (this.missed === 2) {
               img[1].src = 'images/lostHeart.png';
           } else if (this.missed === 3) {
               img[2].src = 'images/lostHeart.png';
           }  else if (this.missed === 4) {
               img[3].src = 'images/lostHeart.png';
           } else if (this.missed === 5) {
               img[4].src = 'images/lostHeart.png';
               this.gameOver(false);
           }   
       }
   }


   /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
   gameOver(gameWon) {

       const overlayDiv =  document.getElementById('overlay');
       const gameOverMessage = document.getElementById('game-over-message');
       const showAnswer = document.getElementById('show-answer');
    
       if (this.missed <= 4) {
           gameWon == true;
           overlayDiv.className = 'win';
           showAnswer.textContent = `Answer is: ${game.activePhrase.phrase}`;
           gameOverMessage.textContent = 'Great job!';
           document.getElementById('overlay').style.display = '';      
       } else {
           gameWon == false;
           overlayDiv.className ='lose';
           showAnswer.textContent = `Answer is: ${game.activePhrase.phrase}`;
           gameOverMessage.textContent = 'Sorry, better luck next time';
           document.getElementById('overlay').style.display = '';
       }
   }


   /**
    * reset the game after clicking the 'Start Button'
    * Removes all `li` elements from the Phrase `ul` element
    * Enables all of the onscreen keyboard buttons and changes it className to `key`
    * Reset all of the heart images
    */
   resetGame() {
       const ul = document.querySelector('ul');
       const li = ul.querySelectorAll('li');
       const qwertyDiv = document.getElementById('qwerty');
       const buttons = qwertyDiv.querySelectorAll('button');
       const img = document.querySelectorAll('img');

       for (let i = 0; i < li.length; i++) {
           li[i].remove();       
       }

       this.activePhrase = this.getRandomPhrase(); //shows the active phrase
       this.activePhrase.addPhraseToDisplay();

       for (let i = 0; i < buttons.length; i++) {
           buttons[i].disabled = false;
           buttons[i].className = 'key';
       }

       img.forEach(image => image.src = 'images/liveHeart.png'); //resets the heart images
 
   }



   
}