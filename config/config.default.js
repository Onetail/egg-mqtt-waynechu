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

  // Single Database
  // client: {
  //   host: 'host',
  //   port: 'port',
  //   user: 'user',
  //   password: 'password',
  //   clientId: '',
  //   connectTimeout: 30 * 1000,
  //   keepalive: 5,
  //   clean: false,
  // },

  // Multi Databases
  // clients: {
  //   mqtt1: {
  //   host: 'host',
  //   port: 'port',
  //   user: 'user',
  //   password: 'password',
  //   clientId: '',
  //   connectTimeout: 30 * 1000,
  //   keepalive: 5,
  //   clean: false,
  //   },
  //   mqtt2: {
  //   host: 'host',
  //   port: 'port',
  //   user: 'user',
  //   password: 'password',
  //   clientId: '',
  //   connectTimeout: 30 * 1000,
  //   keepalive: 5,
  //   clean: false,
  //   },
  // },
};
