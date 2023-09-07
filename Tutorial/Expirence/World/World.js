import * as THREE from "three";
import Expirence from "../Expirence";
import Enviroment from "./Enviroment";
import Controls from "./Controls"
import Floor from "./Floor"

import Room from "./Room";

export default class World{
    constructor(){
        this.expirence = new Expirence();
        this.sizes = this.expirence.sizes;
        this.scene = this.expirence.scene;
        this.canvas = this.expirence.canvas;
        this.camera = this.expirence.camera;
        this.resources = this.expirence.resources;

        this.resources.on("ready", ()=> {
            this.enviroment = new Enviroment();
            this.room = new Room();
            console.log("Room Created");

            this.Floor = new Floor();

            this.controls = new Controls();
        });
    }

    resize()
    {

    }

    update()
    {
        if(this.room)
        {
            this.room.update();
        }
        if(this.controls)
        {
            this.controls.update();
        }
    }
}