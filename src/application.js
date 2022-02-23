import Button from "./renderables/button.js";
import IMAGE from "./renderables/image.js";
import Text from "./renderables/text.js";

export default class Application{

    constructor(ctx,innerWidth,innerHeight){
        this.ctx = ctx;
        this.screenWidth = innerWidth;
        this.screenHeight = innerHeight;
        this.aspectRatio = innerWidth/innerHeight;
        this.entities = [];
    }

    // Gets called before entering the gameloop
    init(){
        this.logo_txt = new Text({text:"made with NeptuneJS",x:0,y:0,align:"end",colour:'white',font:"Courier New", size:"20px"})
        this.logo_txt.pos.x = this.screenWidth -10;
        this.logo_txt.pos.y = (this.screenHeight) -10;

        this.logo_img = new IMAGE({x:0,y:0,src:"src/assets/icon.svg"});
        this.logo_img.pos.x += Math.abs(this.screenWidth - this.logo_img.image.naturalWidth)/2;
        this.logo_img.pos.y += Math.abs(this.screenHeight- this.logo_img.image.naturalHeight)/2;
        console.log(this.logo_img);

        this.play_btn = new Button({text:"Play",bgcolour:"white",x:0,y:0,align:"center",colour:'blue',font:"Courier New", size:"50px"})
        this.play_btn.pos.x = this.screenWidth/2 ;
        this.play_btn.pos.y = (this.screenHeight /2);
    }
    startscreen(){
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0,0,this.screenWidth,this.screenHeight);
        this.logo_img.draw(this.ctx);
        this.logo_txt.draw(this.ctx);
        this.play_btn.draw(this.ctx);
    }

    // Gets called after update method when Objects are ready for rendering
    draw(){
        this.entities.forEach(entity => entity.draw(this.ctx));
    }

    // Gets called just before the draw method
    update(deltaTime){
        this.entities.forEach(entity => entity.update(deltaTime));
    }

}