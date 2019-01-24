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
                         new Phrase('Do unto others as you would have them do to you'),
                         new Phrase('Get off on the worng foot'),
                         new Phrase('Nothing is certain but death and taxes')];
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
    };

   
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
   checkForWin() {

    let phrasesLetters = this.phrases;
    let matchLetters = phrasesLetters.filter(letter => letter !== ' ');

    if (matchLetters.length == 0) {
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
            const tries = document.getElementsByClassName('tries');

        for (heart of tries) {
            document.getElementsByClassName('tries').src = 'images/lostHeart.png'; //replaces the image src to `images/lostHeart.png`
            this.missed += 1;
        }

        if (this.missed == 5) {
                this.gameOver(gameWon == false);
        }

    }


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
   gameOver(gameWon) {

    if (gameWon === true) {
        document.getElementById('game-over-message').textContent = "You've Won!";
        document.getElementById('overlay').className = 'win';
    } else {
        document.getElementById('game-over-message').textContent = "You've Lost!";
        document.getElementById('overlay').className = 'lose';
    }
    return gameWon;
}

    
}