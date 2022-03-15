'use strict';

/* The blinking square */
let blinker = document.querySelector(".fa-square-full"); // Grab the square
// Create a function to make it blink (advanced)
setInterval(function() {
    blinker.classList.toggle("blink");
}, 600);
// Variables
let userInputField = document.querySelector(".userInputField"); // Grab the userInputField 
let userInput = []; // Assign an empty array to it

let ourTerminal = document.querySelector(".terminal"); // Create a variable named ourTerminal and store the .terminal element

let option = 0; // set equal to 0
let collectPossible = false; // create a variable called collectPossible and set it to false
let route = []; // set equal to an empty array

let pokemon = ["Pikachu"]; // create a new variable called pokemon and set it equal to an array containing "Pikachu"
let pokeballCount = 2;// create a new variable called pokeballCount and set it equal to 2
let berryCount = 0;// create a new variable called berryCount and set it equal to 0

const updatePage = (userInput) => {
    let newParagraph = document.createElement("p");
    newParagraph.innerHtml = userInput;
    ourTerminal.appendChild();
}

window.addEventListener("keydown", function(e) {
    switch (e.key) {
        case "a":
            userInput.push(e.key);
            break;

        case "b":
            userInput.push(e.key);
            break;

        case "c":
            userInput.push(e.key);
            break;

        case "d":
            userInput.push(e.key);
            break;

        case "e":
            userInput.push(e.key);
            break;

        case "f":
            userInput.push(e.key);
            break;

        case "g":
            userInput.push(e.key);
            break;

        case "h":
            userInput.push(e.key);
            break;

        case "Enter":
            break;
    
        default:
            break;
    }
});

const whatToDo = (userInput) => {
    userInput = userInput.toLowerCase();
    switch (userInput) {
        case "n":
        case "no":
        case "nope":
            break;
        
        case "y":
        case "yes":
            break;

        case "help":
            break;
        
        case "see storage":
        case "storage":
            pokemon.forEach(pokemon => {
                updatePage(pokemon);
            });
            updatePage(`${pokeballCount} pokeballs`);
            updatePage(`${berryCount} berries`);
            break;

        case "right":
            break;

        case "left":
            break;

        case "forward":
            break;

        case "back":
            break;

        case "enter":
            break;

        case "battle":
        case "battle leader":
            break;

        case "catch":
        case "catch pokemon":
            break;

        case "berries":
        case "collect berries":
            break;

        case "pokeballs":
        case "collect pokeballs":
            break;

        default:
            updatePage("I didn't understand");
    }
}
