'use strict';

/**
 * egg-mqtt-waynechu default config
 * @member Config#mqttWaynechu
 * @property {String} SOME_KEY - some description
 */
exports.mqtt = {
  default: {
    connectTimeout: 30 * 1000,
    keepalive: 5,
    clean: false,
  },
  app: true,
  agent: false,
};
