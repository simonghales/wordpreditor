(function() {
  'use strict';

  angular
    .module('wordpreditor', [

      'wordpreditor.core',

      'ngAnimate',
      'ngSanitize',
      'ngMessages',
      'ui.router',
      'toastr'
    ]);

  //

  angular.module('wordpreditor.core', [
    'wordpreditor.core.controllers',
    'wordpreditor.core.directives',
    'wordpreditor.core.services'
  ]);

  angular.module('wordpreditor.core.controllers', []);

  angular.module('wordpreditor.core.directives', []);

  angular.module('wordpreditor.core.services', []);

})();
