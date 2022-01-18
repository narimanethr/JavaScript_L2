
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';
import Obstacle from './obstacle';
/* TYPE Ball */
export default class Ball {
    static BALL_WIDTH = 48;
    constructor(x,y,dx=3,dy=-2){
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

    /* crée l'objet Image à utiliser pour dessiner cette balle */
    createImage() {
  	const ballImg = new Image();
	ballImg.width = Ball.BALL_WIDTH;
	ballImg.src = ballImgSrc;
	return ballImg;
    }
    collisionWith (ob){
        let a1x= this.x;
        let a1y=this.y;
        let a2x=a1x+Ball.BALL_WIDTH;
        let a2y=a1y+Ball.BALL_WIDTH;
        let o1x=ob.x;
        let o1y=ob.y;
        let o2x=o1x+ob.width;
        let o2y=o1y+ob.height;
        let p1x=Math.max(a1x,o1x);
        let p1y=Math.max(a1y,o1y);
        let p2x=Math.min(a2x,o2x);
        let p2y=Math.min(a2y,o2y);
        return (p1x<p2x & p1y<p2y);
    }

}
