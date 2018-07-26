// import THREE from '../../static/three.js';
const THREE = require('../../static/three.js');

const sonwScene =  (parentElement)=>{
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    if(parentElement){
        parentElement.appendChild(renderer.domElement);
    }else{
        document.body.appendChild(renderer.domElement);
    }

    let geometry = new THREE.BoxGeometry(1,1,1);
    let material = new THREE.MeshBasicMaterial();
    let cube = new THREE.Mesh(geometry,material);
    scene.add(cube);
    camera.position.z = 5;

   try {
    function animate(){
        requestAnimationFrame(animate);
        renderer.render(scene,camera);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }

    animate();
   } catch (error) {
   }
}

export default sonwScene;