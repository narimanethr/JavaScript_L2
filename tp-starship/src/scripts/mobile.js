/*a Mobile class is used to define an object which has a displayable image and which is capable of moving */
import mobileImgSrc from '../assets/images/vaisseau-ballon-petit.png';
/*enumeration of possible values ​​for moving */
const MoveState = { LEFT : 0, RIGHT : 1, NONE : 2,UP:3,DOWN:4};
export default class Mobile{

    static MOB_WIDTH = 48;
/* creates a mobile instance  with an image , x and y  positions , and deltaX , deltaY
@param x the horizontal position
@param y the vertical position
@dx horizontal displacement which is 0
@dy vertical displacement which is 0

*/
    constructor(x,y,dx=0,dy=0){
        this.image=this.createImage();
        this.x=x;
        this.y=y;
        this.deltaX=dx;
        this.deltaY=dy;
    }
    /*  draw's the mobile with the rendering context provided as a parameter
    *@param context
    */
    draw(context) {
        context.drawImage(this.image, this.x,this.y);
    }
    /* applies an elementary displacement to the mobile, that is to say a modification of its coordinates according to its displacement steps
    * @param canv the canvas 
     */ 
    move(canv){
        let cy=canv.height;
        let  cx=canv.width;
        if (this.x+Mobile.MOB_WIDTH >=cx || this.x<0){
            this.deltaX=-this.deltaX;
        }
        if (this.y+Mobile.MOB_WIDTH >=cy || this.y<0){
            this.deltaY=-this.deltaY;
        }
        this.x=this.x+this.deltaX;
        this.y=this.y+this.deltaY;
        }
        /*Creates an image of mobile  using it's source and width 
        *@return mobileImg the image of mobile
        */
        createImage() {
         const mobileImg = new Image();
         mobileImg.width = Mobile.MOB_WIDTH;
         mobileImg.src = mobileImgSrc;
          return mobileImg;
          }
}

 