//const scss = require('rollup-plugin-scss');
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/index.js',
  output: {
    file: 'project/output.js'
  },
  plugins: [
    scss({
      output: "project/styles/ciri.css",
    })
  ]
};


