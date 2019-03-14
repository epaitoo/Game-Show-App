# GAME SHOW APP

This project focuses on ***OOP (Object Oriented Programming) in JavaScript.***

In this project, I created a browser-based, word guessing game called ***"Phrase Hunter."*** 
I used JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

Using JavaScript, I created two JavaScript classes with specific properties and methods.

The classes are: ***GAME Class and PHRASE CLASS***

Game class manages the game, and the Phrase class helps with creating an array of Phrase objects.

the code chooses a random phrase, split the phrase into letters, and put those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase.

If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. 

If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, it disables that letter on the onscreen keyboard to avoid selecting it twice.


## **Project Requirements**

* Includes constructor which accepts a phrase
* Includes addPhraseToDisplay() method which shows the phrase on the gameboard
* Includes checkLetter() method which checks if a letter is in the phrase
* Includes showMatchedLetter() method which reveals the letter(s) on the board that matches the player's selection
* Includes a constructor that adds a missed property, and a phrases property containing an array of phrases
* Phrases should only include spaces and letters
* Includes getRandomPhrase() method to randomly retrieve one phrase from the phrases array
* Includes checkForWin() method to see if the player has guessed all letters in the phrase
* Includes a removeLife() method to remove a life from the player, update the game board, and check to see if player loses game
* Includes gameOver() method to display a final win or lose message
* Includes startGame() method to get a random phrase and display it
* Includes resetDisplay() function which hides the start screen overlay
* Includes markButton() function which is called when player selects a letter. It disables the button on the onscreen keyboard and calls the  handleInteraction() method of the Game class
* Clicking the "Start Game" button calls the resetDisplay() function, creates a new Game object, and starts the game
* Event listeners on onscreen keyboard buttons, so that clicking a button calls the markButton() function
* If a player makes 5 wrong guesses, the “lose” overlay is shown
* If all the letters in the phrase are shown, the “win” overlay is shown


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development

### Doenloading

Click on the 'Clone or download' button and select 'Download Zip.'

### Installing

Step 1: Unzip the zip file.

Step 2: Open the folder in a text editor.

Using a text editor, you can view/edit the code or preview the app in a browser.
