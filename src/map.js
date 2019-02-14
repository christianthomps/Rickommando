import GameObject from "./gameObject";
import Renderable from "./renderable";
import pipeMap from "./img/pipeMap1.png";

export default class map extends GameObject{
    constructor(mapjson){

        super();
        this.addChild(new Renderable(pipeMap));
    }

}