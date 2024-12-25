class Sprite {
    constructor(imageSrc, x, y, scaleFactor, ctx) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.x = x;
        this.y = y;
        this.scaleFactor = scaleFactor;
        this.ctx = ctx;
        this.speed = 5; // Initialize speed
        this.imageLoaded = false;

        // Ensure the image is loaded before trying to draw it
        this.image.onload = () => {
            this.imageLoaded = true; // Mark the image as loaded
            this.draw(); // Draw once the image is loaded
        };
    }

    // Draw the sprite on the canvas
    draw() {
        if (this.imageLoaded && this.ctx) {
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); // Clear the canvas before redrawing
            this.ctx.drawImage(
                this.image, 0, 0, this.image.width,
                this.image.height, this.x, this.y,
                this.image.width * this.scaleFactor, this.image.height * this.scaleFactor
            );
        }
    }

    // Update method (if needed, but draw is already being handled in the move method)
    update() {
        this.draw(); // Redraw the sprite
    }

    // Method to move the sprite based on key events
    move(speed) {
        this.speed = speed; // Set the speed

        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    this.y -= this.speed;
                    break;
                case 'ArrowDown':
                    this.y += this.speed;
                    break;
                case 'ArrowLeft':
                    this.x -= this.speed;
                    break;
                case 'ArrowRight':
                    this.x += this.speed;
                    break;
            }
            this.draw(); // Redraw the sprite after moving
        });
    }
}
