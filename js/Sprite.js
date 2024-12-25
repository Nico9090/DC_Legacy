class Sprite{
    constructor(imageSrc,x,y,scaleFactor,ctx){
        this.image= new Image();
        this.image.src=imageSrc;
        this.x=x;
        this.y=y;
        this.scaleFactor=scaleFactor;
        this.ctx=ctx;
    }
    draw(){

        this.image.onload=()=>{
            this.ctx.drawImage(
                this.image,0,0,this.image.width,
                this.image.height,this.x,this.y,
                this.image.width*this.scaleFactor,this.image.height*this.scaleFactor
            );
        };
    }
    update() {
        draw();
    }

    move(speed){
        document.addEventListener('keydown', (event) => {
            switch(event.key) {
                case 'ArrowUp':
                    this.image.y -= this.image.speed;
                    break;
                case 'ArrowDown':
                    this.image.y += this.image.speed;
                    break;
                case 'ArrowLeft':
                    this.image.x -= this.image.speed;
                    break;
                case 'ArrowRight':
                    this.image.x += this.image.speed;
                    break;
            }
            update();
        });
    }
}
