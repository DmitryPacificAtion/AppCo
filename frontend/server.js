const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const server = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);

server.use(webpackDevMiddleware(compiler, {
  open: config.devServer.host,
  publicPath: config.output.publicPath
}));

server.listen(3000, function () {
  console.log('Example server listening on port 3000!\n');
});