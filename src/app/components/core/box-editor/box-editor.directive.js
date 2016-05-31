(function () {
  'use strict';

  angular
    .module('wordpreditor.core.directives')
    .directive('boxEditor', boxEditor);

  function boxEditor($log) {

    var directive = {
      restrict: 'E',
      controller: 'BoxEditorController',
      controllerAs: 'boxEditorVM',
      templateUrl: 'app/components/core/box-editor/_box-editor.html',
      replace: true,
      scope: false
    };

    return directive;

  }

})();
