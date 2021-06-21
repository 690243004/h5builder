import "@s/assets/style/normalize.scss";
import $ from "jquery";
import * as THREE from "three";

class App {
  constructor() {}
  init() {
    this.addScene();
    this.addLight();
    this.render();
  }

  addScene() {
    // 定义 场景
    this.scene = new THREE.Scene();
    // 定义 相机
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // 定义渲染器
    this.renderer = new THREE.WebGL1Renderer();
    this.renderer.setClearColor("#fff");
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // 定义坐标轴
    const axes = new THREE.AxesHelper(20);
    this.scene.add(axes);

    // 定义平面宽高
    const planeGeometry = new THREE.PlaneGeometry(60, 20);
    // 定义平面颜色
    const planeMaterial = new THREE.MeshLambertMaterial({
      color: "0xffffff",
    });
    // 定义网格对象
    this.plane = new THREE.Mesh(planeGeometry, planeMaterial);
    // 绕着x轴旋转90度
    this.plane.rotation.x = -0.5 * Math.PI;
    this.plane.position.x = 15;
    this.plane.position.y = 0;
    this.plane.position.z = 0;

    this.scene.add(this.plane);

    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    const cubeMaterial = new THREE.MeshLambertMaterial({
      color: 0xff0000,
    });
    this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    console.log(this.cube, " this.cube");
    this.cube.position.x = -4;
    this.cube.position.y = 3;
    this.cube.position.z = 0;

    this.scene.add(this.cube);

    const sphereGeometry = new THREE.SphereBufferGeometry(4, 20, 20);
    const sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0x7777ff,
    });
    this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    this.sphere.position.x = 20;
    this.sphere.position.y = 4;
    this.sphere.position.z = 2;

    this.scene.add(this.sphere);

    this.camera.position.x = -30;
    this.camera.position.y = 40;
    this.camera.position.z = 30;

    // 指向场景的中心
    this.camera.lookAt(this.scene.position);
    $("#app").append(this.renderer.domElement);
  }

  addLight() {
    this.spotLight = new THREE.SpotLight(0xffffff);
    this.spotLight.position.set(-40, 60, -10);
    this.scene.add(this.spotLight);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

new App().init();
