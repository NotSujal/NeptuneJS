import Application from "./src/application.js";
import Sound from "./src/basics/audio.js";
import Image from "./src/renderables/image.js";
import Rect from "./src/renderables/rect.js";
import Text from "./src/renderables/text.js";

export default class Game extends Application {

    // Gets called before entering the gameloop
    init() {
        super.init();
        this.manager = new Sound({intro: "./src/assets/intro.wav", })
        // this.manager.play('intro');
    }

    // Gets called after update method when Objects are ready for rendering
    draw() {
        super.draw();

    }

    // Gets called just before the draw method
    update(deltaTime) {
        // this.rect.x += 1 / deltaTime;
        // this.image.x +=  deltaTime;
        super.update(deltaTime);
    }
}