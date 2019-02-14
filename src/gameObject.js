import Renderable from "./renderable.js"

export default class GameObject{
    constructor(){
        this.position = [0,0];
        this.children = [];

    }

    translate(x,y){

        let xLoc = this.position[0];
        let yLoc = this.position[1];

        if(xLoc > 220){
            this.position[0]+=0;
            if(x < 0 ){
                this.position[0] += x;
            }
        }
        else if(xLoc < 0){
            this.position[0]+=0;
            if(x>0){
                this.position[0]+=x;
            }
        }

        else if(xLoc > -20 && xLoc < 220){
            this.position[0] += x;
        }

        if(yLoc > 2020){
            this.position[1]+=0;
            if(y < 0){
                this.position[1] += y;
            }
        }
        else if(yLoc < 0){
            this.position[0]+=0;
            if(y>0){
                this.position[1]+=y;
            }
        }

        else if(yLoc > 0 && yLoc < 2000){
            this.position[1] += y;
        }







        //this.position[0] += x;
        //this.position[1] += y;
    }

    addChild(child){
        this.children.push(child);
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.position[0], this.position[1]);

        this.children.forEach(child =>{
            if(child instanceof GameObject){
                child.draw(ctx);
            }
            if(child instanceof Renderable){
                child.draw(ctx);
            }
        });

        ctx.restore();


    }
}