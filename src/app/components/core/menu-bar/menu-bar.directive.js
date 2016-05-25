(function () {
  'use strict';

  angular
    .module('wordpreditor.core.directives')
    .directive('menuBar', menuBar);

  function menuBar($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/core/menu-bar/_menu-bar.html',
      replace: true,
      scope: false
    };

    return directive;

  }

})();
