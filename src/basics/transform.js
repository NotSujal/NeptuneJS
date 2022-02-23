import Entity from "./entity.js";

export default class Transform extends Entity {
    constructor(kwargs) {
        super(kwargs);

        this.pos ={
            _x: kwargs['x'],
            _y: kwargs['y'],

            world_x: this._x,
            world_y: this._y,

            set x(value){
                this._x = value;
                this._set_world_pos();
            },

            get x(){
                return this._x;
            },

            set y(value){
                this._y = value;
                this._set_world_pos();
            },

            get y(){
                return this._y;
            },

            _set_world_pos() {
                if (this.parent != undefined || this.parent != null) {
                    this.parent._set_world_pos();
                    let _parent_pos = this.parent.pos;
                    let new_x = this.world_x + _parent_pos.world_x;
                    let new_y = this.world_y + _parent_pos.world_y;
                    this.world_x = new_x;
                    this.world_y = new_y;
                }
                else{
                    this.world_x = this._x;
                    this.world_y = this._y;
                }
            }
        }

        this.size ={
            x: kwargs['w'],
            y: kwargs['h'],
        }
    }


    

    update(deltaTime) {
        super.update(deltaTime);
    }

    draw(ctx) {

    }


}