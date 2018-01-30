/**
 * Created by meathill on 2017/7/18.
 */

import Uglify from 'uglifyjs-webpack-plugin';

const config = require('./webpack.config');

config.devtool = config.watch = false;
config.plugins = [
  new Uglify(),
];

module.exports = config;