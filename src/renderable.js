import missing from './img/missing.jpeg';

//let CHAR_SRC = "./img/rick.png";

export default class Renderable{

    constructor(image = missing, startFrame = 0, frameCount = 0, framesx = 1, framesy = 1, speed = 1){
        this.img = new Image();
        this.img.src = image;

        this.frame = startFrame;

        this.startFrame = startFrame;
        this.frameCount = frameCount;

        this.framesx = framesx;
        this.framesy = framesy;

        this.subWidth = this.img.width/this.framesx;
        this.subHeight = this.img.height/this.framesy;

        this.speed = speed;

        this.animTime = new Date().getTime();
    }

    draw(ctx) {

        let t = new Date().getTime();
        if(t > this.animTime){
           this.frame++;
           this.animTime = t + 1000;
        }
        if(this.frame > this.startFrame + this.frameCount){
            this.frame = this.startFrame;
        }


        let posx = (this.frame%this.framesx)*this.subWidth;
        let posy = Math.floor(this.frame/this.framesx)*this.subHeight;
        ctx.drawImage(this.img, posx, posy, this.subWidth, this.subHeight, 0, 0, this.subWidth, this.subHeight);

    }


}