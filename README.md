# sync-ammo

* Synchronize version ammo.js and ESM version ammo.js
* 同步执行的 ammo.js 物理库, 支持 UMD 引入和 ESM 导入

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
