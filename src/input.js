export default class Input{
    constructor(){


        this.downkeys = [];
        this.click = [];

        document.onkeydown = (evt)=>{
            this.downkeys[evt.code] = true;
            //console.log(evt.code);
        };

        document.onkeyup = (evt)=>{
            //console.log(evt);
            this.downkeys[evt.code] = false;
        };


        document.onmouseup = (evt) => {
            //console.log(evt);
            this.click[evt.code] = false;
        };

    }

    isKeyDown(keyCode){
        return this.downkeys[keyCode];
    }


}