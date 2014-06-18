var controllerLoader = require('controller-loader'),
  path = require('path');

module.exports = function(app, mongoose, connection, callback) {
  require('../lib/initialisers/assets')(app);
  controllerLoader.load(path.resolve(path.join(__dirname, '../lib/controllers')), function(controller) {
    require(controller)({
      app: app
    });
  }, callback);
};
