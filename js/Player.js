class Player{
    constructor(x,y,width,height,image_src,ctx,
        frameWidth,frameHeight,framesPerDirection
    ){ //want to draw player character somewhere
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

        this.frameWidth=frameWidth;
        this.frameHeight=frameHeight;
        this.framesPerDirection=framesPerDirection;
        this.currentFrame=0;
        this.frameInterval=6;
        this.frameCount=0;

        this.direction='down';

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

    updateAnimation(){
        if (this.frameCount % this.frameInterval === 0){
            this.currentFrame = (this.currentFrame+1)%this.framesPerDirection;
        }
        this.frameCount++;
    }
    draw(){ //must load before drawing
        if (!this.isImageLoaded) return;

        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        
        let frameX=this.currentFrame*this.frameWidth;
        let frameY=0;

        if (this.direction === 'up'){
            frameY=this.frameHeight*1;
        } else if (this.direction==='down'){
            frameY=this.frameHeight*0;
        } else if (this.direction === 'left'){
            frameY= this.frameHeight*2;
        } else if (this.direction==='right'){
            frameY=this.frameHeight*3;
        }
    
        
            
        this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        this.move();
        this.updateAnimation()
    
    }

}
