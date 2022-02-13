import {MqttClient, IClientOptions} from 'mqtt';

interface EggMqttOptions {
  default?: object;
  app?: boolean;
  agent?: boolean;
  client?: IClientOptions;
}
declare module 'egg' {
  interface IMqtt extends MqttClient {}
  interface Application {
    mqtt: IMqtt;
  }
  interface Context {
    mqtt: IMqtt;
  }

  interface EggAppConfig {
    mqtt: EggMqttOptions;
  }
}
