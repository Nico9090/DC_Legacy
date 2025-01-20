const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth*0.5;
canvas.height = window.innerHeight*0.8;

//const hero = new Player(100,100,75,75,"barry_spritesheet.png",ctx,1600,1600,6);
const hero = new Image();
hero.src="barry_spritesheet.png"
const heroWidth=900;
const heroHeight=900;

function gameLoop() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(hero,0,0,heroWidth,heroHeight,0,0,
        heroWidth,heroHeight);
    //hero.draw(); // Draw and move the player
    requestAnimationFrame(gameLoop); // Keep the loop going
}

gameLoop();
