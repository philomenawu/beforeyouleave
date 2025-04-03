// Call_1 Dialogue Script
const dialogue = [
    `You: Hello? This is Dr. Kui speaking.`,
    `Office: Good evening, Dr. Kui. You have a line request from the hospital.`,
    `You: Yes, please transfer it over.`,
    `Office: One moment.`,
    `.`,
    `.`,
    `.`,
    `?: ...`,
     {
        options: [
            {
                text: `You: Hello?`, 
                output: `?: `
            },
            {
                text: `You: Who is this?`, 
                output: `?: wander and find me...`
            },
        ]
     },
];

// Track current dialogue line
let dialogueIndex = 0;

// Show container
function startDialogueScene() {
    gameState.action.push('call_1');
    gameState.dialogueState = true;
    dialogueIndex = 0;
    document.getElementById('text-container').style.display = 'block';
    document.getElementById('dialogue-container').style.display = 'flex';
    document.getElementById('next-button').style.display = 'block';
    handleDialogue();
}

// Iterate through dialogue lines
function handleDialogue() {
    const dialogueContainer = document.getElementById('dialogue-container');
    const textContainer = document.getElementById('text-container');
    const nextButton = document.getElementById('next-button');


    // Make links for options
    if (dialogueIndex < dialogue.length) {
        if (typeof dialogue[dialogueIndex] === 'object' && dialogue[dialogueIndex].options) {
            dialogue[dialogueIndex].options.forEach((option, index) => {
                nextButton.style.display = 'none';
                const optionElement = document.createElement('a');
                optionElement.href = '#';
                optionElement.innerText = option.text;
                optionElement.style.color = 'white';
                optionElement.addEventListener('click', () => {
                    textContainer.innerHTML += `<p>${option.output}</p>`;
                    nextButton.style.display = 'block';
                    textContainer.scrollTop = textContainer.scrollHeight;
                });
                textContainer.appendChild(optionElement);
                textContainer.appendChild(document.createElement('br'));
                textContainer.appendChild(document.createElement('br'));
            });
            dialogueIndex++; 
        }
        else {
            let currentLine = dialogue[dialogueIndex];
            let style = "";
        
            if (currentLine.startsWith("You:")) {
                style = "color: white;";
            } else if (currentLine.startsWith("Office:")) {
                style = "color: gray; font-style: italic;";
            } else if (currentLine.startsWith("?")) { 
                style = "color: gray; font-size: 10pt; animation: glitch 0.2s infinite alternate;";
            }
        
            textContainer.innerHTML += `<p style="${style}">${currentLine}</p>`;
            dialogueIndex++;
            textContainer.scrollTop = textContainer.scrollHeight;
        }
        // Display dialogue lines
        // else {
        //     textContainer.innerHTML += `<p>${dialogue[dialogueIndex]}</p>`;
        //     dialogueIndex++;
        //     textContainer.scrollTop = textContainer.scrollHeight;
        // }
    } 
    // Close dialogue scene
    else {
        dialogueContainer.style.display = 'none';
        textContainer.style.display='none';
        nextButton.style.display = 'none';
        gameState.dialogueState = false;
    }
}

// Event listener for "next" button in dialogue scene
document.getElementById('next-button').addEventListener('click', handleDialogue);