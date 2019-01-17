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
 }