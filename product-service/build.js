const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    platform: 'node',
    target: 'es2020',
    outfile: 'dist/index.js',
    external: ['express'],
    sourcemap: true
}).catch(() => process.exit(1));
