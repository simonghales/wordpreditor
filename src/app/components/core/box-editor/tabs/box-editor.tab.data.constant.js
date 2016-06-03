(function() {
  'use strict';

  angular
    .module('wordpreditor.core')
    .constant('BoxEditorTabData', {
      'tabs': {
        'layout': {
          'sections': [
            {
              'title': 'Dimensions',
              'rows': [
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Width',
                      'type': 'text'
                    },
                    {
                      'label': 'Max Width',
                      'type': 'text'
                    }
                  ]
                },
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Height',
                      'type': 'text'
                    },
                    {
                      'label': 'Max Height',
                      'type': 'text'
                    }
                  ]
                }
              ]
            },
            {
              'title': 'Margin',
              'rows': [
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Top',
                      'type': 'text'
                    },
                    {
                      'label': 'Bottom',
                      'type': 'text'
                    }
                  ]
                },
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Left',
                      'type': 'text'
                    },
                    {
                      'label': 'Right',
                      'type': 'text'
                    }
                  ]
                }
              ]
            },
            {
              'title': 'Alignment',
              'rows': [
                {
                  'type': 'single',
                  'inputs': [
                    {
                      'label': 'Horizontal',
                      'type': 'text'
                    }
                  ]
                },
                {
                  'type': 'single',
                  'inputs': [
                    {
                      'label': 'Vertical',
                      'type': 'text'
                    }
                  ]
                }
              ]
            },
            {
              'title': 'Columns',
              'rows': [
                {
                  'type': 'single',
                  'inputs': [
                    {
                      'label': 'Number',
                      'type': 'text'
                    }
                  ]
                },
                {
                  'type': 'single',
                  'inputs': [
                    {
                      'label': 'Ratio',
                      'type': 'text'
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    });

})();
