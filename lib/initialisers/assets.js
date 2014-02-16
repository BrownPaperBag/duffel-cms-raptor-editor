var path = require('path');

module.exports = function(app, rootDirectory) {
  var assetify = app.get('assetify');
  if (!assetify) {
    return;
  }
  assetify.addFiles({
    profile: 'logged-in-cms',
    css: [
      path.join(rootDirectory, '/private/stylesheets/raptor.css'),
    ],
    js: [
      path.join(rootDirectory, '/private/javascript/raptor.js'),
      path.join(__dirname, '/../../private/javascript/raptor-initialisation.js'),
    ]
  });
};
