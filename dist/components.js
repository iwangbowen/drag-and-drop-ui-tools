require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({53:[function(require,module,exports){
var _builder = require('./builder');

var _builder2 = _interopRequireDefault(_builder);

var _components = require('./components/@general/components');

var _general = _interopRequireWildcard(_components);

var _components2 = require('./components/@oee/components');

var _oee = _interopRequireWildcard(_components2);

var _ids = require('./components/@oee/ids');

var _oee_ids = _interopRequireWildcard(_ids);

var _element = require('./components/element');

var _element2 = _interopRequireDefault(_element);

var _border = require('./components/border');

var _border2 = _interopRequireDefault(_border);

var _padding = require('./components/padding');

var _padding2 = _interopRequireDefault(_padding);

var _display = require('./components/display');

var _display2 = _interopRequireDefault(_display);

var _typography = require('./components/typography');

var _typography2 = _interopRequireDefault(_typography);

var _size = require('./components/size');

var _size2 = _interopRequireDefault(_size);

var _margin = require('./components/margin');

var _margin2 = _interopRequireDefault(_margin);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_builder2.default.ComponentsGroup['定制组件'] = ['html/labeldiv@oee', 'html/button@oee', 'html/textinput@oee', 'html/calendar@oee', _oee_ids.autoselectinputid, _oee_ids.manualselectinputid, 'html/radiobutton@oee', 'html/checkbox@oee', 'html/table@oee'];

_builder2.default.ComponentsGroup['通用组件'] = ['html/label@general', 'html/div@general', 'html/button@general', 'html/buttongroup@general', 'html/buttontoolbar@general', 'html/form@general', 'html/textinput@general', 'html/textareainput@general', 'html/selectinput@general', 'html/fileinput@general', 'html/checkbox@general', 'html/radiobutton@general', 'html/table@general', 'html/heading@general', 'html/image@general', 'html/jumbotron@general', 'html/alert@general', 'html/card@general', 'html/listgroup@general', 'html/hr@general', 'html/taglabel@general', 'html/badge@general', 'html/progress@general', 'html/navbar@general', 'html/breadcrumbs@general', 'html/pagination@general', 'html/container@general', 'html/gridrow@general'];

_builder2.default.Components.add("_base", _element2.default);
//display
_builder2.default.Components.extend("_base", "_base", _display2.default);
//Typography
_builder2.default.Components.extend("_base", "_base", _typography2.default);
//Size
_builder2.default.Components.extend("_base", "_base", _size2.default);
//Margin
_builder2.default.Components.extend("_base", "_base", _margin2.default);
//Padding
_builder2.default.Components.extend("_base", "_base", _padding2.default);
//Border
_builder2.default.Components.extend("_base", "_base", _border2.default);

_builder2.default.Components.extend("_base", "html/div@general", _general.div);
_builder2.default.Components.extend("_base", "html/label@general", _general.label);
_builder2.default.Components.extend("_base", "html/button@general", _general.button);
_builder2.default.Components.extend("_base", "html/container@general", _general.container);
_builder2.default.Components.extend("_base", "html/heading@general", _general.heading);
_builder2.default.Components.extend("_base", "html/link@general", _general.link);
_builder2.default.Components.extend("_base", "html/image@general", _general.image);
_builder2.default.Components.add("html/hr@general", _general.hr);
_builder2.default.Components.extend("_base", "html/buttongroup@general", _general.buttongroup);
_builder2.default.Components.extend("_base", "html/buttontoolbar@general", _general.buttontoolbar);
_builder2.default.Components.extend("_base", "html/alert@general", _general.alert);
_builder2.default.Components.extend("_base", "html/badge@general", _general.badge);
_builder2.default.Components.extend("_base", "html/card@general", _general.card);
_builder2.default.Components.extend("_base", "html/listgroup@general", _general.listgroup);
_builder2.default.Components.extend("_base", "html/listitem@general", _general.listitem);
_builder2.default.Components.extend("_base", "html/breadcrumbs@general", _general.breadcrumbs);
_builder2.default.Components.extend("_base", "html/breadcrumbitem@general", _general.breadcrumbitem);
_builder2.default.Components.extend("_base", "html/pagination@general", _general.pagination);
_builder2.default.Components.extend("_base", "html/pageitem@general", _general.pageitem);
_builder2.default.Components.extend("_base", "html/progress@general", _general.progress);
_builder2.default.Components.extend("_base", "html/jumbotron@general", _general.jumbotron);
_builder2.default.Components.extend("_base", "html/navbar@general", _general.navbar);
_builder2.default.Components.extend("_base", "html/form@general", _general.form);
_builder2.default.Components.extend("_base", "html/textinput@general", _general.textinput);
_builder2.default.Components.extend("_base", "html/selectinput@general", _general.selectinput);
_builder2.default.Components.extend("_base", "html/textareainput@general", _general.textareainput);
_builder2.default.Components.extend("_base", "html/radiobutton@general", _general.radiobutton);
_builder2.default.Components.extend("_base", "html/checkbox@general", _general.checkbox);
_builder2.default.Components.extend("_base", "html/fileinput@general", _general.fileinput);
_builder2.default.Components.extend("_base", "html/table@general", _general.table);
_builder2.default.Components.extend("_base", "html/tablerow@general", _general.tablerow);
_builder2.default.Components.extend("_base", "html/tablecell@general", _general.tablecell);
_builder2.default.Components.extend("_base", "html/tableheadercell@general", _general.tableheadercell);
_builder2.default.Components.extend("_base", "html/tablehead@general", _general.tablehead);
_builder2.default.Components.extend("_base", "html/tablebody@general", _general.tablebody);
_builder2.default.Components.add("html/gridcolumn@general", _general.gridcolumn);
_builder2.default.Components.add("html/gridrow@general", _general.gridrow);

_builder2.default.Components.add('html/labeldiv@oee', _oee.labeldiv);
_builder2.default.Components.extend('_base', 'html/textinput@oee', _oee.textinput);
_builder2.default.Components.extend('_base', 'html/button@oee', _oee.button);
_builder2.default.Components.extend('_base', 'html/radiobutton@oee', _oee.radiobutton);
_builder2.default.Components.extend('_base', 'html/span@oee', _oee.span);
_builder2.default.Components.extend('_base', 'html/checkbox@oee', _oee.checkbox);
_builder2.default.Components.extend('_base', 'html/selectinput@oee', _oee.selectinput);
_builder2.default.Components.extend('_base', 'html/table@oee', _oee.table);
_builder2.default.Components.extend('_base', 'html/calendar@oee', _oee.calendar);
_builder2.default.Components.extend('_base', 'html/text@oee', _oee.text);
_builder2.default.Components.extend('_base', _oee_ids.autoselectinputid, _oee.autoselectinput);
_builder2.default.Components.extend('_base', _oee_ids.manualselectinputid, _oee.manualselectinput);

},{"./builder":52,"./components/@general/components":63,"./components/@oee/components":103,"./components/@oee/ids":112,"./components/border":137,"./components/display":139,"./components/element":140,"./components/margin":142,"./components/padding":143,"./components/size":144,"./components/typography":145}],145:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../inputs/inputs');

var _common = require('./common');

var typography = {
    properties: [{
        key: "typography_header",
        inputtype: _inputs.SectionInput,
        name: false,
        sort: (0, _common.inc_base_sort)(),
        data: { header: "Typography" }
    }, {
        name: "Font family",
        key: "font-family",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "Arial, Helvetica, sans-serif",
                text: "Arial"
            }, {
                value: 'Lucida Sans Unicode", "Lucida Grande", sans-serif',
                text: 'Lucida Grande'
            }, {
                value: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
                text: 'Palatino Linotype'
            }, {
                value: '"Times New Roman", Times, serif',
                text: 'Times New Roman'
            }, {
                value: "Georgia, serif",
                text: "Georgia, serif"
            }, {
                value: "Tahoma, Geneva, sans-serif",
                text: "Tahoma"
            }, {
                value: 'Comic Sans MS, cursive, sans-serif',
                text: 'Comic Sans'
            }, {
                value: 'Verdana, Geneva, sans-serif',
                text: 'Verdana'
            }, {
                value: 'Impact, Charcoal, sans-serif',
                text: 'Impact'
            }, {
                value: 'Arial Black, Gadget, sans-serif',
                text: 'Arial Black'
            }, {
                value: 'Trebuchet MS, Helvetica, sans-serif',
                text: 'Trebuchet'
            }, {
                value: 'Courier New", Courier, monospace',
                text: 'Courier New", Courier, monospace'
            }, {
                value: 'Brush Script MT, sans-serif',
                text: 'Brush Script'
            }]
        }
    }, {
        name: "Font weight",
        key: "font-weight",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "100",
                text: "Thin"
            }, {
                value: "200",
                text: "Extra-Light"
            }, {
                value: "300",
                text: "Light"
            }, {
                value: "400",
                text: "Normal"
            }, {
                value: "500",
                text: "Medium"
            }, {
                value: "600",
                text: "Semi-Bold"
            }, {
                value: "700",
                text: "Bold"
            }, {
                value: "800",
                text: "Extra-Bold"
            }, {
                value: "900",
                text: "Ultra-Bold"
            }]
        }
    }, {
        name: "Text align",
        key: "text-align",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 12,
        inline: true,
        inputtype: _inputs.RadioButtonInput,
        data: {
            extraclass: "btn-group-sm btn-group-fullwidth",
            options: [{
                value: "none",
                icon: "la la-close",
                //text: "None",
                title: "None",
                checked: true
            }, {
                value: "left",
                //text: "Left",
                title: "Left",
                icon: "la la-align-left",
                checked: false
            }, {
                value: "center",
                //text: "Center",
                title: "Center",
                icon: "la la-align-center",
                checked: false
            }, {
                value: "right",
                //text: "Right",
                title: "Right",
                icon: "la la-align-right",
                checked: false
            }, {
                value: "justify",
                //text: "justify",
                title: "Justify",
                icon: "la la-align-justify",
                checked: false
            }]
        }
    }, {
        name: "Line height",
        key: "line-height",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Letter spacing",
        key: "letter-spacing",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Text decoration",
        key: "text-decoration-line",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 12,
        inline: true,
        inputtype: _inputs.RadioButtonInput,
        data: {
            extraclass: "btn-group-sm btn-group-fullwidth",
            options: [{
                value: "none",
                icon: "la la-close",
                //text: "None",
                title: "None",
                checked: true
            }, {
                value: "underline",
                //text: "Left",
                title: "underline",
                icon: "la la-long-arrow-down",
                checked: false
            }, {
                value: "overline",
                //text: "Right",
                title: "overline",
                icon: "la la-long-arrow-up",
                checked: false
            }, {
                value: "line-through",
                //text: "Right",
                title: "Line Through",
                icon: "la la-strikethrough",
                checked: false
            }, {
                value: "underline overline",
                //text: "justify",
                title: "Underline Overline",
                icon: "la la-arrows-v",
                checked: false
            }]
        }
    }, {
        name: "Decoration Color",
        key: "text-decoration-color",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        htmlAttr: "style",
        inputtype: _inputs.ColorInput
    }, {
        name: "Decoration style",
        key: "text-decoration-style",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "solid",
                text: "Solid"
            }, {
                value: "wavy",
                text: "Wavy"
            }, {
                value: "dotted",
                text: "Dotted"
            }, {
                value: "dashed",
                text: "Dashed"
            }, {
                value: "double",
                text: "Double"
            }]
        }
    }]
};

exports.default = typography;

},{"../inputs/inputs":170,"./common":138}],144:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../inputs/inputs');

var _common = require('./common');

var size = {
    properties: [{
        key: "size_header",
        inputtype: _inputs.SectionInput,
        name: false,
        sort: (0, _common.inc_base_sort)(),
        data: { header: "Size", expanded: false }
    }, {
        name: "Width",
        key: "width",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Height",
        key: "height",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Min Width",
        key: "min-width",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Min Height",
        key: "min-height",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Max Width",
        key: "max-width",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Max Height",
        key: "max-height",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }]
};

exports.default = size;

},{"../inputs/inputs":170,"./common":138}],143:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../inputs/inputs');

var _common = require('./common');

var padding = {
    properties: [{
        key: "paddings_header",
        inputtype: _inputs.SectionInput,
        name: false,
        sort: (0, _common.inc_base_sort)(),
        data: { header: "Padding", expanded: false }
    }, {
        name: "Top",
        key: "padding-top",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Right",
        key: "padding-right",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Bottom",
        key: "padding-bottom",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Left",
        key: "padding-Left",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }]
};

exports.default = padding;

},{"../inputs/inputs":170,"./common":138}],142:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../inputs/inputs');

var _common = require('./common');

var margin = {
    properties: [{
        key: "margins_header",
        inputtype: _inputs.SectionInput,
        name: false,
        sort: (0, _common.inc_base_sort)(),
        data: { header: "Margin", expanded: false }
    }, {
        name: "Top",
        key: "margin-top",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Right",
        key: "margin-right",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Bottom",
        key: "margin-bottom",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Left",
        key: "margin-Left",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }]
};

exports.default = margin;

},{"../inputs/inputs":170,"./common":138}],140:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../inputs/inputs');

var _common = require('./common');

var element = {
    name: "Element",
    properties: [{
        key: "element_header",
        inputtype: _inputs.SectionInput,
        name: false,
        sort: (0, _common.inc_base_sort)(),
        data: { header: "General" }
    }, {
        name: "Id",
        key: "id",
        htmlAttr: "id",
        sort: (0, _common.inc_base_sort)(),
        inline: true,
        col: 6,
        inputtype: _inputs.TextInput
    }, {
        name: "Class",
        key: "class",
        htmlAttr: "class",
        sort: (0, _common.inc_base_sort)(),
        inline: true,
        col: 6,
        inputtype: _inputs.TextInput
    }]
};

exports.default = element;

},{"../inputs/inputs":170,"./common":138}],139:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = require('./common');

var _inputs = require('../inputs/inputs');

var display = {
    properties: [{
        key: "display_header",
        inputtype: _inputs.SectionInput,
        name: false,
        sort: (0, _common.inc_base_sort)(),
        data: { header: "Display" }
    }, {
        name: "Display",
        key: "display",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.SelectInput,
        validValues: ["block", "inline", "inline-block", "none"],
        data: {
            options: [{
                value: "block",
                text: "Block"
            }, {
                value: "inline",
                text: "Inline"
            }, {
                value: "inline-block",
                text: "Inline Block"
            }, {
                value: "none",
                text: "none"
            }]
        }
    }, {
        name: "Position",
        key: "position",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.SelectInput,
        validValues: ["static", "fixed", "relative", "absolute"],
        data: {
            options: [{
                value: "static",
                text: "Static"
            }, {
                value: "fixed",
                text: "Fixed"
            }, {
                value: "relative",
                text: "Relative"
            }, {
                value: "absolute",
                text: "Absolute"
            }]
        }
    }, {
        name: "Top",
        key: "top",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        parent: "",
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Left",
        key: "left",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        parent: "",
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Bottom",
        key: "bottom",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        parent: "",
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Right",
        key: "right",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        parent: "",
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Float",
        key: "float",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 12,
        inline: true,
        inputtype: _inputs.RadioButtonInput,
        data: {
            extraclass: "btn-group-sm btn-group-fullwidth",
            options: [{
                value: "none",
                icon: "la la-close",
                //text: "None",
                title: "None",
                checked: true
            }, {
                value: "left",
                //text: "Left",
                title: "Left",
                icon: "la la-align-left",
                checked: false
            }, {
                value: "right",
                //text: "Right",
                title: "Right",
                icon: "la la-align-right",
                checked: false
            }]
        }
    }, {
        name: "Opacity",
        key: "opacity",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 12,
        inline: true,
        parent: "",
        inputtype: _inputs.RangeInput,
        data: {
            max: 1, //max zoom level
            min: 0,
            step: 0.1
        }
    }, {
        name: "Background Color",
        key: "background-color",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        htmlAttr: "style",
        inputtype: _inputs.ColorInput
    }, {
        name: "Text Color",
        key: "color",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        htmlAttr: "style",
        inputtype: _inputs.ColorInput
    }]
};

exports.default = display;

},{"../inputs/inputs":170,"./common":138}],137:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../inputs/inputs');

var _common = require('./common');

var border = {
    properties: [{
        key: "border_header",
        inputtype: _inputs.SectionInput,
        name: false,
        sort: (0, _common.inc_base_sort)(),
        data: { header: "Border", expanded: false }
    }, {
        name: "Style",
        key: "border-style",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 12,
        inline: true,
        inputtype: _inputs.SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "solid",
                text: "Solid"
            }, {
                value: "dotted",
                text: "Dotted"
            }, {
                value: "dashed",
                text: "Dashed"
            }]
        }
    }, {
        name: "Width",
        key: "border-width",
        htmlAttr: "style",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        inputtype: _inputs.CssUnitInput
    }, {
        name: "Color",
        key: "border-color",
        sort: (0, _common.inc_base_sort)(),
        col: 6,
        inline: true,
        htmlAttr: "style",
        inputtype: _inputs.ColorInput
    }]
};

exports.default = border;

},{"../inputs/inputs":170,"./common":138}],103:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.manualselectinput = exports.autoselectinput = exports.text = exports.calendar = exports.span = exports.labeldiv = exports.textareainput = exports.tablerow = exports.tablehead = exports.tablecell = exports.tablebody = exports.table = exports.tableheadercell = exports.selectinput = exports.radiobutton = exports.progress = exports.pagination = exports.pageitem = exports.navbar = exports.listitem = exports.listgroup = exports.link = exports.jumbotron = exports.image = exports.hr = exports.heading = exports.gridrow = exports.gridcolumn = exports.form = exports.fileinput = exports.checkbox = exports.card = exports.buttontoolbar = exports.buttongroup = exports.breadcrumbs = exports.breadcrumbitem = exports.badge = exports.alert = exports.container = exports.div = exports.button = exports.textinput = exports.label = undefined;

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _textinput = require('./textinput');

var _textinput2 = _interopRequireDefault(_textinput);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _div = require('./div');

var _div2 = _interopRequireDefault(_div);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _alert = require('./alert');

var _alert2 = _interopRequireDefault(_alert);

var _badge = require('./badge');

var _badge2 = _interopRequireDefault(_badge);

var _breadcrumbitem = require('./breadcrumbitem');

var _breadcrumbitem2 = _interopRequireDefault(_breadcrumbitem);

var _breadcrumbs = require('./breadcrumbs');

var _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);

var _buttongroup = require('./buttongroup');

var _buttongroup2 = _interopRequireDefault(_buttongroup);

var _buttontoolbar = require('./buttontoolbar');

var _buttontoolbar2 = _interopRequireDefault(_buttontoolbar);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _fileinput = require('./fileinput');

var _fileinput2 = _interopRequireDefault(_fileinput);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _gridcolumn = require('./gridcolumn');

var _gridcolumn2 = _interopRequireDefault(_gridcolumn);

var _gridrow = require('./gridrow');

var _gridrow2 = _interopRequireDefault(_gridrow);

var _heading = require('./heading');

var _heading2 = _interopRequireDefault(_heading);

var _hr = require('./hr');

var _hr2 = _interopRequireDefault(_hr);

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

var _jumbotron = require('./jumbotron');

var _jumbotron2 = _interopRequireDefault(_jumbotron);

var _link = require('./link');

var _link2 = _interopRequireDefault(_link);

var _listgroup = require('./listgroup');

var _listgroup2 = _interopRequireDefault(_listgroup);

var _listitem = require('./listitem');

var _listitem2 = _interopRequireDefault(_listitem);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _pageitem = require('./pageitem');

var _pageitem2 = _interopRequireDefault(_pageitem);

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _progress = require('./progress');

var _progress2 = _interopRequireDefault(_progress);

var _radiobutton = require('./radiobutton');

var _radiobutton2 = _interopRequireDefault(_radiobutton);

var _selectinput = require('./selectinput');

var _selectinput2 = _interopRequireDefault(_selectinput);

var _tableheadercell = require('./tableheadercell');

var _tableheadercell2 = _interopRequireDefault(_tableheadercell);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _tablebody = require('./tablebody');

var _tablebody2 = _interopRequireDefault(_tablebody);

var _tablecell = require('./tablecell');

var _tablecell2 = _interopRequireDefault(_tablecell);

var _tablehead = require('./tablehead');

var _tablehead2 = _interopRequireDefault(_tablehead);

var _tablerow = require('./tablerow');

var _tablerow2 = _interopRequireDefault(_tablerow);

var _textareainput = require('./textareainput');

var _textareainput2 = _interopRequireDefault(_textareainput);

var _labeldiv = require('./labeldiv');

var _labeldiv2 = _interopRequireDefault(_labeldiv);

var _span = require('./span');

var _span2 = _interopRequireDefault(_span);

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _autoselectinput = require('./autoselectinput');

var _autoselectinput2 = _interopRequireDefault(_autoselectinput);

var _manualselectinput = require('./manualselectinput');

var _manualselectinput2 = _interopRequireDefault(_manualselectinput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.label = _label2.default;
exports.textinput = _textinput2.default;
exports.button = _button2.default;
exports.div = _div2.default;
exports.container = _container2.default;
exports.alert = _alert2.default;
exports.badge = _badge2.default;
exports.breadcrumbitem = _breadcrumbitem2.default;
exports.breadcrumbs = _breadcrumbs2.default;
exports.buttongroup = _buttongroup2.default;
exports.buttontoolbar = _buttontoolbar2.default;
exports.card = _card2.default;
exports.checkbox = _checkbox2.default;
exports.fileinput = _fileinput2.default;
exports.form = _form2.default;
exports.gridcolumn = _gridcolumn2.default;
exports.gridrow = _gridrow2.default;
exports.heading = _heading2.default;
exports.hr = _hr2.default;
exports.image = _image2.default;
exports.jumbotron = _jumbotron2.default;
exports.link = _link2.default;
exports.listgroup = _listgroup2.default;
exports.listitem = _listitem2.default;
exports.navbar = _navbar2.default;
exports.pageitem = _pageitem2.default;
exports.pagination = _pagination2.default;
exports.progress = _progress2.default;
exports.radiobutton = _radiobutton2.default;
exports.selectinput = _selectinput2.default;
exports.tableheadercell = _tableheadercell2.default;
exports.table = _table2.default;
exports.tablebody = _tablebody2.default;
exports.tablecell = _tablecell2.default;
exports.tablehead = _tablehead2.default;
exports.tablerow = _tablerow2.default;
exports.textareainput = _textareainput2.default;
exports.labeldiv = _labeldiv2.default;
exports.span = _span2.default;
exports.calendar = _calendar2.default;
exports.text = _text2.default;
exports.autoselectinput = _autoselectinput2.default;
exports.manualselectinput = _manualselectinput2.default;

},{"./alert":92,"./autoselectinput":93,"./badge":94,"./breadcrumbitem":95,"./breadcrumbs":96,"./button":97,"./buttongroup":98,"./buttontoolbar":99,"./calendar":100,"./card":101,"./checkbox":102,"./container":104,"./div":105,"./fileinput":106,"./form":107,"./gridcolumn":108,"./gridrow":109,"./heading":110,"./hr":111,"./image":113,"./jumbotron":114,"./label":115,"./labeldiv":116,"./link":117,"./listgroup":118,"./listitem":119,"./manualselectinput":120,"./navbar":121,"./pageitem":122,"./pagination":123,"./progress":124,"./radiobutton":125,"./selectinput":126,"./span":127,"./table":128,"./tablebody":129,"./tablecell":130,"./tablehead":131,"./tableheadercell":132,"./tablerow":133,"./text":134,"./textareainput":135,"./textinput":136}],136:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../../inputs/inputs');

var _inputTypes = require('../inputTypes');

var _common = require('../common');

var textinput = {
    name: "Text Input",
    attributes: { "type": _inputTypes.inputTypeNames },
    image: "icons/text_input.svg",
    html: '<div class="everyOutbox-right draggable">\n            <div class="btn-group">\n                <div class="dailyBox">\n                    <input ' + _common.dataComponentId + '="html/textinput@oee" lustyle="height: 2.8rem;width:13rem" type="text" class="form-control"/>\n                 </div>\n            </div>\n           </div>',
    properties: [{
        name: "Value",
        key: "value",
        htmlAttr: "value",
        inputtype: _inputs.TextInput
    }, {
        name: "Placeholder",
        key: "placeholder",
        htmlAttr: "placeholder",
        inputtype: _inputs.TextInput
    }, {
        name: 'Name',
        key: 'name',
        htmlAttr: 'name',
        inputtype: _inputs.TextInput
    }, {
        name: 'type',
        key: 'type',
        htmlAttr: 'type',
        inputtype: _inputs.SelectInput,
        data: {
            options: _inputTypes.inputTypes
        }
    }]
};

exports.default = textinput;

},{"../../inputs/inputs":170,"../common":138,"../inputTypes":141}],135:[function(require,module,exports){
arguments[4][90][0].apply(exports,arguments)
},{"dup":90}],134:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var text = {
    name: "Text",
    image: "icons/text_input.svg",
    html: "",
    nodes: ['b', 'big', 'em', 'i', 'small', 'strong', 'sub', 'sup', 'ins', 'del', 's', 'strike', 'u'],
    properties: [{
        name: 'Text',
        key: 'text',
        htmlAttr: 'text',
        inputtype: _inputs.TextInput
    }]
};

exports.default = text;

},{"../../inputs/inputs":170}],133:[function(require,module,exports){
arguments[4][89][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"dup":89}],132:[function(require,module,exports){
arguments[4][88][0].apply(exports,arguments)
},{"dup":88}],131:[function(require,module,exports){
arguments[4][87][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"dup":87}],130:[function(require,module,exports){
arguments[4][86][0].apply(exports,arguments)
},{"dup":86}],129:[function(require,module,exports){
arguments[4][85][0].apply(exports,arguments)
},{"dup":85}],127:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var span = {
    name: "Span",
    image: "icons/text_input.svg",
    nodes: ['span'],
    html: "",
    properties: [{
        name: "For id",
        key: "for",
        htmlAttr: "for",
        inputtype: _inputs.TextInput
    }, {
        name: 'Text',
        key: 'text',
        htmlAttr: 'text',
        inputtype: _inputs.TextInput
    }]
};

exports.default = span;

},{"../../inputs/inputs":170}],126:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _builder = require('../../builder');

var _builder2 = _interopRequireDefault(_builder);

var _inputs = require('../../inputs/inputs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectinput = {
    nodes: ["select"],
    name: "Select Input",
    image: "icons/select_input.svg",
    html: '<div class="everyOutbox-right draggable">\n            <div class="btn-group">\n                <div class="dailyBox">\n                    <select class="form-control" lustyle="height: 2.8rem;width:13rem">\n                        <option value="value1">Text 1</option>\n                        <option value="value2">Text 2</option>\n                        <option value="value3">Text 3</option>\n                    </select>\n                </div>\n            </div>\n           </div>\n    ',
    beforeInit: function beforeInit(node) {
        properties = [];
        var i = 0;

        $(node).find('option').each(function () {

            data = { "value": this.value, "text": this.text };

            i++;
            properties.push({
                name: "Option " + i,
                key: "option" + i,
                //index: i - 1,
                optionNode: this,
                inputtype: _inputs.TextValueInput,
                data: data,
                onChange: function onChange(node, value, input) {

                    option = $(this.optionNode);

                    //if remove button is clicked remove option and render row properties
                    if (input.nodeName == 'BUTTON') {
                        option.remove();
                        _builder2.default.Components.render("html/selectinput");
                        return node;
                    }

                    if (input.name == "value") option.attr("value", value);else if (input.name == "text") option.text(value);

                    return node;
                }
            });
        });

        //remove all option properties
        this.properties = this.properties.filter(function (item) {
            return item.key.indexOf("option") === -1;
        });

        //add remaining properties to generated column properties
        properties.push(this.properties[0]);

        this.properties = properties;
        return node;
    },

    properties: [{
        name: "Option",
        key: "option1",
        inputtype: _inputs.TextValueInput
    }, {
        name: "Option",
        key: "option2",
        inputtype: _inputs.TextValueInput
    }, {
        name: "",
        key: "addChild",
        inputtype: _inputs.ButtonInput,
        data: { text: "Add option" },
        onChange: function onChange(node) {
            $(node).append('<option value="value">Text</option>');

            //render component properties again to include the new column inputs
            _builder2.default.Components.render("html/selectinput");

            return node;
        }
    }]
};

exports.default = selectinput;

},{"../../builder":52,"../../inputs/inputs":170}],125:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../../inputs/inputs');

var _common = require('../common');

var radiobutton = {
    name: "Radio Button",
    attributes: { "type": "radio" },
    image: "icons/radio.svg",
    html: '<div ' + _common.dataComponentId + '="html/radiobutton@oee" class="everyOutbox-right draggable">\n            <div style="display:inline;"><input class="radioInput" name="Fruit" type="radio" value="" /><span ' + _common.dataComponentId + '="html/span@oee">\u5355\u90091</span></div>\n           </div>',
    properties: [{
        name: "Name",
        key: "name",
        htmlAttr: "name",
        inputtype: _inputs.TextInput
    }]
};

exports.default = radiobutton;

},{"../../inputs/inputs":170,"../common":138}],124:[function(require,module,exports){
arguments[4][81][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"../common":138,"dup":81}],123:[function(require,module,exports){
arguments[4][80][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"dup":80}],122:[function(require,module,exports){
arguments[4][79][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"dup":79}],121:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"../common":138,"dup":78}],120:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _builder = require('../../builder');

var _builder2 = _interopRequireDefault(_builder);

var _inputs = require('../../inputs/inputs');

var _ids = require('./ids');

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var autoselectinput = {
    nodes: ["select"],
    name: "Manual Select Input",
    image: "icons/select_input.svg",
    html: '<div class="everyOutbox-right draggable">\n            <div class="btn-group">\n                <div class="dailyBox">\n                    <select ' + _common.dataComponentId + '="' + _ids.manualselectinputid + '" class="form-control" lustyle="height: 2.8rem;width:13rem">\n                        <option value="value1">Text 1</option>\n                        <option value="value2">Text 2</option>\n                        <option value="value3">Text 3</option>\n                    </select>\n                </div>\n            </div>\n           </div>\n    ',
    beforeInit: function beforeInit(node) {
        properties = [];
        var i = 0;

        $(node).find('option').each(function () {

            data = { "value": this.value, "text": this.text };

            i++;
            properties.push({
                name: "Option " + i,
                key: "option" + i,
                //index: i - 1,
                optionNode: this,
                inputtype: _inputs.TextValueInput,
                data: data,
                onChange: function onChange(node, value, input) {

                    option = $(this.optionNode);

                    //if remove button is clicked remove option and render row properties
                    if (input.nodeName == 'BUTTON') {
                        option.remove();
                        _builder2.default.Components.render(_ids.manualselectinputid);
                        return node;
                    }

                    if (input.name == "value") option.attr("value", value);else if (input.name == "text") option.text(value);

                    return node;
                }
            });
        });

        //remove all option properties
        this.properties = this.properties.filter(function (item) {
            return item.key.indexOf("option") === -1;
        });

        //add remaining properties to generated column properties
        properties.push(this.properties[0]);

        this.properties = properties;
        return node;
    },

    properties: [{
        name: "Option",
        key: "option1",
        inputtype: _inputs.TextValueInput
    }, {
        name: "Option",
        key: "option2",
        inputtype: _inputs.TextValueInput
    }, {
        name: "",
        key: "addChild",
        inputtype: _inputs.ButtonInput,
        data: { text: "Add option" },
        onChange: function onChange(node) {
            $(node).append('<option value="value">Text</option>');
            //render component properties again to include the new column inputs
            _builder2.default.Components.render(_ids.manualselectinputid);
            return node;
        }
    }]
};

exports.default = autoselectinput;

},{"../../builder":52,"../../inputs/inputs":170,"../common":138,"./ids":112}],119:[function(require,module,exports){
arguments[4][77][0].apply(exports,arguments)
},{"dup":77}],118:[function(require,module,exports){
arguments[4][76][0].apply(exports,arguments)
},{"dup":76}],117:[function(require,module,exports){
arguments[4][75][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"dup":75}],116:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = require('../common');

var labeldiv = {
    name: 'Label Div',
    image: 'icons/label.svg',
    html: '<div class="everyOutbox-left draggable">\n                <i class="fa fa-caret-square-o-right text-danger" aria-hidden="true"></i>\n                <span ' + _common.dataComponentId + '="html/span@oee" class="theme">Period</span>\n           </div>'
};

exports.default = labeldiv;

},{"../common":138}],115:[function(require,module,exports){
arguments[4][74][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"dup":74}],114:[function(require,module,exports){
arguments[4][73][0].apply(exports,arguments)
},{"dup":73}],113:[function(require,module,exports){
arguments[4][72][0].apply(exports,arguments)
},{"../../builder":52,"../../inputs/inputs":170,"dup":72}],111:[function(require,module,exports){
arguments[4][71][0].apply(exports,arguments)
},{"dup":71}],110:[function(require,module,exports){
arguments[4][70][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"../common":138,"dup":70}],109:[function(require,module,exports){
arguments[4][69][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"dup":69}],108:[function(require,module,exports){
arguments[4][68][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"dup":68}],107:[function(require,module,exports){
arguments[4][67][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"dup":67}],106:[function(require,module,exports){
arguments[4][66][0].apply(exports,arguments)
},{"dup":66}],105:[function(require,module,exports){
arguments[4][65][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"../common":138,"dup":65}],104:[function(require,module,exports){
arguments[4][64][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"../common":138,"dup":64}],102:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../../inputs/inputs');

var _common = require('../common');

var checkbox = {
    name: "Checkbox",
    attributes: { "type": "checkbox" },
    image: "icons/checkbox.svg",
    html: '<div class="everyOutbox-right draggable">\n             <div style="display:inline;">\n                <input ' + _common.dataComponentId + '="html/checkbox@oee" type="checkbox" class="checkboxInput" id="${it.site}eprCheck" name="paramItems[${loop.index}].eprCheck" value="true"/>\n                <label ' + _common.dataComponentId + '="html/span@oee">\u9009\u98791</label>\n             </div>\n            </div>',
    properties: [{
        name: "Name",
        key: "name",
        htmlAttr: "name",
        inputtype: _inputs.TextInput
    }]
};

exports.default = checkbox;

},{"../../inputs/inputs":170,"../common":138}],101:[function(require,module,exports){
arguments[4][61][0].apply(exports,arguments)
},{"dup":61}],100:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../../inputs/inputs');

var _inputTypes = require('../inputTypes');

var _common = require('../common');

var _calendar = require('../../util/calendar');

var calendar = {
    name: "Datetime Input",
    attributes: { "type": _inputTypes.inputTypeNames },
    image: "icons/calendar.svg",
    html: '<div class="everyOutbox-right draggable">\n            <div class="btn-group">\n                <div class="dailyBox">\n                    <input ' + _common.dataCalendarId + ' ' + _common.dataConfigInfo + '="{\'dateFmt\': \'yyyy-MM-dd HH:mm\'}" ' + _common.dataComponentId + '="html/calendar@oee" lustyle="height: 2.8rem;width:13rem " \n                    type="text" class="form-control Wdate"/>\n                 </div>\n            </div>\n           </div>',
    properties: [{
        name: "Value",
        key: "value",
        htmlAttr: "value",
        inputtype: _inputs.TextInput
    }, {
        name: "Placeholder",
        key: "placeholder",
        htmlAttr: "placeholder",
        inputtype: _inputs.TextInput
    }, {
        name: 'Name',
        key: 'name',
        htmlAttr: 'name',
        inputtype: _inputs.TextInput
    }, {
        name: "Date Format",
        key: "dateFmt",
        inputtype: _inputs.SelectInput,
        init: _calendar.getDateFmt,
        onChange: function onChange(node, value) {
            var configInfo = (0, _calendar.getParsedConfigInfo)(node);
            configInfo.dateFmt = value;
            (0, _calendar.setDataConfigInfo)(node, configInfo);

            if (node.attr('onclick')) {
                return (0, _calendar.setOnclickAttr)((0, _calendar.cloneWithoutOnclick)(node));
            }
            return node;
        },
        data: {
            options: [{
                value: 'yyyy-MM-dd HH:mm',
                text: 'yyyy-MM-dd HH:mm'
            }, {
                value: 'yyyy-MM-dd HH:mm:ss',
                text: 'yyyy-MM-dd HH:mm:ss'
            }, {
                value: 'yyyy-MM-dd',
                text: 'yyyy-MM-dd'
            }, {
                value: 'yyyyMMdd',
                text: 'yyyyMMdd'
            }, {
                value: 'yyyyMM',
                text: 'yyyyMM'
            }, {
                value: 'yyyy',
                text: 'yyyy'
            }, {
                value: 'yyyy年M月',
                text: 'yyyy年M月'
            }]
        }
    }, {
        name: "Show Datetime",
        key: "showDatetime",
        validValues: ["table-responsive"],
        inputtype: _inputs.ToggleInput,
        onChange: function onChange(node, value) {
            if (value == 'on') {
                (0, _calendar.setOnclickAttr)(node);
            } else {
                (0, _calendar.cloneWithoutOnclick)(node);
            }
        },

        data: {
            on: 'on',
            off: 'off'
        }
    }]
};

exports.default = calendar;

},{"../../inputs/inputs":170,"../../util/calendar":176,"../common":138,"../inputTypes":141}],99:[function(require,module,exports){
arguments[4][60][0].apply(exports,arguments)
},{"dup":60}],98:[function(require,module,exports){
arguments[4][59][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"dup":59}],97:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var button = {
    classes: ["btn", "btn-link", 'btn@oee'],
    name: "Button",
    image: "icons/button.svg",
    html: "<button type=\"button\" class=\"btn@oee draggable\">\n            <span class=\"glyphicon glyphicon-search\">Search</span>\n           </button>",
    properties: [{
        name: "Link To",
        key: "href",
        htmlAttr: "href",
        inputtype: _inputs.LinkInput
    }, {
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: _inputs.SelectInput,
        validValues: ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-info", "btn-light", "btn-dark", "btn-outline-primary", "btn-outline-info", "btn-outline-success", "btn-outline-warning", "btn-outline-info", "btn-outline-light", "btn-outline-dark", "btn-link"],
        data: {
            options: [{
                value: "btn-default",
                text: "Default"
            }, {
                value: "btn-primary",
                text: "Primary"
            }, {
                value: "btn btn-info",
                text: "Info"
            }, {
                value: "btn-success",
                text: "Success"
            }, {
                value: "btn-warning",
                text: "Warning"
            }, {
                value: "btn-info",
                text: "Info"
            }, {
                value: "btn-light",
                text: "Light"
            }, {
                value: "btn-dark",
                text: "Dark"
            }, {
                value: "btn-outline-primary",
                text: "Primary outline"
            }, {
                value: "btn btn-outline-info",
                text: "Info outline"
            }, {
                value: "btn-outline-success",
                text: "Success outline"
            }, {
                value: "btn-outline-warning",
                text: "Warning outline"
            }, {
                value: "btn-outline-info",
                text: "Info outline"
            }, {
                value: "btn-outline-light",
                text: "Light outline"
            }, {
                value: "btn-outline-dark",
                text: "Dark outline"
            }, {
                value: "btn-link",
                text: "Link"
            }]
        }
    }, {
        name: "Size",
        key: "size",
        htmlAttr: "class",
        inputtype: _inputs.SelectInput,
        validValues: ["btn-lg", "btn-sm"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-lg",
                text: "Large"
            }, {
                value: "btn-sm",
                text: "Small"
            }]
        }
    }, {
        name: "Target",
        key: "target",
        htmlAttr: "target",
        inputtype: _inputs.TextInput
    }, {
        name: 'Data Url',
        key: 'dataUrl',
        htmlAttr: 'data-url',
        inputtype: _inputs.TextInput
    }, {
        name: "Disabled",
        key: "disabled",
        htmlAttr: "class",
        inputtype: _inputs.ToggleInput,
        validValues: ["disabled"],
        data: {
            on: "disabled",
            off: ""
        }
    }]
};

exports.default = button;

},{"../../inputs/inputs":170}],96:[function(require,module,exports){
arguments[4][57][0].apply(exports,arguments)
},{"dup":57}],95:[function(require,module,exports){
arguments[4][56][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"dup":56}],94:[function(require,module,exports){
arguments[4][55][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"dup":55}],93:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../../inputs/inputs');

var _ids = require('./ids');

var _common = require('../common');

var autoselectinput = {
    nodes: ["select"],
    name: "Auto Select Input",
    image: "icons/select_input.svg",
    html: '<div class="everyOutbox-right draggable">\n            <div class="btn-group">\n                <div class="dailyBox">\n                    <select ' + _common.dataAutoSelectId + ' ' + _common.dataComponentId + '="' + _ids.autoselectinputid + '" class="form-control" lustyle="height: 2.8rem;width:13rem">\n                    </select>\n                </div>\n            </div>\n           </div>\n    ',
    properties: [{
        name: "Data Url",
        key: "dataUrl",
        htmlAttr: _common.dataUrl,
        inputtype: _inputs.TextInput
    }]
};

exports.default = autoselectinput;

},{"../../inputs/inputs":170,"../common":138,"./ids":112}],112:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
var manualselectinputid = 'html/manualselectinput@oee';
var autoselectinputid = 'html/autoselectinput@oee';

exports.manualselectinputid = manualselectinputid;
exports.autoselectinputid = autoselectinputid;

},{}],92:[function(require,module,exports){
arguments[4][54][0].apply(exports,arguments)
},{"../../inputs/inputs":170,"dup":54}],63:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.textareainput = exports.tablerow = exports.tablehead = exports.tablecell = exports.tablebody = exports.table = exports.tableheadercell = exports.selectinput = exports.radiobutton = exports.progress = exports.pagination = exports.pageitem = exports.navbar = exports.listitem = exports.listgroup = exports.link = exports.jumbotron = exports.image = exports.hr = exports.heading = exports.gridrow = exports.gridcolumn = exports.form = exports.fileinput = exports.checkbox = exports.card = exports.buttontoolbar = exports.buttongroup = exports.breadcrumbs = exports.breadcrumbitem = exports.badge = exports.alert = exports.container = exports.div = exports.button = exports.textinput = exports.label = undefined;

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _textinput = require('./textinput');

var _textinput2 = _interopRequireDefault(_textinput);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _div = require('./div');

var _div2 = _interopRequireDefault(_div);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _alert = require('./alert');

var _alert2 = _interopRequireDefault(_alert);

var _badge = require('./badge');

var _badge2 = _interopRequireDefault(_badge);

var _breadcrumbitem = require('./breadcrumbitem');

var _breadcrumbitem2 = _interopRequireDefault(_breadcrumbitem);

var _breadcrumbs = require('./breadcrumbs');

var _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);

var _buttongroup = require('./buttongroup');

var _buttongroup2 = _interopRequireDefault(_buttongroup);

var _buttontoolbar = require('./buttontoolbar');

var _buttontoolbar2 = _interopRequireDefault(_buttontoolbar);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _fileinput = require('./fileinput');

var _fileinput2 = _interopRequireDefault(_fileinput);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _gridcolumn = require('./gridcolumn');

var _gridcolumn2 = _interopRequireDefault(_gridcolumn);

var _gridrow = require('./gridrow');

var _gridrow2 = _interopRequireDefault(_gridrow);

var _heading = require('./heading');

var _heading2 = _interopRequireDefault(_heading);

var _hr = require('./hr');

var _hr2 = _interopRequireDefault(_hr);

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

var _jumbotron = require('./jumbotron');

var _jumbotron2 = _interopRequireDefault(_jumbotron);

var _link = require('./link');

var _link2 = _interopRequireDefault(_link);

var _listgroup = require('./listgroup');

var _listgroup2 = _interopRequireDefault(_listgroup);

var _listitem = require('./listitem');

var _listitem2 = _interopRequireDefault(_listitem);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _pageitem = require('./pageitem');

var _pageitem2 = _interopRequireDefault(_pageitem);

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _progress = require('./progress');

var _progress2 = _interopRequireDefault(_progress);

var _radiobutton = require('./radiobutton');

var _radiobutton2 = _interopRequireDefault(_radiobutton);

var _selectinput = require('./selectinput');

var _selectinput2 = _interopRequireDefault(_selectinput);

var _tableheadercell = require('./tableheadercell');

var _tableheadercell2 = _interopRequireDefault(_tableheadercell);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _tablebody = require('./tablebody');

var _tablebody2 = _interopRequireDefault(_tablebody);

var _tablecell = require('./tablecell');

var _tablecell2 = _interopRequireDefault(_tablecell);

var _tablehead = require('./tablehead');

var _tablehead2 = _interopRequireDefault(_tablehead);

var _tablerow = require('./tablerow');

var _tablerow2 = _interopRequireDefault(_tablerow);

var _textareainput = require('./textareainput');

var _textareainput2 = _interopRequireDefault(_textareainput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.label = _label2.default;
exports.textinput = _textinput2.default;
exports.button = _button2.default;
exports.div = _div2.default;
exports.container = _container2.default;
exports.alert = _alert2.default;
exports.badge = _badge2.default;
exports.breadcrumbitem = _breadcrumbitem2.default;
exports.breadcrumbs = _breadcrumbs2.default;
exports.buttongroup = _buttongroup2.default;
exports.buttontoolbar = _buttontoolbar2.default;
exports.card = _card2.default;
exports.checkbox = _checkbox2.default;
exports.fileinput = _fileinput2.default;
exports.form = _form2.default;
exports.gridcolumn = _gridcolumn2.default;
exports.gridrow = _gridrow2.default;
exports.heading = _heading2.default;
exports.hr = _hr2.default;
exports.image = _image2.default;
exports.jumbotron = _jumbotron2.default;
exports.link = _link2.default;
exports.listgroup = _listgroup2.default;
exports.listitem = _listitem2.default;
exports.navbar = _navbar2.default;
exports.pageitem = _pageitem2.default;
exports.pagination = _pagination2.default;
exports.progress = _progress2.default;
exports.radiobutton = _radiobutton2.default;
exports.selectinput = _selectinput2.default;
exports.tableheadercell = _tableheadercell2.default;
exports.table = _table2.default;
exports.tablebody = _tablebody2.default;
exports.tablecell = _tablecell2.default;
exports.tablehead = _tablehead2.default;
exports.tablerow = _tablerow2.default;
exports.textareainput = _textareainput2.default;

},{"./alert":54,"./badge":55,"./breadcrumbitem":56,"./breadcrumbs":57,"./button":58,"./buttongroup":59,"./buttontoolbar":60,"./card":61,"./checkbox":62,"./container":64,"./div":65,"./fileinput":66,"./form":67,"./gridcolumn":68,"./gridrow":69,"./heading":70,"./hr":71,"./image":72,"./jumbotron":73,"./label":74,"./link":75,"./listgroup":76,"./listitem":77,"./navbar":78,"./pageitem":79,"./pagination":80,"./progress":81,"./radiobutton":82,"./selectinput":83,"./table":84,"./tablebody":85,"./tablecell":86,"./tablehead":87,"./tableheadercell":88,"./tablerow":89,"./textareainput":90,"./textinput":91}],91:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../../inputs/inputs');

var _inputTypes = require('../inputTypes');

var _common = require('../common');

var textinput = {
    name: "Text Input",
    attributes: { "type": _inputTypes.inputTypeNames },
    image: "icons/text_input.svg",
    html: '<div class="form-group" style="display: inline-block;"><label>Text</label><input ' + _common.dataComponentId + '="html/textinput@general" type="text" class="form-control"></div></div>',
    properties: [{
        name: "Value",
        key: "value",
        htmlAttr: "value",
        inputtype: _inputs.TextInput
    }, {
        name: "Placeholder",
        key: "placeholder",
        htmlAttr: "placeholder",
        inputtype: _inputs.TextInput
    }, {
        name: 'type',
        key: 'type',
        htmlAttr: 'type',
        inputtype: _inputs.SelectInput,
        data: {
            options: _inputTypes.inputTypes
        }
    }]
};

exports.default = textinput;

},{"../../inputs/inputs":170,"../common":138,"../inputTypes":141}],141:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
var inputTypes = [{
    value: 'text',
    text: 'text'
}, {
    value: 'password',
    text: 'password'
}, {
    value: 'number',
    text: 'number'
}, {
    value: 'submit',
    text: 'submit'
}, {
    value: "email",
    text: "email"
}, {
    value: 'url',
    text: 'url'
}, {
    value: 'tel',
    text: 'tel'
}, {
    value: 'search',
    text: 'search'
}, {
    value: 'datetime-local',
    text: 'datetime-local'
}, {
    value: 'datetime',
    text: 'datetime'
}, {
    value: 'date',
    text: 'date'
}, {
    value: 'time',
    text: 'time'
}, {
    value: 'week',
    text: 'week'
}, {
    value: 'month',
    text: 'month'
}, {
    value: 'range',
    text: 'range'
}, {
    value: 'color',
    text: 'color'
}];

var inputTypeNames = inputTypes.reduce(function (prev, cur) {
    prev.push(cur.value);
    return prev;
}, []);

exports.inputTypes = inputTypes;
exports.inputTypeNames = inputTypeNames;

},{}],90:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
var textareainput = {
    name: "Text Area",
    image: "icons/text_area.svg",
    html: '<div class="form-group"><label>Your response:</label><textarea class="form-control"></textarea></div>'
};

exports.default = textareainput;

},{}],89:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var tablerow = {
    nodes: ["tr"],
    name: "Table Row",
    html: "<tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td></tr>",
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: _inputs.SelectInput,
        validValues: ["", "success", "danger", "warning", "active"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "success",
                text: "Success"
            }, {
                value: "error",
                text: "Error"
            }, {
                value: "warning",
                text: "Warning"
            }, {
                value: "active",
                text: "Active"
            }]
        }
    }]
};

exports.default = tablerow;

},{"../../inputs/inputs":170}],88:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
var tableheadercell = {
    nodes: ["th"],
    name: "Table Header Cell",
    html: "<th>Head</th>"
};

exports.default = tableheadercell;

},{}],87:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var tablehead = {
    nodes: ["thead"],
    name: "Table Head",
    html: "<thead><tr><th>Head 1</th><th>Head 2</th><th>Head 3</th></tr></thead>",
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: _inputs.SelectInput,
        validValues: ["", "success", "danger", "warning", "info"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "success",
                text: "Success"
            }, {
                value: "anger",
                text: "Error"
            }, {
                value: "warning",
                text: "Warning"
            }, {
                value: "info",
                text: "Info"
            }]
        }
    }]
};

exports.default = tablehead;

},{"../../inputs/inputs":170}],86:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
var tablecell = {
    nodes: ["td"],
    name: "Table Cell",
    html: "<td>Cell</td>"
};

exports.default = tablecell;

},{}],85:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
var tablebody = {
    nodes: ["tbody"],
    name: "Table Body",
    html: "<tbody><tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td></tr></tbody>"
};

exports.default = tablebody;

},{}],84:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var table = {
    nodes: ["table"],
    classes: ["table"],
    image: "icons/table.svg",
    name: "Table",
    html: '<table class="table">\
		  <thead>\
			<tr>\
			  <th>#</th>\
			  <th>First Name</th>\
			  <th>Last Name</th>\
			  <th>Username</th>\
			</tr>\
		  </thead>\
		  <tbody>\
			<tr>\
			  <th scope="row">1</th>\
			  <td>Mark</td>\
			  <td>Otto</td>\
			  <td>@mdo</td>\
			</tr>\
			<tr>\
			  <th scope="row">2</th>\
			  <td>Jacob</td>\
			  <td>Thornton</td>\
			  <td>@fat</td>\
			</tr>\
			<tr>\
			  <th scope="row">3</th>\
			  <td>Larry</td>\
			  <td>the Bird</td>\
			  <td>@twitter</td>\
			</tr>\
		  </tbody>\
		</table>',
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        validValues: ["table-primary", "table-secondary", "table-success", "table-danger", "table-warning", "table-info", "table-light", "table-dark", "table-white"],
        inputtype: _inputs.SelectInput,
        data: {
            options: [{
                value: "Default",
                text: ""
            }, {
                value: "table-primary",
                text: "Primary"
            }, {
                value: "table-secondary",
                text: "Secondary"
            }, {
                value: "table-success",
                text: "Success"
            }, {
                value: "table-danger",
                text: "Danger"
            }, {
                value: "table-warning",
                text: "Warning"
            }, {
                value: "table-info",
                text: "Info"
            }, {
                value: "table-light",
                text: "Light"
            }, {
                value: "table-dark",
                text: "Dark"
            }, {
                value: "table-white",
                text: "White"
            }]
        }
    }, {
        name: "Responsive",
        key: "responsive",
        htmlAttr: "class",
        validValues: ["table-responsive"],
        inputtype: _inputs.ToggleInput,
        data: {
            on: "table-responsive",
            off: ""
        }
    }, {
        name: "Small",
        key: "small",
        htmlAttr: "class",
        validValues: ["table-sm"],
        inputtype: _inputs.ToggleInput,
        data: {
            on: "table-sm",
            off: ""
        }
    }, {
        name: "Hover",
        key: "hover",
        htmlAttr: "class",
        validValues: ["table-hover"],
        inputtype: _inputs.ToggleInput,
        data: {
            on: "table-hover",
            off: ""
        }
    }, {
        name: "Bordered",
        key: "bordered",
        htmlAttr: "class",
        validValues: ["table-bordered"],
        inputtype: _inputs.ToggleInput,
        data: {
            on: "table-bordered",
            off: ""
        }
    }, {
        name: "Striped",
        key: "striped",
        htmlAttr: "class",
        validValues: ["table-striped"],
        inputtype: _inputs.ToggleInput,
        data: {
            on: "table-striped",
            off: ""
        }
    }, {
        name: "Inverse",
        key: "inverse",
        htmlAttr: "class",
        validValues: ["table-inverse"],
        inputtype: _inputs.ToggleInput,
        data: {
            on: "table-inverse",
            off: ""
        }
    }, {
        name: "Head options",
        key: "head",
        htmlAttr: "class",
        child: "thead",
        inputtype: _inputs.SelectInput,
        validValues: ["", "thead-inverse", "thead-default"],
        data: {
            options: [{
                value: "",
                text: "None"
            }, {
                value: "thead-default",
                text: "Default"
            }, {
                value: "thead-inverse",
                text: "Inverse"
            }]
        }
    }]
};

exports.default = table;

},{"../../inputs/inputs":170}],83:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _builder = require('../../builder');

var _builder2 = _interopRequireDefault(_builder);

var _inputs = require('../../inputs/inputs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectinput = {
    nodes: ["select"],
    name: "Select Input",
    image: "icons/select_input.svg",
    html: '<div class="form-group" style="display: inline-block;"><label>Choose an option </label><select class="form-control"><option value="value1">Text 1</option><option value="value2">Text 2</option><option value="value3">Text 3</option></select></div>',

    beforeInit: function beforeInit(node) {
        properties = [];
        var i = 0;

        $(node).find('option').each(function () {

            data = { "value": this.value, "text": this.text };

            i++;
            properties.push({
                name: "Option " + i,
                key: "option" + i,
                //index: i - 1,
                optionNode: this,
                inputtype: _inputs.TextValueInput,
                data: data,
                onChange: function onChange(node, value, input) {

                    option = $(this.optionNode);

                    //if remove button is clicked remove option and render row properties
                    if (input.nodeName == 'BUTTON') {
                        option.remove();
                        _builder2.default.Components.render("html/selectinput@general");
                        return node;
                    }

                    if (input.name == "value") option.attr("value", value);else if (input.name == "text") option.text(value);

                    return node;
                }
            });
        });

        //remove all option properties
        this.properties = this.properties.filter(function (item) {
            return item.key.indexOf("option") === -1;
        });

        //add remaining properties to generated column properties
        properties.push(this.properties[0]);

        this.properties = properties;
        return node;
    },

    properties: [{
        name: "Option",
        key: "option1",
        inputtype: _inputs.TextValueInput
    }, {
        name: "Option",
        key: "option2",
        inputtype: _inputs.TextValueInput
    }, {
        name: "",
        key: "addChild",
        inputtype: _inputs.ButtonInput,
        data: { text: "Add option" },
        onChange: function onChange(node) {
            $(node).append('<option value="value">Text</option>');

            //render component properties again to include the new column inputs
            _builder2.default.Components.render("html/selectinput@general");

            return node;
        }
    }]
};

exports.default = selectinput;

},{"../../builder":52,"../../inputs/inputs":170}],82:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../../inputs/inputs');

var _common = require('../common');

var radiobutton = {
    name: "Radio Button",
    attributes: { "type": "radio" },
    image: "icons/radio.svg",
    html: '<label ' + _common.dataComponentId + '="html/radiobutton@general" class="radio"><input type="radio"> Radio</label>',
    properties: [{
        name: "Name",
        key: "name",
        htmlAttr: "name",
        inputtype: _inputs.TextInput
    }]
};

exports.default = radiobutton;

},{"../../inputs/inputs":170,"../common":138}],81:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../../inputs/inputs');

var _common = require('../common');

var progress = {
    classes: ["progress"],
    name: "Progress Bar",
    image: "icons/progressbar.svg",
    html: '<div class="progress"><div class="progress-bar w-25"></div></div>',
    properties: [{
        name: "Background",
        key: "background",
        htmlAttr: "class",
        validValues: _common.bgcolorClasses,
        inputtype: _inputs.SelectInput,
        data: {
            options: _common.bgcolorSelectOptions
        }
    }, {
        name: "Progress",
        key: "background",
        child: ".progress-bar",
        htmlAttr: "class",
        validValues: ["", "w-25", "w-50", "w-75", "w-100"],
        inputtype: _inputs.SelectInput,
        data: {
            options: [{
                value: "",
                text: "None"
            }, {
                value: "w-25",
                text: "25%"
            }, {
                value: "w-50",
                text: "50%"
            }, {
                value: "w-75",
                text: "75%"
            }, {
                value: "w-100",
                text: "100%"
            }]
        }
    }, {
        name: "Progress background",
        key: "background",
        child: ".progress-bar",
        htmlAttr: "class",
        validValues: _common.bgcolorClasses,
        inputtype: _inputs.SelectInput,
        data: {
            options: _common.bgcolorSelectOptions
        }
    }, {
        name: "Striped",
        key: "striped",
        child: ".progress-bar",
        htmlAttr: "class",
        validValues: ["", "progress-bar-striped"],
        inputtype: _inputs.ToggleInput,
        data: {
            on: "progress-bar-striped",
            off: ""
        }
    }, {
        name: "Animated",
        key: "animated",
        child: ".progress-bar",
        htmlAttr: "class",
        validValues: ["", "progress-bar-animated"],
        inputtype: _inputs.ToggleInput,
        data: {
            on: "progress-bar-animated",
            off: ""
        }
    }]
};

exports.default = progress;

},{"../../inputs/inputs":170,"../common":138}],80:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var pagination = {
    classes: ["pagination"],
    name: "Pagination",
    image: "icons/pagination.svg",
    html: '<nav aria-label="Page navigation example">\
	  <ul class="pagination">\
		<li class="page-item"><a class="page-link" href="#">Previous</a></li>\
		<li class="page-item"><a class="page-link" href="#">1</a></li>\
		<li class="page-item"><a class="page-link" href="#">2</a></li>\
		<li class="page-item"><a class="page-link" href="#">3</a></li>\
		<li class="page-item"><a class="page-link" href="#">Next</a></li>\
	  </ul>\
	</nav>',

    properties: [{
        name: "Size",
        key: "size",
        htmlAttr: "class",
        inputtype: _inputs.SelectInput,
        validValues: ["btn-lg", "btn-sm"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-lg",
                text: "Large"
            }, {
                value: "btn-sm",
                text: "Small"
            }]
        }
    }, {
        name: "Alignment",
        key: "alignment",
        htmlAttr: "class",
        inputtype: _inputs.SelectInput,
        validValues: ["justify-content-center", "justify-content-end"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "justify-content-center",
                text: "Center"
            }, {
                value: "justify-content-end",
                text: "Right"
            }]
        }
    }]
};

exports.default = pagination;

},{"../../inputs/inputs":170}],79:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../../inputs/inputs');

var pageitem = {
    classes: ["page-item"],
    html: '<li class="page-item"><a class="page-link" href="#">1</a></li>',
    name: "Pagination Item",
    properties: [{
        name: "Link To",
        key: "href",
        htmlAttr: "href",
        child: ".page-link",
        inputtype: _inputs.TextInput
    }, {
        name: "Disabled",
        key: "disabled",
        htmlAttr: "class",
        validValues: ["disabled"],
        inputtype: _inputs.ToggleInput,
        data: {
            on: "disabled",
            off: ""
        }
    }]
};

exports.default = pageitem;

},{"../../inputs/inputs":170}],78:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../../inputs/inputs');

var _common = require('../common');

var navbar = {
    classes: ["navbar"],
    image: "icons/navbar.svg",
    name: "Nav Bar",
    html: '<nav class="navbar navbar-expand-lg navbar-light bg-light">\
		  <a class="navbar-brand" href="#">Navbar</a>\
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
			<span class="navbar-toggler-icon"></span>\
		  </button>\
		\
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">\
			<ul class="navbar-nav mr-auto">\
			  <li class="nav-item active">\
				<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\
			  </li>\
			  <li class="nav-item">\
				<a class="nav-link" href="#">Link</a>\
			  </li>\
			  <li class="nav-item">\
				<a class="nav-link disabled" href="#">Disabled</a>\
			  </li>\
			</ul>\
			<form class="form-inline my-2 my-lg-0">\
			  <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">\
			  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>\
			</form>\
		  </div>\
		</nav>',

    properties: [{
        name: "Color theme",
        key: "color",
        htmlAttr: "class",
        validValues: ["navbar-light", "navbar-dark"],
        inputtype: _inputs.SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "navbar-light",
                text: "Light"
            }, {
                value: "navbar-dark",
                text: "Dark"
            }]
        }
    }, {
        name: "Background color",
        key: "background",
        htmlAttr: "class",
        validValues: _common.bgcolorClasses,
        inputtype: _inputs.SelectInput,
        data: {
            options: _common.bgcolorSelectOptions
        }
    }, {
        name: "Placement",
        key: "placement",
        htmlAttr: "class",
        validValues: ["fixed-top", "fixed-bottom", "sticky-top"],
        inputtype: _inputs.SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "fixed-top",
                text: "Fixed Top"
            }, {
                value: "fixed-bottom",
                text: "Fixed Bottom"
            }, {
                value: "sticky-top",
                text: "Sticky top"
            }]
        }
    }]
};

exports.default = navbar;

},{"../../inputs/inputs":170,"../common":138}],77:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
var listitem = {
    name: "List Item",
    classes: ["list-group-item"],
    html: '<li class="list-group-item"><span class="badge">14</span> Cras justo odio</li>'
};

exports.default = listitem;

},{}],76:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
var listgroup = {
    name: "List Group",
    image: "icons/list_group.svg",
    classes: ["list-group"],
    html: '<ul class="list-group">\n  <li class="list-group-item">\n    <span class="badge">14</span>\n    Cras justo odio\n  </li>\n  <li class="list-group-item">\n    <span class="badge">2</span>\n    Dapibus ac facilisis in\n  </li>\n  <li class="list-group-item">\n    <span class="badge">1</span>\n    Morbi leo risus\n  </li>\n</ul>'
};

exports.default = listgroup;

},{}],75:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var link = {
    nodes: ["a"],
    name: "Link",
    properties: [{
        name: "Url",
        key: "href",
        htmlAttr: "href",
        inputtype: _inputs.LinkInput
    }, {
        name: "Target",
        key: "target",
        htmlAttr: "target",
        inputtype: _inputs.TextInput
    }]
};

exports.default = link;

},{"../../inputs/inputs":170}],74:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../../inputs/inputs');

var label = {
    name: 'Label',
    nodes: ['label'],
    image: 'icons/label.svg',
    html: '<label for="">Label</label>',
    properties: [{
        name: 'For id',
        htmlAttr: 'for',
        key: 'for',
        inputtype: _inputs.TextInput
    }]
};

exports.default = label;

},{"../../inputs/inputs":170}],73:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
	value: true
});
var jumbotron = {
	classes: ["jumbotron"],
	image: "icons/jumbotron.svg",
	name: "Jumbotron",
	html: '<div class="jumbotron">\
		  <h1 class="display-3">Hello, world!</h1>\
		  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\
		  <hr class="my-4">\
		  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\
		  <p class="lead">\
			<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\
		  </p>\
		</div>'
};

exports.default = jumbotron;

},{}],72:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _builder = require('../../builder');

var _builder2 = _interopRequireDefault(_builder);

var _inputs = require('../../inputs/inputs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = {
    nodes: ["img"],
    name: "Image",
    html: '<img src="' + _builder2.default.baseUrl + 'icons/image.svg" height="128" width="128">',
    /*
    afterDrop: function (node)
    {
    node.attr("src", '');
    return node;
    },*/
    image: "icons/image.svg",
    properties: [{
        name: "Image",
        key: "src",
        htmlAttr: "src",
        inputtype: _inputs.FileUploadInput
    }, {
        name: "Width",
        key: "width",
        htmlAttr: "width",
        inputtype: _inputs.TextInput
    }, {
        name: "Height",
        key: "height",
        htmlAttr: "height",
        inputtype: _inputs.TextInput
    }, {
        name: "Alt",
        key: "alt",
        htmlAttr: "alt",
        inputtype: _inputs.TextInput
    }]
};

exports.default = image;

},{"../../builder":52,"../../inputs/inputs":170}],71:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
var hr = {
    image: "icons/hr.svg",
    nodes: ["hr"],
    name: "Horizontal Rule",
    html: "<hr>"
};

exports.default = hr;

},{}],70:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = require('../common');

var _inputs = require('../../inputs/inputs');

var heading = {
    image: "icons/heading.svg",
    name: "Heading",
    nodes: ["h1", "h2", "h3", "h4", "h5", "h6"],
    html: "<h1>Heading</h1>",

    properties: [{
        name: "Size",
        key: "id",
        htmlAttr: "id",
        inputtype: _inputs.SelectInput,

        onChange: function onChange(node, value) {

            return (0, _common.changeNodeName)(node, "h" + value);
        },

        init: function init(node) {
            var regex;
            regex = /H(\d)/.exec(node.nodeName);
            if (regex && regex[1]) {
                return regex[1];
            }
            return 1;
        },

        data: {
            options: [{
                value: "1",
                text: "1"
            }, {
                value: "2",
                text: "2"
            }, {
                value: "3",
                text: "3"
            }, {
                value: "4",
                text: "4"
            }, {
                value: "5",
                text: "5"
            }, {
                value: "6",
                text: "6"
            }]
        }
    }]
};

exports.default = heading;

},{"../../inputs/inputs":170,"../common":138}],69:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var gridrow = {
    name: "Grid Row",
    image: "icons/grid_row.svg",
    classes: ["row"],
    html: '<div class="row"><div class="col-sm-4"><h3>col-sm-4</h3></div><div class="col-sm-4 col-5"><h3>col-sm-4</h3></div><div class="col-sm-4"><h3>col-sm-4</h3></div></div>',

    beforeInit: function beforeInit(node) {
        properties = [];
        var i = 0;
        var j = 0;

        $(node).find('[class*="col-"]').each(function () {
            _class = $(this).attr("class");

            var reg = /col-([^-\$ ]*)?-?(\d+)/g;
            var match;
            data = {};

            while ((match = reg.exec(_class)) != null) {
                data["col" + (match[1] != undefined ? "_" + match[1] : "")] = match[2];
            }

            i++;
            properties.push({
                name: "Column " + i,
                key: "column" + i,
                //index: i - 1,
                columnNode: this,
                inline: true,
                inputtype: _inputs.GridInput,
                data: data,
                onChange: function onChange(node, value, input) {

                    //column = $('[class*="col-"]:eq(' + this.index + ')', node);
                    column = $(this.columnNode);

                    //if remove button is clicked remove column and render row properties
                    if (input.nodeName == 'BUTTON') {
                        column.remove();
                        Vvveb.Components.render("html/gridrow");
                        return node;
                    }

                    //if select input then change column class
                    _class = column.attr("class");

                    //remove previous breakpoint column size
                    _class = _class.replace(new RegExp(input.name + '-\\d+?'), '');
                    //add new column size
                    if (value) _class += ' ' + input.name + '-' + value;
                    column.attr("class", _class);

                    return node;
                }
            });
        });

        //remove all column properties
        this.properties = this.properties.filter(function (item) {
            return item.key.indexOf("column") === -1;
        });

        //add remaining properties to generated column properties
        properties.push(this.properties[0]);

        this.properties = properties;
        return node;
    },

    properties: [{
        name: "Column",
        key: "column1",
        inputtype: _inputs.GridInput
    }, {
        name: "Column",
        key: "column1",
        inline: true,
        col: 12,
        inputtype: _inputs.GridInput
    }, {
        name: "",
        key: "addChild",
        inputtype: _inputs.ButtonInput,
        data: { text: "Add column" },
        onChange: function onChange(node) {
            $(node).append('<div class="col-3">Col-3</div>');

            //render component properties again to include the new column inputs
            Vvveb.Components.render("html/gridrow");

            return node;
        }
    }]
};

exports.default = gridrow;

},{"../../inputs/inputs":170}],68:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var gridcolumn = {
    name: "Grid Column",
    image: "icons/grid_row.svg",
    classesRegex: ["col-"],
    html: '<div class="col-sm-4"><h3>col-sm-4</h3></div>',
    properties: [{
        name: "Column",
        key: "column",
        inputtype: _inputs.GridInput,
        data: { hide_remove: true },

        beforeInit: function beforeInit(node) {
            _class = $(node).attr("class");

            var reg = /col-([^-\$ ]*)?-?(\d+)/g;
            var match;

            while ((match = reg.exec(_class)) != null) {
                this.data["col" + (match[1] != undefined ? "_" + match[1] : "")] = match[2];
            }
        },

        onChange: function onChange(node, value, input) {
            _class = node.attr("class");

            //remove previous breakpoint column size
            _class = _class.replace(new RegExp(input.name + '-\\d+?'), '');
            //add new column size
            if (value) _class += ' ' + input.name + '-' + value;
            node.attr("class", _class);

            return node;
        }
    }]
};

exports.default = gridcolumn;

},{"../../inputs/inputs":170}],67:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var form = {
    nodes: ["form"],
    image: "icons/form.svg",
    name: "Form",
    html: '<form class="dropzone"></form>',
    properties: [{
        name: "Style",
        key: "style",
        htmlAttr: "class",
        validValues: ["", "form-search", "form-inline", "form-horizontal"],
        inputtype: _inputs.SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "form-search",
                text: "Search"
            }, {
                value: "form-inline",
                text: "Inline"
            }, {
                value: "form-horizontal",
                text: "Horizontal"
            }]
        }
    }, {
        name: "Action",
        key: "action",
        htmlAttr: "action",
        inputtype: _inputs.TextInput
    }, {
        name: "Method",
        key: "method",
        htmlAttr: "method",
        inputtype: _inputs.TextInput
    }]
};

exports.default = form;

},{"../../inputs/inputs":170}],66:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
var fileinput = {
    name: "Input group",
    attributes: { "type": "file" },
    image: "icons/text_input.svg",
    html: '<div class="form-group">\
			  <input type="file" class="form-control">\
			</div>'
};

exports.default = fileinput;

},{}],65:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = require('../common');

var _inputs = require('../../inputs/inputs');

var div = {
    classes: ["container", "container-fluid"],
    image: "icons/div.svg",
    html: '<div style="width: 350px; height: 200px;" class="dropzone"></div>',
    name: "Div",
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: _inputs.SelectInput,
        validValues: ["container", "container-fluid"],
        data: {
            options: [{
                value: "container",
                text: "Default"
            }, {
                value: "container-fluid",
                text: "Fluid"
            }]
        }
    }, {
        name: "Background",
        key: "background",
        htmlAttr: "class",
        validValues: _common.bgcolorClasses,
        inputtype: _inputs.SelectInput,
        data: {
            options: _common.bgcolorSelectOptions
        }
    }, {
        name: "Background Color",
        key: "background-color",
        htmlAttr: "style",
        inputtype: _inputs.ColorInput
    }, {
        name: "Text Color",
        key: "color",
        htmlAttr: "style",
        inputtype: _inputs.ColorInput
    }]
};

exports.default = div;

},{"../../inputs/inputs":170,"../common":138}],64:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require('../../inputs/inputs');

var _common = require('../common');

var container = {
    classes: ["container", "container-fluid"],
    image: "icons/container.svg",
    html: '<div class="container dropzone"><div class="m-5">Container</div></div>',
    name: "Container",
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: _inputs.SelectInput,
        validValues: ["container", "container-fluid"],
        data: {
            options: [{
                value: "container",
                text: "Default"
            }, {
                value: "container-fluid",
                text: "Fluid"
            }]
        }
    }, {
        name: "Background",
        key: "background",
        htmlAttr: "class",
        validValues: _common.bgcolorClasses,
        inputtype: _inputs.SelectInput,
        data: {
            options: _common.bgcolorSelectOptions
        }
    }, {
        name: "Background Color",
        key: "background-color",
        htmlAttr: "style",
        inputtype: _inputs.ColorInput
    }, {
        name: "Text Color",
        key: "color",
        htmlAttr: "style",
        inputtype: _inputs.ColorInput
    }]
};

exports.default = container;

},{"../../inputs/inputs":170,"../common":138}],62:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var checkbox = {
    name: "Checkbox",
    attributes: { "type": "checkbox" },
    image: "icons/checkbox.svg",
    html: '<label class="checkbox"><input type="checkbox"> Checkbox</label>',
    properties: [{
        name: "Name",
        key: "name",
        htmlAttr: "name",
        inputtype: _inputs.TextInput
    }]
};

exports.default = checkbox;

},{"../../inputs/inputs":170}],61:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
	value: true
});
var card = {
	classes: ["card"],
	image: "icons/panel.svg",
	name: "Card",
	html: '<div class="card">\
		  <img class="card-img-top" src="../libs/builder/icons/image.svg" alt="Card image cap" width="128" height="128">\
		  <div class="card-body">\
			<h4 class="card-title">Card title</h4>\
			<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\
			<a href="#" class="btn btn-primary">Go somewhere</a>\
		  </div>\
		</div>'
};

exports.default = card;

},{}],60:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
	value: true
});
var buttontoolbar = {
	classes: ["btn-toolbar"],
	name: "Button Toolbar",
	image: "icons/button_toolbar.svg",
	html: '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">\
		  <div class="btn-group mr-2" role="group" aria-label="First group">\
			<button type="button" class="btn btn-secondary">1</button>\
			<button type="button" class="btn btn-secondary">2</button>\
			<button type="button" class="btn btn-secondary">3</button>\
			<button type="button" class="btn btn-secondary">4</button>\
		  </div>\
		  <div class="btn-group mr-2" role="group" aria-label="Second group">\
			<button type="button" class="btn btn-secondary">5</button>\
			<button type="button" class="btn btn-secondary">6</button>\
			<button type="button" class="btn btn-secondary">7</button>\
		  </div>\
		  <div class="btn-group" role="group" aria-label="Third group">\
			<button type="button" class="btn btn-secondary">8</button>\
		  </div>\
		</div>'
};

exports.default = buttontoolbar;

},{}],59:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var buttongroup = {
    classes: ["btn-group"],
    name: "Button Group",
    image: "icons/button_group.svg",
    html: '<div class="btn-group" role="group" aria-label="Basic example"><button type="button" class="btn btn-secondary">Left</button><button type="button" class="btn btn-secondary">Middle</button> <button type="button" class="btn btn-secondary">Right</button></div>',
    properties: [{
        name: "Size",
        key: "size",
        htmlAttr: "class",
        inputtype: _inputs.SelectInput,
        validValues: ["btn-group-lg", "btn-group-sm"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-group-lg",
                text: "Large"
            }, {
                value: "btn-group-sm",
                text: "Small"
            }]
        }
    }, {
        name: "Alignment",
        key: "alignment",
        htmlAttr: "class",
        inputtype: _inputs.SelectInput,
        validValues: ["btn-group", "btn-group-vertical"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-group",
                text: "Horizontal"
            }, {
                value: "btn-group-vertical",
                text: "Vertical"
            }]
        }
    }]
};

exports.default = buttongroup;

},{"../../inputs/inputs":170}],58:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var button = {
    classes: ["btn", "btn-link"],
    name: "Button",
    image: "icons/button.svg",
    html: '<button type="button" class="btn btn-primary">Primary</button>',
    properties: [{
        name: "Link To",
        key: "href",
        htmlAttr: "href",
        inputtype: _inputs.LinkInput
    }, {
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: _inputs.SelectInput,
        validValues: ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-info", "btn-light", "btn-dark", "btn-outline-primary", "btn-outline-info", "btn-outline-success", "btn-outline-warning", "btn-outline-info", "btn-outline-light", "btn-outline-dark", "btn-link"],
        data: {
            options: [{
                value: "btn-default",
                text: "Default"
            }, {
                value: "btn-primary",
                text: "Primary"
            }, {
                value: "btn btn-info",
                text: "Info"
            }, {
                value: "btn-success",
                text: "Success"
            }, {
                value: "btn-warning",
                text: "Warning"
            }, {
                value: "btn-info",
                text: "Info"
            }, {
                value: "btn-light",
                text: "Light"
            }, {
                value: "btn-dark",
                text: "Dark"
            }, {
                value: "btn-outline-primary",
                text: "Primary outline"
            }, {
                value: "btn btn-outline-info",
                text: "Info outline"
            }, {
                value: "btn-outline-success",
                text: "Success outline"
            }, {
                value: "btn-outline-warning",
                text: "Warning outline"
            }, {
                value: "btn-outline-info",
                text: "Info outline"
            }, {
                value: "btn-outline-light",
                text: "Light outline"
            }, {
                value: "btn-outline-dark",
                text: "Dark outline"
            }, {
                value: "btn-link",
                text: "Link"
            }]
        }
    }, {
        name: "Size",
        key: "size",
        htmlAttr: "class",
        inputtype: _inputs.SelectInput,
        validValues: ["btn-lg", "btn-sm"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-lg",
                text: "Large"
            }, {
                value: "btn-sm",
                text: "Small"
            }]
        }
    }, {
        name: "Target",
        key: "target",
        htmlAttr: "target",
        inputtype: _inputs.TextInput
    }, {
        name: "Disabled",
        key: "disabled",
        htmlAttr: "class",
        inputtype: _inputs.ToggleInput,
        validValues: ["disabled"],
        data: {
            on: "disabled",
            off: ""
        }
    }]
};

exports.default = button;

},{"../../inputs/inputs":170}],57:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
var breadcrumbs = {
    classes: ["breadcrumb"],
    name: "Breadcrumbs",
    image: "icons/breadcrumbs.svg",
    html: '<ol class="breadcrumb">\
		  <li class="breadcrumb-item active"><a href="#">Home</a></li>\
		  <li class="breadcrumb-item active"><a href="#">Library</a></li>\
		  <li class="breadcrumb-item active">Data 3</li>\
		</ol>'
};

exports.default = breadcrumbs;

},{}],56:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var breadcrumbitem = {
    classes: ["breadcrumb-item"],
    name: "Breadcrumb Item",
    html: '<li class="breadcrumb-item"><a href="#">Library</a></li>',
    properties: [{
        name: "Active",
        key: "active",
        htmlAttr: "class",
        validValues: ["", "active"],
        inputtype: _inputs.ToggleInput,
        data: {
            on: "active",
            off: ""
        }
    }]
};

exports.default = breadcrumbitem;

},{"../../inputs/inputs":170}],55:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var badge = {
    classes: ["badge"],
    image: "icons/badge.svg",
    name: "Badge",
    html: '<span class="badge badge-primary">Primary badge</span>',
    properties: [{
        name: "Color",
        key: "color",
        htmlAttr: "class",
        validValues: ["badge-primary", "badge-secondary", "badge-success", "badge-danger", "badge-warning", "badge-info", "badge-light", "badge-dark"],
        inputtype: _inputs.SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "badge-primary",
                text: "Primary"
            }, {
                value: "badge-secondary",
                text: "Secondary"
            }, {
                value: "badge-success",
                text: "Success"
            }, {
                value: "badge-warning",
                text: "Warning"
            }, {
                value: "badge-danger",
                text: "Danger"
            }, {
                value: "badge-info",
                text: "Info"
            }, {
                value: "badge-light",
                text: "Light"
            }, {
                value: "badge-dark",
                text: "Dark"
            }]
        }
    }]
};

exports.default = badge;

},{"../../inputs/inputs":170}],54:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputs = require("../../inputs/inputs");

var alert = {
    classes: ["alert"],
    name: "Alert",
    image: "icons/alert.svg",
    html: '<div class="alert alert-warning alert-dismissible fade show" role="alert">\
		  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
			<span aria-hidden="true">&times;</span>\
		  </button>\
		  <strong>Holy guacamole!</strong> You should check in on some of those fields below.\
		</div>',
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        validValues: ["alert-primary", "alert-secondary", "alert-success", "alert-danger", "alert-warning", "alert-info", "alert-light", "alert-dark"],
        inputtype: _inputs.SelectInput,
        data: {
            options: [{
                value: "alert-primary",
                text: "Default"
            }, {
                value: "alert-secondary",
                text: "Secondary"
            }, {
                value: "alert-success",
                text: "Success"
            }, {
                value: "alert-danger",
                text: "Danger"
            }, {
                value: "alert-warning",
                text: "Warning"
            }, {
                value: "alert-info",
                text: "Info"
            }, {
                value: "alert-light",
                text: "Light"
            }, {
                value: "alert-dark",
                text: "Dark"
            }]
        }
    }]
};

exports.default = alert;

},{"../../inputs/inputs":170}]},{},[53])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYWN0b3ItYnVuZGxlL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGNvbXBvbmVudHMuanMiLCJzcmNcXGNvbXBvbmVudHNcXHR5cG9ncmFwaHkuanMiLCJzcmNcXGNvbXBvbmVudHNcXHNpemUuanMiLCJzcmNcXGNvbXBvbmVudHNcXHBhZGRpbmcuanMiLCJzcmNcXGNvbXBvbmVudHNcXG1hcmdpbi5qcyIsInNyY1xcY29tcG9uZW50c1xcZWxlbWVudC5qcyIsInNyY1xcY29tcG9uZW50c1xcZGlzcGxheS5qcyIsInNyY1xcY29tcG9uZW50c1xcYm9yZGVyLmpzIiwic3JjXFxjb21wb25lbnRzXFxAb2VlXFxjb21wb25lbnRzLmpzIiwic3JjXFxjb21wb25lbnRzXFxAb2VlXFx0ZXh0aW5wdXQuanMiLCJzcmNcXGNvbXBvbmVudHNcXEBvZWVcXHRleHQuanMiLCJzcmNcXGNvbXBvbmVudHNcXEBvZWVcXHNwYW4uanMiLCJzcmNcXGNvbXBvbmVudHNcXEBvZWVcXHNlbGVjdGlucHV0LmpzIiwic3JjXFxjb21wb25lbnRzXFxAb2VlXFxyYWRpb2J1dHRvbi5qcyIsInNyY1xcY29tcG9uZW50c1xcQG9lZVxcbWFudWFsc2VsZWN0aW5wdXQuanMiLCJzcmNcXGNvbXBvbmVudHNcXEBvZWVcXGxhYmVsZGl2LmpzIiwic3JjXFxjb21wb25lbnRzXFxAb2VlXFxjaGVja2JveC5qcyIsInNyY1xcY29tcG9uZW50c1xcQG9lZVxcY2FsZW5kYXIuanMiLCJzcmNcXGNvbXBvbmVudHNcXEBvZWVcXGJ1dHRvbi5qcyIsInNyY1xcY29tcG9uZW50c1xcQG9lZVxcYXV0b3NlbGVjdGlucHV0LmpzIiwic3JjXFxjb21wb25lbnRzXFxAb2VlXFxpZHMuanMiLCJzcmNcXGNvbXBvbmVudHNcXEBnZW5lcmFsXFxjb21wb25lbnRzLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcdGV4dGlucHV0LmpzIiwic3JjXFxjb21wb25lbnRzXFxpbnB1dFR5cGVzLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcdGV4dGFyZWFpbnB1dC5qcyIsInNyY1xcY29tcG9uZW50c1xcQGdlbmVyYWxcXHRhYmxlcm93LmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcdGFibGVoZWFkZXJjZWxsLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcdGFibGVoZWFkLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcdGFibGVjZWxsLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcdGFibGVib2R5LmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcdGFibGUuanMiLCJzcmNcXGNvbXBvbmVudHNcXEBnZW5lcmFsXFxzZWxlY3RpbnB1dC5qcyIsInNyY1xcY29tcG9uZW50c1xcQGdlbmVyYWxcXHJhZGlvYnV0dG9uLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxccHJvZ3Jlc3MuanMiLCJzcmNcXGNvbXBvbmVudHNcXEBnZW5lcmFsXFxwYWdpbmF0aW9uLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxccGFnZWl0ZW0uanMiLCJzcmNcXGNvbXBvbmVudHNcXEBnZW5lcmFsXFxuYXZiYXIuanMiLCJzcmNcXGNvbXBvbmVudHNcXEBnZW5lcmFsXFxsaXN0aXRlbS5qcyIsInNyY1xcY29tcG9uZW50c1xcQGdlbmVyYWxcXGxpc3Rncm91cC5qcyIsInNyY1xcY29tcG9uZW50c1xcQGdlbmVyYWxcXGxpbmsuanMiLCJzcmNcXGNvbXBvbmVudHNcXEBnZW5lcmFsXFxsYWJlbC5qcyIsInNyY1xcY29tcG9uZW50c1xcQGdlbmVyYWxcXGp1bWJvdHJvbi5qcyIsInNyY1xcY29tcG9uZW50c1xcQGdlbmVyYWxcXGltYWdlLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcaHIuanMiLCJzcmNcXGNvbXBvbmVudHNcXEBnZW5lcmFsXFxoZWFkaW5nLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcZ3JpZHJvdy5qcyIsInNyY1xcY29tcG9uZW50c1xcQGdlbmVyYWxcXGdyaWRjb2x1bW4uanMiLCJzcmNcXGNvbXBvbmVudHNcXEBnZW5lcmFsXFxmb3JtLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcZmlsZWlucHV0LmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcZGl2LmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcY29udGFpbmVyLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcY2hlY2tib3guanMiLCJzcmNcXGNvbXBvbmVudHNcXEBnZW5lcmFsXFxjYXJkLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcYnV0dG9udG9vbGJhci5qcyIsInNyY1xcY29tcG9uZW50c1xcQGdlbmVyYWxcXGJ1dHRvbmdyb3VwLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcYnV0dG9uLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcYnJlYWRjcnVtYnMuanMiLCJzcmNcXGNvbXBvbmVudHNcXEBnZW5lcmFsXFxicmVhZGNydW1iaXRlbS5qcyIsInNyY1xcY29tcG9uZW50c1xcQGdlbmVyYWxcXGJhZGdlLmpzIiwic3JjXFxjb21wb25lbnRzXFxAZ2VuZXJhbFxcYWxlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7OztBQUNBOztJQUFZLFE7O0FBQ1o7O0lBQVksSTs7QUFDWjs7SUFBWSxROztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLGtCQUFNLGVBQU4sQ0FBc0IsTUFBdEIsSUFDSSxDQUFDLG1CQUFELEVBQXNCLGlCQUF0QixFQUF5QyxvQkFBekMsRUFBK0QsbUJBQS9ELEVBQW9GLFNBQVMsaUJBQTdGLEVBQWdILFNBQVMsbUJBQXpILEVBQ0ksc0JBREosRUFDNEIsbUJBRDVCLEVBQ2lELGdCQURq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Y0FEUjtBQUVDLHNCQUFNO0FBRlAsYUFUTSxFQVlOO0FBQ0MsdUJBQU8sZUFEUjtBQUVDLHNCQUFNO0FBRlAsYUFaTSxFQWVOO0FBQ0MsdUJBQU8sWUFEUjtBQUVDLHNCQUFNO0FBRlAsYUFmTSxFQWtCTjtBQUNDLHVCQUFPLGFBRFI7QUFFQyxzQkFBTTtBQUZQLGFBbEJNLEVBcUJOO0FBQ0MsdUJBQU8sWUFEUjtBQUVDLHNCQUFNO0FBRlAsYUFyQk07QUFEUDtBQU5HLEtBQUQ7QUFWRixDQUFkOztrQkE4Q2UsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVnZ2ZWIgZnJvbSAnLi9idWlsZGVyJztcclxuaW1wb3J0ICogYXMgX2dlbmVyYWwgZnJvbSAnLi9jb21wb25lbnRzL0BnZW5lcmFsL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgKiBhcyBfb2VlIGZyb20gJy4vY29tcG9uZW50cy9Ab2VlL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgKiBhcyBfb2VlX2lkcyBmcm9tICcuL2NvbXBvbmVudHMvQG9lZS9pZHMnO1xyXG5pbXBvcnQgZWxlbWVudCBmcm9tICcuL2NvbXBvbmVudHMvZWxlbWVudCc7XHJcbmltcG9ydCBib3JkZXIgZnJvbSAnLi9jb21wb25lbnRzL2JvcmRlcic7XHJcbmltcG9ydCBwYWRkaW5nIGZyb20gJy4vY29tcG9uZW50cy9wYWRkaW5nJztcclxuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9jb21wb25lbnRzL2Rpc3BsYXknO1xyXG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICcuL2NvbXBvbmVudHMvdHlwb2dyYXBoeSc7XHJcbmltcG9ydCBzaXplIGZyb20gJy4vY29tcG9uZW50cy9zaXplJztcclxuaW1wb3J0IG1hcmdpbiBmcm9tICcuL2NvbXBvbmVudHMvbWFyZ2luJztcclxuXHJcblZ2dmViLkNvbXBvbmVudHNHcm91cFsn5a6a5Yi257uE5Lu2J10gPVxyXG4gICAgWydodG1sL2xhYmVsZGl2QG9lZScsICdodG1sL2J1dHRvbkBvZWUnLCAnaHRtbC90ZXh0aW5wdXRAb2VlJywgJ2h0bWwvY2FsZW5kYXJAb2VlJywgX29lZV9pZHMuYXV0b3NlbGVjdGlucHV0aWQsIF9vZWVfaWRzLm1hbnVhbHNlbGVjdGlucHV0aWQsXHJcbiAgICAgICAgJ2h0bWwvcmFkaW9idXR0b25Ab2VlJywgJ2h0bWwvY2hlY2tib3hAb2VlJywgJ2h0bWwvdGFibGVAb2VlJ107XHJcblxyXG5WdnZlYi5Db21wb25lbnRzR3JvdXBbJ+mAmueUqOe7hOS7tiddID1cclxuICAgIFsnaHRtbC9sYWJlbEBnZW5lcmFsJywgJ2h0bWwvZGl2QGdlbmVyYWwnLCAnaHRtbC9idXR0b25AZ2VuZXJhbCcsICdodG1sL2J1dHRvbmdyb3VwQGdlbmVyYWwnLFxyXG4gICAgICAgICdodG1sL2J1dHRvbnRvb2xiYXJAZ2VuZXJhbCcsICdodG1sL2Zvcm1AZ2VuZXJhbCcsICdodG1sL3RleHRpbnB1dEBnZW5lcmFsJywgJ2h0bWwvdGV4dGFyZWFpbnB1dEBnZW5lcmFsJyxcclxuICAgICAgICAnaHRtbC9zZWxlY3RpbnB1dEBnZW5lcmFsJywgJ2h0bWwvZmlsZWlucHV0QGdlbmVyYWwnLCAnaHRtbC9jaGVja2JveEBnZW5lcmFsJywgJ2h0bWwvcmFkaW9idXR0b25AZ2VuZXJhbCcsXHJcbiAgICAgICAgJ2h0bWwvdGFibGVAZ2VuZXJhbCcsICdodG1sL2hlYWRpbmdAZ2VuZXJhbCcsICdodG1sL2ltYWdlQGdlbmVyYWwnLCAnaHRtbC9qdW1ib3Ryb25AZ2VuZXJhbCcsXHJcbiAgICAgICAgJ2h0bWwvYWxlcnRAZ2VuZXJhbCcsICdodG1sL2NhcmRAZ2VuZXJhbCcsICdodG1sL2xpc3Rncm91cEBnZW5lcmFsJywgJ2h0bWwvaHJAZ2VuZXJhbCcsICdodG1sL3RhZ2xhYmVsQGdlbmVyYWwnLFxyXG4gICAgICAgICdodG1sL2JhZGdlQGdlbmVyYWwnLCAnaHRtbC9wcm9ncmVzc0BnZW5lcmFsJywgJ2h0bWwvbmF2YmFyQGdlbmVyYWwnLCAnaHRtbC9icmVhZGNydW1ic0BnZW5lcmFsJywgJ2h0bWwvcGFnaW5hdGlvbkBnZW5lcmFsJyxcclxuICAgICAgICAnaHRtbC9jb250YWluZXJAZ2VuZXJhbCcsICdodG1sL2dyaWRyb3dAZ2VuZXJhbCddO1xyXG5cclxuVnZ2ZWIuQ29tcG9uZW50cy5hZGQoXCJfYmFzZVwiLCBlbGVtZW50KTtcclxuLy9kaXNwbGF5XHJcblZ2dmViLkNvbXBvbmVudHMuZXh0ZW5kKFwiX2Jhc2VcIiwgXCJfYmFzZVwiLCBkaXNwbGF5KTtcclxuLy9UeXBvZ3JhcGh5XHJcblZ2dmViLkNvbXBvbmVudHMuZXh0ZW5kKFwiX2Jhc2VcIiwgXCJfYmFzZVwiLCB0eXBvZ3JhcGh5KVxyXG4vL1NpemVcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcIl9iYXNlXCIsIHNpemUpO1xyXG4vL01hcmdpblxyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiX2Jhc2VcIiwgbWFyZ2luKTtcclxuLy9QYWRkaW5nXHJcblZ2dmViLkNvbXBvbmVudHMuZXh0ZW5kKFwiX2Jhc2VcIiwgXCJfYmFzZVwiLCBwYWRkaW5nKTtcclxuLy9Cb3JkZXJcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcIl9iYXNlXCIsIGJvcmRlcik7XHJcblxyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiaHRtbC9kaXZAZ2VuZXJhbFwiLCBfZ2VuZXJhbC5kaXYpO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiaHRtbC9sYWJlbEBnZW5lcmFsXCIsIF9nZW5lcmFsLmxhYmVsKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvYnV0dG9uQGdlbmVyYWxcIiwgX2dlbmVyYWwuYnV0dG9uKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvY29udGFpbmVyQGdlbmVyYWxcIiwgX2dlbmVyYWwuY29udGFpbmVyKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvaGVhZGluZ0BnZW5lcmFsXCIsIF9nZW5lcmFsLmhlYWRpbmcpO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiaHRtbC9saW5rQGdlbmVyYWxcIiwgX2dlbmVyYWwubGluayk7XHJcblZ2dmViLkNvbXBvbmVudHMuZXh0ZW5kKFwiX2Jhc2VcIiwgXCJodG1sL2ltYWdlQGdlbmVyYWxcIiwgX2dlbmVyYWwuaW1hZ2UpO1xyXG5WdnZlYi5Db21wb25lbnRzLmFkZChcImh0bWwvaHJAZ2VuZXJhbFwiLCBfZ2VuZXJhbC5ocik7XHJcblZ2dmViLkNvbXBvbmVudHMuZXh0ZW5kKFwiX2Jhc2VcIiwgXCJodG1sL2J1dHRvbmdyb3VwQGdlbmVyYWxcIiwgX2dlbmVyYWwuYnV0dG9uZ3JvdXApO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiaHRtbC9idXR0b250b29sYmFyQGdlbmVyYWxcIiwgX2dlbmVyYWwuYnV0dG9udG9vbGJhcik7XHJcblZ2dmViLkNvbXBvbmVudHMuZXh0ZW5kKFwiX2Jhc2VcIiwgXCJodG1sL2FsZXJ0QGdlbmVyYWxcIiwgX2dlbmVyYWwuYWxlcnQpO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiaHRtbC9iYWRnZUBnZW5lcmFsXCIsIF9nZW5lcmFsLmJhZGdlKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvY2FyZEBnZW5lcmFsXCIsIF9nZW5lcmFsLmNhcmQpO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiaHRtbC9saXN0Z3JvdXBAZ2VuZXJhbFwiLCBfZ2VuZXJhbC5saXN0Z3JvdXApO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiaHRtbC9saXN0aXRlbUBnZW5lcmFsXCIsIF9nZW5lcmFsLmxpc3RpdGVtKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvYnJlYWRjcnVtYnNAZ2VuZXJhbFwiLCBfZ2VuZXJhbC5icmVhZGNydW1icyk7XHJcblZ2dmViLkNvbXBvbmVudHMuZXh0ZW5kKFwiX2Jhc2VcIiwgXCJodG1sL2JyZWFkY3J1bWJpdGVtQGdlbmVyYWxcIiwgX2dlbmVyYWwuYnJlYWRjcnVtYml0ZW0pO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiaHRtbC9wYWdpbmF0aW9uQGdlbmVyYWxcIiwgX2dlbmVyYWwucGFnaW5hdGlvbik7XHJcblZ2dmViLkNvbXBvbmVudHMuZXh0ZW5kKFwiX2Jhc2VcIiwgXCJodG1sL3BhZ2VpdGVtQGdlbmVyYWxcIiwgX2dlbmVyYWwucGFnZWl0ZW0pO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiaHRtbC9wcm9ncmVzc0BnZW5lcmFsXCIsIF9nZW5lcmFsLnByb2dyZXNzKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvanVtYm90cm9uQGdlbmVyYWxcIiwgX2dlbmVyYWwuanVtYm90cm9uKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvbmF2YmFyQGdlbmVyYWxcIiwgX2dlbmVyYWwubmF2YmFyKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvZm9ybUBnZW5lcmFsXCIsIF9nZW5lcmFsLmZvcm0pO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiaHRtbC90ZXh0aW5wdXRAZ2VuZXJhbFwiLCBfZ2VuZXJhbC50ZXh0aW5wdXQpO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiaHRtbC9zZWxlY3RpbnB1dEBnZW5lcmFsXCIsIF9nZW5lcmFsLnNlbGVjdGlucHV0KTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvdGV4dGFyZWFpbnB1dEBnZW5lcmFsXCIsIF9nZW5lcmFsLnRleHRhcmVhaW5wdXQpO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiaHRtbC9yYWRpb2J1dHRvbkBnZW5lcmFsXCIsIF9nZW5lcmFsLnJhZGlvYnV0dG9uKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvY2hlY2tib3hAZ2VuZXJhbFwiLCBfZ2VuZXJhbC5jaGVja2JveCk7XHJcblZ2dmViLkNvbXBvbmVudHMuZXh0ZW5kKFwiX2Jhc2VcIiwgXCJodG1sL2ZpbGVpbnB1dEBnZW5lcmFsXCIsIF9nZW5lcmFsLmZpbGVpbnB1dCk7XHJcblZ2dmViLkNvbXBvbmVudHMuZXh0ZW5kKFwiX2Jhc2VcIiwgXCJodG1sL3RhYmxlQGdlbmVyYWxcIiwgX2dlbmVyYWwudGFibGUpO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZChcIl9iYXNlXCIsIFwiaHRtbC90YWJsZXJvd0BnZW5lcmFsXCIsIF9nZW5lcmFsLnRhYmxlcm93KTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvdGFibGVjZWxsQGdlbmVyYWxcIiwgX2dlbmVyYWwudGFibGVjZWxsKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvdGFibGVoZWFkZXJjZWxsQGdlbmVyYWxcIiwgX2dlbmVyYWwudGFibGVoZWFkZXJjZWxsKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvdGFibGVoZWFkQGdlbmVyYWxcIiwgX2dlbmVyYWwudGFibGVoZWFkKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoXCJfYmFzZVwiLCBcImh0bWwvdGFibGVib2R5QGdlbmVyYWxcIiwgX2dlbmVyYWwudGFibGVib2R5KTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5hZGQoXCJodG1sL2dyaWRjb2x1bW5AZ2VuZXJhbFwiLCBfZ2VuZXJhbC5ncmlkY29sdW1uKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5hZGQoXCJodG1sL2dyaWRyb3dAZ2VuZXJhbFwiLCBfZ2VuZXJhbC5ncmlkcm93KTtcclxuXHJcblZ2dmViLkNvbXBvbmVudHMuYWRkKCdodG1sL2xhYmVsZGl2QG9lZScsIF9vZWUubGFiZWxkaXYpO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZCgnX2Jhc2UnLCAnaHRtbC90ZXh0aW5wdXRAb2VlJywgX29lZS50ZXh0aW5wdXQpO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZCgnX2Jhc2UnLCAnaHRtbC9idXR0b25Ab2VlJywgX29lZS5idXR0b24pO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZCgnX2Jhc2UnLCAnaHRtbC9yYWRpb2J1dHRvbkBvZWUnLCBfb2VlLnJhZGlvYnV0dG9uKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoJ19iYXNlJywgJ2h0bWwvc3BhbkBvZWUnLCBfb2VlLnNwYW4pO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZCgnX2Jhc2UnLCAnaHRtbC9jaGVja2JveEBvZWUnLCBfb2VlLmNoZWNrYm94KTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoJ19iYXNlJywgJ2h0bWwvc2VsZWN0aW5wdXRAb2VlJywgX29lZS5zZWxlY3RpbnB1dCk7XHJcblZ2dmViLkNvbXBvbmVudHMuZXh0ZW5kKCdfYmFzZScsICdodG1sL3RhYmxlQG9lZScsIF9vZWUudGFibGUpO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZCgnX2Jhc2UnLCAnaHRtbC9jYWxlbmRhckBvZWUnLCBfb2VlLmNhbGVuZGFyKTtcclxuVnZ2ZWIuQ29tcG9uZW50cy5leHRlbmQoJ19iYXNlJywgJ2h0bWwvdGV4dEBvZWUnLCBfb2VlLnRleHQpO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZCgnX2Jhc2UnLCBfb2VlX2lkcy5hdXRvc2VsZWN0aW5wdXRpZCwgX29lZS5hdXRvc2VsZWN0aW5wdXQpO1xyXG5WdnZlYi5Db21wb25lbnRzLmV4dGVuZCgnX2Jhc2UnLCBfb2VlX2lkcy5tYW51YWxzZWxlY3RpbnB1dGlkLCBfb2VlLm1hbnVhbHNlbGVjdGlucHV0KTtcclxuXHJcbiIsImltcG9ydCB7IFNlY3Rpb25JbnB1dCwgU2VsZWN0SW5wdXQsIFJhZGlvQnV0dG9uSW5wdXQsIENzc1VuaXRJbnB1dCwgQ29sb3JJbnB1dCB9IGZyb20gJy4uL2lucHV0cy9pbnB1dHMnO1xyXG5pbXBvcnQgeyBpbmNfYmFzZV9zb3J0IH0gZnJvbSAnLi9jb21tb24nO1xyXG5cclxuY29uc3QgdHlwb2dyYXBoeSA9IHtcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogXCJ0eXBvZ3JhcGh5X2hlYWRlclwiLFxyXG4gICAgICAgICAgICBpbnB1dHR5cGU6IFNlY3Rpb25JbnB1dCxcclxuICAgICAgICAgICAgbmFtZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICAgICAgZGF0YTogeyBoZWFkZXI6IFwiVHlwb2dyYXBoeVwiIH0sXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkZvbnQgZmFtaWx5XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJmb250LWZhbWlseVwiLFxyXG4gICAgICAgICAgICBodG1sQXR0cjogXCJzdHlsZVwiLFxyXG4gICAgICAgICAgICBzb3J0OiBpbmNfYmFzZV9zb3J0KCksXHJcbiAgICAgICAgICAgIGNvbDogNixcclxuICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgICAgICBpbnB1dHR5cGU6IFNlbGVjdElucHV0LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJpYWxcIlxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0x1Y2lkYSBHcmFuZGUnXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBQYWxhdGlubywgc2VyaWYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQYWxhdGlubyBMaW5vdHlwZSdcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1wiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1RpbWVzIE5ldyBSb21hbidcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJHZW9yZ2lhLCBzZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiR2VvcmdpYSwgc2VyaWZcIlxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJUYWhvbWFcIlxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnQ29taWMgU2FucyBNUywgY3Vyc2l2ZSwgc2Fucy1zZXJpZicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvbWljIFNhbnMnXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdWZXJkYW5hJ1xyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnSW1wYWN0LCBDaGFyY29hbCwgc2Fucy1zZXJpZicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0ltcGFjdCdcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0FyaWFsIEJsYWNrLCBHYWRnZXQsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBcmlhbCBCbGFjaydcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1RyZWJ1Y2hldCBNUywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnVHJlYnVjaGV0J1xyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlJ1xyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnQnJ1c2ggU2NyaXB0IE1ULCBzYW5zLXNlcmlmJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQnJ1c2ggU2NyaXB0J1xyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJGb250IHdlaWdodFwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiZm9udC13ZWlnaHRcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVGhpblwiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiMjAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJFeHRyYS1MaWdodFwiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiMzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJMaWdodFwiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiNDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJOb3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjUwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTWVkaXVtXCJcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCI2MDBcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNlbWktQm9sZFwiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiNzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJCb2xkXCJcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCI4MDBcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkV4dHJhLUJvbGRcIlxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjkwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVWx0cmEtQm9sZFwiXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJUZXh0IGFsaWduXCIsXHJcbiAgICAgICAgICAgIGtleTogXCJ0ZXh0LWFsaWduXCIsXHJcbiAgICAgICAgICAgIGh0bWxBdHRyOiBcInN0eWxlXCIsXHJcbiAgICAgICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICAgICAgY29sOiAxMixcclxuICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgICAgICBpbnB1dHR5cGU6IFJhZGlvQnV0dG9uSW5wdXQsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGV4dHJhY2xhc3M6IFwiYnRuLWdyb3VwLXNtIGJ0bi1ncm91cC1mdWxsd2lkdGhcIixcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwibGEgbGEtY2xvc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAvL3RleHQ6IFwiTm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICAvL3RleHQ6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcImxhIGxhLWFsaWduLWxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAvL3RleHQ6IFwiQ2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJsYSBsYS1hbGlnbi1jZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGV4dDogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJsYSBsYS1hbGlnbi1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImp1c3RpZnlcIixcclxuICAgICAgICAgICAgICAgICAgICAvL3RleHQ6IFwianVzdGlmeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkp1c3RpZnlcIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcImxhIGxhLWFsaWduLWp1c3RpZnlcIixcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJMaW5lIGhlaWdodFwiLFxyXG4gICAgICAgICAgICBrZXk6IFwibGluZS1oZWlnaHRcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBDc3NVbml0SW5wdXRcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiTGV0dGVyIHNwYWNpbmdcIixcclxuICAgICAgICAgICAga2V5OiBcImxldHRlci1zcGFjaW5nXCIsXHJcbiAgICAgICAgICAgIGh0bWxBdHRyOiBcInN0eWxlXCIsXHJcbiAgICAgICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICAgICAgY29sOiA2LFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICAgIGlucHV0dHlwZTogQ3NzVW5pdElucHV0XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlRleHQgZGVjb3JhdGlvblwiLFxyXG4gICAgICAgICAgICBrZXk6IFwidGV4dC1kZWNvcmF0aW9uLWxpbmVcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgICAgICBjb2w6IDEyLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICAgIGlucHV0dHlwZTogUmFkaW9CdXR0b25JbnB1dCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZXh0cmFjbGFzczogXCJidG4tZ3JvdXAtc20gYnRuLWdyb3VwLWZ1bGx3aWR0aFwiLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJsYSBsYS1jbG9zZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGV4dDogXCJOb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy90ZXh0OiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcImxhIGxhLWxvbmctYXJyb3ctZG93blwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm92ZXJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy90ZXh0OiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwib3ZlcmxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcImxhIGxhLWxvbmctYXJyb3ctdXBcIixcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJsaW5lLXRocm91Z2hcIixcclxuICAgICAgICAgICAgICAgICAgICAvL3RleHQ6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJMaW5lIFRocm91Z2hcIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcImxhIGxhLXN0cmlrZXRocm91Z2hcIixcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ1bmRlcmxpbmUgb3ZlcmxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAvL3RleHQ6IFwianVzdGlmeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVuZGVybGluZSBPdmVybGluZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwibGEgbGEtYXJyb3dzLXZcIixcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJEZWNvcmF0aW9uIENvbG9yXCIsXHJcbiAgICAgICAgICAgIGtleTogXCJ0ZXh0LWRlY29yYXRpb24tY29sb3JcIixcclxuICAgICAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBDb2xvcklucHV0LFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJEZWNvcmF0aW9uIHN0eWxlXCIsXHJcbiAgICAgICAgICAgIGtleTogXCJ0ZXh0LWRlY29yYXRpb24tc3R5bGVcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInNvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTb2xpZFwiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwid2F2eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiV2F2eVwiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiZG90dGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJEb3R0ZWRcIlxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImRhc2hlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRGFzaGVkXCJcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJkb3VibGVcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkRvdWJsZVwiXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0eXBvZ3JhcGh5OyIsImltcG9ydCB7IFNlY3Rpb25JbnB1dCwgQ3NzVW5pdElucHV0IH0gZnJvbSAnLi4vaW5wdXRzL2lucHV0cyc7XHJcbmltcG9ydCB7IGluY19iYXNlX3NvcnQgfSBmcm9tICcuL2NvbW1vbic7XHJcblxyXG5jb25zdCBzaXplID0ge1xyXG4gICAgcHJvcGVydGllczogW3tcclxuICAgICAgICBrZXk6IFwic2l6ZV9oZWFkZXJcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFNlY3Rpb25JbnB1dCxcclxuICAgICAgICBuYW1lOiBmYWxzZSxcclxuICAgICAgICBzb3J0OiBpbmNfYmFzZV9zb3J0KCksXHJcbiAgICAgICAgZGF0YTogeyBoZWFkZXI6IFwiU2l6ZVwiLCBleHBhbmRlZDogZmFsc2UgfSxcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIldpZHRoXCIsXHJcbiAgICAgICAga2V5OiBcIndpZHRoXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICBzb3J0OiBpbmNfYmFzZV9zb3J0KCksXHJcbiAgICAgICAgY29sOiA2LFxyXG4gICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICBpbnB1dHR5cGU6IENzc1VuaXRJbnB1dFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiSGVpZ2h0XCIsXHJcbiAgICAgICAga2V5OiBcImhlaWdodFwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcInN0eWxlXCIsXHJcbiAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgIGNvbDogNixcclxuICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBDc3NVbml0SW5wdXRcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIk1pbiBXaWR0aFwiLFxyXG4gICAgICAgIGtleTogXCJtaW4td2lkdGhcIixcclxuICAgICAgICBodG1sQXR0cjogXCJzdHlsZVwiLFxyXG4gICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgIGlucHV0dHlwZTogQ3NzVW5pdElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJNaW4gSGVpZ2h0XCIsXHJcbiAgICAgICAga2V5OiBcIm1pbi1oZWlnaHRcIixcclxuICAgICAgICBodG1sQXR0cjogXCJzdHlsZVwiLFxyXG4gICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgIGlucHV0dHlwZTogQ3NzVW5pdElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJNYXggV2lkdGhcIixcclxuICAgICAgICBrZXk6IFwibWF4LXdpZHRoXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICBzb3J0OiBpbmNfYmFzZV9zb3J0KCksXHJcbiAgICAgICAgY29sOiA2LFxyXG4gICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICBpbnB1dHR5cGU6IENzc1VuaXRJbnB1dFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiTWF4IEhlaWdodFwiLFxyXG4gICAgICAgIGtleTogXCJtYXgtaGVpZ2h0XCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICBzb3J0OiBpbmNfYmFzZV9zb3J0KCksXHJcbiAgICAgICAgY29sOiA2LFxyXG4gICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICBpbnB1dHR5cGU6IENzc1VuaXRJbnB1dFxyXG4gICAgfV1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpemU7IiwiaW1wb3J0IHsgU2VjdGlvbklucHV0LCBDc3NVbml0SW5wdXQgfSBmcm9tICcuLi9pbnB1dHMvaW5wdXRzJztcclxuaW1wb3J0IHsgaW5jX2Jhc2Vfc29ydCB9IGZyb20gJy4vY29tbW9uJztcclxuXHJcbmNvbnN0IHBhZGRpbmcgPSB7XHJcbiAgICBwcm9wZXJ0aWVzOiBbe1xyXG4gICAgICAgIGtleTogXCJwYWRkaW5nc19oZWFkZXJcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFNlY3Rpb25JbnB1dCxcclxuICAgICAgICBuYW1lOiBmYWxzZSxcclxuICAgICAgICBzb3J0OiBpbmNfYmFzZV9zb3J0KCksXHJcbiAgICAgICAgZGF0YTogeyBoZWFkZXI6IFwiUGFkZGluZ1wiLCBleHBhbmRlZDogZmFsc2UgfSxcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIlRvcFwiLFxyXG4gICAgICAgIGtleTogXCJwYWRkaW5nLXRvcFwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcInN0eWxlXCIsXHJcbiAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgIGNvbDogNixcclxuICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBDc3NVbml0SW5wdXRcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAga2V5OiBcInBhZGRpbmctcmlnaHRcIixcclxuICAgICAgICBodG1sQXR0cjogXCJzdHlsZVwiLFxyXG4gICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgIGlucHV0dHlwZTogQ3NzVW5pdElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJCb3R0b21cIixcclxuICAgICAgICBrZXk6IFwicGFkZGluZy1ib3R0b21cIixcclxuICAgICAgICBodG1sQXR0cjogXCJzdHlsZVwiLFxyXG4gICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgIGlucHV0dHlwZTogQ3NzVW5pdElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJMZWZ0XCIsXHJcbiAgICAgICAga2V5OiBcInBhZGRpbmctTGVmdFwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcInN0eWxlXCIsXHJcbiAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgIGNvbDogNixcclxuICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBDc3NVbml0SW5wdXRcclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWRkaW5nOyIsImltcG9ydCB7IFNlY3Rpb25JbnB1dCwgQ3NzVW5pdElucHV0IH0gZnJvbSAnLi4vaW5wdXRzL2lucHV0cyc7XHJcbmltcG9ydCB7IGluY19iYXNlX3NvcnQgfSBmcm9tICcuL2NvbW1vbic7XHJcblxyXG5jb25zdCBtYXJnaW4gPSB7XHJcbiAgICBwcm9wZXJ0aWVzOiBbe1xyXG4gICAgICAgIGtleTogXCJtYXJnaW5zX2hlYWRlclwiLFxyXG4gICAgICAgIGlucHV0dHlwZTogU2VjdGlvbklucHV0LFxyXG4gICAgICAgIG5hbWU6IGZhbHNlLFxyXG4gICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICBkYXRhOiB7IGhlYWRlcjogXCJNYXJnaW5cIiwgZXhwYW5kZWQ6IGZhbHNlIH0sXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJUb3BcIixcclxuICAgICAgICBrZXk6IFwibWFyZ2luLXRvcFwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcInN0eWxlXCIsXHJcbiAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgIGNvbDogNixcclxuICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBDc3NVbml0SW5wdXRcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAga2V5OiBcIm1hcmdpbi1yaWdodFwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcInN0eWxlXCIsXHJcbiAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgIGNvbDogNixcclxuICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBDc3NVbml0SW5wdXRcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIkJvdHRvbVwiLFxyXG4gICAgICAgIGtleTogXCJtYXJnaW4tYm90dG9tXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICBzb3J0OiBpbmNfYmFzZV9zb3J0KCksXHJcbiAgICAgICAgY29sOiA2LFxyXG4gICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICBpbnB1dHR5cGU6IENzc1VuaXRJbnB1dFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiTGVmdFwiLFxyXG4gICAgICAgIGtleTogXCJtYXJnaW4tTGVmdFwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcInN0eWxlXCIsXHJcbiAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgIGNvbDogNixcclxuICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBDc3NVbml0SW5wdXRcclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXJnaW47IiwiaW1wb3J0IHsgU2VjdGlvbklucHV0LCBUZXh0SW5wdXQgfSBmcm9tICcuLi9pbnB1dHMvaW5wdXRzJztcclxuaW1wb3J0IHsgaW5jX2Jhc2Vfc29ydCB9IGZyb20gJy4vY29tbW9uJztcclxuXHJcbmNvbnN0IGVsZW1lbnQgPSB7XHJcbiAgICBuYW1lOiBcIkVsZW1lbnRcIixcclxuICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgICAga2V5OiBcImVsZW1lbnRfaGVhZGVyXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBTZWN0aW9uSW5wdXQsXHJcbiAgICAgICAgbmFtZTogZmFsc2UsXHJcbiAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgIGRhdGE6IHsgaGVhZGVyOiBcIkdlbmVyYWxcIiB9LFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiSWRcIixcclxuICAgICAgICBrZXk6IFwiaWRcIixcclxuICAgICAgICBodG1sQXR0cjogXCJpZFwiLFxyXG4gICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgY29sOiA2LFxyXG4gICAgICAgIGlucHV0dHlwZTogVGV4dElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJDbGFzc1wiLFxyXG4gICAgICAgIGtleTogXCJjbGFzc1wiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcImNsYXNzXCIsXHJcbiAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUZXh0SW5wdXRcclxuICAgIH1cclxuICAgIF1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnQ7IiwiaW1wb3J0IHsgaW5jX2Jhc2Vfc29ydCB9IGZyb20gJy4vY29tbW9uJztcclxuaW1wb3J0IHsgU2VjdGlvbklucHV0LCBTZWxlY3RJbnB1dCwgUmFkaW9CdXR0b25JbnB1dCwgQ3NzVW5pdElucHV0LCBDb2xvcklucHV0LCBSYW5nZUlucHV0IH0gZnJvbSAnLi4vaW5wdXRzL2lucHV0cyc7XHJcblxyXG5jb25zdCBkaXNwbGF5ICA9IHtcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogXCJkaXNwbGF5X2hlYWRlclwiLFxyXG4gICAgICAgICAgICBpbnB1dHR5cGU6IFNlY3Rpb25JbnB1dCxcclxuICAgICAgICAgICAgbmFtZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICAgICAgZGF0YTogeyBoZWFkZXI6IFwiRGlzcGxheVwiIH0sXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkRpc3BsYXlcIixcclxuICAgICAgICAgICAga2V5OiBcImRpc3BsYXlcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICAgICAgdmFsaWRWYWx1ZXM6IFtcImJsb2NrXCIsIFwiaW5saW5lXCIsIFwiaW5saW5lLWJsb2NrXCIsIFwibm9uZVwiXSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImlubGluZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiSW5saW5lXCJcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIklubGluZSBCbG9ja1wiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBvc2l0aW9uXCIsXHJcbiAgICAgICAgICAgIGtleTogXCJwb3NpdGlvblwiLFxyXG4gICAgICAgICAgICBodG1sQXR0cjogXCJzdHlsZVwiLFxyXG4gICAgICAgICAgICBzb3J0OiBpbmNfYmFzZV9zb3J0KCksXHJcbiAgICAgICAgICAgIGNvbDogNixcclxuICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgICAgICBpbnB1dHR5cGU6IFNlbGVjdElucHV0LFxyXG4gICAgICAgICAgICB2YWxpZFZhbHVlczogW1wic3RhdGljXCIsIFwiZml4ZWRcIiwgXCJyZWxhdGl2ZVwiLCBcImFic29sdXRlXCJdLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInN0YXRpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU3RhdGljXCJcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJSZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFic29sdXRlXCJcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiVG9wXCIsXHJcbiAgICAgICAgICAgIGtleTogXCJ0b3BcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyZW50OiBcIlwiLFxyXG4gICAgICAgICAgICBpbnB1dHR5cGU6IENzc1VuaXRJbnB1dFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgIGh0bWxBdHRyOiBcInN0eWxlXCIsXHJcbiAgICAgICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICAgICAgY29sOiA2LFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmVudDogXCJcIixcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBDc3NVbml0SW5wdXRcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQm90dG9tXCIsXHJcbiAgICAgICAgICAgIGtleTogXCJib3R0b21cIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyZW50OiBcIlwiLFxyXG4gICAgICAgICAgICBpbnB1dHR5cGU6IENzc1VuaXRJbnB1dFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICBrZXk6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyZW50OiBcIlwiLFxyXG4gICAgICAgICAgICBpbnB1dHR5cGU6IENzc1VuaXRJbnB1dFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiZmxvYXRcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICAgICAgc29ydDogaW5jX2Jhc2Vfc29ydCgpLFxyXG4gICAgICAgICAgICBjb2w6IDEyLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICAgIGlucHV0dHlwZTogUmFkaW9CdXR0b25JbnB1dCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZXh0cmFjbGFzczogXCJidG4tZ3JvdXAtc20gYnRuLWdyb3VwLWZ1bGx3aWR0aFwiLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJsYSBsYS1jbG9zZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGV4dDogXCJOb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGV4dDogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwibGEgbGEtYWxpZ24tbGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy90ZXh0OiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcImxhIGxhLWFsaWduLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJPcGFjaXR5XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJvcGFjaXR5XCIsXHJcbiAgICAgICAgICAgIGh0bWxBdHRyOiBcInN0eWxlXCIsXHJcbiAgICAgICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICAgICAgY29sOiAxMixcclxuICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGlucHV0dHlwZTogUmFuZ2VJbnB1dCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbWF4OiAxLCAvL21heCB6b29tIGxldmVsXHJcbiAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICBzdGVwOiAwLjFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQmFja2dyb3VuZCBDb2xvclwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiYmFja2dyb3VuZC1jb2xvclwiLFxyXG4gICAgICAgICAgICBzb3J0OiBpbmNfYmFzZV9zb3J0KCksXHJcbiAgICAgICAgICAgIGNvbDogNixcclxuICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgICAgICBodG1sQXR0cjogXCJzdHlsZVwiLFxyXG4gICAgICAgICAgICBpbnB1dHR5cGU6IENvbG9ySW5wdXQsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlRleHQgQ29sb3JcIixcclxuICAgICAgICAgICAga2V5OiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICAgICAgY29sOiA2LFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICAgIGh0bWxBdHRyOiBcInN0eWxlXCIsXHJcbiAgICAgICAgICAgIGlucHV0dHlwZTogQ29sb3JJbnB1dCxcclxuICAgICAgICB9XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTsiLCJpbXBvcnQgeyBTZWN0aW9uSW5wdXQsIFNlbGVjdElucHV0LCBDc3NVbml0SW5wdXQsIENvbG9ySW5wdXQgfSBmcm9tICcuLi9pbnB1dHMvaW5wdXRzJztcclxuaW1wb3J0IHsgaW5jX2Jhc2Vfc29ydCB9IGZyb20gJy4vY29tbW9uJztcclxuXHJcbmNvbnN0IGJvcmRlciA9IHtcclxuICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgICAga2V5OiBcImJvcmRlcl9oZWFkZXJcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFNlY3Rpb25JbnB1dCxcclxuICAgICAgICBuYW1lOiBmYWxzZSxcclxuICAgICAgICBzb3J0OiBpbmNfYmFzZV9zb3J0KCksXHJcbiAgICAgICAgZGF0YTogeyBoZWFkZXI6IFwiQm9yZGVyXCIsIGV4cGFuZGVkOiBmYWxzZSB9LFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiU3R5bGVcIixcclxuICAgICAgICBrZXk6IFwiYm9yZGVyLXN0eWxlXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICBzb3J0OiBpbmNfYmFzZV9zb3J0KCksXHJcbiAgICAgICAgY29sOiAxMixcclxuICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcInNvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNvbGlkXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiZG90dGVkXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRvdHRlZFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImRhc2hlZFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJEYXNoZWRcIlxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJXaWR0aFwiLFxyXG4gICAgICAgIGtleTogXCJib3JkZXItd2lkdGhcIixcclxuICAgICAgICBodG1sQXR0cjogXCJzdHlsZVwiLFxyXG4gICAgICAgIHNvcnQ6IGluY19iYXNlX3NvcnQoKSxcclxuICAgICAgICBjb2w6IDYsXHJcbiAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgIGlucHV0dHlwZTogQ3NzVW5pdElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJDb2xvclwiLFxyXG4gICAgICAgIGtleTogXCJib3JkZXItY29sb3JcIixcclxuICAgICAgICBzb3J0OiBpbmNfYmFzZV9zb3J0KCksXHJcbiAgICAgICAgY29sOiA2LFxyXG4gICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICBodG1sQXR0cjogXCJzdHlsZVwiLFxyXG4gICAgICAgIGlucHV0dHlwZTogQ29sb3JJbnB1dCxcclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBib3JkZXI7IiwiaW1wb3J0IGxhYmVsIGZyb20gJy4vbGFiZWwnO1xyXG5pbXBvcnQgdGV4dGlucHV0IGZyb20gJy4vdGV4dGlucHV0JztcclxuaW1wb3J0IGJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XHJcbmltcG9ydCBkaXYgZnJvbSAnLi9kaXYnO1xyXG5pbXBvcnQgY29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJztcclxuaW1wb3J0IGFsZXJ0IGZyb20gJy4vYWxlcnQnO1xyXG5pbXBvcnQgYmFkZ2UgZnJvbSAnLi9iYWRnZSc7XHJcbmltcG9ydCBicmVhZGNydW1iaXRlbSBmcm9tICcuL2JyZWFkY3J1bWJpdGVtJztcclxuaW1wb3J0IGJyZWFkY3J1bWJzIGZyb20gJy4vYnJlYWRjcnVtYnMnO1xyXG5pbXBvcnQgYnV0dG9uZ3JvdXAgZnJvbSAnLi9idXR0b25ncm91cCc7XHJcbmltcG9ydCBidXR0b250b29sYmFyIGZyb20gJy4vYnV0dG9udG9vbGJhcic7XHJcbmltcG9ydCBjYXJkIGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCBjaGVja2JveCBmcm9tICcuL2NoZWNrYm94JztcclxuaW1wb3J0IGZpbGVpbnB1dCBmcm9tICcuL2ZpbGVpbnB1dCc7XHJcbmltcG9ydCBmb3JtIGZyb20gJy4vZm9ybSc7XHJcbmltcG9ydCBncmlkY29sdW1uIGZyb20gJy4vZ3JpZGNvbHVtbic7XHJcbmltcG9ydCBncmlkcm93IGZyb20gJy4vZ3JpZHJvdyc7XHJcbmltcG9ydCBoZWFkaW5nIGZyb20gJy4vaGVhZGluZyc7XHJcbmltcG9ydCBociBmcm9tICcuL2hyJztcclxuaW1wb3J0IGltYWdlIGZyb20gJy4vaW1hZ2UnO1xyXG5pbXBvcnQganVtYm90cm9uIGZyb20gJy4vanVtYm90cm9uJztcclxuaW1wb3J0IGxpbmsgZnJvbSAnLi9saW5rJztcclxuaW1wb3J0IGxpc3Rncm91cCBmcm9tICcuL2xpc3Rncm91cCc7XHJcbmltcG9ydCBsaXN0aXRlbSBmcm9tICcuL2xpc3RpdGVtJztcclxuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcic7XHJcbmltcG9ydCBwYWdlaXRlbSBmcm9tICcuL3BhZ2VpdGVtJztcclxuaW1wb3J0IHBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHByb2dyZXNzIGZyb20gJy4vcHJvZ3Jlc3MnO1xyXG5pbXBvcnQgcmFkaW9idXR0b24gZnJvbSAnLi9yYWRpb2J1dHRvbic7XHJcbmltcG9ydCBzZWxlY3RpbnB1dCBmcm9tICcuL3NlbGVjdGlucHV0JztcclxuaW1wb3J0IHRhYmxlaGVhZGVyY2VsbCBmcm9tICcuL3RhYmxlaGVhZGVyY2VsbCc7XHJcbmltcG9ydCB0YWJsZSBmcm9tICcuL3RhYmxlJztcclxuaW1wb3J0IHRhYmxlYm9keSBmcm9tICcuL3RhYmxlYm9keSc7XHJcbmltcG9ydCB0YWJsZWNlbGwgZnJvbSAnLi90YWJsZWNlbGwnO1xyXG5pbXBvcnQgdGFibGVoZWFkIGZyb20gJy4vdGFibGVoZWFkJztcclxuaW1wb3J0IHRhYmxlcm93IGZyb20gJy4vdGFibGVyb3cnO1xyXG5pbXBvcnQgdGV4dGFyZWFpbnB1dCBmcm9tICcuL3RleHRhcmVhaW5wdXQnO1xyXG5pbXBvcnQgbGFiZWxkaXYgZnJvbSAnLi9sYWJlbGRpdic7XHJcbmltcG9ydCBzcGFuIGZyb20gJy4vc3Bhbic7XHJcbmltcG9ydCBjYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyJztcclxuaW1wb3J0IHRleHQgZnJvbSAnLi90ZXh0JztcclxuaW1wb3J0IGF1dG9zZWxlY3RpbnB1dCBmcm9tICcuL2F1dG9zZWxlY3RpbnB1dCc7XHJcbmltcG9ydCBtYW51YWxzZWxlY3RpbnB1dCBmcm9tICcuL21hbnVhbHNlbGVjdGlucHV0JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBsYWJlbCwgdGV4dGlucHV0LCBidXR0b24sIGRpdiwgY29udGFpbmVyLCBhbGVydCwgYmFkZ2UsIGJyZWFkY3J1bWJpdGVtLCBicmVhZGNydW1icywgYnV0dG9uZ3JvdXAsXHJcbiAgICBidXR0b250b29sYmFyLCBjYXJkLCBjaGVja2JveCwgZmlsZWlucHV0LCBmb3JtLCBncmlkY29sdW1uLCBncmlkcm93LCBoZWFkaW5nLCBociwgaW1hZ2UsIGp1bWJvdHJvbixcclxuICAgIGxpbmssIGxpc3Rncm91cCwgbGlzdGl0ZW0sIG5hdmJhciwgcGFnZWl0ZW0sIHBhZ2luYXRpb24sIHByb2dyZXNzLCByYWRpb2J1dHRvbiwgc2VsZWN0aW5wdXQsIHRhYmxlaGVhZGVyY2VsbCxcclxuICAgIHRhYmxlLCB0YWJsZWJvZHksIHRhYmxlY2VsbCwgdGFibGVoZWFkLCB0YWJsZXJvdywgdGV4dGFyZWFpbnB1dCwgbGFiZWxkaXYsIHNwYW4sIGNhbGVuZGFyLCB0ZXh0LFxyXG4gICAgYXV0b3NlbGVjdGlucHV0LCBtYW51YWxzZWxlY3RpbnB1dFxyXG59OyIsImltcG9ydCB7IFRleHRJbnB1dCwgU2VsZWN0SW5wdXQgfSBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXRzJztcclxuaW1wb3J0IHsgaW5wdXRUeXBlcywgaW5wdXRUeXBlTmFtZXMgfSBmcm9tICcuLi9pbnB1dFR5cGVzJztcclxuaW1wb3J0IHsgZGF0YUNvbXBvbmVudElkIH0gZnJvbSAnLi4vY29tbW9uJztcclxuXHJcbmNvbnN0IHRleHRpbnB1dCA9IHtcclxuICAgIG5hbWU6IFwiVGV4dCBJbnB1dFwiLFxyXG4gICAgYXR0cmlidXRlczogeyBcInR5cGVcIjogaW5wdXRUeXBlTmFtZXMgfSxcclxuICAgIGltYWdlOiBcImljb25zL3RleHRfaW5wdXQuc3ZnXCIsXHJcbiAgICBodG1sOiBgPGRpdiBjbGFzcz1cImV2ZXJ5T3V0Ym94LXJpZ2h0IGRyYWdnYWJsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGFpbHlCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgJHtkYXRhQ29tcG9uZW50SWR9PVwiaHRtbC90ZXh0aW5wdXRAb2VlXCIgbHVzdHlsZT1cImhlaWdodDogMi44cmVtO3dpZHRoOjEzcmVtXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+YCxcclxuICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogXCJWYWx1ZVwiLFxyXG4gICAgICAgIGtleTogXCJ2YWx1ZVwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcInZhbHVlXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUZXh0SW5wdXRcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIlBsYWNlaG9sZGVyXCIsXHJcbiAgICAgICAga2V5OiBcInBsYWNlaG9sZGVyXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwicGxhY2Vob2xkZXJcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFRleHRJbnB1dFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdOYW1lJyxcclxuICAgICAgICBrZXk6ICduYW1lJyxcclxuICAgICAgICBodG1sQXR0cjogJ25hbWUnLFxyXG4gICAgICAgIGlucHV0dHlwZTogVGV4dElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ3R5cGUnLFxyXG4gICAgICAgIGtleTogJ3R5cGUnLFxyXG4gICAgICAgIGh0bWxBdHRyOiAndHlwZScsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IGlucHV0VHlwZXNcclxuICAgICAgICB9XHJcbiAgICB9XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGV4dGlucHV0OyIsImltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJy4uLy4uL2lucHV0cy9pbnB1dHMnO1xyXG5cclxuY29uc3QgdGV4dCA9IHtcclxuICAgIG5hbWU6IFwiVGV4dFwiLFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvdGV4dF9pbnB1dC5zdmdcIixcclxuICAgIGh0bWw6IGBgLFxyXG4gICAgbm9kZXM6IFsnYicsICdiaWcnLCAnZW0nLCAnaScsICdzbWFsbCcsICdzdHJvbmcnLFxyXG4gICAgICAgICdzdWInLCAnc3VwJywgJ2lucycsICdkZWwnLCAncycsICdzdHJpa2UnLCAndSddLFxyXG4gICAgcHJvcGVydGllczogW3tcclxuICAgICAgICBuYW1lOiAnVGV4dCcsXHJcbiAgICAgICAga2V5OiAndGV4dCcsXHJcbiAgICAgICAgaHRtbEF0dHI6ICd0ZXh0JyxcclxuICAgICAgICBpbnB1dHR5cGU6IFRleHRJbnB1dFxyXG4gICAgfV1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRleHQ7IiwiaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcblxyXG5jb25zdCBzcGFuID0ge1xyXG4gICAgbmFtZTogXCJTcGFuXCIsXHJcbiAgICBpbWFnZTogXCJpY29ucy90ZXh0X2lucHV0LnN2Z1wiLFxyXG4gICAgbm9kZXM6IFsnc3BhbiddLFxyXG4gICAgaHRtbDogYGAsXHJcbiAgICBwcm9wZXJ0aWVzOiBbe1xyXG4gICAgICAgIG5hbWU6IFwiRm9yIGlkXCIsXHJcbiAgICAgICAga2V5OiBcImZvclwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcImZvclwiLFxyXG4gICAgICAgIGlucHV0dHlwZTogVGV4dElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ1RleHQnLFxyXG4gICAgICAgIGtleTogJ3RleHQnLFxyXG4gICAgICAgIGh0bWxBdHRyOiAndGV4dCcsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUZXh0SW5wdXRcclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGFuOyIsImltcG9ydCBWdnZlYiBmcm9tICcuLi8uLi9idWlsZGVyJztcclxuaW1wb3J0IHsgVGV4dFZhbHVlSW5wdXQsIEJ1dHRvbklucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcblxyXG5jb25zdCBzZWxlY3RpbnB1dCA9IHtcclxuICAgIG5vZGVzOiBbXCJzZWxlY3RcIl0sXHJcbiAgICBuYW1lOiBcIlNlbGVjdCBJbnB1dFwiLFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvc2VsZWN0X2lucHV0LnN2Z1wiLFxyXG4gICAgaHRtbDogYDxkaXYgY2xhc3M9XCJldmVyeU91dGJveC1yaWdodCBkcmFnZ2FibGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhaWx5Qm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGx1c3R5bGU9XCJoZWlnaHQ6IDIuOHJlbTt3aWR0aDoxM3JlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidmFsdWUxXCI+VGV4dCAxPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2YWx1ZTJcIj5UZXh0IDI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZhbHVlM1wiPlRleHQgMzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgcHJvcGVydGllcyA9IFtdO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuXHJcbiAgICAgICAgJChub2RlKS5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGRhdGEgPSB7IFwidmFsdWVcIjogdGhpcy52YWx1ZSwgXCJ0ZXh0XCI6IHRoaXMudGV4dCB9O1xyXG5cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJPcHRpb24gXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcIm9wdGlvblwiICsgaSxcclxuICAgICAgICAgICAgICAgIC8vaW5kZXg6IGkgLSAxLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uTm9kZTogdGhpcyxcclxuICAgICAgICAgICAgICAgIGlucHV0dHlwZTogVGV4dFZhbHVlSW5wdXQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChub2RlLCB2YWx1ZSwgaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gJCh0aGlzLm9wdGlvbk5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lmIHJlbW92ZSBidXR0b24gaXMgY2xpY2tlZCByZW1vdmUgb3B0aW9uIGFuZCByZW5kZXIgcm93IHByb3BlcnRpZXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQubm9kZU5hbWUgPT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWdnZlYi5Db21wb25lbnRzLnJlbmRlcihcImh0bWwvc2VsZWN0aW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0Lm5hbWUgPT0gXCJ2YWx1ZVwiKSBvcHRpb24uYXR0cihcInZhbHVlXCIsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbnB1dC5uYW1lID09IFwidGV4dFwiKSBvcHRpb24udGV4dCh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vcmVtb3ZlIGFsbCBvcHRpb24gcHJvcGVydGllc1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ua2V5LmluZGV4T2YoXCJvcHRpb25cIikgPT09IC0xO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2FkZCByZW1haW5pbmcgcHJvcGVydGllcyB0byBnZW5lcmF0ZWQgY29sdW1uIHByb3BlcnRpZXNcclxuICAgICAgICBwcm9wZXJ0aWVzLnB1c2godGhpcy5wcm9wZXJ0aWVzWzBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH0sXHJcblxyXG4gICAgcHJvcGVydGllczogW3tcclxuICAgICAgICBuYW1lOiBcIk9wdGlvblwiLFxyXG4gICAgICAgIGtleTogXCJvcHRpb24xXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUZXh0VmFsdWVJbnB1dFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiT3B0aW9uXCIsXHJcbiAgICAgICAga2V5OiBcIm9wdGlvbjJcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFRleHRWYWx1ZUlucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBrZXk6IFwiYWRkQ2hpbGRcIixcclxuICAgICAgICBpbnB1dHR5cGU6IEJ1dHRvbklucHV0LFxyXG4gICAgICAgIGRhdGE6IHsgdGV4dDogXCJBZGQgb3B0aW9uXCIgfSxcclxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgJChub2RlKS5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCJ2YWx1ZVwiPlRleHQ8L29wdGlvbj4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vcmVuZGVyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGFnYWluIHRvIGluY2x1ZGUgdGhlIG5ldyBjb2x1bW4gaW5wdXRzXHJcbiAgICAgICAgICAgIFZ2dmViLkNvbXBvbmVudHMucmVuZGVyKFwiaHRtbC9zZWxlY3RpbnB1dFwiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWxlY3RpbnB1dDsiLCJpbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXRzJztcclxuaW1wb3J0IHsgZGF0YUNvbXBvbmVudElkIH0gZnJvbSAnLi4vY29tbW9uJztcclxuXHJcbmNvbnN0IHJhZGlvYnV0dG9uID0ge1xyXG4gICAgbmFtZTogXCJSYWRpbyBCdXR0b25cIixcclxuICAgIGF0dHJpYnV0ZXM6IHsgXCJ0eXBlXCI6IFwicmFkaW9cIiB9LFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvcmFkaW8uc3ZnXCIsXHJcbiAgICBodG1sOiBgPGRpdiAke2RhdGFDb21wb25lbnRJZH09XCJodG1sL3JhZGlvYnV0dG9uQG9lZVwiIGNsYXNzPVwiZXZlcnlPdXRib3gtcmlnaHQgZHJhZ2dhYmxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZTtcIj48aW5wdXQgY2xhc3M9XCJyYWRpb0lucHV0XCIgbmFtZT1cIkZydWl0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcIiAvPjxzcGFuICR7ZGF0YUNvbXBvbmVudElkfT1cImh0bWwvc3BhbkBvZWVcIj7ljZXpgIkxPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PmAsXHJcbiAgICBwcm9wZXJ0aWVzOiBbe1xyXG4gICAgICAgIG5hbWU6IFwiTmFtZVwiLFxyXG4gICAgICAgIGtleTogXCJuYW1lXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwibmFtZVwiLFxyXG4gICAgICAgIGlucHV0dHlwZTogVGV4dElucHV0XHJcbiAgICB9XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmFkaW9idXR0b247IiwiaW1wb3J0IFZ2dmViIGZyb20gJy4uLy4uL2J1aWxkZXInO1xyXG5pbXBvcnQgeyBUZXh0VmFsdWVJbnB1dCwgQnV0dG9uSW5wdXQgfSBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXRzJztcclxuaW1wb3J0IHsgbWFudWFsc2VsZWN0aW5wdXRpZCB9IGZyb20gJy4vaWRzJztcclxuaW1wb3J0IHsgZGF0YUNvbXBvbmVudElkIH0gZnJvbSAnLi4vY29tbW9uJztcclxuXHJcbmNvbnN0IGF1dG9zZWxlY3RpbnB1dCA9IHtcclxuICAgIG5vZGVzOiBbXCJzZWxlY3RcIl0sXHJcbiAgICBuYW1lOiBcIk1hbnVhbCBTZWxlY3QgSW5wdXRcIixcclxuICAgIGltYWdlOiBcImljb25zL3NlbGVjdF9pbnB1dC5zdmdcIixcclxuICAgIGh0bWw6IGA8ZGl2IGNsYXNzPVwiZXZlcnlPdXRib3gtcmlnaHQgZHJhZ2dhYmxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYWlseUJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgJHtkYXRhQ29tcG9uZW50SWR9PVwiJHttYW51YWxzZWxlY3RpbnB1dGlkfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbHVzdHlsZT1cImhlaWdodDogMi44cmVtO3dpZHRoOjEzcmVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2YWx1ZTFcIj5UZXh0IDE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZhbHVlMlwiPlRleHQgMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidmFsdWUzXCI+VGV4dCAzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgYmVmb3JlSW5pdDogZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICBwcm9wZXJ0aWVzID0gW107XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG5cclxuICAgICAgICAkKG5vZGUpLmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZGF0YSA9IHsgXCJ2YWx1ZVwiOiB0aGlzLnZhbHVlLCBcInRleHRcIjogdGhpcy50ZXh0IH07XHJcblxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk9wdGlvbiBcIiArIGksXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwib3B0aW9uXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgLy9pbmRleDogaSAtIDEsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25Ob2RlOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgaW5wdXR0eXBlOiBUZXh0VmFsdWVJbnB1dCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKG5vZGUsIHZhbHVlLCBpbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24gPSAkKHRoaXMub3B0aW9uTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgcmVtb3ZlIGJ1dHRvbiBpcyBjbGlja2VkIHJlbW92ZSBvcHRpb24gYW5kIHJlbmRlciByb3cgcHJvcGVydGllc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5ub2RlTmFtZSA9PSAnQlVUVE9OJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ2dmViLkNvbXBvbmVudHMucmVuZGVyKG1hbnVhbHNlbGVjdGlucHV0aWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5uYW1lID09IFwidmFsdWVcIikgb3B0aW9uLmF0dHIoXCJ2YWx1ZVwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5wdXQubmFtZSA9PSBcInRleHRcIikgb3B0aW9uLnRleHQodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3JlbW92ZSBhbGwgb3B0aW9uIHByb3BlcnRpZXNcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmtleS5pbmRleE9mKFwib3B0aW9uXCIpID09PSAtMTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9hZGQgcmVtYWluaW5nIHByb3BlcnRpZXMgdG8gZ2VuZXJhdGVkIGNvbHVtbiBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcHJvcGVydGllcy5wdXNoKHRoaXMucHJvcGVydGllc1swXSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogXCJPcHRpb25cIixcclxuICAgICAgICBrZXk6IFwib3B0aW9uMVwiLFxyXG4gICAgICAgIGlucHV0dHlwZTogVGV4dFZhbHVlSW5wdXRcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIk9wdGlvblwiLFxyXG4gICAgICAgIGtleTogXCJvcHRpb24yXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUZXh0VmFsdWVJbnB1dFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAga2V5OiBcImFkZENoaWxkXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBCdXR0b25JbnB1dCxcclxuICAgICAgICBkYXRhOiB7IHRleHQ6IFwiQWRkIG9wdGlvblwiIH0sXHJcbiAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgICQobm9kZSkuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPVwidmFsdWVcIj5UZXh0PC9vcHRpb24+Jyk7XHJcbiAgICAgICAgICAgIC8vcmVuZGVyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGFnYWluIHRvIGluY2x1ZGUgdGhlIG5ldyBjb2x1bW4gaW5wdXRzXHJcbiAgICAgICAgICAgIFZ2dmViLkNvbXBvbmVudHMucmVuZGVyKG1hbnVhbHNlbGVjdGlucHV0aWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0b3NlbGVjdGlucHV0OyIsImltcG9ydCB7IGRhdGFDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvbW1vbic7XHJcblxyXG5jb25zdCBsYWJlbGRpdiA9IHtcclxuICAgIG5hbWU6ICdMYWJlbCBEaXYnLFxyXG4gICAgaW1hZ2U6ICdpY29ucy9sYWJlbC5zdmcnLFxyXG4gICAgaHRtbDogYDxkaXYgY2xhc3M9XCJldmVyeU91dGJveC1sZWZ0IGRyYWdnYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYXJldC1zcXVhcmUtby1yaWdodCB0ZXh0LWRhbmdlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuICR7ZGF0YUNvbXBvbmVudElkfT1cImh0bWwvc3BhbkBvZWVcIiBjbGFzcz1cInRoZW1lXCI+UGVyaW9kPC9zcGFuPlxyXG4gICAgICAgICAgIDwvZGl2PmBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxhYmVsZGl2OyIsImltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJy4uLy4uL2lucHV0cy9pbnB1dHMnO1xyXG5pbXBvcnQgeyBkYXRhQ29tcG9uZW50SWQgfSBmcm9tICcuLi9jb21tb24nO1xyXG5cclxuY29uc3QgY2hlY2tib3ggPSB7XHJcbiAgICBuYW1lOiBcIkNoZWNrYm94XCIsXHJcbiAgICBhdHRyaWJ1dGVzOiB7IFwidHlwZVwiOiBcImNoZWNrYm94XCIgfSxcclxuICAgIGltYWdlOiBcImljb25zL2NoZWNrYm94LnN2Z1wiLFxyXG4gICAgaHRtbDogYDxkaXYgY2xhc3M9XCJldmVyeU91dGJveC1yaWdodCBkcmFnZ2FibGVcIj5cclxuICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZTtcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCAke2RhdGFDb21wb25lbnRJZH09XCJodG1sL2NoZWNrYm94QG9lZVwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hJbnB1dFwiIGlkPVwiXFwke2l0LnNpdGV9ZXByQ2hlY2tcIiBuYW1lPVwicGFyYW1JdGVtc1tcXCR7bG9vcC5pbmRleH1dLmVwckNoZWNrXCIgdmFsdWU9XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsICR7ZGF0YUNvbXBvbmVudElkfT1cImh0bWwvc3BhbkBvZWVcIj7pgInpobkxPC9sYWJlbD5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gLFxyXG4gICAgcHJvcGVydGllczogW3tcclxuICAgICAgICBuYW1lOiBcIk5hbWVcIixcclxuICAgICAgICBrZXk6IFwibmFtZVwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcIm5hbWVcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFRleHRJbnB1dFxyXG4gICAgfV1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrYm94OyIsImltcG9ydCB7IFRleHRJbnB1dCwgU2VsZWN0SW5wdXQsIFRvZ2dsZUlucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcbmltcG9ydCB7IGlucHV0VHlwZU5hbWVzIH0gZnJvbSAnLi4vaW5wdXRUeXBlcyc7XHJcbmltcG9ydCB7IGRhdGFDb21wb25lbnRJZCwgZGF0YUNvbmZpZ0luZm8sIGRhdGFDYWxlbmRhcklkIH0gZnJvbSAnLi4vY29tbW9uJztcclxuaW1wb3J0IHtcclxuICAgIGNsb25lV2l0aG91dE9uY2xpY2ssIGdldERhdGVGbXQsIGdldFBhcnNlZENvbmZpZ0luZm8sXHJcbiAgICBzZXREYXRhQ29uZmlnSW5mbywgc2V0T25jbGlja0F0dHJcclxufSBmcm9tICcuLi8uLi91dGlsL2NhbGVuZGFyJ1xyXG5cclxuY29uc3QgY2FsZW5kYXIgPSB7XHJcbiAgICBuYW1lOiBcIkRhdGV0aW1lIElucHV0XCIsXHJcbiAgICBhdHRyaWJ1dGVzOiB7IFwidHlwZVwiOiBpbnB1dFR5cGVOYW1lcyB9LFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvY2FsZW5kYXIuc3ZnXCIsXHJcbiAgICBodG1sOiBgPGRpdiBjbGFzcz1cImV2ZXJ5T3V0Ym94LXJpZ2h0IGRyYWdnYWJsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGFpbHlCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgJHtkYXRhQ2FsZW5kYXJJZH0gJHtkYXRhQ29uZmlnSW5mb309XCJ7J2RhdGVGbXQnOiAneXl5eS1NTS1kZCBISDptbSd9XCIgJHtkYXRhQ29tcG9uZW50SWR9PVwiaHRtbC9jYWxlbmRhckBvZWVcIiBsdXN0eWxlPVwiaGVpZ2h0OiAyLjhyZW07d2lkdGg6MTNyZW0gXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBXZGF0ZVwiLz5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+YCxcclxuICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogXCJWYWx1ZVwiLFxyXG4gICAgICAgIGtleTogXCJ2YWx1ZVwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcInZhbHVlXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUZXh0SW5wdXRcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIlBsYWNlaG9sZGVyXCIsXHJcbiAgICAgICAga2V5OiBcInBsYWNlaG9sZGVyXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwicGxhY2Vob2xkZXJcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFRleHRJbnB1dFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdOYW1lJyxcclxuICAgICAgICBrZXk6ICduYW1lJyxcclxuICAgICAgICBodG1sQXR0cjogJ25hbWUnLFxyXG4gICAgICAgIGlucHV0dHlwZTogVGV4dElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJEYXRlIEZvcm1hdFwiLFxyXG4gICAgICAgIGtleTogXCJkYXRlRm10XCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICBpbml0OiBnZXREYXRlRm10LFxyXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAobm9kZSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgY29uZmlnSW5mbyA9IGdldFBhcnNlZENvbmZpZ0luZm8obm9kZSlcclxuICAgICAgICAgICAgY29uZmlnSW5mby5kYXRlRm10ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldERhdGFDb25maWdJbmZvKG5vZGUsIGNvbmZpZ0luZm8pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGUuYXR0cignb25jbGljaycpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0T25jbGlja0F0dHIoY2xvbmVXaXRob3V0T25jbGljayhub2RlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3l5eXktTU0tZGQgSEg6bW0nLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ3l5eXktTU0tZGQgSEg6bW0nXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAneXl5eS1NTS1kZCBISDptbTpzcycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAneXl5eS1NTS1kZCBISDptbTpzcydcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICd5eXl5LU1NLWRkJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICd5eXl5LU1NLWRkJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3l5eXlNTWRkJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICd5eXl5TU1kZCdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICd5eXl5TU0nLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ3l5eXlNTSdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICd5eXl5JyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICd5eXl5J1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3l5eXnlubRN5pyIJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICd5eXl55bm0TeaciCdcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJTaG93IERhdGV0aW1lXCIsXHJcbiAgICAgICAga2V5OiBcInNob3dEYXRldGltZVwiLFxyXG4gICAgICAgIHZhbGlkVmFsdWVzOiBbXCJ0YWJsZS1yZXNwb25zaXZlXCJdLFxyXG4gICAgICAgIGlucHV0dHlwZTogVG9nZ2xlSW5wdXQsXHJcbiAgICAgICAgb25DaGFuZ2Uobm9kZSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09ICdvbicpIHtcclxuICAgICAgICAgICAgICAgIHNldE9uY2xpY2tBdHRyKG5vZGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvbmVXaXRob3V0T25jbGljayhub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBvbjogJ29uJyxcclxuICAgICAgICAgICAgb2ZmOiAnb2ZmJ1xyXG4gICAgICAgIH1cclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYWxlbmRhcjsiLCJpbXBvcnQgeyBMaW5rSW5wdXQsIFNlbGVjdElucHV0LCBUZXh0SW5wdXQsIFRvZ2dsZUlucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcblxyXG5jb25zdCBidXR0b24gPSB7XHJcbiAgICBjbGFzc2VzOiBbXCJidG5cIiwgXCJidG4tbGlua1wiLCAnYnRuQG9lZSddLFxyXG4gICAgbmFtZTogXCJCdXR0b25cIixcclxuICAgIGltYWdlOiBcImljb25zL2J1dHRvbi5zdmdcIixcclxuICAgIGh0bWw6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bkBvZWUgZHJhZ2dhYmxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj5TZWFyY2g8L3NwYW4+XHJcbiAgICAgICAgICAgPC9idXR0b24+YCxcclxuICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogXCJMaW5rIFRvXCIsXHJcbiAgICAgICAga2V5OiBcImhyZWZcIixcclxuICAgICAgICBodG1sQXR0cjogXCJocmVmXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBMaW5rSW5wdXRcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIlR5cGVcIixcclxuICAgICAgICBrZXk6IFwidHlwZVwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcImNsYXNzXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICB2YWxpZFZhbHVlczogW1wiYnRuLWRlZmF1bHRcIiwgXCJidG4tcHJpbWFyeVwiLCBcImJ0bi1pbmZvXCIsIFwiYnRuLXN1Y2Nlc3NcIiwgXCJidG4td2FybmluZ1wiLCBcImJ0bi1pbmZvXCIsIFwiYnRuLWxpZ2h0XCIsIFwiYnRuLWRhcmtcIiwgXCJidG4tb3V0bGluZS1wcmltYXJ5XCIsIFwiYnRuLW91dGxpbmUtaW5mb1wiLCBcImJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIiwgXCJidG4tb3V0bGluZS13YXJuaW5nXCIsIFwiYnRuLW91dGxpbmUtaW5mb1wiLCBcImJ0bi1vdXRsaW5lLWxpZ2h0XCIsIFwiYnRuLW91dGxpbmUtZGFya1wiLCBcImJ0bi1saW5rXCJdLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0bi1kZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4tcHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJQcmltYXJ5XCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYnRuIGJ0bi1pbmZvXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkluZm9cIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4tc3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTdWNjZXNzXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYnRuLXdhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiV2FybmluZ1wiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0bi1pbmZvXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkluZm9cIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4tbGlnaHRcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiTGlnaHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4tZGFya1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJEYXJrXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYnRuLW91dGxpbmUtcHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJQcmltYXJ5IG91dGxpbmVcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4gYnRuLW91dGxpbmUtaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJJbmZvIG91dGxpbmVcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4tb3V0bGluZS1zdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlN1Y2Nlc3Mgb3V0bGluZVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0bi1vdXRsaW5lLXdhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiV2FybmluZyBvdXRsaW5lXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYnRuLW91dGxpbmUtaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJJbmZvIG91dGxpbmVcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4tb3V0bGluZS1saWdodFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJMaWdodCBvdXRsaW5lXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYnRuLW91dGxpbmUtZGFya1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJEYXJrIG91dGxpbmVcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4tbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJMaW5rXCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJTaXplXCIsXHJcbiAgICAgICAga2V5OiBcInNpemVcIixcclxuICAgICAgICBodG1sQXR0cjogXCJjbGFzc1wiLFxyXG4gICAgICAgIGlucHV0dHlwZTogU2VsZWN0SW5wdXQsXHJcbiAgICAgICAgdmFsaWRWYWx1ZXM6IFtcImJ0bi1sZ1wiLCBcImJ0bi1zbVwiXSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0bi1sZ1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJMYXJnZVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0bi1zbVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTbWFsbFwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiVGFyZ2V0XCIsXHJcbiAgICAgICAga2V5OiBcInRhcmdldFwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcInRhcmdldFwiLFxyXG4gICAgICAgIGlucHV0dHlwZTogVGV4dElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ0RhdGEgVXJsJyxcclxuICAgICAgICBrZXk6ICdkYXRhVXJsJyxcclxuICAgICAgICBodG1sQXR0cjogJ2RhdGEtdXJsJyxcclxuICAgICAgICBpbnB1dHR5cGU6IFRleHRJbnB1dFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiRGlzYWJsZWRcIixcclxuICAgICAgICBrZXk6IFwiZGlzYWJsZWRcIixcclxuICAgICAgICBodG1sQXR0cjogXCJjbGFzc1wiLFxyXG4gICAgICAgIGlucHV0dHlwZTogVG9nZ2xlSW5wdXQsXHJcbiAgICAgICAgdmFsaWRWYWx1ZXM6IFtcImRpc2FibGVkXCJdLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb246IFwiZGlzYWJsZWRcIixcclxuICAgICAgICAgICAgb2ZmOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfV1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvbjsiLCJpbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXRzJztcclxuaW1wb3J0IHsgYXV0b3NlbGVjdGlucHV0aWQgfSBmcm9tICcuL2lkcyc7XHJcbmltcG9ydCB7IGRhdGFDb21wb25lbnRJZCwgZGF0YVVybCwgZGF0YUF1dG9TZWxlY3RJZCB9IGZyb20gJy4uL2NvbW1vbic7XHJcblxyXG5jb25zdCBhdXRvc2VsZWN0aW5wdXQgPSB7XHJcbiAgICBub2RlczogW1wic2VsZWN0XCJdLFxyXG4gICAgbmFtZTogXCJBdXRvIFNlbGVjdCBJbnB1dFwiLFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvc2VsZWN0X2lucHV0LnN2Z1wiLFxyXG4gICAgaHRtbDogYDxkaXYgY2xhc3M9XCJldmVyeU91dGJveC1yaWdodCBkcmFnZ2FibGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhaWx5Qm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCAke2RhdGFBdXRvU2VsZWN0SWR9ICR7ZGF0YUNvbXBvbmVudElkfT1cIiR7YXV0b3NlbGVjdGlucHV0aWR9XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBsdXN0eWxlPVwiaGVpZ2h0OiAyLjhyZW07d2lkdGg6MTNyZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm9wZXJ0aWVzOiBbe1xyXG4gICAgICAgIG5hbWU6IFwiRGF0YSBVcmxcIixcclxuICAgICAgICBrZXk6IFwiZGF0YVVybFwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBkYXRhVXJsLFxyXG4gICAgICAgIGlucHV0dHlwZTogVGV4dElucHV0XHJcbiAgICB9XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0b3NlbGVjdGlucHV0OyIsImNvbnN0IG1hbnVhbHNlbGVjdGlucHV0aWQgPSAnaHRtbC9tYW51YWxzZWxlY3RpbnB1dEBvZWUnO1xyXG5jb25zdCBhdXRvc2VsZWN0aW5wdXRpZCA9ICdodG1sL2F1dG9zZWxlY3RpbnB1dEBvZWUnO1xyXG5cclxuZXhwb3J0IHsgbWFudWFsc2VsZWN0aW5wdXRpZCwgYXV0b3NlbGVjdGlucHV0aWQgfTsiLCJpbXBvcnQgbGFiZWwgZnJvbSAnLi9sYWJlbCc7XHJcbmltcG9ydCB0ZXh0aW5wdXQgZnJvbSAnLi90ZXh0aW5wdXQnO1xyXG5pbXBvcnQgYnV0dG9uIGZyb20gJy4vYnV0dG9uJztcclxuaW1wb3J0IGRpdiBmcm9tICcuL2Rpdic7XHJcbmltcG9ydCBjb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xyXG5pbXBvcnQgYWxlcnQgZnJvbSAnLi9hbGVydCc7XHJcbmltcG9ydCBiYWRnZSBmcm9tICcuL2JhZGdlJztcclxuaW1wb3J0IGJyZWFkY3J1bWJpdGVtIGZyb20gJy4vYnJlYWRjcnVtYml0ZW0nO1xyXG5pbXBvcnQgYnJlYWRjcnVtYnMgZnJvbSAnLi9icmVhZGNydW1icyc7XHJcbmltcG9ydCBidXR0b25ncm91cCBmcm9tICcuL2J1dHRvbmdyb3VwJztcclxuaW1wb3J0IGJ1dHRvbnRvb2xiYXIgZnJvbSAnLi9idXR0b250b29sYmFyJztcclxuaW1wb3J0IGNhcmQgZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IGNoZWNrYm94IGZyb20gJy4vY2hlY2tib3gnO1xyXG5pbXBvcnQgZmlsZWlucHV0IGZyb20gJy4vZmlsZWlucHV0JztcclxuaW1wb3J0IGZvcm0gZnJvbSAnLi9mb3JtJztcclxuaW1wb3J0IGdyaWRjb2x1bW4gZnJvbSAnLi9ncmlkY29sdW1uJztcclxuaW1wb3J0IGdyaWRyb3cgZnJvbSAnLi9ncmlkcm93JztcclxuaW1wb3J0IGhlYWRpbmcgZnJvbSAnLi9oZWFkaW5nJztcclxuaW1wb3J0IGhyIGZyb20gJy4vaHInO1xyXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZSc7XHJcbmltcG9ydCBqdW1ib3Ryb24gZnJvbSAnLi9qdW1ib3Ryb24nO1xyXG5pbXBvcnQgbGluayBmcm9tICcuL2xpbmsnO1xyXG5pbXBvcnQgbGlzdGdyb3VwIGZyb20gJy4vbGlzdGdyb3VwJztcclxuaW1wb3J0IGxpc3RpdGVtIGZyb20gJy4vbGlzdGl0ZW0nO1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJztcclxuaW1wb3J0IHBhZ2VpdGVtIGZyb20gJy4vcGFnZWl0ZW0nO1xyXG5pbXBvcnQgcGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgcHJvZ3Jlc3MgZnJvbSAnLi9wcm9ncmVzcyc7XHJcbmltcG9ydCByYWRpb2J1dHRvbiBmcm9tICcuL3JhZGlvYnV0dG9uJztcclxuaW1wb3J0IHNlbGVjdGlucHV0IGZyb20gJy4vc2VsZWN0aW5wdXQnO1xyXG5pbXBvcnQgdGFibGVoZWFkZXJjZWxsIGZyb20gJy4vdGFibGVoZWFkZXJjZWxsJztcclxuaW1wb3J0IHRhYmxlIGZyb20gJy4vdGFibGUnO1xyXG5pbXBvcnQgdGFibGVib2R5IGZyb20gJy4vdGFibGVib2R5JztcclxuaW1wb3J0IHRhYmxlY2VsbCBmcm9tICcuL3RhYmxlY2VsbCc7XHJcbmltcG9ydCB0YWJsZWhlYWQgZnJvbSAnLi90YWJsZWhlYWQnO1xyXG5pbXBvcnQgdGFibGVyb3cgZnJvbSAnLi90YWJsZXJvdyc7XHJcbmltcG9ydCB0ZXh0YXJlYWlucHV0IGZyb20gJy4vdGV4dGFyZWFpbnB1dCc7XHJcblxyXG5leHBvcnQge1xyXG4gICAgbGFiZWwsIHRleHRpbnB1dCwgYnV0dG9uLCBkaXYsIGNvbnRhaW5lciwgYWxlcnQsIGJhZGdlLCBicmVhZGNydW1iaXRlbSwgYnJlYWRjcnVtYnMsIGJ1dHRvbmdyb3VwLFxyXG4gICAgYnV0dG9udG9vbGJhciwgY2FyZCwgY2hlY2tib3gsIGZpbGVpbnB1dCwgZm9ybSwgZ3JpZGNvbHVtbiwgZ3JpZHJvdywgaGVhZGluZywgaHIsIGltYWdlLCBqdW1ib3Ryb24sXHJcbiAgICBsaW5rLCBsaXN0Z3JvdXAsIGxpc3RpdGVtLCBuYXZiYXIsIHBhZ2VpdGVtLCBwYWdpbmF0aW9uLCBwcm9ncmVzcywgcmFkaW9idXR0b24sIHNlbGVjdGlucHV0LCB0YWJsZWhlYWRlcmNlbGwsXHJcbiAgICB0YWJsZSwgdGFibGVib2R5LCB0YWJsZWNlbGwsIHRhYmxlaGVhZCwgdGFibGVyb3csIHRleHRhcmVhaW5wdXRcclxufTsiLCJpbXBvcnQgeyBUZXh0SW5wdXQsIFNlbGVjdElucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcbmltcG9ydCB7IGlucHV0VHlwZXMsIGlucHV0VHlwZU5hbWVzIH0gZnJvbSAnLi4vaW5wdXRUeXBlcyc7XHJcbmltcG9ydCB7IGRhdGFDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvbW1vbic7XHJcblxyXG5jb25zdCB0ZXh0aW5wdXQgPSB7XHJcbiAgICBuYW1lOiBcIlRleHQgSW5wdXRcIixcclxuICAgIGF0dHJpYnV0ZXM6IHsgXCJ0eXBlXCI6IGlucHV0VHlwZU5hbWVzIH0sXHJcbiAgICBpbWFnZTogXCJpY29ucy90ZXh0X2lucHV0LnN2Z1wiLFxyXG4gICAgaHRtbDogYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+PGxhYmVsPlRleHQ8L2xhYmVsPjxpbnB1dCAke2RhdGFDb21wb25lbnRJZH09XCJodG1sL3RleHRpbnB1dEBnZW5lcmFsXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPjwvZGl2PjwvZGl2PmAsXHJcbiAgICBwcm9wZXJ0aWVzOiBbe1xyXG4gICAgICAgIG5hbWU6IFwiVmFsdWVcIixcclxuICAgICAgICBrZXk6IFwidmFsdWVcIixcclxuICAgICAgICBodG1sQXR0cjogXCJ2YWx1ZVwiLFxyXG4gICAgICAgIGlucHV0dHlwZTogVGV4dElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJQbGFjZWhvbGRlclwiLFxyXG4gICAgICAgIGtleTogXCJwbGFjZWhvbGRlclwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcInBsYWNlaG9sZGVyXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUZXh0SW5wdXRcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAndHlwZScsXHJcbiAgICAgICAga2V5OiAndHlwZScsXHJcbiAgICAgICAgaHRtbEF0dHI6ICd0eXBlJyxcclxuICAgICAgICBpbnB1dHR5cGU6IFNlbGVjdElucHV0LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3B0aW9uczogaW5wdXRUeXBlc1xyXG4gICAgICAgIH1cclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZXh0aW5wdXQ7IiwiY29uc3QgaW5wdXRUeXBlcyA9IFtcclxuICAgIHtcclxuICAgICAgICB2YWx1ZTogJ3RleHQnLFxyXG4gICAgICAgIHRleHQ6ICd0ZXh0J1xyXG4gICAgfSwge1xyXG4gICAgICAgIHZhbHVlOiAncGFzc3dvcmQnLFxyXG4gICAgICAgIHRleHQ6ICdwYXNzd29yZCdcclxuICAgIH0sIHtcclxuICAgICAgICB2YWx1ZTogJ251bWJlcicsXHJcbiAgICAgICAgdGV4dDogJ251bWJlcidcclxuICAgIH0sIHtcclxuICAgICAgICB2YWx1ZTogJ3N1Ym1pdCcsXHJcbiAgICAgICAgdGV4dDogJ3N1Ym1pdCdcclxuICAgIH0sIHtcclxuICAgICAgICB2YWx1ZTogXCJlbWFpbFwiLFxyXG4gICAgICAgIHRleHQ6IFwiZW1haWxcIlxyXG4gICAgfSwge1xyXG4gICAgICAgIHZhbHVlOiAndXJsJyxcclxuICAgICAgICB0ZXh0OiAndXJsJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIHZhbHVlOiAndGVsJyxcclxuICAgICAgICB0ZXh0OiAndGVsJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIHZhbHVlOiAnc2VhcmNoJyxcclxuICAgICAgICB0ZXh0OiAnc2VhcmNoJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIHZhbHVlOiAnZGF0ZXRpbWUtbG9jYWwnLFxyXG4gICAgICAgIHRleHQ6ICdkYXRldGltZS1sb2NhbCdcclxuICAgIH0sIHtcclxuICAgICAgICB2YWx1ZTogJ2RhdGV0aW1lJyxcclxuICAgICAgICB0ZXh0OiAnZGF0ZXRpbWUnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdmFsdWU6ICdkYXRlJyxcclxuICAgICAgICB0ZXh0OiAnZGF0ZSdcclxuICAgIH0sIHtcclxuICAgICAgICB2YWx1ZTogJ3RpbWUnLFxyXG4gICAgICAgIHRleHQ6ICd0aW1lJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIHZhbHVlOiAnd2VlaycsXHJcbiAgICAgICAgdGV4dDogJ3dlZWsnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdmFsdWU6ICdtb250aCcsXHJcbiAgICAgICAgdGV4dDogJ21vbnRoJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIHZhbHVlOiAncmFuZ2UnLFxyXG4gICAgICAgIHRleHQ6ICdyYW5nZSdcclxuICAgIH0sIHtcclxuICAgICAgICB2YWx1ZTogJ2NvbG9yJyxcclxuICAgICAgICB0ZXh0OiAnY29sb3InXHJcbiAgICB9XTtcclxuXHJcbmNvbnN0IGlucHV0VHlwZU5hbWVzID0gaW5wdXRUeXBlcy5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge1xyXG4gICAgcHJldi5wdXNoKGN1ci52YWx1ZSk7XHJcbiAgICByZXR1cm4gcHJldjtcclxufSwgW10pO1xyXG5cclxuZXhwb3J0IHsgaW5wdXRUeXBlcywgaW5wdXRUeXBlTmFtZXMgfTsiLCJjb25zdCB0ZXh0YXJlYWlucHV0ID0ge1xyXG4gICAgbmFtZTogXCJUZXh0IEFyZWFcIixcclxuICAgIGltYWdlOiBcImljb25zL3RleHRfYXJlYS5zdmdcIixcclxuICAgIGh0bWw6ICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPjxsYWJlbD5Zb3VyIHJlc3BvbnNlOjwvbGFiZWw+PHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+PC90ZXh0YXJlYT48L2Rpdj4nXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZXh0YXJlYWlucHV0OyIsImltcG9ydCB7IFNlbGVjdElucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcblxyXG5jb25zdCB0YWJsZXJvdyA9IHtcclxuICAgIG5vZGVzOiBbXCJ0clwiXSxcclxuICAgIG5hbWU6IFwiVGFibGUgUm93XCIsXHJcbiAgICBodG1sOiBcIjx0cj48dGQ+Q2VsbCAxPC90ZD48dGQ+Q2VsbCAyPC90ZD48dGQ+Q2VsbCAzPC90ZD48L3RyPlwiLFxyXG4gICAgcHJvcGVydGllczogW3tcclxuICAgICAgICBuYW1lOiBcIlR5cGVcIixcclxuICAgICAgICBrZXk6IFwidHlwZVwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcImNsYXNzXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICB2YWxpZFZhbHVlczogW1wiXCIsIFwic3VjY2Vzc1wiLCBcImRhbmdlclwiLCBcIndhcm5pbmdcIiwgXCJhY3RpdmVcIl0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJFcnJvclwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiV2FybmluZ1wiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJBY3RpdmVcIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWJsZXJvdzsiLCJjb25zdCB0YWJsZWhlYWRlcmNlbGwgPSB7XHJcbiAgICBub2RlczogW1widGhcIl0sXHJcbiAgICBuYW1lOiBcIlRhYmxlIEhlYWRlciBDZWxsXCIsXHJcbiAgICBodG1sOiBcIjx0aD5IZWFkPC90aD5cIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFibGVoZWFkZXJjZWxsOyIsImltcG9ydCB7IFNlbGVjdElucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcblxyXG5jb25zdCB0YWJsZWhlYWQgPSB7XHJcbiAgICBub2RlczogW1widGhlYWRcIl0sXHJcbiAgICBuYW1lOiBcIlRhYmxlIEhlYWRcIixcclxuICAgIGh0bWw6IFwiPHRoZWFkPjx0cj48dGg+SGVhZCAxPC90aD48dGg+SGVhZCAyPC90aD48dGg+SGVhZCAzPC90aD48L3RyPjwvdGhlYWQ+XCIsXHJcbiAgICBwcm9wZXJ0aWVzOiBbe1xyXG4gICAgICAgIG5hbWU6IFwiVHlwZVwiLFxyXG4gICAgICAgIGtleTogXCJ0eXBlXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFNlbGVjdElucHV0LFxyXG4gICAgICAgIHZhbGlkVmFsdWVzOiBbXCJcIiwgXCJzdWNjZXNzXCIsIFwiZGFuZ2VyXCIsIFwid2FybmluZ1wiLCBcImluZm9cIl0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJFcnJvclwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiV2FybmluZ1wiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImluZm9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiSW5mb1wiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgfV1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhYmxlaGVhZDsiLCJjb25zdCB0YWJsZWNlbGwgPSB7XHJcbiAgICBub2RlczogW1widGRcIl0sXHJcbiAgICBuYW1lOiBcIlRhYmxlIENlbGxcIixcclxuICAgIGh0bWw6IFwiPHRkPkNlbGw8L3RkPlwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWJsZWNlbGw7IiwiY29uc3QgdGFibGVib2R5ID0ge1xyXG4gICAgbm9kZXM6IFtcInRib2R5XCJdLFxyXG4gICAgbmFtZTogXCJUYWJsZSBCb2R5XCIsXHJcbiAgICBodG1sOiBcIjx0Ym9keT48dHI+PHRkPkNlbGwgMTwvdGQ+PHRkPkNlbGwgMjwvdGQ+PHRkPkNlbGwgMzwvdGQ+PC90cj48L3Rib2R5PlwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWJsZWJvZHk7IiwiaW1wb3J0IHsgU2VsZWN0SW5wdXQsIFRvZ2dsZUlucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcblxyXG5jb25zdCB0YWJsZSA9IHtcclxuICAgIG5vZGVzOiBbXCJ0YWJsZVwiXSxcclxuICAgIGNsYXNzZXM6IFtcInRhYmxlXCJdLFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvdGFibGUuc3ZnXCIsXHJcbiAgICBuYW1lOiBcIlRhYmxlXCIsXHJcbiAgICBodG1sOiAnPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cXFxyXG5cdFx0ICA8dGhlYWQ+XFxcclxuXHRcdFx0PHRyPlxcXHJcblx0XHRcdCAgPHRoPiM8L3RoPlxcXHJcblx0XHRcdCAgPHRoPkZpcnN0IE5hbWU8L3RoPlxcXHJcblx0XHRcdCAgPHRoPkxhc3QgTmFtZTwvdGg+XFxcclxuXHRcdFx0ICA8dGg+VXNlcm5hbWU8L3RoPlxcXHJcblx0XHRcdDwvdHI+XFxcclxuXHRcdCAgPC90aGVhZD5cXFxyXG5cdFx0ICA8dGJvZHk+XFxcclxuXHRcdFx0PHRyPlxcXHJcblx0XHRcdCAgPHRoIHNjb3BlPVwicm93XCI+MTwvdGg+XFxcclxuXHRcdFx0ICA8dGQ+TWFyazwvdGQ+XFxcclxuXHRcdFx0ICA8dGQ+T3R0bzwvdGQ+XFxcclxuXHRcdFx0ICA8dGQ+QG1kbzwvdGQ+XFxcclxuXHRcdFx0PC90cj5cXFxyXG5cdFx0XHQ8dHI+XFxcclxuXHRcdFx0ICA8dGggc2NvcGU9XCJyb3dcIj4yPC90aD5cXFxyXG5cdFx0XHQgIDx0ZD5KYWNvYjwvdGQ+XFxcclxuXHRcdFx0ICA8dGQ+VGhvcm50b248L3RkPlxcXHJcblx0XHRcdCAgPHRkPkBmYXQ8L3RkPlxcXHJcblx0XHRcdDwvdHI+XFxcclxuXHRcdFx0PHRyPlxcXHJcblx0XHRcdCAgPHRoIHNjb3BlPVwicm93XCI+MzwvdGg+XFxcclxuXHRcdFx0ICA8dGQ+TGFycnk8L3RkPlxcXHJcblx0XHRcdCAgPHRkPnRoZSBCaXJkPC90ZD5cXFxyXG5cdFx0XHQgIDx0ZD5AdHdpdHRlcjwvdGQ+XFxcclxuXHRcdFx0PC90cj5cXFxyXG5cdFx0ICA8L3Rib2R5PlxcXHJcblx0XHQ8L3RhYmxlPicsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlR5cGVcIixcclxuICAgICAgICAgICAga2V5OiBcInR5cGVcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICAgICAgdmFsaWRWYWx1ZXM6IFtcInRhYmxlLXByaW1hcnlcIiwgXCJ0YWJsZS1zZWNvbmRhcnlcIiwgXCJ0YWJsZS1zdWNjZXNzXCIsIFwidGFibGUtZGFuZ2VyXCIsIFwidGFibGUtd2FybmluZ1wiLCBcInRhYmxlLWluZm9cIiwgXCJ0YWJsZS1saWdodFwiLCBcInRhYmxlLWRhcmtcIiwgXCJ0YWJsZS13aGl0ZVwiXSxcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJEZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInRhYmxlLXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInRhYmxlLXNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ0YWJsZS1zdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ0YWJsZS1kYW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwidGFibGUtd2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiV2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwidGFibGUtaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiSW5mb1wiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwidGFibGUtbGlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkxpZ2h0XCJcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ0YWJsZS1kYXJrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJEYXJrXCJcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ0YWJsZS13aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiV2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlJlc3BvbnNpdmVcIixcclxuICAgICAgICAgICAga2V5OiBcInJlc3BvbnNpdmVcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICAgICAgdmFsaWRWYWx1ZXM6IFtcInRhYmxlLXJlc3BvbnNpdmVcIl0sXHJcbiAgICAgICAgICAgIGlucHV0dHlwZTogVG9nZ2xlSW5wdXQsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG9uOiBcInRhYmxlLXJlc3BvbnNpdmVcIixcclxuICAgICAgICAgICAgICAgIG9mZjogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU21hbGxcIixcclxuICAgICAgICAgICAga2V5OiBcInNtYWxsXCIsXHJcbiAgICAgICAgICAgIGh0bWxBdHRyOiBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIHZhbGlkVmFsdWVzOiBbXCJ0YWJsZS1zbVwiXSxcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBUb2dnbGVJbnB1dCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgb246IFwidGFibGUtc21cIixcclxuICAgICAgICAgICAgICAgIG9mZjogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiSG92ZXJcIixcclxuICAgICAgICAgICAga2V5OiBcImhvdmVyXCIsXHJcbiAgICAgICAgICAgIGh0bWxBdHRyOiBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIHZhbGlkVmFsdWVzOiBbXCJ0YWJsZS1ob3ZlclwiXSxcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBUb2dnbGVJbnB1dCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgb246IFwidGFibGUtaG92ZXJcIixcclxuICAgICAgICAgICAgICAgIG9mZjogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQm9yZGVyZWRcIixcclxuICAgICAgICAgICAga2V5OiBcImJvcmRlcmVkXCIsXHJcbiAgICAgICAgICAgIGh0bWxBdHRyOiBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIHZhbGlkVmFsdWVzOiBbXCJ0YWJsZS1ib3JkZXJlZFwiXSxcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBUb2dnbGVJbnB1dCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgb246IFwidGFibGUtYm9yZGVyZWRcIixcclxuICAgICAgICAgICAgICAgIG9mZjogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU3RyaXBlZFwiLFxyXG4gICAgICAgICAgICBrZXk6IFwic3RyaXBlZFwiLFxyXG4gICAgICAgICAgICBodG1sQXR0cjogXCJjbGFzc1wiLFxyXG4gICAgICAgICAgICB2YWxpZFZhbHVlczogW1widGFibGUtc3RyaXBlZFwiXSxcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBUb2dnbGVJbnB1dCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgb246IFwidGFibGUtc3RyaXBlZFwiLFxyXG4gICAgICAgICAgICAgICAgb2ZmOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJJbnZlcnNlXCIsXHJcbiAgICAgICAgICAgIGtleTogXCJpbnZlcnNlXCIsXHJcbiAgICAgICAgICAgIGh0bWxBdHRyOiBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIHZhbGlkVmFsdWVzOiBbXCJ0YWJsZS1pbnZlcnNlXCJdLFxyXG4gICAgICAgICAgICBpbnB1dHR5cGU6IFRvZ2dsZUlucHV0LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBvbjogXCJ0YWJsZS1pbnZlcnNlXCIsXHJcbiAgICAgICAgICAgICAgICBvZmY6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkhlYWQgb3B0aW9uc1wiLFxyXG4gICAgICAgICAgICBrZXk6IFwiaGVhZFwiLFxyXG4gICAgICAgICAgICBodG1sQXR0cjogXCJjbGFzc1wiLFxyXG4gICAgICAgICAgICBjaGlsZDogXCJ0aGVhZFwiLFxyXG4gICAgICAgICAgICBpbnB1dHR5cGU6IFNlbGVjdElucHV0LFxyXG4gICAgICAgICAgICB2YWxpZFZhbHVlczogW1wiXCIsIFwidGhlYWQtaW52ZXJzZVwiLCBcInRoZWFkLWRlZmF1bHRcIl0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJOb25lXCJcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ0aGVhZC1kZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJEZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ0aGVhZC1pbnZlcnNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJJbnZlcnNlXCJcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFibGU7IiwiaW1wb3J0IFZ2dmViIGZyb20gJy4uLy4uL2J1aWxkZXInO1xyXG5pbXBvcnQgeyBUZXh0VmFsdWVJbnB1dCwgQnV0dG9uSW5wdXQgfSBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXRzJztcclxuXHJcbmNvbnN0IHNlbGVjdGlucHV0ID0ge1xyXG4gICAgbm9kZXM6IFtcInNlbGVjdFwiXSxcclxuICAgIG5hbWU6IFwiU2VsZWN0IElucHV0XCIsXHJcbiAgICBpbWFnZTogXCJpY29ucy9zZWxlY3RfaW5wdXQuc3ZnXCIsXHJcbiAgICBodG1sOiAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj48bGFiZWw+Q2hvb3NlIGFuIG9wdGlvbiA8L2xhYmVsPjxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj48b3B0aW9uIHZhbHVlPVwidmFsdWUxXCI+VGV4dCAxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cInZhbHVlMlwiPlRleHQgMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJ2YWx1ZTNcIj5UZXh0IDM8L29wdGlvbj48L3NlbGVjdD48L2Rpdj4nLFxyXG5cclxuICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgcHJvcGVydGllcyA9IFtdO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuXHJcbiAgICAgICAgJChub2RlKS5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGRhdGEgPSB7IFwidmFsdWVcIjogdGhpcy52YWx1ZSwgXCJ0ZXh0XCI6IHRoaXMudGV4dCB9O1xyXG5cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJPcHRpb24gXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcIm9wdGlvblwiICsgaSxcclxuICAgICAgICAgICAgICAgIC8vaW5kZXg6IGkgLSAxLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uTm9kZTogdGhpcyxcclxuICAgICAgICAgICAgICAgIGlucHV0dHlwZTogVGV4dFZhbHVlSW5wdXQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChub2RlLCB2YWx1ZSwgaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gJCh0aGlzLm9wdGlvbk5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lmIHJlbW92ZSBidXR0b24gaXMgY2xpY2tlZCByZW1vdmUgb3B0aW9uIGFuZCByZW5kZXIgcm93IHByb3BlcnRpZXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQubm9kZU5hbWUgPT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWdnZlYi5Db21wb25lbnRzLnJlbmRlcihcImh0bWwvc2VsZWN0aW5wdXRAZ2VuZXJhbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQubmFtZSA9PSBcInZhbHVlXCIpIG9wdGlvbi5hdHRyKFwidmFsdWVcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlucHV0Lm5hbWUgPT0gXCJ0ZXh0XCIpIG9wdGlvbi50ZXh0KHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9yZW1vdmUgYWxsIG9wdGlvbiBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5rZXkuaW5kZXhPZihcIm9wdGlvblwiKSA9PT0gLTE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vYWRkIHJlbWFpbmluZyBwcm9wZXJ0aWVzIHRvIGdlbmVyYXRlZCBjb2x1bW4gcHJvcGVydGllc1xyXG4gICAgICAgIHByb3BlcnRpZXMucHVzaCh0aGlzLnByb3BlcnRpZXNbMF0pO1xyXG5cclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiBbe1xyXG4gICAgICAgIG5hbWU6IFwiT3B0aW9uXCIsXHJcbiAgICAgICAga2V5OiBcIm9wdGlvbjFcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFRleHRWYWx1ZUlucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJPcHRpb25cIixcclxuICAgICAgICBrZXk6IFwib3B0aW9uMlwiLFxyXG4gICAgICAgIGlucHV0dHlwZTogVGV4dFZhbHVlSW5wdXRcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGtleTogXCJhZGRDaGlsZFwiLFxyXG4gICAgICAgIGlucHV0dHlwZTogQnV0dG9uSW5wdXQsXHJcbiAgICAgICAgZGF0YTogeyB0ZXh0OiBcIkFkZCBvcHRpb25cIiB9LFxyXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICAkKG5vZGUpLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cInZhbHVlXCI+VGV4dDwvb3B0aW9uPicpO1xyXG5cclxuICAgICAgICAgICAgLy9yZW5kZXIgY29tcG9uZW50IHByb3BlcnRpZXMgYWdhaW4gdG8gaW5jbHVkZSB0aGUgbmV3IGNvbHVtbiBpbnB1dHNcclxuICAgICAgICAgICAgVnZ2ZWIuQ29tcG9uZW50cy5yZW5kZXIoXCJodG1sL3NlbGVjdGlucHV0QGdlbmVyYWxcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0aW5wdXQ7IiwiaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcbmltcG9ydCB7IGRhdGFDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvbW1vbic7XHJcblxyXG5jb25zdCByYWRpb2J1dHRvbiA9IHtcclxuICAgIG5hbWU6IFwiUmFkaW8gQnV0dG9uXCIsXHJcbiAgICBhdHRyaWJ1dGVzOiB7IFwidHlwZVwiOiBcInJhZGlvXCIgfSxcclxuICAgIGltYWdlOiBcImljb25zL3JhZGlvLnN2Z1wiLFxyXG4gICAgaHRtbDogYDxsYWJlbCAke2RhdGFDb21wb25lbnRJZH09XCJodG1sL3JhZGlvYnV0dG9uQGdlbmVyYWxcIiBjbGFzcz1cInJhZGlvXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiPiBSYWRpbzwvbGFiZWw+YCxcclxuICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogXCJOYW1lXCIsXHJcbiAgICAgICAga2V5OiBcIm5hbWVcIixcclxuICAgICAgICBodG1sQXR0cjogXCJuYW1lXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUZXh0SW5wdXRcclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYWRpb2J1dHRvbjsiLCJpbXBvcnQgeyBTZWxlY3RJbnB1dCwgVG9nZ2xlSW5wdXQgfSBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXRzJztcclxuaW1wb3J0IHsgYmdjb2xvckNsYXNzZXMsIGJnY29sb3JTZWxlY3RPcHRpb25zIH0gZnJvbSAnLi4vY29tbW9uJztcclxuXHJcbmNvbnN0IHByb2dyZXNzID0ge1xyXG4gICAgY2xhc3NlczogW1wicHJvZ3Jlc3NcIl0sXHJcbiAgICBuYW1lOiBcIlByb2dyZXNzIEJhclwiLFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvcHJvZ3Jlc3NiYXIuc3ZnXCIsXHJcbiAgICBodG1sOiAnPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+PGRpdiBjbGFzcz1cInByb2dyZXNzLWJhciB3LTI1XCI+PC9kaXY+PC9kaXY+JyxcclxuICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAga2V5OiBcImJhY2tncm91bmRcIixcclxuICAgICAgICBodG1sQXR0cjogXCJjbGFzc1wiLFxyXG4gICAgICAgIHZhbGlkVmFsdWVzOiBiZ2NvbG9yQ2xhc3NlcyxcclxuICAgICAgICBpbnB1dHR5cGU6IFNlbGVjdElucHV0LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3B0aW9uczogYmdjb2xvclNlbGVjdE9wdGlvbnNcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiUHJvZ3Jlc3NcIixcclxuICAgICAgICBrZXk6IFwiYmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGNoaWxkOiBcIi5wcm9ncmVzcy1iYXJcIixcclxuICAgICAgICBodG1sQXR0cjogXCJjbGFzc1wiLFxyXG4gICAgICAgIHZhbGlkVmFsdWVzOiBbXCJcIiwgXCJ3LTI1XCIsIFwidy01MFwiLCBcInctNzVcIiwgXCJ3LTEwMFwiXSxcclxuICAgICAgICBpbnB1dHR5cGU6IFNlbGVjdElucHV0LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJOb25lXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwidy0yNVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCIyNSVcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJ3LTUwXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIjUwJVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcInctNzVcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiNzUlXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwidy0xMDBcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiMTAwJVwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlByb2dyZXNzIGJhY2tncm91bmRcIixcclxuICAgICAgICBrZXk6IFwiYmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGNoaWxkOiBcIi5wcm9ncmVzcy1iYXJcIixcclxuICAgICAgICBodG1sQXR0cjogXCJjbGFzc1wiLFxyXG4gICAgICAgIHZhbGlkVmFsdWVzOiBiZ2NvbG9yQ2xhc3NlcyxcclxuICAgICAgICBpbnB1dHR5cGU6IFNlbGVjdElucHV0LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3B0aW9uczogYmdjb2xvclNlbGVjdE9wdGlvbnNcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJTdHJpcGVkXCIsXHJcbiAgICAgICAga2V5OiBcInN0cmlwZWRcIixcclxuICAgICAgICBjaGlsZDogXCIucHJvZ3Jlc3MtYmFyXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICB2YWxpZFZhbHVlczogW1wiXCIsIFwicHJvZ3Jlc3MtYmFyLXN0cmlwZWRcIl0sXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUb2dnbGVJbnB1dCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG9uOiBcInByb2dyZXNzLWJhci1zdHJpcGVkXCIsXHJcbiAgICAgICAgICAgIG9mZjogXCJcIixcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJBbmltYXRlZFwiLFxyXG4gICAgICAgIGtleTogXCJhbmltYXRlZFwiLFxyXG4gICAgICAgIGNoaWxkOiBcIi5wcm9ncmVzcy1iYXJcIixcclxuICAgICAgICBodG1sQXR0cjogXCJjbGFzc1wiLFxyXG4gICAgICAgIHZhbGlkVmFsdWVzOiBbXCJcIiwgXCJwcm9ncmVzcy1iYXItYW5pbWF0ZWRcIl0sXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUb2dnbGVJbnB1dCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG9uOiBcInByb2dyZXNzLWJhci1hbmltYXRlZFwiLFxyXG4gICAgICAgICAgICBvZmY6IFwiXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfV1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2dyZXNzOyIsImltcG9ydCB7IFNlbGVjdElucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcblxyXG5jb25zdCBwYWdpbmF0aW9uID0ge1xyXG4gICAgY2xhc3NlczogW1wicGFnaW5hdGlvblwiXSxcclxuICAgIG5hbWU6IFwiUGFnaW5hdGlvblwiLFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvcGFnaW5hdGlvbi5zdmdcIixcclxuICAgIGh0bWw6ICc8bmF2IGFyaWEtbGFiZWw9XCJQYWdlIG5hdmlnYXRpb24gZXhhbXBsZVwiPlxcXHJcblx0ICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XFxcclxuXHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj5QcmV2aW91czwvYT48L2xpPlxcXHJcblx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MTwvYT48L2xpPlxcXHJcblx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MjwvYT48L2xpPlxcXHJcblx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MzwvYT48L2xpPlxcXHJcblx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+TmV4dDwvYT48L2xpPlxcXHJcblx0ICA8L3VsPlxcXHJcblx0PC9uYXY+JyxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiBbe1xyXG4gICAgICAgIG5hbWU6IFwiU2l6ZVwiLFxyXG4gICAgICAgIGtleTogXCJzaXplXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFNlbGVjdElucHV0LFxyXG4gICAgICAgIHZhbGlkVmFsdWVzOiBbXCJidG4tbGdcIiwgXCJidG4tc21cIl0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4tbGdcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiTGFyZ2VcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4tc21cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiU21hbGxcIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIkFsaWdubWVudFwiLFxyXG4gICAgICAgIGtleTogXCJhbGlnbm1lbnRcIixcclxuICAgICAgICBodG1sQXR0cjogXCJjbGFzc1wiLFxyXG4gICAgICAgIGlucHV0dHlwZTogU2VsZWN0SW5wdXQsXHJcbiAgICAgICAgdmFsaWRWYWx1ZXM6IFtcImp1c3RpZnktY29udGVudC1jZW50ZXJcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCJdLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJEZWZhdWx0XCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJDZW50ZXJcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlJpZ2h0XCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnaW5hdGlvbjsiLCJpbXBvcnQgeyBUZXh0SW5wdXQsIFRvZ2dsZUlucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcblxyXG5jb25zdCBwYWdlaXRlbSA9IHtcclxuICAgIGNsYXNzZXM6IFtcInBhZ2UtaXRlbVwiXSxcclxuICAgIGh0bWw6ICc8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCI+MTwvYT48L2xpPicsXHJcbiAgICBuYW1lOiBcIlBhZ2luYXRpb24gSXRlbVwiLFxyXG4gICAgcHJvcGVydGllczogW3tcclxuICAgICAgICBuYW1lOiBcIkxpbmsgVG9cIixcclxuICAgICAgICBrZXk6IFwiaHJlZlwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcImhyZWZcIixcclxuICAgICAgICBjaGlsZDogXCIucGFnZS1saW5rXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUZXh0SW5wdXRcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIkRpc2FibGVkXCIsXHJcbiAgICAgICAga2V5OiBcImRpc2FibGVkXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICB2YWxpZFZhbHVlczogW1wiZGlzYWJsZWRcIl0sXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUb2dnbGVJbnB1dCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG9uOiBcImRpc2FibGVkXCIsXHJcbiAgICAgICAgICAgIG9mZjogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlaXRlbTsiLCJpbXBvcnQgeyBTZWxlY3RJbnB1dCB9IGZyb20gJy4uLy4uL2lucHV0cy9pbnB1dHMnO1xyXG5pbXBvcnQgeyBiZ2NvbG9yQ2xhc3NlcywgYmdjb2xvclNlbGVjdE9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24nO1xyXG5cclxuY29uc3QgbmF2YmFyID0ge1xyXG4gICAgY2xhc3NlczogW1wibmF2YmFyXCJdLFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvbmF2YmFyLnN2Z1wiLFxyXG4gICAgbmFtZTogXCJOYXYgQmFyXCIsXHJcbiAgICBodG1sOiAnPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxcXHJcblx0XHQgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5OYXZiYXI8L2E+XFxcclxuXHRcdCAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cXFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XFxcclxuXHRcdCAgPC9idXR0b24+XFxcclxuXHRcdFxcXHJcblx0XHQgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cXFxyXG5cdFx0XHQ8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cXFxyXG5cdFx0XHQgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxcXHJcblx0XHRcdFx0PGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+SG9tZSA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+PC9hPlxcXHJcblx0XHRcdCAgPC9saT5cXFxyXG5cdFx0XHQgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XFxcclxuXHRcdFx0XHQ8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5MaW5rPC9hPlxcXHJcblx0XHRcdCAgPC9saT5cXFxyXG5cdFx0XHQgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XFxcclxuXHRcdFx0XHQ8YSBjbGFzcz1cIm5hdi1saW5rIGRpc2FibGVkXCIgaHJlZj1cIiNcIj5EaXNhYmxlZDwvYT5cXFxyXG5cdFx0XHQgIDwvbGk+XFxcclxuXHRcdFx0PC91bD5cXFxyXG5cdFx0XHQ8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxcXHJcblx0XHRcdCAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIG1yLXNtLTJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgYXJpYS1sYWJlbD1cIlNlYXJjaFwiPlxcXHJcblx0XHRcdCAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIG15LTIgbXktc20tMFwiIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cXFxyXG5cdFx0XHQ8L2Zvcm0+XFxcclxuXHRcdCAgPC9kaXY+XFxcclxuXHRcdDwvbmF2PicsXHJcblxyXG4gICAgcHJvcGVydGllczogW3tcclxuICAgICAgICBuYW1lOiBcIkNvbG9yIHRoZW1lXCIsXHJcbiAgICAgICAga2V5OiBcImNvbG9yXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICB2YWxpZFZhbHVlczogW1wibmF2YmFyLWxpZ2h0XCIsIFwibmF2YmFyLWRhcmtcIl0sXHJcbiAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIm5hdmJhci1saWdodFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJMaWdodFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIm5hdmJhci1kYXJrXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRhcmtcIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIkJhY2tncm91bmQgY29sb3JcIixcclxuICAgICAgICBrZXk6IFwiYmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcImNsYXNzXCIsXHJcbiAgICAgICAgdmFsaWRWYWx1ZXM6IGJnY29sb3JDbGFzc2VzLFxyXG4gICAgICAgIGlucHV0dHlwZTogU2VsZWN0SW5wdXQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBiZ2NvbG9yU2VsZWN0T3B0aW9uc1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIlBsYWNlbWVudFwiLFxyXG4gICAgICAgIGtleTogXCJwbGFjZW1lbnRcIixcclxuICAgICAgICBodG1sQXR0cjogXCJjbGFzc1wiLFxyXG4gICAgICAgIHZhbGlkVmFsdWVzOiBbXCJmaXhlZC10b3BcIiwgXCJmaXhlZC1ib3R0b21cIiwgXCJzdGlja3ktdG9wXCJdLFxyXG4gICAgICAgIGlucHV0dHlwZTogU2VsZWN0SW5wdXQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJmaXhlZC10b3BcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRml4ZWQgVG9wXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiZml4ZWQtYm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkZpeGVkIEJvdHRvbVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcInN0aWNreS10b3BcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiU3RpY2t5IHRvcFwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgfV1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhcjsiLCJjb25zdCBsaXN0aXRlbSA9IHtcclxuICAgIG5hbWU6IFwiTGlzdCBJdGVtXCIsXHJcbiAgICBjbGFzc2VzOiBbXCJsaXN0LWdyb3VwLWl0ZW1cIl0sXHJcbiAgICBodG1sOiAnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+PHNwYW4gY2xhc3M9XCJiYWRnZVwiPjE0PC9zcGFuPiBDcmFzIGp1c3RvIG9kaW88L2xpPidcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpc3RpdGVtOyIsImNvbnN0IGxpc3Rncm91cCA9IHtcclxuICAgIG5hbWU6IFwiTGlzdCBHcm91cFwiLFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvbGlzdF9ncm91cC5zdmdcIixcclxuICAgIGNsYXNzZXM6IFtcImxpc3QtZ3JvdXBcIl0sXHJcbiAgICBodG1sOiAnPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxcbiAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XFxuICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj4xNDwvc3Bhbj5cXG4gICAgQ3JhcyBqdXN0byBvZGlvXFxuICA8L2xpPlxcbiAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XFxuICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIj4yPC9zcGFuPlxcbiAgICBEYXBpYnVzIGFjIGZhY2lsaXNpcyBpblxcbiAgPC9saT5cXG4gIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxcbiAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCI+MTwvc3Bhbj5cXG4gICAgTW9yYmkgbGVvIHJpc3VzXFxuICA8L2xpPlxcbjwvdWw+J1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlzdGdyb3VwOyIsImltcG9ydCB7IExpbmtJbnB1dCwgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcblxyXG5jb25zdCBsaW5rID0ge1xyXG4gICAgbm9kZXM6IFtcImFcIl0sXHJcbiAgICBuYW1lOiBcIkxpbmtcIixcclxuICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogXCJVcmxcIixcclxuICAgICAgICBrZXk6IFwiaHJlZlwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcImhyZWZcIixcclxuICAgICAgICBpbnB1dHR5cGU6IExpbmtJbnB1dFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiVGFyZ2V0XCIsXHJcbiAgICAgICAga2V5OiBcInRhcmdldFwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcInRhcmdldFwiLFxyXG4gICAgICAgIGlucHV0dHlwZTogVGV4dElucHV0XHJcbiAgICB9XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGluazsiLCJpbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXRzJztcclxuXHJcbmNvbnN0IGxhYmVsID0ge1xyXG4gICAgbmFtZTogJ0xhYmVsJyxcclxuICAgIG5vZGVzOiBbJ2xhYmVsJ10sXHJcbiAgICBpbWFnZTogJ2ljb25zL2xhYmVsLnN2ZycsXHJcbiAgICBodG1sOiAnPGxhYmVsIGZvcj1cIlwiPkxhYmVsPC9sYWJlbD4nLFxyXG4gICAgcHJvcGVydGllczogW3tcclxuICAgICAgICBuYW1lOiAnRm9yIGlkJyxcclxuICAgICAgICBodG1sQXR0cjogJ2ZvcicsXHJcbiAgICAgICAga2V5OiAnZm9yJyxcclxuICAgICAgICBpbnB1dHR5cGU6IFRleHRJbnB1dFxyXG4gICAgfV1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxhYmVsOyIsImNvbnN0IGp1bWJvdHJvbiA9IHtcclxuICAgIGNsYXNzZXM6IFtcImp1bWJvdHJvblwiXSxcclxuICAgIGltYWdlOiBcImljb25zL2p1bWJvdHJvbi5zdmdcIixcclxuICAgIG5hbWU6IFwiSnVtYm90cm9uXCIsXHJcbiAgICBodG1sOiAnPGRpdiBjbGFzcz1cImp1bWJvdHJvblwiPlxcXHJcblx0XHQgIDxoMSBjbGFzcz1cImRpc3BsYXktM1wiPkhlbGxvLCB3b3JsZCE8L2gxPlxcXHJcblx0XHQgIDxwIGNsYXNzPVwibGVhZFwiPlRoaXMgaXMgYSBzaW1wbGUgaGVybyB1bml0LCBhIHNpbXBsZSBqdW1ib3Ryb24tc3R5bGUgY29tcG9uZW50IGZvciBjYWxsaW5nIGV4dHJhIGF0dGVudGlvbiB0byBmZWF0dXJlZCBjb250ZW50IG9yIGluZm9ybWF0aW9uLjwvcD5cXFxyXG5cdFx0ICA8aHIgY2xhc3M9XCJteS00XCI+XFxcclxuXHRcdCAgPHA+SXQgdXNlcyB1dGlsaXR5IGNsYXNzZXMgZm9yIHR5cG9ncmFwaHkgYW5kIHNwYWNpbmcgdG8gc3BhY2UgY29udGVudCBvdXQgd2l0aGluIHRoZSBsYXJnZXIgY29udGFpbmVyLjwvcD5cXFxyXG5cdFx0ICA8cCBjbGFzcz1cImxlYWRcIj5cXFxyXG5cdFx0XHQ8YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIj5MZWFybiBtb3JlPC9hPlxcXHJcblx0XHQgIDwvcD5cXFxyXG5cdFx0PC9kaXY+J1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQganVtYm90cm9uOyIsImltcG9ydCBWdnZlYiBmcm9tICcuLi8uLi9idWlsZGVyJ1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkSW5wdXQsIFRleHRJbnB1dCB9IGZyb20gJy4uLy4uL2lucHV0cy9pbnB1dHMnO1xyXG5cclxuY29uc3QgaW1hZ2UgPSB7XHJcbiAgICBub2RlczogW1wiaW1nXCJdLFxyXG4gICAgbmFtZTogXCJJbWFnZVwiLFxyXG4gICAgaHRtbDogJzxpbWcgc3JjPVwiJyArIFZ2dmViLmJhc2VVcmwgKyAnaWNvbnMvaW1hZ2Uuc3ZnXCIgaGVpZ2h0PVwiMTI4XCIgd2lkdGg9XCIxMjhcIj4nLFxyXG4gICAgLypcclxuICAgIGFmdGVyRHJvcDogZnVuY3Rpb24gKG5vZGUpXHJcblx0e1xyXG5cdFx0bm9kZS5hdHRyKFwic3JjXCIsICcnKTtcclxuXHRcdHJldHVybiBub2RlO1xyXG5cdH0sKi9cclxuICAgIGltYWdlOiBcImljb25zL2ltYWdlLnN2Z1wiLFxyXG4gICAgcHJvcGVydGllczogW3tcclxuICAgICAgICBuYW1lOiBcIkltYWdlXCIsXHJcbiAgICAgICAga2V5OiBcInNyY1wiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcInNyY1wiLFxyXG4gICAgICAgIGlucHV0dHlwZTogRmlsZVVwbG9hZElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJXaWR0aFwiLFxyXG4gICAgICAgIGtleTogXCJ3aWR0aFwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcIndpZHRoXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUZXh0SW5wdXRcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIkhlaWdodFwiLFxyXG4gICAgICAgIGtleTogXCJoZWlnaHRcIixcclxuICAgICAgICBodG1sQXR0cjogXCJoZWlnaHRcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFRleHRJbnB1dFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiQWx0XCIsXHJcbiAgICAgICAga2V5OiBcImFsdFwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcImFsdFwiLFxyXG4gICAgICAgIGlucHV0dHlwZTogVGV4dElucHV0XHJcbiAgICB9XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW1hZ2U7IiwiY29uc3QgaHIgPSB7XHJcbiAgICBpbWFnZTogXCJpY29ucy9oci5zdmdcIixcclxuICAgIG5vZGVzOiBbXCJoclwiXSxcclxuICAgIG5hbWU6IFwiSG9yaXpvbnRhbCBSdWxlXCIsXHJcbiAgICBodG1sOiBcIjxocj5cIlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBocjsiLCJpbXBvcnQgeyBjaGFuZ2VOb2RlTmFtZSB9IGZyb20gJy4uL2NvbW1vbic7XHJcbmltcG9ydCB7IFNlbGVjdElucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcblxyXG5jb25zdCBoZWFkaW5nID0gIHtcclxuICAgIGltYWdlOiBcImljb25zL2hlYWRpbmcuc3ZnXCIsXHJcbiAgICBuYW1lOiBcIkhlYWRpbmdcIixcclxuICAgIG5vZGVzOiBbXCJoMVwiLCBcImgyXCIsIFwiaDNcIiwgXCJoNFwiLCBcImg1XCIsIFwiaDZcIl0sXHJcbiAgICBodG1sOiBcIjxoMT5IZWFkaW5nPC9oMT5cIixcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlNpemVcIixcclxuICAgICAgICAgICAga2V5OiBcImlkXCIsXHJcbiAgICAgICAgICAgIGh0bWxBdHRyOiBcImlkXCIsXHJcbiAgICAgICAgICAgIGlucHV0dHlwZTogU2VsZWN0SW5wdXQsXHJcblxyXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKG5vZGUsIHZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYW5nZU5vZGVOYW1lKG5vZGUsIFwiaFwiICsgdmFsdWUpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWdleDtcclxuICAgICAgICAgICAgICAgIHJlZ2V4ID0gL0goXFxkKS8uZXhlYyhub2RlLm5vZGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZWdleCAmJiByZWdleFsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWdleFsxXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiMVwiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiMlwiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiM1wiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiNFwiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiNVwiXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiNlwiXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkaW5nOyIsImltcG9ydCB7IEdyaWRJbnB1dCwgQnV0dG9uSW5wdXQgfSBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXRzJztcclxuXHJcbmNvbnN0IGdyaWRyb3cgPSB7XHJcbiAgICBuYW1lOiBcIkdyaWQgUm93XCIsXHJcbiAgICBpbWFnZTogXCJpY29ucy9ncmlkX3Jvdy5zdmdcIixcclxuICAgIGNsYXNzZXM6IFtcInJvd1wiXSxcclxuICAgIGh0bWw6ICc8ZGl2IGNsYXNzPVwicm93XCI+PGRpdiBjbGFzcz1cImNvbC1zbS00XCI+PGgzPmNvbC1zbS00PC9oMz48L2Rpdj48ZGl2IGNsYXNzPVwiY29sLXNtLTQgY29sLTVcIj48aDM+Y29sLXNtLTQ8L2gzPjwvZGl2PjxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPjxoMz5jb2wtc20tNDwvaDM+PC9kaXY+PC9kaXY+JyxcclxuXHJcbiAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXTtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgdmFyIGogPSAwO1xyXG5cclxuICAgICAgICAkKG5vZGUpLmZpbmQoJ1tjbGFzcyo9XCJjb2wtXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF9jbGFzcyA9ICQodGhpcykuYXR0cihcImNsYXNzXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlZyA9IC9jb2wtKFteLVxcJCBdKik/LT8oXFxkKykvZztcclxuICAgICAgICAgICAgdmFyIG1hdGNoO1xyXG4gICAgICAgICAgICBkYXRhID0ge307XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoKG1hdGNoID0gcmVnLmV4ZWMoX2NsYXNzKSkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtcImNvbFwiICsgKChtYXRjaFsxXSAhPSB1bmRlZmluZWQpID8gXCJfXCIgKyBtYXRjaFsxXSA6IFwiXCIpXSA9IG1hdGNoWzJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbHVtbiBcIiArIGksXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiY29sdW1uXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgLy9pbmRleDogaSAtIDEsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5Ob2RlOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXR0eXBlOiBHcmlkSW5wdXQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChub2RlLCB2YWx1ZSwgaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb2x1bW4gPSAkKCdbY2xhc3MqPVwiY29sLVwiXTplcSgnICsgdGhpcy5pbmRleCArICcpJywgbm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gJCh0aGlzLmNvbHVtbk5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lmIHJlbW92ZSBidXR0b24gaXMgY2xpY2tlZCByZW1vdmUgY29sdW1uIGFuZCByZW5kZXIgcm93IHByb3BlcnRpZXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQubm9kZU5hbWUgPT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWdnZlYi5Db21wb25lbnRzLnJlbmRlcihcImh0bWwvZ3JpZHJvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lmIHNlbGVjdCBpbnB1dCB0aGVuIGNoYW5nZSBjb2x1bW4gY2xhc3NcclxuICAgICAgICAgICAgICAgICAgICBfY2xhc3MgPSBjb2x1bW4uYXR0cihcImNsYXNzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3JlbW92ZSBwcmV2aW91cyBicmVha3BvaW50IGNvbHVtbiBzaXplXHJcbiAgICAgICAgICAgICAgICAgICAgX2NsYXNzID0gX2NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cChpbnB1dC5uYW1lICsgJy1cXFxcZCs/JyksICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2FkZCBuZXcgY29sdW1uIHNpemVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIF9jbGFzcyArPSAnICcgKyBpbnB1dC5uYW1lICsgJy0nICsgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLmF0dHIoXCJjbGFzc1wiLCBfY2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3JlbW92ZSBhbGwgY29sdW1uIHByb3BlcnRpZXNcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmtleS5pbmRleE9mKFwiY29sdW1uXCIpID09PSAtMTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9hZGQgcmVtYWluaW5nIHByb3BlcnRpZXMgdG8gZ2VuZXJhdGVkIGNvbHVtbiBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcHJvcGVydGllcy5wdXNoKHRoaXMucHJvcGVydGllc1swXSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogXCJDb2x1bW5cIixcclxuICAgICAgICBrZXk6IFwiY29sdW1uMVwiLFxyXG4gICAgICAgIGlucHV0dHlwZTogR3JpZElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJDb2x1bW5cIixcclxuICAgICAgICBrZXk6IFwiY29sdW1uMVwiLFxyXG4gICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICBjb2w6IDEyLFxyXG4gICAgICAgIGlucHV0dHlwZTogR3JpZElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBrZXk6IFwiYWRkQ2hpbGRcIixcclxuICAgICAgICBpbnB1dHR5cGU6IEJ1dHRvbklucHV0LFxyXG4gICAgICAgIGRhdGE6IHsgdGV4dDogXCJBZGQgY29sdW1uXCIgfSxcclxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgJChub2RlKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjb2wtM1wiPkNvbC0zPC9kaXY+Jyk7XHJcblxyXG4gICAgICAgICAgICAvL3JlbmRlciBjb21wb25lbnQgcHJvcGVydGllcyBhZ2FpbiB0byBpbmNsdWRlIHRoZSBuZXcgY29sdW1uIGlucHV0c1xyXG4gICAgICAgICAgICBWdnZlYi5Db21wb25lbnRzLnJlbmRlcihcImh0bWwvZ3JpZHJvd1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBncmlkcm93OyIsImltcG9ydCB7IEdyaWRJbnB1dCB9IGZyb20gJy4uLy4uL2lucHV0cy9pbnB1dHMnO1xyXG5cclxuY29uc3QgZ3JpZGNvbHVtbiA9IHtcclxuICAgIG5hbWU6IFwiR3JpZCBDb2x1bW5cIixcclxuICAgIGltYWdlOiBcImljb25zL2dyaWRfcm93LnN2Z1wiLFxyXG4gICAgY2xhc3Nlc1JlZ2V4OiBbXCJjb2wtXCJdLFxyXG4gICAgaHRtbDogJzxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPjxoMz5jb2wtc20tNDwvaDM+PC9kaXY+JyxcclxuICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogXCJDb2x1bW5cIixcclxuICAgICAgICBrZXk6IFwiY29sdW1uXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBHcmlkSW5wdXQsXHJcbiAgICAgICAgZGF0YTogeyBoaWRlX3JlbW92ZTogdHJ1ZSB9LFxyXG5cclxuICAgICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICBfY2xhc3MgPSAkKG5vZGUpLmF0dHIoXCJjbGFzc1wiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZWcgPSAvY29sLShbXi1cXCQgXSopPy0/KFxcZCspL2c7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICgobWF0Y2ggPSByZWcuZXhlYyhfY2xhc3MpKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbXCJjb2xcIiArICgobWF0Y2hbMV0gIT0gdW5kZWZpbmVkKSA/IFwiX1wiICsgbWF0Y2hbMV0gOiBcIlwiKV0gPSBtYXRjaFsyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAobm9kZSwgdmFsdWUsIGlucHV0KSB7XHJcbiAgICAgICAgICAgIF9jbGFzcyA9IG5vZGUuYXR0cihcImNsYXNzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy9yZW1vdmUgcHJldmlvdXMgYnJlYWtwb2ludCBjb2x1bW4gc2l6ZVxyXG4gICAgICAgICAgICBfY2xhc3MgPSBfY2xhc3MucmVwbGFjZShuZXcgUmVnRXhwKGlucHV0Lm5hbWUgKyAnLVxcXFxkKz8nKSwgJycpO1xyXG4gICAgICAgICAgICAvL2FkZCBuZXcgY29sdW1uIHNpemVcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSBfY2xhc3MgKz0gJyAnICsgaW5wdXQubmFtZSArICctJyArIHZhbHVlO1xyXG4gICAgICAgICAgICBub2RlLmF0dHIoXCJjbGFzc1wiLCBfY2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfSxcclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBncmlkY29sdW1uOyIsImltcG9ydCB7IFRleHRJbnB1dCwgU2VsZWN0SW5wdXQgfSBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXRzJztcclxuXHJcbmNvbnN0IGZvcm0gPSB7XHJcbiAgICBub2RlczogW1wiZm9ybVwiXSxcclxuICAgIGltYWdlOiBcImljb25zL2Zvcm0uc3ZnXCIsXHJcbiAgICBuYW1lOiBcIkZvcm1cIixcclxuICAgIGh0bWw6ICc8Zm9ybSBjbGFzcz1cImRyb3B6b25lXCI+PC9mb3JtPicsXHJcbiAgICBwcm9wZXJ0aWVzOiBbe1xyXG4gICAgICAgIG5hbWU6IFwiU3R5bGVcIixcclxuICAgICAgICBrZXk6IFwic3R5bGVcIixcclxuICAgICAgICBodG1sQXR0cjogXCJjbGFzc1wiLFxyXG4gICAgICAgIHZhbGlkVmFsdWVzOiBbXCJcIiwgXCJmb3JtLXNlYXJjaFwiLCBcImZvcm0taW5saW5lXCIsIFwiZm9ybS1ob3Jpem9udGFsXCJdLFxyXG4gICAgICAgIGlucHV0dHlwZTogU2VsZWN0SW5wdXQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJmb3JtLXNlYXJjaFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTZWFyY2hcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJmb3JtLWlubGluZVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJJbmxpbmVcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJmb3JtLWhvcml6b250YWxcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiSG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiQWN0aW9uXCIsXHJcbiAgICAgICAga2V5OiBcImFjdGlvblwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcImFjdGlvblwiLFxyXG4gICAgICAgIGlucHV0dHlwZTogVGV4dElucHV0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJNZXRob2RcIixcclxuICAgICAgICBrZXk6IFwibWV0aG9kXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwibWV0aG9kXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUZXh0SW5wdXRcclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtOyIsImNvbnN0IGZpbGVpbnB1dCA9IHtcclxuICAgIG5hbWU6IFwiSW5wdXQgZ3JvdXBcIixcclxuICAgIGF0dHJpYnV0ZXM6IHsgXCJ0eXBlXCI6IFwiZmlsZVwiIH0sXHJcbiAgICBpbWFnZTogXCJpY29ucy90ZXh0X2lucHV0LnN2Z1wiLFxyXG4gICAgaHRtbDogJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XFxcclxuXHRcdFx0ICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxcXHJcblx0XHRcdDwvZGl2PidcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbGVpbnB1dDsiLCJpbXBvcnQgeyBiZ2NvbG9yU2VsZWN0T3B0aW9ucywgYmdjb2xvckNsYXNzZXMgfSBmcm9tICcuLi9jb21tb24nO1xyXG5pbXBvcnQgeyBTZWxlY3RJbnB1dCwgQ29sb3JJbnB1dCB9IGZyb20gJy4uLy4uL2lucHV0cy9pbnB1dHMnO1xyXG5cclxuY29uc3QgZGl2ID0ge1xyXG4gICAgY2xhc3NlczogW1wiY29udGFpbmVyXCIsIFwiY29udGFpbmVyLWZsdWlkXCJdLFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvZGl2LnN2Z1wiLFxyXG4gICAgaHRtbDogJzxkaXYgc3R5bGU9XCJ3aWR0aDogMzUwcHg7IGhlaWdodDogMjAwcHg7XCIgY2xhc3M9XCJkcm9wem9uZVwiPjwvZGl2PicsXHJcbiAgICBuYW1lOiBcIkRpdlwiLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJUeXBlXCIsXHJcbiAgICAgICAgICAgIGtleTogXCJ0eXBlXCIsXHJcbiAgICAgICAgICAgIGh0bWxBdHRyOiBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIGlucHV0dHlwZTogU2VsZWN0SW5wdXQsXHJcbiAgICAgICAgICAgIHZhbGlkVmFsdWVzOiBbXCJjb250YWluZXJcIiwgXCJjb250YWluZXItZmx1aWRcIl0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJEZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJjb250YWluZXItZmx1aWRcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZsdWlkXCJcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgICAgIGtleTogXCJiYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgICAgIGh0bWxBdHRyOiBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIHZhbGlkVmFsdWVzOiBiZ2NvbG9yQ2xhc3NlcyxcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogYmdjb2xvclNlbGVjdE9wdGlvbnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkJhY2tncm91bmQgQ29sb3JcIixcclxuICAgICAgICAgICAga2V5OiBcImJhY2tncm91bmQtY29sb3JcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBDb2xvcklucHV0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlRleHQgQ29sb3JcIixcclxuICAgICAgICAgICAga2V5OiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgIGh0bWxBdHRyOiBcInN0eWxlXCIsXHJcbiAgICAgICAgICAgIGlucHV0dHlwZTogQ29sb3JJbnB1dCxcclxuICAgICAgICB9XSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpdjsiLCJpbXBvcnQgeyBTZWxlY3RJbnB1dCwgQ29sb3JJbnB1dCB9IGZyb20gJy4uLy4uL2lucHV0cy9pbnB1dHMnO1xyXG5pbXBvcnQgeyBiZ2NvbG9yQ2xhc3NlcywgYmdjb2xvclNlbGVjdE9wdGlvbnMgfSBmcm9tICcuLi9jb21tb24nO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0ge1xyXG4gICAgY2xhc3NlczogW1wiY29udGFpbmVyXCIsIFwiY29udGFpbmVyLWZsdWlkXCJdLFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvY29udGFpbmVyLnN2Z1wiLFxyXG4gICAgaHRtbDogJzxkaXYgY2xhc3M9XCJjb250YWluZXIgZHJvcHpvbmVcIj48ZGl2IGNsYXNzPVwibS01XCI+Q29udGFpbmVyPC9kaXY+PC9kaXY+JyxcclxuICAgIG5hbWU6IFwiQ29udGFpbmVyXCIsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlR5cGVcIixcclxuICAgICAgICAgICAga2V5OiBcInR5cGVcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICAgICAgdmFsaWRWYWx1ZXM6IFtcImNvbnRhaW5lclwiLCBcImNvbnRhaW5lci1mbHVpZFwiXSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJjb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImNvbnRhaW5lci1mbHVpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkJhY2tncm91bmRcIixcclxuICAgICAgICAgICAga2V5OiBcImJhY2tncm91bmRcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICAgICAgdmFsaWRWYWx1ZXM6IGJnY29sb3JDbGFzc2VzLFxyXG4gICAgICAgICAgICBpbnB1dHR5cGU6IFNlbGVjdElucHV0LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBiZ2NvbG9yU2VsZWN0T3B0aW9uc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQmFja2dyb3VuZCBDb2xvclwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiYmFja2dyb3VuZC1jb2xvclwiLFxyXG4gICAgICAgICAgICBodG1sQXR0cjogXCJzdHlsZVwiLFxyXG4gICAgICAgICAgICBpbnB1dHR5cGU6IENvbG9ySW5wdXQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiVGV4dCBDb2xvclwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiY29sb3JcIixcclxuICAgICAgICAgICAgaHRtbEF0dHI6IFwic3R5bGVcIixcclxuICAgICAgICAgICAgaW5wdXR0eXBlOiBDb2xvcklucHV0LFxyXG4gICAgICAgIH1dLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFpbmVyO1xyXG5cclxuIiwiaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcblxyXG5jb25zdCBjaGVja2JveCA9IHtcclxuICAgIG5hbWU6IFwiQ2hlY2tib3hcIixcclxuICAgIGF0dHJpYnV0ZXM6IHsgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIiB9LFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvY2hlY2tib3guc3ZnXCIsXHJcbiAgICBodG1sOiAnPGxhYmVsIGNsYXNzPVwiY2hlY2tib3hcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+IENoZWNrYm94PC9sYWJlbD4nLFxyXG4gICAgcHJvcGVydGllczogW3tcclxuICAgICAgICBuYW1lOiBcIk5hbWVcIixcclxuICAgICAgICBrZXk6IFwibmFtZVwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcIm5hbWVcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFRleHRJbnB1dFxyXG4gICAgfV1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrYm94OyIsImNvbnN0IGNhcmQgPSB7XHJcbiAgICBjbGFzc2VzOiBbXCJjYXJkXCJdLFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvcGFuZWwuc3ZnXCIsXHJcbiAgICBuYW1lOiBcIkNhcmRcIixcclxuICAgIGh0bWw6ICc8ZGl2IGNsYXNzPVwiY2FyZFwiPlxcXHJcblx0XHQgIDxpbWcgY2xhc3M9XCJjYXJkLWltZy10b3BcIiBzcmM9XCIuLi9saWJzL2J1aWxkZXIvaWNvbnMvaW1hZ2Uuc3ZnXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiB3aWR0aD1cIjEyOFwiIGhlaWdodD1cIjEyOFwiPlxcXHJcblx0XHQgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cXFxyXG5cdFx0XHQ8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+Q2FyZCB0aXRsZTwvaDQ+XFxcclxuXHRcdFx0PHAgY2xhc3M9XCJjYXJkLXRleHRcIj5Tb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZiB0aGUgY2FyZFxcJ3MgY29udGVudC48L3A+XFxcclxuXHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkdvIHNvbWV3aGVyZTwvYT5cXFxyXG5cdFx0ICA8L2Rpdj5cXFxyXG5cdFx0PC9kaXY+J1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZDsiLCJjb25zdCBidXR0b250b29sYmFyID0gIHtcclxuICAgIGNsYXNzZXM6IFtcImJ0bi10b29sYmFyXCJdLFxyXG4gICAgbmFtZTogXCJCdXR0b24gVG9vbGJhclwiLFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvYnV0dG9uX3Rvb2xiYXIuc3ZnXCIsXHJcbiAgICBodG1sOiAnPGRpdiBjbGFzcz1cImJ0bi10b29sYmFyXCIgcm9sZT1cInRvb2xiYXJcIiBhcmlhLWxhYmVsPVwiVG9vbGJhciB3aXRoIGJ1dHRvbiBncm91cHNcIj5cXFxyXG5cdFx0ICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRmlyc3QgZ3JvdXBcIj5cXFxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCI+MTwvYnV0dG9uPlxcXHJcblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj4yPC9idXR0b24+XFxcclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiPjM8L2J1dHRvbj5cXFxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCI+NDwvYnV0dG9uPlxcXHJcblx0XHQgIDwvZGl2PlxcXHJcblx0XHQgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJTZWNvbmQgZ3JvdXBcIj5cXFxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCI+NTwvYnV0dG9uPlxcXHJcblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj42PC9idXR0b24+XFxcclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiPjc8L2J1dHRvbj5cXFxyXG5cdFx0ICA8L2Rpdj5cXFxyXG5cdFx0ICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlRoaXJkIGdyb3VwXCI+XFxcclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiPjg8L2J1dHRvbj5cXFxyXG5cdFx0ICA8L2Rpdj5cXFxyXG5cdFx0PC9kaXY+J1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnV0dG9udG9vbGJhcjsiLCJpbXBvcnQgeyBTZWxlY3RJbnB1dCB9IGZyb20gJy4uLy4uL2lucHV0cy9pbnB1dHMnO1xyXG5cclxuY29uc3QgYnV0dG9uZ3JvdXAgPSB7XHJcbiAgICBjbGFzc2VzOiBbXCJidG4tZ3JvdXBcIl0sXHJcbiAgICBuYW1lOiBcIkJ1dHRvbiBHcm91cFwiLFxyXG4gICAgaW1hZ2U6IFwiaWNvbnMvYnV0dG9uX2dyb3VwLnN2Z1wiLFxyXG4gICAgaHRtbDogJzxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiQmFzaWMgZXhhbXBsZVwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5MZWZ0PC9idXR0b24+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiPk1pZGRsZTwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCI+UmlnaHQ8L2J1dHRvbj48L2Rpdj4nLFxyXG4gICAgcHJvcGVydGllczogW3tcclxuICAgICAgICBuYW1lOiBcIlNpemVcIixcclxuICAgICAgICBrZXk6IFwic2l6ZVwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcImNsYXNzXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICB2YWxpZFZhbHVlczogW1wiYnRuLWdyb3VwLWxnXCIsIFwiYnRuLWdyb3VwLXNtXCJdLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJEZWZhdWx0XCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYnRuLWdyb3VwLWxnXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkxhcmdlXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYnRuLWdyb3VwLXNtXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNtYWxsXCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJBbGlnbm1lbnRcIixcclxuICAgICAgICBrZXk6IFwiYWxpZ25tZW50XCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFNlbGVjdElucHV0LFxyXG4gICAgICAgIHZhbGlkVmFsdWVzOiBbXCJidG4tZ3JvdXBcIiwgXCJidG4tZ3JvdXAtdmVydGljYWxcIl0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4tZ3JvdXBcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiSG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0bi1ncm91cC12ZXJ0aWNhbFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJWZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgfV1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvbmdyb3VwOyIsImltcG9ydCB7IExpbmtJbnB1dCwgU2VsZWN0SW5wdXQsIFRleHRJbnB1dCwgVG9nZ2xlSW5wdXQgfSBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXRzJztcclxuXHJcbmNvbnN0IGJ1dHRvbiA9IHtcclxuICAgIGNsYXNzZXM6IFtcImJ0blwiLCBcImJ0bi1saW5rXCJdLFxyXG4gICAgbmFtZTogXCJCdXR0b25cIixcclxuICAgIGltYWdlOiBcImljb25zL2J1dHRvbi5zdmdcIixcclxuICAgIGh0bWw6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj4nLFxyXG4gICAgcHJvcGVydGllczogW3tcclxuICAgICAgICBuYW1lOiBcIkxpbmsgVG9cIixcclxuICAgICAgICBrZXk6IFwiaHJlZlwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcImhyZWZcIixcclxuICAgICAgICBpbnB1dHR5cGU6IExpbmtJbnB1dFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiVHlwZVwiLFxyXG4gICAgICAgIGtleTogXCJ0eXBlXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFNlbGVjdElucHV0LFxyXG4gICAgICAgIHZhbGlkVmFsdWVzOiBbXCJidG4tZGVmYXVsdFwiLCBcImJ0bi1wcmltYXJ5XCIsIFwiYnRuLWluZm9cIiwgXCJidG4tc3VjY2Vzc1wiLCBcImJ0bi13YXJuaW5nXCIsIFwiYnRuLWluZm9cIiwgXCJidG4tbGlnaHRcIiwgXCJidG4tZGFya1wiLCBcImJ0bi1vdXRsaW5lLXByaW1hcnlcIiwgXCJidG4tb3V0bGluZS1pbmZvXCIsIFwiYnRuLW91dGxpbmUtc3VjY2Vzc1wiLCBcImJ0bi1vdXRsaW5lLXdhcm5pbmdcIiwgXCJidG4tb3V0bGluZS1pbmZvXCIsIFwiYnRuLW91dGxpbmUtbGlnaHRcIiwgXCJidG4tb3V0bGluZS1kYXJrXCIsIFwiYnRuLWxpbmtcIl0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYnRuLWRlZmF1bHRcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0bi1wcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlByaW1hcnlcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4gYnRuLWluZm9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiSW5mb1wiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0bi1zdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4td2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJXYXJuaW5nXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYnRuLWluZm9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiSW5mb1wiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0bi1saWdodFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJMaWdodFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0bi1kYXJrXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRhcmtcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4tb3V0bGluZS1wcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlByaW1hcnkgb3V0bGluZVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0biBidG4tb3V0bGluZS1pbmZvXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkluZm8gb3V0bGluZVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiU3VjY2VzcyBvdXRsaW5lXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYnRuLW91dGxpbmUtd2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJXYXJuaW5nIG91dGxpbmVcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4tb3V0bGluZS1pbmZvXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkluZm8gb3V0bGluZVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0bi1vdXRsaW5lLWxpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkxpZ2h0IG91dGxpbmVcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJidG4tb3V0bGluZS1kYXJrXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRhcmsgb3V0bGluZVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJ0bi1saW5rXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkxpbmtcIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIlNpemVcIixcclxuICAgICAgICBrZXk6IFwic2l6ZVwiLFxyXG4gICAgICAgIGh0bWxBdHRyOiBcImNsYXNzXCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBTZWxlY3RJbnB1dCxcclxuICAgICAgICB2YWxpZFZhbHVlczogW1wiYnRuLWxnXCIsIFwiYnRuLXNtXCJdLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJEZWZhdWx0XCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYnRuLWxnXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkxhcmdlXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYnRuLXNtXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNtYWxsXCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJUYXJnZXRcIixcclxuICAgICAgICBrZXk6IFwidGFyZ2V0XCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwidGFyZ2V0XCIsXHJcbiAgICAgICAgaW5wdXR0eXBlOiBUZXh0SW5wdXRcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIkRpc2FibGVkXCIsXHJcbiAgICAgICAga2V5OiBcImRpc2FibGVkXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICBpbnB1dHR5cGU6IFRvZ2dsZUlucHV0LFxyXG4gICAgICAgIHZhbGlkVmFsdWVzOiBbXCJkaXNhYmxlZFwiXSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG9uOiBcImRpc2FibGVkXCIsXHJcbiAgICAgICAgICAgIG9mZjogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXR0b247IiwiY29uc3QgYnJlYWRjcnVtYnMgPSAge1xyXG4gICAgY2xhc3NlczogW1wiYnJlYWRjcnVtYlwiXSxcclxuICAgIG5hbWU6IFwiQnJlYWRjcnVtYnNcIixcclxuICAgIGltYWdlOiBcImljb25zL2JyZWFkY3J1bWJzLnN2Z1wiLFxyXG4gICAgaHRtbDogJzxvbCBjbGFzcz1cImJyZWFkY3J1bWJcIj5cXFxyXG5cdFx0ICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCI+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvbGk+XFxcclxuXHRcdCAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiPjxhIGhyZWY9XCIjXCI+TGlicmFyeTwvYT48L2xpPlxcXHJcblx0XHQgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIj5EYXRhIDM8L2xpPlxcXHJcblx0XHQ8L29sPidcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyZWFkY3J1bWJzOyIsImltcG9ydCB7IFRvZ2dsZUlucHV0IH0gZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0cyc7XHJcblxyXG5jb25zdCBicmVhZGNydW1iaXRlbSA9IHtcclxuICAgIGNsYXNzZXM6IFtcImJyZWFkY3J1bWItaXRlbVwiXSxcclxuICAgIG5hbWU6IFwiQnJlYWRjcnVtYiBJdGVtXCIsXHJcbiAgICBodG1sOiAnPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCI+PGEgaHJlZj1cIiNcIj5MaWJyYXJ5PC9hPjwvbGk+JyxcclxuICAgIHByb3BlcnRpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogXCJBY3RpdmVcIixcclxuICAgICAgICBrZXk6IFwiYWN0aXZlXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICB2YWxpZFZhbHVlczogW1wiXCIsIFwiYWN0aXZlXCJdLFxyXG4gICAgICAgIGlucHV0dHlwZTogVG9nZ2xlSW5wdXQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBvbjogXCJhY3RpdmVcIixcclxuICAgICAgICAgICAgb2ZmOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfV1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnJlYWRjcnVtYml0ZW07IiwiaW1wb3J0IHsgU2VsZWN0SW5wdXQgfSBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXRzJztcclxuXHJcbmNvbnN0IGJhZGdlID0ge1xyXG4gICAgY2xhc3NlczogW1wiYmFkZ2VcIl0sXHJcbiAgICBpbWFnZTogXCJpY29ucy9iYWRnZS5zdmdcIixcclxuICAgIG5hbWU6IFwiQmFkZ2VcIixcclxuICAgIGh0bWw6ICc8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj5QcmltYXJ5IGJhZGdlPC9zcGFuPicsXHJcbiAgICBwcm9wZXJ0aWVzOiBbe1xyXG4gICAgICAgIG5hbWU6IFwiQ29sb3JcIixcclxuICAgICAgICBrZXk6IFwiY29sb3JcIixcclxuICAgICAgICBodG1sQXR0cjogXCJjbGFzc1wiLFxyXG4gICAgICAgIHZhbGlkVmFsdWVzOiBbXCJiYWRnZS1wcmltYXJ5XCIsIFwiYmFkZ2Utc2Vjb25kYXJ5XCIsIFwiYmFkZ2Utc3VjY2Vzc1wiLCBcImJhZGdlLWRhbmdlclwiLCBcImJhZGdlLXdhcm5pbmdcIiwgXCJiYWRnZS1pbmZvXCIsIFwiYmFkZ2UtbGlnaHRcIiwgXCJiYWRnZS1kYXJrXCJdLFxyXG4gICAgICAgIGlucHV0dHlwZTogU2VsZWN0SW5wdXQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJiYWRnZS1wcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlByaW1hcnlcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJiYWRnZS1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiU2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYmFkZ2Utc3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTdWNjZXNzXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYmFkZ2Utd2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJXYXJuaW5nXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYmFkZ2UtZGFuZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRhbmdlclwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJhZGdlLWluZm9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiSW5mb1wiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImJhZGdlLWxpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkxpZ2h0XCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYmFkZ2UtZGFya1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJEYXJrXCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFkZ2U7IiwiaW1wb3J0IHsgU2VsZWN0SW5wdXQgfSBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXRzJztcclxuXHJcbmNvbnN0IGFsZXJ0ID0ge1xyXG4gICAgY2xhc3NlczogW1wiYWxlcnRcIl0sXHJcbiAgICBuYW1lOiBcIkFsZXJ0XCIsXHJcbiAgICBpbWFnZTogXCJpY29ucy9hbGVydC5zdmdcIixcclxuICAgIGh0bWw6ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZyBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3dcIiByb2xlPVwiYWxlcnRcIj5cXFxyXG5cdFx0ICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXFxyXG5cdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxcXHJcblx0XHQgIDwvYnV0dG9uPlxcXHJcblx0XHQgIDxzdHJvbmc+SG9seSBndWFjYW1vbGUhPC9zdHJvbmc+IFlvdSBzaG91bGQgY2hlY2sgaW4gb24gc29tZSBvZiB0aG9zZSBmaWVsZHMgYmVsb3cuXFxcclxuXHRcdDwvZGl2PicsXHJcbiAgICBwcm9wZXJ0aWVzOiBbe1xyXG4gICAgICAgIG5hbWU6IFwiVHlwZVwiLFxyXG4gICAgICAgIGtleTogXCJ0eXBlXCIsXHJcbiAgICAgICAgaHRtbEF0dHI6IFwiY2xhc3NcIixcclxuICAgICAgICB2YWxpZFZhbHVlczogW1wiYWxlcnQtcHJpbWFyeVwiLCBcImFsZXJ0LXNlY29uZGFyeVwiLCBcImFsZXJ0LXN1Y2Nlc3NcIiwgXCJhbGVydC1kYW5nZXJcIiwgXCJhbGVydC13YXJuaW5nXCIsIFwiYWxlcnQtaW5mb1wiLCBcImFsZXJ0LWxpZ2h0XCIsIFwiYWxlcnQtZGFya1wiXSxcclxuICAgICAgICBpbnB1dHR5cGU6IFNlbGVjdElucHV0LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFsZXJ0LXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFsZXJ0LXNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhbGVydC1zdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhbGVydC1kYW5nZXJcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRGFuZ2VyXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYWxlcnQtd2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJXYXJuaW5nXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYWxlcnQtaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJJbmZvXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYWxlcnQtbGlnaHRcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiTGlnaHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhbGVydC1kYXJrXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRhcmtcIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgIH1dXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGVydDsiXX0=