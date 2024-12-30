//From CHATGPT
class Player {
    constructor(x, y, width, height, image_src, ctx, frameWidth, frameHeight, framesPerDirection) {
        this.image = new Image(); // Create an image object
        this.x = x; // Initial horizontal position
        this.y = y; // Initial vertical position
        this.width = width; // Width of the player
        this.height = height; // Height of the player
        this.speed = 5; // Movement speed
        this.image.src = image_src; // Image source (sprite sheet)
        this.ctx = ctx; // Canvas context for drawing

        // Animation variables
        this.frameWidth = frameWidth; // Width of each frame in the sprite sheet
        this.frameHeight = frameHeight; // Height of each frame in the sprite sheet
        this.framesPerDirection = framesPerDirection; // Number of frames per walking animation (4 for walking)
        this.currentFrame = 0; // Current frame in the animation cycle
        this.frameInterval = 6; // Number of frames between each animation switch
        this.frameCount = 0; // Frame counter

        // Movement state
        this.direction = 'down'; // Initial direction (can be 'up', 'down', 'left', 'right')

        // Track key presses
        this.keys = {};

        // Set up event listeners for movement
        this.setupKeyListeners();

        // Image load event
        this.image.onload = () => {
            this.isImageLoaded = true; // Set image loaded flag
        };
    }

    setupKeyListeners() {
        // Listen for keydown event to start moving
        window.addEventListener('keydown', (event) => {
            this.keys[event.key] = true; // Mark the key as pressed
        });

        // Listen for keyup event to stop moving
        window.addEventListener('keyup', (event) => {
            this.keys[event.key] = false; // Mark the key as released
        });
    }

    move() {
        // Determine the movement direction
        if (this.keys['ArrowUp'] || this.keys['w']) {
            this.y -= this.speed; // Move up
            this.direction = 'up'; // Set current direction
        }
        if (this.keys['ArrowDown'] || this.keys['s']) {
            this.y += this.speed; // Move down
            this.direction = 'down'; // Set current direction
        }
        if (this.keys['ArrowLeft'] || this.keys['a']) {
            this.x -= this.speed; // Move left
            this.direction = 'left'; // Set current direction
        }
        if (this.keys['ArrowRight'] || this.keys['d']) {
            this.x += this.speed; // Move right
            this.direction = 'right'; // Set current direction
        }
    }

    updateAnimation() {
        // Update animation frame based on movement
        if (this.frameCount % this.frameInterval === 0) {
            this.currentFrame = (this.currentFrame + 1) % this.framesPerDirection;
        }
        this.frameCount++;
    }

    draw() {
        if (!this.isImageLoaded) return; // Don't draw until image is loaded

        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); // Clear the canvas

        // Get the frame position for the sprite sheet
        let frameX = this.currentFrame * this.frameWidth; // X position of the current frame in the sprite sheet
        let frameY = 0; // Default for "down" direction

        // Set the frameY based on the direction (walking animation position in sprite sheet)
        if (this.direction === 'up') {
            frameY = this.frameHeight * 1; // Up direction frames are in the second row (index 1)
        } else if (this.direction === 'down') {
            frameY = this.frameHeight * 0; // Down direction frames are in the first row (index 0)
        } else if (this.direction === 'left') {
            frameY = this.frameHeight * 2; // Left direction frames are in the third row (index 2)
        } else if (this.direction === 'right') {
            frameY = this.frameHeight * 3; // Right direction frames are in the fourth row (index 3)
        }

        // Draw the current frame of animation from the sprite sheet
        this.ctx.drawImage(this.image, frameX, frameY, this.frameWidth, this.frameHeight, this.x, this.y, this.width, this.height);

        // Move the player
        this.move();
        this.updateAnimation(); // Update animation frame based on movement
    }
}
