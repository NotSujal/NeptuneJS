import Transform from "../basics/transform.js";

export default class Rect extends Transform{
    constructor(kwargs){
        super(kwargs);
        this.colour = kwargs['colour']
    }

    update(deltaTime){
        super.update(deltaTime);
    }

    draw(ctx){
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.pos.world_x,this.pos.world_y,this.size.x,this.size.y);
        super.draw(ctx);
    }
}