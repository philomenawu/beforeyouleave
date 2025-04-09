let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = 450;

let background = new Image();
background.src = 'art/wander.png';

let pagodaBackground = new Image();
pagodaBackground.src = 'art/pagodaonly.png';

let character = new Image();
character.src = 'art/player.png';

character.onload = function () {
  drawScene();
};
let actionButtonLink = document.getElementById("actionButtonLink");
let actionButton = document.getElementById("actionButton");

function updateButton() {
    actionButton.style.display = "none";
    if (x > canvas.width - 500 && x < canvas.width - 50 && y < 1200 && y > 800) {
        actionButton.innerText = "Explore Pagoda";
        actionButton.style.display = "block";
        actionButtonLink.href = "pagodabefore.html";
    } 
}

actionButton.addEventListener('click', () => {
  if (actionButtonLink.href) {
      window.location.href = actionButtonLink.href;
  }
});


function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (x > canvas.width - 500 && x < canvas.width - 50 && y < 1200 && y > 800) {
    ctx.drawImage(pagodaBackground, 0, 0, canvas.width, canvas.height);
  } 
  else {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  }
  updateButton();
  ctx.drawImage(character, x - 15, y - 15, 30, 60);
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      if (x > 50) x -= 30;
      break;
    case "ArrowRight":
      if (x < canvas.width - 50) x += 30;
      break;
    case "ArrowUp":
      if (y < 280) {
      } else {
        y -= 30;
      }
      break;
    case "ArrowDown":
      if (y < canvas.height - 50) y += 30;
      break;
  }
  
  console.log(`Character position - X: ${x}, Y: ${y}`);
  drawScene();
});

// Function to display overlay text
function showOverlayText(message, duration = 4000) {
    let overlay = document.getElementById('title');
    overlay.innerHTML = message;
    overlay.style.display = 'block';
    overlay.style.opacity = '1';

    // Start fade-out effect after the duration
    setTimeout(() => {
        let opacity = 1;
        let fadeOut = setInterval(() => {
            if (opacity <= 0) {
                clearInterval(fadeOut);
                overlay.style.display = 'none';
            } else {
                opacity -= 0.05;
                overlay.style.opacity = opacity;
            }
        }, 50);
    }, duration);
}

// Show text when the page loads
window.onload = function() {
    showOverlayText("And so you <i>wander...</i>", 5000);
};

// Initial draw
drawScene();

