import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
    input: 'ammo.js',
    plugins:[
        nodeResolve(),
        commonjs(),
        terser()
    ],
    output: [
        {
            file: 'dist/ammo.js',
            format: 'umd',
            name: 'Ammo',
        },
        {
            file: 'dist/ammo.module.js',
            format: 'esm',
            name: 'Ammo',
        }
    ]
}
