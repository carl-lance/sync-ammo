# sync-ammo

* Synchronize version ammo.js and ESM version ammo.js
* 同步执行的 ammo.js 物理库, 支持 UMD 引入和 ESM 导入


* Modified based on [ammo.js](https://github.com/kripken/ammo.js)
* 基于[ammo.js](https://github.com/kripken/ammo.js) 修改

## UMD 引入

```javascript
<script src="dist/ammo.js"></script>
<script>
    // 其他变量和这里一致
    const vec3 = new Ammo.btVector3();
    
</script>

```

## ESM 导入

```javascript
import Ammo from 'dist/ammo.module.js';

// 其他变量和这里一致
const vec3 = new Ammo.btVector3();

```

## 使用示例

```javascript
// Sets the collision type of the physics engine - software and rigid body collision
const collisionConfiguration = new Ammo.btSoftBodyRigidBodyCollisionConfiguration();
// dispatcher is referenced by the collision detection algorithm allocator
const dispatcher = new Ammo.btCollisionDispatcher( collisionConfiguration );
      
// The collision rough measurement method interface
const broadphase = new Ammo.btDbvtBroadphase();
        
// Configuration constraint Solver - (Sequence pulse constraint Solver)
// Make objects interact correctly, taking into account gravity, forces, collisions, etc
const solver = new Ammo.btSequentialImpulseConstraintSolver();
// Configuration Constraint Solver - (Software Constraint Solver)
const softBodySolver = new Ammo.btDefaultSoftBodySolver();

// Create a software-enabled, rigid physical world
physicsWorld = new Ammo.btSoftRigidDynamicsWorld( dispatcher, broadphase, solver, collisionConfiguration, softBodySolver );

// Set the gravity of the physical world
physicsWorld.setGravity( new Ammo.btVector3( 0, -9.8, 0 ) );
physicsWorld.getWorldInfo().set_m_gravity( new Ammo.btVector3( 0, -9.8, 0 ) );

```
