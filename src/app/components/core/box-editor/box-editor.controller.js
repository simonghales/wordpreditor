(function() {
  'use strict';

  angular
    .module('wordpreditor.core')
    .controller('BoxEditorController', BoxEditorController);

  /** @ngInject */
  function BoxEditorController() {
    var vm = this;

    vm.tab = 'styling';

    vm.selectTab = selectTab;

    function selectTab(tab) {
      vm.tab = tab;
    }

  }
})();
