// Initial game state
let gameState = {
    currentRoom: 'start',
    inventory: [],
    action: [],
    dialogueState: false,
    startState: false,
    journalState: false,
    windowClosed: false,
};

// Format output for command
function updateGameOutput(message, userInput = '') {
    const outputDiv = document.getElementById('textoutput');
    if (userInput) {
        // Display user input in output
        outputDiv.innerHTML += `<p><span style="color: rgb(37, 74, 194)";><strong>You:</strong> <strong><em>${userInput}</em></strong></span></p>`;
    }
    outputDiv.innerHTML += `<p>${message}</p>`;
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Function to calculate Levenshtein distance using two matrix rows
function levenshtein(str1, str2) {
    const m = str1.length;
    const n = str2.length;
 
    // Initialize two arrays to represent the matrix rows
    let prevRow = new Array(n + 1).fill(0);
    let currRow = new Array(n + 1).fill(0);
 
    // Initialize the first row with consecutive numbers
    for (let j = 0; j <= n; j++) {
        prevRow[j] = j;
    }
 
    // Dynamic programming to fill the matrix
    for (let i = 1; i <= m; i++) {
        currRow[0] = i;
 
        for (let j = 1; j <= n; j++) {
            // Check if characters at the current positions are equal
            if (str1[i - 1] === str2[j - 1]) {
                currRow[j] = prevRow[j - 1];
            } else {
                // Choose the minimum of three possible operations (insert, remove, replace)
                currRow[j] = 1 + Math.min(
                    currRow[j - 1],
                    prevRow[j],
                    prevRow[j - 1]
                );
            }
        }
 
        // Update the previous row with the current row for the next iteration
        prevRow = [...currRow];
    }
 
    // The result is the value at the bottom-right corner of the matrix
    return currRow[n];
}

// Parse user input
function parseInput() {
    const inputField = document.getElementById('userinput');
    let userInput = inputField.value.trim().toLowerCase();

    // Clear input field
    inputField.value = '';

    // Get the current room data
    const currentRoom = gameState.currentRoom;
    const roomData = gameData[currentRoom];
    if (!userInput) {
        updateGameOutput("Unable to process command.");
        return;
    }
    
    // Handle typo correction using levenshtein function
    if (!roomData.commands[userInput]) {
        let closestMatch = null;
        const threshold = 2;

        Object.keys(roomData.commands).forEach(command => {
            const distance = levenshtein(userInput, command);
            if (distance <= threshold) {
                closestMatch = command;
            }
        });

        if (closestMatch) {
            console.log(`Closest match found: ${closestMatch}`);
            userInput = closestMatch;
        }
    }

    // Check if the command exists in the current room's commands
    if (roomData.commands[userInput]) {
        const command = roomData.commands[userInput];
        if (command.action) {
            command.action();
        }
        // Check if player is moving to different room
        if (command.nextRoom) {
            gameState.currentRoom = command.nextRoom;
            updateGameOutput(command.output, userInput);
            updateGameOutput(gameData[command.nextRoom].description);
        }
        else {
            updateGameOutput(command.output, userInput);
        }
        console.log('inventory:', gameState.inventory);
        console.log('completed action:', gameState.action);
    } 
    else {
        updateGameOutput(`Unable to process command. Type 'help' to see a list of example commands.` , userInput);
    }
    }


// Event listener for "enter" key to submit command
document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('userinput'); 
    if (inputField) {
        inputField.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                parseInput();
            }
        });
    }
});