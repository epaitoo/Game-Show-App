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

            const phraseDiv = document.getElementById('phrase');
            phraseDiv.querySelector('ul').appendChild(li);

        }
       
    }


    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        const phraseLetters = this.phrase.split('');
        const matchLetters = phraseLetters.filter(letter => letter !== ' ');
        
        if (matchLetters.includes(letter)) {
            return true;
        } else { 
            return false;
        }
 
    }

   
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const ul = document.querySelector('ul');
        const li = ul.querySelectorAll('li');

        for (let i = 0; i < li.length; i++) {
            if (letter === li[i].textContent) {
                li[i].className = 'show';
            }
        }
    }


 }