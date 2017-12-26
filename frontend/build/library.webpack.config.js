const path = require('path');
const webpack = require('webpack');

module.exports = {
   context: process.cwd(),
   resolve: {
      extensions: ['.js', '.jsx', '.json', '.less', '.css'],
      modules: [__dirname, 'node_modules']
   },

   entry: {
      library: [
        'vue',
        'vuex',
        'vuetify',
        'axios',
        'vue-router',
        'lodash'
      ]
   },
   output: {
      filename: '[name].dll.js',
      path: path.resolve(__dirname, './library'),
      library: '[name]'
   },
   plugins: [
    new webpack.DllPlugin({
      context: __dirname,
       name: '[name]',
       path: path.resolve(__dirname, './library/[name].json')
    })
 ]
};
