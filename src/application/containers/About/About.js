

// import THREE from '../../static/three.js';
const THREE = require('../../static/js/three.js');
require('../../static/js/controls/TrackballControls.js');
require('../../static/js/Detector.js');
const Stats = require('../../static/js/libs/stats.min.js');
const dat = require('../../static/js/libs/dat.gui.min.js');

const sonwScene = (parentElement, bgImage) => {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 2, 10000);
    let renderer = new THREE.WebGLRenderer({antialias:true});
    let cube,controls,stats,mesh,geometry,cubeCamera;
    let sunLight,pointLight,ambientLight;
    let mixer;
    let clock = new THREE.Clock();
    let container = parentElement||document.body;
    let gui,shadowCameraHelper,shadowConfig={
        shadowCameraVisible:false,
        shadowCameraNear:750,
        shadowCameraFar:4000,
        shadowCameraFov:30,
        shadowBias:-0.0002
    };



    function init(url) {
        console.log('init>>>>>>>>',url);
        infrastructure(url);
        animate();
        // loaderBg(url);
        // raycaster();
        // initAmbientLight();
    }

    function infrastructure(url){
        camera.position.set(500,400,1200);
        scene.fog = new THREE.Fog(0,1000,10000);

        //CUBE CAMERA
        cubeCamera = new THREE.CubeCamera(1,10000,128);

        let textureLoader = new THREE.TextureLoader();

        let textureSquares = textureLoader.load(url);
        textureSquares.repeat.set(50,50);
        textureSquares.wrapS = textureSquares.wrapT = THREE.RepeatWrapping;
        textureSquares.magFilter = THREE.NearestFilter;
        textureSquares.format = THREE.RGBFormat;

        let textureNoiseColor = textureLoader.load(url);
        textureNoiseColor.repeat.set(1,1);
        textureNoiseColor.wrapS = textureNoiseColor.wrapT = THREE.RepeatWrapping;
        textureNoiseColor.format = THREE.RGBFormat;

        let textureLava = textureLoader.load(url);
        textureLava.repeat.set(6,2);
        textureLava.wrapS = textureLava.wrapT = THREE.RepeatWrapping;
        textureLava.format = THREE.RGBFormat;

        let path = "./application/static/images/cube/";
        let format = '.jpg';
        let urls = [
            path + 'px'+format,path+'nx'+format,
            path+'py'+format,path+'ny'+format,
            path+'pz'+format,path+'nz'+format
        ];
        
        let reflectionCube = new THREE.CubeTextureLoader().load(urls);

        let groundMaterial = new THREE.MeshPhongMaterial({
            shininess:80,
            color:0xffffff,
            specular:0xffffff,
            map:textureSquares
        });

        let planeGeometry = new THREE.PlaneBufferGeometry(100,100);

        let ground = new THREE.Mesh(planeGeometry,groundMaterial);
        ground.position.set(0,0,0);
        ground.rotation.x = - Math.PI/2;
        ground.scale.set(1000,1000,1000);
        ground.receiveShadow = true;
        scene.add(ground);

        // MATERIALS

        let materialLambert = new THREE.MeshPhongMaterial({shininess:50,color:0xffffff,map:textureNoiseColor});
        let materialPhong = new THREE.MeshPhongMaterial({shininess:50,color:0xffffff,specular:0x999999,map:textureLava});
        let materialPhongCube = new THREE.MeshPhongMaterial({shininess:50,color:0xffffff,specular:0x999999,envMap:cubeCamera.renderTarget.texture});

        // OBJECTS
        let sphereGeometry = new THREE.SphereBufferGeometry(100,64,32);
        let torusGeometry = new THREE.TorusBufferGeometry(240,60,32,64);
        let cubeGeometry = new THREE.BoxBufferGeometry(150,150,150);

        addObject(torusGeometry,materialPhong,0,100,0,0);
        addObject(cubeGeometry,materialLambert,350,75,300,0);

        mesh = addObject(sphereGeometry,materialPhong,0,100,0,0);
        mesh.add(cubeCamera);

        function addObjectColor(geometry,color,x,y,z,ry){
            let material = new THREE.MeshPhongMaterial({color:0xffffff});

            return addObject(geometry,material,x,y,z,ry);
        }

        function addObject(geometry,material,x,y,z,ry){
            let tmpMesh = new THREE.Mesh(geometry,material);

            tmpMesh.material.color.offsetHSL(0.1,-0.1,0);

            tmpMesh.position.set(x,y,z);

            tmpMesh.rotation.y = ry;

            tmpMesh.castShadow = true;
            tmpMesh.receiveShadow = true;

            scene.add(tmpMesh);

            return tmpMesh;
        }

        let bigCube = new THREE.BoxBufferGeometry(50,500,50);
        let midCube = new THREE.BoxBufferGeometry(50,200,50);
        let smallCube = new THREE.BoxBufferGeometry(100,100,100);

        addObjectColor(bigCube,0xff0000,-500,250,0,0);
        addObjectColor(smallCube,0xff0000,-500,50,-150,0);

        addObjectColor(midCube,0x00ff00,500,100,0,0);
        addObjectColor(smallCube,0x00ff00,500,50,-150,0);

        addObjectColor(midCube,0x0000ff,0,100,-500,0);
        addObjectColor(smallCube,0x0000ff,-150,50,-500,0);

        addObjectColor(midCube,0xff00ff,0,100,500,0);
        addObjectColor(smallCube,0xff00ff,-150,50,500,0);

        addObjectColor(new THREE.BoxBufferGeometry(500,10,10),0xffff00,0,600,0,Math.PI/4);
        addObjectColor(new THREE.BoxBufferGeometry(250,10,10),0xffff00,0,600,0,0);

        addObjectColor(new THREE.SphereBufferGeometry(100,32,26),0xffffff,-300,100,300,0);

        let loader = new THREE.JSONLoader();
        loader.load('./application/static/models/sittingBox.json',function(geometry){
            let morphMaterial = new THREE.MeshPhongMaterial({color:0x000000,specular:0xff9900,shininess:50,morphTargets:true,side:THREE.DoubleSide,flatShading:true});
            let mesh = new THREE.Mesh(geometry,morphMaterial);

            mixer = new THREE.AnimationMixer(mesh);
            mixer.clipAction(geometry.animations[0]).setDuration(10).play();

            let s = 200;
            mesh.scale.set(s,s,s);

            mesh.castShadow = true;
            mesh.receiveShadow = true;

            scene.add(mesh);
        });

        ambientLight = new THREE.AmbientLight(0x3f2806);
        scene.add(ambientLight);

        pointLight = new THREE.PointLight(0xffaa00,1,5000);
        scene.add(pointLight);

        sunLight = new THREE.SpotLight(0xffffff,0.3,0,Math.PI/2);
        sunLight.position.set(1000,2000,1000);

        sunLight.castShadow = true;

        sunLight.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(shadowConfig.shadowCameraFov,1,shadowConfig.shadowCameraNear,shadowConfig.shadowCameraFar));
        sunLight.shadow.bias = shadowConfig.shadowBias;

        scene.add(sunLight);

        // SHADOW CAMERA HELPER

        shadowCameraHelper = new THREE.CameraHelper(sunLight.shadow.camera);
        shadowCameraHelper.visible = shadowConfig.shadowCameraVisible;
        scene.add(shadowCameraHelper);

        // RENDERER
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        parentElement.appendChild(renderer.domElement);
       
        
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        controls = new THREE.TrackballControls(camera,renderer.domElement);
        controls.target.set(0,120,0);

        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;

        controls.noZoom = false;
        controls.noPan = false;

        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.15;

        controls.keys=[65,83,68];

        // STATS
        stats = new Stats();
        container.appendChild(stats.dom);

        // EVENT
        window.addEventListener('resize',onWindowdowResize,false);

        // GUI
        gui = new dat.GUI({width:400});

        // SHADOW
        let shadowGUI = gui.addFolder('Shadow');
        shadowGUI.add(shadowConfig,'shadowCameraVisible').onChange(function(){
            sunLight.shadow.camera.near = shadowConfig.shadowCameraNear;
            sunLight.shadow.camera.updateProjectionMatrix();
            shadowCameraHelper.update();
        });

        shadowGUI.add(shadowConfig,'shadowCameraFar',1501,5000).onChange(function(){
            sunLight.shadow.camera.far = shadowConfig.shadowCameraFar;
            sunLight.shadow.camera.updateProjectionMatrix();
            shadowCameraHelper.update();
        });

        shadowGUI.add(shadowConfig,'shadowCameraFov',1,120).onChange(function(){
            sunLight.shadow.camera.for = shadowConfig.shadowCameraFor;
            sunLight.shadow.camera.updateProjectionMatrix();
            shadowCameraHelper.update();
        });

        shadowGUI.add(shadowConfig,'shadowBias',-0.01,0.01).onChange(function(){
            sunLight.shadow.bias = shadowConfig.shadowBias;
        });

        shadowGUI.open();
    }

    function onWindowdowResize(event){
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth,window.innerHeight);
        controls.handlerResize();
    }

    function animate(){
        requestAnimationFrame(animate);
        stats.begin();
        render();
        stats.end();
    }

    function render(){
        let delta = clock.getDelta();

        controls.update();
        if(mixer){
            mixer.update(delta);
        }

        mesh.visible = false;
        cubeCamera.update(renderer,scene);
        mesh.visible = true;

        renderer.render(scene,camera);
    }
    // function initAmbientLight(){
    //     controls = new THREE.TrackballControls( camera );
    //     // var spotLight = new THREE.SpotLight( 0xffffff );
    //     // spotLight.position.set( 100, 1000, 100 );

    //     // spotLight.castShadow = true;

    //     // spotLight.shadow.mapSize.width = 1024;
    //     // spotLight.shadow.mapSize.height = 1024;

    //     // spotLight.shadow.camera.near = 500;
    //     // spotLight.shadow.camera.far = 4000;
    //     // spotLight.shadow.camera.fov = 30;

    //     // scene.add( spotLight );
    // }

    // function raycaster() {
    //     // var raycaster = new THREE.Raycaster();
    //     // var mouse = new THREE.Vector3();

    //     // function onMouseMove(event) {
    //     //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    //     //     mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    //     // }

    //     // function render() {
    //     //     // window.requestAnimationFrame(render);
    //     //     // update the picking ray with the camera and mouse position	
    //     //     raycaster.setFromCamera(mouse, camera);
    //     //     // calculate objects intersecting the picking ray
    //     //     var intersects = raycaster.intersectObjects(scene.children);
    //     //     for (var i = 0; i < intersects.length; i++) {
    //     //         // intersects[i].object.material.color.set(0xffff00);
    //     //     }

    //     //     renderer.render(scene, camera);

    //     // }

    //     // window.addEventListener('mousemove', onMouseMove, false);

    //     // window.requestAnimationFrame(render);
    // }

    // function createElement(material) {
    //     let geometry = new THREE.SphereGeometry(2, 50,50);
    //     let _cube = new THREE.Mesh(geometry, material);
    //     return _cube;
    // }
    // function loaderBg(url) {
    //     let material;
    //     let loader = new THREE.ImageLoader();
    //     loader.load(
    //         url,
    //         (image)=>{
    //             var texture = new THREE.CanvasTexture( image );
    //             material = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff, fog: true });
                
    //             cube = createElement(material);
    //             scene.add(cube);
    //             tick();
    //         },
    //         (xhr)=>{
    //             console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    //         },
    //         ()=>{
    //             console.log( 'An error happened' );
    //         })

    //     // let map = new THREE.Sphere();
    //     // let sprite = new THREE.Mesh(material);
    //     // scene.add(sprite);
        
    // }


    // /**
    //  * animation
    //  */
    // function tick() {
    //     try {
    //         function animate() {
    //             requestAnimationFrame(animate);
    //             renderer.render(scene, camera);
    //             cube.rotation.x += 0.01;
    //             cube.rotation.y += 0.01;
    //         }
    //         animate();
    //     } catch (error) {
    //     }
    // }

    init(bgImage);
}

export default sonwScene;