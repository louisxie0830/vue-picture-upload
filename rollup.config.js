import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
    entry: './src/vue-picture-upload.js',
    dest: './dist/vue-picture-upload.js',

    plugins: [
        resolve(),
        vue({
          css: 'dist/vue-picture-upload.css'
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['es2015-rollup']
        }),
    ],

    format: 'umd',
    moduleName: 'vue-picture-upload'
}