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
        let phraseLetters = this.phrase.split('');
        let matchLetters = phraseLetters.filter(letter => letter !== ' ');
        
        console.log(matchLetters.includes(letter));  
    }



}
