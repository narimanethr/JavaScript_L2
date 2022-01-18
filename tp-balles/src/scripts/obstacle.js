
export default class Obstacle  {
    
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.moving=MoveState.NONE;
        this.shiftX=0;
        this.shiftY=0;
    }
    draw(context) {
        context.fillRect(this.x,this.y,this.width,this.height);
    }
    //  dans la classe Obstacle
    
moveLeft() {
    this.shiftX = - 10;
    this.moving = MoveState.LEFT;
  }
  moveRight() {
    this.shiftX = + 10;
    this.moving = MoveState.RIGHT;
  }
  moveUp(){
    this.shiftY = - 10;
    this.moving = MoveState.UP;
  }
  moveDown(){
    this.shiftY = + 10;
    this.moving = MoveState.DOWN;
  }
  move(box) {              // déplace sans sortir des limites de *box*
    if (this.moving === MoveState.LEFT) {
      this.x = Math.max(0, this.x + this.shiftX);
    }
    if (this.moving === MoveState.RIGHT) {
      this.x = Math.min(box.width - this.width, this.x + this.shiftX);
    }
    if (this.moving === MoveState.UP) {
      this.y = Math.max(0, this.y + this.shiftY);
    }
    if (this.moving === MoveState.DOWN) {
      this.y = Math.min(box.height - this.height, this.y + this.shiftY);
    }
  }
  stopMoving() {
    this.moving = MoveState.NONE;
}
}

    