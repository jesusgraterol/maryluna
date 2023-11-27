/* eslint-disable import/no-extraneous-dependencies */
import { context } from 'esbuild';
import { clean } from 'esbuild-plugin-clean';
import { copy } from 'esbuild-plugin-copy';

// Context Options
const opts = {
  entryPoints: ['src/stylesheets/app.css', 'src/scripts/app.js'],
  outdir: 'dist',
  outbase: './src',
  bundle: true,
  minify: false,
  sourcemap: true,
  platform: 'browser',
  loader: {
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.woff': 'dataurl',
    '.woff2': 'dataurl',
    '.eot': 'dataurl',
    '.ttf': 'dataurl',
    '.svg': 'dataurl',
  },
  plugins: [
    clean({
      patterns: ['./dist/*'],
    }),
    copy({
      assets: [
        { from: ['./src/assets/**/*'], to: ['./assets'] },
        { from: ['./src/index.html'], to: ['./'] },
      ],
      watch: true,
    }),
  ],
};

// Serve Execution
const serveContext = await context(opts);
const { port } = await serveContext.serve({
  servedir: 'dist',
  port: 9000,
});
console.log(`Server Listening: http://localhost:${port}/\n`);
