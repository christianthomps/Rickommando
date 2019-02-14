import GameObject from "./gameObject.js";
import Input from "./input";

export default class Engine{
    constructor(){

        let STAGE_WIDTH 	= 400,
            STAGE_HEIGHT 	= 2000;

        document.body.style.margin = "0px";
        document.body.style.overflow = "show";
        this.canvas = document.createElement("canvas");
        this.canvas.width = STAGE_WIDTH;
        this.canvas.height = STAGE_HEIGHT;
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");

        this.lastTime = new Date().getTime();

        this.objs = [];

        this.input = new Input();

        window.requestAnimationFrame(this.loop.bind(this));

    }

    addObject(obj){
        if(obj instanceof GameObject){
            this.objs.push(obj);
        }
        else{
            console.error("invalid object");
        }
    }


    loop(){
        let time = new Date().getTime();
        let dt = (time - this.lastTime) / 1000;


        //do updates here

        if(this.update){
            this.update(dt);
        }

        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.objs.forEach(obj=>{
            obj.draw(this.ctx);
        })


        //do drawing here
        this.lastTime = time;
        window.requestAnimationFrame(this.loop.bind(this));

    }
}