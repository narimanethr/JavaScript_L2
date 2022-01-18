import Ball from './ball';

/* TYPE Animation */ 
export default class Animation {
  constructor(canvas){
    this.canvas=canvas;
    this.balles= new Array();             //this.balle=new Ball(50,50);
    this.raf=null;
    this.context=this.canvas.getContext("2d");
  }
  
  moveAndDraw(){ 
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.balles.forEach((elt) => {
    elt.move(this.canvas);
    elt.draw(this.context);
    });                  
    this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
  }
  /* start the animation or stop it if previously running */
  startAndStop() {
    
    if(this.raf==null){
      this.moveAndDraw();                           
    }
    else{
      window.cancelAnimationFrame(this.raf);
      this.raf=null;
    }
  }
  addBalles(){
    let cy=this.canvas.height;
    let cx=this.canvas.width;
    let x= Math.floor(Math.random() * (cx-Ball.BALL_WIDTH - 1)) + 1;
    let y = Math.floor(Math.random() * (cx-Ball.BALL_WIDTH - 1)) + 1;
    let dx=Math.floor(Math.random() * (5 - (-5))) + 1;
    let dy=Math.floor(Math.random() * (5 - (-5))) + 1;
    this.balles.push(new Ball(x,y,dx,dy));
  }
}
