(function() {
  'use strict';

  angular
    .module('wordpreditor')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
