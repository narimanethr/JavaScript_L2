import mobileImgSrc from '../assets/images/tir.png';
import Mobile from './mobile';

export default class Shoot  extends Mobile{
    /* creates a shoot  instance   , x and y  positions , and deltaX , deltaY
@param x the horizontal position
@param y the vertical position
@dx horizontal displacement which is 8
@dy vertical displacement which is 0

*/
    constructor(x,y,dx,dy){
        super(x,y,dx=8,dy=0);
        
    }
    draw(context) {
        context.drawImage(this.image, this.x,this.y);
    }
    move(canv){
        
        if (this.x+Mobile.MOB_WIDTH ==0) {
            this.deltaX=0;
        }
        this.x=this.x+this.deltaX;
        
        }
    createImage() {
        const mobileImg = new Image();
        mobileImg.width = Mobile.MOB_WIDTH;
        mobileImg.src = mobileImgSrc;
            return mobileImg;
            }
    /* return's true if the shoot is in Collision with the Mobile given in parameter
    *@param mobile 
    *@return true or false instead 
     */
    collisionWith(mobile){
        let a1x= this.x;
        let a1y=this.y;
        let a2x=a1x+Mobile.MOB_WIDTH;
        let a2y=a1y+Mobile.MOB_WIDTH;
        let o1x=mobile.x;
        let o1y=mobile.y;
        let o2x=o1x+Mobile.MOB_WIDTH;
        let o2y=o1y+Mobile.MOB_WIDTH;
        let p1x=Math.max(a1x,o1x);
        let p1y=Math.max(a1y,o1y);
        let p2x=Math.min(a2x,o2x);
        let p2y=Math.min(a2y,o2y);
        return (p1x<p2x & p1y<p2y);
    }
    /*trigger the consequences of shoot collision with saucers and take an array of saucers as a parameter, and Increase the score
    *@param saucers an array of saucers 
    */
    collision (saucers){

        saucers.forEach((elt) => {
            
            if (this.collisionWith(elt)& elt.deltaY==0){
                elt.deltaX=0;
                elt.deltaY=+3;
                document.getElementById("score").innerHTML=parseInt(document.getElementById("score").innerHTML)+200;
               
            }
            

            });
    }
    /*Returns true if at least one saucers collides with shoot or false instead
    @param saucers an array of saucers 
    @return  true  or false instead
    */
    asCollision(sausers){
        return sausers.some(elt=>this.collisionWith(elt))
    }
    
 
        
}