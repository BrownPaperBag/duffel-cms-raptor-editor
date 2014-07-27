(function() {
  var defaultOptions = {
    plugins: {
      languageMenu: false,
      dockToElement: false,
      logo: false,
      statistics: {
        maximum: false
      },
      dock: {
        docked: true,
        dockToScreen: true,
        under: '.duffel-visor',
      },
      save: {
        plugin: 'saveRest'
      },
      saveRest: {
        url: '/duffel-cms-raptor-editor/admin/content/',
        data: function(html) {
          return {
            name: this.raptor.getElement().data('name'),
            _csrf: this.raptor.getElement().data('csrf'),
            type: this.raptor.getElement().data('type'),
            html: html
          };
        }
      }
    }
  };

  var tagOptions = {
    plugins: {
    }
  };

  var contentOptions = {
    plugins: {
      alignCenter: false,
      alignJustify: false,
      alignLeft: false,
      alignRight: false,
      classMenu: false,
      clearFormatting: false,
      floatLeft: false,
      floatNone: false,
      floatRight: false,
      fontFamilyMenu: false,
      hrCreate: false,
      listOrdered: false,
      listUnordered: false,
      snippetMenu: false,
      tableCreate: false,
      tableDeleteColumn: false,
      tableDeleteRow: false,
      tableInsertColumn: false,
      tableInsertRow: false,
      tableMergeCells: false,
      tableSplitCells: false,
      tagMenu: false,
      textBlockQuote: false,
      textBold: false,
      textItalic: false,
      textSizeDecrease: false,
      textSizeIncrease: false,
      textStrike: false,
      textSub: false,
      textSuper: false,
      textUnderline: false,
    }
  };

  function getOptions(element) {

    var options = defaultOptions;

    var type = $(element).data('type');
    if (type) {
      if (type == 'Tag') {
        options = $.extend(true, {}, defaultOptions, tagOptions, $(this).data('raptor-options'));
      } else if (type === 'Content') {
        options = $.extend(true, {}, defaultOptions, contentOptions, $(this).data('raptor-options'));
      }
    }

    var elementOptions = $(element).data('options');
    if (elementOptions) {
      options = $.extend(true, {}, options, elementOptions);
    }

    if ($(element).data('inline')) {
      options.plugins.dock = {
        dockToElement: true,
        dockToScreen: false,
        docked: true,
        persist: false
      };
      options = $.extend(true, {}, options, {
        autoEnable: true,
        classes: 'raptor-editing-inline',
        draggable: false,
        unify: false,
        unloadWarning: false,
        reloadOnDisable: true,
        plugins: {
          dockToScreen: false
        }
      });
    }

    return options;
  }

  $('.cms-block').each(function() {
    $(this).raptor(getOptions(this));
  });
})();
