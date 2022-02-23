import Text from "./text.js";

export default class Button extends Text {
    constructor(kwargs) {
        super(kwargs);
        this.bgcolour = kwargs['bgcolour'];
    }

    update(deltaTime) {
        super.update(deltaTime);
    }

    draw(ctx) {
        if (this.bgcolour != undefined) {
            ctx.fillStyle = this.bgcolour;
            ctx.fillRect(this.pos.world_x - this.textwidth / 2 - 10, this.pos.world_y - this.textHeight, this.textwidth + 20, this.textHeight * 1.5);
        }
        super.draw(ctx);
    }
}