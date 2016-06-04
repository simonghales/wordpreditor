(function () {
  'use strict';

  angular
    .module('wordpreditor.core.directives')
    .directive('boxEditorInput', boxEditorInput);

  function boxEditorInput($compile, $log, $templateRequest) {

    var directive = {
      restrict: 'E',
      replace: true,
      scope: {
        model: '=',
        type: '@'
      },
      link: link
    };

    return directive;

    function link(scope, element, attrs) {

      var type = scope.type;
      if(type === 'children') {
        $templateRequest('app/components/core/box-editor/inputs/_box-editor.input-children.html').then(function(html) {
          _insertTemplate(html)
        });
      } else if (type === 'fixed') {
        $templateRequest('app/components/core/box-editor/inputs/_box-editor.input-fixed.html').then(function(html) {
          _insertTemplate(html)
        });
      } else {
        $templateRequest('app/components/core/box-editor/inputs/_box-editor.input-text.html').then(function(html) {
          _insertTemplate(html)
        });
      }

      function _insertTemplate(html) {
        // Convert the html to an actual DOM node
        var template = angular.element(html);
        // Append it to the directive element
        element.append(template);
        // And let Angular $compile it
        $compile(template)(scope);
      }

    }

  }

})();
