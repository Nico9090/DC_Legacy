class Player{
    constructor(x,y,width,height,image_src,ctx){ //want to draw player character somewhere
        this.image=new Image(); // needs to be called whenever you are loading a new image
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.speed=5;
        this.image.src=image_src;
        this.ctx=ctx;
        this.keys={};//keys object
        this.key_listener();
        this.image.onload = () => {
            this.isImageLoaded = true; // Once image is loaded, update the flag
        };
    }

    key_listener(){
        window.addEventListener('keydown',(event)=>{
            this.keys[event.key] = true;
        });

        window.addEventListener('keyup',(event)=>{
            this.keys[event.key]=false;
        });
    }

    move(){
        if (this.keys['ArrowUp'] || this.keys['w']) {
            this.y -= this.speed; // Move up
        }
        if (this.keys['ArrowDown'] || this.keys['s']) {
            this.y += this.speed; // Move down
        }
        if (this.keys['ArrowLeft'] || this.keys['a']) {
            this.x -= this.speed; // Move left
        }
        if (this.keys['ArrowRight'] || this.keys['d']) {
            this.x += this.speed; // Move right
        } //FROM CHATGPT
    }
    draw(){ //must load before drawing
        if (!this.isImageLoaded) return;
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        this.move();
    
    }

}
