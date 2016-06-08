(function () {
  'use strict';

  angular
    .module('wordpreditor.core')
    .factory('UnitHandlerService', UnitHandlerService);

  /** @ngInject */
  function UnitHandlerService($log) {

    var service = {
      isValidValue: isValidValue,
      isValidValueEm: isValidValueEm,
      isValidValuePercentage: isValidValuePercentage,
      isValidValuePixels: isValidValuePixels
    };

    return service;

    function isValidValue(option) {

      var valid = false;

      var value = option.value;
      var units = option.units;

      for (var i = 0, len = units.length; i < len; i++) {
        if(valid) break;
        var unit = units[i];

        switch(unit) {
          case 'px':
                valid = isValidValuePixels(value);
                break;
          case 'em':
                valid = isValidValueEm(value);
                break;
          case '%':
                valid = isValidValuePercentage(value);
                break;
        }

      }

      return valid;

    }

    function isValidValueEm(value) {

      var unit = 'em';
      return _isValidValueCommon(value, unit);

    }

    function isValidValuePercentage(value) {

      var unit = '%';
      return _isValidValueCommon(value, unit);

    }

    function isValidValuePixels(value) {

      var unit = 'px';
      return _isValidValueCommon(value, unit);

    }

    // Private

    function _isValidValueCommon(value, unit) {

      var endsWidth = value.endsWith(unit);

      if(!endsWidth) return false;

      var beginningOfValue = value.substring(0, value.length - unit.length);

      if(!_isNumeric(beginningOfValue)) return false;

      return true;

    }

    function _isNumeric(num){
      return !isNaN(num)
    }

  }

})();
