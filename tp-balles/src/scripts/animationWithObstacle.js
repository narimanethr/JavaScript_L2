import Ball from './ball';
import Obstacle from './obstacle';
import Animation from './animation'
export default class AnimationWithObstacle extends Animation{
    constructor(canvas){
        super(canvas);
        this.obstacle = new Obstacle(20,20,100,100);
    }
    moveAndDraw(){ 
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.obstacle.draw(this.context);
        this.balles.forEach((elt) => {
        elt.move(this.canvas);
        }); 
        this.obstacle.move(this.canvas);
        this.balles=this.balles.filter(elt =>!(elt.collisionWith(this.obstacle)));
        this.balles.forEach((elt) => {
            elt.draw(this.context);
            });                  
        this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
      }
      keyDownActionHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "Left":
                this.obstacle.moveLeft();
                break;
            case "ArrowRight":
            case "Right":
                this.obstacle.moveRight();
                break;
    
            case "ArrowUp":
            case "Up":
                this.obstacle.moveUp();
                break;
             case "ArrowDown":
             case "Down":
                this.obstacle.moveDown();
                 break;
            default: return;
        }
        event.preventDefault();
     }
     keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "Left":
            case "ArrowRight":
            case "Right":
            case "ArrowUp":
            case "Up":
            case "ArrowDown":
            case "Down":
                
                this.obstacle.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }

}