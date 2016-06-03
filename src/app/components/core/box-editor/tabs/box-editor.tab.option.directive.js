(function () {
  'use strict';

  angular
    .module('wordpreditor.core.directives')
    .directive('boxEditorTabOption', boxEditorTabOption);

  function boxEditorTabOption($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/core/box-editor/tabs/_box-editor.tab.option.html',
      replace: true,
      scope: false
    };

    return directive;

  }

})();
