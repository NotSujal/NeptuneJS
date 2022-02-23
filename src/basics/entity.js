export default class Entity {

    constructor(kwargs) {

        this.name = kwargs["name"];
        this.parent = kwargs["parent"];
        let app = kwargs["app"];
        if (app != undefined || app != null) app.entities.push(this);
    }

    update(deltaTime) {

    }

    draw(ctx) {

    }
}