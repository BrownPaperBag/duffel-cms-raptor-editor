var CMSContent = require('duffel-cms').CMSContent();

module.exports = function(parameters) {
  var app = parameters.app;

  app.protect.post('/duffel-cms-raptor-editor/admin/content', 'manage-content', function(req, res){
    CMSContent.findOne({ name: req.body.name }, function(error, cmsContent) {

      if (!cmsContent) {
        cmsContent = new CMSContent(updatedFields);
      }

      cmsContent.name = req.body.name;
      cmsContent.html = req.body.html;
      cmsContent.type = req.body.type;
      cmsContent.owner_id = req.body.owner_id;
      cmsContent.owner_type = req.body.owner_type;
      cmsContent.saved = true;

      cmsContent.save(function completed(error) {
        if (error) {
          throw error;
        }
        res.json({
          message: 'Content saved successfully'
        });
      });
    });
  });
};

