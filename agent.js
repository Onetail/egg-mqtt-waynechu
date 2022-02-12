'use strict';

const mqtt = require('./lib/mqtt');
module.exports = app => {
  if (app.config.mqtt.agent) {
    mqtt(app);
  }
};
