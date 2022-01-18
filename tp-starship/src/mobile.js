import mobileImgSrc from './assets/images/vaisseau-ballon-petit.png';
const MoveState = { LEFT : 0, RIGHT : 1, NONE : 2,UP:3,DOWN:4};
export default class Moblile{
    static MOB_WIDTH = 48;

    constructor(x,y,dx=0,dy=0){
        this.image=this.createImage();
        this.x=x;
        this.y=y;
        this.deltaX=dx;
        this.deltaY=dy;
    }
    draw(context) {
        context.drawImage(this.image, this.x,this.y);
    }
    move(canv){
        let cy=canv.height;
        let  cx=canv.width;
        if (this.x+Ball.BALL_WIDTH >=cx || this.x<0){
            this.deltaX=-this.deltaX;
        }
        if (this.y+Ball.BALL_WIDTH >=cy || this.y<0){
            this.deltaY=-this.deltaY;
        }
        this.x=this.x+this.deltaX;
        this.y=this.y+this.deltaY;
        }
        createImage() {
         const mobileImg = new Image();
         mobileImg.width = Ball.MOB_WIDTH;
         mobileImg.src = ballImgSrc;
          return mobileImg;
          }
}

 