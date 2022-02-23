import Entity from "./entity.js";

export default class Sound extends Entity{
    constructor(kwargs){
        super(kwargs);

        this.sounds = {}
        Object.entries(kwargs).forEach(element => {
            this.sounds[element[0]] = new Audio(element[1])
        });
    }


    play(name,loop=false,playbackRate=1){
        this.sounds[name].loop = loop;
        this.sounds[name].playbackRate = playbackRate;
        this.sounds[name].play();
    }

    pause(name){
        this.sounds[name].pause();
    }
}