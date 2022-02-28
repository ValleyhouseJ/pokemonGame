let blinker; // Blinking input marker
let inputField; // Input field
let userInput; // User input
let storage; // Storage
let option; // Current position
let route; // Route taken

const whatToDo = (userInput) => {
    userInput = userInput.toLowerCase();
    switch (userInput) {
        case "n":
        case "no":
            console.log("You typed in no");
            break;
        
        case "y":
        case "yes":
            console.log("You typed in yes");
            break;

        case "help":
            console.log("You typed in help");
            break;
        
        case "see storage":
        case "storage":
            console.log("You typed in storage");
            break;

        case "right":
            console.log("You typed in right");
            break;

        case "left":
            console.log("You typed in left");
            break;

        case "forward":
            console.log("You typed in forward");
            break;
        
        default:
            console.log("I didn't understand");
    }
}

const functionName = () => {
    
}