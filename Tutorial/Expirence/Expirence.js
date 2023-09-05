import * as THREE from "three";

import Camera from "./Camera";
import Renderer from "./Renderer";

import World from "./World/World";

import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Resources from "./Utils/Resources";
import assets from "./Utils/assets";

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
        this.resources = new Resources(assets);

        this.world = new World();

        this.time.on("update", ()=> {
            this.update();
        });

        this.time.on("resize", ()=> {
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
    }
}