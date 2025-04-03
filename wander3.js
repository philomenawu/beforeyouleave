let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let x = canvas.width - 270;
let y = 1200;

let background = new Image();
background.src = 'art/wander.png';

// let hospitalBackground = new Image();
// hospitalBackground.src = 'art/hospitalonly.png'; 

// let churchBackground = new Image();
// churchBackground.src = 'art/churchonly.png';

let tigerBackground = new Image();
tigerBackground.src = 'art/tigeronly.png';

// let lakeBackground = new Image();
// lakeBackground.src = 'art/lakeonly.png';

// let pagodaBackground = new Image();
// pagodaBackground.src = 'art/pagodaonly.png';

let character = new Image();
character.src = 'art/player.png';

character.onload = function () {
  drawScene();
};
let actionButtonLink = document.getElementById("actionButtonLink");
let actionButton = document.getElementById("actionButton");

function updateButton() {
    actionButton.style.display = "none";

    // if (x > canvas.width - 500 && x < canvas.width - 50 && y < 500) {
    //     actionButton.innerText = "Explore Hospital";
    //     actionButton.style.display = "block";
    //     actionButtonLink.href = "hospital.html";
    // } 
    // else if (x > canvas.width - 500 && x < canvas.width - 50 && y < 1200 && y > 800) {
    //     actionButton.innerText = "Explore Pagoda";
    //     actionButton.style.display = "block";
    //     actionButtonLink.href = "pagodabefore.html";
    // } 
    // else if (x > canvas.width - 1000 && x < canvas.width - 600 && y < 500) {
    //     actionButton.innerText = "Explore Church";
    //     actionButton.style.display = "block";
    //     actionButtonLink.href = "church.html";
    // }
    if (x < 500 && y < 1000 && y > 500) {
        actionButton.innerText = "Explore Hunting Ground";
        actionButton.style.display = "block";
        actionButtonLink.href = "hunting.html";
    }
    // else if (x < 500 && y < 2000 && y > 1000) {
    //     actionButton.innerText = "";
    //     actionButton.style.display = "hidden";
    // }
}

actionButton.addEventListener('click', () => {
  if (actionButtonLink.href) {
      window.location.href = actionButtonLink.href;
  }
});


function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Choose background based on position
  // if (x > canvas.width - 500 && x < canvas.width - 50 && y < 500) {
  //   ctx.drawImage(hospitalBackground, 0, 0, canvas.width, canvas.height);
  // } 
  // else if (x > canvas.width - 500 && x < canvas.width - 50 && y < 1200 && y > 800) {
  //   ctx.drawImage(pagodaBackground, 0, 0, canvas.width, canvas.height);
  // } 
  // else if (x > canvas.width - 1000 && x < canvas.width - 600 && y < 500) {
  //   ctx.drawImage(churchBackground, 0, 0, canvas.width, canvas.height);
  // }
  if (x < 500 && y < 1000 && y > 500) {
    ctx.drawImage(tigerBackground, 0, 0, canvas.width, canvas.height);
  }
  // else if (x < 500 && y < 2000 && y > 1000) {
  //   ctx.drawImage(lakeBackground, 0, 0, canvas.width, canvas.height);
  // }
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
        // window.location.href = "outside2.html";
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

