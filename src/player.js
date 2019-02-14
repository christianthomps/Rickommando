import GameObject from "./gameObject.js"
import Renderable from "./renderable";
import meSprite from "./img/image.png";
import input from "./input";
import bullet from "./img/nail.png";


export default class player extends GameObject{
    constructor(x,y){
        super();

        this.position = [x,y];

        this.facing = 0;


        //image = missing, startFrame = 0, frameCount = 0, framesx = 1, framesy = 1, speed = 1
        this.renderables = [
            new Renderable(meSprite, 0, 1, 2, 3, 10),
            new Renderable(meSprite, 2, 1, 2, 3, 10),
            new Renderable(meSprite, 4, 1, 2, 3, 10)

        ];
    }


    draw(ctx){
        ctx.save();
        ctx.translate(this.position[0], this.position[1]);

        this.renderables[this.facing].draw(ctx);

        ctx.restore();
    }
}

