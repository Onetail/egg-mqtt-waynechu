'use strict';

/**
 * egg-mqtt-waynechu default config
 * @member Config#mqttWaynechu
 * @property {String} SOME_KEY - some description
 */
exports.mqtt = {
  host: 'mqtt://127.0.0.1',
  port: 1883,
  username: 'username',
  password: 'password',
  clientId: 'default',
  options: {
    keeplive: 60,
    protocolId: 'MQTT',
    protocol: 'MQTT',
    protocolVersion: 5,
    clean: true,
    rejectUnauthorized: false,
    reconnectPeriod: 1000,
    connectTimeout: 30000,
  },
};
