import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: {
            index: 'src/index.ts',
            rtdb: 'src/rtdb.ts',
            rematch: 'src/rematch.ts',
            functions: 'src/functions.ts',
        },
        output: {
            dir: 'dist',
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [
            typescript({
                outDir: 'dist',
            }),
        ],
    },
    {
        input: {
            index: 'src/index.ts',
            rtdb: 'src/rtdb.ts',
            rematch: 'src/rematch.ts',
            functions: 'src/functions.ts',
        },
        output: {
            dir: 'dist',
            format: 'es',
            sourcemap: true,
        },
        plugins: [
            typescript({
                outDir: 'dist',
            }),
        ],
    },
];
