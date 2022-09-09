import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

//import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

class LoadModelDemo {
  constructor() {
    this._Initialize();
  }

  _Initialize() {

    const container = document.getElementById("threejscontainer");


    //Create WebGL Render
    this._threejs = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    //Sets Size and Pixel Ratio
    this._threejs.setPixelRatio(window.devicePixelRatio);
    this._threejs.setSize(500,500); //window.innerWidth, window.innerHeight

    container.appendChild(this._threejs.domElement);

    window.addEventListener('resize', () => {
      this._OnWindowResize();
    }, false);

    //Camera Setup
    const fov = 15;
    const aspect = 1920 / 1080;
    const near = 1.0;
    const far = 1000.0;
    this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this._camera.position.set(30, 30, 45);

    //Create Scene
    this._scene = new THREE.Scene();

    //Background
    //this._scene.background = new THREE.Color("rgb(20, 40, 72)");


    //Directional Light
    let light = new THREE.DirectionalLight( 0xffffff, 1.5 );
    light.position.set( 10, 50, 10 );
    light.target.position.set(-5, 2.5, -5);
    this._scene.add(light);

    //Hemisphere Light
    let hemilight = new THREE.HemisphereLight( 0xffffbb, 0x080820, .3 );
    this._scene.add(hemilight);

    //Orbit Controls
    const controls = new OrbitControls(
      this._camera, this._threejs.domElement);
    controls.target.set(-5, 2.5, -5);
    controls.update();

    //Run Animaiton
    this._LoadAnimatedModel();
    this._RAF();
  }


  _OnWindowResize() {
    this._camera.aspect = window.innerWidth / window.innerHeight;
    this._camera.updateProjectionMatrix();
    this._threejs.setSize(window.innerWidth/2, window.innerHeight/2);
  }

  _LoadAnimatedModel() {
    const loader = new GLTFLoader();
    loader.setPath('./resources/');
    loader.load('House_Still_Privacy.glb', (gltf) => {
   

      const params = {
        target: gltf.scene,
        camera: this._camera,
      }
      this._scene.add(gltf.scene);
    });
  }





  _RAF() {
    requestAnimationFrame((t) => {
      if (this._previousRAF === null) {
        this._previousRAF = t;
      }

      this._RAF();

      this._threejs.render(this._scene, this._camera);
      
      this._previousRAF = t;
    });
  }


}


let _APP = null;

window.addEventListener('DOMContentLoaded', () => {
  _APP = new LoadModelDemo();
});
