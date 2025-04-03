let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = 600;

// // Circle (character)
// function drawCharacter() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.beginPath();
//   ctx.arc(x, y, 5, 0, Math.PI * 2);
//   ctx.fillStyle = 'black';
//   ctx.fill();
//   ctx.closePath();
// }

let character = new Image();
character.src = 'art/player.png'; // Replace with your image path

character.onload = function () {
  drawCharacter();
};

function drawCharacter() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(character, x - 15, y - 15, 20, 40); // Adjust size and position if needed
}

// Function to highlight a button
function highlightButton(buttonId) {
  // Remove active class from all buttons
  document.getElementById('left-button').classList.remove('active');
  document.getElementById('right-button').classList.remove('active');
  document.getElementById('up-button').classList.remove('active');
  document.getElementById('down-button').classList.remove('active');

  // Add active class to the clicked or pressed button
  document.getElementById(buttonId).classList.add('active');
}

// const noiseContainer = document.getElementById("noise");
// const noises = ["rustle", "stick", "crunch", "snap", "bush", "bramble", "leaves", "rock", "branch", "bug"];

// Event listener for arrow keys
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      if (x > 50) {
        x -= 30;
      }
      highlightButton('left-button');
      break;
    case "ArrowRight":
      if (x  < canvas.width - 50) {
        x += 30;
      }
      highlightButton('right-button');
      break;
    case "ArrowUp":
      if (y < 220) {
        window.location.href = "insidepagoda.html";
      }
      y-=30;
      highlightButton('up-button');
      break;
    case "ArrowDown":
      if (y < canvas.height - 200) {
      y += 30;
      }
      highlightButton('down-button');
      break;
  }
  drawCharacter();
});


// Event listeners for button clicks
document.getElementById('left-button').addEventListener('click', () => {
  if (x > 50) {
    x -= 30;
  }
  drawCharacter();
});

document.getElementById('right-button').addEventListener('click', () => {
  if (x < canvas.width - 50) {
    x += 30;
  }
  drawCharacter();
});

document.getElementById('up-button').addEventListener('click', () => {
  if (y > 100) {
    y -= 30;
  }
  drawCharacter();
});

document.getElementById('down-button').addEventListener('click', () => {
  if (y < canvas.height - 50) {
    y += 30;
  }
  drawCharacter();
});

// Initial draw
drawCharacter();
