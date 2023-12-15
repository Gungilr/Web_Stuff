import * as THREE from "three";

import Camera from "./Camera";
import Renderer from "./Renderer";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";


export default class Expirence
{
    static instance
    constructor(canvas)
    {
        if(Expirence.instance)
        {
             return Expirence.instance
        }
        Expirence.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.sizes = new Sizes();
        this.time = new Time();
        this.camera = new Camera()
        this.renderer = new Renderer();


        this.time.on("update", ()=> {
            this.update();
        });

        this.sizes.on("resize", ()=> {
            this.resize();
        });
    }

    resize()
    {
        this.camera.resize();
        this.renderer.resize();
        this.world.resize();
    }
    
    update()
    {
        this.camera.update();
        this.renderer.update();
        this.world.update();
        this.preloader.update();
    }
}