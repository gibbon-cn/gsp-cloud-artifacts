webpackJsonp(["business-object.module"],{

/***/ "./node_modules/inherits/inherits_browser.js":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__("./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/app/modules/business-object/app/bo-bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOBindingdata", function() { return BOBindingdata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_bo_repository__ = __webpack_require__("./src/app/modules/business-object/domain/bo-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_entities_businessobject_entity__ = __webpack_require__("./src/app/modules/business-object/domain/entities/businessobject.entity.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BOBindingdata = /** @class */ (function (_super) {
    __extends(BOBindingdata, _super);
    function BOBindingdata(injector) {
        return _super.call(this, injector) || this;
    }
    BOBindingdata = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_3__domain_entities_businessobject_entity__["BusinessObjectEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain_bo_repository__["BORepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], BOBindingdata);
    return BOBindingdata;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/bo-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOForm", function() { return BOForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BOForm = /** @class */ (function (_super) {
    __extends(BOForm, _super);
    function BOForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'id',
            binding: 'ID'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BOForm.prototype, "ID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'code',
            binding: 'Code'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BOForm.prototype, "Code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'name',
            binding: 'Name'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BOForm.prototype, "Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'layer',
            binding: 'Layer'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BOForm.prototype, "Layer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'isdetail',
            binding: 'Isdetail'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BOForm.prototype, "Isdetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'sysinit',
            binding: 'SysInit'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BOForm.prototype, "SysInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'sortorder',
            binding: 'SortOrder'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BOForm.prototype, "SortOrder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'description',
            binding: 'description'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BOForm.prototype, "Note", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'parentid',
            binding: 'Parentid'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BOForm.prototype, "Parentid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'isSysInit',
            binding: 'IsSysInit'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BOForm.prototype, "IsSysInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'type',
            binding: 'Type'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BOForm.prototype, "Type", void 0);
    BOForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__bo_bindingdata__["BOBindingdata"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], BOForm);
    return BOForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/bo-statemachine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOStatemachine", function() { return BOStatemachine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BOStatemachine = /** @class */ (function (_super) {
    __extends(BOStatemachine, _super);
    function BOStatemachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])({ initialState: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], BOStatemachine.prototype, "viewState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], BOStatemachine.prototype, "addState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], BOStatemachine.prototype, "selectedProductState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], BOStatemachine.prototype, "selectedAppState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], BOStatemachine.prototype, "selectedSUState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], BOStatemachine.prototype, "selectedBOGroupState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], BOStatemachine.prototype, "selectedBOState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], BOStatemachine.prototype, "editState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], BOStatemachine.prototype, "sysInitState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], BOStatemachine.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'selectedProductState'; }
        }),
        __metadata("design:type", Boolean)
    ], BOStatemachine.prototype, "canAddApp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'selectedAppState'; }
        }),
        __metadata("design:type", Boolean)
    ], BOStatemachine.prototype, "canAddSU", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'selectedSUState'; }
        }),
        __metadata("design:type", Boolean)
    ], BOStatemachine.prototype, "canAddBOGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'selectedSUState' || context.state === 'selectedBOGroupState'; }
        }),
        __metadata("design:type", Boolean)
    ], BOStatemachine.prototype, "canAddBO", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState' || context.state === 'selectedProductState'
                || context.state === 'selectedAppState' || context.state === 'selectedSUState'
                || context.state === 'selectedBOGroupState' || context.state === 'selectedBOState'; }
        }),
        __metadata("design:type", Boolean)
    ], BOStatemachine.prototype, "canEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], BOStatemachine.prototype, "canCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState' || context.state === 'selectedProductState'
                || context.state === 'selectedAppState' || context.state === 'selectedSUState'
                || context.state === 'selectedBOGroupState' || context.state === 'selectedBOState'; }
        }),
        __metadata("design:type", Boolean)
    ], BOStatemachine.prototype, "canDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], BOStatemachine.prototype, "canSave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], BOStatemachine.prototype, "canSwitch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'editState' || context.state === 'addState'; }
        }),
        __metadata("design:type", Boolean)
    ], BOStatemachine.prototype, "canInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'addState' }),
        __metadata("design:type", Function)
    ], BOStatemachine.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], BOStatemachine.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'viewState' }),
        __metadata("design:type", Function)
    ], BOStatemachine.prototype, "view", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'selectedProductState' }),
        __metadata("design:type", Function)
    ], BOStatemachine.prototype, "selectedProduct", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'selectedAppState' }),
        __metadata("design:type", Function)
    ], BOStatemachine.prototype, "selectedApp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'selectedSUState' }),
        __metadata("design:type", Function)
    ], BOStatemachine.prototype, "selectedSU", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'selectedBOGroupState' }),
        __metadata("design:type", Function)
    ], BOStatemachine.prototype, "selectedBOGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'selectedBOState' }),
        __metadata("design:type", Function)
    ], BOStatemachine.prototype, "selectedBO", void 0);
    BOStatemachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgStatemachine"])()
    ], BOStatemachine);
    return BOStatemachine;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["StateMachine"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/bo-uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOUistate", function() { return BOUistate; });
var BOUistate = /** @class */ (function () {
    function BOUistate() {
    }
    return BOUistate;
}());



/***/ }),

/***/ "./src/app/modules/business-object/app/bo-viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOViewmodel", function() { return BOViewmodel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_form__ = __webpack_require__("./src/app/modules/business-object/app/bo-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * 视图模型
 */
var BOViewmodel = /** @class */ (function (_super) {
    __extends(BOViewmodel, _super);
    /**
     * 构造函数
     */
    function BOViewmodel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_5__bo_uistate__["BOUistate"]);
        return _this;
    }
    /**
     * 表单加载
     */
    BOViewmodel.prototype.formLoad = function () { };
    /**
     * 新增子级
     */
    BOViewmodel.prototype.addchild = function () { };
    /**
     * 新增平级
     */
    BOViewmodel.prototype.additem = function () { };
    /**
     * 新增App
     */
    BOViewmodel.prototype.addapp = function () { };
    /**
     * 新增SU
     */
    BOViewmodel.prototype.addsu = function () { };
    /**
     * 新增BOGroup
     */
    BOViewmodel.prototype.addbogroup = function () { };
    /**
     * 新增BO
     */
    BOViewmodel.prototype.addbo = function () { };
    /**
     * 编辑
     */
    BOViewmodel.prototype.edit = function () { };
    /**
     * 删除
     */
    BOViewmodel.prototype.remove = function () { };
    /**
     * 保存
     */
    BOViewmodel.prototype.save = function () { };
    /**
     * 取消
     */
    BOViewmodel.prototype.cancel = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'formLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BOViewmodel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'addchild'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BOViewmodel.prototype, "addchild", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'additem'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BOViewmodel.prototype, "additem", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'addapp'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BOViewmodel.prototype, "addapp", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'addsu'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BOViewmodel.prototype, "addsu", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'addbogroup'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BOViewmodel.prototype, "addbogroup", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'addbo'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BOViewmodel.prototype, "addbo", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'edit'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BOViewmodel.prototype, "edit", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'remove'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BOViewmodel.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'save'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BOViewmodel.prototype, "save", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'cancel'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BOViewmodel.prototype, "cancel", null);
    BOViewmodel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__bo_bindingdata__["BOBindingdata"],
            form: __WEBPACK_IMPORTED_MODULE_3__bo_form__["BOForm"],
            stateMachine: __WEBPACK_IMPORTED_MODULE_4__bo_statemachine__["BOStatemachine"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], BOViewmodel);
    return BOViewmodel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/handler/flat-add-app.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatAddAppHandler", function() { return FlatAddAppHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_entities_businessobject_entity__ = __webpack_require__("./src/app/modules/business-object/domain/entities/businessobject.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_util__ = __webpack_require__("./src/app/shared/data-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__domain_bo_repository__ = __webpack_require__("./src/app/modules/business-object/domain/bo-repository.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FlatAddAppHandler = /** @class */ (function (_super) {
    __extends(FlatAddAppHandler, _super);
    // 数据加载
    function FlatAddAppHandler(dataService, uiState, stateMachine, repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    FlatAddAppHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('addapp', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            var data = {
                id: __WEBPACK_IMPORTED_MODULE_5__shared_data_util__["DataUtil"].createNM(),
                code: '',
                name: '',
                parentID: item['ID'],
                sysInit: '0',
                type: 0,
                layer: item['Layer'] + 1,
                isDetail: '0'
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_4__domain_entities_businessobject_entity__["BusinessObjectEntity"], data);
            _this.repository.addEntity(newEntity);
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['edit']();
        });
    };
    FlatAddAppHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgCommandHandler"])({
            commandName: 'addapp'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__domain_business_object_service__["BusinessObjectService"],
            __WEBPACK_IMPORTED_MODULE_3__bo_uistate__["BOUistate"],
            __WEBPACK_IMPORTED_MODULE_2__bo_statemachine__["BOStatemachine"],
            __WEBPACK_IMPORTED_MODULE_7__domain_bo_repository__["BORepository"],
            __WEBPACK_IMPORTED_MODULE_6__bo_bindingdata__["BOBindingdata"]])
    ], FlatAddAppHandler);
    return FlatAddAppHandler;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/handler/flat-add-bo.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatAddBOHandler", function() { return FlatAddBOHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_entities_businessobject_entity__ = __webpack_require__("./src/app/modules/business-object/domain/entities/businessobject.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_util__ = __webpack_require__("./src/app/shared/data-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__domain_bo_repository__ = __webpack_require__("./src/app/modules/business-object/domain/bo-repository.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FlatAddBOHandler = /** @class */ (function (_super) {
    __extends(FlatAddBOHandler, _super);
    // 数据加载
    function FlatAddBOHandler(dataService, uiState, stateMachine, repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    FlatAddBOHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('addbo', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            var data = {
                id: __WEBPACK_IMPORTED_MODULE_5__shared_data_util__["DataUtil"].createNM(),
                code: '',
                name: '',
                parentID: item['ID'],
                sysInit: '0',
                type: 0,
                layer: item['Layer'] + 1,
                isDetail: '1'
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_4__domain_entities_businessobject_entity__["BusinessObjectEntity"], data);
            _this.repository.addEntity(newEntity);
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['edit']();
        });
    };
    FlatAddBOHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgCommandHandler"])({
            commandName: 'addbo'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__domain_business_object_service__["BusinessObjectService"],
            __WEBPACK_IMPORTED_MODULE_3__bo_uistate__["BOUistate"],
            __WEBPACK_IMPORTED_MODULE_2__bo_statemachine__["BOStatemachine"],
            __WEBPACK_IMPORTED_MODULE_7__domain_bo_repository__["BORepository"],
            __WEBPACK_IMPORTED_MODULE_6__bo_bindingdata__["BOBindingdata"]])
    ], FlatAddBOHandler);
    return FlatAddBOHandler;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/handler/flat-add-bogroup.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatAddBOGroupHandler", function() { return FlatAddBOGroupHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_entities_businessobject_entity__ = __webpack_require__("./src/app/modules/business-object/domain/entities/businessobject.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_data_util__ = __webpack_require__("./src/app/shared/data-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__domain_bo_repository__ = __webpack_require__("./src/app/modules/business-object/domain/bo-repository.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FlatAddBOGroupHandler = /** @class */ (function (_super) {
    __extends(FlatAddBOGroupHandler, _super);
    function FlatAddBOGroupHandler(dataService, uiState, stateMachine, repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    FlatAddBOGroupHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('addbogroup', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            var data = {
                id: __WEBPACK_IMPORTED_MODULE_6__shared_data_util__["DataUtil"].createNM(),
                code: '',
                name: '',
                parentID: item['ID'],
                sysInit: '0',
                type: 0,
                layer: item['Layer'] + 1,
                isDetail: '0'
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_5__domain_entities_businessobject_entity__["BusinessObjectEntity"], data);
            _this.repository.addEntity(newEntity);
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['edit']();
        });
    };
    FlatAddBOGroupHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'addbogroup'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__["BusinessObjectService"],
            __WEBPACK_IMPORTED_MODULE_4__bo_uistate__["BOUistate"],
            __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__["BOStatemachine"],
            __WEBPACK_IMPORTED_MODULE_8__domain_bo_repository__["BORepository"],
            __WEBPACK_IMPORTED_MODULE_7__bo_bindingdata__["BOBindingdata"]])
    ], FlatAddBOGroupHandler);
    return FlatAddBOGroupHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/handler/flat-add-child.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatAddChildHandler", function() { return FlatAddChildHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_entities_businessobject_entity__ = __webpack_require__("./src/app/modules/business-object/domain/entities/businessobject.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_data_util__ = __webpack_require__("./src/app/shared/data-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__domain_bo_repository__ = __webpack_require__("./src/app/modules/business-object/domain/bo-repository.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FlatAddChildHandler = /** @class */ (function (_super) {
    __extends(FlatAddChildHandler, _super);
    function FlatAddChildHandler(dataService, uiState, stateMachine, repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    FlatAddChildHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('addchild', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            var data = {
                id: __WEBPACK_IMPORTED_MODULE_6__shared_data_util__["DataUtil"].createNM(),
                code: '',
                name: '',
                parentId: item['ID'],
                layer: item['Layer'] + 1
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_5__domain_entities_businessobject_entity__["BusinessObjectEntity"], data);
            _this.repository.addEntity(newEntity);
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['edit']();
        });
    };
    FlatAddChildHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'addchild'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__["BusinessObjectService"],
            __WEBPACK_IMPORTED_MODULE_4__bo_uistate__["BOUistate"],
            __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__["BOStatemachine"],
            __WEBPACK_IMPORTED_MODULE_8__domain_bo_repository__["BORepository"],
            __WEBPACK_IMPORTED_MODULE_7__bo_bindingdata__["BOBindingdata"]])
    ], FlatAddChildHandler);
    return FlatAddChildHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/handler/flat-add-item.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatAddItemHandler", function() { return FlatAddItemHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_entities_businessobject_entity__ = __webpack_require__("./src/app/modules/business-object/domain/entities/businessobject.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_data_util__ = __webpack_require__("./src/app/shared/data-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__domain_bo_repository__ = __webpack_require__("./src/app/modules/business-object/domain/bo-repository.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FlatAddItemHandler = /** @class */ (function (_super) {
    __extends(FlatAddItemHandler, _super);
    function FlatAddItemHandler(dataService, uiState, stateMachine, repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    FlatAddItemHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('additem', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            var data = {
                id: __WEBPACK_IMPORTED_MODULE_6__shared_data_util__["DataUtil"].createNM(),
                code: '',
                name: '',
                layer: item['Layer'],
                isdetail: '1',
                parentId: item['Parentid']
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_5__domain_entities_businessobject_entity__["BusinessObjectEntity"], data);
            _this.repository.addEntity(newEntity);
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['edit']();
        });
    };
    FlatAddItemHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'additem'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__["BusinessObjectService"],
            __WEBPACK_IMPORTED_MODULE_4__bo_uistate__["BOUistate"],
            __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__["BOStatemachine"],
            __WEBPACK_IMPORTED_MODULE_8__domain_bo_repository__["BORepository"],
            __WEBPACK_IMPORTED_MODULE_7__bo_bindingdata__["BOBindingdata"]])
    ], FlatAddItemHandler);
    return FlatAddItemHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/handler/flat-add-su.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatAddSUHandler", function() { return FlatAddSUHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_entities_businessobject_entity__ = __webpack_require__("./src/app/modules/business-object/domain/entities/businessobject.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_data_util__ = __webpack_require__("./src/app/shared/data-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__domain_bo_repository__ = __webpack_require__("./src/app/modules/business-object/domain/bo-repository.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FlatAddSUHandler = /** @class */ (function (_super) {
    __extends(FlatAddSUHandler, _super);
    function FlatAddSUHandler(dataService, uiState, stateMachine, repository, bindingData) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        return _this;
    }
    FlatAddSUHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('addsu', function () {
            _this.uiState.action = 'add';
            var item = _this.bindingData.list.currentItem;
            var data = {
                id: __WEBPACK_IMPORTED_MODULE_6__shared_data_util__["DataUtil"].createNM(),
                code: '',
                name: '',
                layer: item['Layer'] + 1,
                isDetail: '0',
                parentID: item['ID'],
                sysInit: '0',
                type: 0
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_5__domain_entities_businessobject_entity__["BusinessObjectEntity"], data);
            _this.repository.addEntity(newEntity);
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['edit']();
        });
    };
    FlatAddSUHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'addsu'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__["BusinessObjectService"],
            __WEBPACK_IMPORTED_MODULE_4__bo_uistate__["BOUistate"],
            __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__["BOStatemachine"],
            __WEBPACK_IMPORTED_MODULE_8__domain_bo_repository__["BORepository"],
            __WEBPACK_IMPORTED_MODULE_7__bo_bindingdata__["BOBindingdata"]])
    ], FlatAddSUHandler);
    return FlatAddSUHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/handler/flat-cancle.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatCancleHandler", function() { return FlatCancleHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_bo_repository__ = __webpack_require__("./src/app/modules/business-object/domain/bo-repository.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FlatCancleHandler = /** @class */ (function (_super) {
    __extends(FlatCancleHandler, _super);
    function FlatCancleHandler(dataService, repository, bindingData, stateMachine, uiState) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.repository = repository;
        _this.bindingData = bindingData;
        _this.stateMachine = stateMachine;
        _this.uiState = uiState;
        return _this;
    }
    FlatCancleHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('cancel', function () {
            if (_this.uiState.action !== 'add') {
                _this.uiState.action = 'view';
                _this.dataService.getdata();
                return;
            }
            var id = _this.bindingData.list.currentId;
            _this.repository.removeEntityById(id.toString());
            _this.uiState.action = 'camcel';
            _this.dataService.getdata();
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['view']();
        });
    };
    FlatCancleHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'cancel'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__["BusinessObjectService"],
            __WEBPACK_IMPORTED_MODULE_6__domain_bo_repository__["BORepository"],
            __WEBPACK_IMPORTED_MODULE_5__bo_bindingdata__["BOBindingdata"],
            __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__["BOStatemachine"],
            __WEBPACK_IMPORTED_MODULE_4__bo_uistate__["BOUistate"]])
    ], FlatCancleHandler);
    return FlatCancleHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/handler/flat-edit.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatEditHandler", function() { return FlatEditHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_bo_repository__ = __webpack_require__("./src/app/modules/business-object/domain/bo-repository.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FlatEditHandler = /** @class */ (function (_super) {
    __extends(FlatEditHandler, _super);
    function FlatEditHandler(dataService, repository, uiState, bindingData, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.repository = repository;
        _this.uiState = uiState;
        _this.bindingData = bindingData;
        _this.stateMachine = stateMachine;
        return _this;
    }
    FlatEditHandler.prototype.schedule = function () {
        var _this = this;
        // 状态迁移
        this.addTask('transitState', function () {
            _this.uiState.action = 'edit';
            _this.stateMachine['edit']();
        });
    };
    FlatEditHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'edit'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__["BusinessObjectService"],
            __WEBPACK_IMPORTED_MODULE_6__domain_bo_repository__["BORepository"],
            __WEBPACK_IMPORTED_MODULE_4__bo_uistate__["BOUistate"],
            __WEBPACK_IMPORTED_MODULE_5__bo_bindingdata__["BOBindingdata"],
            __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__["BOStatemachine"]])
    ], FlatEditHandler);
    return FlatEditHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/handler/flat-form-load.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatFormLoadHandler", function() { return FlatFormLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FlatFormLoadHandler = /** @class */ (function (_super) {
    __extends(FlatFormLoadHandler, _super);
    function FlatFormLoadHandler(dataService, uiState, stateMachine, route) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.route = route;
        return _this;
    }
    FlatFormLoadHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('loadData', function () {
            _this.uiState.action = 'load';
            _this.dataService.getdata();
        });
        // 状态迁移
        this.addTask('transitState', function () {
            var action = _this.uiState.action;
            _this.stateMachine['view']();
        });
    };
    FlatFormLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'formLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__["BusinessObjectService"],
            __WEBPACK_IMPORTED_MODULE_4__bo_uistate__["BOUistate"],
            __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__["BOStatemachine"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"]])
    ], FlatFormLoadHandler);
    return FlatFormLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/handler/flat-remove.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatRemoveHandler", function() { return FlatRemoveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_bo_repository__ = __webpack_require__("./src/app/modules/business-object/domain/bo-repository.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FlatRemoveHandler = /** @class */ (function (_super) {
    __extends(FlatRemoveHandler, _super);
    function FlatRemoveHandler(dataService, reposity, uiState, bindingData, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.reposity = reposity;
        _this.uiState = uiState;
        _this.bindingData = bindingData;
        _this.stateMachine = stateMachine;
        return _this;
    }
    FlatRemoveHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('remove', function () {
            var fid = _this.bindingData['ID'];
            if (_this.dataService.IsExistChild(fid)) {
                _this.dataService.getdata();
                return;
            }
            _this.dataService.remove(fid);
            _this.uiState.action = 'remove';
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['view']();
        });
    };
    FlatRemoveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'remove'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__["BusinessObjectService"],
            __WEBPACK_IMPORTED_MODULE_6__domain_bo_repository__["BORepository"],
            __WEBPACK_IMPORTED_MODULE_4__bo_uistate__["BOUistate"],
            __WEBPACK_IMPORTED_MODULE_5__bo_bindingdata__["BOBindingdata"],
            __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__["BOStatemachine"]])
    ], FlatRemoveHandler);
    return FlatRemoveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/handler/flat-save.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatSaveHandler", function() { return FlatSaveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_bo_repository__ = __webpack_require__("./src/app/modules/business-object/domain/bo-repository.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FlatSaveHandler = /** @class */ (function (_super) {
    __extends(FlatSaveHandler, _super);
    function FlatSaveHandler(dataService, repository, uiState, bindingData, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.repository = repository;
        _this.uiState = uiState;
        _this.bindingData = bindingData;
        _this.stateMachine = stateMachine;
        return _this;
    }
    FlatSaveHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('save', function () {
            var item = _this.bindingData.list.currentItem;
            // let curState=this.stateMachine.context.state;
            var uiState = _this.uiState.action;
            if (uiState === 'add') {
                if (!_this.dataService.save(item)) {
                    _this.uiState.action = 'save';
                }
                else {
                    _this.uiState.action = 'view';
                    _this.dataService.getdata();
                }
            }
            else {
                if (!_this.dataService.saveChanges(item)) {
                    _this.uiState.action = 'save';
                }
                else {
                    _this.uiState.action = 'view';
                    _this.dataService.getdata();
                }
            }
        });
        // 状态迁移
        this.addTask('transitState', function () {
            _this.stateMachine['view']();
        });
    };
    FlatSaveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'save'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_business_object_service__["BusinessObjectService"],
            __WEBPACK_IMPORTED_MODULE_6__domain_bo_repository__["BORepository"],
            __WEBPACK_IMPORTED_MODULE_4__bo_uistate__["BOUistate"],
            __WEBPACK_IMPORTED_MODULE_5__bo_bindingdata__["BOBindingdata"],
            __WEBPACK_IMPORTED_MODULE_3__bo_statemachine__["BOStatemachine"]])
    ], FlatSaveHandler);
    return FlatSaveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/business-object/app/handler/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commandHandlers", function() { return commandHandlers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flat_form_load_handler__ = __webpack_require__("./src/app/modules/business-object/app/handler/flat-form-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_remove_handler__ = __webpack_require__("./src/app/modules/business-object/app/handler/flat-remove.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_save_handler__ = __webpack_require__("./src/app/modules/business-object/app/handler/flat-save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_add_item_handler__ = __webpack_require__("./src/app/modules/business-object/app/handler/flat-add-item.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flat_add_child_handler__ = __webpack_require__("./src/app/modules/business-object/app/handler/flat-add-child.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flat_cancle_handler__ = __webpack_require__("./src/app/modules/business-object/app/handler/flat-cancle.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flat_edit_handler__ = __webpack_require__("./src/app/modules/business-object/app/handler/flat-edit.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__flat_add_app_handler__ = __webpack_require__("./src/app/modules/business-object/app/handler/flat-add-app.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__flat_add_su_handler__ = __webpack_require__("./src/app/modules/business-object/app/handler/flat-add-su.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__flat_add_bogroup_handler__ = __webpack_require__("./src/app/modules/business-object/app/handler/flat-add-bogroup.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__flat_add_bo_handler__ = __webpack_require__("./src/app/modules/business-object/app/handler/flat-add-bo.handler.ts");











var commandHandlers = [
    __WEBPACK_IMPORTED_MODULE_0__flat_form_load_handler__["FlatFormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_1__flat_remove_handler__["FlatRemoveHandler"],
    __WEBPACK_IMPORTED_MODULE_2__flat_save_handler__["FlatSaveHandler"],
    __WEBPACK_IMPORTED_MODULE_3__flat_add_item_handler__["FlatAddItemHandler"],
    __WEBPACK_IMPORTED_MODULE_4__flat_add_child_handler__["FlatAddChildHandler"],
    __WEBPACK_IMPORTED_MODULE_5__flat_cancle_handler__["FlatCancleHandler"],
    __WEBPACK_IMPORTED_MODULE_6__flat_edit_handler__["FlatEditHandler"],
    __WEBPACK_IMPORTED_MODULE_7__flat_add_app_handler__["FlatAddAppHandler"],
    __WEBPACK_IMPORTED_MODULE_8__flat_add_su_handler__["FlatAddSUHandler"],
    __WEBPACK_IMPORTED_MODULE_9__flat_add_bogroup_handler__["FlatAddBOGroupHandler"],
    __WEBPACK_IMPORTED_MODULE_10__flat_add_bo_handler__["FlatAddBOHandler"]
];



/***/ }),

/***/ "./src/app/modules/business-object/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_PROVIDERS", function() { return APP_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handler__ = __webpack_require__("./src/app/modules/business-object/app/handler/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bo_form__ = __webpack_require__("./src/app/modules/business-object/app/bo-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bo_viewmodel__ = __webpack_require__("./src/app/modules/business-object/app/bo-viewmodel.ts");
/* unused harmony reexport BOBindingdata */
/* unused harmony reexport BOForm */
/* unused harmony reexport BOStatemachine */
/* unused harmony reexport BOViewmodel */
/* unused harmony reexport BOUistate */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "commandHandlers", function() { return __WEBPACK_IMPORTED_MODULE_3__handler__["commandHandlers"]; });






var APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_2__bo_bindingdata__["BOBindingdata"],
    __WEBPACK_IMPORTED_MODULE_4__bo_form__["BOForm"],
    __WEBPACK_IMPORTED_MODULE_0__bo_statemachine__["BOStatemachine"],
    __WEBPACK_IMPORTED_MODULE_5__bo_viewmodel__["BOViewmodel"],
    __WEBPACK_IMPORTED_MODULE_1__bo_uistate__["BOUistate"]
];



/***/ }),

/***/ "./src/app/modules/business-object/botypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoType", function() { return BoType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoTypes", function() { return BoTypes; });
var BoType;
(function (BoType) {
    /// <summary>
    /// 未知类型
    /// </summary>
    BoType[BoType["UnKnown"] = 0] = "UnKnown";
    /// <summary>
    /// 单据
    /// </summary>
    BoType[BoType["Bill"] = 1] = "Bill";
    /// <summary>
    /// 字典
    /// </summary>
    BoType[BoType["Dictionary"] = 2] = "Dictionary";
    /// <summary>
    /// 账表
    /// </summary>
    BoType[BoType["Account"] = 3] = "Account";
    /// <summary>
    /// 查询
    /// </summary>
    BoType[BoType["Query"] = 4] = "Query";
    /// <summary>
    /// 报表
    /// </summary>
    BoType[BoType["ReportForm"] = 5] = "ReportForm";
})(BoType || (BoType = {}));
var BoTypes = [
    // {index: 0, text: '未知类型', value: BoType.UnKnown},
    { index: 1, text: '单据', value: BoType.Bill },
    { index: 2, text: '字典', value: BoType.Dictionary },
    { index: 3, text: '账表', value: BoType.Account },
    { index: 4, text: '查询', value: BoType.Query },
    { index: 5, text: '报表', value: BoType.ReportForm }
];


/***/ }),

/***/ "./src/app/modules/business-object/business-object-manager/business-object-manager.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/business-object/business-object-manager/business-object-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-2 mb-2\">\r\n  <div class=\"pr-2 text-left\">\r\n    <button type=\"button\" (click)=\"viewmodel.addapp()\" [disabled]=\"!viewmodel.stateMachine.canAddApp\" class=\"btn btn-sm btn-default\">新增APP\r\n    </button>\r\n    <button type=\"button\" (click)=\"viewmodel.addsu()\" [disabled]=\"!viewmodel.stateMachine.canAddSU\" class=\"btn btn-sm btn-default\">新增SU\r\n    </button>\r\n    <button type=\"button\" (click)=\"viewmodel.addbogroup()\" [disabled]=\"!viewmodel.stateMachine.canAddBOGroup\" class=\"btn btn-sm btn-default\">新增BOGroup\r\n    </button>\r\n    <button type=\"button\" (click)=\"viewmodel.addbo()\" [disabled]=\"!viewmodel.stateMachine.canAddBO\" class=\"btn btn-sm btn-default\">新增BO\r\n    </button>\r\n    <button type=\"button\" [disabled]=\"!viewmodel.stateMachine.canEdit\" (click)=\"viewmodel.edit()\" class=\"btn btn-sm btn-default\">编辑\r\n    </button>\r\n    <button type=\"button\" [disabled]=\"!viewmodel.stateMachine.canCancel\" (click)=\"viewmodel.cancel()\" class=\"btn btn-sm btn-default\">取消\r\n    </button>\r\n    <button type=\"button\" [disabled]=\"!viewmodel.stateMachine.canSave\" (click)=\"viewmodel.save()\" class=\"btn btn-sm btn-default\">保存\r\n    </button>\r\n    <button type=\"button\" [disabled]=\"!viewmodel.stateMachine.canDelete\" (click)=\"viewmodel.remove()\" class=\"btn btn-sm btn-default\">删除\r\n    </button>\r\n  </div>\r\n<div class=\"functioninfos\" style=\"height: 1300px\">\r\n  <kendo-splitter orientation=\"horizontal\" style=\"height: 100%;\">\r\n<kendo-splitter-pane [collapsible]=\"true\" size=\"30%\" min=\"20%\" max=\"70%\">\r\n      <!--工具栏了 BEGIN-->\r\n      <div class=\"row pt-2 mb-2\">\r\n        <div class=\"col-md-12 col-lg-12 funcinfo-col\">\r\n          <p>业务对象</p>\r\n          <div class=\"card\">\r\n            <!--tree -->\r\n            <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 \">\r\n              <kendo-treeview style=\"width:500px\" [nodes]=\"data\" textField=\"Name\" kendoTreeViewExpandable\r\n                kendoTreeViewFlatDataBinding idField=\"ID\" parentIdField=\"Parentid\" (selectionChange)=\"handleSelection($event)\">\r\n              </kendo-treeview>\r\n            </div>\r\n            <!--tree end -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </kendo-splitter-pane>\r\n    <kendo-splitter-pane [resizable]=\"true\" style=\"height: 1300px;\">\r\n      <kendo-tabstrip>\r\n        <kendo-tabstrip-tab [title]=\"'基本信息'\" [selected]=\"true\" style=\"height : 1300px\">\r\n          <ng-template kendoTabContent style=\"height : 1300px\">\r\n            <!--info  -->\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 funcinfo-col\">\r\n              <div class=\"card col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                <div class=\"card-block \">\r\n                  <form class=\"k-form\" [formGroup]=\"viewmodel.form\">\r\n                    <label class=\"k-form-field\">\r\n                      <span>编号 </span>\r\n                      <input class=\"k-textbox\" [readonly]=\"!isInput()\" formControlName=\"code\"  />\r\n                    </label>\r\n                    <label class=\"k-form-field\">\r\n                      <span>名称 </span>\r\n                      <input class=\"k-textbox\" [readonly]=\"!isInput()\" formControlName=\"name\" />\r\n                    </label>\r\n                    <label class=\"k-form-field\" for=\"boType\">\r\n                      <span>类型</span> \r\n                        <kendo-dropdownlist #typeChoose\r\n                       [defaultItem]=\"defaultItem\"  [data]=\"boTypes\"  \r\n                            [textField]=\"'text'\" [valueField]=\"'value'\"  [valuePrimitive]=\"true\"  [readonly]=\"!isInput()\" formControlName=\"type\"\r\n                            (selectionChange)=\"selectType($event)\">\r\n                          </kendo-dropdownlist>\r\n                    </label>\r\n                    <input  class=\"k-checkbox\" id=\"isSysInit\" type=\"checkbox\" formControlName=\"isSysInit\" \r\n                    disabled=\"disabled\" />\r\n                        <label class=\"k-checkbox-label\" for=\"isSysInit\">系统预制</label>\r\n                    <label class=\"k-form-field\">\r\n                      <span>描述</span>\r\n                      <input class=\"k-textbox\" [readonly]=\"!viewmodel.stateMachine.canInput\" formControlName=\"description\" />\r\n                    </label>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </kendo-tabstrip-tab>\r\n      </kendo-tabstrip>\r\n    </kendo-splitter-pane>\r\n  </kendo-splitter>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/business-object/business-object-manager/business-object-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessObjectManagerComponent", function() { return BusinessObjectManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_bo_viewmodel__ = __webpack_require__("./src/app/modules/business-object/app/bo-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__gsp_sys_rtf_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_bo_uistate__ = __webpack_require__("./src/app/modules/business-object/app/bo-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_bo_statemachine__ = __webpack_require__("./src/app/modules/business-object/app/bo-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__botypes__ = __webpack_require__("./src/app/modules/business-object/botypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_bo_bindingdata__ = __webpack_require__("./src/app/modules/business-object/app/bo-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var BusinessObjectManagerComponent = /** @class */ (function () {
    function BusinessObjectManagerComponent(viewmodel, uiState, stateMachine, route, bindingData, boService, frameWorkService) {
        this.viewmodel = viewmodel;
        this.uiState = uiState;
        this.stateMachine = stateMachine;
        this.route = route;
        this.bindingData = bindingData;
        this.boService = boService;
        this.frameWorkService = frameWorkService;
        this.boTypes = __WEBPACK_IMPORTED_MODULE_9__botypes__["BoTypes"];
        this.defaultItem = { index: 0, text: '', value: __WEBPACK_IMPORTED_MODULE_9__botypes__["BoType"].UnKnown };
    }
    BusinessObjectManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            // if (params.has('funid')) {
            //   const funcid = params.get('funcid');
            //   this.boService.sessionid = this.frmService.getCurrentSession(funcid);
            // }
            if (params.has('funcid')) {
                var funcid = params.get('funcid');
                _this.boService.sessionid = _this.frameWorkService.getSession(funcid);
            }
        });
        this.viewmodel.bindingData.changes.subscribe(function (changes) {
            if (changes.type === __WEBPACK_IMPORTED_MODULE_5__farris_devkit__["ChangeType"].SelectionChanged) {
                return;
            }
            _this.data = _this.viewmodel.bindingData.list.toJSON();
        });
        this.viewmodel.form.valueChanges.subscribe(function (changes) {
            _this.data = _this.viewmodel.bindingData.list.toJSON();
        });
        this.viewmodel.formLoad();
        this.isworkstation = false;
    };
    BusinessObjectManagerComponent.prototype.fetchChildren = function (node) {
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])(node.items);
    };
    BusinessObjectManagerComponent.prototype.hasChildren = function (node) {
        return node.items;
    };
    BusinessObjectManagerComponent.prototype.isInput = function () {
        var isInput = false;
        if (this.uiState.action === 'add' || this.uiState.action === 'edit') {
            this.selectedBO = this.viewmodel.bindingData.list.currentItem.toJSON();
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_11_util__["isNullOrUndefined"])(this.selectedBO) && this.selectedBO.SysInit === '1') {
            isInput = false;
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_11_util__["isNullOrUndefined"])(this.selectedBO)) {
            isInput = false;
        }
        else {
            isInput = this.viewmodel.stateMachine.canInput;
        }
        return isInput;
    };
    BusinessObjectManagerComponent.prototype.handleSelection = function (_a) {
        var dataItem = _a.dataItem;
        this.selectedBO = dataItem;
        if (this.uiState.action === 'edit' || this.uiState.action === 'add') {
            alert('在编辑状态下不予许点击列表中的对象实体');
            return;
        }
        else {
            this.isworkstation = dataItem.FIsWorkStation;
            this.viewmodel.bindingData.list.setCurrentId(dataItem.ID);
            switch (dataItem.Layer) {
                case 1:
                    this.uiState.action = 'selectedProduct';
                    break;
                case 2:
                    this.uiState.action = 'selectedApp';
                    break;
                case 3:
                    this.uiState.action = 'selectedSU';
                    break;
                case 4:
                    this.uiState.action = 'selectedBOGroup';
                    break;
                case 5:
                    this.uiState.action = 'selectedBO';
                    break;
                default:
                    this.uiState.action = 'view';
            }
            var currentState = this.uiState.action;
            this.stateMachine[currentState]();
        }
    };
    // isCanInput(): boolean {
    //   if (this.uiState.action === 'edit' || this.uiState.action === 'add') {
    //       return true;
    //   } else {
    //       return false;
    //   }
    // }
    BusinessObjectManagerComponent.prototype.isLosedFocus = function () {
        if (this.uiState.action === 'edit' || this.uiState.action === 'add') {
            return true;
        }
        else {
            return false;
        }
    };
    /**
   * 返回值类型切换事件
   * @param selectedIndex 返回值类型集合中的索引
   */
    BusinessObjectManagerComponent.prototype.selectType = function (_a) {
        var value = _a.value;
        this.viewmodel.bindingData.list.currentItem.setValue('Type', value, true, true);
    };
    BusinessObjectManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-business-object-manager',
            template: __webpack_require__("./src/app/modules/business-object/business-object-manager/business-object-manager.component.html"),
            styles: [__webpack_require__("./src/app/modules/business-object/business-object-manager/business-object-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__app_bo_viewmodel__["BOViewmodel"],
            __WEBPACK_IMPORTED_MODULE_7__app_bo_uistate__["BOUistate"],
            __WEBPACK_IMPORTED_MODULE_8__app_bo_statemachine__["BOStatemachine"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_10__app_bo_bindingdata__["BOBindingdata"],
            __WEBPACK_IMPORTED_MODULE_1__domain_business_object_service__["BusinessObjectService"],
            __WEBPACK_IMPORTED_MODULE_6__gsp_sys_rtf_common__["FrameworkService"]])
    ], BusinessObjectManagerComponent);
    return BusinessObjectManagerComponent;
}());



/***/ }),

/***/ "./src/app/modules/business-object/business-object.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessObjectModule", function() { return BusinessObjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_object_manager_business_object_manager_component__ = __webpack_require__("./src/app/modules/business-object/business-object-manager/business-object-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app__ = __webpack_require__("./src/app/modules/business-object/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__business_object_domain_business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__business_object_routing_module__ = __webpack_require__("./src/app/modules/business-object/business-object.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__domain__ = __webpack_require__("./src/app/modules/business-object/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var BusinessObjectModule = /** @class */ (function () {
    function BusinessObjectModule() {
    }
    BusinessObjectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_dropdowns__["DropDownsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_layout__["SplitterModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_10__business_object_routing_module__["BusinessObjectRoutingModule"],
                __WEBPACK_IMPORTED_MODULE_9__farris_devkit__["CommandModule"].setup(__WEBPACK_IMPORTED_MODULE_7__app__["commandHandlers"], [])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__business_object_manager_business_object_manager_component__["BusinessObjectManagerComponent"]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__app__["APP_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_7__app__["commandHandlers"],
                __WEBPACK_IMPORTED_MODULE_8__business_object_domain_business_object_service__["BusinessObjectService"],
                __WEBPACK_IMPORTED_MODULE_9__farris_devkit__["CommandModule"],
                __WEBPACK_IMPORTED_MODULE_9__farris_devkit__["RestfulService"],
                __WEBPACK_IMPORTED_MODULE_11__domain__["DOMAIN_PROVIDERS"],
            ]
        })
    ], BusinessObjectModule);
    return BusinessObjectModule;
}());

//# sourceMappingURL=business-object.module.js.map

/***/ }),

/***/ "./src/app/modules/business-object/business-object.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessObjectRoutingModule", function() { return BusinessObjectRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_object_manager_business_object_manager_component__ = __webpack_require__("./src/app/modules/business-object/business-object-manager/business-object-manager.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__business_object_manager_business_object_manager_component__["BusinessObjectManagerComponent"] }
];
var BusinessObjectRoutingModule = /** @class */ (function () {
    function BusinessObjectRoutingModule() {
    }
    BusinessObjectRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], BusinessObjectRoutingModule);
    return BusinessObjectRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/business-object/domain/bo-repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORepository", function() { return BORepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_businessobject_entity__ = __webpack_require__("./src/app/modules/business-object/domain/entities/businessobject.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_object_datastorage__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.datastorage.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BORepository = /** @class */ (function (_super) {
    __extends(BORepository, _super);
    function BORepository(injector) {
        return _super.call(this, injector) || this;
    }
    BORepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_3__business_object_datastorage__["BuisnessObjectDataStorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_2__entities_businessobject_entity__["BusinessObjectEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], BORepository);
    return BORepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/business-object/domain/business-object.datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuisnessObjectDataStorage", function() { return BuisnessObjectDataStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuisnessObjectDataStorage = /** @class */ (function (_super) {
    __extends(BuisnessObjectDataStorage, _super);
    function BuisnessObjectDataStorage() {
        return _super.call(this) || this;
    }
    BuisnessObjectDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BuisnessObjectDataStorage);
    return BuisnessObjectDataStorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/business-object/domain/business-object.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessObjectService", function() { return BusinessObjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_object_datastorage__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bo_repository__ = __webpack_require__("./src/app/modules/business-object/domain/bo-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BusinessObjectService = /** @class */ (function () {
    function BusinessObjectService(rest, dataStorage, reposity) {
        this.rest = rest;
        this.dataStorage = dataStorage;
        this.reposity = reposity;
        this.isSysInit = false;
        this.url = '/api/dev/main/v1.0/business-objects/';
    }
    BusinessObjectService.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["HttpHeaders"]().set('sessionId', this.sessionid);
        // this.datastorage.load(flatfunctionObjs);
        return this.rest.get("" + this.url, null, { headers: headers }).subscribe(function (res) {
            if (res instanceof Array) {
                res.forEach(function (item) {
                    if (item.parentID === null) {
                        item.parentID = undefined;
                    }
                    if (item.sysInit === '1') {
                        item.isSysInit = true;
                    }
                    else {
                        item.isSysInit = false;
                    }
                });
                _this.dataStorage.load(res);
            }
            else {
                if (res.parentID === null) {
                    res.parentID = undefined;
                    if (res.sysInit === '1') {
                        res.isSysInit = true;
                    }
                    else {
                        res.isSysInit = false;
                    }
                }
                _this.dataStorage.load([res]);
            }
        });
    };
    /**
     * 保存
     */
    BusinessObjectService.prototype.save = function (item) {
        var _this = this;
        if (!this.isInputLegal(item.Code)) {
            alert('编号只能为第一个字符是字母的字母和字符组合。');
            return true;
        }
        else {
            // todo:此处争取顺序应该是先httpservice 更新服务端，然后客户端重新load
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["HttpHeaders"]().set('SessionId', this.sessionid);
            var entities = this.reposity.getAllEntities();
            entities.forEach(function (element) {
                if (element.ID === item.ID) {
                    element.Code = item.Code;
                    element.IsDetail = item.IsDetail || '1';
                    element.Layer = item.Layer || 1;
                    element.Name = item.Name;
                    element.Description = item.Description;
                    element.Parentid = item.Parentid || '0';
                    element.SysInit = item.SysInit || '0';
                    element.Type = item.Type || 0;
                    element.SortOrder = item.SortOrder || 1;
                    _this.postData = _this.convert2Groupobj(item);
                }
            });
            this.rest.post(this.url, this.postData, null, { headers: headers }).subscribe(function (res) {
                _this.getdata();
            });
        }
    };
    /**
   * 保存编辑
   */
    BusinessObjectService.prototype.saveChanges = function (item) {
        var _this = this;
        if (item.Layer === 1) {
            alert('这是业务对象中的根节点，不允许编辑');
            return;
        }
        else if (!this.isInputLegal(item.Code)) {
            alert('编号只能为第一个字符是字母的字母和字符组合。');
            return true;
        }
        else if (item.SysInit === '1') {
            alert('该业务对象为系统预置，不允许修改');
            return;
        }
        else {
            // todo:此处争取顺序应该是先httpservice 更新服务端，然后客户端重新load
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["HttpHeaders"]().set('SessionId', this.sessionid);
            var entities = this.reposity.getAllEntities();
            entities.forEach(function (element) {
                if (element.ID === item.ID) {
                    element.Code = item.Code;
                    element.IsDetail = item.IsDetail || '1';
                    element.Layer = item.Layer || 1;
                    element.Name = item.Name;
                    element.Description = item.Description;
                    element.Parentid = item.Parentid || '0';
                    element.SysInit = item.SysInit || '0';
                    element.Type = item.Type || 0;
                    element.SortOrder = item.SortOrder || 1;
                    _this.postData = _this.convert2Groupobj(item);
                }
            });
            this.rest.put(this.url, this.postData, null, { headers: headers }).subscribe(function (res) {
                _this.getdata();
            });
        }
    };
    /**
     * 判断文本输入是否合法
     */
    BusinessObjectService.prototype.isInputLegal = function (event) {
        var textInput = /^([a-zA-Z]+)([0-9]*)$/;
        var result = textInput.test(event);
        return result;
    };
    /**
     * 判断业务对象是否有子业务对象
     *
     */
    BusinessObjectService.prototype.IsExistChild = function (parentid) {
        var entities = this.reposity.getAllEntities();
        var ss = false;
        entities.forEach(function (item) {
            if (item.Parentid === parentid) {
                alert('该业务对象下存在子业务对象，无法删除。');
                ss = true;
            }
        });
        return ss;
    };
    /**
     * 删除并重新加载
     */
    BusinessObjectService.prototype.remove = function (dataId) {
        var _this = this;
        // todo:此处争取顺序应该是先httpservice 更新服务端，然后客户端重新load
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["HttpHeaders"]().set('SessionId', this.sessionid);
        var deleteUrl = this.url + dataId;
        this.rest.delete(deleteUrl, null, { headers: headers }).subscribe(function (res) {
            if (res) {
                _this.reposity.removeEntityById(dataId);
            }
            _this.getdata();
        });
    };
    /**
      * 将sysInit的string类型转换为boolean类型
      */
    BusinessObjectService.prototype.transformSysInitBoolean = function (item) {
        if (item.SysInit === '1') {
            this.isSysInit = true;
        }
        else {
            this.isSysInit = false;
        }
    };
    BusinessObjectService.prototype.clonefunction = function (item) {
    };
    BusinessObjectService.prototype.convert2Groupobj = function (item) {
        var data = {
            Id: item.ID,
            Code: item.Code,
            Name: item.Name,
            Path: '',
            Layer: item.Layer || 1,
            IsDetail: item.IsDetail || '1',
            SysInit: item.SysInit || '0',
            Type: item.Type || 0,
            Description: item.Description,
            ParentId: item.Parentid || '0',
            SortOrder: item.SortOrder || 1
        };
        return data;
    };
    BusinessObjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_2__business_object_datastorage__["BuisnessObjectDataStorage"], __WEBPACK_IMPORTED_MODULE_3__bo_repository__["BORepository"]])
    ], BusinessObjectService);
    return BusinessObjectService;
}());



/***/ }),

/***/ "./src/app/modules/business-object/domain/entities/businessobject.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessObjectEntity", function() { return BusinessObjectEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * 客户实体
 */
var BusinessObjectEntity = /** @class */ (function (_super) {
    __extends(BusinessObjectEntity, _super);
    function BusinessObjectEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'id',
            primary: true
        }),
        __metadata("design:type", String)
    ], BusinessObjectEntity.prototype, "ID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'code'
        }),
        __metadata("design:type", String)
    ], BusinessObjectEntity.prototype, "Code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'name'
        }),
        __metadata("design:type", String)
    ], BusinessObjectEntity.prototype, "Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'type'
        }),
        __metadata("design:type", Int32Array)
    ], BusinessObjectEntity.prototype, "Type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'layer'
        }),
        __metadata("design:type", Int32Array)
    ], BusinessObjectEntity.prototype, "Layer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'isDetail'
        }),
        __metadata("design:type", String)
    ], BusinessObjectEntity.prototype, "IsDetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'sysInit'
        }),
        __metadata("design:type", String)
    ], BusinessObjectEntity.prototype, "SysInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'description'
        }),
        __metadata("design:type", String)
    ], BusinessObjectEntity.prototype, "Description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'parentID',
        }),
        __metadata("design:type", String)
    ], BusinessObjectEntity.prototype, "Parentid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'sortOrder',
        }),
        __metadata("design:type", Int32Array)
    ], BusinessObjectEntity.prototype, "SortOrder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'isSysInit'
        }),
        __metadata("design:type", Boolean)
    ], BusinessObjectEntity.prototype, "IsSysInit", void 0);
    return BusinessObjectEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/business-object/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN_PROVIDERS", function() { return DOMAIN_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_businessobject_entity__ = __webpack_require__("./src/app/modules/business-object/domain/entities/businessobject.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_object_datastorage__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bo_repository__ = __webpack_require__("./src/app/modules/business-object/domain/bo-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_object_service__ = __webpack_require__("./src/app/modules/business-object/domain/business-object.service.ts");
/* unused harmony reexport BusinessObjectEntity */
/* unused harmony reexport BuisnessObjectDataStorage */
/* unused harmony reexport BORepository */
/* unused harmony reexport BusinessObjectService */




var DOMAIN_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_1__business_object_datastorage__["BuisnessObjectDataStorage"],
    __WEBPACK_IMPORTED_MODULE_2__bo_repository__["BORepository"],
    __WEBPACK_IMPORTED_MODULE_3__business_object_service__["BusinessObjectService"],
];



/***/ }),

/***/ "./src/app/shared/data-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataUtil", function() { return DataUtil; });
var DataUtil = /** @class */ (function () {
    function DataUtil() {
    }
    /**
     * 创建内码
     */
    DataUtil.createNM = function () {
        // const S4 = function() {
        //     return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        // };
        // return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
        return '' + Math.round(Math.random() * 10000);
    };
    /**
     * 创建编号
     */
    DataUtil.createBH = function (prefix) {
        var d = new Date();
        return "" + prefix + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds();
    };
    return DataUtil;
}());



/***/ })

},[],["angular","farris","rtf","progress","rxjs"],["angular","farris","rtf","progress","rxjs"]);
//# sourceMappingURL=business-object.module.chunk.js.map