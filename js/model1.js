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
    //const canvas = document.querySelector("#c");
    //canvas.width = 400;
    //canvas.height = 300;

    //Create WebGL Render
    this._threejs = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    //Sets Size and Pixel Ratio
    //this._threejs.setPixelRatio(window.devicePixelRatio);
    this._threejs.setSize(window.innerWidth/3, window.innerWidth/3); //window.innerWidth, window.innerHeight

    container.appendChild(this._threejs.domElement);

    window.addEventListener('resize', () => {
      this._OnWindowResize();
    }, false);

    //Camera Setup
    //const fov = 5;
    //const aspect = 1920 / 1080;
    const near = 1.0;
    const far = 20.0;
    const width = 5;
    const height = 5;
    //this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this._camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, near, far );
    this._camera.position.set(3, 1, 3);

    //Create Scene
    this._scene = new THREE.Scene();

    //Background
    //this._scene.background = new THREE.Color("rgb(20, 40, 72)");


    //Directional Light
    let light = new THREE.DirectionalLight( 0xffffff, 2.5 );
    light.position.set( 10, 50, 10 );
    light.target.position.set(0, 0, 0);
    this._scene.add(light);

    //Hemisphere Light
    let hemilight = new THREE.HemisphereLight( 0xffffbb, 0x080820, .5 );
    this._scene.add(hemilight);

    //Ambient Light
    let amblight = new THREE.AmbientLight( 0x404040, 1);
    this._scene.add(amblight);

    //Orbit Controls
    const controls = new OrbitControls(
      this._camera, this._threejs.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();

    //Run Animaiton
    this._LoadAnimatedModel();
    this._RAF();
  }


  _OnWindowResize() {
    this._camera.aspect = 500 / 500;
    this._camera.updateProjectionMatrix();
    this._threejs.setSize(window.innerWidth/3, window.innerWidth/3);
  }

  _LoadAnimatedModel() {
    const loader = new GLTFLoader();
    loader.setPath('./resources/');
    loader.load('porsche959.glb', (gltf) => {
   

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