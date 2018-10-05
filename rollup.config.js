import babel from 'rollup-plugin-babel';

export default {
    input: 'src/main.js',
    sourceMap: 'inline',
    moduleName: 'businesh',
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        sourcemap: true
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
        })
    ]
}
