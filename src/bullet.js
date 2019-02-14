import gameObject from "./gameObject";
import player from "./player";
import Renderable from "./renderable";
import nail from "./img/nail.png";
import pipeMap from "./img/pipeMap1.png";

export default class bullet extends gameObject{
    constructor(x,y){
        super();
        //this.direction = [dx,dy];
        this.position = [x, y];

        this.addChild(new Renderable(nail));
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.position[0], this.position[1]);

        ctx.restore();
    }
}