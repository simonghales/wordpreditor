(function() {
  'use strict';

  angular
    .module('wordpreditor.core')
    .controller('BoxEditorTabContentController', BoxEditorTabContentController);

  /** @ngInject */
  function BoxEditorTabContentController($log, BoxEditorTabData) {
    var vm = this;

    vm.options = BoxEditorTabData['tabs']['content'];

  }
})();
