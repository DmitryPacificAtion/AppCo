const path = require('path');
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

server.use('/api/user-statistic', (req, res, next) => {
  res.sendFile(path.join(__dirname, './src/mockedData.json'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

server.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

server.listen(5000, function () {
  console.log('Example server listening on port 5000!\n');
});
