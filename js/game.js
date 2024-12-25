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
        
      const cave = new Stage("../assets/batcave.png",this.canvas.width,this.canvas.height,this.ctx);
        

      const centerX=this.canvas.width / 2;
      const centerY= this.canvas.height / 2;
      //hero ========================================================================================================================
   
      const hero = new Sprite("../assets/tiny_barry.png",
        centerX-60,centerY,0.05,this.ctx
      );
      hero.draw();
      hero.move(5);
      //hero ========================================================================================================================
    }
   
   }
