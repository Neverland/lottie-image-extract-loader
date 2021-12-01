/**
 * @file rollup.config
 * @author ienix(enix@foxmail.com)
 *
 * @since 2021/12/01
 */

import babel from '@rollup/plugin-babel';
import minify from 'rollup-plugin-minify';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'umd',
        name: 'lottie-image-extract-loader',
        sourcemap: true,
        globals: {

        },
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            include: 'src/**',
            babelHelpers: 'bundled',
        }),
        minify({
            umd: {
                dest: 'dist/index.min.js',
            },
        }),
    ],
    external: [

    ],
};
