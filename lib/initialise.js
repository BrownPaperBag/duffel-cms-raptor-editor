var controllerLoader = require('controller-loader'),
  path = require('path');

module.exports = function(app, mongoose, connection, rootDirectory) {
  require('../lib/initialisers/assets')(app, rootDirectory);

  controllerLoader.load(path.resolve(path.join(__dirname, '../lib/controllers')), function(controller) {
    require(controller)({
      app: app
    });
  });
};
