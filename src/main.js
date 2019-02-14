import Engine from "./engine.js";
import Player from "./player.js";
import Map from "./map"
import GameObject from "./gameObject";
import meSprite from "./img/pipeMap1.png";
import Renderable from "./renderable";

import mapImg from "./img/pipeMap1.png";
import bullet from "./bullet";

let engine = new Engine();

let player = new Player(50, 50);
let map = new Map(null);
let Bullet = new bullet(50, 50);

engine.addObject(map);
engine.addObject(player);

engine.update = (dt) =>{

   if(engine.input.isKeyDown("KeyW")){
        player.translate(0, -100 * dt);
        player.facing = 2;
    }
    if(engine.input.isKeyDown("KeyS")){
        player.translate(0, 100 * dt);
        player.facing = 1;
    }
    if(engine.input.isKeyDown("KeyA")){
        player.translate(-100 * dt, 0);
        player.facing = 1;
    }
    if(engine.input.isKeyDown("KeyD")){
        player.translate(100 * dt, 0);
        player.facing = 0;
    }

    addEventListener('mousedown', onDown, false);

    function getMousePos(canvas, evt) {

        return {
            x: evt.clientX,
            y: evt.clientY
        };
    }

    function onDown( evt )
    {
        //var i = 0;
        //var valid = false;
        console.log("shoot");

        let y = getMousePos(document, evt).y;
        let x = getMousePos(document, evt).x;

        engine.addObject(Bullet);
    }


};