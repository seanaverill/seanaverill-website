import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';





class LoadModelDemo {
  constructor() {
    this._Initialize();
  }

  _Initialize() {
    this._threejs = new THREE.WebGLRenderer({
      antialias: true,
    });
    this._threejs.shadowMap.enabled = true;
    this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
    this._threejs.setPixelRatio(window.devicePixelRatio);
    this._threejs.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this._threejs.domElement);

    window.addEventListener('resize', () => {
      this._OnWindowResize();
    }, false);

    const fov = 20;
    const aspect = 1920 / 1080;
    const near = 1.0;
    const far = 1000.0;
    this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this._camera.position.set(150, 100, 0);

    this._scene = new THREE.Scene();

    this._scene.background = new THREE.Color("rgb(20, 40, 72)");
    //var renderer = new THREE.WebGLRenderer( {alpha: true } );
    // You can leave the clear color at the defaultvalue.
    //renderer.setClearColor( 0x000000, 0 ); //default



    let light = new THREE.AmbientLight(0xFFFFFF, 1.0);
    this._scene.add(light);

    const controls = new OrbitControls(
      this._camera, this._threejs.domElement);
    controls.target.set(0, 20, 0);
    controls.update();






    this._LoadAnimatedModel();
    this._RAF();
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
