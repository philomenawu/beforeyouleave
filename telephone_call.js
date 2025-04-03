// Call_1 Dialogue Script
const dialogue = [
    `You: Hello? This is Dr. Kui speaking.`,
    `Office: Good evening, Dr. Kui. You have a line request coming from the hospital.`,
    `You: Yes, please transfer it over.`,
    `Office: One moment.`,
    `.`,
    `.`,
    `.`,
    `?: ...dd-do yy-o-u kno-w- wheee-r-e i..y-ou...a-m..?`,
     {
        options: [
            {
                text: `You: Hello? Who is this?`, 
                output: `?: ...co-m-e f-i-nnd me...`
            },
            {
                text: `You: Aren't you at the hospital?`, 
                output: `?: he-llp i a-am l-o-s-t...come...`
            },
            {
                text: `You: Do I know you?`, 
                output: `?: he-llp i a-am l-o-s-t...c-ome fiii-nd me...`
            },
        ]
     },
     `...`
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
                style = "color: white; font-style: italic;";
            } else if (currentLine.startsWith("?")) { 
                style = "color: gray; font-size: 10pt; animation: glitch 0.5s infinite alternate;";
            }
        
            textContainer.innerHTML += `<p style="${style}">${currentLine}</p>`;
            dialogueIndex++;
            textContainer.scrollTop = textContainer.scrollHeight;
        }
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