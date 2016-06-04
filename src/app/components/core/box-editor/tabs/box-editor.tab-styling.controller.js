(function() {
  'use strict';

  angular
    .module('wordpreditor.core')
    .controller('BoxEditorTabStylingController', BoxEditorTabStylingController);

  /** @ngInject */
  function BoxEditorTabStylingController($log, BoxEditorTabData) {
    var vm = this;

    vm.options = BoxEditorTabData['tabs']['styling'];

    vm.tab = 'default';

    vm.selectTab = selectTab;

    function selectTab(tab) {
      vm.tab = tab;
    }

  }
})();
