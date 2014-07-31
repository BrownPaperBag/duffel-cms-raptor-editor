(function() {
  angular.module('raptor', [])
  .directive('raptor', [
    '$timeout',
    function($timeout) {
      return {
        link: function(scope, element, attributes) {
          $timeout(function() {
            $(element).raptor(getCMSOptions(element));
          });
        }
      };
    }]);
})();
