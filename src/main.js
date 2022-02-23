import Game from "../game.js";

let canvas  = document.getElementById("__panel__");
canvas.setAttribute("height",window.innerHeight);
canvas.setAttribute("width",window.innerWidth);
let ctx = canvas.getContext('2d');

// Init Application.js
let app = new Game(ctx,window.innerWidth,window.innerHeight);

if (app.init != undefined) app.init();

let currentTimeStamp = performance.now();
let deltaTime = 0;
function gameloop(timeStamp){
    deltaTime = (timeStamp - currentTimeStamp) * 60/1000;
    currentTimeStamp = timeStamp;
        
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    if (app.startscreen != undefined) app.startscreen();
    // Update and Draw Stuff
    if (app.update != undefined) app.update(deltaTime);
    if (app.draw != undefined) app.draw();

    requestAnimationFrame(gameloop);
}

gameloop(0)