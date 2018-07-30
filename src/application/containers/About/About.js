// import THREE from '../../static/three.js';
const THREE = require('../../static/js/three.js');

const sonwScene = (parentElement, bgImage) => {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    let cube;
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (parentElement) {
        parentElement.appendChild(renderer.domElement);
    } else {
        document.body.appendChild(renderer.domElement);
    } 

    function init(url) {
        infrastructure();
        loaderBg(url);
        
        
        raycaster();
    }

    function infrastructure(){
        camera.position.z = 5;
        camera.lookAt( new THREE.Vector3() );
    }

    function raycaster() {
        var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector3();

        function onMouseMove(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
        }

        function render() {
            // window.requestAnimationFrame(render);
            // update the picking ray with the camera and mouse position	
            raycaster.setFromCamera(mouse, camera);
            // calculate objects intersecting the picking ray
            var intersects = raycaster.intersectObjects(scene.children);
            for (var i = 0; i < intersects.length; i++) {
                // intersects[i].object.material.color.set(0xffff00);
            }

            renderer.render(scene, camera);

        }

        window.addEventListener('mousemove', onMouseMove, false);

        window.requestAnimationFrame(render);
    }

    function createElement(material) {
        let geometry = new THREE.SphereGeometry(2, 50,50);
        let _cube = new THREE.Mesh(geometry, material);
        return _cube;
    }
    function loaderBg(url) {
        let material;
        let loader = new THREE.ImageLoader();
        loader.load(
            url,
            (image)=>{
                var texture = new THREE.CanvasTexture( image );
                material = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff, fog: true });
                
                cube = createElement(material);
                scene.add(cube);
                tick();
            },
            ( xhr)=>{
                console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
            },
            ()=>{
                console.log( 'An error happened' );
            })

        // let map = new THREE.Sphere();
        // let sprite = new THREE.Mesh(material);
        // scene.add(sprite);
        
    }


    /**
     * animation
     */
    function tick() {
        try {
            function animate() {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
            }
            animate();
        } catch (error) {
        }
    }

    init(bgImage);
}

export default sonwScene;