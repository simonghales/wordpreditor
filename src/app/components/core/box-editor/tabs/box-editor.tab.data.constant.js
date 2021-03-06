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
                      'type': 'text',
                      'value': 'Awesome name thingy'
                    }
                  ]
                },
                {
                  'type': 'single',
                  'classes': 'wdpred__box-editor__option-container--wider',
                  'inputs': [
                    {
                      'label': 'Parent',
                      'type': 'fixed',
                      'value': 'unnamed_block_01'
                    }
                  ]
                },
                {
                  'type': 'single',
                  'classes': 'wdpred__box-editor__option-container--wider',
                  'inputs': [
                    {
                      'label': 'Content Type',
                      'type': 'fixed',
                      'value': 'Block'
                    }
                  ]
                },
                {
                  'type': 'single',
                  'classes': 'wdpred__box-editor__option-container--wider',
                  'inputs': [
                    {
                      'label': 'Group Children',
                      'type': 'children',
                      'value': ''
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
                      'type': 'text',
                      'value': '50',
                      'valid': false,
                      'unit_handler': true,
                      'units': [
                        'px',
                        'em',
                        '%'
                      ]
                    },
                    {
                      'label': 'Max Width',
                      'type': 'text',
                      'value': '410px',
                      'valid': true,
                      'unit_handler': true,
                      'units': [
                        'px',
                        'em',
                        '%'
                      ]
                    }
                  ]
                },
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Height',
                      'type': 'text',
                      'value': '',
                      'valid': true,
                      'unit_handler': true,
                      'units': [
                        'px',
                        'em',
                        '%'
                      ]
                    },
                    {
                      'label': 'Max Height',
                      'type': 'text',
                      'value': '',
                      'valid': true,
                      'unit_handler': true,
                      'units': [
                        'px',
                        'em',
                        '%'
                      ]
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
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Bottom',
                      'type': 'text',
                      'value': ''
                    }
                  ]
                },
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Left',
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Right',
                      'type': 'text',
                      'value': ''
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
                      'type': 'radio',
                      'value': 'auto',
                      'radio_options': [
                        {
                          'label': 'Auto',
                          'value': 'auto'
                        },
                        {
                          'label': 'Left',
                          'value': 'left'
                        },
                        {
                          'label': 'Center',
                          'value': 'center'
                        },
                        {
                          'label': 'Right',
                          'value': 'right'
                        }
                      ]
                    }
                  ]
                },
                {
                  'type': 'single',
                  'inputs': [
                    {
                      'label': 'Vertical',
                      'type': 'radio',
                      'value': 'auto',
                      'radio_options': [
                        {
                          'label': 'Auto',
                          'value': 'auto'
                        },
                        {
                          'label': 'Top',
                          'value': 'top'
                        },
                        {
                          'label': 'Center',
                          'value': 'center'
                        },
                        {
                          'label': 'Bottom',
                          'value': 'bottom'
                        }
                      ]
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
                      'type': 'text',
                      'value': ''
                    }
                  ]
                },
                {
                  'type': 'single',
                  'inputs': [
                    {
                      'label': 'Ratio',
                      'type': 'text',
                      'value': ''
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
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Gradient',
                      'type': 'text',
                      'value': ''
                    }
                  ]
                },
                {
                  'type': 'single',
                  'inputs': [
                    {
                      'label': 'Image',
                      'type': 'text',
                      'value': ''
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
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Bottom',
                      'type': 'text',
                      'value': ''
                    }
                  ]
                },
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Left',
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Right',
                      'type': 'text',
                      'value': ''
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
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Bottom',
                      'type': 'text',
                      'value': ''
                    }
                  ]
                },
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Left',
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Right',
                      'type': 'text',
                      'value': ''
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
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Bottom',
                      'type': 'text',
                      'value': ''
                    }
                  ]
                },
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Left',
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Right',
                      'type': 'text',
                      'value': ''
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
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Bottom',
                      'type': 'text',
                      'value': ''
                    }
                  ]
                },
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Left',
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Right',
                      'type': 'text',
                      'value': ''
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
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Vertical',
                      'type': 'text',
                      'value': ''
                    }
                  ]
                },
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Blur',
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Spread',
                      'type': 'text',
                      'value': ''
                    }
                  ]
                },
                {
                  'type': 'double',
                  'inputs': [
                    {
                      'label': 'Color',
                      'type': 'text',
                      'value': ''
                    },
                    {
                      'label': 'Inset',
                      'type': 'text',
                      'value': ''
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
