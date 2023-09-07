import * as THREE from "three";
import Expirence from "../Expirence";
import GSAP from "gsap"

export default class Room{
    constructor(){
        this.expirence = new Expirence();
        this.scene = this.expirence.scene;
        this.resources = this.expirence.resources;
        this.time = this.expirence.time;
        this.camera = this.expirence.camera;




    }

    resize()
    {

    }

    update()
    {
        //console.log(this.lerp.target);
        //console.log(this.lerp.current);
    }
}