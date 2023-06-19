import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: {
            'index.cjs': 'src/index.ts',
        },
        output: {
            dir: 'lib',
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [
            typescript({
                outDir: 'lib',
            }),
            terser(),
        ],
    },
    {
        input: {
            'index.esm': 'src/index.ts',
        },
        output: {
            dir: 'lib',
            format: 'es',
            sourcemap: true,
        },
        plugins: [
            typescript({
                outDir: 'lib',
            }),
            terser(),
        ],
    },
];
