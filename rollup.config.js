import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import terser from "@rollup/plugin-terser";

export default {
    input: 'src/index.js',
    plugins:[
        nodeResolve(),
        commonjs(),
        terser(),
        copy({
            targets:[
                {
                    src: 'src/index.d.ts',
                    dest: 'dist'
                }
            ]
        })
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
