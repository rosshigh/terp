define('videos',['exports', 'aurelia-framework', './resources/data/files'], function (exports, _aureliaFramework, _files) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Resources = undefined;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Resources = exports.Resources = (_dec = (0, _aureliaFramework.inject)(_files.Files), _dec(_class = function () {
    function Resources(filesModule) {
      _classCallCheck(this, Resources);

      this.filesModule = filesModule;
    }

    Resources.prototype.activate = function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.units = [];
                for (i = 0; i < 9; i++) {
                  this.units.push([]);
                }
                _context.next = 4;
                return this.filesModule.getDocsByType('VIDEO');

              case 4:
                this.filesModule.filteredList.forEach(function (item) {
                  var parts = item.name.split(":");
                  item.name = item.file.fileName.split('.')[0];
                  _this.units[parseInt(parts[0]) - 1].push(item);
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function activate() {
        return _ref.apply(this, arguments);
      }

      return activate;
    }();

    return Resources;
  }()) || _class);
});
define('text!videos.html', ['module'], function(module) { module.exports = "<template>\r\n        <style>\r\n            ul li{ /* second well;*/\r\n                list-style-type:none;\r\n            }\r\n        </style>\r\n        \r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <h2 show.bind=\"units[0].length\" style=\"margin-top:40px;\">Unit 1</h2>\r\n                        <ul show.bind=\"units[0].length\"  class=\"list-group\">\r\n                            <li repeat.for=\"file of units[0]\" >\r\n                                <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                            </li>\r\n                        </ul>\r\n                    <h2 show.bind=\"units[1].length\" style=\"margin-top:40px;\">Unit 2</h2>\r\n                        <ul show.bind=\"units[1].length\" class=\"list-group\">\r\n                            <li repeat.for=\"file of units[1]\" >\r\n                                <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                            </li>\r\n                        </ul>\r\n                    <h2 show.bind=\"units[2].length\" style=\"margin-top:40px;\">Unit 3</h2>\r\n                        <ul show.bind=\"units[2].length\" class=\"list-group\">\r\n                            <li repeat.for=\"file of units[2]\" >\r\n                                <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                            </li>\r\n                        </ul>\r\n                 \r\n                    <h2 show.bind=\"units[3].length\" style=\"margin-top:40px;\">Unit 4</h2>\r\n                        <ul show.bind=\"units[3].length\" class=\"list-group\">\r\n                            <li repeat.for=\"file of units[2]\" >\r\n                                <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                            </li>\r\n                        </ul>\r\n                \r\n                    <h2 show.bind=\"units[4].length\" style=\"margin-top:40px;\">Unit 5</h2>\r\n                        <ul show.bind=\"units[4].length\" class=\"list-group\">\r\n                            <li repeat.for=\"file of units[2]\" >\r\n                                <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                            <h2 show.bind=\"units[5].length\" style=\"margin-top:40px;\">Unit 6</h2>\r\n                            <ul show.bind=\"units[5].length\"  class=\"list-group\">\r\n                                <li repeat.for=\"file of units[0]\" >\r\n                                    <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                                </li>\r\n                            </ul>\r\n                        <h2 show.bind=\"units[6].length\" style=\"margin-top:40px;\">Unit 7</h2>\r\n                            <ul show.bind=\"units[6].length\" class=\"list-group\">\r\n                                <li repeat.for=\"file of units[1]\" >\r\n                                    <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                                </li>\r\n                            </ul>\r\n                        <h2 show.bind=\"units[7].length\" style=\"margin-top:40px;\">Unit 8</h2>\r\n                            <ul show.bind=\"units[7].length\" class=\"list-group\">\r\n                                <li repeat.for=\"file of units[2]\" >\r\n                                    <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                                </li>\r\n                            </ul>\r\n                     \r\n                        <h2 show.bind=\"units[8].length\" style=\"margin-top:40px;\">Unit 9</h2>\r\n                            <ul show.bind=\"units[8].length\" class=\"list-group\">\r\n                                <li repeat.for=\"file of units[2]\" >\r\n                                    <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                                </li>\r\n                            </ul>\r\n                    \r\n                        <h2 show.bind=\"units[9].length\" style=\"margin-top:40px;\">Unit 10</h2>\r\n                            <ul show.bind=\"units[9].length\" class=\"list-group\">\r\n                                <li repeat.for=\"file of units[2]\" >\r\n                                    <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                                </li>\r\n                            </ul>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n    </template>"; });
define('schedule',['exports', 'aurelia-framework', 'moment', './resources/data/events'], function (exports, _aureliaFramework, _moment, _events) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Schedule = undefined;

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _asyncToGenerator(fn) {
		return function () {
			var gen = fn.apply(this, arguments);
			return new Promise(function (resolve, reject) {
				function step(key, arg) {
					try {
						var info = gen[key](arg);
						var value = info.value;
					} catch (error) {
						reject(error);
						return;
					}

					if (info.done) {
						resolve(value);
					} else {
						return Promise.resolve(value).then(function (value) {
							step("next", value);
						}, function (err) {
							step("throw", err);
						});
					}
				}

				return step("next");
			});
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var Schedule = exports.Schedule = (_dec = (0, _aureliaFramework.inject)(_events.Events), _dec(_class = function () {
		function Schedule(events) {
			_classCallCheck(this, Schedule);

			this.events = events;
		}

		Schedule.prototype.activate = function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								console.log('here');
								_context.next = 3;
								return this.events.getEventsArray();

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function activate() {
				return _ref.apply(this, arguments);
			}

			return activate;
		}();

		return Schedule;
	}()) || _class);
});
define('text!schedule.html', ['module'], function(module) { module.exports = "<template>\n\t<div class=\"container\">\n\t\t<h1>Schedule</h1>\n\t\t<calendar events.bind=\"events.eventsArray\" view=\"month\" weekends.bind=\"true\" day-click.bind=\"dayClicked\" \n\t\teoptions.bind=\"{ eventLimit: true, header: {left: 'My title', right:  'today month,agendaWeek,agendaDay,list prev,next'} }\" ></calendar>\n\t</div>\n</template>"; });
define('resources/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['./elements/calendar', './editor/editor']);
  }
});
define('resources/elements/calendar',['exports', 'aurelia-framework', 'moment', 'fullcalendar', 'jquery'], function (exports, _aureliaFramework, _moment, _fullcalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.calendar = undefined;

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

  var calendar = exports.calendar = (_dec = (0, _aureliaFramework.customElement)('calendar'), _dec2 = (0, _aureliaFramework.inlineView)('<template><require from="../css/fullcalendar.css"></require></template>'), _dec3 = (0, _aureliaFramework.inject)(Element, _aureliaFramework.BindingEngine), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
    function calendar(element, bindingEngine) {
      var _this = this;

      _classCallCheck(this, calendar);

      _initDefineProp(this, 'weekends', _descriptor, this);

      _initDefineProp(this, 'dayClick', _descriptor2, this);

      _initDefineProp(this, 'eventClick', _descriptor3, this);

      _initDefineProp(this, 'events', _descriptor4, this);

      _initDefineProp(this, 'options', _descriptor5, this);

      _initDefineProp(this, 'view', _descriptor6, this);

      _initDefineProp(this, 'that', _descriptor7, this);

      this.subscription = null;

      this.element = element;
      this.bindingEngine = bindingEngine;

      this.subscription = this.bindingEngine.collectionObserver(this.events).subscribe(function (splices) {
        _this.eventListChanged(splices);
      });
    }

    calendar.prototype.fireEvent = function fireEvent(element, type, data) {
      var changeEvent = void 0;

      if (window.CustomEvent) {
        if (type === 'dayClicked') {
          changeEvent = new CustomEvent('change', {
            detail: {
              value: data
            },
            bubbles: true
          });
        } else {
          changeEvent = new CustomEvent('click', {
            detail: {
              value: data
            },
            bubbles: true
          });
        }
      } else if (type === 'dayClicked') {
        changeEvent = document.createEvent('CustomEvent');
        changeEvent.initCustomEvent('change', true, true, {
          detail: {
            value: data
          }
        });
      } else {
        changeEvent = document.createEvent('CustomEvent');
        changeEvent.initCustomEvent('click', true, true, {
          detail: {
            value: data
          }
        });
      }
      this.element.dispatchEvent(changeEvent);
    };

    calendar.prototype.eventListChanged = function eventListChanged(splices) {
      if (this.calendar) this.calendar.fullCalendar('refetchEvents');
    };

    calendar.prototype.eventsChanged = function eventsChanged(newValue) {
      var _this2 = this;

      if (this.subscription !== null) {
        this.subscription.dispose();
      }
      this.subscription = this.bindingEngine.collectionObserver(this.events).subscribe(function (splices) {
        _this2.eventListChanged(splices);
      });

      if (this.calendar) this.calendar.fullCalendar('refetchEvents');
    };

    calendar.prototype.attached = function attached() {
      var _this3 = this;

      this.calendar = $(this.element);
      var eventSource = function eventSource(start, end, timezone, callback) {
        callback(_this3.events);
      };

      var defaultValues = {
        defaultView: this.view || 'month',
        weekends: this.weekends,
        firstDay: 1,
        timezone: 'Chicago/United States',
        events: eventSource,
        eventOrder: 'Array'
      };

      this.calendar.fullCalendar(Object.assign(defaultValues, this.options));
    };

    return calendar;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'weekends', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'dayClick', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'eventClick', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'events', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'view', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'that', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class);
});
define('resources/editor/styles',[], function () {
	'use strict';

	CKEDITOR.stylesSet.add('default', [{ name: 'Italic Title', element: 'h2', styles: { 'font-style': 'italic' } }, { name: 'Subtitle', element: 'h3', styles: { 'color': '#aaa', 'font-style': 'italic' } }, {
		name: 'Special Container',
		element: 'div',
		styles: {
			padding: '5px 10px',
			background: '#eee',
			border: '1px solid #ccc'
		}
	}, { name: 'Marker', element: 'span', attributes: { 'class': 'marker' } }, { name: 'Big', element: 'big' }, { name: 'Small', element: 'small' }, { name: 'Typewriter', element: 'tt' }, { name: 'Computer Code', element: 'code' }, { name: 'Keyboard Phrase', element: 'kbd' }, { name: 'Sample Text', element: 'samp' }, { name: 'Variable', element: 'var' }, { name: 'Deleted Text', element: 'del' }, { name: 'Inserted Text', element: 'ins' }, { name: 'Cited Work', element: 'cite' }, { name: 'Inline Quotation', element: 'q' }, { name: 'Language: RTL', element: 'span', attributes: { 'dir': 'rtl' } }, { name: 'Language: LTR', element: 'span', attributes: { 'dir': 'ltr' } }, {
		name: 'Styled Image (left)',
		element: 'img',
		attributes: { 'class': 'left' }
	}, {
		name: 'Styled Image (right)',
		element: 'img',
		attributes: { 'class': 'right' }
	}, {
		name: 'Compact Table',
		element: 'table',
		attributes: {
			cellpadding: '5',
			cellspacing: '0',
			border: '1',
			bordercolor: '#ccc'
		},
		styles: {
			'border-collapse': 'collapse'
		}
	}, { name: 'Borderless Table', element: 'table', styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } }, { name: 'Square Bulleted List', element: 'ul', styles: { 'list-style-type': 'square' } }, { name: 'Clean Image', type: 'widget', widget: 'image', attributes: { 'class': 'image-clean' } }, { name: 'Grayscale Image', type: 'widget', widget: 'image', attributes: { 'class': 'image-grayscale' } }, { name: 'Featured Snippet', type: 'widget', widget: 'codeSnippet', attributes: { 'class': 'code-featured' } }, { name: 'Featured Formula', type: 'widget', widget: 'mathjax', attributes: { 'class': 'math-featured' } }, { name: '240p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-240p' }, group: 'size' }, { name: '360p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-360p' }, group: 'size' }, { name: '480p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-480p' }, group: 'size' }, { name: '720p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-720p' }, group: 'size' }, { name: '1080p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-1080p' }, group: 'size' }, { name: '240p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-240p' }, group: 'size' }, { name: '360p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-360p' }, group: 'size' }, { name: '480p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-480p' }, group: 'size' }, { name: '720p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-720p' }, group: 'size' }, { name: '1080p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-1080p' }, group: 'size' }]);
});
define('text!resources/editor/skins/moono-lisa/editor_iequirks.css', ['module'], function(module) { module.exports = "/*\r\nCopyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.\r\nFor licensing, see LICENSE.md or http://ckeditor.com/license\r\n*/\r\n.cke_reset{margin:0;padding:0;border:0;background:transparent;text-decoration:none;width:auto;height:auto;vertical-align:baseline;box-sizing:content-box;position:static;transition:none}.cke_reset_all,.cke_reset_all *,.cke_reset_all a,.cke_reset_all textarea{margin:0;padding:0;border:0;background:transparent;text-decoration:none;width:auto;height:auto;vertical-align:baseline;box-sizing:content-box;position:static;transition:none;border-collapse:collapse;font:normal normal normal 12px Arial,Helvetica,Tahoma,Verdana,Sans-Serif;color:#000;text-align:left;white-space:nowrap;cursor:auto;float:none}.cke_reset_all .cke_rtl *{text-align:right}.cke_reset_all iframe{vertical-align:inherit}.cke_reset_all textarea{white-space:pre-wrap}.cke_reset_all textarea,.cke_reset_all input[type=\"text\"],.cke_reset_all input[type=\"password\"]{cursor:text}.cke_reset_all textarea[disabled],.cke_reset_all input[type=\"text\"][disabled],.cke_reset_all input[type=\"password\"][disabled]{cursor:default}.cke_reset_all fieldset{padding:10px;border:2px groove #e0dfe3}.cke_reset_all select{box-sizing:border-box}.cke_reset_all table{table-layout:auto}.cke_chrome{display:block;border:1px solid #d1d1d1;padding:0}.cke_inner{display:block;background:#fff;padding:0;-webkit-touch-callout:none}.cke_float{border:0}.cke_float .cke_inner{padding-bottom:0}.cke_top,.cke_contents,.cke_bottom{display:block;overflow:hidden}.cke_top{border-bottom:1px solid #d1d1d1;background:#f8f8f8;padding:6px 8px 2px;white-space:normal}.cke_float .cke_top{border:1px solid #d1d1d1}.cke_bottom{padding:6px 8px 2px;position:relative;border-top:1px solid #d1d1d1;background:#f8f8f8}.cke_browser_ios .cke_contents{overflow-y:auto;-webkit-overflow-scrolling:touch}.cke_resizer{width:0;height:0;overflow:hidden;border-width:10px 10px 0 0;border-color:transparent #bcbcbc transparent transparent;border-style:dashed solid dashed dashed;font-size:0;vertical-align:bottom;margin-top:6px;margin-bottom:2px}.cke_hc .cke_resizer{font-size:15px;width:auto;height:auto;border-width:0}.cke_resizer_ltr{cursor:se-resize;float:right;margin-right:-4px}.cke_resizer_rtl{border-width:10px 0 0 10px;border-color:transparent transparent transparent #bcbcbc;border-style:dashed dashed dashed solid;cursor:sw-resize;float:left;margin-left:-4px;right:auto}.cke_wysiwyg_div{display:block;height:100%;overflow:auto;padding:0 8px;outline-style:none;box-sizing:border-box}.cke_panel{visibility:visible;width:120px;height:100px;overflow:hidden;background-color:#fff;border:1px solid #d1d1d1}.cke_menu_panel{padding:0;margin:0}.cke_combopanel{width:150px;height:170px}.cke_panel_frame{width:100%;height:100%;font-size:12px;overflow:auto;overflow-x:hidden}.cke_panel_container{overflow-y:auto;overflow-x:hidden}.cke_panel_block:focus{outline:0}.cke_panel_list{margin:0;padding:0;list-style-type:none;white-space:nowrap}.cke_panel_listItem{margin:0;padding:0}.cke_panel_listItem a{padding:6px 7px;display:block;color:inherit!important;text-decoration:none;overflow:hidden;text-overflow:ellipsis}.cke_hc .cke_panel_listItem a{border-style:none}.cke_panel_listItem.cke_selected a,.cke_panel_listItem a:hover,.cke_panel_listItem a:focus,.cke_panel_listItem a:active{background-color:#e9e9e9}.cke_panel_listItem a:focus{outline:1px dotted #000}.cke_hc .cke_panel_listItem a:hover,.cke_hc .cke_panel_listItem a:focus,.cke_hc .cke_panel_listItem a:active{border:2px solid;padding:4px 5px}.cke_panel_listItem p,.cke_panel_listItem h1,.cke_panel_listItem h2,.cke_panel_listItem h3,.cke_panel_listItem h4,.cke_panel_listItem h5,.cke_panel_listItem h6,.cke_panel_listItem pre{margin-top:0;margin-bottom:0}.cke_panel_grouptitle{cursor:default;font-size:11px;font-weight:bold;white-space:nowrap;margin:0;padding:6px 6px 7px 6px;color:#484848;border-bottom:1px solid #d1d1d1;background:#f8f8f8}.cke_colorblock{padding:10px;font-size:11px;font-family:'Microsoft Sans Serif',Tahoma,Arial,Verdana,Sans-Serif}.cke_colorblock,.cke_colorblock a{text-decoration:none;color:#000}a.cke_colorbox{padding:2px;float:left;width:20px;height:20px}.cke_rtl a.cke_colorbox{float:right}a:hover.cke_colorbox,a:focus.cke_colorbox,a:active.cke_colorbox{outline:0;padding:0;border:2px solid #139ff7}a:hover.cke_colorbox{border-color:#bcbcbc}span.cke_colorbox{width:20px;height:20px;float:left}.cke_rtl span.cke_colorbox{float:right}a.cke_colorauto,a.cke_colormore{border:#fff 1px solid;padding:3px;display:block;cursor:pointer}a.cke_colorauto{padding:0;border:1px solid transparent;margin-bottom:6px;height:26px;line-height:26px}a.cke_colormore{margin-top:10px;height:20px;line-height:19px}a:hover.cke_colorauto,a:hover.cke_colormore,a:focus.cke_colorauto,a:focus.cke_colormore,a:active.cke_colorauto,a:active.cke_colormore{outline:0;border:#139ff7 1px solid;background-color:#f8f8f8}a:hover.cke_colorauto,a:hover.cke_colormore{border-color:#bcbcbc}.cke_colorauto span.cke_colorbox{width:18px;height:18px;border:1px solid #808080;margin-left:1px;margin-top:3px}.cke_rtl .cke_colorauto span.cke_colorbox{margin-left:0;margin-right:1px}span.cke_colorbox[style*=\"#ffffff\"],span.cke_colorbox[style*=\"#FFFFFF\"],span.cke_colorbox[style=\"background-color:#fff\"],span.cke_colorbox[style=\"background-color:#FFF\"],span.cke_colorbox[style*=\"rgb(255,255,255)\"],span.cke_colorbox[style*=\"rgb(255, 255, 255)\"]{border:1px solid #808080;width:18px;height:18px}.cke_toolbar{float:left}.cke_rtl .cke_toolbar{float:right}.cke_toolgroup{border:0;float:left;margin:1px 2px 6px 0;padding-right:3px}.cke_rtl .cke_toolgroup{float:right;margin:1px 0 6px 2px;padding-left:3px;padding-right:0}.cke_hc .cke_toolgroup{margin-right:5px;margin-bottom:5px}.cke_hc.cke_rtl .cke_toolgroup{margin-right:0;margin-left:5px}a.cke_button{display:inline-block;height:18px;padding:4px 6px;outline:0;cursor:default;float:left;border:0;position:relative}.cke_rtl a.cke_button{float:right}.cke_hc a.cke_button{border:1px solid black;padding:3px 5px;margin:0 3px 5px 0}.cke_hc.cke_rtl a.cke_button{margin:0 0 5px 3px}a.cke_button_on{background:#fff;border:1px #bcbcbc solid;padding:3px 5px}a.cke_button_off:hover,a.cke_button_off:focus,a.cke_button_off:active{background:#e5e5e5;border:1px #bcbcbc solid;padding:3px 5px}.cke_hc a.cke_button_on,.cke_hc a.cke_button_off:hover,.cke_hc a.cke_button_off:focus,.cke_hc a.cke_button_off:active{background:#e5e5e5;border:3px solid #000;padding:1px 3px}a.cke_button_disabled:hover,a.cke_button_disabled:focus,a.cke_button_disabled:active{border:0;padding:4px 6px;background-color:transparent}a.cke_button_disabled:focus{border:1px #bcbcbc solid;padding:3px 5px}.cke_hc a.cke_button_disabled:hover,.cke_hc a.cke_button_disabled:focus,.cke_hc a.cke_button_disabled:active{border:1px solid #acacac;padding:3px 5px;margin:0 3px 5px 0}.cke_hc a.cke_button_disabled:focus{border:3px solid #000;padding:1px 3px}.cke_hc.cke_rtl a.cke_button_disabled:hover,.cke_hc.cke_rtl a.cke_button_disabled:focus,.cke_hc.cke_rtl a.cke_button_disabled:active{margin:0 0 5px 3px}a.cke_button_disabled .cke_button_icon,a.cke_button_disabled .cke_button_arrow{opacity:.3}.cke_hc a.cke_button_disabled{border-color:#acacac}.cke_hc a.cke_button_disabled .cke_button_icon,.cke_hc a.cke_button_disabled .cke_button_label{opacity:.5}.cke_toolgroup a.cke_button:last-child:after,.cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{content:\"\";position:absolute;height:18px;width:0;border-right:1px solid #bcbcbc;margin-top:4px;top:0;right:-3px}.cke_rtl .cke_toolgroup a.cke_button:last-child:after,.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{border-right:0;right:auto;border-left:1px solid #bcbcbc;top:0;left:-3px}.cke_hc .cke_toolgroup a.cke_button:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_disabled:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{border-color:#000;top:0;right:-7px}.cke_hc.cke_rtl .cke_toolgroup a.cke_button:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{top:0;right:auto;left:-7px}.cke_toolgroup a.cke_button:hover:last-child:after,.cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-1px;right:-4px}.cke_rtl .cke_toolgroup a.cke_button:hover:last-child:after,.cke_rtl .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-1px;right:auto;left:-4px}.cke_hc .cke_toolgroup a.cke_button:hover:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-2px;right:-9px}.cke_hc.cke_rtl .cke_toolgroup a.cke_button:hover:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-2px;right:auto;left:-9px}.cke_toolbar.cke_toolbar_last .cke_toolgroup a.cke_button:last-child:after{content:none;border:0;width:0;height:0}.cke_button_icon{cursor:inherit;background-repeat:no-repeat;margin-top:1px;width:16px;height:16px;float:left;display:inline-block}.cke_rtl .cke_button_icon{float:right}.cke_hc .cke_button_icon{display:none}.cke_button_label{display:none;padding-left:3px;margin-top:1px;line-height:17px;vertical-align:middle;float:left;cursor:default;color:#484848}.cke_rtl .cke_button_label{padding-right:3px;padding-left:0;float:right}.cke_hc .cke_button_label{padding:0;display:inline-block;font-size:12px}.cke_button_arrow{display:inline-block;margin:8px 0 0 1px;width:0;height:0;cursor:default;vertical-align:top;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #484848}.cke_rtl .cke_button_arrow{margin-right:5px;margin-left:0}.cke_hc .cke_button_arrow{font-size:10px;margin:3px 0 0 3px;width:auto;border:0}.cke_toolbar_separator{float:left;background-color:#bcbcbc;margin:4px 2px 0 2px;height:18px;width:1px}.cke_rtl .cke_toolbar_separator{float:right}.cke_hc .cke_toolbar_separator{background-color:#000;margin-left:2px;margin-right:5px;margin-bottom:9px}.cke_hc.cke_rtl .cke_toolbar_separator{margin-left:5px;margin-right:2px}.cke_toolbar_break{display:block;clear:left}.cke_rtl .cke_toolbar_break{clear:right}a.cke_toolbox_collapser{width:12px;height:11px;float:right;margin:11px 0 0;font-size:0;cursor:default;text-align:center;border:1px solid #bcbcbc}.cke_rtl .cke_toolbox_collapser{float:left}.cke_toolbox_collapser:hover{background:#e5e5e5}.cke_toolbox_collapser.cke_toolbox_collapser_min{margin:0 2px 4px}.cke_toolbox_collapser .cke_arrow{display:inline-block;height:0;width:0;font-size:0;margin-top:1px;border:3px solid transparent;border-bottom-color:#484848}.cke_toolbox_collapser.cke_toolbox_collapser_min .cke_arrow{margin-top:4px;border-bottom-color:transparent;border-top-color:#484848}.cke_hc .cke_toolbox_collapser .cke_arrow{font-size:8px;width:auto;border:0;margin-top:0}.cke_menuitem span{cursor:default}.cke_menubutton{display:block}.cke_hc .cke_menubutton{padding:2px}.cke_menubutton:hover,.cke_menubutton:focus,.cke_menubutton:active{background-color:#e9e9e9;display:block;outline:1px dotted}.cke_menubutton:hover{outline:0}.cke_hc .cke_menubutton:hover,.cke_hc .cke_menubutton:focus,.cke_hc .cke_menubutton:active{border:2px solid;padding:0}.cke_menubutton_disabled:hover,.cke_menubutton_disabled:focus,.cke_menubutton_disabled:active{background-color:transparent;outline:0}.cke_menubutton_inner{display:table-row}.cke_menubutton_icon,.cke_menubutton_label,.cke_menuarrow{display:table-cell}.cke_menubutton_icon{background-color:#f8f8f8;padding:6px 4px}.cke_hc .cke_menubutton_icon{height:16px;width:0;padding:4px 0}.cke_menubutton:hover .cke_menubutton_icon,.cke_menubutton:focus .cke_menubutton_icon,.cke_menubutton:active .cke_menubutton_icon{background-color:#e9e9e9}.cke_menubutton_disabled:hover .cke_menubutton_icon,.cke_menubutton_disabled:focus .cke_menubutton_icon,.cke_menubutton_disabled:active .cke_menubutton_icon{background-color:#f8f8f8;outline:0}.cke_menuitem .cke_menubutton_on{background-color:#e9e9e9;border:1px solid #dedede;outline:0}.cke_menubutton_on .cke_menubutton_icon{padding-right:3px;background-color:#e9e9e9}.cke_menubutton_label{padding:0 5px;background-color:transparent;width:100%;vertical-align:middle}.cke_menubutton_shortcut{color:#979797}.cke_menubutton_disabled .cke_menubutton_label{opacity:.3;filter:alpha(opacity=30)}.cke_panel_frame .cke_menubutton_label{display:none}.cke_menuseparator{background-color:#d1d1d1;height:1px}.cke_menuarrow{background:transparent url(images/arrow.png) no-repeat 0 10px;padding:0 5px}.cke_rtl .cke_menuarrow{background-position:5px -13px;background-repeat:no-repeat}.cke_hc .cke_menuarrow{background-image:none}.cke_menuarrow span{display:none}.cke_hc .cke_menuarrow span{vertical-align:middle;display:inline}.cke_combo{display:inline-block;float:left;position:relative;margin-bottom:5px}.cke_rtl .cke_combo{float:right}.cke_hc .cke_combo{margin-top:1px;margin-bottom:10px}.cke_combo:after{content:\"\";position:absolute;height:18px;width:0;border-right:1px solid #bcbcbc;margin-top:5px;top:0;right:0}.cke_rtl .cke_combo:after{border-right:0;border-left:1px solid #bcbcbc;right:auto;left:0}.cke_hc .cke_combo:after{border-color:#000}a.cke_combo_button{cursor:default;display:inline-block;float:left;margin:0;padding:1px}.cke_rtl a.cke_combo_button{float:right}.cke_hc a.cke_combo_button{padding:4px}.cke_combo_on a.cke_combo_button,.cke_combo_off a.cke_combo_button:hover,.cke_combo_off a.cke_combo_button:focus,.cke_combo_off a.cke_combo_button:active{background:#e5e5e5;border:1px solid #bcbcbc;padding:0 0 0 1px;margin-left:-1px}.cke_combo_off a.cke_combo_button:focus{outline:0}.cke_combo_on a.cke_combo_button,.cke_combo_off a.cke_combo_button:active{background:#fff}.cke_rtl .cke_combo_on a.cke_combo_button,.cke_rtl .cke_combo_off a.cke_combo_button:hover,.cke_rtl .cke_combo_off a.cke_combo_button:focus,.cke_rtl .cke_combo_off a.cke_combo_button:active{padding:0 1px 0 0;margin-left:0;margin-right:-1px}.cke_hc .cke_combo_on a.cke_combo_button,.cke_hc .cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_combo_off a.cke_combo_button:active{border:3px solid #000;padding:1px 1px 1px 2px}.cke_hc.cke_rtl .cke_combo_on a.cke_combo_button,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:hover,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:focus,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:active{padding:1px 2px 1px 1px}.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0 0 0 3px;margin-left:-3px}.cke_rtl .cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0 3px 0 0;margin-left:0;margin-right:-3px}.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px 1px 1px 7px;margin-left:-6px}.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px 7px 1px 1px;margin-left:0;margin-right:-6px}.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0;margin:0}.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px;margin:0}.cke_toolbar .cke_combo+.cke_toolbar_end,.cke_toolbar .cke_combo+.cke_toolgroup{margin-right:0;margin-left:2px}.cke_rtl .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_rtl .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:0;margin-right:2px}.cke_hc .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_hc .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:5px}.cke_hc.cke_rtl .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_hc.cke_rtl .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:0;margin-right:5px}.cke_toolbar.cke_toolbar_last .cke_combo:nth-last-child(-n+2):after{content:none;border:0;width:0;height:0}.cke_combo_text{line-height:26px;padding-left:10px;text-overflow:ellipsis;overflow:hidden;float:left;cursor:default;color:#484848;width:60px}.cke_rtl .cke_combo_text{float:right;text-align:right;padding-left:0;padding-right:10px}.cke_hc .cke_combo_text{line-height:18px;font-size:12px}.cke_combo_open{cursor:default;display:inline-block;font-size:0;height:19px;line-height:17px;margin:1px 10px 1px;width:5px}.cke_hc .cke_combo_open{height:12px}.cke_combo_arrow{cursor:default;margin:11px 0 0;float:left;height:0;width:0;font-size:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #484848}.cke_hc .cke_combo_arrow{font-size:10px;width:auto;border:0;margin-top:3px}.cke_combo_label{display:none;float:left;line-height:26px;vertical-align:top;margin-right:5px}.cke_rtl .cke_combo_label{float:right;margin-left:5px;margin-right:0}.cke_combo_disabled .cke_combo_inlinelabel,.cke_combo_disabled .cke_combo_open{opacity:.3}.cke_path{float:left;margin:-2px 0 2px}a.cke_path_item,span.cke_path_empty{display:inline-block;float:left;padding:3px 4px;margin-right:2px;cursor:default;text-decoration:none;outline:0;border:0;color:#484848;font-weight:bold;font-size:11px}.cke_rtl .cke_path,.cke_rtl .cke_path_item,.cke_rtl .cke_path_empty{float:right}a.cke_path_item:hover,a.cke_path_item:focus,a.cke_path_item:active{background-color:#e5e5e5}.cke_hc a.cke_path_item:hover,.cke_hc a.cke_path_item:focus,.cke_hc a.cke_path_item:active{border:2px solid;padding:1px 2px}.cke_button__source_label,.cke_button__sourcedialog_label{display:inline}.cke_combopanel__fontsize{width:135px}textarea.cke_source{font-family:'Courier New',Monospace;font-size:small;background-color:#fff;white-space:pre-wrap;border:0;padding:0;margin:0;display:block}.cke_wysiwyg_frame,.cke_wysiwyg_div{background-color:#fff}.cke_notifications_area{pointer-events:none}.cke_notification{pointer-events:auto;position:relative;margin:10px;width:300px;color:white;text-align:center;opacity:.95;filter:alpha(opacity = 95);-webkit-animation:fadeIn .7s;animation:fadeIn .7s}.cke_notification_message a{color:#12306f}@-webkit-keyframes fadeIn{from{opacity:.4}to{opacity:.95}}@keyframes fadeIn{from{opacity:.4}to{opacity:.95}}.cke_notification_success{background:#72b572;border:1px solid #63a563}.cke_notification_warning{background:#c83939;border:1px solid #902b2b}.cke_notification_info{background:#2e9ad0;border:1px solid #0f74a8}.cke_notification_info span.cke_notification_progress{background-color:#0f74a8;display:block;padding:0;margin:0;height:100%;overflow:hidden;position:absolute;z-index:1}.cke_notification_message{position:relative;margin:4px 23px 3px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;z-index:4;text-overflow:ellipsis;overflow:hidden}.cke_notification_close{background-image:url(images/close.png);background-repeat:no-repeat;background-position:50%;position:absolute;cursor:pointer;text-align:center;height:20px;width:20px;top:1px;right:1px;padding:0;margin:0;z-index:5;opacity:.6;filter:alpha(opacity = 60)}.cke_notification_close:hover{opacity:1;filter:alpha(opacity = 100)}.cke_notification_close span{display:none}.cke_notification_warning a.cke_notification_close{opacity:.8;filter:alpha(opacity = 80)}.cke_notification_warning a.cke_notification_close:hover{opacity:1;filter:alpha(opacity = 100)}.cke_chrome{visibility:inherit}.cke_voice_label{display:none}legend.cke_voice_label{display:none}.cke_button__about_icon{background:url(icons.png?t=H0CF) no-repeat 0 -0px!important}.cke_button__bold_icon{background:url(icons.png?t=H0CF) no-repeat 0 -24px!important}.cke_button__italic_icon{background:url(icons.png?t=H0CF) no-repeat 0 -48px!important}.cke_button__strike_icon{background:url(icons.png?t=H0CF) no-repeat 0 -72px!important}.cke_button__subscript_icon{background:url(icons.png?t=H0CF) no-repeat 0 -96px!important}.cke_button__superscript_icon{background:url(icons.png?t=H0CF) no-repeat 0 -120px!important}.cke_button__underline_icon{background:url(icons.png?t=H0CF) no-repeat 0 -144px!important}.cke_button__bidiltr_icon{background:url(icons.png?t=H0CF) no-repeat 0 -168px!important}.cke_button__bidirtl_icon{background:url(icons.png?t=H0CF) no-repeat 0 -192px!important}.cke_button__blockquote_icon{background:url(icons.png?t=H0CF) no-repeat 0 -216px!important}.cke_rtl .cke_button__copy_icon,.cke_mixed_dir_content .cke_rtl .cke_button__copy_icon{background:url(icons.png?t=H0CF) no-repeat 0 -240px!important}.cke_ltr .cke_button__copy_icon{background:url(icons.png?t=H0CF) no-repeat 0 -264px!important}.cke_rtl .cke_button__cut_icon,.cke_mixed_dir_content .cke_rtl .cke_button__cut_icon{background:url(icons.png?t=H0CF) no-repeat 0 -288px!important}.cke_ltr .cke_button__cut_icon{background:url(icons.png?t=H0CF) no-repeat 0 -312px!important}.cke_rtl .cke_button__paste_icon,.cke_mixed_dir_content .cke_rtl .cke_button__paste_icon{background:url(icons.png?t=H0CF) no-repeat 0 -336px!important}.cke_ltr .cke_button__paste_icon{background:url(icons.png?t=H0CF) no-repeat 0 -360px!important}.cke_button__codesnippet_icon{background:url(icons.png?t=H0CF) no-repeat 0 -384px!important}.cke_button__bgcolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -408px!important}.cke_button__textcolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -432px!important}.cke_button__copyformatting_icon{background:url(icons.png?t=H0CF) no-repeat 0 -456px!important}.cke_button__creatediv_icon{background:url(icons.png?t=H0CF) no-repeat 0 -480px!important}.cke_rtl .cke_button__docprops_icon,.cke_mixed_dir_content .cke_rtl .cke_button__docprops_icon{background:url(icons.png?t=H0CF) no-repeat 0 -504px!important}.cke_ltr .cke_button__docprops_icon{background:url(icons.png?t=H0CF) no-repeat 0 -528px!important}.cke_button__embed_icon{background:url(icons.png?t=H0CF) no-repeat 0 -552px!important}.cke_button__embedsemantic_icon{background:url(icons.png?t=H0CF) no-repeat 0 -576px!important}.cke_rtl .cke_button__find_icon,.cke_mixed_dir_content .cke_rtl .cke_button__find_icon{background:url(icons.png?t=H0CF) no-repeat 0 -600px!important}.cke_ltr .cke_button__find_icon{background:url(icons.png?t=H0CF) no-repeat 0 -624px!important}.cke_button__replace_icon{background:url(icons.png?t=H0CF) no-repeat 0 -648px!important}.cke_button__flash_icon{background:url(icons.png?t=H0CF) no-repeat 0 -672px!important}.cke_button__button_icon{background:url(icons.png?t=H0CF) no-repeat 0 -696px!important}.cke_button__checkbox_icon{background:url(icons.png?t=H0CF) no-repeat 0 -720px!important}.cke_button__form_icon{background:url(icons.png?t=H0CF) no-repeat 0 -744px!important}.cke_button__hiddenfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -768px!important}.cke_button__imagebutton_icon{background:url(icons.png?t=H0CF) no-repeat 0 -792px!important}.cke_button__radio_icon{background:url(icons.png?t=H0CF) no-repeat 0 -816px!important}.cke_rtl .cke_button__select_icon,.cke_mixed_dir_content .cke_rtl .cke_button__select_icon{background:url(icons.png?t=H0CF) no-repeat 0 -840px!important}.cke_ltr .cke_button__select_icon{background:url(icons.png?t=H0CF) no-repeat 0 -864px!important}.cke_rtl .cke_button__textarea_icon,.cke_mixed_dir_content .cke_rtl .cke_button__textarea_icon{background:url(icons.png?t=H0CF) no-repeat 0 -888px!important}.cke_ltr .cke_button__textarea_icon{background:url(icons.png?t=H0CF) no-repeat 0 -912px!important}.cke_rtl .cke_button__textfield_icon,.cke_mixed_dir_content .cke_rtl .cke_button__textfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -936px!important}.cke_ltr .cke_button__textfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -960px!important}.cke_button__horizontalrule_icon{background:url(icons.png?t=H0CF) no-repeat 0 -984px!important}.cke_button__iframe_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1008px!important}.cke_button__image_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1032px!important}.cke_rtl .cke_button__indent_icon,.cke_mixed_dir_content .cke_rtl .cke_button__indent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1056px!important}.cke_ltr .cke_button__indent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1080px!important}.cke_rtl .cke_button__outdent_icon,.cke_mixed_dir_content .cke_rtl .cke_button__outdent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1104px!important}.cke_ltr .cke_button__outdent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1128px!important}.cke_button__justifyblock_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1152px!important}.cke_button__justifycenter_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1176px!important}.cke_button__justifyleft_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1200px!important}.cke_button__justifyright_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1224px!important}.cke_button__language_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1248px!important}.cke_rtl .cke_button__anchor_icon,.cke_mixed_dir_content .cke_rtl .cke_button__anchor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1272px!important}.cke_ltr .cke_button__anchor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1296px!important}.cke_button__link_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1320px!important}.cke_button__unlink_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1344px!important}.cke_rtl .cke_button__bulletedlist_icon,.cke_mixed_dir_content .cke_rtl .cke_button__bulletedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1368px!important}.cke_ltr .cke_button__bulletedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1392px!important}.cke_rtl .cke_button__numberedlist_icon,.cke_mixed_dir_content .cke_rtl .cke_button__numberedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1416px!important}.cke_ltr .cke_button__numberedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1440px!important}.cke_button__mathjax_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1464px!important}.cke_button__maximize_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1488px!important}.cke_rtl .cke_button__newpage_icon,.cke_mixed_dir_content .cke_rtl .cke_button__newpage_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1512px!important}.cke_ltr .cke_button__newpage_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1536px!important}.cke_rtl .cke_button__pagebreak_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pagebreak_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1560px!important}.cke_ltr .cke_button__pagebreak_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1584px!important}.cke_rtl .cke_button__pastefromword_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pastefromword_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1608px!important}.cke_ltr .cke_button__pastefromword_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1632px!important}.cke_rtl .cke_button__pastetext_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pastetext_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1656px!important}.cke_ltr .cke_button__pastetext_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1680px!important}.cke_button__placeholder_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1704px!important}.cke_rtl .cke_button__preview_icon,.cke_mixed_dir_content .cke_rtl .cke_button__preview_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1728px!important}.cke_ltr .cke_button__preview_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1752px!important}.cke_button__print_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1776px!important}.cke_button__removeformat_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1800px!important}.cke_button__save_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1824px!important}.cke_button__scayt_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1848px!important}.cke_button__selectall_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1872px!important}.cke_rtl .cke_button__showblocks_icon,.cke_mixed_dir_content .cke_rtl .cke_button__showblocks_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1896px!important}.cke_ltr .cke_button__showblocks_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1920px!important}.cke_button__smiley_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1944px!important}.cke_rtl .cke_button__source_icon,.cke_mixed_dir_content .cke_rtl .cke_button__source_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1968px!important}.cke_ltr .cke_button__source_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1992px!important}.cke_rtl .cke_button__sourcedialog_icon,.cke_mixed_dir_content .cke_rtl .cke_button__sourcedialog_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2016px!important}.cke_ltr .cke_button__sourcedialog_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2040px!important}.cke_button__specialchar_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2064px!important}.cke_button__table_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2088px!important}.cke_rtl .cke_button__templates_icon,.cke_mixed_dir_content .cke_rtl .cke_button__templates_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2112px!important}.cke_ltr .cke_button__templates_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2136px!important}.cke_button__uicolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2160px!important}.cke_rtl .cke_button__redo_icon,.cke_mixed_dir_content .cke_rtl .cke_button__redo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2184px!important}.cke_ltr .cke_button__redo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2208px!important}.cke_rtl .cke_button__undo_icon,.cke_mixed_dir_content .cke_rtl .cke_button__undo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2232px!important}.cke_ltr .cke_button__undo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2256px!important}.cke_button__simplebox_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2280px!important}.cke_button__spellchecker_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2304px!important}.cke_hidpi .cke_button__about_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -0px!important;background-size:16px!important}.cke_hidpi .cke_button__bold_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -24px!important;background-size:16px!important}.cke_hidpi .cke_button__italic_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -48px!important;background-size:16px!important}.cke_hidpi .cke_button__strike_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -72px!important;background-size:16px!important}.cke_hidpi .cke_button__subscript_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -96px!important;background-size:16px!important}.cke_hidpi .cke_button__superscript_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -120px!important;background-size:16px!important}.cke_hidpi .cke_button__underline_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -144px!important;background-size:16px!important}.cke_hidpi .cke_button__bidiltr_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -168px!important;background-size:16px!important}.cke_hidpi .cke_button__bidirtl_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -192px!important;background-size:16px!important}.cke_hidpi .cke_button__blockquote_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -216px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__copy_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__copy_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -240px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__copy_icon,.cke_ltr.cke_hidpi .cke_button__copy_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -264px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__cut_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__cut_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -288px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__cut_icon,.cke_ltr.cke_hidpi .cke_button__cut_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -312px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__paste_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__paste_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -336px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__paste_icon,.cke_ltr.cke_hidpi .cke_button__paste_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -360px!important;background-size:16px!important}.cke_hidpi .cke_button__codesnippet_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -384px!important;background-size:16px!important}.cke_hidpi .cke_button__bgcolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -408px!important;background-size:16px!important}.cke_hidpi .cke_button__textcolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -432px!important;background-size:16px!important}.cke_hidpi .cke_button__copyformatting_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -456px!important;background-size:16px!important}.cke_hidpi .cke_button__creatediv_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -480px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__docprops_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__docprops_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -504px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__docprops_icon,.cke_ltr.cke_hidpi .cke_button__docprops_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -528px!important;background-size:16px!important}.cke_hidpi .cke_button__embed_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -552px!important;background-size:16px!important}.cke_hidpi .cke_button__embedsemantic_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -576px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__find_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__find_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -600px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__find_icon,.cke_ltr.cke_hidpi .cke_button__find_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -624px!important;background-size:16px!important}.cke_hidpi .cke_button__replace_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -648px!important;background-size:16px!important}.cke_hidpi .cke_button__flash_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -672px!important;background-size:16px!important}.cke_hidpi .cke_button__button_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -696px!important;background-size:16px!important}.cke_hidpi .cke_button__checkbox_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -720px!important;background-size:16px!important}.cke_hidpi .cke_button__form_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -744px!important;background-size:16px!important}.cke_hidpi .cke_button__hiddenfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -768px!important;background-size:16px!important}.cke_hidpi .cke_button__imagebutton_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -792px!important;background-size:16px!important}.cke_hidpi .cke_button__radio_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -816px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__select_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__select_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -840px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__select_icon,.cke_ltr.cke_hidpi .cke_button__select_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -864px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__textarea_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__textarea_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -888px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__textarea_icon,.cke_ltr.cke_hidpi .cke_button__textarea_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -912px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__textfield_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__textfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -936px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__textfield_icon,.cke_ltr.cke_hidpi .cke_button__textfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -960px!important;background-size:16px!important}.cke_hidpi .cke_button__horizontalrule_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -984px!important;background-size:16px!important}.cke_hidpi .cke_button__iframe_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1008px!important;background-size:16px!important}.cke_hidpi .cke_button__image_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1032px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__indent_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__indent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1056px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__indent_icon,.cke_ltr.cke_hidpi .cke_button__indent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1080px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__outdent_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__outdent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1104px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__outdent_icon,.cke_ltr.cke_hidpi .cke_button__outdent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1128px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyblock_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1152px!important;background-size:16px!important}.cke_hidpi .cke_button__justifycenter_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1176px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyleft_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1200px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyright_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1224px!important;background-size:16px!important}.cke_hidpi .cke_button__language_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1248px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__anchor_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__anchor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1272px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__anchor_icon,.cke_ltr.cke_hidpi .cke_button__anchor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1296px!important;background-size:16px!important}.cke_hidpi .cke_button__link_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1320px!important;background-size:16px!important}.cke_hidpi .cke_button__unlink_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1344px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__bulletedlist_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__bulletedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1368px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__bulletedlist_icon,.cke_ltr.cke_hidpi .cke_button__bulletedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1392px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__numberedlist_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__numberedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1416px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__numberedlist_icon,.cke_ltr.cke_hidpi .cke_button__numberedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1440px!important;background-size:16px!important}.cke_hidpi .cke_button__mathjax_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1464px!important;background-size:16px!important}.cke_hidpi .cke_button__maximize_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1488px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__newpage_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__newpage_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1512px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__newpage_icon,.cke_ltr.cke_hidpi .cke_button__newpage_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1536px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pagebreak_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pagebreak_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1560px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pagebreak_icon,.cke_ltr.cke_hidpi .cke_button__pagebreak_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1584px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pastefromword_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pastefromword_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1608px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pastefromword_icon,.cke_ltr.cke_hidpi .cke_button__pastefromword_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1632px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pastetext_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pastetext_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1656px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pastetext_icon,.cke_ltr.cke_hidpi .cke_button__pastetext_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1680px!important;background-size:16px!important}.cke_hidpi .cke_button__placeholder_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1704px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__preview_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__preview_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1728px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__preview_icon,.cke_ltr.cke_hidpi .cke_button__preview_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1752px!important;background-size:16px!important}.cke_hidpi .cke_button__print_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1776px!important;background-size:16px!important}.cke_hidpi .cke_button__removeformat_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1800px!important;background-size:16px!important}.cke_hidpi .cke_button__save_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1824px!important;background-size:16px!important}.cke_hidpi .cke_button__scayt_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1848px!important;background-size:16px!important}.cke_hidpi .cke_button__selectall_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1872px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__showblocks_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__showblocks_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1896px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__showblocks_icon,.cke_ltr.cke_hidpi .cke_button__showblocks_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1920px!important;background-size:16px!important}.cke_hidpi .cke_button__smiley_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1944px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__source_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__source_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1968px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__source_icon,.cke_ltr.cke_hidpi .cke_button__source_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1992px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__sourcedialog_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__sourcedialog_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2016px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__sourcedialog_icon,.cke_ltr.cke_hidpi .cke_button__sourcedialog_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2040px!important;background-size:16px!important}.cke_hidpi .cke_button__specialchar_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2064px!important;background-size:16px!important}.cke_hidpi .cke_button__table_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2088px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__templates_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__templates_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2112px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__templates_icon,.cke_ltr.cke_hidpi .cke_button__templates_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2136px!important;background-size:16px!important}.cke_hidpi .cke_button__uicolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2160px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__redo_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__redo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2184px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__redo_icon,.cke_ltr.cke_hidpi .cke_button__redo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2208px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__undo_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__undo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2232px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__undo_icon,.cke_ltr.cke_hidpi .cke_button__undo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2256px!important;background-size:16px!important}.cke_hidpi .cke_button__simplebox_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -4560px!important}.cke_hidpi .cke_button__spellchecker_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2304px!important;background-size:16px!important}a.cke_button_disabled,a.cke_button_disabled:hover,a.cke_button_disabled:focus,a.cke_button_disabled:active{filter:alpha(opacity = 30)}.cke_button_disabled .cke_button_icon{filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#00ffffff,endColorstr=#00ffffff)}.cke_button_off:hover,.cke_button_off:focus,.cke_button_off:active{filter:alpha(opacity = 100)}.cke_combo_disabled .cke_combo_inlinelabel,.cke_combo_disabled .cke_combo_open{filter:alpha(opacity = 30)}.cke_toolbox_collapser{border:1px solid #a6a6a6}.cke_toolbox_collapser .cke_arrow{margin-top:1px}.cke_hc .cke_top,.cke_hc .cke_bottom,.cke_hc .cke_combo_button,.cke_hc a.cke_combo_button:hover,.cke_hc a.cke_combo_button:focus,.cke_hc .cke_toolgroup,.cke_hc .cke_button_on,.cke_hc a.cke_button_off:hover,.cke_hc a.cke_button_off:focus,.cke_hc a.cke_button_off:active,.cke_hc .cke_toolbox_collapser,.cke_hc .cke_toolbox_collapser:hover,.cke_hc .cke_panel_grouptitle{filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.cke_top,.cke_contents,.cke_bottom{width:100%}.cke_button_arrow{font-size:0}.cke_rtl .cke_toolgroup,.cke_rtl .cke_toolbar_separator,.cke_rtl .cke_button,.cke_rtl .cke_button *,.cke_rtl .cke_combo,.cke_rtl .cke_combo *,.cke_rtl .cke_path_item,.cke_rtl .cke_path_item *,.cke_rtl .cke_path_empty{float:none}.cke_rtl .cke_toolgroup,.cke_rtl .cke_toolbar_separator,.cke_rtl .cke_combo_button,.cke_rtl .cke_combo_button *,.cke_rtl .cke_button,.cke_rtl .cke_button_icon{display:inline-block;vertical-align:top}.cke_rtl .cke_button_icon{float:none}.cke_resizer{width:10px}.cke_source{white-space:normal}.cke_bottom{position:static}.cke_colorbox{font-size:0}"; });
define('text!resources/editor/skins/moono-lisa/editor_ie8.css', ['module'], function(module) { module.exports = "/*\r\nCopyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.\r\nFor licensing, see LICENSE.md or http://ckeditor.com/license\r\n*/\r\n.cke_reset{margin:0;padding:0;border:0;background:transparent;text-decoration:none;width:auto;height:auto;vertical-align:baseline;box-sizing:content-box;position:static;transition:none}.cke_reset_all,.cke_reset_all *,.cke_reset_all a,.cke_reset_all textarea{margin:0;padding:0;border:0;background:transparent;text-decoration:none;width:auto;height:auto;vertical-align:baseline;box-sizing:content-box;position:static;transition:none;border-collapse:collapse;font:normal normal normal 12px Arial,Helvetica,Tahoma,Verdana,Sans-Serif;color:#000;text-align:left;white-space:nowrap;cursor:auto;float:none}.cke_reset_all .cke_rtl *{text-align:right}.cke_reset_all iframe{vertical-align:inherit}.cke_reset_all textarea{white-space:pre-wrap}.cke_reset_all textarea,.cke_reset_all input[type=\"text\"],.cke_reset_all input[type=\"password\"]{cursor:text}.cke_reset_all textarea[disabled],.cke_reset_all input[type=\"text\"][disabled],.cke_reset_all input[type=\"password\"][disabled]{cursor:default}.cke_reset_all fieldset{padding:10px;border:2px groove #e0dfe3}.cke_reset_all select{box-sizing:border-box}.cke_reset_all table{table-layout:auto}.cke_chrome{display:block;border:1px solid #d1d1d1;padding:0}.cke_inner{display:block;background:#fff;padding:0;-webkit-touch-callout:none}.cke_float{border:0}.cke_float .cke_inner{padding-bottom:0}.cke_top,.cke_contents,.cke_bottom{display:block;overflow:hidden}.cke_top{border-bottom:1px solid #d1d1d1;background:#f8f8f8;padding:6px 8px 2px;white-space:normal}.cke_float .cke_top{border:1px solid #d1d1d1}.cke_bottom{padding:6px 8px 2px;position:relative;border-top:1px solid #d1d1d1;background:#f8f8f8}.cke_browser_ios .cke_contents{overflow-y:auto;-webkit-overflow-scrolling:touch}.cke_resizer{width:0;height:0;overflow:hidden;border-width:10px 10px 0 0;border-color:transparent #bcbcbc transparent transparent;border-style:dashed solid dashed dashed;font-size:0;vertical-align:bottom;margin-top:6px;margin-bottom:2px}.cke_hc .cke_resizer{font-size:15px;width:auto;height:auto;border-width:0}.cke_resizer_ltr{cursor:se-resize;float:right;margin-right:-4px}.cke_resizer_rtl{border-width:10px 0 0 10px;border-color:transparent transparent transparent #bcbcbc;border-style:dashed dashed dashed solid;cursor:sw-resize;float:left;margin-left:-4px;right:auto}.cke_wysiwyg_div{display:block;height:100%;overflow:auto;padding:0 8px;outline-style:none;box-sizing:border-box}.cke_panel{visibility:visible;width:120px;height:100px;overflow:hidden;background-color:#fff;border:1px solid #d1d1d1}.cke_menu_panel{padding:0;margin:0}.cke_combopanel{width:150px;height:170px}.cke_panel_frame{width:100%;height:100%;font-size:12px;overflow:auto;overflow-x:hidden}.cke_panel_container{overflow-y:auto;overflow-x:hidden}.cke_panel_block:focus{outline:0}.cke_panel_list{margin:0;padding:0;list-style-type:none;white-space:nowrap}.cke_panel_listItem{margin:0;padding:0}.cke_panel_listItem a{padding:6px 7px;display:block;color:inherit!important;text-decoration:none;overflow:hidden;text-overflow:ellipsis}.cke_hc .cke_panel_listItem a{border-style:none}.cke_panel_listItem.cke_selected a,.cke_panel_listItem a:hover,.cke_panel_listItem a:focus,.cke_panel_listItem a:active{background-color:#e9e9e9}.cke_panel_listItem a:focus{outline:1px dotted #000}.cke_hc .cke_panel_listItem a:hover,.cke_hc .cke_panel_listItem a:focus,.cke_hc .cke_panel_listItem a:active{border:2px solid;padding:4px 5px}.cke_panel_listItem p,.cke_panel_listItem h1,.cke_panel_listItem h2,.cke_panel_listItem h3,.cke_panel_listItem h4,.cke_panel_listItem h5,.cke_panel_listItem h6,.cke_panel_listItem pre{margin-top:0;margin-bottom:0}.cke_panel_grouptitle{cursor:default;font-size:11px;font-weight:bold;white-space:nowrap;margin:0;padding:6px 6px 7px 6px;color:#484848;border-bottom:1px solid #d1d1d1;background:#f8f8f8}.cke_colorblock{padding:10px;font-size:11px;font-family:'Microsoft Sans Serif',Tahoma,Arial,Verdana,Sans-Serif}.cke_colorblock,.cke_colorblock a{text-decoration:none;color:#000}a.cke_colorbox{padding:2px;float:left;width:20px;height:20px}.cke_rtl a.cke_colorbox{float:right}a:hover.cke_colorbox,a:focus.cke_colorbox,a:active.cke_colorbox{outline:0;padding:0;border:2px solid #139ff7}a:hover.cke_colorbox{border-color:#bcbcbc}span.cke_colorbox{width:20px;height:20px;float:left}.cke_rtl span.cke_colorbox{float:right}a.cke_colorauto,a.cke_colormore{border:#fff 1px solid;padding:3px;display:block;cursor:pointer}a.cke_colorauto{padding:0;border:1px solid transparent;margin-bottom:6px;height:26px;line-height:26px}a.cke_colormore{margin-top:10px;height:20px;line-height:19px}a:hover.cke_colorauto,a:hover.cke_colormore,a:focus.cke_colorauto,a:focus.cke_colormore,a:active.cke_colorauto,a:active.cke_colormore{outline:0;border:#139ff7 1px solid;background-color:#f8f8f8}a:hover.cke_colorauto,a:hover.cke_colormore{border-color:#bcbcbc}.cke_colorauto span.cke_colorbox{width:18px;height:18px;border:1px solid #808080;margin-left:1px;margin-top:3px}.cke_rtl .cke_colorauto span.cke_colorbox{margin-left:0;margin-right:1px}span.cke_colorbox[style*=\"#ffffff\"],span.cke_colorbox[style*=\"#FFFFFF\"],span.cke_colorbox[style=\"background-color:#fff\"],span.cke_colorbox[style=\"background-color:#FFF\"],span.cke_colorbox[style*=\"rgb(255,255,255)\"],span.cke_colorbox[style*=\"rgb(255, 255, 255)\"]{border:1px solid #808080;width:18px;height:18px}.cke_toolbar{float:left}.cke_rtl .cke_toolbar{float:right}.cke_toolgroup{border:0;float:left;margin:1px 2px 6px 0;padding-right:3px}.cke_rtl .cke_toolgroup{float:right;margin:1px 0 6px 2px;padding-left:3px;padding-right:0}.cke_hc .cke_toolgroup{margin-right:5px;margin-bottom:5px}.cke_hc.cke_rtl .cke_toolgroup{margin-right:0;margin-left:5px}a.cke_button{display:inline-block;height:18px;padding:4px 6px;outline:0;cursor:default;float:left;border:0;position:relative}.cke_rtl a.cke_button{float:right}.cke_hc a.cke_button{border:1px solid black;padding:3px 5px;margin:0 3px 5px 0}.cke_hc.cke_rtl a.cke_button{margin:0 0 5px 3px}a.cke_button_on{background:#fff;border:1px #bcbcbc solid;padding:3px 5px}a.cke_button_off:hover,a.cke_button_off:focus,a.cke_button_off:active{background:#e5e5e5;border:1px #bcbcbc solid;padding:3px 5px}.cke_hc a.cke_button_on,.cke_hc a.cke_button_off:hover,.cke_hc a.cke_button_off:focus,.cke_hc a.cke_button_off:active{background:#e5e5e5;border:3px solid #000;padding:1px 3px}a.cke_button_disabled:hover,a.cke_button_disabled:focus,a.cke_button_disabled:active{border:0;padding:4px 6px;background-color:transparent}a.cke_button_disabled:focus{border:1px #bcbcbc solid;padding:3px 5px}.cke_hc a.cke_button_disabled:hover,.cke_hc a.cke_button_disabled:focus,.cke_hc a.cke_button_disabled:active{border:1px solid #acacac;padding:3px 5px;margin:0 3px 5px 0}.cke_hc a.cke_button_disabled:focus{border:3px solid #000;padding:1px 3px}.cke_hc.cke_rtl a.cke_button_disabled:hover,.cke_hc.cke_rtl a.cke_button_disabled:focus,.cke_hc.cke_rtl a.cke_button_disabled:active{margin:0 0 5px 3px}a.cke_button_disabled .cke_button_icon,a.cke_button_disabled .cke_button_arrow{opacity:.3}.cke_hc a.cke_button_disabled{border-color:#acacac}.cke_hc a.cke_button_disabled .cke_button_icon,.cke_hc a.cke_button_disabled .cke_button_label{opacity:.5}.cke_toolgroup a.cke_button:last-child:after,.cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{content:\"\";position:absolute;height:18px;width:0;border-right:1px solid #bcbcbc;margin-top:4px;top:0;right:-3px}.cke_rtl .cke_toolgroup a.cke_button:last-child:after,.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{border-right:0;right:auto;border-left:1px solid #bcbcbc;top:0;left:-3px}.cke_hc .cke_toolgroup a.cke_button:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_disabled:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{border-color:#000;top:0;right:-7px}.cke_hc.cke_rtl .cke_toolgroup a.cke_button:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{top:0;right:auto;left:-7px}.cke_toolgroup a.cke_button:hover:last-child:after,.cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-1px;right:-4px}.cke_rtl .cke_toolgroup a.cke_button:hover:last-child:after,.cke_rtl .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-1px;right:auto;left:-4px}.cke_hc .cke_toolgroup a.cke_button:hover:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-2px;right:-9px}.cke_hc.cke_rtl .cke_toolgroup a.cke_button:hover:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-2px;right:auto;left:-9px}.cke_toolbar.cke_toolbar_last .cke_toolgroup a.cke_button:last-child:after{content:none;border:0;width:0;height:0}.cke_button_icon{cursor:inherit;background-repeat:no-repeat;margin-top:1px;width:16px;height:16px;float:left;display:inline-block}.cke_rtl .cke_button_icon{float:right}.cke_hc .cke_button_icon{display:none}.cke_button_label{display:none;padding-left:3px;margin-top:1px;line-height:17px;vertical-align:middle;float:left;cursor:default;color:#484848}.cke_rtl .cke_button_label{padding-right:3px;padding-left:0;float:right}.cke_hc .cke_button_label{padding:0;display:inline-block;font-size:12px}.cke_button_arrow{display:inline-block;margin:8px 0 0 1px;width:0;height:0;cursor:default;vertical-align:top;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #484848}.cke_rtl .cke_button_arrow{margin-right:5px;margin-left:0}.cke_hc .cke_button_arrow{font-size:10px;margin:3px 0 0 3px;width:auto;border:0}.cke_toolbar_separator{float:left;background-color:#bcbcbc;margin:4px 2px 0 2px;height:18px;width:1px}.cke_rtl .cke_toolbar_separator{float:right}.cke_hc .cke_toolbar_separator{background-color:#000;margin-left:2px;margin-right:5px;margin-bottom:9px}.cke_hc.cke_rtl .cke_toolbar_separator{margin-left:5px;margin-right:2px}.cke_toolbar_break{display:block;clear:left}.cke_rtl .cke_toolbar_break{clear:right}a.cke_toolbox_collapser{width:12px;height:11px;float:right;margin:11px 0 0;font-size:0;cursor:default;text-align:center;border:1px solid #bcbcbc}.cke_rtl .cke_toolbox_collapser{float:left}.cke_toolbox_collapser:hover{background:#e5e5e5}.cke_toolbox_collapser.cke_toolbox_collapser_min{margin:0 2px 4px}.cke_toolbox_collapser .cke_arrow{display:inline-block;height:0;width:0;font-size:0;margin-top:1px;border:3px solid transparent;border-bottom-color:#484848}.cke_toolbox_collapser.cke_toolbox_collapser_min .cke_arrow{margin-top:4px;border-bottom-color:transparent;border-top-color:#484848}.cke_hc .cke_toolbox_collapser .cke_arrow{font-size:8px;width:auto;border:0;margin-top:0}.cke_menuitem span{cursor:default}.cke_menubutton{display:block}.cke_hc .cke_menubutton{padding:2px}.cke_menubutton:hover,.cke_menubutton:focus,.cke_menubutton:active{background-color:#e9e9e9;display:block;outline:1px dotted}.cke_menubutton:hover{outline:0}.cke_hc .cke_menubutton:hover,.cke_hc .cke_menubutton:focus,.cke_hc .cke_menubutton:active{border:2px solid;padding:0}.cke_menubutton_disabled:hover,.cke_menubutton_disabled:focus,.cke_menubutton_disabled:active{background-color:transparent;outline:0}.cke_menubutton_inner{display:table-row}.cke_menubutton_icon,.cke_menubutton_label,.cke_menuarrow{display:table-cell}.cke_menubutton_icon{background-color:#f8f8f8;padding:6px 4px}.cke_hc .cke_menubutton_icon{height:16px;width:0;padding:4px 0}.cke_menubutton:hover .cke_menubutton_icon,.cke_menubutton:focus .cke_menubutton_icon,.cke_menubutton:active .cke_menubutton_icon{background-color:#e9e9e9}.cke_menubutton_disabled:hover .cke_menubutton_icon,.cke_menubutton_disabled:focus .cke_menubutton_icon,.cke_menubutton_disabled:active .cke_menubutton_icon{background-color:#f8f8f8;outline:0}.cke_menuitem .cke_menubutton_on{background-color:#e9e9e9;border:1px solid #dedede;outline:0}.cke_menubutton_on .cke_menubutton_icon{padding-right:3px;background-color:#e9e9e9}.cke_menubutton_label{padding:0 5px;background-color:transparent;width:100%;vertical-align:middle}.cke_menubutton_shortcut{color:#979797}.cke_menubutton_disabled .cke_menubutton_label{opacity:.3;filter:alpha(opacity=30)}.cke_panel_frame .cke_menubutton_label{display:none}.cke_menuseparator{background-color:#d1d1d1;height:1px}.cke_menuarrow{background:transparent url(images/arrow.png) no-repeat 0 10px;padding:0 5px}.cke_rtl .cke_menuarrow{background-position:5px -13px;background-repeat:no-repeat}.cke_hc .cke_menuarrow{background-image:none}.cke_menuarrow span{display:none}.cke_hc .cke_menuarrow span{vertical-align:middle;display:inline}.cke_combo{display:inline-block;float:left;position:relative;margin-bottom:5px}.cke_rtl .cke_combo{float:right}.cke_hc .cke_combo{margin-top:1px;margin-bottom:10px}.cke_combo:after{content:\"\";position:absolute;height:18px;width:0;border-right:1px solid #bcbcbc;margin-top:5px;top:0;right:0}.cke_rtl .cke_combo:after{border-right:0;border-left:1px solid #bcbcbc;right:auto;left:0}.cke_hc .cke_combo:after{border-color:#000}a.cke_combo_button{cursor:default;display:inline-block;float:left;margin:0;padding:1px}.cke_rtl a.cke_combo_button{float:right}.cke_hc a.cke_combo_button{padding:4px}.cke_combo_on a.cke_combo_button,.cke_combo_off a.cke_combo_button:hover,.cke_combo_off a.cke_combo_button:focus,.cke_combo_off a.cke_combo_button:active{background:#e5e5e5;border:1px solid #bcbcbc;padding:0 0 0 1px;margin-left:-1px}.cke_combo_off a.cke_combo_button:focus{outline:0}.cke_combo_on a.cke_combo_button,.cke_combo_off a.cke_combo_button:active{background:#fff}.cke_rtl .cke_combo_on a.cke_combo_button,.cke_rtl .cke_combo_off a.cke_combo_button:hover,.cke_rtl .cke_combo_off a.cke_combo_button:focus,.cke_rtl .cke_combo_off a.cke_combo_button:active{padding:0 1px 0 0;margin-left:0;margin-right:-1px}.cke_hc .cke_combo_on a.cke_combo_button,.cke_hc .cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_combo_off a.cke_combo_button:active{border:3px solid #000;padding:1px 1px 1px 2px}.cke_hc.cke_rtl .cke_combo_on a.cke_combo_button,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:hover,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:focus,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:active{padding:1px 2px 1px 1px}.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0 0 0 3px;margin-left:-3px}.cke_rtl .cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0 3px 0 0;margin-left:0;margin-right:-3px}.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px 1px 1px 7px;margin-left:-6px}.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px 7px 1px 1px;margin-left:0;margin-right:-6px}.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0;margin:0}.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px;margin:0}.cke_toolbar .cke_combo+.cke_toolbar_end,.cke_toolbar .cke_combo+.cke_toolgroup{margin-right:0;margin-left:2px}.cke_rtl .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_rtl .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:0;margin-right:2px}.cke_hc .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_hc .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:5px}.cke_hc.cke_rtl .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_hc.cke_rtl .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:0;margin-right:5px}.cke_toolbar.cke_toolbar_last .cke_combo:nth-last-child(-n+2):after{content:none;border:0;width:0;height:0}.cke_combo_text{line-height:26px;padding-left:10px;text-overflow:ellipsis;overflow:hidden;float:left;cursor:default;color:#484848;width:60px}.cke_rtl .cke_combo_text{float:right;text-align:right;padding-left:0;padding-right:10px}.cke_hc .cke_combo_text{line-height:18px;font-size:12px}.cke_combo_open{cursor:default;display:inline-block;font-size:0;height:19px;line-height:17px;margin:1px 10px 1px;width:5px}.cke_hc .cke_combo_open{height:12px}.cke_combo_arrow{cursor:default;margin:11px 0 0;float:left;height:0;width:0;font-size:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #484848}.cke_hc .cke_combo_arrow{font-size:10px;width:auto;border:0;margin-top:3px}.cke_combo_label{display:none;float:left;line-height:26px;vertical-align:top;margin-right:5px}.cke_rtl .cke_combo_label{float:right;margin-left:5px;margin-right:0}.cke_combo_disabled .cke_combo_inlinelabel,.cke_combo_disabled .cke_combo_open{opacity:.3}.cke_path{float:left;margin:-2px 0 2px}a.cke_path_item,span.cke_path_empty{display:inline-block;float:left;padding:3px 4px;margin-right:2px;cursor:default;text-decoration:none;outline:0;border:0;color:#484848;font-weight:bold;font-size:11px}.cke_rtl .cke_path,.cke_rtl .cke_path_item,.cke_rtl .cke_path_empty{float:right}a.cke_path_item:hover,a.cke_path_item:focus,a.cke_path_item:active{background-color:#e5e5e5}.cke_hc a.cke_path_item:hover,.cke_hc a.cke_path_item:focus,.cke_hc a.cke_path_item:active{border:2px solid;padding:1px 2px}.cke_button__source_label,.cke_button__sourcedialog_label{display:inline}.cke_combopanel__fontsize{width:135px}textarea.cke_source{font-family:'Courier New',Monospace;font-size:small;background-color:#fff;white-space:pre-wrap;border:0;padding:0;margin:0;display:block}.cke_wysiwyg_frame,.cke_wysiwyg_div{background-color:#fff}.cke_notifications_area{pointer-events:none}.cke_notification{pointer-events:auto;position:relative;margin:10px;width:300px;color:white;text-align:center;opacity:.95;filter:alpha(opacity = 95);-webkit-animation:fadeIn .7s;animation:fadeIn .7s}.cke_notification_message a{color:#12306f}@-webkit-keyframes fadeIn{from{opacity:.4}to{opacity:.95}}@keyframes fadeIn{from{opacity:.4}to{opacity:.95}}.cke_notification_success{background:#72b572;border:1px solid #63a563}.cke_notification_warning{background:#c83939;border:1px solid #902b2b}.cke_notification_info{background:#2e9ad0;border:1px solid #0f74a8}.cke_notification_info span.cke_notification_progress{background-color:#0f74a8;display:block;padding:0;margin:0;height:100%;overflow:hidden;position:absolute;z-index:1}.cke_notification_message{position:relative;margin:4px 23px 3px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;z-index:4;text-overflow:ellipsis;overflow:hidden}.cke_notification_close{background-image:url(images/close.png);background-repeat:no-repeat;background-position:50%;position:absolute;cursor:pointer;text-align:center;height:20px;width:20px;top:1px;right:1px;padding:0;margin:0;z-index:5;opacity:.6;filter:alpha(opacity = 60)}.cke_notification_close:hover{opacity:1;filter:alpha(opacity = 100)}.cke_notification_close span{display:none}.cke_notification_warning a.cke_notification_close{opacity:.8;filter:alpha(opacity = 80)}.cke_notification_warning a.cke_notification_close:hover{opacity:1;filter:alpha(opacity = 100)}.cke_chrome{visibility:inherit}.cke_voice_label{display:none}legend.cke_voice_label{display:none}.cke_button__about_icon{background:url(icons.png?t=H0CF) no-repeat 0 -0px!important}.cke_button__bold_icon{background:url(icons.png?t=H0CF) no-repeat 0 -24px!important}.cke_button__italic_icon{background:url(icons.png?t=H0CF) no-repeat 0 -48px!important}.cke_button__strike_icon{background:url(icons.png?t=H0CF) no-repeat 0 -72px!important}.cke_button__subscript_icon{background:url(icons.png?t=H0CF) no-repeat 0 -96px!important}.cke_button__superscript_icon{background:url(icons.png?t=H0CF) no-repeat 0 -120px!important}.cke_button__underline_icon{background:url(icons.png?t=H0CF) no-repeat 0 -144px!important}.cke_button__bidiltr_icon{background:url(icons.png?t=H0CF) no-repeat 0 -168px!important}.cke_button__bidirtl_icon{background:url(icons.png?t=H0CF) no-repeat 0 -192px!important}.cke_button__blockquote_icon{background:url(icons.png?t=H0CF) no-repeat 0 -216px!important}.cke_rtl .cke_button__copy_icon,.cke_mixed_dir_content .cke_rtl .cke_button__copy_icon{background:url(icons.png?t=H0CF) no-repeat 0 -240px!important}.cke_ltr .cke_button__copy_icon{background:url(icons.png?t=H0CF) no-repeat 0 -264px!important}.cke_rtl .cke_button__cut_icon,.cke_mixed_dir_content .cke_rtl .cke_button__cut_icon{background:url(icons.png?t=H0CF) no-repeat 0 -288px!important}.cke_ltr .cke_button__cut_icon{background:url(icons.png?t=H0CF) no-repeat 0 -312px!important}.cke_rtl .cke_button__paste_icon,.cke_mixed_dir_content .cke_rtl .cke_button__paste_icon{background:url(icons.png?t=H0CF) no-repeat 0 -336px!important}.cke_ltr .cke_button__paste_icon{background:url(icons.png?t=H0CF) no-repeat 0 -360px!important}.cke_button__codesnippet_icon{background:url(icons.png?t=H0CF) no-repeat 0 -384px!important}.cke_button__bgcolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -408px!important}.cke_button__textcolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -432px!important}.cke_button__copyformatting_icon{background:url(icons.png?t=H0CF) no-repeat 0 -456px!important}.cke_button__creatediv_icon{background:url(icons.png?t=H0CF) no-repeat 0 -480px!important}.cke_rtl .cke_button__docprops_icon,.cke_mixed_dir_content .cke_rtl .cke_button__docprops_icon{background:url(icons.png?t=H0CF) no-repeat 0 -504px!important}.cke_ltr .cke_button__docprops_icon{background:url(icons.png?t=H0CF) no-repeat 0 -528px!important}.cke_button__embed_icon{background:url(icons.png?t=H0CF) no-repeat 0 -552px!important}.cke_button__embedsemantic_icon{background:url(icons.png?t=H0CF) no-repeat 0 -576px!important}.cke_rtl .cke_button__find_icon,.cke_mixed_dir_content .cke_rtl .cke_button__find_icon{background:url(icons.png?t=H0CF) no-repeat 0 -600px!important}.cke_ltr .cke_button__find_icon{background:url(icons.png?t=H0CF) no-repeat 0 -624px!important}.cke_button__replace_icon{background:url(icons.png?t=H0CF) no-repeat 0 -648px!important}.cke_button__flash_icon{background:url(icons.png?t=H0CF) no-repeat 0 -672px!important}.cke_button__button_icon{background:url(icons.png?t=H0CF) no-repeat 0 -696px!important}.cke_button__checkbox_icon{background:url(icons.png?t=H0CF) no-repeat 0 -720px!important}.cke_button__form_icon{background:url(icons.png?t=H0CF) no-repeat 0 -744px!important}.cke_button__hiddenfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -768px!important}.cke_button__imagebutton_icon{background:url(icons.png?t=H0CF) no-repeat 0 -792px!important}.cke_button__radio_icon{background:url(icons.png?t=H0CF) no-repeat 0 -816px!important}.cke_rtl .cke_button__select_icon,.cke_mixed_dir_content .cke_rtl .cke_button__select_icon{background:url(icons.png?t=H0CF) no-repeat 0 -840px!important}.cke_ltr .cke_button__select_icon{background:url(icons.png?t=H0CF) no-repeat 0 -864px!important}.cke_rtl .cke_button__textarea_icon,.cke_mixed_dir_content .cke_rtl .cke_button__textarea_icon{background:url(icons.png?t=H0CF) no-repeat 0 -888px!important}.cke_ltr .cke_button__textarea_icon{background:url(icons.png?t=H0CF) no-repeat 0 -912px!important}.cke_rtl .cke_button__textfield_icon,.cke_mixed_dir_content .cke_rtl .cke_button__textfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -936px!important}.cke_ltr .cke_button__textfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -960px!important}.cke_button__horizontalrule_icon{background:url(icons.png?t=H0CF) no-repeat 0 -984px!important}.cke_button__iframe_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1008px!important}.cke_button__image_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1032px!important}.cke_rtl .cke_button__indent_icon,.cke_mixed_dir_content .cke_rtl .cke_button__indent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1056px!important}.cke_ltr .cke_button__indent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1080px!important}.cke_rtl .cke_button__outdent_icon,.cke_mixed_dir_content .cke_rtl .cke_button__outdent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1104px!important}.cke_ltr .cke_button__outdent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1128px!important}.cke_button__justifyblock_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1152px!important}.cke_button__justifycenter_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1176px!important}.cke_button__justifyleft_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1200px!important}.cke_button__justifyright_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1224px!important}.cke_button__language_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1248px!important}.cke_rtl .cke_button__anchor_icon,.cke_mixed_dir_content .cke_rtl .cke_button__anchor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1272px!important}.cke_ltr .cke_button__anchor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1296px!important}.cke_button__link_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1320px!important}.cke_button__unlink_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1344px!important}.cke_rtl .cke_button__bulletedlist_icon,.cke_mixed_dir_content .cke_rtl .cke_button__bulletedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1368px!important}.cke_ltr .cke_button__bulletedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1392px!important}.cke_rtl .cke_button__numberedlist_icon,.cke_mixed_dir_content .cke_rtl .cke_button__numberedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1416px!important}.cke_ltr .cke_button__numberedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1440px!important}.cke_button__mathjax_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1464px!important}.cke_button__maximize_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1488px!important}.cke_rtl .cke_button__newpage_icon,.cke_mixed_dir_content .cke_rtl .cke_button__newpage_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1512px!important}.cke_ltr .cke_button__newpage_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1536px!important}.cke_rtl .cke_button__pagebreak_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pagebreak_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1560px!important}.cke_ltr .cke_button__pagebreak_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1584px!important}.cke_rtl .cke_button__pastefromword_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pastefromword_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1608px!important}.cke_ltr .cke_button__pastefromword_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1632px!important}.cke_rtl .cke_button__pastetext_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pastetext_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1656px!important}.cke_ltr .cke_button__pastetext_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1680px!important}.cke_button__placeholder_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1704px!important}.cke_rtl .cke_button__preview_icon,.cke_mixed_dir_content .cke_rtl .cke_button__preview_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1728px!important}.cke_ltr .cke_button__preview_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1752px!important}.cke_button__print_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1776px!important}.cke_button__removeformat_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1800px!important}.cke_button__save_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1824px!important}.cke_button__scayt_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1848px!important}.cke_button__selectall_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1872px!important}.cke_rtl .cke_button__showblocks_icon,.cke_mixed_dir_content .cke_rtl .cke_button__showblocks_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1896px!important}.cke_ltr .cke_button__showblocks_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1920px!important}.cke_button__smiley_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1944px!important}.cke_rtl .cke_button__source_icon,.cke_mixed_dir_content .cke_rtl .cke_button__source_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1968px!important}.cke_ltr .cke_button__source_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1992px!important}.cke_rtl .cke_button__sourcedialog_icon,.cke_mixed_dir_content .cke_rtl .cke_button__sourcedialog_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2016px!important}.cke_ltr .cke_button__sourcedialog_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2040px!important}.cke_button__specialchar_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2064px!important}.cke_button__table_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2088px!important}.cke_rtl .cke_button__templates_icon,.cke_mixed_dir_content .cke_rtl .cke_button__templates_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2112px!important}.cke_ltr .cke_button__templates_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2136px!important}.cke_button__uicolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2160px!important}.cke_rtl .cke_button__redo_icon,.cke_mixed_dir_content .cke_rtl .cke_button__redo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2184px!important}.cke_ltr .cke_button__redo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2208px!important}.cke_rtl .cke_button__undo_icon,.cke_mixed_dir_content .cke_rtl .cke_button__undo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2232px!important}.cke_ltr .cke_button__undo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2256px!important}.cke_button__simplebox_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2280px!important}.cke_button__spellchecker_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2304px!important}.cke_hidpi .cke_button__about_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -0px!important;background-size:16px!important}.cke_hidpi .cke_button__bold_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -24px!important;background-size:16px!important}.cke_hidpi .cke_button__italic_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -48px!important;background-size:16px!important}.cke_hidpi .cke_button__strike_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -72px!important;background-size:16px!important}.cke_hidpi .cke_button__subscript_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -96px!important;background-size:16px!important}.cke_hidpi .cke_button__superscript_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -120px!important;background-size:16px!important}.cke_hidpi .cke_button__underline_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -144px!important;background-size:16px!important}.cke_hidpi .cke_button__bidiltr_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -168px!important;background-size:16px!important}.cke_hidpi .cke_button__bidirtl_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -192px!important;background-size:16px!important}.cke_hidpi .cke_button__blockquote_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -216px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__copy_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__copy_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -240px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__copy_icon,.cke_ltr.cke_hidpi .cke_button__copy_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -264px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__cut_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__cut_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -288px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__cut_icon,.cke_ltr.cke_hidpi .cke_button__cut_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -312px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__paste_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__paste_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -336px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__paste_icon,.cke_ltr.cke_hidpi .cke_button__paste_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -360px!important;background-size:16px!important}.cke_hidpi .cke_button__codesnippet_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -384px!important;background-size:16px!important}.cke_hidpi .cke_button__bgcolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -408px!important;background-size:16px!important}.cke_hidpi .cke_button__textcolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -432px!important;background-size:16px!important}.cke_hidpi .cke_button__copyformatting_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -456px!important;background-size:16px!important}.cke_hidpi .cke_button__creatediv_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -480px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__docprops_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__docprops_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -504px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__docprops_icon,.cke_ltr.cke_hidpi .cke_button__docprops_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -528px!important;background-size:16px!important}.cke_hidpi .cke_button__embed_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -552px!important;background-size:16px!important}.cke_hidpi .cke_button__embedsemantic_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -576px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__find_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__find_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -600px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__find_icon,.cke_ltr.cke_hidpi .cke_button__find_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -624px!important;background-size:16px!important}.cke_hidpi .cke_button__replace_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -648px!important;background-size:16px!important}.cke_hidpi .cke_button__flash_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -672px!important;background-size:16px!important}.cke_hidpi .cke_button__button_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -696px!important;background-size:16px!important}.cke_hidpi .cke_button__checkbox_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -720px!important;background-size:16px!important}.cke_hidpi .cke_button__form_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -744px!important;background-size:16px!important}.cke_hidpi .cke_button__hiddenfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -768px!important;background-size:16px!important}.cke_hidpi .cke_button__imagebutton_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -792px!important;background-size:16px!important}.cke_hidpi .cke_button__radio_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -816px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__select_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__select_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -840px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__select_icon,.cke_ltr.cke_hidpi .cke_button__select_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -864px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__textarea_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__textarea_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -888px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__textarea_icon,.cke_ltr.cke_hidpi .cke_button__textarea_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -912px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__textfield_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__textfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -936px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__textfield_icon,.cke_ltr.cke_hidpi .cke_button__textfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -960px!important;background-size:16px!important}.cke_hidpi .cke_button__horizontalrule_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -984px!important;background-size:16px!important}.cke_hidpi .cke_button__iframe_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1008px!important;background-size:16px!important}.cke_hidpi .cke_button__image_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1032px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__indent_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__indent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1056px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__indent_icon,.cke_ltr.cke_hidpi .cke_button__indent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1080px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__outdent_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__outdent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1104px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__outdent_icon,.cke_ltr.cke_hidpi .cke_button__outdent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1128px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyblock_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1152px!important;background-size:16px!important}.cke_hidpi .cke_button__justifycenter_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1176px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyleft_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1200px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyright_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1224px!important;background-size:16px!important}.cke_hidpi .cke_button__language_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1248px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__anchor_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__anchor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1272px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__anchor_icon,.cke_ltr.cke_hidpi .cke_button__anchor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1296px!important;background-size:16px!important}.cke_hidpi .cke_button__link_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1320px!important;background-size:16px!important}.cke_hidpi .cke_button__unlink_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1344px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__bulletedlist_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__bulletedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1368px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__bulletedlist_icon,.cke_ltr.cke_hidpi .cke_button__bulletedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1392px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__numberedlist_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__numberedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1416px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__numberedlist_icon,.cke_ltr.cke_hidpi .cke_button__numberedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1440px!important;background-size:16px!important}.cke_hidpi .cke_button__mathjax_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1464px!important;background-size:16px!important}.cke_hidpi .cke_button__maximize_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1488px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__newpage_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__newpage_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1512px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__newpage_icon,.cke_ltr.cke_hidpi .cke_button__newpage_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1536px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pagebreak_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pagebreak_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1560px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pagebreak_icon,.cke_ltr.cke_hidpi .cke_button__pagebreak_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1584px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pastefromword_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pastefromword_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1608px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pastefromword_icon,.cke_ltr.cke_hidpi .cke_button__pastefromword_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1632px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pastetext_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pastetext_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1656px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pastetext_icon,.cke_ltr.cke_hidpi .cke_button__pastetext_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1680px!important;background-size:16px!important}.cke_hidpi .cke_button__placeholder_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1704px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__preview_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__preview_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1728px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__preview_icon,.cke_ltr.cke_hidpi .cke_button__preview_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1752px!important;background-size:16px!important}.cke_hidpi .cke_button__print_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1776px!important;background-size:16px!important}.cke_hidpi .cke_button__removeformat_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1800px!important;background-size:16px!important}.cke_hidpi .cke_button__save_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1824px!important;background-size:16px!important}.cke_hidpi .cke_button__scayt_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1848px!important;background-size:16px!important}.cke_hidpi .cke_button__selectall_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1872px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__showblocks_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__showblocks_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1896px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__showblocks_icon,.cke_ltr.cke_hidpi .cke_button__showblocks_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1920px!important;background-size:16px!important}.cke_hidpi .cke_button__smiley_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1944px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__source_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__source_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1968px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__source_icon,.cke_ltr.cke_hidpi .cke_button__source_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1992px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__sourcedialog_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__sourcedialog_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2016px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__sourcedialog_icon,.cke_ltr.cke_hidpi .cke_button__sourcedialog_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2040px!important;background-size:16px!important}.cke_hidpi .cke_button__specialchar_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2064px!important;background-size:16px!important}.cke_hidpi .cke_button__table_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2088px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__templates_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__templates_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2112px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__templates_icon,.cke_ltr.cke_hidpi .cke_button__templates_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2136px!important;background-size:16px!important}.cke_hidpi .cke_button__uicolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2160px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__redo_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__redo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2184px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__redo_icon,.cke_ltr.cke_hidpi .cke_button__redo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2208px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__undo_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__undo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2232px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__undo_icon,.cke_ltr.cke_hidpi .cke_button__undo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2256px!important;background-size:16px!important}.cke_hidpi .cke_button__simplebox_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -4560px!important}.cke_hidpi .cke_button__spellchecker_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2304px!important;background-size:16px!important}a.cke_button_disabled,a.cke_button_disabled:hover,a.cke_button_disabled:focus,a.cke_button_disabled:active{filter:alpha(opacity = 30)}.cke_button_disabled .cke_button_icon{filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#00ffffff,endColorstr=#00ffffff)}.cke_button_off:hover,.cke_button_off:focus,.cke_button_off:active{filter:alpha(opacity = 100)}.cke_combo_disabled .cke_combo_inlinelabel,.cke_combo_disabled .cke_combo_open{filter:alpha(opacity = 30)}.cke_toolbox_collapser{border:1px solid #a6a6a6}.cke_toolbox_collapser .cke_arrow{margin-top:1px}.cke_hc .cke_top,.cke_hc .cke_bottom,.cke_hc .cke_combo_button,.cke_hc a.cke_combo_button:hover,.cke_hc a.cke_combo_button:focus,.cke_hc .cke_toolgroup,.cke_hc .cke_button_on,.cke_hc a.cke_button_off:hover,.cke_hc a.cke_button_off:focus,.cke_hc a.cke_button_off:active,.cke_hc .cke_toolbox_collapser,.cke_hc .cke_toolbox_collapser:hover,.cke_hc .cke_panel_grouptitle{filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.cke_toolbox_collapser .cke_arrow{border-width:4px}.cke_toolbox_collapser.cke_toolbox_collapser_min .cke_arrow{border-width:3px}.cke_toolbox_collapser .cke_arrow{margin-top:0}.cke_toolbar{position:relative}.cke_rtl .cke_toolbar_end{right:auto;left:0}.cke_toolbar_end:after{content:\"\";position:absolute;height:18px;width:0;border-right:1px solid #bcbcbc;margin-top:4px;top:1px;right:2px}.cke_rtl .cke_toolbar_end:after{right:auto;left:2px}.cke_hc .cke_toolbar_end:after{top:2px;right:5px;border-color:#000}.cke_hc.cke_rtl .cke_toolbar_end:after{right:auto;left:5px}.cke_combo+.cke_toolbar_end:after,.cke_toolbar.cke_toolbar_last .cke_toolbar_end:after{content:none;border:0}.cke_combo+.cke_toolgroup+.cke_toolbar_end:after{right:0}.cke_rtl .cke_combo+.cke_toolgroup+.cke_toolbar_end:after{right:auto;left:0}"; });
define('text!resources/editor/skins/moono-lisa/editor_ie.css', ['module'], function(module) { module.exports = "/*\r\nCopyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.\r\nFor licensing, see LICENSE.md or http://ckeditor.com/license\r\n*/\r\n.cke_reset{margin:0;padding:0;border:0;background:transparent;text-decoration:none;width:auto;height:auto;vertical-align:baseline;box-sizing:content-box;position:static;transition:none}.cke_reset_all,.cke_reset_all *,.cke_reset_all a,.cke_reset_all textarea{margin:0;padding:0;border:0;background:transparent;text-decoration:none;width:auto;height:auto;vertical-align:baseline;box-sizing:content-box;position:static;transition:none;border-collapse:collapse;font:normal normal normal 12px Arial,Helvetica,Tahoma,Verdana,Sans-Serif;color:#000;text-align:left;white-space:nowrap;cursor:auto;float:none}.cke_reset_all .cke_rtl *{text-align:right}.cke_reset_all iframe{vertical-align:inherit}.cke_reset_all textarea{white-space:pre-wrap}.cke_reset_all textarea,.cke_reset_all input[type=\"text\"],.cke_reset_all input[type=\"password\"]{cursor:text}.cke_reset_all textarea[disabled],.cke_reset_all input[type=\"text\"][disabled],.cke_reset_all input[type=\"password\"][disabled]{cursor:default}.cke_reset_all fieldset{padding:10px;border:2px groove #e0dfe3}.cke_reset_all select{box-sizing:border-box}.cke_reset_all table{table-layout:auto}.cke_chrome{display:block;border:1px solid #d1d1d1;padding:0}.cke_inner{display:block;background:#fff;padding:0;-webkit-touch-callout:none}.cke_float{border:0}.cke_float .cke_inner{padding-bottom:0}.cke_top,.cke_contents,.cke_bottom{display:block;overflow:hidden}.cke_top{border-bottom:1px solid #d1d1d1;background:#f8f8f8;padding:6px 8px 2px;white-space:normal}.cke_float .cke_top{border:1px solid #d1d1d1}.cke_bottom{padding:6px 8px 2px;position:relative;border-top:1px solid #d1d1d1;background:#f8f8f8}.cke_browser_ios .cke_contents{overflow-y:auto;-webkit-overflow-scrolling:touch}.cke_resizer{width:0;height:0;overflow:hidden;border-width:10px 10px 0 0;border-color:transparent #bcbcbc transparent transparent;border-style:dashed solid dashed dashed;font-size:0;vertical-align:bottom;margin-top:6px;margin-bottom:2px}.cke_hc .cke_resizer{font-size:15px;width:auto;height:auto;border-width:0}.cke_resizer_ltr{cursor:se-resize;float:right;margin-right:-4px}.cke_resizer_rtl{border-width:10px 0 0 10px;border-color:transparent transparent transparent #bcbcbc;border-style:dashed dashed dashed solid;cursor:sw-resize;float:left;margin-left:-4px;right:auto}.cke_wysiwyg_div{display:block;height:100%;overflow:auto;padding:0 8px;outline-style:none;box-sizing:border-box}.cke_panel{visibility:visible;width:120px;height:100px;overflow:hidden;background-color:#fff;border:1px solid #d1d1d1}.cke_menu_panel{padding:0;margin:0}.cke_combopanel{width:150px;height:170px}.cke_panel_frame{width:100%;height:100%;font-size:12px;overflow:auto;overflow-x:hidden}.cke_panel_container{overflow-y:auto;overflow-x:hidden}.cke_panel_block:focus{outline:0}.cke_panel_list{margin:0;padding:0;list-style-type:none;white-space:nowrap}.cke_panel_listItem{margin:0;padding:0}.cke_panel_listItem a{padding:6px 7px;display:block;color:inherit!important;text-decoration:none;overflow:hidden;text-overflow:ellipsis}.cke_hc .cke_panel_listItem a{border-style:none}.cke_panel_listItem.cke_selected a,.cke_panel_listItem a:hover,.cke_panel_listItem a:focus,.cke_panel_listItem a:active{background-color:#e9e9e9}.cke_panel_listItem a:focus{outline:1px dotted #000}.cke_hc .cke_panel_listItem a:hover,.cke_hc .cke_panel_listItem a:focus,.cke_hc .cke_panel_listItem a:active{border:2px solid;padding:4px 5px}.cke_panel_listItem p,.cke_panel_listItem h1,.cke_panel_listItem h2,.cke_panel_listItem h3,.cke_panel_listItem h4,.cke_panel_listItem h5,.cke_panel_listItem h6,.cke_panel_listItem pre{margin-top:0;margin-bottom:0}.cke_panel_grouptitle{cursor:default;font-size:11px;font-weight:bold;white-space:nowrap;margin:0;padding:6px 6px 7px 6px;color:#484848;border-bottom:1px solid #d1d1d1;background:#f8f8f8}.cke_colorblock{padding:10px;font-size:11px;font-family:'Microsoft Sans Serif',Tahoma,Arial,Verdana,Sans-Serif}.cke_colorblock,.cke_colorblock a{text-decoration:none;color:#000}a.cke_colorbox{padding:2px;float:left;width:20px;height:20px}.cke_rtl a.cke_colorbox{float:right}a:hover.cke_colorbox,a:focus.cke_colorbox,a:active.cke_colorbox{outline:0;padding:0;border:2px solid #139ff7}a:hover.cke_colorbox{border-color:#bcbcbc}span.cke_colorbox{width:20px;height:20px;float:left}.cke_rtl span.cke_colorbox{float:right}a.cke_colorauto,a.cke_colormore{border:#fff 1px solid;padding:3px;display:block;cursor:pointer}a.cke_colorauto{padding:0;border:1px solid transparent;margin-bottom:6px;height:26px;line-height:26px}a.cke_colormore{margin-top:10px;height:20px;line-height:19px}a:hover.cke_colorauto,a:hover.cke_colormore,a:focus.cke_colorauto,a:focus.cke_colormore,a:active.cke_colorauto,a:active.cke_colormore{outline:0;border:#139ff7 1px solid;background-color:#f8f8f8}a:hover.cke_colorauto,a:hover.cke_colormore{border-color:#bcbcbc}.cke_colorauto span.cke_colorbox{width:18px;height:18px;border:1px solid #808080;margin-left:1px;margin-top:3px}.cke_rtl .cke_colorauto span.cke_colorbox{margin-left:0;margin-right:1px}span.cke_colorbox[style*=\"#ffffff\"],span.cke_colorbox[style*=\"#FFFFFF\"],span.cke_colorbox[style=\"background-color:#fff\"],span.cke_colorbox[style=\"background-color:#FFF\"],span.cke_colorbox[style*=\"rgb(255,255,255)\"],span.cke_colorbox[style*=\"rgb(255, 255, 255)\"]{border:1px solid #808080;width:18px;height:18px}.cke_toolbar{float:left}.cke_rtl .cke_toolbar{float:right}.cke_toolgroup{border:0;float:left;margin:1px 2px 6px 0;padding-right:3px}.cke_rtl .cke_toolgroup{float:right;margin:1px 0 6px 2px;padding-left:3px;padding-right:0}.cke_hc .cke_toolgroup{margin-right:5px;margin-bottom:5px}.cke_hc.cke_rtl .cke_toolgroup{margin-right:0;margin-left:5px}a.cke_button{display:inline-block;height:18px;padding:4px 6px;outline:0;cursor:default;float:left;border:0;position:relative}.cke_rtl a.cke_button{float:right}.cke_hc a.cke_button{border:1px solid black;padding:3px 5px;margin:0 3px 5px 0}.cke_hc.cke_rtl a.cke_button{margin:0 0 5px 3px}a.cke_button_on{background:#fff;border:1px #bcbcbc solid;padding:3px 5px}a.cke_button_off:hover,a.cke_button_off:focus,a.cke_button_off:active{background:#e5e5e5;border:1px #bcbcbc solid;padding:3px 5px}.cke_hc a.cke_button_on,.cke_hc a.cke_button_off:hover,.cke_hc a.cke_button_off:focus,.cke_hc a.cke_button_off:active{background:#e5e5e5;border:3px solid #000;padding:1px 3px}a.cke_button_disabled:hover,a.cke_button_disabled:focus,a.cke_button_disabled:active{border:0;padding:4px 6px;background-color:transparent}a.cke_button_disabled:focus{border:1px #bcbcbc solid;padding:3px 5px}.cke_hc a.cke_button_disabled:hover,.cke_hc a.cke_button_disabled:focus,.cke_hc a.cke_button_disabled:active{border:1px solid #acacac;padding:3px 5px;margin:0 3px 5px 0}.cke_hc a.cke_button_disabled:focus{border:3px solid #000;padding:1px 3px}.cke_hc.cke_rtl a.cke_button_disabled:hover,.cke_hc.cke_rtl a.cke_button_disabled:focus,.cke_hc.cke_rtl a.cke_button_disabled:active{margin:0 0 5px 3px}a.cke_button_disabled .cke_button_icon,a.cke_button_disabled .cke_button_arrow{opacity:.3}.cke_hc a.cke_button_disabled{border-color:#acacac}.cke_hc a.cke_button_disabled .cke_button_icon,.cke_hc a.cke_button_disabled .cke_button_label{opacity:.5}.cke_toolgroup a.cke_button:last-child:after,.cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{content:\"\";position:absolute;height:18px;width:0;border-right:1px solid #bcbcbc;margin-top:4px;top:0;right:-3px}.cke_rtl .cke_toolgroup a.cke_button:last-child:after,.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{border-right:0;right:auto;border-left:1px solid #bcbcbc;top:0;left:-3px}.cke_hc .cke_toolgroup a.cke_button:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_disabled:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{border-color:#000;top:0;right:-7px}.cke_hc.cke_rtl .cke_toolgroup a.cke_button:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{top:0;right:auto;left:-7px}.cke_toolgroup a.cke_button:hover:last-child:after,.cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-1px;right:-4px}.cke_rtl .cke_toolgroup a.cke_button:hover:last-child:after,.cke_rtl .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-1px;right:auto;left:-4px}.cke_hc .cke_toolgroup a.cke_button:hover:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-2px;right:-9px}.cke_hc.cke_rtl .cke_toolgroup a.cke_button:hover:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-2px;right:auto;left:-9px}.cke_toolbar.cke_toolbar_last .cke_toolgroup a.cke_button:last-child:after{content:none;border:0;width:0;height:0}.cke_button_icon{cursor:inherit;background-repeat:no-repeat;margin-top:1px;width:16px;height:16px;float:left;display:inline-block}.cke_rtl .cke_button_icon{float:right}.cke_hc .cke_button_icon{display:none}.cke_button_label{display:none;padding-left:3px;margin-top:1px;line-height:17px;vertical-align:middle;float:left;cursor:default;color:#484848}.cke_rtl .cke_button_label{padding-right:3px;padding-left:0;float:right}.cke_hc .cke_button_label{padding:0;display:inline-block;font-size:12px}.cke_button_arrow{display:inline-block;margin:8px 0 0 1px;width:0;height:0;cursor:default;vertical-align:top;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #484848}.cke_rtl .cke_button_arrow{margin-right:5px;margin-left:0}.cke_hc .cke_button_arrow{font-size:10px;margin:3px 0 0 3px;width:auto;border:0}.cke_toolbar_separator{float:left;background-color:#bcbcbc;margin:4px 2px 0 2px;height:18px;width:1px}.cke_rtl .cke_toolbar_separator{float:right}.cke_hc .cke_toolbar_separator{background-color:#000;margin-left:2px;margin-right:5px;margin-bottom:9px}.cke_hc.cke_rtl .cke_toolbar_separator{margin-left:5px;margin-right:2px}.cke_toolbar_break{display:block;clear:left}.cke_rtl .cke_toolbar_break{clear:right}a.cke_toolbox_collapser{width:12px;height:11px;float:right;margin:11px 0 0;font-size:0;cursor:default;text-align:center;border:1px solid #bcbcbc}.cke_rtl .cke_toolbox_collapser{float:left}.cke_toolbox_collapser:hover{background:#e5e5e5}.cke_toolbox_collapser.cke_toolbox_collapser_min{margin:0 2px 4px}.cke_toolbox_collapser .cke_arrow{display:inline-block;height:0;width:0;font-size:0;margin-top:1px;border:3px solid transparent;border-bottom-color:#484848}.cke_toolbox_collapser.cke_toolbox_collapser_min .cke_arrow{margin-top:4px;border-bottom-color:transparent;border-top-color:#484848}.cke_hc .cke_toolbox_collapser .cke_arrow{font-size:8px;width:auto;border:0;margin-top:0}.cke_menuitem span{cursor:default}.cke_menubutton{display:block}.cke_hc .cke_menubutton{padding:2px}.cke_menubutton:hover,.cke_menubutton:focus,.cke_menubutton:active{background-color:#e9e9e9;display:block;outline:1px dotted}.cke_menubutton:hover{outline:0}.cke_hc .cke_menubutton:hover,.cke_hc .cke_menubutton:focus,.cke_hc .cke_menubutton:active{border:2px solid;padding:0}.cke_menubutton_disabled:hover,.cke_menubutton_disabled:focus,.cke_menubutton_disabled:active{background-color:transparent;outline:0}.cke_menubutton_inner{display:table-row}.cke_menubutton_icon,.cke_menubutton_label,.cke_menuarrow{display:table-cell}.cke_menubutton_icon{background-color:#f8f8f8;padding:6px 4px}.cke_hc .cke_menubutton_icon{height:16px;width:0;padding:4px 0}.cke_menubutton:hover .cke_menubutton_icon,.cke_menubutton:focus .cke_menubutton_icon,.cke_menubutton:active .cke_menubutton_icon{background-color:#e9e9e9}.cke_menubutton_disabled:hover .cke_menubutton_icon,.cke_menubutton_disabled:focus .cke_menubutton_icon,.cke_menubutton_disabled:active .cke_menubutton_icon{background-color:#f8f8f8;outline:0}.cke_menuitem .cke_menubutton_on{background-color:#e9e9e9;border:1px solid #dedede;outline:0}.cke_menubutton_on .cke_menubutton_icon{padding-right:3px;background-color:#e9e9e9}.cke_menubutton_label{padding:0 5px;background-color:transparent;width:100%;vertical-align:middle}.cke_menubutton_shortcut{color:#979797}.cke_menubutton_disabled .cke_menubutton_label{opacity:.3;filter:alpha(opacity=30)}.cke_panel_frame .cke_menubutton_label{display:none}.cke_menuseparator{background-color:#d1d1d1;height:1px}.cke_menuarrow{background:transparent url(images/arrow.png) no-repeat 0 10px;padding:0 5px}.cke_rtl .cke_menuarrow{background-position:5px -13px;background-repeat:no-repeat}.cke_hc .cke_menuarrow{background-image:none}.cke_menuarrow span{display:none}.cke_hc .cke_menuarrow span{vertical-align:middle;display:inline}.cke_combo{display:inline-block;float:left;position:relative;margin-bottom:5px}.cke_rtl .cke_combo{float:right}.cke_hc .cke_combo{margin-top:1px;margin-bottom:10px}.cke_combo:after{content:\"\";position:absolute;height:18px;width:0;border-right:1px solid #bcbcbc;margin-top:5px;top:0;right:0}.cke_rtl .cke_combo:after{border-right:0;border-left:1px solid #bcbcbc;right:auto;left:0}.cke_hc .cke_combo:after{border-color:#000}a.cke_combo_button{cursor:default;display:inline-block;float:left;margin:0;padding:1px}.cke_rtl a.cke_combo_button{float:right}.cke_hc a.cke_combo_button{padding:4px}.cke_combo_on a.cke_combo_button,.cke_combo_off a.cke_combo_button:hover,.cke_combo_off a.cke_combo_button:focus,.cke_combo_off a.cke_combo_button:active{background:#e5e5e5;border:1px solid #bcbcbc;padding:0 0 0 1px;margin-left:-1px}.cke_combo_off a.cke_combo_button:focus{outline:0}.cke_combo_on a.cke_combo_button,.cke_combo_off a.cke_combo_button:active{background:#fff}.cke_rtl .cke_combo_on a.cke_combo_button,.cke_rtl .cke_combo_off a.cke_combo_button:hover,.cke_rtl .cke_combo_off a.cke_combo_button:focus,.cke_rtl .cke_combo_off a.cke_combo_button:active{padding:0 1px 0 0;margin-left:0;margin-right:-1px}.cke_hc .cke_combo_on a.cke_combo_button,.cke_hc .cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_combo_off a.cke_combo_button:active{border:3px solid #000;padding:1px 1px 1px 2px}.cke_hc.cke_rtl .cke_combo_on a.cke_combo_button,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:hover,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:focus,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:active{padding:1px 2px 1px 1px}.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0 0 0 3px;margin-left:-3px}.cke_rtl .cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0 3px 0 0;margin-left:0;margin-right:-3px}.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px 1px 1px 7px;margin-left:-6px}.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px 7px 1px 1px;margin-left:0;margin-right:-6px}.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0;margin:0}.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px;margin:0}.cke_toolbar .cke_combo+.cke_toolbar_end,.cke_toolbar .cke_combo+.cke_toolgroup{margin-right:0;margin-left:2px}.cke_rtl .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_rtl .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:0;margin-right:2px}.cke_hc .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_hc .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:5px}.cke_hc.cke_rtl .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_hc.cke_rtl .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:0;margin-right:5px}.cke_toolbar.cke_toolbar_last .cke_combo:nth-last-child(-n+2):after{content:none;border:0;width:0;height:0}.cke_combo_text{line-height:26px;padding-left:10px;text-overflow:ellipsis;overflow:hidden;float:left;cursor:default;color:#484848;width:60px}.cke_rtl .cke_combo_text{float:right;text-align:right;padding-left:0;padding-right:10px}.cke_hc .cke_combo_text{line-height:18px;font-size:12px}.cke_combo_open{cursor:default;display:inline-block;font-size:0;height:19px;line-height:17px;margin:1px 10px 1px;width:5px}.cke_hc .cke_combo_open{height:12px}.cke_combo_arrow{cursor:default;margin:11px 0 0;float:left;height:0;width:0;font-size:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #484848}.cke_hc .cke_combo_arrow{font-size:10px;width:auto;border:0;margin-top:3px}.cke_combo_label{display:none;float:left;line-height:26px;vertical-align:top;margin-right:5px}.cke_rtl .cke_combo_label{float:right;margin-left:5px;margin-right:0}.cke_combo_disabled .cke_combo_inlinelabel,.cke_combo_disabled .cke_combo_open{opacity:.3}.cke_path{float:left;margin:-2px 0 2px}a.cke_path_item,span.cke_path_empty{display:inline-block;float:left;padding:3px 4px;margin-right:2px;cursor:default;text-decoration:none;outline:0;border:0;color:#484848;font-weight:bold;font-size:11px}.cke_rtl .cke_path,.cke_rtl .cke_path_item,.cke_rtl .cke_path_empty{float:right}a.cke_path_item:hover,a.cke_path_item:focus,a.cke_path_item:active{background-color:#e5e5e5}.cke_hc a.cke_path_item:hover,.cke_hc a.cke_path_item:focus,.cke_hc a.cke_path_item:active{border:2px solid;padding:1px 2px}.cke_button__source_label,.cke_button__sourcedialog_label{display:inline}.cke_combopanel__fontsize{width:135px}textarea.cke_source{font-family:'Courier New',Monospace;font-size:small;background-color:#fff;white-space:pre-wrap;border:0;padding:0;margin:0;display:block}.cke_wysiwyg_frame,.cke_wysiwyg_div{background-color:#fff}.cke_notifications_area{pointer-events:none}.cke_notification{pointer-events:auto;position:relative;margin:10px;width:300px;color:white;text-align:center;opacity:.95;filter:alpha(opacity = 95);-webkit-animation:fadeIn .7s;animation:fadeIn .7s}.cke_notification_message a{color:#12306f}@-webkit-keyframes fadeIn{from{opacity:.4}to{opacity:.95}}@keyframes fadeIn{from{opacity:.4}to{opacity:.95}}.cke_notification_success{background:#72b572;border:1px solid #63a563}.cke_notification_warning{background:#c83939;border:1px solid #902b2b}.cke_notification_info{background:#2e9ad0;border:1px solid #0f74a8}.cke_notification_info span.cke_notification_progress{background-color:#0f74a8;display:block;padding:0;margin:0;height:100%;overflow:hidden;position:absolute;z-index:1}.cke_notification_message{position:relative;margin:4px 23px 3px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;z-index:4;text-overflow:ellipsis;overflow:hidden}.cke_notification_close{background-image:url(images/close.png);background-repeat:no-repeat;background-position:50%;position:absolute;cursor:pointer;text-align:center;height:20px;width:20px;top:1px;right:1px;padding:0;margin:0;z-index:5;opacity:.6;filter:alpha(opacity = 60)}.cke_notification_close:hover{opacity:1;filter:alpha(opacity = 100)}.cke_notification_close span{display:none}.cke_notification_warning a.cke_notification_close{opacity:.8;filter:alpha(opacity = 80)}.cke_notification_warning a.cke_notification_close:hover{opacity:1;filter:alpha(opacity = 100)}.cke_chrome{visibility:inherit}.cke_voice_label{display:none}legend.cke_voice_label{display:none}.cke_button__about_icon{background:url(icons.png?t=H0CF) no-repeat 0 -0px!important}.cke_button__bold_icon{background:url(icons.png?t=H0CF) no-repeat 0 -24px!important}.cke_button__italic_icon{background:url(icons.png?t=H0CF) no-repeat 0 -48px!important}.cke_button__strike_icon{background:url(icons.png?t=H0CF) no-repeat 0 -72px!important}.cke_button__subscript_icon{background:url(icons.png?t=H0CF) no-repeat 0 -96px!important}.cke_button__superscript_icon{background:url(icons.png?t=H0CF) no-repeat 0 -120px!important}.cke_button__underline_icon{background:url(icons.png?t=H0CF) no-repeat 0 -144px!important}.cke_button__bidiltr_icon{background:url(icons.png?t=H0CF) no-repeat 0 -168px!important}.cke_button__bidirtl_icon{background:url(icons.png?t=H0CF) no-repeat 0 -192px!important}.cke_button__blockquote_icon{background:url(icons.png?t=H0CF) no-repeat 0 -216px!important}.cke_rtl .cke_button__copy_icon,.cke_mixed_dir_content .cke_rtl .cke_button__copy_icon{background:url(icons.png?t=H0CF) no-repeat 0 -240px!important}.cke_ltr .cke_button__copy_icon{background:url(icons.png?t=H0CF) no-repeat 0 -264px!important}.cke_rtl .cke_button__cut_icon,.cke_mixed_dir_content .cke_rtl .cke_button__cut_icon{background:url(icons.png?t=H0CF) no-repeat 0 -288px!important}.cke_ltr .cke_button__cut_icon{background:url(icons.png?t=H0CF) no-repeat 0 -312px!important}.cke_rtl .cke_button__paste_icon,.cke_mixed_dir_content .cke_rtl .cke_button__paste_icon{background:url(icons.png?t=H0CF) no-repeat 0 -336px!important}.cke_ltr .cke_button__paste_icon{background:url(icons.png?t=H0CF) no-repeat 0 -360px!important}.cke_button__codesnippet_icon{background:url(icons.png?t=H0CF) no-repeat 0 -384px!important}.cke_button__bgcolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -408px!important}.cke_button__textcolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -432px!important}.cke_button__copyformatting_icon{background:url(icons.png?t=H0CF) no-repeat 0 -456px!important}.cke_button__creatediv_icon{background:url(icons.png?t=H0CF) no-repeat 0 -480px!important}.cke_rtl .cke_button__docprops_icon,.cke_mixed_dir_content .cke_rtl .cke_button__docprops_icon{background:url(icons.png?t=H0CF) no-repeat 0 -504px!important}.cke_ltr .cke_button__docprops_icon{background:url(icons.png?t=H0CF) no-repeat 0 -528px!important}.cke_button__embed_icon{background:url(icons.png?t=H0CF) no-repeat 0 -552px!important}.cke_button__embedsemantic_icon{background:url(icons.png?t=H0CF) no-repeat 0 -576px!important}.cke_rtl .cke_button__find_icon,.cke_mixed_dir_content .cke_rtl .cke_button__find_icon{background:url(icons.png?t=H0CF) no-repeat 0 -600px!important}.cke_ltr .cke_button__find_icon{background:url(icons.png?t=H0CF) no-repeat 0 -624px!important}.cke_button__replace_icon{background:url(icons.png?t=H0CF) no-repeat 0 -648px!important}.cke_button__flash_icon{background:url(icons.png?t=H0CF) no-repeat 0 -672px!important}.cke_button__button_icon{background:url(icons.png?t=H0CF) no-repeat 0 -696px!important}.cke_button__checkbox_icon{background:url(icons.png?t=H0CF) no-repeat 0 -720px!important}.cke_button__form_icon{background:url(icons.png?t=H0CF) no-repeat 0 -744px!important}.cke_button__hiddenfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -768px!important}.cke_button__imagebutton_icon{background:url(icons.png?t=H0CF) no-repeat 0 -792px!important}.cke_button__radio_icon{background:url(icons.png?t=H0CF) no-repeat 0 -816px!important}.cke_rtl .cke_button__select_icon,.cke_mixed_dir_content .cke_rtl .cke_button__select_icon{background:url(icons.png?t=H0CF) no-repeat 0 -840px!important}.cke_ltr .cke_button__select_icon{background:url(icons.png?t=H0CF) no-repeat 0 -864px!important}.cke_rtl .cke_button__textarea_icon,.cke_mixed_dir_content .cke_rtl .cke_button__textarea_icon{background:url(icons.png?t=H0CF) no-repeat 0 -888px!important}.cke_ltr .cke_button__textarea_icon{background:url(icons.png?t=H0CF) no-repeat 0 -912px!important}.cke_rtl .cke_button__textfield_icon,.cke_mixed_dir_content .cke_rtl .cke_button__textfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -936px!important}.cke_ltr .cke_button__textfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -960px!important}.cke_button__horizontalrule_icon{background:url(icons.png?t=H0CF) no-repeat 0 -984px!important}.cke_button__iframe_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1008px!important}.cke_button__image_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1032px!important}.cke_rtl .cke_button__indent_icon,.cke_mixed_dir_content .cke_rtl .cke_button__indent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1056px!important}.cke_ltr .cke_button__indent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1080px!important}.cke_rtl .cke_button__outdent_icon,.cke_mixed_dir_content .cke_rtl .cke_button__outdent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1104px!important}.cke_ltr .cke_button__outdent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1128px!important}.cke_button__justifyblock_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1152px!important}.cke_button__justifycenter_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1176px!important}.cke_button__justifyleft_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1200px!important}.cke_button__justifyright_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1224px!important}.cke_button__language_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1248px!important}.cke_rtl .cke_button__anchor_icon,.cke_mixed_dir_content .cke_rtl .cke_button__anchor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1272px!important}.cke_ltr .cke_button__anchor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1296px!important}.cke_button__link_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1320px!important}.cke_button__unlink_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1344px!important}.cke_rtl .cke_button__bulletedlist_icon,.cke_mixed_dir_content .cke_rtl .cke_button__bulletedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1368px!important}.cke_ltr .cke_button__bulletedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1392px!important}.cke_rtl .cke_button__numberedlist_icon,.cke_mixed_dir_content .cke_rtl .cke_button__numberedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1416px!important}.cke_ltr .cke_button__numberedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1440px!important}.cke_button__mathjax_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1464px!important}.cke_button__maximize_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1488px!important}.cke_rtl .cke_button__newpage_icon,.cke_mixed_dir_content .cke_rtl .cke_button__newpage_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1512px!important}.cke_ltr .cke_button__newpage_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1536px!important}.cke_rtl .cke_button__pagebreak_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pagebreak_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1560px!important}.cke_ltr .cke_button__pagebreak_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1584px!important}.cke_rtl .cke_button__pastefromword_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pastefromword_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1608px!important}.cke_ltr .cke_button__pastefromword_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1632px!important}.cke_rtl .cke_button__pastetext_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pastetext_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1656px!important}.cke_ltr .cke_button__pastetext_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1680px!important}.cke_button__placeholder_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1704px!important}.cke_rtl .cke_button__preview_icon,.cke_mixed_dir_content .cke_rtl .cke_button__preview_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1728px!important}.cke_ltr .cke_button__preview_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1752px!important}.cke_button__print_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1776px!important}.cke_button__removeformat_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1800px!important}.cke_button__save_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1824px!important}.cke_button__scayt_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1848px!important}.cke_button__selectall_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1872px!important}.cke_rtl .cke_button__showblocks_icon,.cke_mixed_dir_content .cke_rtl .cke_button__showblocks_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1896px!important}.cke_ltr .cke_button__showblocks_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1920px!important}.cke_button__smiley_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1944px!important}.cke_rtl .cke_button__source_icon,.cke_mixed_dir_content .cke_rtl .cke_button__source_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1968px!important}.cke_ltr .cke_button__source_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1992px!important}.cke_rtl .cke_button__sourcedialog_icon,.cke_mixed_dir_content .cke_rtl .cke_button__sourcedialog_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2016px!important}.cke_ltr .cke_button__sourcedialog_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2040px!important}.cke_button__specialchar_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2064px!important}.cke_button__table_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2088px!important}.cke_rtl .cke_button__templates_icon,.cke_mixed_dir_content .cke_rtl .cke_button__templates_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2112px!important}.cke_ltr .cke_button__templates_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2136px!important}.cke_button__uicolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2160px!important}.cke_rtl .cke_button__redo_icon,.cke_mixed_dir_content .cke_rtl .cke_button__redo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2184px!important}.cke_ltr .cke_button__redo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2208px!important}.cke_rtl .cke_button__undo_icon,.cke_mixed_dir_content .cke_rtl .cke_button__undo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2232px!important}.cke_ltr .cke_button__undo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2256px!important}.cke_button__simplebox_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2280px!important}.cke_button__spellchecker_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2304px!important}.cke_hidpi .cke_button__about_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -0px!important;background-size:16px!important}.cke_hidpi .cke_button__bold_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -24px!important;background-size:16px!important}.cke_hidpi .cke_button__italic_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -48px!important;background-size:16px!important}.cke_hidpi .cke_button__strike_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -72px!important;background-size:16px!important}.cke_hidpi .cke_button__subscript_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -96px!important;background-size:16px!important}.cke_hidpi .cke_button__superscript_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -120px!important;background-size:16px!important}.cke_hidpi .cke_button__underline_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -144px!important;background-size:16px!important}.cke_hidpi .cke_button__bidiltr_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -168px!important;background-size:16px!important}.cke_hidpi .cke_button__bidirtl_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -192px!important;background-size:16px!important}.cke_hidpi .cke_button__blockquote_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -216px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__copy_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__copy_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -240px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__copy_icon,.cke_ltr.cke_hidpi .cke_button__copy_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -264px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__cut_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__cut_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -288px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__cut_icon,.cke_ltr.cke_hidpi .cke_button__cut_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -312px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__paste_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__paste_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -336px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__paste_icon,.cke_ltr.cke_hidpi .cke_button__paste_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -360px!important;background-size:16px!important}.cke_hidpi .cke_button__codesnippet_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -384px!important;background-size:16px!important}.cke_hidpi .cke_button__bgcolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -408px!important;background-size:16px!important}.cke_hidpi .cke_button__textcolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -432px!important;background-size:16px!important}.cke_hidpi .cke_button__copyformatting_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -456px!important;background-size:16px!important}.cke_hidpi .cke_button__creatediv_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -480px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__docprops_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__docprops_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -504px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__docprops_icon,.cke_ltr.cke_hidpi .cke_button__docprops_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -528px!important;background-size:16px!important}.cke_hidpi .cke_button__embed_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -552px!important;background-size:16px!important}.cke_hidpi .cke_button__embedsemantic_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -576px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__find_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__find_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -600px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__find_icon,.cke_ltr.cke_hidpi .cke_button__find_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -624px!important;background-size:16px!important}.cke_hidpi .cke_button__replace_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -648px!important;background-size:16px!important}.cke_hidpi .cke_button__flash_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -672px!important;background-size:16px!important}.cke_hidpi .cke_button__button_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -696px!important;background-size:16px!important}.cke_hidpi .cke_button__checkbox_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -720px!important;background-size:16px!important}.cke_hidpi .cke_button__form_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -744px!important;background-size:16px!important}.cke_hidpi .cke_button__hiddenfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -768px!important;background-size:16px!important}.cke_hidpi .cke_button__imagebutton_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -792px!important;background-size:16px!important}.cke_hidpi .cke_button__radio_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -816px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__select_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__select_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -840px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__select_icon,.cke_ltr.cke_hidpi .cke_button__select_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -864px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__textarea_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__textarea_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -888px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__textarea_icon,.cke_ltr.cke_hidpi .cke_button__textarea_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -912px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__textfield_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__textfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -936px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__textfield_icon,.cke_ltr.cke_hidpi .cke_button__textfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -960px!important;background-size:16px!important}.cke_hidpi .cke_button__horizontalrule_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -984px!important;background-size:16px!important}.cke_hidpi .cke_button__iframe_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1008px!important;background-size:16px!important}.cke_hidpi .cke_button__image_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1032px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__indent_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__indent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1056px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__indent_icon,.cke_ltr.cke_hidpi .cke_button__indent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1080px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__outdent_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__outdent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1104px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__outdent_icon,.cke_ltr.cke_hidpi .cke_button__outdent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1128px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyblock_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1152px!important;background-size:16px!important}.cke_hidpi .cke_button__justifycenter_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1176px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyleft_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1200px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyright_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1224px!important;background-size:16px!important}.cke_hidpi .cke_button__language_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1248px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__anchor_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__anchor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1272px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__anchor_icon,.cke_ltr.cke_hidpi .cke_button__anchor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1296px!important;background-size:16px!important}.cke_hidpi .cke_button__link_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1320px!important;background-size:16px!important}.cke_hidpi .cke_button__unlink_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1344px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__bulletedlist_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__bulletedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1368px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__bulletedlist_icon,.cke_ltr.cke_hidpi .cke_button__bulletedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1392px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__numberedlist_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__numberedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1416px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__numberedlist_icon,.cke_ltr.cke_hidpi .cke_button__numberedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1440px!important;background-size:16px!important}.cke_hidpi .cke_button__mathjax_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1464px!important;background-size:16px!important}.cke_hidpi .cke_button__maximize_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1488px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__newpage_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__newpage_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1512px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__newpage_icon,.cke_ltr.cke_hidpi .cke_button__newpage_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1536px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pagebreak_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pagebreak_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1560px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pagebreak_icon,.cke_ltr.cke_hidpi .cke_button__pagebreak_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1584px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pastefromword_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pastefromword_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1608px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pastefromword_icon,.cke_ltr.cke_hidpi .cke_button__pastefromword_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1632px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pastetext_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pastetext_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1656px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pastetext_icon,.cke_ltr.cke_hidpi .cke_button__pastetext_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1680px!important;background-size:16px!important}.cke_hidpi .cke_button__placeholder_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1704px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__preview_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__preview_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1728px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__preview_icon,.cke_ltr.cke_hidpi .cke_button__preview_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1752px!important;background-size:16px!important}.cke_hidpi .cke_button__print_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1776px!important;background-size:16px!important}.cke_hidpi .cke_button__removeformat_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1800px!important;background-size:16px!important}.cke_hidpi .cke_button__save_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1824px!important;background-size:16px!important}.cke_hidpi .cke_button__scayt_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1848px!important;background-size:16px!important}.cke_hidpi .cke_button__selectall_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1872px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__showblocks_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__showblocks_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1896px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__showblocks_icon,.cke_ltr.cke_hidpi .cke_button__showblocks_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1920px!important;background-size:16px!important}.cke_hidpi .cke_button__smiley_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1944px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__source_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__source_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1968px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__source_icon,.cke_ltr.cke_hidpi .cke_button__source_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1992px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__sourcedialog_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__sourcedialog_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2016px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__sourcedialog_icon,.cke_ltr.cke_hidpi .cke_button__sourcedialog_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2040px!important;background-size:16px!important}.cke_hidpi .cke_button__specialchar_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2064px!important;background-size:16px!important}.cke_hidpi .cke_button__table_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2088px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__templates_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__templates_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2112px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__templates_icon,.cke_ltr.cke_hidpi .cke_button__templates_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2136px!important;background-size:16px!important}.cke_hidpi .cke_button__uicolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2160px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__redo_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__redo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2184px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__redo_icon,.cke_ltr.cke_hidpi .cke_button__redo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2208px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__undo_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__undo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2232px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__undo_icon,.cke_ltr.cke_hidpi .cke_button__undo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2256px!important;background-size:16px!important}.cke_hidpi .cke_button__simplebox_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -4560px!important}.cke_hidpi .cke_button__spellchecker_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2304px!important;background-size:16px!important}a.cke_button_disabled,a.cke_button_disabled:hover,a.cke_button_disabled:focus,a.cke_button_disabled:active{filter:alpha(opacity = 30)}.cke_button_disabled .cke_button_icon{filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#00ffffff,endColorstr=#00ffffff)}.cke_button_off:hover,.cke_button_off:focus,.cke_button_off:active{filter:alpha(opacity = 100)}.cke_combo_disabled .cke_combo_inlinelabel,.cke_combo_disabled .cke_combo_open{filter:alpha(opacity = 30)}.cke_toolbox_collapser{border:1px solid #a6a6a6}.cke_toolbox_collapser .cke_arrow{margin-top:1px}.cke_hc .cke_top,.cke_hc .cke_bottom,.cke_hc .cke_combo_button,.cke_hc a.cke_combo_button:hover,.cke_hc a.cke_combo_button:focus,.cke_hc .cke_toolgroup,.cke_hc .cke_button_on,.cke_hc a.cke_button_off:hover,.cke_hc a.cke_button_off:focus,.cke_hc a.cke_button_off:active,.cke_hc .cke_toolbox_collapser,.cke_hc .cke_toolbox_collapser:hover,.cke_hc .cke_panel_grouptitle{filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}"; });
define('text!resources/editor/skins/moono-lisa/editor_gecko.css', ['module'], function(module) { module.exports = "/*\r\nCopyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.\r\nFor licensing, see LICENSE.md or http://ckeditor.com/license\r\n*/\r\n.cke_reset{margin:0;padding:0;border:0;background:transparent;text-decoration:none;width:auto;height:auto;vertical-align:baseline;box-sizing:content-box;position:static;transition:none}.cke_reset_all,.cke_reset_all *,.cke_reset_all a,.cke_reset_all textarea{margin:0;padding:0;border:0;background:transparent;text-decoration:none;width:auto;height:auto;vertical-align:baseline;box-sizing:content-box;position:static;transition:none;border-collapse:collapse;font:normal normal normal 12px Arial,Helvetica,Tahoma,Verdana,Sans-Serif;color:#000;text-align:left;white-space:nowrap;cursor:auto;float:none}.cke_reset_all .cke_rtl *{text-align:right}.cke_reset_all iframe{vertical-align:inherit}.cke_reset_all textarea{white-space:pre-wrap}.cke_reset_all textarea,.cke_reset_all input[type=\"text\"],.cke_reset_all input[type=\"password\"]{cursor:text}.cke_reset_all textarea[disabled],.cke_reset_all input[type=\"text\"][disabled],.cke_reset_all input[type=\"password\"][disabled]{cursor:default}.cke_reset_all fieldset{padding:10px;border:2px groove #e0dfe3}.cke_reset_all select{box-sizing:border-box}.cke_reset_all table{table-layout:auto}.cke_chrome{display:block;border:1px solid #d1d1d1;padding:0}.cke_inner{display:block;background:#fff;padding:0;-webkit-touch-callout:none}.cke_float{border:0}.cke_float .cke_inner{padding-bottom:0}.cke_top,.cke_contents,.cke_bottom{display:block;overflow:hidden}.cke_top{border-bottom:1px solid #d1d1d1;background:#f8f8f8;padding:6px 8px 2px;white-space:normal}.cke_float .cke_top{border:1px solid #d1d1d1}.cke_bottom{padding:6px 8px 2px;position:relative;border-top:1px solid #d1d1d1;background:#f8f8f8}.cke_browser_ios .cke_contents{overflow-y:auto;-webkit-overflow-scrolling:touch}.cke_resizer{width:0;height:0;overflow:hidden;border-width:10px 10px 0 0;border-color:transparent #bcbcbc transparent transparent;border-style:dashed solid dashed dashed;font-size:0;vertical-align:bottom;margin-top:6px;margin-bottom:2px}.cke_hc .cke_resizer{font-size:15px;width:auto;height:auto;border-width:0}.cke_resizer_ltr{cursor:se-resize;float:right;margin-right:-4px}.cke_resizer_rtl{border-width:10px 0 0 10px;border-color:transparent transparent transparent #bcbcbc;border-style:dashed dashed dashed solid;cursor:sw-resize;float:left;margin-left:-4px;right:auto}.cke_wysiwyg_div{display:block;height:100%;overflow:auto;padding:0 8px;outline-style:none;box-sizing:border-box}.cke_panel{visibility:visible;width:120px;height:100px;overflow:hidden;background-color:#fff;border:1px solid #d1d1d1}.cke_menu_panel{padding:0;margin:0}.cke_combopanel{width:150px;height:170px}.cke_panel_frame{width:100%;height:100%;font-size:12px;overflow:auto;overflow-x:hidden}.cke_panel_container{overflow-y:auto;overflow-x:hidden}.cke_panel_block:focus{outline:0}.cke_panel_list{margin:0;padding:0;list-style-type:none;white-space:nowrap}.cke_panel_listItem{margin:0;padding:0}.cke_panel_listItem a{padding:6px 7px;display:block;color:inherit!important;text-decoration:none;overflow:hidden;text-overflow:ellipsis}.cke_hc .cke_panel_listItem a{border-style:none}.cke_panel_listItem.cke_selected a,.cke_panel_listItem a:hover,.cke_panel_listItem a:focus,.cke_panel_listItem a:active{background-color:#e9e9e9}.cke_panel_listItem a:focus{outline:1px dotted #000}.cke_hc .cke_panel_listItem a:hover,.cke_hc .cke_panel_listItem a:focus,.cke_hc .cke_panel_listItem a:active{border:2px solid;padding:4px 5px}.cke_panel_listItem p,.cke_panel_listItem h1,.cke_panel_listItem h2,.cke_panel_listItem h3,.cke_panel_listItem h4,.cke_panel_listItem h5,.cke_panel_listItem h6,.cke_panel_listItem pre{margin-top:0;margin-bottom:0}.cke_panel_grouptitle{cursor:default;font-size:11px;font-weight:bold;white-space:nowrap;margin:0;padding:6px 6px 7px 6px;color:#484848;border-bottom:1px solid #d1d1d1;background:#f8f8f8}.cke_colorblock{padding:10px;font-size:11px;font-family:'Microsoft Sans Serif',Tahoma,Arial,Verdana,Sans-Serif}.cke_colorblock,.cke_colorblock a{text-decoration:none;color:#000}a.cke_colorbox{padding:2px;float:left;width:20px;height:20px}.cke_rtl a.cke_colorbox{float:right}a:hover.cke_colorbox,a:focus.cke_colorbox,a:active.cke_colorbox{outline:0;padding:0;border:2px solid #139ff7}a:hover.cke_colorbox{border-color:#bcbcbc}span.cke_colorbox{width:20px;height:20px;float:left}.cke_rtl span.cke_colorbox{float:right}a.cke_colorauto,a.cke_colormore{border:#fff 1px solid;padding:3px;display:block;cursor:pointer}a.cke_colorauto{padding:0;border:1px solid transparent;margin-bottom:6px;height:26px;line-height:26px}a.cke_colormore{margin-top:10px;height:20px;line-height:19px}a:hover.cke_colorauto,a:hover.cke_colormore,a:focus.cke_colorauto,a:focus.cke_colormore,a:active.cke_colorauto,a:active.cke_colormore{outline:0;border:#139ff7 1px solid;background-color:#f8f8f8}a:hover.cke_colorauto,a:hover.cke_colormore{border-color:#bcbcbc}.cke_colorauto span.cke_colorbox{width:18px;height:18px;border:1px solid #808080;margin-left:1px;margin-top:3px}.cke_rtl .cke_colorauto span.cke_colorbox{margin-left:0;margin-right:1px}span.cke_colorbox[style*=\"#ffffff\"],span.cke_colorbox[style*=\"#FFFFFF\"],span.cke_colorbox[style=\"background-color:#fff\"],span.cke_colorbox[style=\"background-color:#FFF\"],span.cke_colorbox[style*=\"rgb(255,255,255)\"],span.cke_colorbox[style*=\"rgb(255, 255, 255)\"]{border:1px solid #808080;width:18px;height:18px}.cke_toolbar{float:left}.cke_rtl .cke_toolbar{float:right}.cke_toolgroup{border:0;float:left;margin:1px 2px 6px 0;padding-right:3px}.cke_rtl .cke_toolgroup{float:right;margin:1px 0 6px 2px;padding-left:3px;padding-right:0}.cke_hc .cke_toolgroup{margin-right:5px;margin-bottom:5px}.cke_hc.cke_rtl .cke_toolgroup{margin-right:0;margin-left:5px}a.cke_button{display:inline-block;height:18px;padding:4px 6px;outline:0;cursor:default;float:left;border:0;position:relative}.cke_rtl a.cke_button{float:right}.cke_hc a.cke_button{border:1px solid black;padding:3px 5px;margin:0 3px 5px 0}.cke_hc.cke_rtl a.cke_button{margin:0 0 5px 3px}a.cke_button_on{background:#fff;border:1px #bcbcbc solid;padding:3px 5px}a.cke_button_off:hover,a.cke_button_off:focus,a.cke_button_off:active{background:#e5e5e5;border:1px #bcbcbc solid;padding:3px 5px}.cke_hc a.cke_button_on,.cke_hc a.cke_button_off:hover,.cke_hc a.cke_button_off:focus,.cke_hc a.cke_button_off:active{background:#e5e5e5;border:3px solid #000;padding:1px 3px}a.cke_button_disabled:hover,a.cke_button_disabled:focus,a.cke_button_disabled:active{border:0;padding:4px 6px;background-color:transparent}a.cke_button_disabled:focus{border:1px #bcbcbc solid;padding:3px 5px}.cke_hc a.cke_button_disabled:hover,.cke_hc a.cke_button_disabled:focus,.cke_hc a.cke_button_disabled:active{border:1px solid #acacac;padding:3px 5px;margin:0 3px 5px 0}.cke_hc a.cke_button_disabled:focus{border:3px solid #000;padding:1px 3px}.cke_hc.cke_rtl a.cke_button_disabled:hover,.cke_hc.cke_rtl a.cke_button_disabled:focus,.cke_hc.cke_rtl a.cke_button_disabled:active{margin:0 0 5px 3px}a.cke_button_disabled .cke_button_icon,a.cke_button_disabled .cke_button_arrow{opacity:.3}.cke_hc a.cke_button_disabled{border-color:#acacac}.cke_hc a.cke_button_disabled .cke_button_icon,.cke_hc a.cke_button_disabled .cke_button_label{opacity:.5}.cke_toolgroup a.cke_button:last-child:after,.cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{content:\"\";position:absolute;height:18px;width:0;border-right:1px solid #bcbcbc;margin-top:4px;top:0;right:-3px}.cke_rtl .cke_toolgroup a.cke_button:last-child:after,.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{border-right:0;right:auto;border-left:1px solid #bcbcbc;top:0;left:-3px}.cke_hc .cke_toolgroup a.cke_button:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_disabled:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{border-color:#000;top:0;right:-7px}.cke_hc.cke_rtl .cke_toolgroup a.cke_button:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{top:0;right:auto;left:-7px}.cke_toolgroup a.cke_button:hover:last-child:after,.cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-1px;right:-4px}.cke_rtl .cke_toolgroup a.cke_button:hover:last-child:after,.cke_rtl .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-1px;right:auto;left:-4px}.cke_hc .cke_toolgroup a.cke_button:hover:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-2px;right:-9px}.cke_hc.cke_rtl .cke_toolgroup a.cke_button:hover:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-2px;right:auto;left:-9px}.cke_toolbar.cke_toolbar_last .cke_toolgroup a.cke_button:last-child:after{content:none;border:0;width:0;height:0}.cke_button_icon{cursor:inherit;background-repeat:no-repeat;margin-top:1px;width:16px;height:16px;float:left;display:inline-block}.cke_rtl .cke_button_icon{float:right}.cke_hc .cke_button_icon{display:none}.cke_button_label{display:none;padding-left:3px;margin-top:1px;line-height:17px;vertical-align:middle;float:left;cursor:default;color:#484848}.cke_rtl .cke_button_label{padding-right:3px;padding-left:0;float:right}.cke_hc .cke_button_label{padding:0;display:inline-block;font-size:12px}.cke_button_arrow{display:inline-block;margin:8px 0 0 1px;width:0;height:0;cursor:default;vertical-align:top;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #484848}.cke_rtl .cke_button_arrow{margin-right:5px;margin-left:0}.cke_hc .cke_button_arrow{font-size:10px;margin:3px 0 0 3px;width:auto;border:0}.cke_toolbar_separator{float:left;background-color:#bcbcbc;margin:4px 2px 0 2px;height:18px;width:1px}.cke_rtl .cke_toolbar_separator{float:right}.cke_hc .cke_toolbar_separator{background-color:#000;margin-left:2px;margin-right:5px;margin-bottom:9px}.cke_hc.cke_rtl .cke_toolbar_separator{margin-left:5px;margin-right:2px}.cke_toolbar_break{display:block;clear:left}.cke_rtl .cke_toolbar_break{clear:right}a.cke_toolbox_collapser{width:12px;height:11px;float:right;margin:11px 0 0;font-size:0;cursor:default;text-align:center;border:1px solid #bcbcbc}.cke_rtl .cke_toolbox_collapser{float:left}.cke_toolbox_collapser:hover{background:#e5e5e5}.cke_toolbox_collapser.cke_toolbox_collapser_min{margin:0 2px 4px}.cke_toolbox_collapser .cke_arrow{display:inline-block;height:0;width:0;font-size:0;margin-top:1px;border:3px solid transparent;border-bottom-color:#484848}.cke_toolbox_collapser.cke_toolbox_collapser_min .cke_arrow{margin-top:4px;border-bottom-color:transparent;border-top-color:#484848}.cke_hc .cke_toolbox_collapser .cke_arrow{font-size:8px;width:auto;border:0;margin-top:0}.cke_menuitem span{cursor:default}.cke_menubutton{display:block}.cke_hc .cke_menubutton{padding:2px}.cke_menubutton:hover,.cke_menubutton:focus,.cke_menubutton:active{background-color:#e9e9e9;display:block;outline:1px dotted}.cke_menubutton:hover{outline:0}.cke_hc .cke_menubutton:hover,.cke_hc .cke_menubutton:focus,.cke_hc .cke_menubutton:active{border:2px solid;padding:0}.cke_menubutton_disabled:hover,.cke_menubutton_disabled:focus,.cke_menubutton_disabled:active{background-color:transparent;outline:0}.cke_menubutton_inner{display:table-row}.cke_menubutton_icon,.cke_menubutton_label,.cke_menuarrow{display:table-cell}.cke_menubutton_icon{background-color:#f8f8f8;padding:6px 4px}.cke_hc .cke_menubutton_icon{height:16px;width:0;padding:4px 0}.cke_menubutton:hover .cke_menubutton_icon,.cke_menubutton:focus .cke_menubutton_icon,.cke_menubutton:active .cke_menubutton_icon{background-color:#e9e9e9}.cke_menubutton_disabled:hover .cke_menubutton_icon,.cke_menubutton_disabled:focus .cke_menubutton_icon,.cke_menubutton_disabled:active .cke_menubutton_icon{background-color:#f8f8f8;outline:0}.cke_menuitem .cke_menubutton_on{background-color:#e9e9e9;border:1px solid #dedede;outline:0}.cke_menubutton_on .cke_menubutton_icon{padding-right:3px;background-color:#e9e9e9}.cke_menubutton_label{padding:0 5px;background-color:transparent;width:100%;vertical-align:middle}.cke_menubutton_shortcut{color:#979797}.cke_menubutton_disabled .cke_menubutton_label{opacity:.3;filter:alpha(opacity=30)}.cke_panel_frame .cke_menubutton_label{display:none}.cke_menuseparator{background-color:#d1d1d1;height:1px}.cke_menuarrow{background:transparent url(images/arrow.png) no-repeat 0 10px;padding:0 5px}.cke_rtl .cke_menuarrow{background-position:5px -13px;background-repeat:no-repeat}.cke_hc .cke_menuarrow{background-image:none}.cke_menuarrow span{display:none}.cke_hc .cke_menuarrow span{vertical-align:middle;display:inline}.cke_combo{display:inline-block;float:left;position:relative;margin-bottom:5px}.cke_rtl .cke_combo{float:right}.cke_hc .cke_combo{margin-top:1px;margin-bottom:10px}.cke_combo:after{content:\"\";position:absolute;height:18px;width:0;border-right:1px solid #bcbcbc;margin-top:5px;top:0;right:0}.cke_rtl .cke_combo:after{border-right:0;border-left:1px solid #bcbcbc;right:auto;left:0}.cke_hc .cke_combo:after{border-color:#000}a.cke_combo_button{cursor:default;display:inline-block;float:left;margin:0;padding:1px}.cke_rtl a.cke_combo_button{float:right}.cke_hc a.cke_combo_button{padding:4px}.cke_combo_on a.cke_combo_button,.cke_combo_off a.cke_combo_button:hover,.cke_combo_off a.cke_combo_button:focus,.cke_combo_off a.cke_combo_button:active{background:#e5e5e5;border:1px solid #bcbcbc;padding:0 0 0 1px;margin-left:-1px}.cke_combo_off a.cke_combo_button:focus{outline:0}.cke_combo_on a.cke_combo_button,.cke_combo_off a.cke_combo_button:active{background:#fff}.cke_rtl .cke_combo_on a.cke_combo_button,.cke_rtl .cke_combo_off a.cke_combo_button:hover,.cke_rtl .cke_combo_off a.cke_combo_button:focus,.cke_rtl .cke_combo_off a.cke_combo_button:active{padding:0 1px 0 0;margin-left:0;margin-right:-1px}.cke_hc .cke_combo_on a.cke_combo_button,.cke_hc .cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_combo_off a.cke_combo_button:active{border:3px solid #000;padding:1px 1px 1px 2px}.cke_hc.cke_rtl .cke_combo_on a.cke_combo_button,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:hover,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:focus,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:active{padding:1px 2px 1px 1px}.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0 0 0 3px;margin-left:-3px}.cke_rtl .cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0 3px 0 0;margin-left:0;margin-right:-3px}.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px 1px 1px 7px;margin-left:-6px}.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px 7px 1px 1px;margin-left:0;margin-right:-6px}.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0;margin:0}.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px;margin:0}.cke_toolbar .cke_combo+.cke_toolbar_end,.cke_toolbar .cke_combo+.cke_toolgroup{margin-right:0;margin-left:2px}.cke_rtl .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_rtl .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:0;margin-right:2px}.cke_hc .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_hc .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:5px}.cke_hc.cke_rtl .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_hc.cke_rtl .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:0;margin-right:5px}.cke_toolbar.cke_toolbar_last .cke_combo:nth-last-child(-n+2):after{content:none;border:0;width:0;height:0}.cke_combo_text{line-height:26px;padding-left:10px;text-overflow:ellipsis;overflow:hidden;float:left;cursor:default;color:#484848;width:60px}.cke_rtl .cke_combo_text{float:right;text-align:right;padding-left:0;padding-right:10px}.cke_hc .cke_combo_text{line-height:18px;font-size:12px}.cke_combo_open{cursor:default;display:inline-block;font-size:0;height:19px;line-height:17px;margin:1px 10px 1px;width:5px}.cke_hc .cke_combo_open{height:12px}.cke_combo_arrow{cursor:default;margin:11px 0 0;float:left;height:0;width:0;font-size:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #484848}.cke_hc .cke_combo_arrow{font-size:10px;width:auto;border:0;margin-top:3px}.cke_combo_label{display:none;float:left;line-height:26px;vertical-align:top;margin-right:5px}.cke_rtl .cke_combo_label{float:right;margin-left:5px;margin-right:0}.cke_combo_disabled .cke_combo_inlinelabel,.cke_combo_disabled .cke_combo_open{opacity:.3}.cke_path{float:left;margin:-2px 0 2px}a.cke_path_item,span.cke_path_empty{display:inline-block;float:left;padding:3px 4px;margin-right:2px;cursor:default;text-decoration:none;outline:0;border:0;color:#484848;font-weight:bold;font-size:11px}.cke_rtl .cke_path,.cke_rtl .cke_path_item,.cke_rtl .cke_path_empty{float:right}a.cke_path_item:hover,a.cke_path_item:focus,a.cke_path_item:active{background-color:#e5e5e5}.cke_hc a.cke_path_item:hover,.cke_hc a.cke_path_item:focus,.cke_hc a.cke_path_item:active{border:2px solid;padding:1px 2px}.cke_button__source_label,.cke_button__sourcedialog_label{display:inline}.cke_combopanel__fontsize{width:135px}textarea.cke_source{font-family:'Courier New',Monospace;font-size:small;background-color:#fff;white-space:pre-wrap;border:0;padding:0;margin:0;display:block}.cke_wysiwyg_frame,.cke_wysiwyg_div{background-color:#fff}.cke_notifications_area{pointer-events:none}.cke_notification{pointer-events:auto;position:relative;margin:10px;width:300px;color:white;text-align:center;opacity:.95;filter:alpha(opacity = 95);-webkit-animation:fadeIn .7s;animation:fadeIn .7s}.cke_notification_message a{color:#12306f}@-webkit-keyframes fadeIn{from{opacity:.4}to{opacity:.95}}@keyframes fadeIn{from{opacity:.4}to{opacity:.95}}.cke_notification_success{background:#72b572;border:1px solid #63a563}.cke_notification_warning{background:#c83939;border:1px solid #902b2b}.cke_notification_info{background:#2e9ad0;border:1px solid #0f74a8}.cke_notification_info span.cke_notification_progress{background-color:#0f74a8;display:block;padding:0;margin:0;height:100%;overflow:hidden;position:absolute;z-index:1}.cke_notification_message{position:relative;margin:4px 23px 3px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;z-index:4;text-overflow:ellipsis;overflow:hidden}.cke_notification_close{background-image:url(images/close.png);background-repeat:no-repeat;background-position:50%;position:absolute;cursor:pointer;text-align:center;height:20px;width:20px;top:1px;right:1px;padding:0;margin:0;z-index:5;opacity:.6;filter:alpha(opacity = 60)}.cke_notification_close:hover{opacity:1;filter:alpha(opacity = 100)}.cke_notification_close span{display:none}.cke_notification_warning a.cke_notification_close{opacity:.8;filter:alpha(opacity = 80)}.cke_notification_warning a.cke_notification_close:hover{opacity:1;filter:alpha(opacity = 100)}.cke_chrome{visibility:inherit}.cke_voice_label{display:none}legend.cke_voice_label{display:none}.cke_button__about_icon{background:url(icons.png?t=H0CF) no-repeat 0 -0px!important}.cke_button__bold_icon{background:url(icons.png?t=H0CF) no-repeat 0 -24px!important}.cke_button__italic_icon{background:url(icons.png?t=H0CF) no-repeat 0 -48px!important}.cke_button__strike_icon{background:url(icons.png?t=H0CF) no-repeat 0 -72px!important}.cke_button__subscript_icon{background:url(icons.png?t=H0CF) no-repeat 0 -96px!important}.cke_button__superscript_icon{background:url(icons.png?t=H0CF) no-repeat 0 -120px!important}.cke_button__underline_icon{background:url(icons.png?t=H0CF) no-repeat 0 -144px!important}.cke_button__bidiltr_icon{background:url(icons.png?t=H0CF) no-repeat 0 -168px!important}.cke_button__bidirtl_icon{background:url(icons.png?t=H0CF) no-repeat 0 -192px!important}.cke_button__blockquote_icon{background:url(icons.png?t=H0CF) no-repeat 0 -216px!important}.cke_rtl .cke_button__copy_icon,.cke_mixed_dir_content .cke_rtl .cke_button__copy_icon{background:url(icons.png?t=H0CF) no-repeat 0 -240px!important}.cke_ltr .cke_button__copy_icon{background:url(icons.png?t=H0CF) no-repeat 0 -264px!important}.cke_rtl .cke_button__cut_icon,.cke_mixed_dir_content .cke_rtl .cke_button__cut_icon{background:url(icons.png?t=H0CF) no-repeat 0 -288px!important}.cke_ltr .cke_button__cut_icon{background:url(icons.png?t=H0CF) no-repeat 0 -312px!important}.cke_rtl .cke_button__paste_icon,.cke_mixed_dir_content .cke_rtl .cke_button__paste_icon{background:url(icons.png?t=H0CF) no-repeat 0 -336px!important}.cke_ltr .cke_button__paste_icon{background:url(icons.png?t=H0CF) no-repeat 0 -360px!important}.cke_button__codesnippet_icon{background:url(icons.png?t=H0CF) no-repeat 0 -384px!important}.cke_button__bgcolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -408px!important}.cke_button__textcolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -432px!important}.cke_button__copyformatting_icon{background:url(icons.png?t=H0CF) no-repeat 0 -456px!important}.cke_button__creatediv_icon{background:url(icons.png?t=H0CF) no-repeat 0 -480px!important}.cke_rtl .cke_button__docprops_icon,.cke_mixed_dir_content .cke_rtl .cke_button__docprops_icon{background:url(icons.png?t=H0CF) no-repeat 0 -504px!important}.cke_ltr .cke_button__docprops_icon{background:url(icons.png?t=H0CF) no-repeat 0 -528px!important}.cke_button__embed_icon{background:url(icons.png?t=H0CF) no-repeat 0 -552px!important}.cke_button__embedsemantic_icon{background:url(icons.png?t=H0CF) no-repeat 0 -576px!important}.cke_rtl .cke_button__find_icon,.cke_mixed_dir_content .cke_rtl .cke_button__find_icon{background:url(icons.png?t=H0CF) no-repeat 0 -600px!important}.cke_ltr .cke_button__find_icon{background:url(icons.png?t=H0CF) no-repeat 0 -624px!important}.cke_button__replace_icon{background:url(icons.png?t=H0CF) no-repeat 0 -648px!important}.cke_button__flash_icon{background:url(icons.png?t=H0CF) no-repeat 0 -672px!important}.cke_button__button_icon{background:url(icons.png?t=H0CF) no-repeat 0 -696px!important}.cke_button__checkbox_icon{background:url(icons.png?t=H0CF) no-repeat 0 -720px!important}.cke_button__form_icon{background:url(icons.png?t=H0CF) no-repeat 0 -744px!important}.cke_button__hiddenfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -768px!important}.cke_button__imagebutton_icon{background:url(icons.png?t=H0CF) no-repeat 0 -792px!important}.cke_button__radio_icon{background:url(icons.png?t=H0CF) no-repeat 0 -816px!important}.cke_rtl .cke_button__select_icon,.cke_mixed_dir_content .cke_rtl .cke_button__select_icon{background:url(icons.png?t=H0CF) no-repeat 0 -840px!important}.cke_ltr .cke_button__select_icon{background:url(icons.png?t=H0CF) no-repeat 0 -864px!important}.cke_rtl .cke_button__textarea_icon,.cke_mixed_dir_content .cke_rtl .cke_button__textarea_icon{background:url(icons.png?t=H0CF) no-repeat 0 -888px!important}.cke_ltr .cke_button__textarea_icon{background:url(icons.png?t=H0CF) no-repeat 0 -912px!important}.cke_rtl .cke_button__textfield_icon,.cke_mixed_dir_content .cke_rtl .cke_button__textfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -936px!important}.cke_ltr .cke_button__textfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -960px!important}.cke_button__horizontalrule_icon{background:url(icons.png?t=H0CF) no-repeat 0 -984px!important}.cke_button__iframe_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1008px!important}.cke_button__image_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1032px!important}.cke_rtl .cke_button__indent_icon,.cke_mixed_dir_content .cke_rtl .cke_button__indent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1056px!important}.cke_ltr .cke_button__indent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1080px!important}.cke_rtl .cke_button__outdent_icon,.cke_mixed_dir_content .cke_rtl .cke_button__outdent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1104px!important}.cke_ltr .cke_button__outdent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1128px!important}.cke_button__justifyblock_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1152px!important}.cke_button__justifycenter_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1176px!important}.cke_button__justifyleft_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1200px!important}.cke_button__justifyright_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1224px!important}.cke_button__language_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1248px!important}.cke_rtl .cke_button__anchor_icon,.cke_mixed_dir_content .cke_rtl .cke_button__anchor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1272px!important}.cke_ltr .cke_button__anchor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1296px!important}.cke_button__link_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1320px!important}.cke_button__unlink_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1344px!important}.cke_rtl .cke_button__bulletedlist_icon,.cke_mixed_dir_content .cke_rtl .cke_button__bulletedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1368px!important}.cke_ltr .cke_button__bulletedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1392px!important}.cke_rtl .cke_button__numberedlist_icon,.cke_mixed_dir_content .cke_rtl .cke_button__numberedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1416px!important}.cke_ltr .cke_button__numberedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1440px!important}.cke_button__mathjax_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1464px!important}.cke_button__maximize_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1488px!important}.cke_rtl .cke_button__newpage_icon,.cke_mixed_dir_content .cke_rtl .cke_button__newpage_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1512px!important}.cke_ltr .cke_button__newpage_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1536px!important}.cke_rtl .cke_button__pagebreak_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pagebreak_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1560px!important}.cke_ltr .cke_button__pagebreak_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1584px!important}.cke_rtl .cke_button__pastefromword_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pastefromword_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1608px!important}.cke_ltr .cke_button__pastefromword_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1632px!important}.cke_rtl .cke_button__pastetext_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pastetext_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1656px!important}.cke_ltr .cke_button__pastetext_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1680px!important}.cke_button__placeholder_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1704px!important}.cke_rtl .cke_button__preview_icon,.cke_mixed_dir_content .cke_rtl .cke_button__preview_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1728px!important}.cke_ltr .cke_button__preview_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1752px!important}.cke_button__print_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1776px!important}.cke_button__removeformat_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1800px!important}.cke_button__save_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1824px!important}.cke_button__scayt_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1848px!important}.cke_button__selectall_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1872px!important}.cke_rtl .cke_button__showblocks_icon,.cke_mixed_dir_content .cke_rtl .cke_button__showblocks_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1896px!important}.cke_ltr .cke_button__showblocks_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1920px!important}.cke_button__smiley_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1944px!important}.cke_rtl .cke_button__source_icon,.cke_mixed_dir_content .cke_rtl .cke_button__source_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1968px!important}.cke_ltr .cke_button__source_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1992px!important}.cke_rtl .cke_button__sourcedialog_icon,.cke_mixed_dir_content .cke_rtl .cke_button__sourcedialog_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2016px!important}.cke_ltr .cke_button__sourcedialog_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2040px!important}.cke_button__specialchar_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2064px!important}.cke_button__table_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2088px!important}.cke_rtl .cke_button__templates_icon,.cke_mixed_dir_content .cke_rtl .cke_button__templates_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2112px!important}.cke_ltr .cke_button__templates_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2136px!important}.cke_button__uicolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2160px!important}.cke_rtl .cke_button__redo_icon,.cke_mixed_dir_content .cke_rtl .cke_button__redo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2184px!important}.cke_ltr .cke_button__redo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2208px!important}.cke_rtl .cke_button__undo_icon,.cke_mixed_dir_content .cke_rtl .cke_button__undo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2232px!important}.cke_ltr .cke_button__undo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2256px!important}.cke_button__simplebox_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2280px!important}.cke_button__spellchecker_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2304px!important}.cke_hidpi .cke_button__about_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -0px!important;background-size:16px!important}.cke_hidpi .cke_button__bold_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -24px!important;background-size:16px!important}.cke_hidpi .cke_button__italic_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -48px!important;background-size:16px!important}.cke_hidpi .cke_button__strike_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -72px!important;background-size:16px!important}.cke_hidpi .cke_button__subscript_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -96px!important;background-size:16px!important}.cke_hidpi .cke_button__superscript_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -120px!important;background-size:16px!important}.cke_hidpi .cke_button__underline_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -144px!important;background-size:16px!important}.cke_hidpi .cke_button__bidiltr_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -168px!important;background-size:16px!important}.cke_hidpi .cke_button__bidirtl_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -192px!important;background-size:16px!important}.cke_hidpi .cke_button__blockquote_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -216px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__copy_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__copy_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -240px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__copy_icon,.cke_ltr.cke_hidpi .cke_button__copy_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -264px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__cut_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__cut_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -288px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__cut_icon,.cke_ltr.cke_hidpi .cke_button__cut_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -312px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__paste_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__paste_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -336px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__paste_icon,.cke_ltr.cke_hidpi .cke_button__paste_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -360px!important;background-size:16px!important}.cke_hidpi .cke_button__codesnippet_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -384px!important;background-size:16px!important}.cke_hidpi .cke_button__bgcolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -408px!important;background-size:16px!important}.cke_hidpi .cke_button__textcolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -432px!important;background-size:16px!important}.cke_hidpi .cke_button__copyformatting_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -456px!important;background-size:16px!important}.cke_hidpi .cke_button__creatediv_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -480px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__docprops_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__docprops_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -504px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__docprops_icon,.cke_ltr.cke_hidpi .cke_button__docprops_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -528px!important;background-size:16px!important}.cke_hidpi .cke_button__embed_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -552px!important;background-size:16px!important}.cke_hidpi .cke_button__embedsemantic_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -576px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__find_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__find_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -600px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__find_icon,.cke_ltr.cke_hidpi .cke_button__find_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -624px!important;background-size:16px!important}.cke_hidpi .cke_button__replace_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -648px!important;background-size:16px!important}.cke_hidpi .cke_button__flash_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -672px!important;background-size:16px!important}.cke_hidpi .cke_button__button_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -696px!important;background-size:16px!important}.cke_hidpi .cke_button__checkbox_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -720px!important;background-size:16px!important}.cke_hidpi .cke_button__form_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -744px!important;background-size:16px!important}.cke_hidpi .cke_button__hiddenfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -768px!important;background-size:16px!important}.cke_hidpi .cke_button__imagebutton_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -792px!important;background-size:16px!important}.cke_hidpi .cke_button__radio_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -816px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__select_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__select_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -840px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__select_icon,.cke_ltr.cke_hidpi .cke_button__select_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -864px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__textarea_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__textarea_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -888px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__textarea_icon,.cke_ltr.cke_hidpi .cke_button__textarea_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -912px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__textfield_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__textfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -936px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__textfield_icon,.cke_ltr.cke_hidpi .cke_button__textfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -960px!important;background-size:16px!important}.cke_hidpi .cke_button__horizontalrule_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -984px!important;background-size:16px!important}.cke_hidpi .cke_button__iframe_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1008px!important;background-size:16px!important}.cke_hidpi .cke_button__image_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1032px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__indent_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__indent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1056px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__indent_icon,.cke_ltr.cke_hidpi .cke_button__indent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1080px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__outdent_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__outdent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1104px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__outdent_icon,.cke_ltr.cke_hidpi .cke_button__outdent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1128px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyblock_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1152px!important;background-size:16px!important}.cke_hidpi .cke_button__justifycenter_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1176px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyleft_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1200px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyright_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1224px!important;background-size:16px!important}.cke_hidpi .cke_button__language_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1248px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__anchor_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__anchor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1272px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__anchor_icon,.cke_ltr.cke_hidpi .cke_button__anchor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1296px!important;background-size:16px!important}.cke_hidpi .cke_button__link_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1320px!important;background-size:16px!important}.cke_hidpi .cke_button__unlink_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1344px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__bulletedlist_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__bulletedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1368px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__bulletedlist_icon,.cke_ltr.cke_hidpi .cke_button__bulletedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1392px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__numberedlist_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__numberedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1416px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__numberedlist_icon,.cke_ltr.cke_hidpi .cke_button__numberedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1440px!important;background-size:16px!important}.cke_hidpi .cke_button__mathjax_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1464px!important;background-size:16px!important}.cke_hidpi .cke_button__maximize_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1488px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__newpage_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__newpage_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1512px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__newpage_icon,.cke_ltr.cke_hidpi .cke_button__newpage_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1536px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pagebreak_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pagebreak_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1560px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pagebreak_icon,.cke_ltr.cke_hidpi .cke_button__pagebreak_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1584px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pastefromword_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pastefromword_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1608px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pastefromword_icon,.cke_ltr.cke_hidpi .cke_button__pastefromword_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1632px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pastetext_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pastetext_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1656px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pastetext_icon,.cke_ltr.cke_hidpi .cke_button__pastetext_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1680px!important;background-size:16px!important}.cke_hidpi .cke_button__placeholder_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1704px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__preview_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__preview_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1728px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__preview_icon,.cke_ltr.cke_hidpi .cke_button__preview_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1752px!important;background-size:16px!important}.cke_hidpi .cke_button__print_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1776px!important;background-size:16px!important}.cke_hidpi .cke_button__removeformat_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1800px!important;background-size:16px!important}.cke_hidpi .cke_button__save_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1824px!important;background-size:16px!important}.cke_hidpi .cke_button__scayt_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1848px!important;background-size:16px!important}.cke_hidpi .cke_button__selectall_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1872px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__showblocks_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__showblocks_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1896px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__showblocks_icon,.cke_ltr.cke_hidpi .cke_button__showblocks_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1920px!important;background-size:16px!important}.cke_hidpi .cke_button__smiley_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1944px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__source_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__source_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1968px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__source_icon,.cke_ltr.cke_hidpi .cke_button__source_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1992px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__sourcedialog_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__sourcedialog_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2016px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__sourcedialog_icon,.cke_ltr.cke_hidpi .cke_button__sourcedialog_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2040px!important;background-size:16px!important}.cke_hidpi .cke_button__specialchar_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2064px!important;background-size:16px!important}.cke_hidpi .cke_button__table_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2088px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__templates_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__templates_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2112px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__templates_icon,.cke_ltr.cke_hidpi .cke_button__templates_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2136px!important;background-size:16px!important}.cke_hidpi .cke_button__uicolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2160px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__redo_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__redo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2184px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__redo_icon,.cke_ltr.cke_hidpi .cke_button__redo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2208px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__undo_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__undo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2232px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__undo_icon,.cke_ltr.cke_hidpi .cke_button__undo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2256px!important;background-size:16px!important}.cke_hidpi .cke_button__simplebox_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -4560px!important}.cke_hidpi .cke_button__spellchecker_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2304px!important;background-size:16px!important}.cke_bottom{padding-bottom:3px}.cke_combo_text{margin-bottom:-1px;margin-top:1px}"; });
define('text!resources/editor/skins/moono-lisa/editor.css', ['module'], function(module) { module.exports = "/*\r\nCopyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.\r\nFor licensing, see LICENSE.md or http://ckeditor.com/license\r\n*/\r\n.cke_reset{margin:0;padding:0;border:0;background:transparent;text-decoration:none;width:auto;height:auto;vertical-align:baseline;box-sizing:content-box;position:static;transition:none}.cke_reset_all,.cke_reset_all *,.cke_reset_all a,.cke_reset_all textarea{margin:0;padding:0;border:0;background:transparent;text-decoration:none;width:auto;height:auto;vertical-align:baseline;box-sizing:content-box;position:static;transition:none;border-collapse:collapse;font:normal normal normal 12px Arial,Helvetica,Tahoma,Verdana,Sans-Serif;color:#000;text-align:left;white-space:nowrap;cursor:auto;float:none}.cke_reset_all .cke_rtl *{text-align:right}.cke_reset_all iframe{vertical-align:inherit}.cke_reset_all textarea{white-space:pre-wrap}.cke_reset_all textarea,.cke_reset_all input[type=\"text\"],.cke_reset_all input[type=\"password\"]{cursor:text}.cke_reset_all textarea[disabled],.cke_reset_all input[type=\"text\"][disabled],.cke_reset_all input[type=\"password\"][disabled]{cursor:default}.cke_reset_all fieldset{padding:10px;border:2px groove #e0dfe3}.cke_reset_all select{box-sizing:border-box}.cke_reset_all table{table-layout:auto}.cke_chrome{display:block;border:1px solid #d1d1d1;padding:0}.cke_inner{display:block;background:#fff;padding:0;-webkit-touch-callout:none}.cke_float{border:0}.cke_float .cke_inner{padding-bottom:0}.cke_top,.cke_contents,.cke_bottom{display:block;overflow:hidden}.cke_top{border-bottom:1px solid #d1d1d1;background:#f8f8f8;padding:6px 8px 2px;white-space:normal}.cke_float .cke_top{border:1px solid #d1d1d1}.cke_bottom{padding:6px 8px 2px;position:relative;border-top:1px solid #d1d1d1;background:#f8f8f8}.cke_browser_ios .cke_contents{overflow-y:auto;-webkit-overflow-scrolling:touch}.cke_resizer{width:0;height:0;overflow:hidden;border-width:10px 10px 0 0;border-color:transparent #bcbcbc transparent transparent;border-style:dashed solid dashed dashed;font-size:0;vertical-align:bottom;margin-top:6px;margin-bottom:2px}.cke_hc .cke_resizer{font-size:15px;width:auto;height:auto;border-width:0}.cke_resizer_ltr{cursor:se-resize;float:right;margin-right:-4px}.cke_resizer_rtl{border-width:10px 0 0 10px;border-color:transparent transparent transparent #bcbcbc;border-style:dashed dashed dashed solid;cursor:sw-resize;float:left;margin-left:-4px;right:auto}.cke_wysiwyg_div{display:block;height:100%;overflow:auto;padding:0 8px;outline-style:none;box-sizing:border-box}.cke_panel{visibility:visible;width:120px;height:100px;overflow:hidden;background-color:#fff;border:1px solid #d1d1d1}.cke_menu_panel{padding:0;margin:0}.cke_combopanel{width:150px;height:170px}.cke_panel_frame{width:100%;height:100%;font-size:12px;overflow:auto;overflow-x:hidden}.cke_panel_container{overflow-y:auto;overflow-x:hidden}.cke_panel_block:focus{outline:0}.cke_panel_list{margin:0;padding:0;list-style-type:none;white-space:nowrap}.cke_panel_listItem{margin:0;padding:0}.cke_panel_listItem a{padding:6px 7px;display:block;color:inherit!important;text-decoration:none;overflow:hidden;text-overflow:ellipsis}.cke_hc .cke_panel_listItem a{border-style:none}.cke_panel_listItem.cke_selected a,.cke_panel_listItem a:hover,.cke_panel_listItem a:focus,.cke_panel_listItem a:active{background-color:#e9e9e9}.cke_panel_listItem a:focus{outline:1px dotted #000}.cke_hc .cke_panel_listItem a:hover,.cke_hc .cke_panel_listItem a:focus,.cke_hc .cke_panel_listItem a:active{border:2px solid;padding:4px 5px}.cke_panel_listItem p,.cke_panel_listItem h1,.cke_panel_listItem h2,.cke_panel_listItem h3,.cke_panel_listItem h4,.cke_panel_listItem h5,.cke_panel_listItem h6,.cke_panel_listItem pre{margin-top:0;margin-bottom:0}.cke_panel_grouptitle{cursor:default;font-size:11px;font-weight:bold;white-space:nowrap;margin:0;padding:6px 6px 7px 6px;color:#484848;border-bottom:1px solid #d1d1d1;background:#f8f8f8}.cke_colorblock{padding:10px;font-size:11px;font-family:'Microsoft Sans Serif',Tahoma,Arial,Verdana,Sans-Serif}.cke_colorblock,.cke_colorblock a{text-decoration:none;color:#000}a.cke_colorbox{padding:2px;float:left;width:20px;height:20px}.cke_rtl a.cke_colorbox{float:right}a:hover.cke_colorbox,a:focus.cke_colorbox,a:active.cke_colorbox{outline:0;padding:0;border:2px solid #139ff7}a:hover.cke_colorbox{border-color:#bcbcbc}span.cke_colorbox{width:20px;height:20px;float:left}.cke_rtl span.cke_colorbox{float:right}a.cke_colorauto,a.cke_colormore{border:#fff 1px solid;padding:3px;display:block;cursor:pointer}a.cke_colorauto{padding:0;border:1px solid transparent;margin-bottom:6px;height:26px;line-height:26px}a.cke_colormore{margin-top:10px;height:20px;line-height:19px}a:hover.cke_colorauto,a:hover.cke_colormore,a:focus.cke_colorauto,a:focus.cke_colormore,a:active.cke_colorauto,a:active.cke_colormore{outline:0;border:#139ff7 1px solid;background-color:#f8f8f8}a:hover.cke_colorauto,a:hover.cke_colormore{border-color:#bcbcbc}.cke_colorauto span.cke_colorbox{width:18px;height:18px;border:1px solid #808080;margin-left:1px;margin-top:3px}.cke_rtl .cke_colorauto span.cke_colorbox{margin-left:0;margin-right:1px}span.cke_colorbox[style*=\"#ffffff\"],span.cke_colorbox[style*=\"#FFFFFF\"],span.cke_colorbox[style=\"background-color:#fff\"],span.cke_colorbox[style=\"background-color:#FFF\"],span.cke_colorbox[style*=\"rgb(255,255,255)\"],span.cke_colorbox[style*=\"rgb(255, 255, 255)\"]{border:1px solid #808080;width:18px;height:18px}.cke_toolbar{float:left}.cke_rtl .cke_toolbar{float:right}.cke_toolgroup{border:0;float:left;margin:1px 2px 6px 0;padding-right:3px}.cke_rtl .cke_toolgroup{float:right;margin:1px 0 6px 2px;padding-left:3px;padding-right:0}.cke_hc .cke_toolgroup{margin-right:5px;margin-bottom:5px}.cke_hc.cke_rtl .cke_toolgroup{margin-right:0;margin-left:5px}a.cke_button{display:inline-block;height:18px;padding:4px 6px;outline:0;cursor:default;float:left;border:0;position:relative}.cke_rtl a.cke_button{float:right}.cke_hc a.cke_button{border:1px solid black;padding:3px 5px;margin:0 3px 5px 0}.cke_hc.cke_rtl a.cke_button{margin:0 0 5px 3px}a.cke_button_on{background:#fff;border:1px #bcbcbc solid;padding:3px 5px}a.cke_button_off:hover,a.cke_button_off:focus,a.cke_button_off:active{background:#e5e5e5;border:1px #bcbcbc solid;padding:3px 5px}.cke_hc a.cke_button_on,.cke_hc a.cke_button_off:hover,.cke_hc a.cke_button_off:focus,.cke_hc a.cke_button_off:active{background:#e5e5e5;border:3px solid #000;padding:1px 3px}a.cke_button_disabled:hover,a.cke_button_disabled:focus,a.cke_button_disabled:active{border:0;padding:4px 6px;background-color:transparent}a.cke_button_disabled:focus{border:1px #bcbcbc solid;padding:3px 5px}.cke_hc a.cke_button_disabled:hover,.cke_hc a.cke_button_disabled:focus,.cke_hc a.cke_button_disabled:active{border:1px solid #acacac;padding:3px 5px;margin:0 3px 5px 0}.cke_hc a.cke_button_disabled:focus{border:3px solid #000;padding:1px 3px}.cke_hc.cke_rtl a.cke_button_disabled:hover,.cke_hc.cke_rtl a.cke_button_disabled:focus,.cke_hc.cke_rtl a.cke_button_disabled:active{margin:0 0 5px 3px}a.cke_button_disabled .cke_button_icon,a.cke_button_disabled .cke_button_arrow{opacity:.3}.cke_hc a.cke_button_disabled{border-color:#acacac}.cke_hc a.cke_button_disabled .cke_button_icon,.cke_hc a.cke_button_disabled .cke_button_label{opacity:.5}.cke_toolgroup a.cke_button:last-child:after,.cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{content:\"\";position:absolute;height:18px;width:0;border-right:1px solid #bcbcbc;margin-top:4px;top:0;right:-3px}.cke_rtl .cke_toolgroup a.cke_button:last-child:after,.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{border-right:0;right:auto;border-left:1px solid #bcbcbc;top:0;left:-3px}.cke_hc .cke_toolgroup a.cke_button:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_disabled:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{border-color:#000;top:0;right:-7px}.cke_hc.cke_rtl .cke_toolgroup a.cke_button:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after{top:0;right:auto;left:-7px}.cke_toolgroup a.cke_button:hover:last-child:after,.cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-1px;right:-4px}.cke_rtl .cke_toolgroup a.cke_button:hover:last-child:after,.cke_rtl .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-1px;right:auto;left:-4px}.cke_hc .cke_toolgroup a.cke_button:hover:last-child:after,.cke_hc .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-2px;right:-9px}.cke_hc.cke_rtl .cke_toolgroup a.cke_button:hover:last-child:after,.cke_hc.cke_rtl .cke_toolgroup a.cke_button.cke_button_on:last-child:after{top:-2px;right:auto;left:-9px}.cke_toolbar.cke_toolbar_last .cke_toolgroup a.cke_button:last-child:after{content:none;border:0;width:0;height:0}.cke_button_icon{cursor:inherit;background-repeat:no-repeat;margin-top:1px;width:16px;height:16px;float:left;display:inline-block}.cke_rtl .cke_button_icon{float:right}.cke_hc .cke_button_icon{display:none}.cke_button_label{display:none;padding-left:3px;margin-top:1px;line-height:17px;vertical-align:middle;float:left;cursor:default;color:#484848}.cke_rtl .cke_button_label{padding-right:3px;padding-left:0;float:right}.cke_hc .cke_button_label{padding:0;display:inline-block;font-size:12px}.cke_button_arrow{display:inline-block;margin:8px 0 0 1px;width:0;height:0;cursor:default;vertical-align:top;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #484848}.cke_rtl .cke_button_arrow{margin-right:5px;margin-left:0}.cke_hc .cke_button_arrow{font-size:10px;margin:3px 0 0 3px;width:auto;border:0}.cke_toolbar_separator{float:left;background-color:#bcbcbc;margin:4px 2px 0 2px;height:18px;width:1px}.cke_rtl .cke_toolbar_separator{float:right}.cke_hc .cke_toolbar_separator{background-color:#000;margin-left:2px;margin-right:5px;margin-bottom:9px}.cke_hc.cke_rtl .cke_toolbar_separator{margin-left:5px;margin-right:2px}.cke_toolbar_break{display:block;clear:left}.cke_rtl .cke_toolbar_break{clear:right}a.cke_toolbox_collapser{width:12px;height:11px;float:right;margin:11px 0 0;font-size:0;cursor:default;text-align:center;border:1px solid #bcbcbc}.cke_rtl .cke_toolbox_collapser{float:left}.cke_toolbox_collapser:hover{background:#e5e5e5}.cke_toolbox_collapser.cke_toolbox_collapser_min{margin:0 2px 4px}.cke_toolbox_collapser .cke_arrow{display:inline-block;height:0;width:0;font-size:0;margin-top:1px;border:3px solid transparent;border-bottom-color:#484848}.cke_toolbox_collapser.cke_toolbox_collapser_min .cke_arrow{margin-top:4px;border-bottom-color:transparent;border-top-color:#484848}.cke_hc .cke_toolbox_collapser .cke_arrow{font-size:8px;width:auto;border:0;margin-top:0}.cke_menuitem span{cursor:default}.cke_menubutton{display:block}.cke_hc .cke_menubutton{padding:2px}.cke_menubutton:hover,.cke_menubutton:focus,.cke_menubutton:active{background-color:#e9e9e9;display:block;outline:1px dotted}.cke_menubutton:hover{outline:0}.cke_hc .cke_menubutton:hover,.cke_hc .cke_menubutton:focus,.cke_hc .cke_menubutton:active{border:2px solid;padding:0}.cke_menubutton_disabled:hover,.cke_menubutton_disabled:focus,.cke_menubutton_disabled:active{background-color:transparent;outline:0}.cke_menubutton_inner{display:table-row}.cke_menubutton_icon,.cke_menubutton_label,.cke_menuarrow{display:table-cell}.cke_menubutton_icon{background-color:#f8f8f8;padding:6px 4px}.cke_hc .cke_menubutton_icon{height:16px;width:0;padding:4px 0}.cke_menubutton:hover .cke_menubutton_icon,.cke_menubutton:focus .cke_menubutton_icon,.cke_menubutton:active .cke_menubutton_icon{background-color:#e9e9e9}.cke_menubutton_disabled:hover .cke_menubutton_icon,.cke_menubutton_disabled:focus .cke_menubutton_icon,.cke_menubutton_disabled:active .cke_menubutton_icon{background-color:#f8f8f8;outline:0}.cke_menuitem .cke_menubutton_on{background-color:#e9e9e9;border:1px solid #dedede;outline:0}.cke_menubutton_on .cke_menubutton_icon{padding-right:3px;background-color:#e9e9e9}.cke_menubutton_label{padding:0 5px;background-color:transparent;width:100%;vertical-align:middle}.cke_menubutton_shortcut{color:#979797}.cke_menubutton_disabled .cke_menubutton_label{opacity:.3;filter:alpha(opacity=30)}.cke_panel_frame .cke_menubutton_label{display:none}.cke_menuseparator{background-color:#d1d1d1;height:1px}.cke_menuarrow{background:transparent url(images/arrow.png) no-repeat 0 10px;padding:0 5px}.cke_rtl .cke_menuarrow{background-position:5px -13px;background-repeat:no-repeat}.cke_hc .cke_menuarrow{background-image:none}.cke_menuarrow span{display:none}.cke_hc .cke_menuarrow span{vertical-align:middle;display:inline}.cke_combo{display:inline-block;float:left;position:relative;margin-bottom:5px}.cke_rtl .cke_combo{float:right}.cke_hc .cke_combo{margin-top:1px;margin-bottom:10px}.cke_combo:after{content:\"\";position:absolute;height:18px;width:0;border-right:1px solid #bcbcbc;margin-top:5px;top:0;right:0}.cke_rtl .cke_combo:after{border-right:0;border-left:1px solid #bcbcbc;right:auto;left:0}.cke_hc .cke_combo:after{border-color:#000}a.cke_combo_button{cursor:default;display:inline-block;float:left;margin:0;padding:1px}.cke_rtl a.cke_combo_button{float:right}.cke_hc a.cke_combo_button{padding:4px}.cke_combo_on a.cke_combo_button,.cke_combo_off a.cke_combo_button:hover,.cke_combo_off a.cke_combo_button:focus,.cke_combo_off a.cke_combo_button:active{background:#e5e5e5;border:1px solid #bcbcbc;padding:0 0 0 1px;margin-left:-1px}.cke_combo_off a.cke_combo_button:focus{outline:0}.cke_combo_on a.cke_combo_button,.cke_combo_off a.cke_combo_button:active{background:#fff}.cke_rtl .cke_combo_on a.cke_combo_button,.cke_rtl .cke_combo_off a.cke_combo_button:hover,.cke_rtl .cke_combo_off a.cke_combo_button:focus,.cke_rtl .cke_combo_off a.cke_combo_button:active{padding:0 1px 0 0;margin-left:0;margin-right:-1px}.cke_hc .cke_combo_on a.cke_combo_button,.cke_hc .cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_combo_off a.cke_combo_button:active{border:3px solid #000;padding:1px 1px 1px 2px}.cke_hc.cke_rtl .cke_combo_on a.cke_combo_button,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:hover,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:focus,.cke_hc.cke_rtl .cke_combo_off a.cke_combo_button:active{padding:1px 2px 1px 1px}.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0 0 0 3px;margin-left:-3px}.cke_rtl .cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_rtl .cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0 3px 0 0;margin-left:0;margin-right:-3px}.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px 1px 1px 7px;margin-left:-6px}.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc.cke_rtl .cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px 7px 1px 1px;margin-left:0;margin-right:-6px}.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:0;margin:0}.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbox .cke_toolbar:first-child>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_on a.cke_combo_button,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:hover,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:focus,.cke_hc .cke_toolbar_break+.cke_toolbar>.cke_toolbar_start+.cke_combo_off a.cke_combo_button:active{padding:1px;margin:0}.cke_toolbar .cke_combo+.cke_toolbar_end,.cke_toolbar .cke_combo+.cke_toolgroup{margin-right:0;margin-left:2px}.cke_rtl .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_rtl .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:0;margin-right:2px}.cke_hc .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_hc .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:5px}.cke_hc.cke_rtl .cke_toolbar .cke_combo+.cke_toolbar_end,.cke_hc.cke_rtl .cke_toolbar .cke_combo+.cke_toolgroup{margin-left:0;margin-right:5px}.cke_toolbar.cke_toolbar_last .cke_combo:nth-last-child(-n+2):after{content:none;border:0;width:0;height:0}.cke_combo_text{line-height:26px;padding-left:10px;text-overflow:ellipsis;overflow:hidden;float:left;cursor:default;color:#484848;width:60px}.cke_rtl .cke_combo_text{float:right;text-align:right;padding-left:0;padding-right:10px}.cke_hc .cke_combo_text{line-height:18px;font-size:12px}.cke_combo_open{cursor:default;display:inline-block;font-size:0;height:19px;line-height:17px;margin:1px 10px 1px;width:5px}.cke_hc .cke_combo_open{height:12px}.cke_combo_arrow{cursor:default;margin:11px 0 0;float:left;height:0;width:0;font-size:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:3px solid #484848}.cke_hc .cke_combo_arrow{font-size:10px;width:auto;border:0;margin-top:3px}.cke_combo_label{display:none;float:left;line-height:26px;vertical-align:top;margin-right:5px}.cke_rtl .cke_combo_label{float:right;margin-left:5px;margin-right:0}.cke_combo_disabled .cke_combo_inlinelabel,.cke_combo_disabled .cke_combo_open{opacity:.3}.cke_path{float:left;margin:-2px 0 2px}a.cke_path_item,span.cke_path_empty{display:inline-block;float:left;padding:3px 4px;margin-right:2px;cursor:default;text-decoration:none;outline:0;border:0;color:#484848;font-weight:bold;font-size:11px}.cke_rtl .cke_path,.cke_rtl .cke_path_item,.cke_rtl .cke_path_empty{float:right}a.cke_path_item:hover,a.cke_path_item:focus,a.cke_path_item:active{background-color:#e5e5e5}.cke_hc a.cke_path_item:hover,.cke_hc a.cke_path_item:focus,.cke_hc a.cke_path_item:active{border:2px solid;padding:1px 2px}.cke_button__source_label,.cke_button__sourcedialog_label{display:inline}.cke_combopanel__fontsize{width:135px}textarea.cke_source{font-family:'Courier New',Monospace;font-size:small;background-color:#fff;white-space:pre-wrap;border:0;padding:0;margin:0;display:block}.cke_wysiwyg_frame,.cke_wysiwyg_div{background-color:#fff}.cke_notifications_area{pointer-events:none}.cke_notification{pointer-events:auto;position:relative;margin:10px;width:300px;color:white;text-align:center;opacity:.95;filter:alpha(opacity = 95);-webkit-animation:fadeIn .7s;animation:fadeIn .7s}.cke_notification_message a{color:#12306f}@-webkit-keyframes fadeIn{from{opacity:.4}to{opacity:.95}}@keyframes fadeIn{from{opacity:.4}to{opacity:.95}}.cke_notification_success{background:#72b572;border:1px solid #63a563}.cke_notification_warning{background:#c83939;border:1px solid #902b2b}.cke_notification_info{background:#2e9ad0;border:1px solid #0f74a8}.cke_notification_info span.cke_notification_progress{background-color:#0f74a8;display:block;padding:0;margin:0;height:100%;overflow:hidden;position:absolute;z-index:1}.cke_notification_message{position:relative;margin:4px 23px 3px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;z-index:4;text-overflow:ellipsis;overflow:hidden}.cke_notification_close{background-image:url(images/close.png);background-repeat:no-repeat;background-position:50%;position:absolute;cursor:pointer;text-align:center;height:20px;width:20px;top:1px;right:1px;padding:0;margin:0;z-index:5;opacity:.6;filter:alpha(opacity = 60)}.cke_notification_close:hover{opacity:1;filter:alpha(opacity = 100)}.cke_notification_close span{display:none}.cke_notification_warning a.cke_notification_close{opacity:.8;filter:alpha(opacity = 80)}.cke_notification_warning a.cke_notification_close:hover{opacity:1;filter:alpha(opacity = 100)}.cke_chrome{visibility:inherit}.cke_voice_label{display:none}legend.cke_voice_label{display:none}.cke_button__about_icon{background:url(icons.png?t=H0CF) no-repeat 0 -0px!important}.cke_button__bold_icon{background:url(icons.png?t=H0CF) no-repeat 0 -24px!important}.cke_button__italic_icon{background:url(icons.png?t=H0CF) no-repeat 0 -48px!important}.cke_button__strike_icon{background:url(icons.png?t=H0CF) no-repeat 0 -72px!important}.cke_button__subscript_icon{background:url(icons.png?t=H0CF) no-repeat 0 -96px!important}.cke_button__superscript_icon{background:url(icons.png?t=H0CF) no-repeat 0 -120px!important}.cke_button__underline_icon{background:url(icons.png?t=H0CF) no-repeat 0 -144px!important}.cke_button__bidiltr_icon{background:url(icons.png?t=H0CF) no-repeat 0 -168px!important}.cke_button__bidirtl_icon{background:url(icons.png?t=H0CF) no-repeat 0 -192px!important}.cke_button__blockquote_icon{background:url(icons.png?t=H0CF) no-repeat 0 -216px!important}.cke_rtl .cke_button__copy_icon,.cke_mixed_dir_content .cke_rtl .cke_button__copy_icon{background:url(icons.png?t=H0CF) no-repeat 0 -240px!important}.cke_ltr .cke_button__copy_icon{background:url(icons.png?t=H0CF) no-repeat 0 -264px!important}.cke_rtl .cke_button__cut_icon,.cke_mixed_dir_content .cke_rtl .cke_button__cut_icon{background:url(icons.png?t=H0CF) no-repeat 0 -288px!important}.cke_ltr .cke_button__cut_icon{background:url(icons.png?t=H0CF) no-repeat 0 -312px!important}.cke_rtl .cke_button__paste_icon,.cke_mixed_dir_content .cke_rtl .cke_button__paste_icon{background:url(icons.png?t=H0CF) no-repeat 0 -336px!important}.cke_ltr .cke_button__paste_icon{background:url(icons.png?t=H0CF) no-repeat 0 -360px!important}.cke_button__codesnippet_icon{background:url(icons.png?t=H0CF) no-repeat 0 -384px!important}.cke_button__bgcolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -408px!important}.cke_button__textcolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -432px!important}.cke_button__copyformatting_icon{background:url(icons.png?t=H0CF) no-repeat 0 -456px!important}.cke_button__creatediv_icon{background:url(icons.png?t=H0CF) no-repeat 0 -480px!important}.cke_rtl .cke_button__docprops_icon,.cke_mixed_dir_content .cke_rtl .cke_button__docprops_icon{background:url(icons.png?t=H0CF) no-repeat 0 -504px!important}.cke_ltr .cke_button__docprops_icon{background:url(icons.png?t=H0CF) no-repeat 0 -528px!important}.cke_button__embed_icon{background:url(icons.png?t=H0CF) no-repeat 0 -552px!important}.cke_button__embedsemantic_icon{background:url(icons.png?t=H0CF) no-repeat 0 -576px!important}.cke_rtl .cke_button__find_icon,.cke_mixed_dir_content .cke_rtl .cke_button__find_icon{background:url(icons.png?t=H0CF) no-repeat 0 -600px!important}.cke_ltr .cke_button__find_icon{background:url(icons.png?t=H0CF) no-repeat 0 -624px!important}.cke_button__replace_icon{background:url(icons.png?t=H0CF) no-repeat 0 -648px!important}.cke_button__flash_icon{background:url(icons.png?t=H0CF) no-repeat 0 -672px!important}.cke_button__button_icon{background:url(icons.png?t=H0CF) no-repeat 0 -696px!important}.cke_button__checkbox_icon{background:url(icons.png?t=H0CF) no-repeat 0 -720px!important}.cke_button__form_icon{background:url(icons.png?t=H0CF) no-repeat 0 -744px!important}.cke_button__hiddenfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -768px!important}.cke_button__imagebutton_icon{background:url(icons.png?t=H0CF) no-repeat 0 -792px!important}.cke_button__radio_icon{background:url(icons.png?t=H0CF) no-repeat 0 -816px!important}.cke_rtl .cke_button__select_icon,.cke_mixed_dir_content .cke_rtl .cke_button__select_icon{background:url(icons.png?t=H0CF) no-repeat 0 -840px!important}.cke_ltr .cke_button__select_icon{background:url(icons.png?t=H0CF) no-repeat 0 -864px!important}.cke_rtl .cke_button__textarea_icon,.cke_mixed_dir_content .cke_rtl .cke_button__textarea_icon{background:url(icons.png?t=H0CF) no-repeat 0 -888px!important}.cke_ltr .cke_button__textarea_icon{background:url(icons.png?t=H0CF) no-repeat 0 -912px!important}.cke_rtl .cke_button__textfield_icon,.cke_mixed_dir_content .cke_rtl .cke_button__textfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -936px!important}.cke_ltr .cke_button__textfield_icon{background:url(icons.png?t=H0CF) no-repeat 0 -960px!important}.cke_button__horizontalrule_icon{background:url(icons.png?t=H0CF) no-repeat 0 -984px!important}.cke_button__iframe_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1008px!important}.cke_button__image_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1032px!important}.cke_rtl .cke_button__indent_icon,.cke_mixed_dir_content .cke_rtl .cke_button__indent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1056px!important}.cke_ltr .cke_button__indent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1080px!important}.cke_rtl .cke_button__outdent_icon,.cke_mixed_dir_content .cke_rtl .cke_button__outdent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1104px!important}.cke_ltr .cke_button__outdent_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1128px!important}.cke_button__justifyblock_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1152px!important}.cke_button__justifycenter_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1176px!important}.cke_button__justifyleft_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1200px!important}.cke_button__justifyright_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1224px!important}.cke_button__language_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1248px!important}.cke_rtl .cke_button__anchor_icon,.cke_mixed_dir_content .cke_rtl .cke_button__anchor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1272px!important}.cke_ltr .cke_button__anchor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1296px!important}.cke_button__link_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1320px!important}.cke_button__unlink_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1344px!important}.cke_rtl .cke_button__bulletedlist_icon,.cke_mixed_dir_content .cke_rtl .cke_button__bulletedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1368px!important}.cke_ltr .cke_button__bulletedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1392px!important}.cke_rtl .cke_button__numberedlist_icon,.cke_mixed_dir_content .cke_rtl .cke_button__numberedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1416px!important}.cke_ltr .cke_button__numberedlist_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1440px!important}.cke_button__mathjax_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1464px!important}.cke_button__maximize_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1488px!important}.cke_rtl .cke_button__newpage_icon,.cke_mixed_dir_content .cke_rtl .cke_button__newpage_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1512px!important}.cke_ltr .cke_button__newpage_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1536px!important}.cke_rtl .cke_button__pagebreak_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pagebreak_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1560px!important}.cke_ltr .cke_button__pagebreak_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1584px!important}.cke_rtl .cke_button__pastefromword_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pastefromword_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1608px!important}.cke_ltr .cke_button__pastefromword_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1632px!important}.cke_rtl .cke_button__pastetext_icon,.cke_mixed_dir_content .cke_rtl .cke_button__pastetext_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1656px!important}.cke_ltr .cke_button__pastetext_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1680px!important}.cke_button__placeholder_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1704px!important}.cke_rtl .cke_button__preview_icon,.cke_mixed_dir_content .cke_rtl .cke_button__preview_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1728px!important}.cke_ltr .cke_button__preview_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1752px!important}.cke_button__print_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1776px!important}.cke_button__removeformat_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1800px!important}.cke_button__save_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1824px!important}.cke_button__scayt_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1848px!important}.cke_button__selectall_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1872px!important}.cke_rtl .cke_button__showblocks_icon,.cke_mixed_dir_content .cke_rtl .cke_button__showblocks_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1896px!important}.cke_ltr .cke_button__showblocks_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1920px!important}.cke_button__smiley_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1944px!important}.cke_rtl .cke_button__source_icon,.cke_mixed_dir_content .cke_rtl .cke_button__source_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1968px!important}.cke_ltr .cke_button__source_icon{background:url(icons.png?t=H0CF) no-repeat 0 -1992px!important}.cke_rtl .cke_button__sourcedialog_icon,.cke_mixed_dir_content .cke_rtl .cke_button__sourcedialog_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2016px!important}.cke_ltr .cke_button__sourcedialog_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2040px!important}.cke_button__specialchar_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2064px!important}.cke_button__table_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2088px!important}.cke_rtl .cke_button__templates_icon,.cke_mixed_dir_content .cke_rtl .cke_button__templates_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2112px!important}.cke_ltr .cke_button__templates_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2136px!important}.cke_button__uicolor_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2160px!important}.cke_rtl .cke_button__redo_icon,.cke_mixed_dir_content .cke_rtl .cke_button__redo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2184px!important}.cke_ltr .cke_button__redo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2208px!important}.cke_rtl .cke_button__undo_icon,.cke_mixed_dir_content .cke_rtl .cke_button__undo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2232px!important}.cke_ltr .cke_button__undo_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2256px!important}.cke_button__simplebox_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2280px!important}.cke_button__spellchecker_icon{background:url(icons.png?t=H0CF) no-repeat 0 -2304px!important}.cke_hidpi .cke_button__about_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -0px!important;background-size:16px!important}.cke_hidpi .cke_button__bold_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -24px!important;background-size:16px!important}.cke_hidpi .cke_button__italic_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -48px!important;background-size:16px!important}.cke_hidpi .cke_button__strike_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -72px!important;background-size:16px!important}.cke_hidpi .cke_button__subscript_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -96px!important;background-size:16px!important}.cke_hidpi .cke_button__superscript_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -120px!important;background-size:16px!important}.cke_hidpi .cke_button__underline_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -144px!important;background-size:16px!important}.cke_hidpi .cke_button__bidiltr_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -168px!important;background-size:16px!important}.cke_hidpi .cke_button__bidirtl_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -192px!important;background-size:16px!important}.cke_hidpi .cke_button__blockquote_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -216px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__copy_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__copy_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -240px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__copy_icon,.cke_ltr.cke_hidpi .cke_button__copy_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -264px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__cut_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__cut_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -288px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__cut_icon,.cke_ltr.cke_hidpi .cke_button__cut_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -312px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__paste_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__paste_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -336px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__paste_icon,.cke_ltr.cke_hidpi .cke_button__paste_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -360px!important;background-size:16px!important}.cke_hidpi .cke_button__codesnippet_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -384px!important;background-size:16px!important}.cke_hidpi .cke_button__bgcolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -408px!important;background-size:16px!important}.cke_hidpi .cke_button__textcolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -432px!important;background-size:16px!important}.cke_hidpi .cke_button__copyformatting_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -456px!important;background-size:16px!important}.cke_hidpi .cke_button__creatediv_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -480px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__docprops_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__docprops_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -504px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__docprops_icon,.cke_ltr.cke_hidpi .cke_button__docprops_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -528px!important;background-size:16px!important}.cke_hidpi .cke_button__embed_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -552px!important;background-size:16px!important}.cke_hidpi .cke_button__embedsemantic_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -576px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__find_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__find_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -600px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__find_icon,.cke_ltr.cke_hidpi .cke_button__find_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -624px!important;background-size:16px!important}.cke_hidpi .cke_button__replace_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -648px!important;background-size:16px!important}.cke_hidpi .cke_button__flash_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -672px!important;background-size:16px!important}.cke_hidpi .cke_button__button_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -696px!important;background-size:16px!important}.cke_hidpi .cke_button__checkbox_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -720px!important;background-size:16px!important}.cke_hidpi .cke_button__form_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -744px!important;background-size:16px!important}.cke_hidpi .cke_button__hiddenfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -768px!important;background-size:16px!important}.cke_hidpi .cke_button__imagebutton_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -792px!important;background-size:16px!important}.cke_hidpi .cke_button__radio_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -816px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__select_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__select_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -840px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__select_icon,.cke_ltr.cke_hidpi .cke_button__select_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -864px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__textarea_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__textarea_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -888px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__textarea_icon,.cke_ltr.cke_hidpi .cke_button__textarea_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -912px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__textfield_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__textfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -936px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__textfield_icon,.cke_ltr.cke_hidpi .cke_button__textfield_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -960px!important;background-size:16px!important}.cke_hidpi .cke_button__horizontalrule_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -984px!important;background-size:16px!important}.cke_hidpi .cke_button__iframe_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1008px!important;background-size:16px!important}.cke_hidpi .cke_button__image_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1032px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__indent_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__indent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1056px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__indent_icon,.cke_ltr.cke_hidpi .cke_button__indent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1080px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__outdent_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__outdent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1104px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__outdent_icon,.cke_ltr.cke_hidpi .cke_button__outdent_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1128px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyblock_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1152px!important;background-size:16px!important}.cke_hidpi .cke_button__justifycenter_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1176px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyleft_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1200px!important;background-size:16px!important}.cke_hidpi .cke_button__justifyright_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1224px!important;background-size:16px!important}.cke_hidpi .cke_button__language_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1248px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__anchor_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__anchor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1272px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__anchor_icon,.cke_ltr.cke_hidpi .cke_button__anchor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1296px!important;background-size:16px!important}.cke_hidpi .cke_button__link_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1320px!important;background-size:16px!important}.cke_hidpi .cke_button__unlink_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1344px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__bulletedlist_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__bulletedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1368px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__bulletedlist_icon,.cke_ltr.cke_hidpi .cke_button__bulletedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1392px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__numberedlist_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__numberedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1416px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__numberedlist_icon,.cke_ltr.cke_hidpi .cke_button__numberedlist_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1440px!important;background-size:16px!important}.cke_hidpi .cke_button__mathjax_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1464px!important;background-size:16px!important}.cke_hidpi .cke_button__maximize_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1488px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__newpage_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__newpage_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1512px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__newpage_icon,.cke_ltr.cke_hidpi .cke_button__newpage_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1536px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pagebreak_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pagebreak_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1560px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pagebreak_icon,.cke_ltr.cke_hidpi .cke_button__pagebreak_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1584px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pastefromword_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pastefromword_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1608px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pastefromword_icon,.cke_ltr.cke_hidpi .cke_button__pastefromword_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1632px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__pastetext_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__pastetext_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1656px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__pastetext_icon,.cke_ltr.cke_hidpi .cke_button__pastetext_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1680px!important;background-size:16px!important}.cke_hidpi .cke_button__placeholder_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1704px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__preview_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__preview_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1728px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__preview_icon,.cke_ltr.cke_hidpi .cke_button__preview_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1752px!important;background-size:16px!important}.cke_hidpi .cke_button__print_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1776px!important;background-size:16px!important}.cke_hidpi .cke_button__removeformat_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1800px!important;background-size:16px!important}.cke_hidpi .cke_button__save_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1824px!important;background-size:16px!important}.cke_hidpi .cke_button__scayt_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1848px!important;background-size:16px!important}.cke_hidpi .cke_button__selectall_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1872px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__showblocks_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__showblocks_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1896px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__showblocks_icon,.cke_ltr.cke_hidpi .cke_button__showblocks_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1920px!important;background-size:16px!important}.cke_hidpi .cke_button__smiley_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1944px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__source_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__source_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1968px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__source_icon,.cke_ltr.cke_hidpi .cke_button__source_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -1992px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__sourcedialog_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__sourcedialog_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2016px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__sourcedialog_icon,.cke_ltr.cke_hidpi .cke_button__sourcedialog_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2040px!important;background-size:16px!important}.cke_hidpi .cke_button__specialchar_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2064px!important;background-size:16px!important}.cke_hidpi .cke_button__table_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2088px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__templates_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__templates_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2112px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__templates_icon,.cke_ltr.cke_hidpi .cke_button__templates_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2136px!important;background-size:16px!important}.cke_hidpi .cke_button__uicolor_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2160px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__redo_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__redo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2184px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__redo_icon,.cke_ltr.cke_hidpi .cke_button__redo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2208px!important;background-size:16px!important}.cke_rtl.cke_hidpi .cke_button__undo_icon,.cke_hidpi .cke_mixed_dir_content .cke_rtl .cke_button__undo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2232px!important;background-size:16px!important}.cke_hidpi .cke_ltr .cke_button__undo_icon,.cke_ltr.cke_hidpi .cke_button__undo_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2256px!important;background-size:16px!important}.cke_hidpi .cke_button__simplebox_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -4560px!important}.cke_hidpi .cke_button__spellchecker_icon{background:url(icons_hidpi.png?t=H0CF) no-repeat 0 -2304px!important;background-size:16px!important}"; });
define('text!resources/editor/skins/moono-lisa/dialog_iequirks.css', ['module'], function(module) { module.exports = "/*\r\nCopyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.\r\nFor licensing, see LICENSE.md or http://ckeditor.com/license\r\n*/\r\n.cke_dialog{visibility:visible}.cke_dialog_body{z-index:1;background:#fff}.cke_dialog strong{font-weight:bold}.cke_dialog_title{font-weight:bold;font-size:12px;cursor:move;position:relative;color:#484848;border-bottom:1px solid #d1d1d1;padding:12px 19px 12px 12px;background:#f8f8f8;letter-spacing:.3px}.cke_dialog_spinner{border-radius:50%;width:12px;height:12px;overflow:hidden;text-indent:-9999em;border:2px solid rgba(102,102,102,0.2);border-left-color:rgba(102,102,102,1);-webkit-animation:dialog_spinner 1s infinite linear;animation:dialog_spinner 1s infinite linear}.cke_browser_ie8 .cke_dialog_spinner,.cke_browser_ie9 .cke_dialog_spinner{background:url(images/spinner.gif) center top no-repeat;width:16px;height:16px;border:0}@-webkit-keyframes dialog_spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes dialog_spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cke_dialog_contents{background-color:#fff;overflow:auto;padding:15px 10px 5px 10px;margin-top:43px;border-top:1px solid #d1d1d1}.cke_dialog_contents_body{overflow:auto;padding:9px 10px 5px 10px;margin-top:22px}.cke_dialog_footer{text-align:right;position:relative;border-top:1px solid #d1d1d1;background:#f8f8f8}.cke_rtl .cke_dialog_footer{text-align:left}.cke_hc .cke_dialog_footer{outline:0;border-top:1px solid #fff}.cke_dialog .cke_resizer{margin-top:22px}.cke_dialog .cke_resizer_rtl{margin-left:5px}.cke_dialog .cke_resizer_ltr{margin-right:5px}.cke_dialog_tabs{height:33px;display:inline-block;margin:9px 0 0;position:absolute;z-index:2;left:11px}.cke_rtl .cke_dialog_tabs{left:auto;right:11px}a.cke_dialog_tab{height:25px;padding:4px 8px;display:inline-block;cursor:pointer;line-height:26px;outline:0;color:#484848;border:1px solid #d1d1d1;border-radius:3px 3px 0 0;background:#f8f8f8;min-width:90px;text-align:center;margin-left:-1px;letter-spacing:.3px}a.cke_dialog_tab:hover{background-color:#fff}a.cke_dialog_tab:focus{border:2px solid #139ff7;border-bottom-color:#d1d1d1;padding:3px 7px;position:relative;z-index:1}a.cke_dialog_tab_selected{background:#fff;border-bottom-color:#fff;cursor:default;filter:none}a.cke_dialog_tab_selected:hover,a.cke_dialog_tab_selected:focus{border-bottom-color:#fff}.cke_hc a.cke_dialog_tab:hover,.cke_hc a.cke_dialog_tab:focus,.cke_hc a.cke_dialog_tab_selected{border:3px solid;padding:2px 6px}a.cke_dialog_tab_disabled{color:#bababa;cursor:default}.cke_single_page .cke_dialog_tabs{display:none}.cke_single_page .cke_dialog_contents{padding-top:5px;margin-top:0;border-top:0}a.cke_dialog_close_button{background-image:url(images/close.png);background-repeat:no-repeat;background-position:50%;position:absolute;cursor:pointer;text-align:center;height:16px;width:16px;top:11px;z-index:5;opacity:.7;filter:alpha(opacity = 70)}.cke_rtl .cke_dialog_close_button{left:12px}.cke_ltr .cke_dialog_close_button{right:12px}.cke_hc a.cke_dialog_close_button{background-image:none}.cke_hidpi a.cke_dialog_close_button{background-image:url(images/hidpi/close.png);background-size:16px}a.cke_dialog_close_button:hover{opacity:1;filter:alpha(opacity = 100)}a.cke_dialog_close_button span{display:none}.cke_hc a.cke_dialog_close_button span{display:inline;cursor:pointer;font-weight:bold;position:relative;top:3px}div.cke_disabled .cke_dialog_ui_labeled_content div *{background-color:#ddd;cursor:default}.cke_dialog_ui_vbox table,.cke_dialog_ui_hbox table{margin:auto}.cke_dialog_ui_vbox_child{padding:5px 0}.cke_dialog_ui_hbox{width:100%;margin-top:12px}.cke_dialog_ui_hbox_first,.cke_dialog_ui_hbox_child,.cke_dialog_ui_hbox_last{vertical-align:top}.cke_ltr .cke_dialog_ui_hbox_first,.cke_ltr .cke_dialog_ui_hbox_child{padding-right:10px}.cke_rtl .cke_dialog_ui_hbox_first,.cke_rtl .cke_dialog_ui_hbox_child{padding-left:10px}.cke_ltr .cke_dialog_footer_buttons .cke_dialog_ui_hbox_first,.cke_ltr .cke_dialog_footer_buttons .cke_dialog_ui_hbox_child{padding-right:5px}.cke_rtl .cke_dialog_footer_buttons .cke_dialog_ui_hbox_first,.cke_rtl .cke_dialog_footer_buttons .cke_dialog_ui_hbox_child{padding-left:5px;padding-right:0}.cke_hc div.cke_dialog_ui_input_text,.cke_hc div.cke_dialog_ui_input_password,.cke_hc div.cke_dialog_ui_input_textarea,.cke_hc div.cke_dialog_ui_input_select,.cke_hc div.cke_dialog_ui_input_file{border:1px solid}textarea.cke_dialog_ui_input_textarea{overflow:auto;resize:none}input.cke_dialog_ui_input_text,input.cke_dialog_ui_input_password,textarea.cke_dialog_ui_input_textarea{background-color:#fff;border:1px solid #bcbcbc;padding:4px 6px;outline:0;width:100%;*width:95%;box-sizing:border-box;border-radius:2px;min-height:28px;margin-left:1px}input.cke_dialog_ui_input_text:hover,input.cke_dialog_ui_input_password:hover,textarea.cke_dialog_ui_input_textarea:hover{border:1px solid #aeb3b9}input.cke_dialog_ui_input_text:focus,input.cke_dialog_ui_input_password:focus,textarea.cke_dialog_ui_input_textarea:focus,select.cke_dialog_ui_input_select:focus{outline:0;border:2px solid #139ff7}input.cke_dialog_ui_input_text:focus{padding-left:5px}textarea.cke_dialog_ui_input_textarea:focus{padding:3px 5px}select.cke_dialog_ui_input_select:focus{margin:0;width:100%!important}input.cke_dialog_ui_checkbox_input,input.cke_dialog_ui_radio_input{margin-left:1px;margin-right:2px}input.cke_dialog_ui_checkbox_input:focus,input.cke_dialog_ui_checkbox_input:active,input.cke_dialog_ui_radio_input:focus,input.cke_dialog_ui_radio_input:active{border:0;outline:2px solid #139ff7}a.cke_dialog_ui_button{display:inline-block;*display:inline;*zoom:1;padding:4px 1px;margin:0;text-align:center;color:#484848;vertical-align:middle;cursor:pointer;border:1px solid #bcbcbc;border-radius:2px;background:#f8f8f8;letter-spacing:.3px;line-height:18px;box-sizing:border-box}.cke_hc a.cke_dialog_ui_button{border-width:3px}span.cke_dialog_ui_button{padding:0 10px;cursor:pointer}a.cke_dialog_ui_button:hover{background:#fff}a.cke_dialog_ui_button:focus,a.cke_dialog_ui_button:active{border:2px solid #139ff7;outline:0;padding:3px 0}.cke_hc a.cke_dialog_ui_button:hover,.cke_hc a.cke_dialog_ui_button:focus,.cke_hc a.cke_dialog_ui_button:active{border:3px solid}.cke_dialog_footer_buttons a.cke_dialog_ui_button span{color:inherit;font-size:12px;font-weight:bold;padding:0 12px}a.cke_dialog_ui_button_ok{color:#fff;background:#09863e;border:1px solid #09863e}.cke_hc a.cke_dialog_ui_button{border:3px solid #bcbcbc}a.cke_dialog_ui_button_ok:hover{background:#53aa78;border-color:#53aa78}a.cke_dialog_ui_button_ok:focus{box-shadow:inset 0 0 0 2px #FFF}a.cke_dialog_ui_button_ok:focus,a.cke_dialog_ui_button_ok:active{border-color:#139ff7}.cke_hc a.cke_dialog_ui_button_ok:hover,.cke_hc a.cke_dialog_ui_button_ok:focus,.cke_hc a.cke_dialog_ui_button_ok:active{border-color:#484848}a.cke_dialog_ui_button_ok.cke_disabled{background:#d1d1d1;border-color:#d1d1d1;cursor:default}a.cke_dialog_ui_button_ok.cke_disabled span{cursor:default}.cke_dialog_footer_buttons{display:inline-table;margin:5px;width:auto;position:relative;vertical-align:middle}div.cke_dialog_ui_input_select{display:table}select.cke_dialog_ui_input_select{height:28px;line-height:28px;background-color:#fff;border:1px solid #bcbcbc;padding:3px 3px 3px 6px;outline:0;border-radius:2px;margin:0 1px;box-sizing:border-box;width:calc(100% - 2px)!important}.cke_dialog_ui_input_file{width:100%;height:25px}.cke_hc .cke_dialog_ui_labeled_content input:focus,.cke_hc .cke_dialog_ui_labeled_content select:focus,.cke_hc .cke_dialog_ui_labeled_content textarea:focus{outline:1px dotted}.cke_dialog_ui_labeled_label{margin-left:1px}.cke_dialog .cke_dark_background{background-color:transparent}.cke_dialog .cke_light_background{background-color:#ebebeb}.cke_dialog .cke_centered{text-align:center}.cke_dialog a.cke_btn_reset{float:right;background:url(images/refresh.png) top left no-repeat;width:16px;height:16px;border:1px none;font-size:1px}.cke_hidpi .cke_dialog a.cke_btn_reset{background-size:16px;background-image:url(images/hidpi/refresh.png)}.cke_rtl .cke_dialog a.cke_btn_reset{float:left}.cke_dialog a.cke_btn_locked,.cke_dialog a.cke_btn_unlocked{float:left;width:16px;height:16px;background-repeat:no-repeat;border:none 1px;font-size:1px}.cke_dialog a.cke_btn_locked,.cke_dialog a.cke_btn_unlocked,.cke_dialog a.cke_btn_reset{margin:2px}.cke_dialog a.cke_btn_locked{background-image:url(images/lock.png)}.cke_dialog a.cke_btn_unlocked{background-image:url(images/lock-open.png)}.cke_rtl .cke_dialog a.cke_btn_locked,.cke_rtl .cke_dialog a.cke_btn_unlocked{float:right}.cke_hidpi .cke_dialog a.cke_btn_unlocked,.cke_hidpi .cke_dialog a.cke_btn_locked{background-size:16px}.cke_hidpi .cke_dialog a.cke_btn_locked{background-image:url(images/hidpi/lock.png)}.cke_hidpi .cke_dialog a.cke_btn_unlocked{background-image:url(images/hidpi/lock-open.png)}.cke_dialog a.cke_btn_locked .cke_icon{display:none}.cke_dialog a.cke_btn_over,.cke_dialog a.cke_btn_locked:hover,.cke_dialog a.cke_btn_locked:focus,.cke_dialog a.cke_btn_locked:active,.cke_dialog a.cke_btn_unlocked:hover,.cke_dialog a.cke_btn_unlocked:focus,.cke_dialog a.cke_btn_unlocked:active,.cke_dialog a.cke_btn_reset:hover,.cke_dialog a.cke_btn_reset:focus,.cke_dialog a.cke_btn_reset:active{cursor:pointer;outline:0;margin:0;border:2px solid #139ff7}.cke_dialog fieldset{border:1px solid #bcbcbc}.cke_dialog fieldset legend{padding:0 6px}.cke_dialog_ui_checkbox,.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox{display:inline-block}.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox{padding-top:5px}.cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input,.cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input+label,.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input,.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input+label{vertical-align:middle}.cke_dialog .ImagePreviewBox{border:1px ridge #bcbcbc;overflow:scroll;height:200px;width:300px;padding:2px;background-color:white}.cke_dialog .ImagePreviewBox table td{white-space:normal}.cke_dialog .ImagePreviewLoader{position:absolute;white-space:normal;overflow:hidden;height:160px;width:230px;margin:2px;padding:2px;opacity:.9;filter:alpha(opacity = 90);background-color:#e4e4e4}.cke_dialog .FlashPreviewBox{white-space:normal;border:1px solid #bcbcbc;overflow:auto;height:160px;width:390px;padding:2px;background-color:white}.cke_dialog .cke_pastetext{width:346px;height:170px}.cke_dialog .cke_pastetext textarea{width:340px;height:170px;resize:none}.cke_dialog iframe.cke_pasteframe{width:346px;height:130px;background-color:white;border:1px solid #aeb3b9;border-radius:3px}.cke_dialog .cke_hand{cursor:pointer}.cke_disabled{color:#a0a0a0}.cke_dialog_body .cke_label{display:none}.cke_dialog_body label{display:inline;cursor:default;letter-spacing:.3px}.cke_dialog_body label+.cke_dialog_ui_labeled_content{margin-top:2px}.cke_dialog_contents_body .cke_dialog_ui_text,.cke_dialog_contents_body .cke_dialog_ui_select,.cke_dialog_contents_body .cke_dialog_ui_hbox_last>a.cke_dialog_ui_button{margin-top:4px}a.cke_smile{overflow:hidden;display:block;text-align:center;padding:.3em 0}a.cke_smile img{vertical-align:middle}a.cke_specialchar{cursor:inherit;display:block;height:1.25em;padding:.2em .3em;text-align:center}a.cke_smile,a.cke_specialchar{border:2px solid transparent}a.cke_smile:hover,a.cke_smile:focus,a.cke_smile:active,a.cke_specialchar:hover,a.cke_specialchar:focus,a.cke_specialchar:active{background:#fff;outline:0}a.cke_smile:hover,a.cke_specialchar:hover{border-color:#888}a.cke_smile:focus,a.cke_smile:active,a.cke_specialchar:focus,a.cke_specialchar:active{border-color:#139ff7}.cke_dialog_contents a.colorChooser{display:block;margin-top:6px;margin-left:10px;width:80px}.cke_rtl .cke_dialog_contents a.colorChooser{margin-right:10px}.cke_iframe_shim{display:block;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity = 0);width:100%;height:100%}.cke_dialog_contents_body .cke_accessibility_legend{margin:2px 7px 2px 2px}.cke_dialog_contents_body .cke_accessibility_legend:focus,.cke_dialog_contents_body .cke_accessibility_legend:active{outline:0;border:2px solid #139ff7;margin:0 5px 0 0}.cke_dialog_contents_body input[type=file]:focus,.cke_dialog_contents_body input[type=file]:active{border:2px solid #139ff7}.cke_dialog_find_fieldset{margin-top:10px!important}.cke_dialog_image_ratiolock{margin-top:52px!important}.cke_dialog_forms_select_order label.cke_dialog_ui_labeled_label{margin-left:0}.cke_dialog_forms_select_order div.cke_dialog_ui_input_select{width:100%}.cke_dialog_forms_select_order_txtsize .cke_dialog_ui_hbox_last{padding-top:4px}.cke_dialog_image_url .cke_dialog_ui_hbox_last,.cke_dialog_flash_url .cke_dialog_ui_hbox_last{vertical-align:bottom}a.cke_dialog_ui_button.cke_dialog_image_browse{margin-top:10px}.cke_dialog_contents_body .cke_tpl_list{border:#bcbcbc 1px solid;margin:1px}.cke_dialog_contents_body .cke_tpl_list:focus,.cke_dialog_contents_body .cke_tpl_list:active{outline:0;margin:0;border:2px solid #139ff7}.cke_dialog_contents_body .cke_tpl_list a:focus,.cke_dialog_contents_body .cke_tpl_list a:active{outline:0}.cke_dialog_contents_body .cke_tpl_list a:focus .cke_tpl_item,.cke_dialog_contents_body .cke_tpl_list a:active .cke_tpl_item{border:2px solid #139ff7;padding:6px}.cke_rtl input.cke_dialog_ui_input_text,.cke_rtl input.cke_dialog_ui_input_password{padding-right:2px}.cke_rtl div.cke_dialog_ui_input_text,.cke_rtl div.cke_dialog_ui_input_password{padding-left:2px}.cke_rtl div.cke_dialog_ui_input_text{padding-right:1px}.cke_rtl .cke_dialog_ui_vbox_child,.cke_rtl .cke_dialog_ui_hbox_child,.cke_rtl .cke_dialog_ui_hbox_first,.cke_rtl .cke_dialog_ui_hbox_last{padding-right:2px!important}.cke_hc .cke_dialog_title,.cke_hc .cke_dialog_footer,.cke_hc a.cke_dialog_tab,.cke_hc a.cke_dialog_ui_button,.cke_hc a.cke_dialog_ui_button:hover,.cke_hc a.cke_dialog_ui_button_ok,.cke_hc a.cke_dialog_ui_button_ok:hover{filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.cke_hc div.cke_dialog_ui_input_text,.cke_hc div.cke_dialog_ui_input_password,.cke_hc div.cke_dialog_ui_input_textarea,.cke_hc div.cke_dialog_ui_input_select,.cke_hc div.cke_dialog_ui_input_file{border:0}.cke_dialog_footer{filter:\"\"}"; });
define('text!resources/editor/skins/moono-lisa/dialog_ie8.css', ['module'], function(module) { module.exports = "/*\r\nCopyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.\r\nFor licensing, see LICENSE.md or http://ckeditor.com/license\r\n*/\r\n.cke_dialog{visibility:visible}.cke_dialog_body{z-index:1;background:#fff}.cke_dialog strong{font-weight:bold}.cke_dialog_title{font-weight:bold;font-size:12px;cursor:move;position:relative;color:#484848;border-bottom:1px solid #d1d1d1;padding:12px 19px 12px 12px;background:#f8f8f8;letter-spacing:.3px}.cke_dialog_spinner{border-radius:50%;width:12px;height:12px;overflow:hidden;text-indent:-9999em;border:2px solid rgba(102,102,102,0.2);border-left-color:rgba(102,102,102,1);-webkit-animation:dialog_spinner 1s infinite linear;animation:dialog_spinner 1s infinite linear}.cke_browser_ie8 .cke_dialog_spinner,.cke_browser_ie9 .cke_dialog_spinner{background:url(images/spinner.gif) center top no-repeat;width:16px;height:16px;border:0}@-webkit-keyframes dialog_spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes dialog_spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cke_dialog_contents{background-color:#fff;overflow:auto;padding:15px 10px 5px 10px;margin-top:43px;border-top:1px solid #d1d1d1}.cke_dialog_contents_body{overflow:auto;padding:9px 10px 5px 10px;margin-top:22px}.cke_dialog_footer{text-align:right;position:relative;border-top:1px solid #d1d1d1;background:#f8f8f8}.cke_rtl .cke_dialog_footer{text-align:left}.cke_hc .cke_dialog_footer{outline:0;border-top:1px solid #fff}.cke_dialog .cke_resizer{margin-top:22px}.cke_dialog .cke_resizer_rtl{margin-left:5px}.cke_dialog .cke_resizer_ltr{margin-right:5px}.cke_dialog_tabs{height:33px;display:inline-block;margin:9px 0 0;position:absolute;z-index:2;left:11px}.cke_rtl .cke_dialog_tabs{left:auto;right:11px}a.cke_dialog_tab{height:25px;padding:4px 8px;display:inline-block;cursor:pointer;line-height:26px;outline:0;color:#484848;border:1px solid #d1d1d1;border-radius:3px 3px 0 0;background:#f8f8f8;min-width:90px;text-align:center;margin-left:-1px;letter-spacing:.3px}a.cke_dialog_tab:hover{background-color:#fff}a.cke_dialog_tab:focus{border:2px solid #139ff7;border-bottom-color:#d1d1d1;padding:3px 7px;position:relative;z-index:1}a.cke_dialog_tab_selected{background:#fff;border-bottom-color:#fff;cursor:default;filter:none}a.cke_dialog_tab_selected:hover,a.cke_dialog_tab_selected:focus{border-bottom-color:#fff}.cke_hc a.cke_dialog_tab:hover,.cke_hc a.cke_dialog_tab:focus,.cke_hc a.cke_dialog_tab_selected{border:3px solid;padding:2px 6px}a.cke_dialog_tab_disabled{color:#bababa;cursor:default}.cke_single_page .cke_dialog_tabs{display:none}.cke_single_page .cke_dialog_contents{padding-top:5px;margin-top:0;border-top:0}a.cke_dialog_close_button{background-image:url(images/close.png);background-repeat:no-repeat;background-position:50%;position:absolute;cursor:pointer;text-align:center;height:16px;width:16px;top:11px;z-index:5;opacity:.7;filter:alpha(opacity = 70)}.cke_rtl .cke_dialog_close_button{left:12px}.cke_ltr .cke_dialog_close_button{right:12px}.cke_hc a.cke_dialog_close_button{background-image:none}.cke_hidpi a.cke_dialog_close_button{background-image:url(images/hidpi/close.png);background-size:16px}a.cke_dialog_close_button:hover{opacity:1;filter:alpha(opacity = 100)}a.cke_dialog_close_button span{display:none}.cke_hc a.cke_dialog_close_button span{display:inline;cursor:pointer;font-weight:bold;position:relative;top:3px}div.cke_disabled .cke_dialog_ui_labeled_content div *{background-color:#ddd;cursor:default}.cke_dialog_ui_vbox table,.cke_dialog_ui_hbox table{margin:auto}.cke_dialog_ui_vbox_child{padding:5px 0}.cke_dialog_ui_hbox{width:100%;margin-top:12px}.cke_dialog_ui_hbox_first,.cke_dialog_ui_hbox_child,.cke_dialog_ui_hbox_last{vertical-align:top}.cke_ltr .cke_dialog_ui_hbox_first,.cke_ltr .cke_dialog_ui_hbox_child{padding-right:10px}.cke_rtl .cke_dialog_ui_hbox_first,.cke_rtl .cke_dialog_ui_hbox_child{padding-left:10px}.cke_ltr .cke_dialog_footer_buttons .cke_dialog_ui_hbox_first,.cke_ltr .cke_dialog_footer_buttons .cke_dialog_ui_hbox_child{padding-right:5px}.cke_rtl .cke_dialog_footer_buttons .cke_dialog_ui_hbox_first,.cke_rtl .cke_dialog_footer_buttons .cke_dialog_ui_hbox_child{padding-left:5px;padding-right:0}.cke_hc div.cke_dialog_ui_input_text,.cke_hc div.cke_dialog_ui_input_password,.cke_hc div.cke_dialog_ui_input_textarea,.cke_hc div.cke_dialog_ui_input_select,.cke_hc div.cke_dialog_ui_input_file{border:1px solid}textarea.cke_dialog_ui_input_textarea{overflow:auto;resize:none}input.cke_dialog_ui_input_text,input.cke_dialog_ui_input_password,textarea.cke_dialog_ui_input_textarea{background-color:#fff;border:1px solid #bcbcbc;padding:4px 6px;outline:0;width:100%;*width:95%;box-sizing:border-box;border-radius:2px;min-height:28px;margin-left:1px}input.cke_dialog_ui_input_text:hover,input.cke_dialog_ui_input_password:hover,textarea.cke_dialog_ui_input_textarea:hover{border:1px solid #aeb3b9}input.cke_dialog_ui_input_text:focus,input.cke_dialog_ui_input_password:focus,textarea.cke_dialog_ui_input_textarea:focus,select.cke_dialog_ui_input_select:focus{outline:0;border:2px solid #139ff7}input.cke_dialog_ui_input_text:focus{padding-left:5px}textarea.cke_dialog_ui_input_textarea:focus{padding:3px 5px}select.cke_dialog_ui_input_select:focus{margin:0;width:100%!important}input.cke_dialog_ui_checkbox_input,input.cke_dialog_ui_radio_input{margin-left:1px;margin-right:2px}input.cke_dialog_ui_checkbox_input:focus,input.cke_dialog_ui_checkbox_input:active,input.cke_dialog_ui_radio_input:focus,input.cke_dialog_ui_radio_input:active{border:0;outline:2px solid #139ff7}a.cke_dialog_ui_button{display:inline-block;*display:inline;*zoom:1;padding:4px 1px;margin:0;text-align:center;color:#484848;vertical-align:middle;cursor:pointer;border:1px solid #bcbcbc;border-radius:2px;background:#f8f8f8;letter-spacing:.3px;line-height:18px;box-sizing:border-box}.cke_hc a.cke_dialog_ui_button{border-width:3px}span.cke_dialog_ui_button{padding:0 10px;cursor:pointer}a.cke_dialog_ui_button:hover{background:#fff}a.cke_dialog_ui_button:focus,a.cke_dialog_ui_button:active{border:2px solid #139ff7;outline:0;padding:3px 0}.cke_hc a.cke_dialog_ui_button:hover,.cke_hc a.cke_dialog_ui_button:focus,.cke_hc a.cke_dialog_ui_button:active{border:3px solid}.cke_dialog_footer_buttons a.cke_dialog_ui_button span{color:inherit;font-size:12px;font-weight:bold;padding:0 12px}a.cke_dialog_ui_button_ok{color:#fff;background:#09863e;border:1px solid #09863e}.cke_hc a.cke_dialog_ui_button{border:3px solid #bcbcbc}a.cke_dialog_ui_button_ok:hover{background:#53aa78;border-color:#53aa78}a.cke_dialog_ui_button_ok:focus{box-shadow:inset 0 0 0 2px #FFF}a.cke_dialog_ui_button_ok:focus,a.cke_dialog_ui_button_ok:active{border-color:#139ff7}.cke_hc a.cke_dialog_ui_button_ok:hover,.cke_hc a.cke_dialog_ui_button_ok:focus,.cke_hc a.cke_dialog_ui_button_ok:active{border-color:#484848}a.cke_dialog_ui_button_ok.cke_disabled{background:#d1d1d1;border-color:#d1d1d1;cursor:default}a.cke_dialog_ui_button_ok.cke_disabled span{cursor:default}.cke_dialog_footer_buttons{display:inline-table;margin:5px;width:auto;position:relative;vertical-align:middle}div.cke_dialog_ui_input_select{display:table}select.cke_dialog_ui_input_select{height:28px;line-height:28px;background-color:#fff;border:1px solid #bcbcbc;padding:3px 3px 3px 6px;outline:0;border-radius:2px;margin:0 1px;box-sizing:border-box;width:calc(100% - 2px)!important}.cke_dialog_ui_input_file{width:100%;height:25px}.cke_hc .cke_dialog_ui_labeled_content input:focus,.cke_hc .cke_dialog_ui_labeled_content select:focus,.cke_hc .cke_dialog_ui_labeled_content textarea:focus{outline:1px dotted}.cke_dialog_ui_labeled_label{margin-left:1px}.cke_dialog .cke_dark_background{background-color:transparent}.cke_dialog .cke_light_background{background-color:#ebebeb}.cke_dialog .cke_centered{text-align:center}.cke_dialog a.cke_btn_reset{float:right;background:url(images/refresh.png) top left no-repeat;width:16px;height:16px;border:1px none;font-size:1px}.cke_hidpi .cke_dialog a.cke_btn_reset{background-size:16px;background-image:url(images/hidpi/refresh.png)}.cke_rtl .cke_dialog a.cke_btn_reset{float:left}.cke_dialog a.cke_btn_locked,.cke_dialog a.cke_btn_unlocked{float:left;width:16px;height:16px;background-repeat:no-repeat;border:none 1px;font-size:1px}.cke_dialog a.cke_btn_locked,.cke_dialog a.cke_btn_unlocked,.cke_dialog a.cke_btn_reset{margin:2px}.cke_dialog a.cke_btn_locked{background-image:url(images/lock.png)}.cke_dialog a.cke_btn_unlocked{background-image:url(images/lock-open.png)}.cke_rtl .cke_dialog a.cke_btn_locked,.cke_rtl .cke_dialog a.cke_btn_unlocked{float:right}.cke_hidpi .cke_dialog a.cke_btn_unlocked,.cke_hidpi .cke_dialog a.cke_btn_locked{background-size:16px}.cke_hidpi .cke_dialog a.cke_btn_locked{background-image:url(images/hidpi/lock.png)}.cke_hidpi .cke_dialog a.cke_btn_unlocked{background-image:url(images/hidpi/lock-open.png)}.cke_dialog a.cke_btn_locked .cke_icon{display:none}.cke_dialog a.cke_btn_over,.cke_dialog a.cke_btn_locked:hover,.cke_dialog a.cke_btn_locked:focus,.cke_dialog a.cke_btn_locked:active,.cke_dialog a.cke_btn_unlocked:hover,.cke_dialog a.cke_btn_unlocked:focus,.cke_dialog a.cke_btn_unlocked:active,.cke_dialog a.cke_btn_reset:hover,.cke_dialog a.cke_btn_reset:focus,.cke_dialog a.cke_btn_reset:active{cursor:pointer;outline:0;margin:0;border:2px solid #139ff7}.cke_dialog fieldset{border:1px solid #bcbcbc}.cke_dialog fieldset legend{padding:0 6px}.cke_dialog_ui_checkbox,.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox{display:inline-block}.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox{padding-top:5px}.cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input,.cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input+label,.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input,.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input+label{vertical-align:middle}.cke_dialog .ImagePreviewBox{border:1px ridge #bcbcbc;overflow:scroll;height:200px;width:300px;padding:2px;background-color:white}.cke_dialog .ImagePreviewBox table td{white-space:normal}.cke_dialog .ImagePreviewLoader{position:absolute;white-space:normal;overflow:hidden;height:160px;width:230px;margin:2px;padding:2px;opacity:.9;filter:alpha(opacity = 90);background-color:#e4e4e4}.cke_dialog .FlashPreviewBox{white-space:normal;border:1px solid #bcbcbc;overflow:auto;height:160px;width:390px;padding:2px;background-color:white}.cke_dialog .cke_pastetext{width:346px;height:170px}.cke_dialog .cke_pastetext textarea{width:340px;height:170px;resize:none}.cke_dialog iframe.cke_pasteframe{width:346px;height:130px;background-color:white;border:1px solid #aeb3b9;border-radius:3px}.cke_dialog .cke_hand{cursor:pointer}.cke_disabled{color:#a0a0a0}.cke_dialog_body .cke_label{display:none}.cke_dialog_body label{display:inline;cursor:default;letter-spacing:.3px}.cke_dialog_body label+.cke_dialog_ui_labeled_content{margin-top:2px}.cke_dialog_contents_body .cke_dialog_ui_text,.cke_dialog_contents_body .cke_dialog_ui_select,.cke_dialog_contents_body .cke_dialog_ui_hbox_last>a.cke_dialog_ui_button{margin-top:4px}a.cke_smile{overflow:hidden;display:block;text-align:center;padding:.3em 0}a.cke_smile img{vertical-align:middle}a.cke_specialchar{cursor:inherit;display:block;height:1.25em;padding:.2em .3em;text-align:center}a.cke_smile,a.cke_specialchar{border:2px solid transparent}a.cke_smile:hover,a.cke_smile:focus,a.cke_smile:active,a.cke_specialchar:hover,a.cke_specialchar:focus,a.cke_specialchar:active{background:#fff;outline:0}a.cke_smile:hover,a.cke_specialchar:hover{border-color:#888}a.cke_smile:focus,a.cke_smile:active,a.cke_specialchar:focus,a.cke_specialchar:active{border-color:#139ff7}.cke_dialog_contents a.colorChooser{display:block;margin-top:6px;margin-left:10px;width:80px}.cke_rtl .cke_dialog_contents a.colorChooser{margin-right:10px}.cke_iframe_shim{display:block;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity = 0);width:100%;height:100%}.cke_dialog_contents_body .cke_accessibility_legend{margin:2px 7px 2px 2px}.cke_dialog_contents_body .cke_accessibility_legend:focus,.cke_dialog_contents_body .cke_accessibility_legend:active{outline:0;border:2px solid #139ff7;margin:0 5px 0 0}.cke_dialog_contents_body input[type=file]:focus,.cke_dialog_contents_body input[type=file]:active{border:2px solid #139ff7}.cke_dialog_find_fieldset{margin-top:10px!important}.cke_dialog_image_ratiolock{margin-top:52px!important}.cke_dialog_forms_select_order label.cke_dialog_ui_labeled_label{margin-left:0}.cke_dialog_forms_select_order div.cke_dialog_ui_input_select{width:100%}.cke_dialog_forms_select_order_txtsize .cke_dialog_ui_hbox_last{padding-top:4px}.cke_dialog_image_url .cke_dialog_ui_hbox_last,.cke_dialog_flash_url .cke_dialog_ui_hbox_last{vertical-align:bottom}a.cke_dialog_ui_button.cke_dialog_image_browse{margin-top:10px}.cke_dialog_contents_body .cke_tpl_list{border:#bcbcbc 1px solid;margin:1px}.cke_dialog_contents_body .cke_tpl_list:focus,.cke_dialog_contents_body .cke_tpl_list:active{outline:0;margin:0;border:2px solid #139ff7}.cke_dialog_contents_body .cke_tpl_list a:focus,.cke_dialog_contents_body .cke_tpl_list a:active{outline:0}.cke_dialog_contents_body .cke_tpl_list a:focus .cke_tpl_item,.cke_dialog_contents_body .cke_tpl_list a:active .cke_tpl_item{border:2px solid #139ff7;padding:6px}.cke_rtl input.cke_dialog_ui_input_text,.cke_rtl input.cke_dialog_ui_input_password{padding-right:2px}.cke_rtl div.cke_dialog_ui_input_text,.cke_rtl div.cke_dialog_ui_input_password{padding-left:2px}.cke_rtl div.cke_dialog_ui_input_text{padding-right:1px}.cke_rtl .cke_dialog_ui_vbox_child,.cke_rtl .cke_dialog_ui_hbox_child,.cke_rtl .cke_dialog_ui_hbox_first,.cke_rtl .cke_dialog_ui_hbox_last{padding-right:2px!important}.cke_hc .cke_dialog_title,.cke_hc .cke_dialog_footer,.cke_hc a.cke_dialog_tab,.cke_hc a.cke_dialog_ui_button,.cke_hc a.cke_dialog_ui_button:hover,.cke_hc a.cke_dialog_ui_button_ok,.cke_hc a.cke_dialog_ui_button_ok:hover{filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.cke_hc div.cke_dialog_ui_input_text,.cke_hc div.cke_dialog_ui_input_password,.cke_hc div.cke_dialog_ui_input_textarea,.cke_hc div.cke_dialog_ui_input_select,.cke_hc div.cke_dialog_ui_input_file{border:0}a.cke_dialog_ui_button{min-height:18px}input.cke_dialog_ui_input_text,input.cke_dialog_ui_input_password,textarea.cke_dialog_ui_input_textarea{min-height:18px}input.cke_dialog_ui_input_text:focus,input.cke_dialog_ui_input_password:focus,textarea.cke_dialog_ui_input_textarea:focus{padding-top:4px;padding-bottom:2px}select.cke_dialog_ui_input_select{width:100%!important}select.cke_dialog_ui_input_select:focus{margin-left:1px;width:100%!important;padding-top:2px;padding-bottom:2px}"; });
define('text!resources/editor/skins/moono-lisa/dialog_ie.css', ['module'], function(module) { module.exports = "/*\r\nCopyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.\r\nFor licensing, see LICENSE.md or http://ckeditor.com/license\r\n*/\r\n.cke_dialog{visibility:visible}.cke_dialog_body{z-index:1;background:#fff}.cke_dialog strong{font-weight:bold}.cke_dialog_title{font-weight:bold;font-size:12px;cursor:move;position:relative;color:#484848;border-bottom:1px solid #d1d1d1;padding:12px 19px 12px 12px;background:#f8f8f8;letter-spacing:.3px}.cke_dialog_spinner{border-radius:50%;width:12px;height:12px;overflow:hidden;text-indent:-9999em;border:2px solid rgba(102,102,102,0.2);border-left-color:rgba(102,102,102,1);-webkit-animation:dialog_spinner 1s infinite linear;animation:dialog_spinner 1s infinite linear}.cke_browser_ie8 .cke_dialog_spinner,.cke_browser_ie9 .cke_dialog_spinner{background:url(images/spinner.gif) center top no-repeat;width:16px;height:16px;border:0}@-webkit-keyframes dialog_spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes dialog_spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cke_dialog_contents{background-color:#fff;overflow:auto;padding:15px 10px 5px 10px;margin-top:43px;border-top:1px solid #d1d1d1}.cke_dialog_contents_body{overflow:auto;padding:9px 10px 5px 10px;margin-top:22px}.cke_dialog_footer{text-align:right;position:relative;border-top:1px solid #d1d1d1;background:#f8f8f8}.cke_rtl .cke_dialog_footer{text-align:left}.cke_hc .cke_dialog_footer{outline:0;border-top:1px solid #fff}.cke_dialog .cke_resizer{margin-top:22px}.cke_dialog .cke_resizer_rtl{margin-left:5px}.cke_dialog .cke_resizer_ltr{margin-right:5px}.cke_dialog_tabs{height:33px;display:inline-block;margin:9px 0 0;position:absolute;z-index:2;left:11px}.cke_rtl .cke_dialog_tabs{left:auto;right:11px}a.cke_dialog_tab{height:25px;padding:4px 8px;display:inline-block;cursor:pointer;line-height:26px;outline:0;color:#484848;border:1px solid #d1d1d1;border-radius:3px 3px 0 0;background:#f8f8f8;min-width:90px;text-align:center;margin-left:-1px;letter-spacing:.3px}a.cke_dialog_tab:hover{background-color:#fff}a.cke_dialog_tab:focus{border:2px solid #139ff7;border-bottom-color:#d1d1d1;padding:3px 7px;position:relative;z-index:1}a.cke_dialog_tab_selected{background:#fff;border-bottom-color:#fff;cursor:default;filter:none}a.cke_dialog_tab_selected:hover,a.cke_dialog_tab_selected:focus{border-bottom-color:#fff}.cke_hc a.cke_dialog_tab:hover,.cke_hc a.cke_dialog_tab:focus,.cke_hc a.cke_dialog_tab_selected{border:3px solid;padding:2px 6px}a.cke_dialog_tab_disabled{color:#bababa;cursor:default}.cke_single_page .cke_dialog_tabs{display:none}.cke_single_page .cke_dialog_contents{padding-top:5px;margin-top:0;border-top:0}a.cke_dialog_close_button{background-image:url(images/close.png);background-repeat:no-repeat;background-position:50%;position:absolute;cursor:pointer;text-align:center;height:16px;width:16px;top:11px;z-index:5;opacity:.7;filter:alpha(opacity = 70)}.cke_rtl .cke_dialog_close_button{left:12px}.cke_ltr .cke_dialog_close_button{right:12px}.cke_hc a.cke_dialog_close_button{background-image:none}.cke_hidpi a.cke_dialog_close_button{background-image:url(images/hidpi/close.png);background-size:16px}a.cke_dialog_close_button:hover{opacity:1;filter:alpha(opacity = 100)}a.cke_dialog_close_button span{display:none}.cke_hc a.cke_dialog_close_button span{display:inline;cursor:pointer;font-weight:bold;position:relative;top:3px}div.cke_disabled .cke_dialog_ui_labeled_content div *{background-color:#ddd;cursor:default}.cke_dialog_ui_vbox table,.cke_dialog_ui_hbox table{margin:auto}.cke_dialog_ui_vbox_child{padding:5px 0}.cke_dialog_ui_hbox{width:100%;margin-top:12px}.cke_dialog_ui_hbox_first,.cke_dialog_ui_hbox_child,.cke_dialog_ui_hbox_last{vertical-align:top}.cke_ltr .cke_dialog_ui_hbox_first,.cke_ltr .cke_dialog_ui_hbox_child{padding-right:10px}.cke_rtl .cke_dialog_ui_hbox_first,.cke_rtl .cke_dialog_ui_hbox_child{padding-left:10px}.cke_ltr .cke_dialog_footer_buttons .cke_dialog_ui_hbox_first,.cke_ltr .cke_dialog_footer_buttons .cke_dialog_ui_hbox_child{padding-right:5px}.cke_rtl .cke_dialog_footer_buttons .cke_dialog_ui_hbox_first,.cke_rtl .cke_dialog_footer_buttons .cke_dialog_ui_hbox_child{padding-left:5px;padding-right:0}.cke_hc div.cke_dialog_ui_input_text,.cke_hc div.cke_dialog_ui_input_password,.cke_hc div.cke_dialog_ui_input_textarea,.cke_hc div.cke_dialog_ui_input_select,.cke_hc div.cke_dialog_ui_input_file{border:1px solid}textarea.cke_dialog_ui_input_textarea{overflow:auto;resize:none}input.cke_dialog_ui_input_text,input.cke_dialog_ui_input_password,textarea.cke_dialog_ui_input_textarea{background-color:#fff;border:1px solid #bcbcbc;padding:4px 6px;outline:0;width:100%;*width:95%;box-sizing:border-box;border-radius:2px;min-height:28px;margin-left:1px}input.cke_dialog_ui_input_text:hover,input.cke_dialog_ui_input_password:hover,textarea.cke_dialog_ui_input_textarea:hover{border:1px solid #aeb3b9}input.cke_dialog_ui_input_text:focus,input.cke_dialog_ui_input_password:focus,textarea.cke_dialog_ui_input_textarea:focus,select.cke_dialog_ui_input_select:focus{outline:0;border:2px solid #139ff7}input.cke_dialog_ui_input_text:focus{padding-left:5px}textarea.cke_dialog_ui_input_textarea:focus{padding:3px 5px}select.cke_dialog_ui_input_select:focus{margin:0;width:100%!important}input.cke_dialog_ui_checkbox_input,input.cke_dialog_ui_radio_input{margin-left:1px;margin-right:2px}input.cke_dialog_ui_checkbox_input:focus,input.cke_dialog_ui_checkbox_input:active,input.cke_dialog_ui_radio_input:focus,input.cke_dialog_ui_radio_input:active{border:0;outline:2px solid #139ff7}a.cke_dialog_ui_button{display:inline-block;*display:inline;*zoom:1;padding:4px 1px;margin:0;text-align:center;color:#484848;vertical-align:middle;cursor:pointer;border:1px solid #bcbcbc;border-radius:2px;background:#f8f8f8;letter-spacing:.3px;line-height:18px;box-sizing:border-box}.cke_hc a.cke_dialog_ui_button{border-width:3px}span.cke_dialog_ui_button{padding:0 10px;cursor:pointer}a.cke_dialog_ui_button:hover{background:#fff}a.cke_dialog_ui_button:focus,a.cke_dialog_ui_button:active{border:2px solid #139ff7;outline:0;padding:3px 0}.cke_hc a.cke_dialog_ui_button:hover,.cke_hc a.cke_dialog_ui_button:focus,.cke_hc a.cke_dialog_ui_button:active{border:3px solid}.cke_dialog_footer_buttons a.cke_dialog_ui_button span{color:inherit;font-size:12px;font-weight:bold;padding:0 12px}a.cke_dialog_ui_button_ok{color:#fff;background:#09863e;border:1px solid #09863e}.cke_hc a.cke_dialog_ui_button{border:3px solid #bcbcbc}a.cke_dialog_ui_button_ok:hover{background:#53aa78;border-color:#53aa78}a.cke_dialog_ui_button_ok:focus{box-shadow:inset 0 0 0 2px #FFF}a.cke_dialog_ui_button_ok:focus,a.cke_dialog_ui_button_ok:active{border-color:#139ff7}.cke_hc a.cke_dialog_ui_button_ok:hover,.cke_hc a.cke_dialog_ui_button_ok:focus,.cke_hc a.cke_dialog_ui_button_ok:active{border-color:#484848}a.cke_dialog_ui_button_ok.cke_disabled{background:#d1d1d1;border-color:#d1d1d1;cursor:default}a.cke_dialog_ui_button_ok.cke_disabled span{cursor:default}.cke_dialog_footer_buttons{display:inline-table;margin:5px;width:auto;position:relative;vertical-align:middle}div.cke_dialog_ui_input_select{display:table}select.cke_dialog_ui_input_select{height:28px;line-height:28px;background-color:#fff;border:1px solid #bcbcbc;padding:3px 3px 3px 6px;outline:0;border-radius:2px;margin:0 1px;box-sizing:border-box;width:calc(100% - 2px)!important}.cke_dialog_ui_input_file{width:100%;height:25px}.cke_hc .cke_dialog_ui_labeled_content input:focus,.cke_hc .cke_dialog_ui_labeled_content select:focus,.cke_hc .cke_dialog_ui_labeled_content textarea:focus{outline:1px dotted}.cke_dialog_ui_labeled_label{margin-left:1px}.cke_dialog .cke_dark_background{background-color:transparent}.cke_dialog .cke_light_background{background-color:#ebebeb}.cke_dialog .cke_centered{text-align:center}.cke_dialog a.cke_btn_reset{float:right;background:url(images/refresh.png) top left no-repeat;width:16px;height:16px;border:1px none;font-size:1px}.cke_hidpi .cke_dialog a.cke_btn_reset{background-size:16px;background-image:url(images/hidpi/refresh.png)}.cke_rtl .cke_dialog a.cke_btn_reset{float:left}.cke_dialog a.cke_btn_locked,.cke_dialog a.cke_btn_unlocked{float:left;width:16px;height:16px;background-repeat:no-repeat;border:none 1px;font-size:1px}.cke_dialog a.cke_btn_locked,.cke_dialog a.cke_btn_unlocked,.cke_dialog a.cke_btn_reset{margin:2px}.cke_dialog a.cke_btn_locked{background-image:url(images/lock.png)}.cke_dialog a.cke_btn_unlocked{background-image:url(images/lock-open.png)}.cke_rtl .cke_dialog a.cke_btn_locked,.cke_rtl .cke_dialog a.cke_btn_unlocked{float:right}.cke_hidpi .cke_dialog a.cke_btn_unlocked,.cke_hidpi .cke_dialog a.cke_btn_locked{background-size:16px}.cke_hidpi .cke_dialog a.cke_btn_locked{background-image:url(images/hidpi/lock.png)}.cke_hidpi .cke_dialog a.cke_btn_unlocked{background-image:url(images/hidpi/lock-open.png)}.cke_dialog a.cke_btn_locked .cke_icon{display:none}.cke_dialog a.cke_btn_over,.cke_dialog a.cke_btn_locked:hover,.cke_dialog a.cke_btn_locked:focus,.cke_dialog a.cke_btn_locked:active,.cke_dialog a.cke_btn_unlocked:hover,.cke_dialog a.cke_btn_unlocked:focus,.cke_dialog a.cke_btn_unlocked:active,.cke_dialog a.cke_btn_reset:hover,.cke_dialog a.cke_btn_reset:focus,.cke_dialog a.cke_btn_reset:active{cursor:pointer;outline:0;margin:0;border:2px solid #139ff7}.cke_dialog fieldset{border:1px solid #bcbcbc}.cke_dialog fieldset legend{padding:0 6px}.cke_dialog_ui_checkbox,.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox{display:inline-block}.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox{padding-top:5px}.cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input,.cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input+label,.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input,.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input+label{vertical-align:middle}.cke_dialog .ImagePreviewBox{border:1px ridge #bcbcbc;overflow:scroll;height:200px;width:300px;padding:2px;background-color:white}.cke_dialog .ImagePreviewBox table td{white-space:normal}.cke_dialog .ImagePreviewLoader{position:absolute;white-space:normal;overflow:hidden;height:160px;width:230px;margin:2px;padding:2px;opacity:.9;filter:alpha(opacity = 90);background-color:#e4e4e4}.cke_dialog .FlashPreviewBox{white-space:normal;border:1px solid #bcbcbc;overflow:auto;height:160px;width:390px;padding:2px;background-color:white}.cke_dialog .cke_pastetext{width:346px;height:170px}.cke_dialog .cke_pastetext textarea{width:340px;height:170px;resize:none}.cke_dialog iframe.cke_pasteframe{width:346px;height:130px;background-color:white;border:1px solid #aeb3b9;border-radius:3px}.cke_dialog .cke_hand{cursor:pointer}.cke_disabled{color:#a0a0a0}.cke_dialog_body .cke_label{display:none}.cke_dialog_body label{display:inline;cursor:default;letter-spacing:.3px}.cke_dialog_body label+.cke_dialog_ui_labeled_content{margin-top:2px}.cke_dialog_contents_body .cke_dialog_ui_text,.cke_dialog_contents_body .cke_dialog_ui_select,.cke_dialog_contents_body .cke_dialog_ui_hbox_last>a.cke_dialog_ui_button{margin-top:4px}a.cke_smile{overflow:hidden;display:block;text-align:center;padding:.3em 0}a.cke_smile img{vertical-align:middle}a.cke_specialchar{cursor:inherit;display:block;height:1.25em;padding:.2em .3em;text-align:center}a.cke_smile,a.cke_specialchar{border:2px solid transparent}a.cke_smile:hover,a.cke_smile:focus,a.cke_smile:active,a.cke_specialchar:hover,a.cke_specialchar:focus,a.cke_specialchar:active{background:#fff;outline:0}a.cke_smile:hover,a.cke_specialchar:hover{border-color:#888}a.cke_smile:focus,a.cke_smile:active,a.cke_specialchar:focus,a.cke_specialchar:active{border-color:#139ff7}.cke_dialog_contents a.colorChooser{display:block;margin-top:6px;margin-left:10px;width:80px}.cke_rtl .cke_dialog_contents a.colorChooser{margin-right:10px}.cke_iframe_shim{display:block;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity = 0);width:100%;height:100%}.cke_dialog_contents_body .cke_accessibility_legend{margin:2px 7px 2px 2px}.cke_dialog_contents_body .cke_accessibility_legend:focus,.cke_dialog_contents_body .cke_accessibility_legend:active{outline:0;border:2px solid #139ff7;margin:0 5px 0 0}.cke_dialog_contents_body input[type=file]:focus,.cke_dialog_contents_body input[type=file]:active{border:2px solid #139ff7}.cke_dialog_find_fieldset{margin-top:10px!important}.cke_dialog_image_ratiolock{margin-top:52px!important}.cke_dialog_forms_select_order label.cke_dialog_ui_labeled_label{margin-left:0}.cke_dialog_forms_select_order div.cke_dialog_ui_input_select{width:100%}.cke_dialog_forms_select_order_txtsize .cke_dialog_ui_hbox_last{padding-top:4px}.cke_dialog_image_url .cke_dialog_ui_hbox_last,.cke_dialog_flash_url .cke_dialog_ui_hbox_last{vertical-align:bottom}a.cke_dialog_ui_button.cke_dialog_image_browse{margin-top:10px}.cke_dialog_contents_body .cke_tpl_list{border:#bcbcbc 1px solid;margin:1px}.cke_dialog_contents_body .cke_tpl_list:focus,.cke_dialog_contents_body .cke_tpl_list:active{outline:0;margin:0;border:2px solid #139ff7}.cke_dialog_contents_body .cke_tpl_list a:focus,.cke_dialog_contents_body .cke_tpl_list a:active{outline:0}.cke_dialog_contents_body .cke_tpl_list a:focus .cke_tpl_item,.cke_dialog_contents_body .cke_tpl_list a:active .cke_tpl_item{border:2px solid #139ff7;padding:6px}.cke_rtl input.cke_dialog_ui_input_text,.cke_rtl input.cke_dialog_ui_input_password{padding-right:2px}.cke_rtl div.cke_dialog_ui_input_text,.cke_rtl div.cke_dialog_ui_input_password{padding-left:2px}.cke_rtl div.cke_dialog_ui_input_text{padding-right:1px}.cke_rtl .cke_dialog_ui_vbox_child,.cke_rtl .cke_dialog_ui_hbox_child,.cke_rtl .cke_dialog_ui_hbox_first,.cke_rtl .cke_dialog_ui_hbox_last{padding-right:2px!important}.cke_hc .cke_dialog_title,.cke_hc .cke_dialog_footer,.cke_hc a.cke_dialog_tab,.cke_hc a.cke_dialog_ui_button,.cke_hc a.cke_dialog_ui_button:hover,.cke_hc a.cke_dialog_ui_button_ok,.cke_hc a.cke_dialog_ui_button_ok:hover{filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.cke_hc div.cke_dialog_ui_input_text,.cke_hc div.cke_dialog_ui_input_password,.cke_hc div.cke_dialog_ui_input_textarea,.cke_hc div.cke_dialog_ui_input_select,.cke_hc div.cke_dialog_ui_input_file{border:0}"; });
define('text!resources/editor/skins/moono-lisa/dialog.css', ['module'], function(module) { module.exports = "/*\r\nCopyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.\r\nFor licensing, see LICENSE.md or http://ckeditor.com/license\r\n*/\r\n.cke_dialog{visibility:visible}.cke_dialog_body{z-index:1;background:#fff}.cke_dialog strong{font-weight:bold}.cke_dialog_title{font-weight:bold;font-size:12px;cursor:move;position:relative;color:#484848;border-bottom:1px solid #d1d1d1;padding:12px 19px 12px 12px;background:#f8f8f8;letter-spacing:.3px}.cke_dialog_spinner{border-radius:50%;width:12px;height:12px;overflow:hidden;text-indent:-9999em;border:2px solid rgba(102,102,102,0.2);border-left-color:rgba(102,102,102,1);-webkit-animation:dialog_spinner 1s infinite linear;animation:dialog_spinner 1s infinite linear}.cke_browser_ie8 .cke_dialog_spinner,.cke_browser_ie9 .cke_dialog_spinner{background:url(images/spinner.gif) center top no-repeat;width:16px;height:16px;border:0}@-webkit-keyframes dialog_spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes dialog_spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cke_dialog_contents{background-color:#fff;overflow:auto;padding:15px 10px 5px 10px;margin-top:43px;border-top:1px solid #d1d1d1}.cke_dialog_contents_body{overflow:auto;padding:9px 10px 5px 10px;margin-top:22px}.cke_dialog_footer{text-align:right;position:relative;border-top:1px solid #d1d1d1;background:#f8f8f8}.cke_rtl .cke_dialog_footer{text-align:left}.cke_hc .cke_dialog_footer{outline:0;border-top:1px solid #fff}.cke_dialog .cke_resizer{margin-top:22px}.cke_dialog .cke_resizer_rtl{margin-left:5px}.cke_dialog .cke_resizer_ltr{margin-right:5px}.cke_dialog_tabs{height:33px;display:inline-block;margin:9px 0 0;position:absolute;z-index:2;left:11px}.cke_rtl .cke_dialog_tabs{left:auto;right:11px}a.cke_dialog_tab{height:25px;padding:4px 8px;display:inline-block;cursor:pointer;line-height:26px;outline:0;color:#484848;border:1px solid #d1d1d1;border-radius:3px 3px 0 0;background:#f8f8f8;min-width:90px;text-align:center;margin-left:-1px;letter-spacing:.3px}a.cke_dialog_tab:hover{background-color:#fff}a.cke_dialog_tab:focus{border:2px solid #139ff7;border-bottom-color:#d1d1d1;padding:3px 7px;position:relative;z-index:1}a.cke_dialog_tab_selected{background:#fff;border-bottom-color:#fff;cursor:default;filter:none}a.cke_dialog_tab_selected:hover,a.cke_dialog_tab_selected:focus{border-bottom-color:#fff}.cke_hc a.cke_dialog_tab:hover,.cke_hc a.cke_dialog_tab:focus,.cke_hc a.cke_dialog_tab_selected{border:3px solid;padding:2px 6px}a.cke_dialog_tab_disabled{color:#bababa;cursor:default}.cke_single_page .cke_dialog_tabs{display:none}.cke_single_page .cke_dialog_contents{padding-top:5px;margin-top:0;border-top:0}a.cke_dialog_close_button{background-image:url(images/close.png);background-repeat:no-repeat;background-position:50%;position:absolute;cursor:pointer;text-align:center;height:16px;width:16px;top:11px;z-index:5;opacity:.7;filter:alpha(opacity = 70)}.cke_rtl .cke_dialog_close_button{left:12px}.cke_ltr .cke_dialog_close_button{right:12px}.cke_hc a.cke_dialog_close_button{background-image:none}.cke_hidpi a.cke_dialog_close_button{background-image:url(images/hidpi/close.png);background-size:16px}a.cke_dialog_close_button:hover{opacity:1;filter:alpha(opacity = 100)}a.cke_dialog_close_button span{display:none}.cke_hc a.cke_dialog_close_button span{display:inline;cursor:pointer;font-weight:bold;position:relative;top:3px}div.cke_disabled .cke_dialog_ui_labeled_content div *{background-color:#ddd;cursor:default}.cke_dialog_ui_vbox table,.cke_dialog_ui_hbox table{margin:auto}.cke_dialog_ui_vbox_child{padding:5px 0}.cke_dialog_ui_hbox{width:100%;margin-top:12px}.cke_dialog_ui_hbox_first,.cke_dialog_ui_hbox_child,.cke_dialog_ui_hbox_last{vertical-align:top}.cke_ltr .cke_dialog_ui_hbox_first,.cke_ltr .cke_dialog_ui_hbox_child{padding-right:10px}.cke_rtl .cke_dialog_ui_hbox_first,.cke_rtl .cke_dialog_ui_hbox_child{padding-left:10px}.cke_ltr .cke_dialog_footer_buttons .cke_dialog_ui_hbox_first,.cke_ltr .cke_dialog_footer_buttons .cke_dialog_ui_hbox_child{padding-right:5px}.cke_rtl .cke_dialog_footer_buttons .cke_dialog_ui_hbox_first,.cke_rtl .cke_dialog_footer_buttons .cke_dialog_ui_hbox_child{padding-left:5px;padding-right:0}.cke_hc div.cke_dialog_ui_input_text,.cke_hc div.cke_dialog_ui_input_password,.cke_hc div.cke_dialog_ui_input_textarea,.cke_hc div.cke_dialog_ui_input_select,.cke_hc div.cke_dialog_ui_input_file{border:1px solid}textarea.cke_dialog_ui_input_textarea{overflow:auto;resize:none}input.cke_dialog_ui_input_text,input.cke_dialog_ui_input_password,textarea.cke_dialog_ui_input_textarea{background-color:#fff;border:1px solid #bcbcbc;padding:4px 6px;outline:0;width:100%;*width:95%;box-sizing:border-box;border-radius:2px;min-height:28px;margin-left:1px}input.cke_dialog_ui_input_text:hover,input.cke_dialog_ui_input_password:hover,textarea.cke_dialog_ui_input_textarea:hover{border:1px solid #aeb3b9}input.cke_dialog_ui_input_text:focus,input.cke_dialog_ui_input_password:focus,textarea.cke_dialog_ui_input_textarea:focus,select.cke_dialog_ui_input_select:focus{outline:0;border:2px solid #139ff7}input.cke_dialog_ui_input_text:focus{padding-left:5px}textarea.cke_dialog_ui_input_textarea:focus{padding:3px 5px}select.cke_dialog_ui_input_select:focus{margin:0;width:100%!important}input.cke_dialog_ui_checkbox_input,input.cke_dialog_ui_radio_input{margin-left:1px;margin-right:2px}input.cke_dialog_ui_checkbox_input:focus,input.cke_dialog_ui_checkbox_input:active,input.cke_dialog_ui_radio_input:focus,input.cke_dialog_ui_radio_input:active{border:0;outline:2px solid #139ff7}a.cke_dialog_ui_button{display:inline-block;*display:inline;*zoom:1;padding:4px 1px;margin:0;text-align:center;color:#484848;vertical-align:middle;cursor:pointer;border:1px solid #bcbcbc;border-radius:2px;background:#f8f8f8;letter-spacing:.3px;line-height:18px;box-sizing:border-box}.cke_hc a.cke_dialog_ui_button{border-width:3px}span.cke_dialog_ui_button{padding:0 10px;cursor:pointer}a.cke_dialog_ui_button:hover{background:#fff}a.cke_dialog_ui_button:focus,a.cke_dialog_ui_button:active{border:2px solid #139ff7;outline:0;padding:3px 0}.cke_hc a.cke_dialog_ui_button:hover,.cke_hc a.cke_dialog_ui_button:focus,.cke_hc a.cke_dialog_ui_button:active{border:3px solid}.cke_dialog_footer_buttons a.cke_dialog_ui_button span{color:inherit;font-size:12px;font-weight:bold;padding:0 12px}a.cke_dialog_ui_button_ok{color:#fff;background:#09863e;border:1px solid #09863e}.cke_hc a.cke_dialog_ui_button{border:3px solid #bcbcbc}a.cke_dialog_ui_button_ok:hover{background:#53aa78;border-color:#53aa78}a.cke_dialog_ui_button_ok:focus{box-shadow:inset 0 0 0 2px #FFF}a.cke_dialog_ui_button_ok:focus,a.cke_dialog_ui_button_ok:active{border-color:#139ff7}.cke_hc a.cke_dialog_ui_button_ok:hover,.cke_hc a.cke_dialog_ui_button_ok:focus,.cke_hc a.cke_dialog_ui_button_ok:active{border-color:#484848}a.cke_dialog_ui_button_ok.cke_disabled{background:#d1d1d1;border-color:#d1d1d1;cursor:default}a.cke_dialog_ui_button_ok.cke_disabled span{cursor:default}.cke_dialog_footer_buttons{display:inline-table;margin:5px;width:auto;position:relative;vertical-align:middle}div.cke_dialog_ui_input_select{display:table}select.cke_dialog_ui_input_select{height:28px;line-height:28px;background-color:#fff;border:1px solid #bcbcbc;padding:3px 3px 3px 6px;outline:0;border-radius:2px;margin:0 1px;box-sizing:border-box;width:calc(100% - 2px)!important}.cke_dialog_ui_input_file{width:100%;height:25px}.cke_hc .cke_dialog_ui_labeled_content input:focus,.cke_hc .cke_dialog_ui_labeled_content select:focus,.cke_hc .cke_dialog_ui_labeled_content textarea:focus{outline:1px dotted}.cke_dialog_ui_labeled_label{margin-left:1px}.cke_dialog .cke_dark_background{background-color:transparent}.cke_dialog .cke_light_background{background-color:#ebebeb}.cke_dialog .cke_centered{text-align:center}.cke_dialog a.cke_btn_reset{float:right;background:url(images/refresh.png) top left no-repeat;width:16px;height:16px;border:1px none;font-size:1px}.cke_hidpi .cke_dialog a.cke_btn_reset{background-size:16px;background-image:url(images/hidpi/refresh.png)}.cke_rtl .cke_dialog a.cke_btn_reset{float:left}.cke_dialog a.cke_btn_locked,.cke_dialog a.cke_btn_unlocked{float:left;width:16px;height:16px;background-repeat:no-repeat;border:none 1px;font-size:1px}.cke_dialog a.cke_btn_locked,.cke_dialog a.cke_btn_unlocked,.cke_dialog a.cke_btn_reset{margin:2px}.cke_dialog a.cke_btn_locked{background-image:url(images/lock.png)}.cke_dialog a.cke_btn_unlocked{background-image:url(images/lock-open.png)}.cke_rtl .cke_dialog a.cke_btn_locked,.cke_rtl .cke_dialog a.cke_btn_unlocked{float:right}.cke_hidpi .cke_dialog a.cke_btn_unlocked,.cke_hidpi .cke_dialog a.cke_btn_locked{background-size:16px}.cke_hidpi .cke_dialog a.cke_btn_locked{background-image:url(images/hidpi/lock.png)}.cke_hidpi .cke_dialog a.cke_btn_unlocked{background-image:url(images/hidpi/lock-open.png)}.cke_dialog a.cke_btn_locked .cke_icon{display:none}.cke_dialog a.cke_btn_over,.cke_dialog a.cke_btn_locked:hover,.cke_dialog a.cke_btn_locked:focus,.cke_dialog a.cke_btn_locked:active,.cke_dialog a.cke_btn_unlocked:hover,.cke_dialog a.cke_btn_unlocked:focus,.cke_dialog a.cke_btn_unlocked:active,.cke_dialog a.cke_btn_reset:hover,.cke_dialog a.cke_btn_reset:focus,.cke_dialog a.cke_btn_reset:active{cursor:pointer;outline:0;margin:0;border:2px solid #139ff7}.cke_dialog fieldset{border:1px solid #bcbcbc}.cke_dialog fieldset legend{padding:0 6px}.cke_dialog_ui_checkbox,.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox{display:inline-block}.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox{padding-top:5px}.cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input,.cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input+label,.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input,.cke_dialog fieldset .cke_dialog_ui_vbox .cke_dialog_ui_checkbox .cke_dialog_ui_checkbox_input+label{vertical-align:middle}.cke_dialog .ImagePreviewBox{border:1px ridge #bcbcbc;overflow:scroll;height:200px;width:300px;padding:2px;background-color:white}.cke_dialog .ImagePreviewBox table td{white-space:normal}.cke_dialog .ImagePreviewLoader{position:absolute;white-space:normal;overflow:hidden;height:160px;width:230px;margin:2px;padding:2px;opacity:.9;filter:alpha(opacity = 90);background-color:#e4e4e4}.cke_dialog .FlashPreviewBox{white-space:normal;border:1px solid #bcbcbc;overflow:auto;height:160px;width:390px;padding:2px;background-color:white}.cke_dialog .cke_pastetext{width:346px;height:170px}.cke_dialog .cke_pastetext textarea{width:340px;height:170px;resize:none}.cke_dialog iframe.cke_pasteframe{width:346px;height:130px;background-color:white;border:1px solid #aeb3b9;border-radius:3px}.cke_dialog .cke_hand{cursor:pointer}.cke_disabled{color:#a0a0a0}.cke_dialog_body .cke_label{display:none}.cke_dialog_body label{display:inline;cursor:default;letter-spacing:.3px}.cke_dialog_body label+.cke_dialog_ui_labeled_content{margin-top:2px}.cke_dialog_contents_body .cke_dialog_ui_text,.cke_dialog_contents_body .cke_dialog_ui_select,.cke_dialog_contents_body .cke_dialog_ui_hbox_last>a.cke_dialog_ui_button{margin-top:4px}a.cke_smile{overflow:hidden;display:block;text-align:center;padding:.3em 0}a.cke_smile img{vertical-align:middle}a.cke_specialchar{cursor:inherit;display:block;height:1.25em;padding:.2em .3em;text-align:center}a.cke_smile,a.cke_specialchar{border:2px solid transparent}a.cke_smile:hover,a.cke_smile:focus,a.cke_smile:active,a.cke_specialchar:hover,a.cke_specialchar:focus,a.cke_specialchar:active{background:#fff;outline:0}a.cke_smile:hover,a.cke_specialchar:hover{border-color:#888}a.cke_smile:focus,a.cke_smile:active,a.cke_specialchar:focus,a.cke_specialchar:active{border-color:#139ff7}.cke_dialog_contents a.colorChooser{display:block;margin-top:6px;margin-left:10px;width:80px}.cke_rtl .cke_dialog_contents a.colorChooser{margin-right:10px}.cke_iframe_shim{display:block;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity = 0);width:100%;height:100%}.cke_dialog_contents_body .cke_accessibility_legend{margin:2px 7px 2px 2px}.cke_dialog_contents_body .cke_accessibility_legend:focus,.cke_dialog_contents_body .cke_accessibility_legend:active{outline:0;border:2px solid #139ff7;margin:0 5px 0 0}.cke_dialog_contents_body input[type=file]:focus,.cke_dialog_contents_body input[type=file]:active{border:2px solid #139ff7}.cke_dialog_find_fieldset{margin-top:10px!important}.cke_dialog_image_ratiolock{margin-top:52px!important}.cke_dialog_forms_select_order label.cke_dialog_ui_labeled_label{margin-left:0}.cke_dialog_forms_select_order div.cke_dialog_ui_input_select{width:100%}.cke_dialog_forms_select_order_txtsize .cke_dialog_ui_hbox_last{padding-top:4px}.cke_dialog_image_url .cke_dialog_ui_hbox_last,.cke_dialog_flash_url .cke_dialog_ui_hbox_last{vertical-align:bottom}a.cke_dialog_ui_button.cke_dialog_image_browse{margin-top:10px}.cke_dialog_contents_body .cke_tpl_list{border:#bcbcbc 1px solid;margin:1px}.cke_dialog_contents_body .cke_tpl_list:focus,.cke_dialog_contents_body .cke_tpl_list:active{outline:0;margin:0;border:2px solid #139ff7}.cke_dialog_contents_body .cke_tpl_list a:focus,.cke_dialog_contents_body .cke_tpl_list a:active{outline:0}.cke_dialog_contents_body .cke_tpl_list a:focus .cke_tpl_item,.cke_dialog_contents_body .cke_tpl_list a:active .cke_tpl_item{border:2px solid #139ff7;padding:6px}"; });
define('resources/editor/editor',["exports", "aurelia-framework", "aurelia-binding", "jquery", "summernote"], function (exports, _aureliaFramework, _aureliaBinding, _jquery) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Editor = undefined;

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;

		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}

		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);

		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}

		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}

		return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
		throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

	var Editor = exports.Editor = (_dec = (0, _aureliaFramework.inject)(Element, _aureliaBinding.ObserverLocator), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = (_class2 = function () {
		function Editor(element, observerLocator) {
			var _this = this;

			_classCallCheck(this, Editor);

			_initDefineProp(this, "value", _descriptor, this);

			_initDefineProp(this, "height", _descriptor2, this);

			_initDefineProp(this, "editorid", _descriptor3, this);

			_initDefineProp(this, "toolbar", _descriptor4, this);

			this.editor = null;

			this.element = element;

			this.subscriptions = [observerLocator.getObserver(this, 'value').subscribe(function (newValue) {
				if (_this.editor && newValue !== _this.editor.summernote('code')) {
					_this.editor.summernote('code', newValue);
				}
			})];
		}

		Editor.prototype.attached = function attached() {
			var that = this;
			this.editor = (0, _jquery2.default)("#" + this.editorid);
			this.editor.data('view-model', this);
			this.editor.summernote({
				height: this.height,
				toolbar: this.toolbar,
				callbacks: {
					onChange: function onChange(contents) {
						that.value = contents;
						(0, _jquery2.default)("#" + this.editorid).summernote('editor.saveRange');
					}
				}
			});
			this.editor.summernote('code', this.value);
		};

		Editor.prototype.detached = function detached() {
			this.editor.summernote('destroy');
		};

		Editor.prototype.guid = function guid() {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
		};

		return Editor;
	}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "height", [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function initializer() {
			return 250;
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "editorid", [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function initializer() {
			return "summernote-" + this.guid();
		}
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toolbar", [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function initializer() {
			return [['style', ['style', 'bold', 'clear']], ['color', ['color']], ['font', ['strikethrough', 'superscript', 'subscript']], ['fontsize', ['fontsize']], ['layout', ['ul', 'ol', 'paragraph']], ['insert', ['picture', 'link', 'table', 'hello']], ['misc', ['undo', 'redo', 'fullscreen']]];
		}
	})), _class2)) || _class);
});
define('text!resources/editor/editor.html', ['module'], function(module) { module.exports = "<template>\r\n\t<div class=\"summernote-host\" id.bind=\"editorid\" ref=\"editor\"></div>\r\n</template>"; });
define('resources/data/files',['exports', 'aurelia-framework', './data-services'], function (exports, _aureliaFramework, _dataServices) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Files = undefined;

	function _asyncToGenerator(fn) {
		return function () {
			var gen = fn.apply(this, arguments);
			return new Promise(function (resolve, reject) {
				function step(key, arg) {
					try {
						var info = gen[key](arg);
						var value = info.value;
					} catch (error) {
						reject(error);
						return;
					}

					if (info.done) {
						resolve(value);
					} else {
						return Promise.resolve(value).then(function (value) {
							step("next", value);
						}, function (err) {
							step("throw", err);
						});
					}
				}

				return step("next");
			});
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var Files = exports.Files = (_dec = (0, _aureliaFramework.inject)(_dataServices.DataServices), _dec(_class = function () {
		function Files(data) {
			_classCallCheck(this, Files);

			this.data = data;
		}

		Files.prototype.getDocumentsArray = function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
				var serverResponse;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								this.documentsArray = new Array();
								_context.prev = 1;
								_context.next = 4;
								return this.data.get("docs");

							case 4:
								serverResponse = _context.sent;

								if (serverResponse.status) {
									_context.next = 9;
									break;
								}

								this.documentsArray = serverResponse;
								_context.next = 10;
								break;

							case 9:
								return _context.abrupt('return', undefined);

							case 10:
								_context.next = 16;
								break;

							case 12:
								_context.prev = 12;
								_context.t0 = _context['catch'](1);

								console.log(_context.t0);
								return _context.abrupt('return', undefined);

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[1, 12]]);
			}));

			function getDocumentsArray() {
				return _ref.apply(this, arguments);
			}

			return getDocumentsArray;
		}();

		Files.prototype.getDocsByType = function () {
			var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(type) {
				var serverResponse;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								this.filteredList = new Array();
								_context2.prev = 1;
								_context2.next = 4;
								return this.data.get("docs/type/" + type);

							case 4:
								serverResponse = _context2.sent;

								if (serverResponse.status) {
									_context2.next = 9;
									break;
								}

								this.filteredList = serverResponse;
								_context2.next = 10;
								break;

							case 9:
								return _context2.abrupt('return', undefined);

							case 10:
								_context2.next = 16;
								break;

							case 12:
								_context2.prev = 12;
								_context2.t0 = _context2['catch'](1);

								console.log(_context2.t0);
								return _context2.abrupt('return', undefined);

							case 16:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this, [[1, 12]]);
			}));

			function getDocsByType(_x) {
				return _ref2.apply(this, arguments);
			}

			return getDocsByType;
		}();

		Files.prototype.selectFile = function selectFile(index) {
			if (index === undefined) {
				this.selectedFile = this.emptyFile();
			}
		};

		Files.prototype.setDoc = function setDoc(doc) {
			this.selectedFile = doc;
		};

		Files.prototype.emptyFile = function emptyFile() {
			var obj = {};
			obj.name = "";
			obj.type = "QUIZ";
			obj.sortOrder = 0;
			obj.file = {
				fileName: "",
				originalFilename: ""
			};
			return obj;
		};

		Files.prototype.saveFile = function () {
			var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
				var response;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								if (this.selectedFile) {
									_context3.next = 2;
									break;
								}

								return _context3.abrupt('return');

							case 2:
								if (this.selectedFile._id) {
									_context3.next = 9;
									break;
								}

								_context3.next = 5;
								return this.data.saveObject(this.selectedFile, "docs", "post");

							case 5:
								response = _context3.sent;

								this.selectedFile = response;
								_context3.next = 11;
								break;

							case 9:
								_context3.next = 11;
								return this.data.saveObject(this.selectedFile, "docs/" + this.selectedFile._id, "put");

							case 11:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function saveFile() {
				return _ref3.apply(this, arguments);
			}

			return saveFile;
		}();

		Files.prototype.uploadFile = function uploadFile(files) {
			console.log(this.selectedFile);
			var path = this.selectedFile.type + "/" + this.selectedFile._id;
			this.data.uploadFiles(files, "/docs/upload/" + path);
		};

		Files.prototype.filterList = function filterList(selectedType) {
			this.filteredList = this.documentsArray.filter(function (item) {
				return item.type == selectedType;
			});
		};

		Files.prototype.deleteDoc = function () {
			var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(id) {
				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								if (!id) {
									_context4.next = 3;
									break;
								}

								_context4.next = 3;
								return this.data.deleteObject("docs/" + id);

							case 3:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function deleteDoc(_x2) {
				return _ref4.apply(this, arguments);
			}

			return deleteDoc;
		}();

		Files.prototype.getQuizArray = function () {
			var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
				var serverResponse;
				return regeneratorRuntime.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								this.quizzesArray = new Array();
								_context5.prev = 1;
								_context5.next = 4;
								return this.data.get("quizzes");

							case 4:
								serverResponse = _context5.sent;

								if (serverResponse.status) {
									_context5.next = 9;
									break;
								}

								this.quizzesArray = serverResponse;
								_context5.next = 10;
								break;

							case 9:
								return _context5.abrupt('return', undefined);

							case 10:
								_context5.next = 16;
								break;

							case 12:
								_context5.prev = 12;
								_context5.t0 = _context5['catch'](1);

								console.log(_context5.t0);
								return _context5.abrupt('return', undefined);

							case 16:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this, [[1, 12]]);
			}));

			function getQuizArray() {
				return _ref5.apply(this, arguments);
			}

			return getQuizArray;
		}();

		Files.prototype.selectQuiz = function selectQuiz(index) {
			if (!index) {
				this.selectedQuiz = this.emptyQuiz();
			}
		};

		Files.prototype.setQuiz = function setQuiz(doc) {
			this.selectedQuiz = doc;
		};

		Files.prototype.emptyQuiz = function emptyQuiz() {
			var obj = {};
			obj.name = "";
			return obj;
		};

		Files.prototype.saveQuiz = function () {
			var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
				return regeneratorRuntime.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								if (this.selectedQuiz) {
									_context6.next = 2;
									break;
								}

								return _context6.abrupt('return');

							case 2:
								if (this.selectedQuiz._id) {
									_context6.next = 9;
									break;
								}

								_context6.next = 5;
								return this.data.saveObject(this.selectedQuiz, "quizzes", "post");

							case 5:
								_context6.next = 7;
								return this.getQuizArray();

							case 7:
								_context6.next = 13;
								break;

							case 9:
								_context6.next = 11;
								return this.data.saveObject(this.selectedQuiz, "quizzes/" + this.selectedQuiz._id, "put");

							case 11:
								_context6.next = 13;
								return this.getQuizArray();

							case 13:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function saveQuiz() {
				return _ref6.apply(this, arguments);
			}

			return saveQuiz;
		}();

		Files.prototype.deleteQuiz = function () {
			var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(id) {
				return regeneratorRuntime.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								if (!id) {
									_context7.next = 6;
									break;
								}

								_context7.next = 3;
								return this.data.deleteObject("quizzes/" + id);

							case 3:
								_context7.next = 5;
								return this.getQuizArray();

							case 5:
								this.emptyQuiz();

							case 6:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, this);
			}));

			function deleteQuiz(_x3) {
				return _ref7.apply(this, arguments);
			}

			return deleteQuiz;
		}();

		Files.prototype.getQuestionArray = function () {
			var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(id) {
				var serverResponse;
				return regeneratorRuntime.wrap(function _callee8$(_context8) {
					while (1) {
						switch (_context8.prev = _context8.next) {
							case 0:
								this.questionArray = new Array();
								_context8.prev = 1;
								_context8.next = 4;
								return this.data.get("questions/quiz/" + id);

							case 4:
								serverResponse = _context8.sent;

								if (serverResponse.status) {
									_context8.next = 9;
									break;
								}

								this.questionArray = serverResponse;
								_context8.next = 10;
								break;

							case 9:
								return _context8.abrupt('return', undefined);

							case 10:
								_context8.next = 16;
								break;

							case 12:
								_context8.prev = 12;
								_context8.t0 = _context8['catch'](1);

								console.log(_context8.t0);
								return _context8.abrupt('return', undefined);

							case 16:
							case 'end':
								return _context8.stop();
						}
					}
				}, _callee8, this, [[1, 12]]);
			}));

			function getQuestionArray(_x4) {
				return _ref8.apply(this, arguments);
			}

			return getQuestionArray;
		}();

		Files.prototype.selectQuestion = function selectQuestion(index) {
			if (!index && index !== 0) {
				this.selectedQuestion = this.emptyQuestion();
			} else {
				this.selectedQuestion = this.questionArray[index];
			}
		};

		Files.prototype.setQuestion = function setQuestion(doc) {
			this.selectedQuestion = doc;
		};

		Files.prototype.emptyQuestion = function emptyQuestion() {
			var obj = {};
			obj.unit = this.selectedQuiz._id;
			obj.flash = "";
			obj.card = "";
			return obj;
		};

		Files.prototype.saveQuestion = function () {
			var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
				return regeneratorRuntime.wrap(function _callee9$(_context9) {
					while (1) {
						switch (_context9.prev = _context9.next) {
							case 0:
								if (this.selectedQuestion) {
									_context9.next = 2;
									break;
								}

								return _context9.abrupt('return');

							case 2:
								if (this.selectedQuestion._id) {
									_context9.next = 9;
									break;
								}

								_context9.next = 5;
								return this.data.saveObject(this.selectedQuestion, "questions", "post");

							case 5:
								_context9.next = 7;
								return this.getQuestionArray(this.selectedQuiz._id);

							case 7:
								_context9.next = 13;
								break;

							case 9:
								_context9.next = 11;
								return this.data.saveObject(this.selectedQuestion, "questions/" + this.selectedQuestion._id, "put");

							case 11:
								_context9.next = 13;
								return this.getQuestionArray(this.selectedQuiz._id);

							case 13:
							case 'end':
								return _context9.stop();
						}
					}
				}, _callee9, this);
			}));

			function saveQuestion() {
				return _ref9.apply(this, arguments);
			}

			return saveQuestion;
		}();

		Files.prototype.deleteQuestion = function () {
			var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(id) {
				return regeneratorRuntime.wrap(function _callee10$(_context10) {
					while (1) {
						switch (_context10.prev = _context10.next) {
							case 0:
								if (!id) {
									_context10.next = 5;
									break;
								}

								_context10.next = 3;
								return this.data.deleteObject("questions/" + id);

							case 3:
								_context10.next = 5;
								return this.getQuestionArray(this.selectedQuiz._id);

							case 5:
							case 'end':
								return _context10.stop();
						}
					}
				}, _callee10, this);
			}));

			function deleteQuestion(_x5) {
				return _ref10.apply(this, arguments);
			}

			return deleteQuestion;
		}();

		return Files;
	}()) || _class);
});
define('resources/data/events',['exports', 'aurelia-framework', './data-services'], function (exports, _aureliaFramework, _dataServices) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Events = undefined;

	function _asyncToGenerator(fn) {
		return function () {
			var gen = fn.apply(this, arguments);
			return new Promise(function (resolve, reject) {
				function step(key, arg) {
					try {
						var info = gen[key](arg);
						var value = info.value;
					} catch (error) {
						reject(error);
						return;
					}

					if (info.done) {
						resolve(value);
					} else {
						return Promise.resolve(value).then(function (value) {
							step("next", value);
						}, function (err) {
							step("throw", err);
						});
					}
				}

				return step("next");
			});
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var Events = exports.Events = (_dec = (0, _aureliaFramework.inject)(_dataServices.DataServices), _dec(_class = function () {
		function Events(data) {
			_classCallCheck(this, Events);

			this.data = data;
		}

		Events.prototype.getEventsArray = function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
				var url, serverResponse, i;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								this.eventsArray = [];
								url = 'events?order=sortOrder';
								_context.prev = 2;
								_context.next = 5;
								return this.data.get(url);

							case 5:
								serverResponse = _context.sent;

								if (!serverResponse.error) {
									this.eventsArray = serverResponse;
									console.log(this.eventsArray.length);
									for (i = 0; i < this.eventsArray.length; i++) {
										this.eventsArray[i].borderColor = "#FFFFFF";
										this.eventsArray[i].backgroundColor = "#FFFFFF";
										console.log(this.eventsArray[i].title);
									}
								} else {
									this.data.processError(serverResponse);
								}
								_context.next = 12;
								break;

							case 9:
								_context.prev = 9;
								_context.t0 = _context['catch'](2);

								console.log(_context.t0);

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[2, 9]]);
			}));

			function getEventsArray() {
				return _ref.apply(this, arguments);
			}

			return getEventsArray;
		}();

		return Events;
	}()) || _class);
});
define('resources/data/data-services',['exports', 'aurelia-framework', 'aurelia-http-client'], function (exports, _aureliaFramework, _aureliaHttpClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DataServices = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var DataServices = exports.DataServices = (_dec = (0, _aureliaFramework.inject)(_aureliaHttpClient.HttpClient), _dec(_class = function () {
        function DataServices(http) {
            _classCallCheck(this, DataServices);

            this.isRequesting = false;

            this.http = http;

            this.http.configure(function (x) {
                x.withBaseUrl('http://git.ucc.uwm.edu/');
            });
        }

        DataServices.prototype.activate = function activate() {};

        DataServices.prototype.get = function get(url) {
            var _this = this;

            this.isRequesting = true;
            return this.http.createRequest(url).asGet().send().then(function (response) {
                _this.isRequesting = false;
                if (!response.isSuccess) {
                    return response;
                } else {
                    return JSON.parse(response.response);
                }
            }).catch(function (e) {
                _this.isRequesting = false;
                console.log(e);
                return { error: true, code: e.statusCode, message: e.statusText };
            });
        };

        DataServices.prototype.saveObject = function saveObject(content, url, method) {
            var _this2 = this;

            this.isRequesting = true;
            if (method === 'put') {
                return this.http.createRequest(url).asPut().withContent(content).send().then(function (response) {
                    _this2.isRequesting = false;
                    if (!response.isSuccess) {
                        return response;
                    } else {
                        return JSON.parse(response.response);
                    }
                }).catch(function (e) {
                    _this2.isRequesting = false;
                    console.log(e);
                    return { error: true, code: e.statusCode, message: e.statusText };
                });
            } else if (method === 'post') {
                return this.http.createRequest(url).asPost().withContent(content).send().then(function (response) {
                    _this2.isRequesting = false;
                    if (!response.isSuccess) {
                        return response;
                    } else {
                        return JSON.parse(response.response);
                    }
                }).catch(function (e) {
                    _this2.isRequesting = false;
                    console.log(e);
                    return { error: true, code: e.statusCode, message: e.statusText };
                });
            }
        };

        DataServices.prototype.deleteObject = function deleteObject(url) {
            var _this3 = this;

            this.isRequesting = true;
            return this.http.createRequest(url).asDelete().send().then(function (response) {
                _this3.isRequesting = false;
                if (!response.isSuccess) {
                    return response;
                } else {
                    if (response.statusCode === 204) {
                        return response;
                    } else {
                        return JSON.parse(response.response);
                    }
                }
            }).catch(function (e) {
                _this3.isRequesting = false;
                console.log(e);
                return { error: true, code: e.statusCode, message: e.statusText };
            });
        };

        DataServices.prototype.login = function login(content, url) {
            var _this4 = this;

            return this.http.createRequest(url).asPost().withContent(content).send().then(function (response) {
                _this4.isRequesting = false;
                return JSON.parse(response.response);
            }).catch(function (e) {
                _this4.isRequesting = false;
                console.log(e);
                return { error: true, code: e.statusCode, message: e.statusText };
            });
        };

        DataServices.prototype.uploadFiles = function uploadFiles(files, url) {
            var _this5 = this;

            this.progress = 0;
            var formData = new FormData();

            files.forEach(function (item, index) {
                formData.append("file" + index, item);
            });

            return this.http.createRequest(url).asPost().withContent(formData).skipContentProcessing().send().then(function (response) {
                _this5.isRequesting = false;
                if (!response.isSuccess) {
                    return response;
                } else {
                    return JSON.parse(response.response);
                }
            }).catch(function (e) {
                _this5.isRequesting = false;
                console.log(e);
                return { error: true, code: e.statusCode, message: e.statusText };
            });
        };

        DataServices.prototype.processError = function processError(obj, message) {
            console.log(obj);
            var msg = (message ? message : "") + " ";
            switch (obj.code) {
                case 404:
                    msg = undefined;
                    break;
                case 422:
                    msg = msg += "The request was bad.  Contact your UCC.";
                    break;
                case 409:
                    msg = msg += "The record already exists.";
                    break;
                case 500:
                    msg = msg += "An unspecified error occured on the server.  Contact your UCC.";
                    break;
                default:
                    msg = msg += "An unspecified error occured.  Contact your UCC.";
            }
            if (msg && msg.length > 0) console.log(msg);
        };

        return DataServices;
    }()) || _class);
});
define('resources/data/auth',['exports', 'aurelia-framework', 'aurelia-event-aggregator', './data-services'], function (exports, _aureliaFramework, _aureliaEventAggregator, _dataServices) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Auth = undefined;

	function _asyncToGenerator(fn) {
		return function () {
			var gen = fn.apply(this, arguments);
			return new Promise(function (resolve, reject) {
				function step(key, arg) {
					try {
						var info = gen[key](arg);
						var value = info.value;
					} catch (error) {
						reject(error);
						return;
					}

					if (info.done) {
						resolve(value);
					} else {
						return Promise.resolve(value).then(function (value) {
							step("next", value);
						}, function (err) {
							step("throw", err);
						});
					}
				}

				return step("next");
			});
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var Auth = exports.Auth = (_dec = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator, _dataServices.DataServices), _dec(_class = function () {
		function Auth(eventAggregator, data) {
			_classCallCheck(this, Auth);

			this.loginUrl = '/login';
			this.logoutUrl = '/logout';

			this.eventAggregator = eventAggregator;
			this.data = data;
		}

		Auth.prototype.login = function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(username, password) {
				var content, response;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								content = {
									'username': username,
									'password': password
								};
								_context.next = 3;
								return this.data.login(content, this.loginUrl);

							case 3:
								response = _context.sent;

								if (!response.error) {
									response.user.userRole = response.user.role;

									sessionStorage.setItem('token', response.token);
									sessionStorage.setItem('user', JSON.stringify(response.user));
								}
								this.eventAggregator.publish('auth:login', response);
								return _context.abrupt('return', response);

							case 7:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function login(_x, _x2) {
				return _ref.apply(this, arguments);
			}

			return login;
		}();

		Auth.prototype.logout = function logout(email) {
			sessionStorage.removeItem('token');
			sessionStorage.removeItem('user');
			sessionStorage.removeItem('role');
		};

		Auth.prototype.isAuthenticated = function isAuthenticated() {
			var token = sessionStorage.getItem('token');

			if (!token) {
				return false;
			}

			if (token.split('.').length !== 3) {
				return true;
			}

			var exp = void 0;
			try {
				var base64Url = token.split('.')[1];
				var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
				exp = JSON.parse(window.atob(base64)).exp;
			} catch (error) {
				return false;
			}

			if (exp) {
				return Math.round(new Date().getTime() / 1000) <= exp;
			}

			return true;
		};

		return Auth;
	}()) || _class);
});
define('text!resources/css/fullcalendar.css', ['module'], function(module) { module.exports = "/*!\n * FullCalendar v3.4.0 Stylesheet\n * Docs & License: https://fullcalendar.io/\n * (c) 2017 Adam Shaw\n */\n\n\n.fc {\n\tdirection: ltr;\n\ttext-align: left;\n}\n\n.fc-rtl {\n\ttext-align: right;\n}\n\nbody .fc { /* extra precedence to overcome jqui */\n\tfont-size: 1em;\n}\n\n\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n\n.fc-unthemed th,\n.fc-unthemed td,\n.fc-unthemed thead,\n.fc-unthemed tbody,\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-row,\n.fc-unthemed .fc-content, /* for gutter border */\n.fc-unthemed .fc-popover,\n.fc-unthemed .fc-list-view,\n.fc-unthemed .fc-list-heading td {\n\tborder-color: #ddd;\n}\n\n.fc-unthemed .fc-popover {\n\tbackground-color: #fff;\n}\n\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-popover .fc-header,\n.fc-unthemed .fc-list-heading td {\n\tbackground: #eee;\n}\n\n.fc-unthemed .fc-popover .fc-header .fc-close {\n\tcolor: #666;\n}\n\n.fc-unthemed td.fc-today {\n\tbackground: #fcf8e3;\n}\n\n.fc-highlight { /* when user is selecting cells */\n\tbackground: #bce8f1;\n\topacity: .3;\n}\n\n.fc-bgevent { /* default look for background events */\n\tbackground: rgb(143, 223, 130);\n\topacity: .3;\n}\n\n.fc-nonbusiness { /* default look for non-business-hours areas */\n\t/* will inherit .fc-bgevent's styles */\n\tbackground: #d7d7d7;\n}\n\n.fc-unthemed .fc-disabled-day {\n\tbackground: #d7d7d7;\n\topacity: .3;\n}\n\n.ui-widget .fc-disabled-day { /* themed */\n\tbackground-image: none;\n}\n\n\n/* Icons (inline elements with styled text that mock arrow icons)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-icon {\n\tdisplay: inline-block;\n\theight: 1em;\n\tline-height: 1em;\n\tfont-size: 1em;\n\ttext-align: center;\n\toverflow: hidden;\n\tfont-family: \"Courier New\", Courier, monospace;\n\n\t/* don't allow browser text-selection */\n\t-webkit-touch-callout: none;\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\t}\n\n/*\nAcceptable font-family overrides for individual icons:\n\t\"Arial\", sans-serif\n\t\"Times New Roman\", serif\n\nNOTE: use percentage font sizes or else old IE chokes\n*/\n\n.fc-icon:after {\n\tposition: relative;\n}\n\n.fc-icon-left-single-arrow:after {\n\tcontent: \"\\02039\";\n\tfont-weight: bold;\n\tfont-size: 200%;\n\ttop: -7%;\n}\n\n.fc-icon-right-single-arrow:after {\n\tcontent: \"\\0203A\";\n\tfont-weight: bold;\n\tfont-size: 200%;\n\ttop: -7%;\n}\n\n.fc-icon-left-double-arrow:after {\n\tcontent: \"\\000AB\";\n\tfont-size: 160%;\n\ttop: -7%;\n}\n\n.fc-icon-right-double-arrow:after {\n\tcontent: \"\\000BB\";\n\tfont-size: 160%;\n\ttop: -7%;\n}\n\n.fc-icon-left-triangle:after {\n\tcontent: \"\\25C4\";\n\tfont-size: 125%;\n\ttop: 3%;\n}\n\n.fc-icon-right-triangle:after {\n\tcontent: \"\\25BA\";\n\tfont-size: 125%;\n\ttop: 3%;\n}\n\n.fc-icon-down-triangle:after {\n\tcontent: \"\\25BC\";\n\tfont-size: 125%;\n\ttop: 2%;\n}\n\n.fc-icon-x:after {\n\tcontent: \"\\000D7\";\n\tfont-size: 200%;\n\ttop: 6%;\n}\n\n\n/* Buttons (styled <button> tags, normalized to work cross-browser)\n--------------------------------------------------------------------------------------------------*/\n\n.fc button {\n\t/* force height to include the border and padding */\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\n\t/* dimensions */\n\tmargin: 0;\n\theight: 2.1em;\n\tpadding: 0 .6em;\n\n\t/* text & cursor */\n\tfont-size: 1em; /* normalize */\n\twhite-space: nowrap;\n\tcursor: pointer;\n}\n\n/* Firefox has an annoying inner border */\n.fc button::-moz-focus-inner { margin: 0; padding: 0; }\n\t\n.fc-state-default { /* non-theme */\n\tborder: 1px solid;\n}\n\n.fc-state-default.fc-corner-left { /* non-theme */\n\tborder-top-left-radius: 4px;\n\tborder-bottom-left-radius: 4px;\n}\n\n.fc-state-default.fc-corner-right { /* non-theme */\n\tborder-top-right-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n}\n\n/* icons in buttons */\n\n.fc button .fc-icon { /* non-theme */\n\tposition: relative;\n\ttop: -0.05em; /* seems to be a good adjustment across browsers */\n\tmargin: 0 .2em;\n\tvertical-align: middle;\n}\n\t\n/*\n  button states\n  borrowed from twitter bootstrap (http://twitter.github.com/bootstrap/)\n*/\n\n.fc-state-default {\n\tbackground-color: #f5f5f5;\n\tbackground-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6));\n\tbackground-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);\n\tbackground-image: -o-linear-gradient(top, #ffffff, #e6e6e6);\n\tbackground-image: linear-gradient(to bottom, #ffffff, #e6e6e6);\n\tbackground-repeat: repeat-x;\n\tborder-color: #e6e6e6 #e6e6e6 #bfbfbf;\n\tborder-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n\tcolor: #333;\n\ttext-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n\tbox-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n\n.fc-state-hover,\n.fc-state-down,\n.fc-state-active,\n.fc-state-disabled {\n\tcolor: #333333;\n\tbackground-color: #e6e6e6;\n}\n\n.fc-state-hover {\n\tcolor: #333333;\n\ttext-decoration: none;\n\tbackground-position: 0 -15px;\n\t-webkit-transition: background-position 0.1s linear;\n\t   -moz-transition: background-position 0.1s linear;\n\t     -o-transition: background-position 0.1s linear;\n\t        transition: background-position 0.1s linear;\n}\n\n.fc-state-down,\n.fc-state-active {\n\tbackground-color: #cccccc;\n\tbackground-image: none;\n\tbox-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n\n.fc-state-disabled {\n\tcursor: default;\n\tbackground-image: none;\n\topacity: 0.65;\n\tbox-shadow: none;\n}\n\n\n/* Buttons Groups\n--------------------------------------------------------------------------------------------------*/\n\n.fc-button-group {\n\tdisplay: inline-block;\n}\n\n/*\nevery button that is not first in a button group should scootch over one pixel and cover the\nprevious button's border...\n*/\n\n.fc .fc-button-group > * { /* extra precedence b/c buttons have margin set to zero */\n\tfloat: left;\n\tmargin: 0 0 0 -1px;\n}\n\n.fc .fc-button-group > :first-child { /* same */\n\tmargin-left: 0;\n}\n\n\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n\n.fc-popover {\n\tposition: absolute;\n\tbox-shadow: 0 2px 6px rgba(0,0,0,.15);\n}\n\n.fc-popover .fc-header { /* TODO: be more consistent with fc-head/fc-body */\n\tpadding: 2px 4px;\n}\n\n.fc-popover .fc-header .fc-title {\n\tmargin: 0 2px;\n}\n\n.fc-popover .fc-header .fc-close {\n\tcursor: pointer;\n}\n\n.fc-ltr .fc-popover .fc-header .fc-title,\n.fc-rtl .fc-popover .fc-header .fc-close {\n\tfloat: left;\n}\n\n.fc-rtl .fc-popover .fc-header .fc-title,\n.fc-ltr .fc-popover .fc-header .fc-close {\n\tfloat: right;\n}\n\n/* unthemed */\n\n.fc-unthemed .fc-popover {\n\tborder-width: 1px;\n\tborder-style: solid;\n}\n\n.fc-unthemed .fc-popover .fc-header .fc-close {\n\tfont-size: .9em;\n\tmargin-top: 2px;\n}\n\n/* jqui themed */\n\n.fc-popover > .ui-widget-header + .ui-widget-content {\n\tborder-top: 0; /* where they meet, let the header have the border */\n}\n\n\n/* Misc Reusable Components\n--------------------------------------------------------------------------------------------------*/\n\n.fc-divider {\n\tborder-style: solid;\n\tborder-width: 1px;\n}\n\nhr.fc-divider {\n\theight: 0;\n\tmargin: 0;\n\tpadding: 0 0 2px; /* height is unreliable across browsers, so use padding */\n\tborder-width: 1px 0;\n}\n\n.fc-clear {\n\tclear: both;\n}\n\n.fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-helper-skeleton {\n\t/* these element should always cling to top-left/right corners */\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n}\n\n.fc-bg {\n\tbottom: 0; /* strech bg to bottom edge */\n}\n\n.fc-bg table {\n\theight: 100%; /* strech bg to bottom edge */\n}\n\n\n/* Tables\n--------------------------------------------------------------------------------------------------*/\n\n.fc table {\n\twidth: 100%;\n\tbox-sizing: border-box; /* fix scrollbar issue in firefox */\n\ttable-layout: fixed;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n\tfont-size: 1em; /* normalize cross-browser */\n}\n\n.fc th {\n\ttext-align: center;\n}\n\n.fc th,\n.fc td {\n\tborder-style: solid;\n\tborder-width: 1px;\n\tpadding: 0;\n\tvertical-align: top;\n}\n\n.fc td.fc-today {\n\tborder-style: double; /* overcome neighboring borders */\n}\n\n\n/* Internal Nav Links\n--------------------------------------------------------------------------------------------------*/\n\na[data-goto] {\n\tcursor: pointer;\n}\n\na[data-goto]:hover {\n\ttext-decoration: underline;\n}\n\n\n/* Fake Table Rows\n--------------------------------------------------------------------------------------------------*/\n\n.fc .fc-row { /* extra precedence to overcome themes w/ .ui-widget-content forcing a 1px border */\n\t/* no visible border by default. but make available if need be (scrollbar width compensation) */\n\tborder-style: solid;\n\tborder-width: 0;\n}\n\n.fc-row table {\n\t/* don't put left/right border on anything within a fake row.\n\t   the outer tbody will worry about this */\n\tborder-left: 0 hidden transparent;\n\tborder-right: 0 hidden transparent;\n\n\t/* no bottom borders on rows */\n\tborder-bottom: 0 hidden transparent; \n}\n\n.fc-row:first-child table {\n\tborder-top: 0 hidden transparent; /* no top border on first row */\n}\n\n\n/* Day Row (used within the header and the DayGrid)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-row {\n\tposition: relative;\n}\n\n.fc-row .fc-bg {\n\tz-index: 1;\n}\n\n/* highlighting cells & background event skeleton */\n\n.fc-row .fc-bgevent-skeleton,\n.fc-row .fc-highlight-skeleton {\n\tbottom: 0; /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-bgevent-skeleton table,\n.fc-row .fc-highlight-skeleton table {\n\theight: 100%; /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-highlight-skeleton td,\n.fc-row .fc-bgevent-skeleton td {\n\tborder-color: transparent;\n}\n\n.fc-row .fc-bgevent-skeleton {\n\tz-index: 2;\n\n}\n\n.fc-row .fc-highlight-skeleton {\n\tz-index: 3;\n}\n\n/*\nrow content (which contains day/week numbers and events) as well as \"helper\" (which contains\ntemporary rendered events).\n*/\n\n.fc-row .fc-content-skeleton {\n\tposition: relative;\n\tz-index: 4;\n\tpadding-bottom: 2px; /* matches the space above the events */\n}\n\n.fc-row .fc-helper-skeleton {\n\tz-index: 5;\n}\n\n.fc-row .fc-content-skeleton td,\n.fc-row .fc-helper-skeleton td {\n\t/* see-through to the background below */\n\tbackground: none; /* in case <td>s are globally styled */\n\tborder-color: transparent;\n\n\t/* don't put a border between events and/or the day number */\n\tborder-bottom: 0;\n}\n\n.fc-row .fc-content-skeleton tbody td, /* cells with events inside (so NOT the day number cell) */\n.fc-row .fc-helper-skeleton tbody td {\n\t/* don't put a border between event cells */\n\tborder-top: 0;\n}\n\n\n/* Scrolling Container\n--------------------------------------------------------------------------------------------------*/\n\n.fc-scroller {\n\t-webkit-overflow-scrolling: touch;\n}\n\n/* TODO: move to agenda/basic */\n.fc-scroller > .fc-day-grid,\n.fc-scroller > .fc-time-grid {\n\tposition: relative; /* re-scope all positions */\n\twidth: 100%; /* hack to force re-sizing this inner element when scrollbars appear/disappear */\n}\n\n\n/* Global Event Styles\n--------------------------------------------------------------------------------------------------*/\n\n.fc-event {\n\tposition: relative; /* for resize handle and other inner positioning */\n\tdisplay: block; /* make the <a> tag block */\n\tfont-size: .85em;\n\tline-height: 1.3;\n\tborder-radius: 3px;\n\tborder: 1px solid #3a87ad; /* default BORDER color */\n\tfont-weight: normal; /* undo jqui's ui-widget-header bold */\n}\n\n.fc-event,\n.fc-event-dot {\n\tbackground-color: #3a87ad; /* default BACKGROUND color */\n}\n\n/* overpower some of bootstrap's and jqui's styles on <a> tags */\n.fc-event,\n.fc-event:hover,\n.ui-widget .fc-event {\n\tcolor: #fff; /* default TEXT color */\n\ttext-decoration: none; /* if <a> has an href */\n}\n\n.fc-event[href],\n.fc-event.fc-draggable {\n\tcursor: pointer; /* give events with links and draggable events a hand mouse pointer */\n}\n\n.fc-not-allowed, /* causes a \"warning\" cursor. applied on body */\n.fc-not-allowed .fc-event { /* to override an event's custom cursor */\n\tcursor: not-allowed;\n}\n\n.fc-event .fc-bg { /* the generic .fc-bg already does position */\n\tz-index: 1;\n\tbackground: #fff;\n\topacity: .25;\n}\n\n.fc-event .fc-content {\n\tposition: relative;\n\tz-index: 2;\n}\n\n/* resizer (cursor AND touch devices) */\n\n.fc-event .fc-resizer {\n\tposition: absolute;\n\tz-index: 4;\n}\n\n/* resizer (touch devices) */\n\n.fc-event .fc-resizer {\n\tdisplay: none;\n}\n\n.fc-event.fc-allow-mouse-resize .fc-resizer,\n.fc-event.fc-selected .fc-resizer {\n\t/* only show when hovering or selected (with touch) */\n\tdisplay: block;\n}\n\n/* hit area */\n\n.fc-event.fc-selected .fc-resizer:before {\n\t/* 40x40 touch area */\n\tcontent: \"\";\n\tposition: absolute;\n\tz-index: 9999; /* user of this util can scope within a lower z-index */\n\ttop: 50%;\n\tleft: 50%;\n\twidth: 40px;\n\theight: 40px;\n\tmargin-left: -20px;\n\tmargin-top: -20px;\n}\n\n\n/* Event Selection (only for touch devices)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-event.fc-selected {\n\tz-index: 9999 !important; /* overcomes inline z-index */\n\tbox-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.fc-event.fc-selected.fc-dragging {\n\tbox-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n}\n\n\n/* Horizontal Events\n--------------------------------------------------------------------------------------------------*/\n\n/* bigger touch area when selected */\n.fc-h-event.fc-selected:before {\n\tcontent: \"\";\n\tposition: absolute;\n\tz-index: 3; /* below resizers */\n\ttop: -10px;\n\tbottom: -10px;\n\tleft: 0;\n\tright: 0;\n}\n\n/* events that are continuing to/from another week. kill rounded corners and butt up against edge */\n\n.fc-ltr .fc-h-event.fc-not-start,\n.fc-rtl .fc-h-event.fc-not-end {\n\tmargin-left: 0;\n\tborder-left-width: 0;\n\tpadding-left: 1px; /* replace the border with padding */\n\tborder-top-left-radius: 0;\n\tborder-bottom-left-radius: 0;\n}\n\n.fc-ltr .fc-h-event.fc-not-end,\n.fc-rtl .fc-h-event.fc-not-start {\n\tmargin-right: 0;\n\tborder-right-width: 0;\n\tpadding-right: 1px; /* replace the border with padding */\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n}\n\n/* resizer (cursor AND touch devices) */\n\n/* left resizer  */\n.fc-ltr .fc-h-event .fc-start-resizer,\n.fc-rtl .fc-h-event .fc-end-resizer {\n\tcursor: w-resize;\n\tleft: -1px; /* overcome border */\n}\n\n/* right resizer */\n.fc-ltr .fc-h-event .fc-end-resizer,\n.fc-rtl .fc-h-event .fc-start-resizer {\n\tcursor: e-resize;\n\tright: -1px; /* overcome border */\n}\n\n/* resizer (mouse devices) */\n\n.fc-h-event.fc-allow-mouse-resize .fc-resizer {\n\twidth: 7px;\n\ttop: -1px; /* overcome top border */\n\tbottom: -1px; /* overcome bottom border */\n}\n\n/* resizer (touch devices) */\n\n.fc-h-event.fc-selected .fc-resizer {\n\t/* 8x8 little dot */\n\tborder-radius: 4px;\n\tborder-width: 1px;\n\twidth: 6px;\n\theight: 6px;\n\tborder-style: solid;\n\tborder-color: inherit;\n\tbackground: #fff;\n\t/* vertically center */\n\ttop: 50%;\n\tmargin-top: -4px;\n}\n\n/* left resizer  */\n.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-end-resizer {\n\tmargin-left: -4px; /* centers the 8x8 dot on the left edge */\n}\n\n/* right resizer */\n.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-start-resizer {\n\tmargin-right: -4px; /* centers the 8x8 dot on the right edge */\n}\n\n\n/* DayGrid events\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-day-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n\n.fc-day-grid-event {\n\tmargin: 1px 2px 0; /* spacing between events and edges */\n\tpadding: 0 1px;\n}\n\ntr:first-child > td > .fc-day-grid-event {\n\tmargin-top: 2px; /* a little bit more space before the first event */\n}\n\n.fc-day-grid-event.fc-selected:after {\n\tcontent: \"\";\n\tposition: absolute;\n\tz-index: 1; /* same z-index as fc-bg, behind text */\n\t/* overcome the borders */\n\ttop: -1px;\n\tright: -1px;\n\tbottom: -1px;\n\tleft: -1px;\n\t/* darkening effect */\n\tbackground: #000;\n\topacity: .25;\n}\n\n.fc-day-grid-event .fc-content { /* force events to be one-line tall */\n\twhite-space: nowrap;\n\toverflow: hidden;\n}\n\n.fc-day-grid-event .fc-time {\n\tfont-weight: bold;\n}\n\n/* resizer (cursor devices) */\n\n/* left resizer  */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {\n\tmargin-left: -2px; /* to the day cell's edge */\n}\n\n/* right resizer */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {\n\tmargin-right: -2px; /* to the day cell's edge */\n}\n\n\n/* Event Limiting\n--------------------------------------------------------------------------------------------------*/\n\n/* \"more\" link that represents hidden events */\n\na.fc-more {\n\tmargin: 1px 3px;\n\tfont-size: .85em;\n\tcursor: pointer;\n\ttext-decoration: none;\n}\n\na.fc-more:hover {\n\ttext-decoration: underline;\n}\n\n.fc-limited { /* rows and cells that are hidden because of a \"more\" link */\n\tdisplay: none;\n}\n\n/* popover that appears when \"more\" link is clicked */\n\n.fc-day-grid .fc-row {\n\tz-index: 1; /* make the \"more\" popover one higher than this */\n}\n\n.fc-more-popover {\n\tz-index: 2;\n\twidth: 220px;\n}\n\n.fc-more-popover .fc-event-container {\n\tpadding: 10px;\n}\n\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n\n.fc-now-indicator {\n\tposition: absolute;\n\tborder: 0 solid red;\n}\n\n\n/* Utilities\n--------------------------------------------------------------------------------------------------*/\n\n.fc-unselectable {\n\t-webkit-user-select: none;\n\t -khtml-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n\t-webkit-touch-callout: none;\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n\n\n/* Toolbar\n--------------------------------------------------------------------------------------------------*/\n\n.fc-toolbar {\n\ttext-align: center;\n}\n\n.fc-toolbar.fc-header-toolbar {\n\tmargin-bottom: 1em;\n}\n\n.fc-toolbar.fc-footer-toolbar {\n\tmargin-top: 1em;\n}\n\n.fc-toolbar .fc-left {\n\tfloat: left;\n}\n\n.fc-toolbar .fc-right {\n\tfloat: right;\n}\n\n.fc-toolbar .fc-center {\n\tdisplay: inline-block;\n}\n\n/* the things within each left/right/center section */\n.fc .fc-toolbar > * > * { /* extra precedence to override button border margins */\n\tfloat: left;\n\tmargin-left: .75em;\n}\n\n/* the first thing within each left/center/right section */\n.fc .fc-toolbar > * > :first-child { /* extra precedence to override button border margins */\n\tmargin-left: 0;\n}\n\t\n/* title text */\n\n.fc-toolbar h2 {\n\tmargin: 0;\n}\n\n/* button layering (for border precedence) */\n\n.fc-toolbar button {\n\tposition: relative;\n}\n\n.fc-toolbar .fc-state-hover,\n.fc-toolbar .ui-state-hover {\n\tz-index: 2;\n}\n\t\n.fc-toolbar .fc-state-down {\n\tz-index: 3;\n}\n\n.fc-toolbar .fc-state-active,\n.fc-toolbar .ui-state-active {\n\tz-index: 4;\n}\n\n.fc-toolbar button:focus {\n\tz-index: 5;\n}\n\n\n/* View Structure\n--------------------------------------------------------------------------------------------------*/\n\n/* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */\n/* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */\n.fc-view-container *,\n.fc-view-container *:before,\n.fc-view-container *:after {\n\t-webkit-box-sizing: content-box;\n\t   -moz-box-sizing: content-box;\n\t        box-sizing: content-box;\n}\n\n.fc-view, /* scope positioning and z-index's for everything within the view */\n.fc-view > table { /* so dragged elements can be above the view's main element */\n\tposition: relative;\n\tz-index: 1;\n}\n\n\n\n/* BasicView\n--------------------------------------------------------------------------------------------------*/\n\n/* day row structure */\n\n.fc-basicWeek-view .fc-content-skeleton,\n.fc-basicDay-view .fc-content-skeleton {\n\t/* there may be week numbers in these views, so no padding-top */\n\tpadding-bottom: 1em; /* ensure a space at bottom of cell for user selecting/clicking */\n}\n\n.fc-basic-view .fc-body .fc-row {\n\tmin-height: 4em; /* ensure that all rows are at least this tall */\n}\n\n/* a \"rigid\" row will take up a constant amount of height because content-skeleton is absolute */\n\n.fc-row.fc-rigid {\n\toverflow: hidden;\n}\n\n.fc-row.fc-rigid .fc-content-skeleton {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n}\n\n/* week and day number styling */\n\n.fc-day-top.fc-other-month {\n\topacity: 0.3;\n}\n\n.fc-basic-view .fc-week-number,\n.fc-basic-view .fc-day-number {\n\tpadding: 2px;\n}\n\n.fc-basic-view th.fc-week-number,\n.fc-basic-view th.fc-day-number {\n\tpadding: 0 2px; /* column headers can't have as much v space */\n}\n\n.fc-ltr .fc-basic-view .fc-day-top .fc-day-number { float: right; }\n.fc-rtl .fc-basic-view .fc-day-top .fc-day-number { float: left; }\n\n.fc-ltr .fc-basic-view .fc-day-top .fc-week-number { float: left; border-radius: 0 0 3px 0; }\n.fc-rtl .fc-basic-view .fc-day-top .fc-week-number { float: right; border-radius: 0 0 0 3px; }\n\n.fc-basic-view .fc-day-top .fc-week-number {\n\tmin-width: 1.5em;\n\ttext-align: center;\n\tbackground-color: #f2f2f2;\n\tcolor: #808080;\n}\n\n/* when week/day number have own column */\n\n.fc-basic-view td.fc-week-number {\n\ttext-align: center;\n}\n\n.fc-basic-view td.fc-week-number > * {\n\t/* work around the way we do column resizing and ensure a minimum width */\n\tdisplay: inline-block;\n\tmin-width: 1.25em;\n}\n\n\n/* AgendaView all-day area\n--------------------------------------------------------------------------------------------------*/\n\n.fc-agenda-view .fc-day-grid {\n\tposition: relative;\n\tz-index: 2; /* so the \"more..\" popover will be over the time grid */\n}\n\n.fc-agenda-view .fc-day-grid .fc-row {\n\tmin-height: 3em; /* all-day section will never get shorter than this */\n}\n\n.fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton {\n\tpadding-bottom: 1em; /* give space underneath events for clicking/selecting days */\n}\n\n\n/* TimeGrid axis running down the side (for both the all-day area and the slot area)\n--------------------------------------------------------------------------------------------------*/\n\n.fc .fc-axis { /* .fc to overcome default cell styles */\n\tvertical-align: middle;\n\tpadding: 0 4px;\n\twhite-space: nowrap;\n}\n\n.fc-ltr .fc-axis {\n\ttext-align: right;\n}\n\n.fc-rtl .fc-axis {\n\ttext-align: left;\n}\n\n.ui-widget td.fc-axis {\n\tfont-weight: normal; /* overcome jqui theme making it bold */\n}\n\n\n/* TimeGrid Structure\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid-container, /* so scroll container's z-index is below all-day */\n.fc-time-grid { /* so slats/bg/content/etc positions get scoped within here */\n\tposition: relative;\n\tz-index: 1;\n}\n\n.fc-time-grid {\n\tmin-height: 100%; /* so if height setting is 'auto', .fc-bg stretches to fill height */\n}\n\n.fc-time-grid table { /* don't put outer borders on slats/bg/content/etc */\n\tborder: 0 hidden transparent;\n}\n\n.fc-time-grid > .fc-bg {\n\tz-index: 1;\n}\n\n.fc-time-grid .fc-slats,\n.fc-time-grid > hr { /* the <hr> AgendaView injects when grid is shorter than scroller */\n\tposition: relative;\n\tz-index: 2;\n}\n\n.fc-time-grid .fc-content-col {\n\tposition: relative; /* because now-indicator lives directly inside */\n}\n\n.fc-time-grid .fc-content-skeleton {\n\tposition: absolute;\n\tz-index: 3;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n}\n\n/* divs within a cell within the fc-content-skeleton */\n\n.fc-time-grid .fc-business-container {\n\tposition: relative;\n\tz-index: 1;\n}\n\n.fc-time-grid .fc-bgevent-container {\n\tposition: relative;\n\tz-index: 2;\n}\n\n.fc-time-grid .fc-highlight-container {\n\tposition: relative;\n\tz-index: 3;\n}\n\n.fc-time-grid .fc-event-container {\n\tposition: relative;\n\tz-index: 4;\n}\n\n.fc-time-grid .fc-now-indicator-line {\n\tz-index: 5;\n}\n\n.fc-time-grid .fc-helper-container { /* also is fc-event-container */\n\tposition: relative;\n\tz-index: 6;\n}\n\n\n/* TimeGrid Slats (lines that run horizontally)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid .fc-slats td {\n\theight: 1.5em;\n\tborder-bottom: 0; /* each cell is responsible for its top border */\n}\n\n.fc-time-grid .fc-slats .fc-minor td {\n\tborder-top-style: dotted;\n}\n\n.fc-time-grid .fc-slats .ui-widget-content { /* for jqui theme */\n\tbackground: none; /* see through to fc-bg */\n}\n\n\n/* TimeGrid Highlighting Slots\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid .fc-highlight-container { /* a div within a cell within the fc-highlight-skeleton */\n\tposition: relative; /* scopes the left/right of the fc-highlight to be in the column */\n}\n\n.fc-time-grid .fc-highlight {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\t/* top and bottom will be in by JS */\n}\n\n\n/* TimeGrid Event Containment\n--------------------------------------------------------------------------------------------------*/\n\n.fc-ltr .fc-time-grid .fc-event-container { /* space on the sides of events for LTR (default) */\n\tmargin: 0 2.5% 0 2px;\n}\n\n.fc-rtl .fc-time-grid .fc-event-container { /* space on the sides of events for RTL */\n\tmargin: 0 2px 0 2.5%;\n}\n\n.fc-time-grid .fc-event,\n.fc-time-grid .fc-bgevent {\n\tposition: absolute;\n\tz-index: 1; /* scope inner z-index's */\n}\n\n.fc-time-grid .fc-bgevent {\n\t/* background events always span full width */\n\tleft: 0;\n\tright: 0;\n}\n\n\n/* Generic Vertical Event\n--------------------------------------------------------------------------------------------------*/\n\n.fc-v-event.fc-not-start { /* events that are continuing from another day */\n\t/* replace space made by the top border with padding */\n\tborder-top-width: 0;\n\tpadding-top: 1px;\n\n\t/* remove top rounded corners */\n\tborder-top-left-radius: 0;\n\tborder-top-right-radius: 0;\n}\n\n.fc-v-event.fc-not-end {\n\t/* replace space made by the top border with padding */\n\tborder-bottom-width: 0;\n\tpadding-bottom: 1px;\n\n\t/* remove bottom rounded corners */\n\tborder-bottom-left-radius: 0;\n\tborder-bottom-right-radius: 0;\n}\n\n\n/* TimeGrid Event Styling\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-time-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n\n.fc-time-grid-event {\n\toverflow: hidden; /* don't let the bg flow over rounded corners */\n}\n\n.fc-time-grid-event.fc-selected {\n\t/* need to allow touch resizers to extend outside event's bounding box */\n\t/* common fc-selected styles hide the fc-bg, so don't need this anyway */\n\toverflow: visible;\n}\n\n.fc-time-grid-event.fc-selected .fc-bg {\n\tdisplay: none; /* hide semi-white background, to appear darker */\n}\n\n.fc-time-grid-event .fc-content {\n\toverflow: hidden; /* for when .fc-selected */\n}\n\n.fc-time-grid-event .fc-time,\n.fc-time-grid-event .fc-title {\n\tpadding: 0 1px;\n}\n\n.fc-time-grid-event .fc-time {\n\tfont-size: .85em;\n\twhite-space: nowrap;\n}\n\n/* short mode, where time and title are on the same line */\n\n.fc-time-grid-event.fc-short .fc-content {\n\t/* don't wrap to second line (now that contents will be inline) */\n\twhite-space: nowrap;\n}\n\n.fc-time-grid-event.fc-short .fc-time,\n.fc-time-grid-event.fc-short .fc-title {\n\t/* put the time and title on the same line */\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n\n.fc-time-grid-event.fc-short .fc-time span {\n\tdisplay: none; /* don't display the full time text... */\n}\n\n.fc-time-grid-event.fc-short .fc-time:before {\n\tcontent: attr(data-start); /* ...instead, display only the start time */\n}\n\n.fc-time-grid-event.fc-short .fc-time:after {\n\tcontent: \"\\000A0-\\000A0\"; /* seperate with a dash, wrapped in nbsp's */\n}\n\n.fc-time-grid-event.fc-short .fc-title {\n\tfont-size: .85em; /* make the title text the same size as the time */\n\tpadding: 0; /* undo padding from above */\n}\n\n/* resizer (cursor device) */\n\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer {\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\theight: 8px;\n\toverflow: hidden;\n\tline-height: 8px;\n\tfont-size: 11px;\n\tfont-family: monospace;\n\ttext-align: center;\n\tcursor: s-resize;\n}\n\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer:after {\n\tcontent: \"=\";\n}\n\n/* resizer (touch device) */\n\n.fc-time-grid-event.fc-selected .fc-resizer {\n\t/* 10x10 dot */\n\tborder-radius: 5px;\n\tborder-width: 1px;\n\twidth: 8px;\n\theight: 8px;\n\tborder-style: solid;\n\tborder-color: inherit;\n\tbackground: #fff;\n\t/* horizontally center */\n\tleft: 50%;\n\tmargin-left: -5px;\n\t/* center on the bottom edge */\n\tbottom: -5px;\n}\n\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid .fc-now-indicator-line {\n\tborder-top-width: 1px;\n\tleft: 0;\n\tright: 0;\n}\n\n/* arrow on axis */\n\n.fc-time-grid .fc-now-indicator-arrow {\n\tmargin-top: -5px; /* vertically center on top coordinate */\n}\n\n.fc-ltr .fc-time-grid .fc-now-indicator-arrow {\n\tleft: 0;\n\t/* triangle pointing right... */\n\tborder-width: 5px 0 5px 6px;\n\tborder-top-color: transparent;\n\tborder-bottom-color: transparent;\n}\n\n.fc-rtl .fc-time-grid .fc-now-indicator-arrow {\n\tright: 0;\n\t/* triangle pointing left... */\n\tborder-width: 5px 6px 5px 0;\n\tborder-top-color: transparent;\n\tborder-bottom-color: transparent;\n}\n\n\n\n/* List View\n--------------------------------------------------------------------------------------------------*/\n\n/* possibly reusable */\n\n.fc-event-dot {\n\tdisplay: inline-block;\n\twidth: 10px;\n\theight: 10px;\n\tborder-radius: 5px;\n}\n\n/* view wrapper */\n\n.fc-rtl .fc-list-view {\n\tdirection: rtl; /* unlike core views, leverage browser RTL */\n}\n\n.fc-list-view {\n\tborder-width: 1px;\n\tborder-style: solid;\n}\n\n/* table resets */\n\n.fc .fc-list-table {\n\ttable-layout: auto; /* for shrinkwrapping cell content */\n}\n\n.fc-list-table td {\n\tborder-width: 1px 0 0;\n\tpadding: 8px 14px;\n}\n\n.fc-list-table tr:first-child td {\n\tborder-top-width: 0;\n}\n\n/* day headings with the list */\n\n.fc-list-heading {\n\tborder-bottom-width: 1px;\n}\n\n.fc-list-heading td {\n\tfont-weight: bold;\n}\n\n.fc-ltr .fc-list-heading-main { float: left; }\n.fc-ltr .fc-list-heading-alt { float: right; }\n\n.fc-rtl .fc-list-heading-main { float: right; }\n.fc-rtl .fc-list-heading-alt { float: left; }\n\n/* event list items */\n\n.fc-list-item.fc-has-url {\n\tcursor: pointer; /* whole row will be clickable */\n}\n\n.fc-list-item:hover td {\n\tbackground-color: #f5f5f5;\n}\n\n.fc-list-item-marker,\n.fc-list-item-time {\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n/* make the dot closer to the event title */\n.fc-ltr .fc-list-item-marker { padding-right: 0; }\n.fc-rtl .fc-list-item-marker { padding-left: 0; }\n\n.fc-list-item-title a {\n\t/* every event title cell has an <a> tag */\n\ttext-decoration: none;\n\tcolor: inherit;\n}\n\n.fc-list-item-title a[href]:hover {\n\t/* hover effect only on titles with hrefs */\n\ttext-decoration: underline;\n}\n\n/* message when no events */\n\n.fc-list-empty-wrap2 {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n}\n\n.fc-list-empty-wrap1 {\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: table;\n}\n\n.fc-list-empty {\n\tdisplay: table-cell;\n\tvertical-align: middle;\n\ttext-align: center;\n}\n\n.fc-unthemed .fc-list-empty { /* theme will provide own background */\n\tbackground-color: #eee;\n}\n"; });
define('resources',['exports', 'aurelia-framework', './resources/data/files'], function (exports, _aureliaFramework, _files) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Resources = undefined;

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Resources = exports.Resources = (_dec = (0, _aureliaFramework.inject)(_files.Files), _dec(_class = function () {
        function Resources(filesModule) {
            _classCallCheck(this, Resources);

            this.filesModule = filesModule;
        }

        Resources.prototype.activate = function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var _this = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.imageArray = [];
                                this.notesArray = [];
                                this.reviewsArray = [];
                                this.quizArray = [];
                                this.keyArray = [];
                                _context.next = 7;
                                return this.filesModule.getDocumentsArray();

                            case 7:
                                this.filesModule.documentsArray.forEach(function (item) {
                                    switch (item.type) {
                                        case 'IMAGE':
                                            _this.imageArray.push(item);
                                            break;
                                        case 'NOTES':
                                            _this.notesArray.push(item);
                                            break;
                                        case 'REVIEW':
                                            _this.reviewsArray.push(item);
                                            break;
                                        case 'QUIZ':
                                            _this.quizArray.push(item);
                                            break;
                                        case 'KEY':
                                            _this.keyArray.push(item);
                                            break;
                                    }
                                });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function activate() {
                return _ref.apply(this, arguments);
            }

            return activate;
        }();

        return Resources;
    }()) || _class);
});
define('text!resources.html', ['module'], function(module) { module.exports = "<template>\r\n    <style>\r\n        ul li{ /* second well;*/\r\n            list-style-type:none;\r\n        }\r\n    </style>\r\n    \r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h2 show.bind=\"reviewsArray.length\" style=\"margin-top:40px;\">Review</h2>\r\n                    <ul show.bind=\"reviewsArray.length\"  class=\"list-group\">\r\n                        <li repeat.for=\"file of reviewsArray\" >\r\n                            <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                        </li>\r\n                    </ul>\r\n                <h2 show.bind=\"imageArray.length\" style=\"margin-top:40px;\">Images</h2>\r\n                    <ul show.bind=\"imageArray.length\" class=\"list-group\">\r\n                        <li repeat.for=\"file of imageArray\" >\r\n                            <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                        </li>\r\n                    </ul>\r\n                <h2 show.bind=\"notesArray.length\" style=\"margin-top:40px;\">Notes</h2>\r\n                    <ul show.bind=\"notesArray.length\" class=\"list-group\">\r\n                        <li repeat.for=\"file of notesArray\" >\r\n                            <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                        </li>\r\n                    </ul>\r\n            </div>\r\n            <div class=\"col\">\r\n                <h2 show.bind=\"quizArray.length\" style=\"margin-top:40px;\">Quizzes</h2>\r\n                    <ul show.bind=\"quizArray.length\" class=\"list-group\">\r\n                        <li repeat.for=\"file of quizArray\" >\r\n                            <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                        </li>\r\n                    </ul>\r\n                <h2 show.bind=\"keyArray.length\" style=\"margin-top:40px;\">Quizz Keys</h2>\r\n                    <ul show.bind=\"keyArray.length\" class=\"list-group\">\r\n                        <li repeat.for=\"file of keyArray\" >\r\n                            <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n    </div>\r\n</template>"; });
define('quizzes',['exports', 'aurelia-framework', './resources/data/files'], function (exports, _aureliaFramework, _files) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Quizzes = undefined;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Quizzes = exports.Quizzes = (_dec = (0, _aureliaFramework.inject)(_files.Files), _dec(_class = function () {
    function Quizzes(filesModule) {
      _classCallCheck(this, Quizzes);

      this.filesModule = filesModule;
    }

    Quizzes.prototype.activate = function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.quizArray = [];
                this.keyArray = [];
                this.filesModule.selectFile();
                _context.next = 5;
                return this.filesModule.getDocsByType("QUIZ");

              case 5:
                this.filesModule.filteredList.forEach(function (item) {
                  _this.quizArray.push(item);
                });
                _context.next = 8;
                return this.filesModule.getDocsByType("KEY");

              case 8:
                this.filesModule.filteredList.forEach(function (item) {
                  _this.keyArray.push(item);
                });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function activate() {
        return _ref.apply(this, arguments);
      }

      return activate;
    }();

    return Quizzes;
  }()) || _class);
});
define('text!quizzes.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container\">\r\n        <h2 style=\"margin-top:40px;\">Quizzes</h2>\r\n            <ul class=\"list-group\">\r\n                <li repeat.for=\"file of quizArray\" class=\"list-group-item\">\r\n                    <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n                </li>\r\n            </ul>\r\n        <h2 style=\"margin-top:40px;\">Quiz Keys</h2>\r\n        <ul class=\"list-group\">\r\n            <li repeat.for=\"file of keyArray\" class=\"list-group-item\">\r\n                <a href=\"/uploads/${file.type}/${file.file.fileName}\" target=\"_blank\">${file.name}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</template>"; });
define('quizTool',['exports', 'aurelia-framework', './resources/data/files'], function (exports, _aureliaFramework, _files) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.QuizTool = undefined;

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var QuizTool = exports.QuizTool = (_dec = (0, _aureliaFramework.inject)(_files.Files), _dec(_class = function () {
        function QuizTool(filesModule) {
            _classCallCheck(this, QuizTool);

            this.showQuestions = true;
            this.questionIndex = 0;

            this.filesModule = filesModule;
        }

        QuizTool.prototype.activate = function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.filesModule.getQuizArray();

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function activate() {
                return _ref.apply(this, arguments);
            }

            return activate;
        }();

        QuizTool.prototype.selectQuiz = function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.filesModule.getQuestionArray(this.selectedUnit);

                            case 2:
                                this.currentFlash = this.filesModule.questionArray[0].flash;
                                this.currentCard = "";

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function selectQuiz() {
                return _ref2.apply(this, arguments);
            }

            return selectQuiz;
        }();

        QuizTool.prototype.previous = function previous() {
            this.questionIndex = this.questionIndex > 0 ? this.questionIndex - 1 : 0;
            this.currentFlash = this.filesModule.questionArray[this.questionIndex].flash;
            this.showCard = false;
        };

        QuizTool.prototype.next = function next() {
            this.questionIndex = this.questionIndex < this.filesModule.questionArray.length - 1 ? this.questionIndex + 1 : this.filesModule.questionArray.length - 1;
            this.currentFlash = this.filesModule.questionArray[this.questionIndex].flash;
            this.showCard = false;
        };

        QuizTool.prototype.showFlashAnswer = function showFlashAnswer() {
            this.currentCard = this.filesModule.questionArray[this.questionIndex].card;
            this.showCard = true;
        };

        return QuizTool;
    }()) || _class);
});
define('text!quizTool.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"row\">\r\n        <div class=\"col col-lg-3\" style=\"margin-top:20px;\">\r\n            <h3>Unit</h3>\r\n            <select value.bind=\"selectedUnit\" class=\"form-control\" change.trigger=\"selectQuiz()\">\r\n                <option value=\"\"></option>\r\n                <option repeat.for=\"unit of filesModule.quizzesArray\" value=\"${unit._id}\">${unit.name}</option>\r\n            </select>\r\n        </div>\r\n        <div show.bind=\"selectedUnit !== ''\" class=\"col col-lg-8\" style=\"margin-top:20px;\">\r\n\r\n            <div class=\"btn-group\" role=\"group\">\r\n                <Button class=\"btn btn-primary\" click.trigger=\"previous()\" disable.bind=\"questionIndex == 0\">Previous</Button>\r\n                <Button style=\"margin-left:10px;\" class=\"btn btn-primary\" click.trigger=\"next()\" disable.bind=\"questionIndex == filesModule.questionArray.length - 1\">Next</Button>\r\n                <Button style=\"margin-left:10px;\" class=\"btn btn-primary\" click.trigger=\"showFlashAnswer()\">Show Answer</Button>\r\n            </div>\r\n            <div class=\"float-right\"> \r\n                <span>${questionIndex + 1} of ${filesModule.questionArray.length}</span>\r\n            </div>\r\n            <div class=\"card\" style=\"margin-top:20px;\">\r\n                <div class=\"card-body\">\r\n                    <div innerhtml.bind=\"currentFlash\" ></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card  bg-light \" style=\"margin-top:20px;\"  show.bind=\"showCard\">\r\n                <div class=\"card-body\">\r\n                    <div innerhtml.bind=\"currentCard\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('mainPage',["exports", "aurelia-framework", "aurelia-router"], function (exports, _aureliaFramework, _aureliaRouter) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.MainPage = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var MainPage = exports.MainPage = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
        function MainPage(router) {
            _classCallCheck(this, MainPage);

            this.title = "Terp10";

            this.router = router;
            this.user = JSON.parse(sessionStorage.getItem('user'));
        }

        MainPage.prototype.configureRouter = function configureRouter(config, router) {
            config.map([{ route: ['home', ''], name: 'home', moduleId: 'home' }, { route: 'Schedule', name: 'schedule', moduleId: 'schedule', nav: true, title: 'Schedule', settings: { auth: true, roles: 'user' } }, { route: 'Resources', name: 'resources', moduleId: 'resources', nav: true, title: 'Resources', settings: { auth: true, roles: 'user' } }, { route: 'Videos', name: 'videos', moduleId: 'videos', nav: true, title: 'Videos', settings: { auth: true, roles: 'user' } }, { route: 'QuizTool', name: 'quiz', moduleId: 'quizTool', nav: true, title: 'Quiz Tool', settings: { auth: true, roles: 'user' } }, { route: 'Admin', name: 'admin', moduleId: 'admin', nav: true, title: 'Admin', settings: { auth: true, roles: 'admin' } }, { route: 'login', name: 'login', moduleId: './login' }]);

            this.router = router;
        };

        MainPage.prototype.logout = function logout() {
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('role');
            this.router.navigate("login");
        };

        MainPage.prototype.goAdmin = function goAdmin() {
            this.router.navigate("admin");
        };

        return MainPage;
    }()) || _class);
});
define('text!mainPage.html', ['module'], function(module) { module.exports = "<template>\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n        <a class=\"navbar-brand\" href=\"home#/mainPage\">TERP10</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n            <ul class=\"navbar-nav\" repeat.for=\"nav of router.navigation\">\r\n                <li if.bind=\"nav.settings.roles === user.role || user.role === 'admin'\" class=\"nav-item ${nav.isActive ? 'active' : ''}\">\r\n                <a class=\"nav-link\" href.bind=\"nav.href\">${nav.title}</a></li>\r\n            </ul>\r\n            <form class=\"form-inline my-2 my-lg-0 ml-auto\">\r\n                <a click.trigger=\"logout()\" class=\"nav-link\" href=\"#\">Logout</a></li>\r\n            </form>\r\n        </div>\r\n    </nav>\r\n    <div class=\"col-lg-12\">\r\n        <router-view></router-view>\r\n    </div>\r\n</template>"; });
define('main',['exports', './environment', 'regenerator-runtime'], function (exports, _environment, _regeneratorRuntime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  window.regeneratorRuntime = _regeneratorRuntime2.default;

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('login',["exports", "aurelia-framework", "aurelia-router", "./resources/data/auth"], function (exports, _aureliaFramework, _aureliaRouter, _auth) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Login = undefined;

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Login = exports.Login = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router, _auth.Auth), _dec(_class = function () {
        function Login(router, auth) {
            _classCallCheck(this, Login);

            this.username = "";
            this.password = "";

            this.router = router;
            this.auth = auth;
        }

        Login.prototype.login = function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.auth.login(this.username, this.password);

                            case 2:
                                response = _context.sent;

                                if (!response.error) {
                                    this.loginError = "";
                                    this.loginSuccess();
                                    this.isAuthenticated = this.auth.isAuthenticated();
                                } else {
                                    this.loginError = "Invalid credentials.";
                                }

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function login() {
                return _ref.apply(this, arguments);
            }

            return login;
        }();

        Login.prototype.logout = function logout() {
            if (this.userObj) this.auth.logout(this.userObj.email);
            this.userObj = new Object();
            this.isAuthenticated = this.auth.isAuthenticated();
            this.router.navigate("home");
        };

        Login.prototype.loginSuccess = function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.userObj = JSON.parse(sessionStorage.getItem('user'));
                                if (this.userObj) {
                                    if (!this.userObj.userRole) this.logout();
                                    sessionStorage.setItem('role', this.userObj.userRole);
                                    this.router.navigate("mainPage");
                                } else {
                                    this.utils.showNotification("There was a problem validating your account");
                                    this.router.navigate("login");
                                }

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function loginSuccess() {
                return _ref2.apply(this, arguments);
            }

            return loginSuccess;
        }();

        return Login;
    }()) || _class);
});
define('text!login.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-4 text-center\">\r\n                <div class=\"card\" style=\"margin-top:100px;\">\r\n                    <div class=\"card-body\">\r\n                        <form class=\"form-signin\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"inputEmail\" >Username</label>\r\n                                <input value.bind=\"username\" type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Username\" required autofocus />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"inputPassword\"  style=\"margin-top:20px;\">Password</label>\r\n                                <input value.bind=\"password\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required  />\r\n                            </div>\r\n                            <button click.trigger=\"login()\" class=\"btn btn-lg btn-primary btn-block\">Submit</button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('home',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Home = exports.Home = function Home() {
		_classCallCheck(this, Home);
	};
});
define('text!home.html', ['module'], function(module) { module.exports = "<template>\n\t<div class=\"container\">\n\t\t<div style=\"display:block;text-align:left\">\n\t\t\t<h1>\n\t\t\t\tExam Content\n\t\t\t</h1>\n\t\t\t<p>\n\t\t\t\tThis course is designed to prepare you for the&nbsp;\n\t\t\t\t\t<a href=\"https://training.sap.com/shop/certification/c_terp10_67-sap-certified-application-associate---business-process-integration-with-sap-erp-60-ehp7-g/\"\n\t\t\t\t\t target=\"_blank\">C_TERP10_67</a>&nbsp;certification exam. &nbsp;The TERP10 certification is SAP's associate (entry level) certification\n\t\t\t\t\tfor ERP. &nbsp;The training class for the certification is normally 9 days, 8 hours/day and the exam is on the 10th\n\t\t\t\t\tday. &nbsp;Thus the name:&nbsp;Training for&nbsp;ERP&nbsp;for&nbsp;10&nbsp;days. &nbsp;\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tThere are many certifications in the IT field, some more well regarded than others. The TERP10 is a very well regarded\n\t\t\t\t\t\tprimarily because it is not easy to get. &nbsp;You can see from the size of the book that there is a lot of material.\n\t\t\t\t\t\t&nbsp;In addition, the exam is difficult. &nbsp;You are expected to know the material in detail to pass the exam. &nbsp;So\n\t\t\t\t\t\tthere is good news and bad news. &nbsp;The bad news is that you will have to dedicate yourself to this course to pass\n\t\t\t\t\t\tthe exam. &nbsp;Students who take the face-to-face training course describe the experience as very intense. &nbsp;I've\n\t\t\t\t\t\twitnessed very emotional responses when students submit their exam to be graded. &nbsp;The good news is that, as a\n\t\t\t\t\t\tdirect result of this difficulty, the TERP10 certification has real value. &nbsp;Not only will you receive a solid\n\t\t\t\t\t\tfoundation for a career working with ERP systems, employers who understand what the TERP10 is will value your accomplishment.\n\t\t\t\t\t\t&nbsp;In my opinion, this class is unlike typical university courses and passing the certification is a more difficulty\n\t\t\t\t\t\taccomplishment than getting an A in a typical course.\n\n\t\t\t</p>\n\t\t\t<h3>\n\t\t\t\tExam Format\n\t\t\t</h3>\n\t\t\t<p>The exam consists of 80 multiple choice questions over 3 hours. Many of the questions are difficult and may require multiple\n\t\t\t\tanswers. You are told how may answers are required but the grading is all-or-nothing. You cannot get partial credit.\n\t\t\t\tThis means you must go beyond general familiarity with the material.&nbsp; You have to really know it.&nbsp; The passing\n\t\t\t\tgrade is 59% the last time we taught the course but it may change. </p>\n\t\t\t<br>\n\t\t\t<h3>Preparing for the Exam</h3>\n\t\t\t\t<p>Don't be fooled by the low passing grade, the exam is very difficult and the pass rate is relatively low. In order to pass, you must commit yourself to preparing for the exam over the next two weeks. In our experience, if you have a part-time job or any other outside commitments, you will find it very difficult to pass. You should study at least 3 hours each day after class. The following guidelines might help:\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Use multiple modes of study (read the book, use the diagrams, read SAP Help, quiz yourself and your classmates, do the hands-on exercises, etc.).</li>\n\t\t\t\t\t<li>It's very beneficial to study in groups and quiz each other.</li>\n\t\t\t\t\t<li>When you do the hands-on exercises, keep the process diagram handy and try to link each step to the conceptual material. This gives you a visual anchor.</li>\n\t\t\t\t\t<li>Study every day. The material comes at you fast and there is new material everyday do don't think you can take it easy at the beginning.</li>\n\t\t\t\t\t<li>Quiz yourself and quiz your class mates.  It's the only way to know whether you really know the material.</li>\n\t\t\t\t\t<li>Take advantage of the weekend to catch up and solidify what you covered the previous week.  How well you do often depends on how well you use the weekend.</li>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</template>"; });
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('text!editQuiz.html', ['module'], function(module) { module.exports = "<template>\r\n    <div show.bind=\"tool === 'quizDiv'\">\r\n\t\t<div class=\"row\" style=\"margin-top:40px;margin-left:20px;\">\r\n            \r\n\t\t\t<div class=\"col col-lg-3\">\r\n\t\t\t\t<h3>Units</h3>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" value.bind=\"filesModule.selectedQuiz.name\" placeholder=\"Name\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<Button class=\"form-control\" click.trigger=\"saveQuiz()\">Save</Button>\r\n                </div>\r\n               \r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li style=\"background-color:${quiz._id === filesModule.selectedQuiz._id ? 'cyan' : 'white'}\" repeat.for=\"quiz of filesModule.quizzesArray\" click.trigger=\"selectQuiz(quiz)\" class=\"list-group-item\">${quiz.name}<span click.delegate=\"removeQuiz(quiz)\" class=\"pull-right\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span></li>\r\n                </ul>\r\n                 \r\n            </div>\r\n     \r\n\t\t\t<div show.bind=\"filesModule.selectedQuiz._id\">\r\n\t\t\t\t<div style=\"margin-bottom: 20px;\">\r\n\t\t\t\t\t<button class=\"btn btn-primary\" click.trigger=\"toggleQuestions()\">Edit/New</button>\r\n\t\t\t\t\t<button show.bind=\"!showQuestions\" class=\"btn btn-primary\" click.trigger=\"saveQuestion()\">Save</button>\r\n\t\t\t\t\t<button show.bind=\"showQuestions\" class=\"btn btn-primary\" click.trigger=\"deleteQuestion()\">Delete</button>\r\n\t\t\t\t\t<div class=\"row float-right\" show.bind=\"showQuestions\">\r\n\t\t\t\t\t\t<button disable.bind=\"qustionIndex === 0\" class=\"btn btn-primary\" click.trigger=\"nextQuestion(-1)\">Previous</button>\r\n\t\t\t\t\t\t<button style=\"margin-left:10px;\" disable.bind=\"questionIndex === filesModule.questionArray.length - 1\" class=\"btn btn-primary\" click.trigger=\"nextQuestion(1)\">Next</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<editor  toolbar.bind=\"toolbar\" value.bind=\"filesModule.selectedQuestion.flash\" height=\"250\"></editor>\r\n\t\t\t\t\t<div style=\"margin-top:20px;\">\r\n\t\t\t\t\t\t<editor css=\"margin-top:20px;\" toolbar.bind=\"toolbar\" value.bind=\"filesModule.selectedQuestion.card\" height=\"250\"></editor>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</template>"; });
define('text!editFile.html', ['module'], function(module) { module.exports = "<template>\r\n    <div show.bind=\"tool === 'filesDiv'\">\r\n\t\t<h1>Administration</h1>\r\n\t\t<div class=\"row\" style=\"margin-left:20px;\">\r\n\t\t\t<div class=\"col col-lg-3\">\r\n\t\t\t\t<h3>Files</h3>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" value.bind=\"filesModule.selectedFile.name\" placeholder=\"Name\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<select value.bind=\"filesModule.selectedFile.type\" class=\"form-control\">\r\n\t\t\t\t\t\t<option value=\"QUIZ\">Quiz</option>\r\n\t\t\t\t\t\t<option value=\"KEY\">Quiz Key</option>\r\n\t\t\t\t\t\t<option value=\"IMAGE\">Image</option>\r\n\t\t\t\t\t\t<option value=\"NOTES\">PowerPoint</option>\r\n\t\t\t\t\t\t<option value=\"REVIEW\">Review</option>\r\n\t\t\t\t\t\t<option value=\"VIDEO\">Videos</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t<label class=\"btn btn-primary\">\r\n\t\t\t\t\t\t\tBrowse for files&hellip; <input type=\"file\" style=\"display: none;\" change.delegate=\"changeFiles()\" files.bind=\"files\">\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<li show.bind=\"filesToUpload && filesToUpload[0]\" class=\"list-group-item\">${filesToUpload[0].name}<span click.delegate=\"removeFile(0)\" class=\"pull-right\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span></li>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<Button class=\"form-control\" click.trigger=\"save()\">Save</Button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col col-lg-9\">\r\n\t\t\t\t<div class=\"form-group col-lg-3\">\r\n\t\t\t\t\t<select value.bind=\"selectedType\" class=\"form-control\" change.trigger=\"filterList()\">\r\n\t\t\t\t\t\t<option value=\"\"></option>\t\t\t\t\t\r\n\t\t\t\t\t\t<option value=\"QUIZ\">Quiz</option>\r\n\t\t\t\t\t\t<option value=\"KEY\">Quiz Key</option>\r\n\t\t\t\t\t\t<option value=\"IMAGE\">Image</option>\r\n\t\t\t\t\t\t<option value=\"NOTES\">PowerPoint</option>\r\n\t\t\t\t\t\t<option value=\"REVIEW\">Review</option>\r\n\t\t\t\t\t\t<option value=\"VIDEO\">Videos</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\"  style=\"margin-left:20px;\">\r\n\t\t\t\t\t<div class=\"col col-lg-6\">\r\n\t\t\t\t\t\t<li repeat.for=\"doc of filesModule.filteredList\" click.trigger=\"selectDoc(doc)\" class=\"list-group-item\">${doc.name}</li>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div show.bind=\"filesModule.selectedFile && filesModule.selectedFile.name && docSelected\" class=\"col col-lg-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" value.bind=\"filesModule.selectedFile.name\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<select value.bind=\"filesModule.selectedFile.type\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option value =\"QUIZ\">Quiz</option>\r\n\t\t\t\t\t\t\t\t<option value=\"KEY\">Quiz Key</option>\r\n\t\t\t\t\t\t\t\t<option value=\"IMAGE\">Image</option>\r\n\t\t\t\t\t\t\t\t<option value=\"NOTES\">PowerPoint</option>\r\n\t\t\t\t\t\t\t\t<option value=\"REVIEW\">Review</option>\r\n\t\t\t\t\t\t\t\t<option value=\"VIDEO\">Videos</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<a href=\"/uploads/${filesModule.selectedFile.type}/${filesModule.selectedFile.file.fileName}\" target=\"_blank\">${filesModule.selectedFile.file.fileName}</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t<label class=\"btn btn-primary\">\r\n\t\t\t\t\t\t\t\t\tBrowse for files&hellip; <input type=\"file\" style=\"display: none;\" change.delegate=\"changeFiles()\" files.bind=\"files\">\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<li show.bind=\"filesToUpload && filesToUpload[0]\" class=\"list-group-item\">${filesToUpload[0].name}<span click.delegate=\"removeFile(0)\" class=\"pull-right\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span></li>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<Button class=\"form-control\" click.trigger=\"save()\">Save</Button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<Button class=\"form-control\" click.trigger=\"removeDocument()\">Delete</Button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>"; });
define('app',['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.App = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
        function App(router) {
            _classCallCheck(this, App);

            this.router = router;
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
            config.addAuthorizeStep(AuthorizeStep);
            config.map([{ route: ['login', ''], name: 'login', moduleId: './login' }, { route: 'mainPage', name: 'mainPage', moduleId: './mainPage', settings: { auth: true, roles: 'user' } }]);

            this.router = router;
        };

        return App;
    }()) || _class);

    var AuthorizeStep = function () {
        function AuthorizeStep() {
            _classCallCheck(this, AuthorizeStep);
        }

        AuthorizeStep.prototype.run = function run(navigationInstruction, next) {
            if (navigationInstruction.getAllInstructions().some(function (i) {
                return i.config.settings.auth;
            })) {
                var role = sessionStorage.getItem('role');
                var requiredRoles = navigationInstruction.getAllInstructions()[0].config.settings.roles;

                if (!role) {
                    return next.cancel(new _aureliaRouter.Redirect('login'));
                } else if (requiredRoles !== role && role !== 'admin') {
                    return next.cancel();
                }
            }
            return next();
        };

        return AuthorizeStep;
    }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>\n"; });
define('admin',['exports', 'aurelia-framework', './resources/data/files'], function (exports, _aureliaFramework, _files) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Admin = undefined;

	function _asyncToGenerator(fn) {
		return function () {
			var gen = fn.apply(this, arguments);
			return new Promise(function (resolve, reject) {
				function step(key, arg) {
					try {
						var info = gen[key](arg);
						var value = info.value;
					} catch (error) {
						reject(error);
						return;
					}

					if (info.done) {
						resolve(value);
					} else {
						return Promise.resolve(value).then(function (value) {
							step("next", value);
						}, function (err) {
							step("throw", err);
						});
					}
				}

				return step("next");
			});
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var Admin = exports.Admin = (_dec = (0, _aureliaFramework.inject)(_files.Files), _dec(_class = function () {
		function Admin(filesModule) {
			_classCallCheck(this, Admin);

			this.files = [];
			this.docSelected = false;
			this.answer = "";
			this.right = false;
			this.toolbar = [['style', ['style', 'bold', 'italic', 'underline', 'clear']], ['color', ['color']], ['font', ['strikethrough', 'superscript', 'subscript']], ['layout', ['ul', 'ol', 'paragraph']], ['insert', ['link', 'table', 'hello']], ['misc', ['undo', 'redo', 'fullscreen', 'codeview']]];
			this.tool = 'quizDiv';
			this.showQuestions = true;
			this.questionIndex = 0;

			this.filesModule = filesModule;
			this.selectedType = "";
		}

		Admin.prototype.activate = function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								this.filesModule.selectFile();
								_context.next = 3;
								return this.filesModule.getDocumentsArray();

							case 3:
								_context.next = 5;
								return this.filesModule.getQuizArray();

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function activate() {
				return _ref.apply(this, arguments);
			}

			return activate;
		}();

		Admin.prototype.changeFiles = function changeFiles() {
			this.filesToUpload = new Array();
			this.filesToUpload.push(this.files[0]);
			this.filesModule.selectedFile.file.fileName = this.filesToUpload[0].name;
		};

		Admin.prototype.removeFile = function removeFile(index) {
			this.filesToUpload.splice(index, 1);
		};

		Admin.prototype.save = function () {
			var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (!this.filesModule.selectedFile.name) {
									_context2.next = 9;
									break;
								}

								_context2.next = 3;
								return this.filesModule.saveFile();

							case 3:
								this.docSelected = false;
								this.filesModule.selectFile();

								if (!(this.filesToUpload && this.filesToUpload.length)) {
									_context2.next = 8;
									break;
								}

								_context2.next = 8;
								return this.filesModule.uploadFile(this.filesToUpload);

							case 8:
								this.filesToUpload = [];

							case 9:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function save() {
				return _ref2.apply(this, arguments);
			}

			return save;
		}();

		Admin.prototype.filterList = function filterList() {
			this.filesModule.getDocsByType(this.selectedType);
		};

		Admin.prototype.selectDoc = function selectDoc(doc) {
			this.filesModule.selectFile();
			this.filesModule.setDoc(doc);
			this.docSelected = true;
		};

		Admin.prototype.removeDocument = function removeDocument(doc) {
			this.filesModule.deleteDoc(this.filesModule.selectedFile._id);
			this.filterList();
		};

		Admin.prototype.saveQuiz = function () {
			var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								if (!this.filesModule.selectedQuiz.name) {
									_context3.next = 3;
									break;
								}

								_context3.next = 3;
								return this.filesModule.saveQuiz();

							case 3:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function saveQuiz() {
				return _ref3.apply(this, arguments);
			}

			return saveQuiz;
		}();

		Admin.prototype.selectQuiz = function () {
			var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(quiz) {
				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								this.filesModule.setQuiz(quiz);
								this.quizSelected = true;
								_context4.next = 4;
								return this.filesModule.getQuestionArray(this.filesModule.selectedQuiz._id);

							case 4:
								this.questionIndex = 0;
								this.filesModule.selectQuestion(this.questionIndex);

							case 6:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function selectQuiz(_x) {
				return _ref4.apply(this, arguments);
			}

			return selectQuiz;
		}();

		Admin.prototype.removeQuiz = function removeQuiz(quiz) {
			this.filesModule.deleteQuiz(quiz._id);
		};

		Admin.prototype.addAnswer = function addAnswer() {
			this.filesModule.selectedQuestion.answers.push({ answer: this.answer, right: this.right });
			this.answer = "";
			this.right = false;
		};

		Admin.prototype.toggleRight = function toggleRight(answer) {
			for (var i = 0; i < this.filesModule.selectedQuestion.answers.length; i++) {
				if (this.filesModule.selectedQuestion.answers[i].answer === answer.answer) {
					this.filesModule.selectedQuestion.answers[i].right = !this.filesModule.selectedQuestion.answers[i].right;
					break;
				}
			}
		};

		Admin.prototype.saveQuestion = function saveQuestion() {
			if (this.filesModule.selectedQuestion.flash && this.filesModule.selectedQuestion.card) {
				this.filesModule.saveQuestion();
				this.filesModule.selectQuestion();
			}
		};

		Admin.prototype.showFiles = function showFiles() {
			this.tool = 'filesDiv';
		};

		Admin.prototype.showQuiz = function showQuiz() {
			this.tool = "quizDiv";
		};

		Admin.prototype.toggleQuestions = function toggleQuestions() {
			this.filesModule.selectQuestion();
			this.showQuestions = !this.showQuestions;
			if (this.showQuestions) {
				this.questionIndex = this.previousIndex;
				this.filesModule.selectQuestion(this.questionIndex);
			} else {
				this.previousIndex = this.questionIndex;
			}
		};

		Admin.prototype.nextQuestion = function nextQuestion(increment) {
			if (increment === -1) {
				this.questionIndex = this.questionIndex > 0 ? this.questionIndex - 1 : 0;
			} else {
				this.questionIndex = this.questionIndex < this.filesModule.questionArray.length - 1 ? this.questionIndex + 1 : this.filesModule.questionArray.length - 1;
			}
			this.filesModule.selectQuestion(this.questionIndex);
		};

		Admin.prototype.deleteQuestion = function () {
			var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
				return regeneratorRuntime.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								this.filesModule.deleteQuestion(this.filesModule.selectedQuestion._id);
								_context5.next = 3;
								return this.filesModule.getQuestionArray(this.filesModule.selectedQuiz._id);

							case 3:
								this.nextQuestion(-1);

							case 4:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function deleteQuestion() {
				return _ref5.apply(this, arguments);
			}

			return deleteQuestion;
		}();

		return Admin;
	}()) || _class);
});
define('text!admin.html', ['module'], function(module) { module.exports = "<template>\n\t<div class=\"row\">\n\t\t<button style=\"margin-top:20px;margin-left:20px;\" class=\"btn btn-primary\" click.trigger=\"showFiles()\">Files</button>\n\t\t<button style=\"margin-top:20px;margin-left:10px;\" class=\"btn btn-primary\" click.trigger=\"showQuiz()\">Quizzes</button>\n\t</div>\n\t<compose view=\"./editFile.html\"></compose>\n\t<compose view=\"./editQuiz.html\"></compose>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map