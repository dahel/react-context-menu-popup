// rollup.config.js
//import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    entry: './example/example.js',
    format: 'cjs',
    plugins: [
        //resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    dest: './example/bundle.js'
};