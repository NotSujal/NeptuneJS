import Transform from "../basics/transform.js";

export default class IMAGE extends Transform{

    constructor(kwargs){
        super(kwargs);
        this.image = new Image();
        this.image.src = kwargs["src"];
        this.isLoaded = false
        this.image.onload = function(){
            this.isLoaded = true;
            console.log(this.image, " is loaded")
          }
    }

    draw(ctx){
        if (this.isLoaded) return;
        ctx.drawImage(this.image,this.pos.world_x,this.pos.world_y);
        
    }

    update(deltaTime){
        this.size.x = this.image.clientWidth;
        this.size.y = this.image.clientHeight;
        super.update(deltaTime)
    }
}