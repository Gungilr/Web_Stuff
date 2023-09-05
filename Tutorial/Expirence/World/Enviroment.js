import * as THREE from "three";
import Expirence from "../Expirence";

export default class Enviroment{
    constructor(){
        this.expirence = new Expirence();
        this.scene = this.expirence.scene;
        this.resources = this.expirence.resources;
        
        this.setSunlight();       
    }

    setSunlight()
    {
        this.sungLight = new THREE.DirectionalLight("#FFFFFF", 3);
        this.sungLight.castShadow = true;
        this.sungLight.shadow.camera.far = 20;
        this.sungLight.shadow.mapSize.set(2048,2048);
        this.sungLight.shadow.normalBias = 0.05;
        this.sungLight.position.set(-1.5,7,3);
        this.scene.add(this.sungLight);

        const light = new THREE.AmbientLight("#FFFFFF", 1);
        this.scene.add(light);
    }

    resize()
    {

    }

    update()
    {
        
    }
}