const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//Visual aspects
canvas.width = window.innerWidth*0.5;
canvas.height = window.innerHeight*0.8;

let hero = {x: 100,y: 100,width: 75,height: 75,speed: 5,image: new Image()}; //Creating an object called hero for sprite
//hero has position, height,width,speed,image attributes, other attributes exist


// Load the sprite image
hero.image.src = 'tiny_barry.png';  // Replace with the actual image URL

// Background object
let background = {
  color: 'lightblue'
};

// Function to draw the background
function drawBackground() {
  ctx.fillStyle = background.color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Function to draw the sprite from an image
function drawSprite() {
  // Draw the image at sprite's position
  ctx.drawImage(hero.image, hero.x, hero.y, hero.width, hero.height);
}

// Function to move the sprite based on arrow keys
function moveSprite() {
    // Create a new image for the punch action
    const punchImage = new Image();
    punchImage.src = "tiny_barry_punch.gif"; // Path to the punch image
    
    // Listen to keydown event
    window.addEventListener('keydown', (e) => {
      // Move the hero based on arrow key inputs
      if (e.key === 'ArrowUp') hero.y -= hero.speed;
      if (e.key === 'ArrowDown') hero.y += hero.speed;
      if (e.key === 'ArrowLeft') hero.x -= hero.speed;
      if (e.key === 'ArrowRight') hero.x += hero.speed;
  
      // Draw the punch image when the 'z' key is pressed
      if (e.key === 'z') {
        // Wait for the image to load before drawing it
        punchImage.onload = function() {
          ctx.drawImage(punchImage, hero.x, hero.y);
        };
      }
    });
  }
  

// Main game loop
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw background and sprite
  drawBackground();
  drawSprite();

  // Repeat the game loop
  requestAnimationFrame(gameLoop);
}

// Initialize the game
function init() {
  hero.image.onload = () => {  // Ensure image is loaded before starting the game
    moveSprite();
    gameLoop();
  };
}

// Start the game
init();
// FROM CHATGPT
