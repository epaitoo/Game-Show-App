/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

     /**
    * Display phrase on game board
    */
   addPhraseToDisplay() {
        
    for (let i = 0; i < this.phrase.length; i++) {
        this.phrase[i].split('');
        const li = document.createElement('li');
        li.textContent = this.phrase[i];

        if (this.phrase[i] === ' ') {
            li.className = `space`;
        } else {
            li.className = `hide letter ${this.phrase[i]}`;
        }

        document.getElementById('phrase').appendChild(li);
    }
   
    }

    
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        for (letter of this.phrase) {
            if (letter === this.phrase) {
                return letter;
            }

        }
    };

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
        const boardLetters = document.getElementsByClassName('hide'); //selects the DOM elements with the class of hide

        for (let i = 0; i < this.phrase.length; i++) {
            
            for (let i = 0; i < boardLetters.length; i++) { //loop for every element with the class
            }

            if (letter === this.phrase[i]) { //checks if letter matches the phrase letter
                boardLetters[i].className = 'show' //changes the element className to 'show'
            } else {
                boardLetters[i].className = 'hide';
            }

            }
        };
}
