(function () {
  'use strict';

  angular
    .module('wordpreditor.core.directives')
    .directive('boxEditorTab', boxEditorTab);

  function boxEditorTab($log) {

    var directive = {
      restrict: 'E',
      controller: 'BoxEditorTabController',
      controllerAs: 'boxEditorTabContainerVM',
      template: '<ng-include src="getTemplateUrl()"/>',
      replace: true,
      scope: {
        tab: '='
      }
    };

    return directive;

  }

})();
