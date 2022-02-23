import Transform from "../basics/transform.js";

export default class Text extends Transform{
    constructor(kwargs){
        super(kwargs);
        this._size = kwargs['size'];
        this.text = kwargs['text'];
        this.font = kwargs['font'];
        this.align = kwargs['align'];
        this.colour = kwargs['colour'];
        this.textHeight = parseInt(this._size,10)

    }

    draw(ctx){
        ctx.fillStyle = this.colour;
        ctx.font = this._size.concat(" ",this.font);
        ctx.textAlign = this.align;
        this.textwidth = ctx.measureText(this.text).width
        ctx.fillText(this.text, this.pos.world_x, this.pos.world_y);
        super.draw(ctx);
    }
}