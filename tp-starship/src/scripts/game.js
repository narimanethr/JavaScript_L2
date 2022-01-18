/* a Game class to represent the game */
import StarShip from './starShip'
import Mobile from './mobile'
import Saucer from './saucer';
import Shoot from './shoot';

export default class Game {
    /* Create's an instance of the game
    *@constructor
    *@this(Game)
    * @param (canvas) the canvas of the game
    */

    constructor(canvas){
        this.canvas=canvas;/*the canvas in which the game is drawn*/
        this.saucers = new Array();/*an array of saucers, instances of Saucer*/
        this.context=this.canvas.getContext("2d");
        this.starship=new StarShip(40,this.canvas.height/2);           
        this.raf=null; 
        this.shoots= new  Array(); /*an array of shoots, instances of Shoot*/
        this.Actiftimer= false;
        this.proba=true;
    }
    /*move's the mobile then draw's it   on the canvas*/
    moveAndDraw(){ 
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.starship.move(this.canvas); 
        this.starship.draw(this.context);
        this.shoots.forEach(elt =>elt.move(this.canvas));
        this.saucers.forEach(elt =>{
            elt.move(this.canvas);     
        });
        this.shoots.forEach(elt =>elt.collision(this.saucers));
        this.shoots=this.shoots.filter(elt =>!(elt.asCollision(this.saucers)) &  elt.x <=this.canvas.width);
        this.saucers=this.saucers.filter(elt =>elt.x>0 && elt.y < this.canvas.height);
        this.saucers.forEach((elt) => {
            elt.draw(this.context);
            });
        this.shoots.forEach(elt=>elt.draw(this.context));
        this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
              
      }
      /* Add's a saucer instance  into the canvas  */
      addSaucers(){
    
          const cy=this.canvas.height;
          const cx=this.canvas.width;
          let x= cx;
          let y = Math.floor(Math.random() * (cy-Mobile.MOB_WIDTH - 1)) + 1;
          if (this.proba){
            this.saucers.push(new Saucer(x,y));
            this.proba=false;
          }
          else{
              this.proba=true;
          }
         
      }
      /* Add's a shoot instance  */
      
      addShoots(){
        
        let x= this.starship.x+Mobile.MOB_WIDTH;
        let y = this.starship.y+10;
        this.shoots.push(new Shoot(x,y));
    }
    /* call's the appropriate method according to the pressed key
    *@param event 
     */
      keyDownActionHandler(event) {
        switch (event.key) {
            case " ":
                case " ":
                this.addShoots();
                
                break;
            case "ArrowUp":
            case "Up":
                this.starship.moveUp();
                break;
             case "ArrowDown":
             case "Down":
                this.starship.moveDown();
                 break;
            default: return;
        }
        event.preventDefault();
     }
      /* call's the appropriate method when we release the button
    *
    *@param event 
     */
     keyUpActionHandler(event) {
        switch (event.key) {
            case " ":
                document.activeElement.blur;
            case "ArrowUp":
            case "Up":
            case "ArrowDown":
            case "Down":

                this.starship.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }





}





