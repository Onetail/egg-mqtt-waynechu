'use strict';

const mock = require('egg-mock');

describe('test/mqtt-waynechu.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/mqtt-waynechu-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, mqttWaynechu')
      .expect(200);
  });
});
