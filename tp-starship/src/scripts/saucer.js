/*a Saucer class to represent the flying saucers to destroy */
import mobileImgSrc from '../assets/images/flyingSaucer-petit.png';
import Mobile from './mobile'
export default class Saucer  extends Mobile{
    /* creates an instance of saucer  , x and y  positions , and deltaX , deltaY
@param x the horizontal position
@param y the vertical position
@dx horizontal displacement which is -3
@dy vertical displacement which is 0

*/
    constructor(x,y,dx,dy){
        super(x,y,dx=-3,dy=0);

    }
      /*  draw's the saucer  with the rendering context provided as a parameter
    *@param context
    */
    draw(context) {
        context.drawImage(this.image, this.x,this.y);
    }
    /* applies an elementary displacement to the saucer , when a saucer leaves the game from the left then this saucer is removed from the game, and the score is decreased
    * @param canv the canvas 
     */ 
    move(canv){
        
        if (this.x<=0) {
            this.deltaX=0;
            document.getElementById("score").innerHTML=parseInt(document.getElementById("score").innerHTML)-1000;
        }
        this.x=this.x+this.deltaX;
        if (this.x<=0){
            document.getElementById("score").innerHTML=parseInt(document.getElementById("score").innerHTML)-1000;
        }
        if (this.y+Mobile.MOB_WIDTH <=0) {
            this.deltaY=0;
        }
        this.y=this.y+this.deltaY;
        
        }
         /*Creates an image of saucer  using it's source and width 
        *@return mobileImg the image of saucer
        */
        createImage() {
            const mobileImg = new Image();
            mobileImg.width = Mobile.MOB_WIDTH;
            mobileImg.src = mobileImgSrc;
             return mobileImg;
             }
        

} 


