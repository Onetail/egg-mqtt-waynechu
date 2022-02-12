import {MqttClient, IClientOptions} from 'mqtt';

interface EggMqttOptions {
  default?: object;
  app?: boolean;
  agent?: boolean;
  client?: IClientOptions;
}

declare module 'egg' {
  interface Application {
    mqtt: MqttClient & Singleton<MqttClient>;
  }

  interface EggAppConfig {
    mqtt: EggMqttOptions;
  }
}
