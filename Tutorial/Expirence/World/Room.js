import * as THREE from "three";
import Expirence from "../Expirence";

export default class Room{
    constructor(){
        this.expirence = new Expirence();
        this.scene = this.expirence.scene;
        this.resources = this.expirence.resources;
        this.time = this.expirence.time;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        
        this.setModel();
        this.setAnimation();
    }

    setModel()
    {
        this.actualRoom.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }

            if(child.name === "Glass")
            {
                child.material = new THREE.MeshPhysicalMaterial();
                child.material.roughness = 0;
                child.material.color.set(0x549dd2);
                child.material.ior = 3;
                child.material.transmission = 1;
                child.material.opacity = 1;
                child.material.depthWrite = false;
                child.material.depthTest = false;
            }

            if(child.name === "Screen")
            {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen,
                });
            }
        });

        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.11,0.11,0.11);
    }

    setAnimation()
    {
        this.mixer = new THREE.AnimationMixer(this.actualRoom);
        this.swim = this.mixer.clipAction(this.room.animations[0]);
        this.swim.play();
    }

    resize()
    {

    }

    update()
    {
        this.mixer.update(this.time.delta * 0.0009);
    }
}