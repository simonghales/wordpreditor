(function() {
  'use strict';

  angular
    .module('wordpreditor.core')
    .controller('BoxEditorTabLayoutController', BoxEditorTabLayoutController);

  /** @ngInject */
  function BoxEditorTabLayoutController($log, BoxEditorTabData) {
    var vm = this;

    vm.options = BoxEditorTabData['tabs']['layout'];

  }
})();
