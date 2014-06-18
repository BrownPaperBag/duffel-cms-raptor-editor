var path = require('path');

module.exports = function(app) {
  var assetManager = app.get('assetManager');

  assetManager.addFiles({
    profile: 'duffel-cms-raptor-editor',
    after: 'jquery',
    permission: 'manage-content',
    css: [
      path.join(app.get('rootDirectory'), '/private/css/raptor-front-end.css'),
    ],
    js: [
      path.join(app.get('rootDirectory'), '/private/javascript/raptor.js'),
      path.join(__dirname, '/../../private/javascript/raptor-initialisation.js'),
    ]
  });
};
