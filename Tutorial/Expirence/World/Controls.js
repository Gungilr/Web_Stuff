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

        this.progress = 0;
        this.dummyVector = new THREE.Vector3( 0, 0, 0 );

        this.lerp = {
            curent: 0,
            target: 0,
            ease: 0.1,
        }

        this.position = new THREE.Vector3( 0, 0, 0 );

        this.setPath();
        this.onWheel();
    }

    
    
    setPath()
    {
        //Create a closed wavey loop
        this.curve = new THREE.CatmullRomCurve3( [
            new THREE.Vector3( -10, 0, 10 ),
            new THREE.Vector3( -5, 5, 5 ),
            new THREE.Vector3( 0, 0, 0 ),
            new THREE.Vector3( 5, -5, 5 ),
            new THREE.Vector3( 10, 0, 10 )
        ], true);

        const points = this.curve.getPoints( 50 );
        const geometry = new THREE.BufferGeometry().setFromPoints( points );

        const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );

        // Create the final object to add to the scene
        const curveObject = new THREE.Line( geometry, material );

        this.scene.add(curveObject);
    }

    onWheel()
    {
        window.addEventListener("wheel", (e)=>{

            if( e.deltaY > 0)
                this.lerp.target += 0.1;
            else
            {
                this.lerp.target -= 0.1;
            }

        });   
    }

    resize()
    {

    }

    update()
    {
        this.lerp.current +=  Math.abs(this.lerp.target - this.lerp.curent) * this.lerp.ease;

        //console.log(this.lerp.target);
        console.log(this.lerp.curent);

        this.curve.getPointAt(this.progress % 1 ,this.dummyVector);

        this.camera.orthographicCamera.position.copy(this.dummyVector);
    }
}