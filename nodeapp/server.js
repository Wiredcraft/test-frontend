'use strict';

const path = require('path');  
const express = require('express')
const models = require('./server/models/index')
const dataMigration = require('./dataMigration')

// Constants
const PORT = process.env.EXPOSE_PORT || 8080;

// App
const app = express();

// Env
const ENV_DEV = process.env.NODE_ENV !== 'production';

if (ENV_DEV) {
  const webpack = require('webpack');  
  const webpackMiddleware = require('webpack-dev-middleware');  
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.js');

  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    noInfo: true,
    stats: {
      colors: true
      //hash: false,
      //timings: true,
      //chunks: false,
      //chunkModules: false,
      //modules: false,
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(__dirname + '/build'));
}

models.sequelize.sync({force:true}).then(function () {

  dataMigration.init(models);

  const server = app.listen(PORT, function() {
    console.log('Running on http://localhost:' + PORT);
  });
});

// Routes
require('./server/routes')(app);

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
