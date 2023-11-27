/* eslint-disable import/no-extraneous-dependencies */
import { build } from 'esbuild';
import { clean } from 'esbuild-plugin-clean';
import { copy } from 'esbuild-plugin-copy';

// Build Options
const opts = {
  entryPoints: ['src/stylesheets/app.css', 'src/scripts/app.js'],
  outdir: 'dist',
  outbase: './src',
  bundle: true,
  minify: true,
  sourcemap: false,
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
      watch: false,
    }),
  ],
};

// Build Execution
build(opts)
  .then((result) => {
    console.log('⚡ Build complete! ⚡', result);
  })
  .catch(() => { process.exit(1); });
