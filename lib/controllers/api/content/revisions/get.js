var CMSContent = require('duffel-cms').CMSContent();

module.exports = function(parameters) {
  var app = parameters.app;

  app.protect.get('/duffel-cms-raptor-editor/admin/content/revisions/:name/:owner_id/:owner_type', 'manage-content', function(req, res){
    CMSContent.findOne({
      where: {
        name: req.params.name,
        owner_id: req.params.owner_id,
        owner_type: req.params.owner_type
      }
    }, function(error, cmsContent) {
      if (error) {
        throw error;
      }

      var revisions = {};

      if (!cmsContent) {
        return res.json(revisions);
      }

      revisions.current = {
        content: cmsContent.html,
        identifier: 0,
        updated: +new Date(cmsContent.updated)
      };
      revisions.revisions = [];

      cmsContent.cms_revisions(function(error, cmsRevisions) {
        if (error) {
          throw error;
        }

        if (!cmsRevisions) {
          return res.json(revisions);
        }

        cmsRevisions.cms_revisions(function(error, cmsRevisions) {
          if (error) {
            throw error;
          }
          cmsRevisions.reverse().forEach(function(cmsRevision, index) {
            // Don't show the first, will be the same as current
            if (!index) {
              return;
            }
            revisions.revisions.push({
              content: cmsRevision.html,
              identifier: index + 1,
              updated: +new Date(cmsRevision.created)
            });
          });

          res.json(revisions);
        });

      });
    });
  });
};

