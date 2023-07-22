<template>
    <div ref="canvasContainer"></div>
</template>
  
<script>
    import * as THREE from 'three';
    var cube;
    var scene;
    var camera;
    var renderer;
    init();
    animate();

    function init()
    {
        window.addEventListener('resize', resize);
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 0.1, 1000);
        camera.position.z = 10;

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
    }
        
    function resize()
    {
        renderer.setSize( window.innerWidth, window.innerHeight);
    }
    
    function animate() {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    }
</script>
  