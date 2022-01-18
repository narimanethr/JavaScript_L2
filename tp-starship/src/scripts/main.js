
// importation de la classe Game.js
import Game from './game.js';
const time=750; /*the timer */
const canvas = document.getElementById("stars");
const game = new Game(canvas);
let lancer;
const start=document.getElementById("flotteSoucoupes");
/* Start's the event of addSaucers using a timer  */
const demare= () =>{
    start.addEventListener("click",demare);
    if(game.Actiftimer==false){
        lancer=window.setInterval(()=>game.addSaucers(),time);
        game.Actiftimer=true;
     }
     start.addEventListener("click",stoper);
     start.removeEventListener("click",demare);
     
    }
    /* Stop's the event of addSaucers using a timer  */
const stoper= () =>{
    if(game.Actiftimer==true){
        window.clearInterval(lancer);
        game.Actiftimer=false;
     }
     start.addEventListener("click",demare);
    start.removeEventListener("click",stoper);
	
}

// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {
   
   
    game.moveAndDraw();
    window.addEventListener('keydown',game.keyDownActionHandler.bind(game));
    window.addEventListener('keyup', game.keyUpActionHandler.bind(game));
    document.getElementById("nouvelleSoucoupe").addEventListener("click", () => game.addSaucers()  );
    let start=document.getElementById("flotteSoucoupes");
	
	start.addEventListener("click",demare);
	

    
}

window.addEventListener("load",init);

//
console.log('le bundle a été généré');
