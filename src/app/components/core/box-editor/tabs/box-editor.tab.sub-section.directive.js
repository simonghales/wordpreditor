(function () {
  'use strict';

  angular
    .module('wordpreditor.core.directives')
    .directive('boxEditorTabSubSection', boxEditorTabSubSection);

  function boxEditorTabSubSection($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/core/box-editor/tabs/_box-editor.tab.sub-section.html',
      replace: true,
      scope: false
    };

    return directive;

  }

})();
