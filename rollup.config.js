import babel from 'rollup-plugin-babel';

const default_config = {
    input: 'src/main.js',
    sourceMap: 'inline',
    moduleName: 'businesh',
    plugins: [babel({ exclude: 'node_modules/**', runtimeHelpers: true })]
};

export default [
    {
        ...default_config,
        output: {
            file: 'dist/bundle.cjs.js',
            format: 'cjs'
        }
    },
    {
        ...default_config,
        output: {
            file: 'dist/bundle.es.js',
            format: 'es'
        }
    },
    {
        ...default_config,
        output: {
            file: 'dist/bundle.umd.js',
            format: 'umd'
        }
    }
]
