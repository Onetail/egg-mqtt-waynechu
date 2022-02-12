'use strict';

const loader = require('./lib/loader');
module.exports = app => {
  if (app.config.mqtt.app) {
    loader(app);
  }
};
