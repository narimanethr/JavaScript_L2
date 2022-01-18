import Ball from './ball';           // peut être commenté après la Ex1 Q2 faite
import AnimationWithObstacle from './animationWithObstacle';

import './assets/style/style-balles.css';


/* setup */
const init = () => {
    const canvas = document.getElementById("terrain");

    // commenter les 2 lignes suivantes après la Ex1 Q2
    //const ball = new Ball(50,50);
    //document.getElementById("stopStartBall").addEventListener("click", () => ball.draw(canvas.getContext('2d'))  );
    
   
    const animation = new AnimationWithObstacle(canvas);
    document.getElementById("stopStartBall").addEventListener("click", () => animation.startAndStop()  );
    document.getElementById("addBall").addEventListener("click", () => animation.addBalles()  );
    window.addEventListener('keydown', animation.keyDownActionHandler.bind(animation));
    window.addEventListener('keyup', animation.keyUpActionHandler.bind(animation));
}

window.addEventListener("DOMContentLoaded",init);


//
console.log('le bundle a été généré');
