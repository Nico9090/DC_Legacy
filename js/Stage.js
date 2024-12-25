class Stage {
    constructor(imageSrc, canvasWidth, canvasHeight, ctx) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.aspectRatio = 0;
        this.ctx = ctx;


        this.image.onload = () => {
            this.aspectRatio = this.image.width / this.image.height;
            this.draw();
        };
    }

    draw() {
        let newWidth = this.canvasWidth;
        let newHeight = this.canvasWidth / this.aspectRatio;

 
        if (newHeight > this.canvasHeight) {
            newHeight = this.canvasHeight;
            newWidth = this.canvasHeight * this.aspectRatio;
        }


        this.ctx.drawImage(this.image, 0, 0, newWidth, newHeight);
    }
}

