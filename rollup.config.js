//const scss = require('rollup-plugin-scss');
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/index.js',
  output: {
    file: 'project/output.js',
    // sourcemap: true
  },
  plugins: [
    scss({
      // name: "ciri.css",
      // include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
      output: "project/styles/ciri.css",
    })
  ]
};

// fix assets generation
// intead of using scss plugin we want to use postcss
