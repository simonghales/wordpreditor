(function() {
  'use strict';

  angular
    .module('wordpreditor.core')
    .controller('BoxEditorTabLayoutController', BoxEditorTabLayoutController);

  /** @ngInject */
  function BoxEditorTabLayoutController($log, BoxEditorTabData, UnitHandlerService) {
    var vm = this;

    vm.options = BoxEditorTabData['tabs']['layout'];

    vm.blurredTextInput = blurredTextInput;

    function blurredTextInput(option) {

      if(option.hasOwnProperty('unit_handler') && option['unit_handler']) {
        option.valid = UnitHandlerService.isValidValue(option);
        $log.debug("am i valid?", option.valid);
      }

    }

  }
})();
