
```js
// 将图形与材质结合 
new THREE.Mesh(geometry,meterail)

// 基础网络材质 不受光照影响  
new MeshBasicMaterial({ color : 0xcccccc }) 
// Lambert网格材质
// Lambertian模型 称为完全漫反射，容易模拟一些表面，即未经处理的木材或者石材
new MeshLambertMaterial ()
```

## 场景需要 

一个ThreeJs场景需要以下三种元素 
- 相机 : 决定哪些东西在屏幕上渲染 
- 光源 : 决定材质如何显示，以及生成阴影时材质如何使用 
- 物体 : 相机透视图的主要渲染对象 


## 创建场景 

`THREE.Scene()` 对象即场景容器


## 场景函数
