(function() {
  'use strict';

  angular
    .module('wordpreditor.core')
    .controller('BoxEditorTabController', BoxEditorTabController);

  /** @ngInject */
  function BoxEditorTabController($scope) {
    var vm = this;

    $scope.getTemplateUrl = function() {
      //basic handling
      if ($scope.tab == "content")
        return "app/components/core/box-editor/tabs/_box-editor.tab-content.html";
      if ($scope.tab == "layout")
        return "app/components/core/box-editor/tabs/_box-editor.tab-layout.html";
      if ($scope.tab == "styling")
        return "app/components/core/box-editor/tabs/_box-editor.tab-styling.html";
      if ($scope.tab == "extra")
        return "app/components/core/box-editor/tabs/_box-editor.tab-extra.html";
    }

  }
})();
