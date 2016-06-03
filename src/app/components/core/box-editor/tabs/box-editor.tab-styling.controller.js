(function() {
  'use strict';

  angular
    .module('wordpreditor.core')
    .controller('BoxEditorTabStylingController', BoxEditorTabStylingController);

  /** @ngInject */
  function BoxEditorTabStylingController() {
    var vm = this;

    vm.tab = 'default';

    vm.selectTab = selectTab;

    function selectTab(tab) {
      vm.tab = tab;
    }

  }
})();
