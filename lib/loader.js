'use strict';

const path = require('path');
const mqtt = require('mqtt');

class MQTT {
  constructor(config, app) {
    this.app = app;
    this.config = config;
    this.client = null;
  }

  async init() {
    const {config, app} = this;
    const {url, options, subscribe} = config;

    const client = await mqtt.connect(url, options);
    this.client = client;

    const directory = path.join(app.config.baseDir, 'app/subscriber');
    app.loader.loadToApp(directory, 'subscribers', {
      caseStyle(filepath) {
        return filepath.substring(0, filepath.lastIndexOf('.')).split('/');
      },
    });

    if (subscribe && subscribe.topic && app.subscribers) {
      // const TopicSet = new Set();
      const SubscriberMap = new Map();
      SubscriberMap.set('mqtt', app.subscribers['mqtt']);

      const Subscriber = SubscriberMap.get('mqtt');
      if (!Subscriber) {
        return;
      }

      client.subscribe(subscribe.topic, subscribe.options);
      client.on('message', async (topic, payload) => {
        // topic 规则匹配，绑定队列

        const ctx = this.app.createAnonymousContext();
        const subscriber = new Subscriber(ctx);
        await subscriber.consume(topic, payload);

        // client.end()
      });
    }

    return this.client;
  }

  async publish(topic, payload, options, callback) {
    this.client.publish(topic, payload, options, (err, res) => {
      if (err || res) console.log(err, res);
    });
  }
}

function createClient(config, app) {
  const client = new MQTT(config, app);
  app.beforeStart(async () => {
    await client.init();
    app.coreLogger.info(`[egg-mqtt] instance status OK, client ready`);
  });
  return client;
}

module.exports = app => {
  app.addSingleton('mqtt', createClient);
};
