import "@s/assets/style/normalize.scss";
import $ from "jquery";
import * as THREE from "three";
import Stats from "stats.js";

class App {
  constructor() {
    this.step = 0;
  }
  init() {
    this.addStats();
    this.addScene();
    this.addLight();
    this.addShadow();
    this.renderScene();
    setInterval(() => {
      this.addCube()
    }, 1000);
  }

  addStats() {
    this.stats = new Stats();
    this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(this.stats.dom);
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
    const planeGeometry = new THREE.PlaneGeometry(60, 40,1,1);
    this.planeGeometry = planeGeometry 
    // 定义平面颜色
    const planeMaterial = new THREE.MeshLambertMaterial({
      color: "#fff",
    });
    // 定义网格对象
    this.plane = new THREE.Mesh(planeGeometry, planeMaterial);
    // 绕着x轴旋转90度
    this.plane.rotation.x = -0.5 * Math.PI;
    this.plane.position.x = 15;
    this.plane.position.y = 0;
    this.plane.position.z = 0;

    this.scene.add(this.plane);



    this.camera.position.x = -30;
    this.camera.position.y = 40;
    this.camera.position.z = 30;

    // 指向场景的中心
    this.camera.lookAt(this.scene.position);

    $("#app").append(this.renderer.domElement);
  }

  addLight() {
    this.spotLight = new THREE.SpotLight("#66ccff");
    this.spotLight.position.set(-40, 60, -10);
    this.scene.add(this.spotLight);
    // 环境光 
    this.ambientLight = new THREE.AmbientLight(0x0c0c0c)
    this.scene.add(this.ambientLight)
  }

  addShadow() {
    this.renderer.setClearColor("#eee");
    // 渲染阴影启动
    this.renderer.shadowMap.enabled = true;
    // 定义哪些物体 接受 阴影
    this.plane.receiveShadow = true;

  }

  renderScene() {
    requestAnimationFrame(this.renderScene.bind(this));
    this.render();
  }

  addCube() {
    const cubeSize = Math.ceil(Math.random() * 3)
    const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
    const cubeMeterial = new THREE.MeshLambertMaterial({
      color: Math.random() * 0xff0000
    })
    const cube = new THREE.Mesh(cubeGeometry, cubeMeterial)
    cube.name = "cube-" + this.scene.children.length
    cube.position.x = -30 + Math.round(Math.random() * this.planeGeometry.parameters.width)
    cube.position.y = Math.round(Math.random() * 5)
    cube.position.z = -20 + Math.round(Math.random() * this.planeGeometry.parameters.height)
    this.scene.add(cube)
    this.numberOfObjects = this.scene.children.length

  }

  render() {
    this.stats.update();
    this.renderer.render(this.scene, this.camera);
  }
}

new App().init();