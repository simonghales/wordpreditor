(function () {
  'use strict';

  angular
    .module('wordpreditor.core.directives')
    .directive('boxEditorTabContent', boxEditorTabContent);

  function boxEditorTabContent($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/core/box-editor/tabs/_box-editor.tab-content.html',
      replace: true,
      scope: false
    };

    return directive;

  }

})();
