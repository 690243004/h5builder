
```js
// 将图形与材质结合 
new THREE.Mesh(geometry,meterail)

// 基础网络材质 不受光照影响  
new MeshBasicMaterial({ color : 0xcccccc }) 
// Lambert网格材质
// Lambertian模型 称为完全漫反射，容易模拟一些表面，即未经处理的木材或者石材
new MeshBasicMaterial()
```