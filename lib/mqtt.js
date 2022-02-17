'use strict';

const assert = require('assert');
const mqtt = require('mqtt');
const plugin = 'egg-mqtt-waynechu';

module.exports = app => {
  app.addSingleton('mqtt', createOneClient);
};

function createOneClient(config, app) {
  assert(
    config.host && config.port && config.clientId,
    `[${plugin}] 'host: ${config.host}', 'port: ${config.port}',  'clientId: ${config.database}' is required!`
  );

  app.coreLogger.info(
    `[${plugin}] connecting %s@%s:%s`,
    config.clientId,
    config.host,
    config.port
  );

  const client = mqtt.connect({
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password,
    keepalive: config.keepalive,
    clientId: config.clientId,
    clean: config.clean,
    connectTimeout: config.connectTimeout,
  });

  app.beforeStart(function* () {
    app.coreLogger.info(`[${plugin}] start successfully!`);
  });
  return client;
}
