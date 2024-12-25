//=============================================================================================================================
class Game {
    constructor(config) {
      this.element = config.element;
      this.canvas = this.element.querySelector(".game-canvas");
      this.ctx = this.canvas.getContext("2d");
    }
//=============================================================================================================================

// Load the background 
    init() {
        const image = new Image();
        image.onload = () => {
            //for the background stage to fit the canvas entirely
          const aspectRatio = image.width / image.height; //Why is the aspect ratio needed?
          // Set the canvas width and height
          const canvasWidth = this.canvas.width;
          const canvasHeight = this.canvas.height;
          let newWidth = canvasWidth;
          let newHeight = canvasWidth / aspectRatio;
          if (newHeight > canvasHeight) {
            newHeight = canvasHeight;
            newWidth = canvasHeight * aspectRatio;
          }
          this.ctx.drawImage(image, 0, 0, newWidth, newHeight);
        };
        image.src = "/assets/batcave.png";
        
      //
            //hero
      const centerX=this.canvas.width / 2;
      const centerY= this.canvas.height / 2;
      //
   
      const hero = new Image();
      hero.onload = () => {
        const scaleFactor=0.03;
        this.ctx.drawImage(
          hero,
          0, //left cut
          0, //top cut,
          hero.width, //width of cut
          hero.height, //height of cut
          centerX-60, //x position at center
          centerY,//y position at center
          hero.width*scaleFactor,
          hero.height*scaleFactor
       )
      }
      //player
      hero.src = "/assets/tiny_barry.png";
    
    }
   
   }
