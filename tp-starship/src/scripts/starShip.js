/*a StarShip class to represent the player's ship. */
import mobileImgSrc from '../assets/images/vaisseau-ballon-petit.png';
import Mobile from './mobile'
/*enumeration of possible values ​​for moving */
const MoveState = { LEFT : 0, RIGHT : 1, NONE : 2,UP:3,DOWN:4};
export default class StarShip  extends Mobile{
  /* creates a of starship, x and y  positions , and deltaX , deltaY
@param x the horizontal position
@param y the vertical position
@dx horizontal displacement which is 0
@dy vertical displacement which is 8

*/
    constructor(x,y,dx,dy){
        super(x,y,dx=0,dy=8);
        this.moving=MoveState.NONE;
    }
    /* return's true if the moving attribute is MoveState.UP or false instead 
    *@return true or false instead 
    */
    up(){
        return this.moving==MoveState.UP;
    }
    /* return's  true if the moving attribute is MoveState.DOWN or false instead 
    *@return true or false instead 
     */
    down(){
        return this.moving==MoveState.DOWN;
    }
    /* Move's the starship up */
    moveUp(){
        this.deltaY = - Math.abs(this.deltaY);
        this.moving = MoveState.UP;
      }
       /* Move's the starship down */
      moveDown(){
        this.deltaY = + Math.abs(this.deltaY);
        this.moving = MoveState.DOWN;
      }
      move(canv) {            
        if (this.moving === MoveState.UP) {
          this.y = Math.max(0, this.y + this.deltaY);
        }
        if (this.moving === MoveState.DOWN) {
          this.y = Math.min(canv.height - Mobile.MOB_WIDTH, this.y + this.deltaY);
        }
      }
      /* set's the moving attribute to  MoveState.NONE 
      */
      stopMoving() {
        this.moving = MoveState.NONE;
    }
    /*Creates an image of starship  using it's source and width 
        *@return mobileImg the image of starship
        */

    createImage() {
      const mobileImg = new Image();
      mobileImg.width = Mobile.MOB_WIDTH;
      mobileImg.src = mobileImgSrc;
       return mobileImg;
       }


}
