/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');
const SveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: SveltePreprocess({
    postcss: true,
    typescript: {
      tsconfigFile: path.resolve('tsconfig.json'),
    },
    defaults: {
      script: 'typescript',
      style: 'sass',
    },
  }),
};
