(function() {
  'use strict';

  angular
    .module('wordpreditor.core')
    .constant('BoxEditorTabData', {
      'tabs': {
        'content': {
          'sections': [
            {
              'title': '',
              'type': 'plain',
              'rows': [
                {
                  'type': 'single',
                  'classes': 'wdpred__box-editor__option-container--wider',
                  'inputs': [
                    {
                      'label': 'Name',
                      'type': 'text'
                    }
                  ]
                },
                {
                  'type': 'single',
                  'classes': 'wdpred__box-editor__option-container--wider',
                  'inputs': [
                    {
                      'label': 'Content Type',
                      'type': 'text'
                    }
                  ]
                },
                {
                  'type': 'single',
                  'classes': 'wdpred__box-editor__option-container--wider',
                  'inputs': [
                    {
                      'label': 'Group Children',
                      'type': 'text'
                    }
                  ]
                }
              ]
            }
          ]
        },
        'layout': {
          'sections': [
            {
              'title': 'Dimensions',
              'type': 'default',
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
              'type': 'default',
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
              'type': 'default',
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
              'type': 'default',
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
        },
        'styling': {
          'sections': [
            {
              'title': 'Background',
              'type': 'default',
              'rows': [
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Color',
                      'type': 'text'
                    },
                    {
                      'label': 'Gradient',
                      'type': 'text'
                    }
                  ]
                },
                {
                  'type': 'single',
                  'inputs': [
                    {
                      'label': 'Image',
                      'type': 'text'
                    }
                  ]
                }
              ]
            },
            {
              'title': 'Padding',
              'type': 'default',
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
              'title': 'Border Width',
              'type': 'default',
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
              'title': 'Border Color',
              'type': 'default',
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
              'title': 'Border Radius',
              'type': 'default',
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
              'title': 'Shadow',
              'type': 'default',
              'rows': [
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Horizontal',
                      'type': 'text'
                    },
                    {
                      'label': 'Vertical',
                      'type': 'text'
                    }
                  ]
                },
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Blur',
                      'type': 'text'
                    },
                    {
                      'label': 'Spread',
                      'type': 'text'
                    }
                  ]
                },
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Color',
                      'type': 'text'
                    },
                    {
                      'label': 'Inset',
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
