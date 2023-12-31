import * as THREE from "three";
import Expirence from "../Expirence";

export default class Room{
    constructor(){
        this.expirence = new Expirence();
        this.scene = this.expirence.scene;

        this.setFloor();
    }

    setFloor()
    {
        this.geometry = new THREE.PlaneGeometry(100, 100);
        this.material = new THREE.MeshStandardMaterial({
            color: 0xffe6a2,
            side: THREE.BackSide,
        });
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.plane);
        this.plane.rotation.x = Math.PI / 2;
        this.plane.position.y = -0.3;
        this.plane.receiveShadow = true;
    }

    resize()
    {

    }

    update()
    {
        
    }
}