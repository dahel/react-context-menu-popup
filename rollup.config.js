import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/index.js',
    format: 'cjs',
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
            plugins: [ 'external-helpers' ]
        })
    ],
    dest: 'bundle.js'
};