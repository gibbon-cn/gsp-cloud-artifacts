webpackJsonp(["authassign.module"],{

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

/***/ "./src/app/modules/authassign/auresultgroup/app/auresult-bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultBindingdata", function() { return AuresultBindingdata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_index__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/index.ts");
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



var AuresultBindingdata = /** @class */ (function (_super) {
    __extends(AuresultBindingdata, _super);
    function AuresultBindingdata(injector) {
        return _super.call(this, injector) || this;
    }
    AuresultBindingdata = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_2__domain_index__["AuresultEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain_index__["AuresultRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuresultBindingdata);
    return AuresultBindingdata;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/app/auresult-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultForm", function() { return AuresultForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auresult_bindingdata__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-bindingdata.ts");
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




var AuresultForm = /** @class */ (function (_super) {
    __extends(AuresultForm, _super);
    function AuresultForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'packageid',
            binding: 'packageid'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuresultForm.prototype, "PackageID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'authfield',
            binding: 'authfield'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuresultForm.prototype, "Authfield", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'groupid',
            binding: 'groupid'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuresultForm.prototype, "GroupID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'datas',
            binding: 'datas'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuresultForm.prototype, "DataCollection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'authorizations',
            binding: 'authorizations'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuresultForm.prototype, "AuthopCollection", void 0);
    AuresultForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__auresult_bindingdata__["AuresultBindingdata"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuresultForm);
    return AuresultForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/app/auresult-statemachine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultStatemachine", function() { return AuresultStatemachine; });
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


var AuresultStatemachine = /** @class */ (function (_super) {
    __extends(AuresultStatemachine, _super);
    function AuresultStatemachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])({ initialState: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], AuresultStatemachine.prototype, "viewState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], AuresultStatemachine.prototype, "editState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], AuresultStatemachine.prototype, "canInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return (context.state === 'viewState' || context.state === 'editState'); }
        }),
        __metadata("design:type", Boolean)
    ], AuresultStatemachine.prototype, "canEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return (context.state === 'viewState' || context.state === 'editState'); }
        }),
        __metadata("design:type", Boolean)
    ], AuresultStatemachine.prototype, "canSave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], AuresultStatemachine.prototype, "load", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], AuresultStatemachine.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], AuresultStatemachine.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], AuresultStatemachine.prototype, "view", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], AuresultStatemachine.prototype, "save", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], AuresultStatemachine.prototype, "clear", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], AuresultStatemachine.prototype, "close", void 0);
    AuresultStatemachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgStatemachine"])()
    ], AuresultStatemachine);
    return AuresultStatemachine;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["StateMachine"]));



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/app/auresult-uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultUistate", function() { return AuresultUistate; });
var AuresultUistate = /** @class */ (function () {
    function AuresultUistate() {
    }
    return AuresultUistate;
}());



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/app/auresult.viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultViewmodel", function() { return AuresultViewmodel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auresult_bindingdata__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auresult_form__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auresult_statemachine__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auresult_uistate__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-uistate.ts");
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
var AuresultViewmodel = /** @class */ (function (_super) {
    __extends(AuresultViewmodel, _super);
    /**
     * 构造函数
     *
     */
    function AuresultViewmodel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_5__auresult_uistate__["AuresultUistate"]);
        return _this;
    }
    /**
     * 表单加载
     */
    AuresultViewmodel.prototype.loadResultData = function () { };
    /**
    * 新增
    */
    AuresultViewmodel.prototype.add = function () { };
    /**
    * 编辑
    */
    AuresultViewmodel.prototype.edit = function () { };
    /**
    * 编辑
    */
    AuresultViewmodel.prototype.save = function () { };
    /**
    * 切换
    */
    AuresultViewmodel.prototype.change = function () { };
    /**
     * 关闭
     */
    AuresultViewmodel.prototype.close = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'loadResultData',
            params: {
                authfield: '' // TODO 传参待WEB框架完善
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuresultViewmodel.prototype, "loadResultData", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'add',
            params: {
                authfield: '',
                pakageId: '' // TODO 传参待WEB框架完善
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuresultViewmodel.prototype, "add", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'edit'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuresultViewmodel.prototype, "edit", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'save'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuresultViewmodel.prototype, "save", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'change'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuresultViewmodel.prototype, "change", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'close'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuresultViewmodel.prototype, "close", null);
    AuresultViewmodel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__auresult_bindingdata__["AuresultBindingdata"],
            form: __WEBPACK_IMPORTED_MODULE_3__auresult_form__["AuresultForm"],
            stateMachine: __WEBPACK_IMPORTED_MODULE_4__auresult_statemachine__["AuresultStatemachine"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuresultViewmodel);
    return AuresultViewmodel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/app/handler/add.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultAddHandler", function() { return AuresultAddHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auresult_statemachine__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_auresult_bindingdata__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_auresult_uistate__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_index__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_session__ = __webpack_require__("./src/app/modules/authassign/shared/session.ts");
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









var AuresultAddHandler = /** @class */ (function (_super) {
    __extends(AuresultAddHandler, _super);
    function AuresultAddHandler(router, dataService, uiState, stateMachine, repository, bindingData, session) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        _this.session = session;
        return _this;
    }
    AuresultAddHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('add', function (lastResult, context) {
            // 命令参数值
            var command = context.command;
            var packageid = _this.session.packageId; // command.params.pakageId;
            var authfield = _this.session.authField; // command.params.authfield;
            var groupIdNew = _this.BuildNewGroup();
            _this.uiState.action = 'add';
            var data = {
                packageId: packageid,
                groupId: groupIdNew,
                authField: authfield,
                datas: [],
                authorizations: []
            };
            var newEntity = Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["EntityFactory"])(__WEBPACK_IMPORTED_MODULE_6__domain_index__["AuresultEntity"], data);
            _this.repository.addEntity(newEntity);
            console.log('增加：' + groupIdNew);
            _this.dataService.addGroups(groupIdNew);
        });
        this.addTask('transitState', function () {
            _this.stateMachine['add']();
        });
    };
    AuresultAddHandler.prototype.BuildNewGroup = function () {
        var entities = this.repository.getAllEntities();
        if (Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(entities) || entities.length === 0) {
            return '1';
        }
        var keys = [];
        entities.forEach(function (item) {
            if (!isNaN(Number(item.groupId))) {
                keys.push(Number(item.groupId));
            }
        });
        if (Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(keys) || keys.length === 0) {
            return '1';
        }
        var max = Math.max.apply(null, keys) + 1;
        return max;
    };
    AuresultAddHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommandHandler"])({
            commandName: 'add'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_6__domain_index__["AuresultService"],
            __WEBPACK_IMPORTED_MODULE_5__app_auresult_uistate__["AuresultUistate"],
            __WEBPACK_IMPORTED_MODULE_3__app_auresult_statemachine__["AuresultStatemachine"],
            __WEBPACK_IMPORTED_MODULE_6__domain_index__["AuresultRepository"],
            __WEBPACK_IMPORTED_MODULE_4__app_auresult_bindingdata__["AuresultBindingdata"],
            __WEBPACK_IMPORTED_MODULE_8__shared_session__["AuthassignSession"]])
    ], AuresultAddHandler);
    return AuresultAddHandler;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/app/handler/close.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseHandler", function() { return CloseHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_session__ = __webpack_require__("./src/app/modules/authassign/shared/session.ts");
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




var CloseHandler = /** @class */ (function (_super) {
    __extends(CloseHandler, _super);
    function CloseHandler(router, session) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.session = session;
        return _this;
    }
    CloseHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('close', function () {
            // pos-manager是在数据库里配置的
            var posUrl = '/main/position-manager/' + _this.session.funcId + '/positions';
            _this.router.navigate([posUrl]);
        });
    };
    CloseHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommandHandler"])({
            commandName: 'close'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__shared_session__["AuthassignSession"]])
    ], CloseHandler);
    return CloseHandler;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/app/handler/edit.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultEditHandler", function() { return AuresultEditHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_index__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auresult_statemachine__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auresult_uistate__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-uistate.ts");
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





var AuresultEditHandler = /** @class */ (function (_super) {
    __extends(AuresultEditHandler, _super);
    function AuresultEditHandler(dataService, uiState, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        return _this;
    }
    AuresultEditHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('edit', function () {
            _this.uiState.action = 'edit';
            _this.stateMachine['edit']();
        });
    };
    AuresultEditHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'edit'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_index__["AuresultService"],
            __WEBPACK_IMPORTED_MODULE_4__auresult_uistate__["AuresultUistate"],
            __WEBPACK_IMPORTED_MODULE_3__auresult_statemachine__["AuresultStatemachine"]])
    ], AuresultEditHandler);
    return AuresultEditHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/app/handler/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuresultCommandHandlers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__load_handler__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/handler/load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_handler__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/handler/add.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_handler__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/handler/edit.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__save_handler__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/handler/save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__close_handler__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/handler/close.handler.ts");





var AuresultCommandHandlers = [
    __WEBPACK_IMPORTED_MODULE_0__load_handler__["AuresultLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_1__add_handler__["AuresultAddHandler"],
    __WEBPACK_IMPORTED_MODULE_2__edit_handler__["AuresultEditHandler"],
    __WEBPACK_IMPORTED_MODULE_3__save_handler__["AuresultSaveHandler"],
    __WEBPACK_IMPORTED_MODULE_4__close_handler__["CloseHandler"]
];



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/app/handler/load.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultLoadHandler", function() { return AuresultLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_index__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auresult_statemachine__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auresult_uistate__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_auresult_bindingdata__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-bindingdata.ts");
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






var AuresultLoadHandler = /** @class */ (function (_super) {
    __extends(AuresultLoadHandler, _super);
    function AuresultLoadHandler(dataService, uiState, stateMachine, bindingData) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.bindingData = bindingData;
        return _this;
    }
    AuresultLoadHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('loadData', function (authfield) {
            _this.uiState.action = 'load';
            _this.dataService.getResultdata();
        });
    };
    AuresultLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'loadResultData'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_index__["AuresultService"],
            __WEBPACK_IMPORTED_MODULE_4__auresult_uistate__["AuresultUistate"],
            __WEBPACK_IMPORTED_MODULE_3__auresult_statemachine__["AuresultStatemachine"],
            __WEBPACK_IMPORTED_MODULE_5__app_auresult_bindingdata__["AuresultBindingdata"]])
    ], AuresultLoadHandler);
    return AuresultLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/app/handler/save.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultSaveHandler", function() { return AuresultSaveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auresult_statemachine__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_auresult_bindingdata__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_auresult_uistate__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_index__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__domain_entities_auresut_changes_entity__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/entities/auresut-changes.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_session__ = __webpack_require__("./src/app/modules/authassign/shared/session.ts");
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









var AuresultSaveHandler = /** @class */ (function (_super) {
    __extends(AuresultSaveHandler, _super);
    function AuresultSaveHandler(dataService, uiState, stateMachine, repository, bindingData, session) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        _this.repository = repository;
        _this.bindingData = bindingData;
        _this.session = session;
        return _this;
    }
    AuresultSaveHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('save', function () {
            _this.uiState.action = 'save';
            var auresultChanges = _this.buildNewAuresultChangesEntity();
            _this.repository.getAllEntities().forEach(function (item) {
                var index = _this.session.addGroupIds.findIndex(function (x) { return x.toString() === item.groupId.toString(); });
                if (index > -1) {
                    var result = _this.buildAuresultSave(item);
                    auresultChanges.addResult.push(result);
                }
                else if (Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(item.changes) === false && item.changes.length !== 0) {
                    var result = _this.buildAuresultSave(item);
                    auresultChanges.editResult.push(result);
                }
            });
            console.log('要保存的结果');
            console.log(auresultChanges);
            _this.dataService.saveResultData(auresultChanges).subscribe();
            alert('保存成功');
            // 一旦保存，便重置
            _this.session.addGroupIds.length = 0;
        });
    };
    /**
    * 构造权限保存结果
    */
    AuresultSaveHandler.prototype.buildNewAuresultChangesEntity = function () {
        var auresultChanges = new __WEBPACK_IMPORTED_MODULE_7__domain_entities_auresut_changes_entity__["AuresultChangesEntity"]();
        auresultChanges.ownerId = this.session.ownerId; // TODO此处应该是传参，或者是缓存
        auresultChanges.authField = this.session.authField; // TODO此处应该是传参，或者是缓存
        auresultChanges.year = this.session.year; // TODO此处应该是传参，或者是缓存
        auresultChanges.addResult = new Array();
        auresultChanges.removeResult = new Array();
        auresultChanges.editResult = new Array();
        auresultChanges.ownerType = this.session.ownerType; // TODO此处应该是传参，或者是缓存
        return auresultChanges;
    };
    // 直接使用Entity实体 会提示 循环引用
    AuresultSaveHandler.prototype.buildAuresultSave = function (item) {
        var result = new __WEBPACK_IMPORTED_MODULE_7__domain_entities_auresut_changes_entity__["AuresultSave"]();
        result.packageId = item.packageId;
        result.authField = item.authField;
        result.authorizations = item.authorizations;
        result.datas = item.datas;
        result.groupId = item.groupId;
        result.ruleEntity = item.ruleEntity;
        return result;
    };
    AuresultSaveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'save'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__domain_index__["AuresultService"],
            __WEBPACK_IMPORTED_MODULE_5__app_auresult_uistate__["AuresultUistate"],
            __WEBPACK_IMPORTED_MODULE_3__auresult_statemachine__["AuresultStatemachine"],
            __WEBPACK_IMPORTED_MODULE_6__domain_index__["AuresultRepository"],
            __WEBPACK_IMPORTED_MODULE_4__app_auresult_bindingdata__["AuresultBindingdata"],
            __WEBPACK_IMPORTED_MODULE_8__shared_session__["AuthassignSession"]])
    ], AuresultSaveHandler);
    return AuresultSaveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultAPP_PROVIDERS", function() { return AuresultAPP_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auresult_bindingdata__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auresult_form__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auresult_statemachine__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auresult_viewmodel__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult.viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auresult_uistate__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/auresult-uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handler_index__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/handler/index.ts");
/* unused harmony reexport AuresultBindingdata */
/* unused harmony reexport AuresultStatemachine */
/* unused harmony reexport AuresultForm */
/* unused harmony reexport AuresultUistate */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultViewmodel", function() { return __WEBPACK_IMPORTED_MODULE_3__auresult_viewmodel__["AuresultViewmodel"]; });
/* unused harmony reexport AuresultCommandHandlers */






var AuresultAPP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__auresult_bindingdata__["AuresultBindingdata"],
    __WEBPACK_IMPORTED_MODULE_1__auresult_form__["AuresultForm"],
    __WEBPACK_IMPORTED_MODULE_4__auresult_uistate__["AuresultUistate"],
    __WEBPACK_IMPORTED_MODULE_3__auresult_viewmodel__["AuresultViewmodel"],
    __WEBPACK_IMPORTED_MODULE_2__auresult_statemachine__["AuresultStatemachine"]
];



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/domain/auresult-datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultDatastorage", function() { return AuresultDatastorage; });
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


var AuresultDatastorage = /** @class */ (function (_super) {
    __extends(AuresultDatastorage, _super);
    function AuresultDatastorage() {
        return _super.call(this) || this;
    }
    AuresultDatastorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuresultDatastorage);
    return AuresultDatastorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/domain/auresult-repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultRepository", function() { return AuresultRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auresult_datastorage__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/auresult-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_auresult_entity__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/entities/auresult.entity.ts");
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




var AuresultRepository = /** @class */ (function (_super) {
    __extends(AuresultRepository, _super);
    function AuresultRepository(injector) {
        return _super.call(this, injector) || this;
    }
    AuresultRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_2__auresult_datastorage__["AuresultDatastorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_3__entities_auresult_entity__["AuresultEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuresultRepository);
    return AuresultRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/domain/auresult-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultService", function() { return AuresultService; });
/* unused harmony export auresultData */
/* unused harmony export dataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auresult_datastorage__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/auresult-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_session__ = __webpack_require__("./src/app/modules/authassign/shared/session.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_authop_help_entity__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/entities/authop-help.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_auth_data_source_entity__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/entities/auth-data-source.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuresultService = /** @class */ (function () {
    function AuresultService(rest, dataStorage, session) {
        this.rest = rest;
        this.dataStorage = dataStorage;
        this.session = session;
    }
    AuresultService.prototype.changeResultdata = function () {
        this.dataStorage.load(null);
    };
    /**
    * 获取权限分配结果
    */
    AuresultService.prototype.getResultdata = function () {
        var _this = this;
        // mock数据
        // this.dataStorage.load(auresultData);
        var authfield = this.session.authField;
        console.log('authfield:' + authfield);
        var ownerId = this.session.ownerId;
        console.log('ownerIdF:' + ownerId);
        var ownerType = this.session.ownerType;
        console.log('ownerType:' + ownerType);
        var headers = this.session.getHeader();
        var url = this.session.getResultPath();
        // TODO
        var curUserId = this.session.getCurrentUserId();
        var urlNew = url + '?currentUserId=' + curUserId + '&ownerId=' + ownerId + '&ownerType=' + ownerType.toString()
            + '&authfield=' + authfield;
        this.rest.get(urlNew, null, headers).subscribe(function (result) {
            _this.dataStorage.load(result);
        });
    };
    /**
    * 获取权限分配结果数据源
    */
    AuresultService.prototype.getDataSource = function (authField) {
        // mock数据
        // return of(dataSource);
        var authDataSource = new __WEBPACK_IMPORTED_MODULE_5__entities_auth_data_source_entity__["AuthDataSource"]();
        var headers = this.session.getHeader();
        var url = this.session.getResultPath();
        var urlNew = url + '/dataSource/' + authField;
        return this.rest.get(urlNew, null, headers);
    };
    /**
    * 保存权限分配结果
    */
    AuresultService.prototype.saveResultData = function (body) {
        var headers = this.session.getHeader();
        console.log(headers);
        var url = this.session.getResultPath();
        return this.rest.post(url, body, null, headers);
    };
    /**
    * 保获取权限对象和数据操作
    */
    AuresultService.prototype.getAuthorization = function (authfield) {
        var headers = this.session.getHeader();
        var url = this.session.getAuthorizationPath();
        var urlNew = url + '/authfield/' + authfield;
        var authorizations = new Array();
        console.log('urlNew' + urlNew);
        this.rest.get(urlNew, null, headers).subscribe(function (datas) {
            var arrData = new Array();
            arrData = datas;
            arrData.forEach(function (data) {
                var obj = new __WEBPACK_IMPORTED_MODULE_4__entities_authop_help_entity__["AuthopHelpEntity"]();
                obj.identiy = data.id + '~' + data.name;
                obj.id = data.id;
                obj.name = data.name;
                // if (data.parentId === '') {
                //     obj.parentId = undefined;
                // } else {
                //     obj.parentId = data.parentId;
                // }
                obj.type = 0;
                obj.authOps = new Array();
                if (!Object(__WEBPACK_IMPORTED_MODULE_6_util__["isNullOrUndefined"])(data.authOps) && data.authOps.length !== 0) {
                    data.authOps.forEach(function (child) {
                        var op = new __WEBPACK_IMPORTED_MODULE_4__entities_authop_help_entity__["AuthopHelpEntity"]();
                        op.identiy = data.id + '~' + data.name + '~' + child.id + '~' + child.name;
                        op.id = child.id;
                        op.name = child.name;
                        op.type = 1;
                        op.parentId = data.id;
                        obj.authOps.push(op);
                    });
                    // TODO 业务操作 为空的暂时不添加，此处导航应当使用业务对象，后续再优化
                    obj.parentId = undefined;
                    authorizations.push(obj);
                }
            });
        });
        console.log('authorizations:' + authorizations);
        return authorizations;
    };
    /**
    * TODO 权限结果包变更集：新增部分，临时这么处理,待Farris框架出变更集
    */
    AuresultService.prototype.addGroups = function (groupId) {
        this.session.addGroupIds.push(groupId);
        var index = this.session.delGroupIds.indexOf(groupId);
        if (index > -1) {
            this.session.delGroupIds.splice(index, 1);
        }
    };
    /**
     * 权限结果包变更集：删除部分，TODO 临时这么处理,待Farris框架出变更集
     */
    AuresultService.prototype.delGroups = function (groupId) {
        this.session.delGroupIds.push(groupId);
        var index = this.session.addGroupIds.indexOf(groupId);
        if (index > -1) {
            this.session.addGroupIds.splice(index, 1);
        }
    };
    AuresultService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_1__auresult_datastorage__["AuresultDatastorage"],
            __WEBPACK_IMPORTED_MODULE_3__shared_session__["AuthassignSession"]])
    ], AuresultService);
    return AuresultService;
}());

var auresultData = [
    {
        packageId: 'BEPackageAll',
        year: null,
        groupId: '1',
        authField: 'BMBE01',
        authorizations: [
            {
                id: 'BE01',
                name: '销售订单',
                authOps: [
                    { id: '001', name: '查看' },
                    { id: '002', name: '新增' },
                    { id: '003', name: '修改' },
                    { id: '004', name: '删除' },
                ]
            },
            {
                id: 'BE02',
                name: '库存管理',
                authOps: [
                    { id: '001', name: '查看' }
                ]
            }
        ],
        dicAuthorization: null,
        datas: [
            { assid1: '0001', data: '*' },
        ],
        ruleEntity: null
    },
    {
        packageId: 'BEPackageAll',
        year: null,
        groupId: '2',
        authField: 'BMBE01',
        authorizations: [
            {
                id: 'BE01',
                name: '销售订单',
                authOps: [
                    { id: '004', name: '删除' },
                ]
            },
            {
                id: 'BE02',
                name: '库存管理',
                authOps: [
                    { id: '004', name: '删除' }
                ]
            }
        ],
        dicAuthorization: null,
        datas: [
            { assid1: '0001', data: '销售二部' },
        ],
        ruleEntity: null
    }
];
var dataSource = {
    keyField: 'id',
    helpFields: [
        'id',
        'code',
        'name'
    ],
    showFields: [
        { field: 'code', title: '编号' },
        { field: 'name', title: '名称' }
    ],
    data: [
        {
            id: '销售一部',
            code: '01',
            name: '销售一部'
        },
        {
            id: '销售二部',
            code: '02',
            name: '销售二部'
        },
        {
            id: '销售三部',
            code: '03',
            name: '销售三部'
        },
        {
            id: '销售四部',
            code: '04',
            name: '销售四部'
        }
    ]
};


/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/domain/entities/auresult.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultEntity", function() { return AuresultEntity; });
/* unused harmony export AuthorizationEntity */
/* unused harmony export AuthoperationEntity */
/* unused harmony export GSPAuthorizationRule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizDataDTO", function() { return BizDataDTO; });
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
 * 权限字段实体
 */
var AuresultEntity = /** @class */ (function (_super) {
    __extends(AuresultEntity, _super);
    function AuresultEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'packageId',
        }),
        __metadata("design:type", String)
    ], AuresultEntity.prototype, "packageId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'authField'
        }),
        __metadata("design:type", String)
    ], AuresultEntity.prototype, "authField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'groupId',
            primary: true
        }),
        __metadata("design:type", String)
    ], AuresultEntity.prototype, "groupId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'datas'
        }),
        __metadata("design:type", Array)
    ], AuresultEntity.prototype, "datas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'authorizations',
        }),
        __metadata("design:type", Array)
    ], AuresultEntity.prototype, "authorizations", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'ruleEntity',
        }),
        __metadata("design:type", Array)
    ], AuresultEntity.prototype, "ruleEntity", void 0);
    return AuresultEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));

/**
 * 权限对象实体
 */
var AuthorizationEntity = /** @class */ (function () {
    function AuthorizationEntity() {
    }
    return AuthorizationEntity;
}());

/**
 * 权限结果实体
 */
var AuthoperationEntity = /** @class */ (function () {
    function AuthoperationEntity() {
    }
    return AuthoperationEntity;
}());

/**
 * 规则权限实体
 */
var GSPAuthorizationRule = /** @class */ (function () {
    function GSPAuthorizationRule() {
    }
    return GSPAuthorizationRule;
}());

/**
 *   规则权限实体
 */
var BizDataDTO = /** @class */ (function () {
    function BizDataDTO() {
    }
    return BizDataDTO;
}());



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/domain/entities/auresut-changes.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultChangesEntity", function() { return AuresultChangesEntity; });
/* unused harmony export AuthorizationAssignmentGroupEntity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultSave", function() { return AuresultSave; });
/**
 * 权限分配结果变更集实体
 */
var AuresultChangesEntity = /** @class */ (function () {
    function AuresultChangesEntity() {
    }
    return AuresultChangesEntity;
}());

var AuthorizationAssignmentGroupEntity = /** @class */ (function () {
    function AuthorizationAssignmentGroupEntity() {
    }
    return AuthorizationAssignmentGroupEntity;
}());

var AuresultSave = /** @class */ (function () {
    function AuresultSave() {
    }
    return AuresultSave;
}());



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/domain/entities/auth-data-source.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthDataSource", function() { return AuthDataSource; });
/* unused harmony export AuthDataField */
var AuthDataSource = /** @class */ (function () {
    function AuthDataSource() {
    }
    return AuthDataSource;
}());

var AuthDataField = /** @class */ (function () {
    function AuthDataField() {
    }
    return AuthDataField;
}());



/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/domain/entities/authop-help.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthopHelpEntity", function() { return AuthopHelpEntity; });
var AuthopHelpEntity = /** @class */ (function () {
    function AuthopHelpEntity() {
    }
    return AuthopHelpEntity;
}());

// export const authorizationData = [
//     { id: 'BE01', name: '销售订单', type: 0, parentId: undefined },
//     { id: 'BE01~001', authopid: '001', name: '查看', type: 1, parentId: 'BE01' },
//     { id: 'BE01~002', authopid: '002', name: '新增', type: 1, parentId: 'BE01' },
//     { id: 'BE01~003', authopid: '003', name: '修改', type: 1, parentId: 'BE01' },
//     { id: 'BE01~004', authopid: '004', name: '删除', type: 1, parentId: 'BE01' },
//     { id: 'BE02', name: '库存管理', type: 0, parentId: undefined },
//     { id: 'BE02~001', authopid: '001', name: '查看', type: 1, parentId: 'BE02' },
//     { id: 'BE02~002', authopid: '002', name: '新增', type: 1, parentId: 'BE02' },
//     { id: 'BE02~003', authopid: '003', name: '修改', type: 1, parentId: 'BE02' },
//     { id: 'BE02~004', authopid: '004', name: '删除', type: 1, parentId: 'BE02' },
// ];
// canAuthorization = [
//     {
//       identiy: 'BE01~销售订单', id: 'BE01', name: '销售订单', type: 0, parentId: undefined,
//       authOps:
//         [
//           { identiy: 'BE01~销售订单~001~查看', id: '001', name: '查看', type: 1, parentId: 'BE01' },
//           { identiy: 'BE01~销售订单~002~新增', id: '002', name: '新增', type: 1, parentId: 'BE01' },
//           { identiy: 'BE01~销售订单~003~修改', id: '003', name: '修改', type: 1, parentId: 'BE01' },
//           { identiy: 'BE01~销售订单~004~删除', id: '004', name: '删除', type: 1, parentId: 'BE01' }
//         ]
//     },
//     {
//       identiy: 'BE02~库存管理', id: 'BE02', name: '库存管理', type: 0, parentId: undefined,
//       authOps:
//         [
//           { identiy: 'BE02~库存管理~001~查看', id: '001', name: '查看', type: 1, parentId: 'BE02' },
//           { identiy: 'BE02~库存管理~002~新增', id: '002', name: '新增', type: 1, parentId: 'BE02' },
//           { identiy: 'BE02~库存管理~003~修改', id: '003', name: '修改', type: 1, parentId: 'BE02' },
//           { identiy: 'BE02~库存管理~004~删除', id: '004', name: '删除', type: 1, parentId: 'BE02' }
//         ]
//     }
//   ];


/***/ }),

/***/ "./src/app/modules/authassign/auresultgroup/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultDOMAIN_PROVIDERS", function() { return AuresultDOMAIN_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auresult_datastorage__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/auresult-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auresult_service__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/auresult-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auresult_repository__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/auresult-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_auresult_entity__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/entities/auresult.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_authop_help_entity__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/entities/authop-help.entity.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultEntity", function() { return __WEBPACK_IMPORTED_MODULE_3__entities_auresult_entity__["AuresultEntity"]; });
/* unused harmony reexport AuthorizationEntity */
/* unused harmony reexport AuthoperationEntity */
/* unused harmony reexport AuthopHelpEntity */
/* unused harmony reexport AuresultDatastorage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultService", function() { return __WEBPACK_IMPORTED_MODULE_1__auresult_service__["AuresultService"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuresultRepository", function() { return __WEBPACK_IMPORTED_MODULE_2__auresult_repository__["AuresultRepository"]; });





var AuresultDOMAIN_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__auresult_datastorage__["AuresultDatastorage"],
    __WEBPACK_IMPORTED_MODULE_1__auresult_service__["AuresultService"],
    __WEBPACK_IMPORTED_MODULE_2__auresult_repository__["AuresultRepository"]
];



/***/ }),

/***/ "./src/app/modules/authassign/authassign-view/authassign-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/authassign/authassign-view/authassign-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <!--工具栏了 BEGIN-->\r\n  <div class=\"pt-2 mb-2\">\r\n    <div class=\"row pt-2 mb-2\">\r\n      <div class=\"col-sm-12 col-md-3 pt-2\">\r\n        <h1 class=\"h4 d-inline-block\">数据权限分配</h1>\r\n        <!-- <p class=\"text-muted h6 contract-subtitle\">岗位数据权限</p> -->\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-9\">\r\n        <div class=\"pr-2 text-right\">\r\n          <!-- <button type=\"button\" (click)=\"viewmodelAuresult.edit()\" [disabled]=\"!viewmodelAuresult.stateMachine.canEdit\"\r\n            class=\"btn btn-sm btn-default\">编辑 </button> -->\r\n          <button type=\"button\" (click)=\"viewmodelAuresult.save()\" class=\"btn btn-sm btn-default\">保存 </button>\r\n          <button type=\"button\" (click)=\"viewmodelAuresult.close()\" class=\"btn btn-sm btn-default mr-1\">关闭</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--数据权限分配结果 BEGIN-->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 col-md-2 sidebar\">\r\n      <h6 class=\"page-header\">权限字段</h6>\r\n      <div class=\"card\">\r\n        <!--tree -->\r\n        <!-- <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 \">\r\n         \r\n        </div> -->\r\n        <kendo-treeview style=\"width:100%;height:100%\" [nodes]=\"dataAuthfield\" textField=\"FName\"\r\n          kendoTreeViewExpandable kendoTreeViewFlatDataBinding idField=\"FID\" parentIdField=\"FParentID\" [(expandedKeys)]=\"expandedKeys\"\r\n          [expandBy]=\"'FID'\" (selectionChange)=\"handleSelection($event)\">\r\n          <ng-template kendoTreeViewNodeTemplate let-dataItem>\r\n            <span [ngClass]=\"iconClass(dataItem)\"></span>\r\n            {{dataItem.FName}}\r\n          </ng-template>\r\n        </kendo-treeview>\r\n        <!--tree end -->\r\n      </div>\r\n    </div>\r\n\r\n    <!--权限结果 start -->\r\n    <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\r\n\r\n      <div class=\"pr-2 text-left\">\r\n        <h6 class=\"page-header\">权限结果</h6>\r\n        <button type=\"button\" (click)=\"viewmodelAuresult.add()\" class=\"btn btn-sm btn-default\">\r\n          + </button>\r\n      </div>\r\n      <kendo-panelbar [items]=\"dataItems\">\r\n        <ng-template kendoPanelBarItemTemplate let-dataItem>\r\n          <!--数据操作 start -->\r\n          <div class=\"clearfix mb-2\">\r\n            <div class=\"form-inline\">\r\n              <div class=\"form-group pr-2 pl-0 col-1\">\r\n                <a>数据操作: </a>\r\n              </div>\r\n              <a *ngFor=\"let itemauthorization of dataItem.content.authorizations\">\r\n                {{itemauthorization.name}}({{BuildDisplayAuthops(itemauthorization.authOps)}})； </a>\r\n              <div class=\"col-sm-12 col-md-9\">\r\n                <div class=\"pr-2 text-left\">\r\n                 \r\n                  <!-- <button type=\"button\" style=\"background:url(assets/img/analytics-42.png) no-repeat 0 0\" (click)=\"showAuthopsHelp(dataItem.content.groupId,true)\" \r\n                    class=\"btn btn-sm btn-default\">编辑 </button>  -->\r\n                    <button kendoButton [icon]=\"'edit'\" (click)=\"showAuthopsHelp(dataItem.content.groupId,true)\"></button>\r\n                </div>\r\n                <!-- <i class=\"material-icons align-middle\" style=\" font-size: 18px;\">filter_none</i>  -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--数据操作 end -->\r\n          <!--业务数据 start -->\r\n          <div class=\"clearfix mb-2\">\r\n            <div class=\"form-inline\">\r\n              <div class=\"form-group pr-2 pl-0 col-1\">\r\n                <a>业务数据: </a>\r\n              </div>\r\n              <a> {{BuildDisplayData(dataItem.content.datas)}} </a>\r\n              <div class=\"col-sm-12 col-md-9\">\r\n                <div class=\"pr-2 text-left\">\r\n                <button kendoButton [icon]=\"'edit'\" (click)=\"ShowDatasHelp(dataItem.content.groupId,true)\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--业务数据 end -->\r\n        </ng-template>\r\n      </kendo-panelbar>\r\n    </div>\r\n    <!--权限结果 end -->\r\n  </div>\r\n  <!--数据权限分配结果 END-->\r\n\r\n</div>\r\n\r\n\r\n<!--     权限对象树导航参照窗口   BEGIN          -->\r\n<div class=\"modal fade\" [ngClass]=\"{'show d-block':czTreeNavDialog}\">\r\n  <div class=\"modal-dialog modal-dialog-centered gw-page-dialog\" style=\"font-size: 13px;max-width:40%;\">\r\n    <div class=\"modal-content\" style=\"width:100%;height:500px;\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"clearfix p-2\">\r\n          <h6 class=\"modal-title float-left\">权限对象帮助</h6>\r\n          <button class=\"close\" (click)=\"czTreeNavDialog=false\">\r\n            <span>×</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <kendo-treeview style=\"width:200px\" [nodes]=\"canAssigAuthorization\" textField=\"name\" kendoTreeViewExpandable\r\n          idField=\"id\" parentIdField=\"parentId\" [children]=\"children\" [hasChildren]=\"hasChildren\" [checkBy]=\"key\"\r\n          [kendoTreeViewCheckable]=\"checkableSettings\" [(checkedKeys)]=\"checkedKeys\"></kendo-treeview>\r\n      </div>\r\n      <div class=\"modal-footer text-right p-2\">\r\n        <button [class]=\"getCssOp()\" [disabled]=\"!canEditOp\" style=\"font-size: 13px;line-height: 1.2;\" (click)=\"closeAuthopsHelp()\">确定</button>\r\n        <button class=\"btn btn-sm mr-2\" style=\"background:#e3e4e4!important;font-size: 13px;line-height: 1.2;\" (click)=\"czTreeNavDialog=false\">取消</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->\r\n<div class=\"modal-backdrop fade\" [ngClass]=\"{'show':czTreeNavDialog,'d-none':!czTreeNavDialog}\"></div>\r\n<!--权限对象树导航参照窗口  END-->\r\n\r\n\r\n<!--     业务数据导航参照窗口 BEGIN    -->\r\n<div class=\"modal fade\" [ngClass]=\"{'show d-block':dataTreeNavDialog}\">\r\n  <div class=\"modal-dialog modal-dialog-centered gw-page-dialog\" style=\"font-size: 13px;max-width:40%;\">\r\n    <div class=\"modal-content\" style=\"width:100%;height:500px;\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"clearfix p-2\">\r\n          <h6 class=\"modal-title float-left\">业务数据选择帮助</h6>\r\n          <button class=\"close\" (click)=\"dataTreeNavDialog=false\">\r\n            <span>×</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <!--[selectable]=\"selectableSettings\" -->\r\n        <kendo-grid #dataGrid [class]=\"'flex-auto'\" [selectable]=\"selectableSettings\" [kendoGridSelectBy]=\"authDataSource.keyField\"\r\n          [selectedKeys]=\"checkedDataKeys\" [kendoGridBinding]=\"canAssignDatas\">\r\n          <kendo-grid-checkbox-column title=\"选择\"></kendo-grid-checkbox-column>\r\n          <ng-template ngFor [ngForOf]=\"showFields\" let-column>\r\n            <kendo-grid-column field=\"{{column.field}}\" title=\"{{column.title}}\" >\r\n            </kendo-grid-column>\r\n          </ng-template>\r\n\r\n        </kendo-grid>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <div pr-2 text-left class=\"col-xs-3\">\r\n          <span>全选</span>\r\n          <input type=\"checkbox\" style=\"zoom:120%;\" id=\"checkAllData\" name=\"checkAllData\" [checked]=\"isAllData\" (click)=\"checkClick()\">\r\n        </div>\r\n        <div text-right p-2 class=\"col-xs-9\">\r\n          <button [class]=\"getCssData()\" [disabled]=\"!canEditData\" style=\"font-size: 13px;line-height: 1.2;\" (click)=\"closeDataHelp()\">确定</button>\r\n          <button class=\"btn btn-sm mr-2\" style=\"background:#e3e4e4!important;font-size: 13px;line-height: 1.2;\"\r\n            (click)=\"dataTreeNavDialog=false\">取消</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->\r\n<div class=\"modal-backdrop fade\" [ngClass]=\"{'show':dataTreeNavDialog,'d-none':!dataTreeNavDialog}\"></div>\r\n\r\n<!--     业务数据导航参照窗口 END    -->\r\n"

/***/ }),

/***/ "./src/app/modules/authassign/authassign-view/authassign-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthassignViewComponent", function() { return AuthassignViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authfield_tree_app_index__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auresultgroup_domain_index__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auresultgroup_app_index__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auresultgroup_domain_auresult_service__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/auresult-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_session__ = __webpack_require__("./src/app/modules/authassign/shared/session.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auresultgroup_domain_entities_auresult_entity__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/entities/auresult.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auresultgroup_domain_entities_auth_data_source_entity__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/entities/auth-data-source.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__gsp_sys_rtf_common__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AuthassignViewComponent = /** @class */ (function () {
    function AuthassignViewComponent(viewmodelAuthfield, viewmodelAuresult, route, resultService, resultRepository, currentSession, frameworkService) {
        this.viewmodelAuthfield = viewmodelAuthfield;
        this.viewmodelAuresult = viewmodelAuresult;
        this.route = route;
        this.resultService = resultService;
        this.resultRepository = resultRepository;
        this.currentSession = currentSession;
        this.frameworkService = frameworkService;
        this.expandedKeys = ['ERP'];
        this.dataItems = [];
        // 数据操作变量
        this.checkedKeys = [];
        this.key = 'identiy';
        // 弹出树导航参照窗口
        this.czTreeNavDialog = false;
        this.canEditOp = false;
        this.canAssigAuthorization = new Array();
        // 业务数据变量
        this.canEditData = false;
        this.isAllData = false;
        this.checkedDataKeys = [];
        this.dataTreeNavDialog = false;
        // 业务数据源相关信息
        this.dataKey = ''; // 取数主键列
        this.helpFields = []; // 字段显示名
        this.showFields = []; // 显示的字段
        this.canAssignDatas = []; // 可分配的数据源
        this.authDataSource = new __WEBPACK_IMPORTED_MODULE_11__auresultgroup_domain_entities_auth_data_source_entity__["AuthDataSource"]();
        this.children = function (dataItem) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(dataItem.authOps); };
        this.hasChildren = function (dataItem) { return !!dataItem.authOps; };
    }
    AuthassignViewComponent.prototype.fetchChildren = function (node) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(node.authOps);
    };
    AuthassignViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO:
        // 1、路由应该有统一的封装；
        // 2、无法直接给Command传递参数，所以先将传入的参数写入中间层，再在CommandHandler中获取，过于麻烦；
        // 3、CommandHandler没有返回值，switchMap这种操作符，无法起到应有的作用，所以暂时不用。
        this.route.paramMap.subscribe(function (params) {
            if (params.has('funcid')) {
                _this.funcid = params.get('funcid');
                _this.currentSession.funcId = _this.funcid;
                _this.currentSession.sessionId = _this.frameworkService.getSession(_this.funcid);
                _this.viewmodelAuresult.uiState.action = 'view'; // params.get('action'); // 'view'; // params.get('action');
                _this.currentSession.ownerId = params.get('ownerId'); // 'BE'; // 'BE'; //
                _this.currentSession.ownerType = params.get('type'); // 1; //
            }
        });
        // 采用OpenFunc方式打开 接收参数方式
        // this.route.queryParams.subscribe((params: Params) => {
        //   if (params['funcParam']) {
        //     const paramObj = params['funcParam'];
        //     console.log(paramObj);
        //     this.funcid = paramObj.funcId;
        //     this.currentSession.funcId = this.funcid;
        //     this.currentSession.sessionId = this.frameworkService.getSession(this.funcid);
        //     this.viewmodelAuresult.uiState.action = 'view'; // params.get('action'); // 'view'; // params.get('action');
        //     this.currentSession.ownerId = paramObj.ownerId; // 'BE'; // 'BE'; //
        //     this.currentSession.ownerType = paramObj.type; // 1; //
        //   }
        // });
        // 应该是根据参数传递
        console.log('sessinonId:' + this.currentSession.sessionId);
        console.log('ownerid:' + this.currentSession.ownerId);
        console.log('ownertype:' + this.currentSession.ownerType);
        this.viewmodelAuthfield.bindingData.changes.subscribe(function (changes) {
            console.log('changetype =' + changes.type);
            if (changes.type === __WEBPACK_IMPORTED_MODULE_3__farris_devkit__["ChangeType"].SelectionChanged) {
                return;
            }
            var a = changes;
            _this.dataAuthfield = _this.viewmodelAuthfield.bindingData.list.toJSON();
            console.log(JSON.stringify(_this.dataAuthfield));
            // 第一层直接展开
            _this.dataAuthfield.forEach(function (x) {
                if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(x.FParentID)) {
                    _this.expandedKeys.push(x.FID);
                }
            });
            console.log('第一层展开');
            console.log(_this.expandedKeys);
        });
        this.viewmodelAuresult.bindingData.changes.subscribe(function (changes) {
            console.log('changetypeAuresult =' + changes.type);
            _this.buildAuresult();
            console.log(JSON.stringify(_this.auresults));
            console.log('after changed auresult：');
            _this.BuildResultPanel();
        });
        this.viewmodelAuthfield.formLoad();
    };
    /**************************权限字段----开始------*********************************************/
    // 权限字段切换事件
    AuthassignViewComponent.prototype.handleSelection = function (_a) {
        var dataItem = _a.dataItem;
        if (dataItem.FType === '0') {
            return;
        }
        var field = dataItem.FID;
        // TODO 无法直接给Command传递参数，所以先将传入的参数写入中间层
        this.viewmodelAuthfield.bindingData.list.setCurrentId(field);
        this.currentSession.authField = field;
        this.viewmodelAuresult.currentAuthfield = field;
        this.viewmodelAuresult.loadResultData();
        // TODO 这里应该使用懒加载，
        this.getCanAssignAuthorization(field);
        this.getAuthDataSource(field);
        this.buildAuresult();
        console.log('after load auresult：');
        this.BuildResultPanel();
    };
    AuthassignViewComponent.prototype.buildAuresult = function () {
        // const data = this.viewmodelAuresult.bindingData.list.toJSON().map(row => new AuresultEntity(row));
        // const data = this.viewmodelAuresult.bindingData.list.toJSON();
        // this.auresults.loadEntities(data);
        this.auresults = this.viewmodelAuresult.bindingData.list.toJSON();
    };
    // 可分配的权限操作
    AuthassignViewComponent.prototype.getCanAssignAuthorization = function (authField) {
        this.canAssigAuthorization = this.resultService.getAuthorization(authField);
        console.log('可分配的权限操作');
        console.log(this.canAssigAuthorization);
    };
    // 可分配的业务数据
    AuthassignViewComponent.prototype.getAuthDataSource = function (authField) {
        var _this = this;
        // 可分配的数据源
        this.resultService.getDataSource(authField)
            .subscribe(function (data) {
            _this.authDataSource.data = data.data;
            _this.authDataSource.showFields = data.showFields;
            _this.authDataSource.keyField = data.keyField;
            _this.authDataSource.helpFields = data.helpFields;
            _this.canAssignDatas = _this.authDataSource.data;
            _this.dataKey = _this.authDataSource.keyField;
            _this.helpFields = _this.authDataSource.helpFields;
            _this.showFields = _this.authDataSource.showFields;
            console.log('可分配的业务数据');
            console.log(_this.authDataSource);
            console.log(_this.canAssignDatas);
            console.log(_this.showFields);
        });
    };
    AuthassignViewComponent.prototype.iconClass = function (_a) {
        var FType = _a.FType;
        return {
            'k-i-folder': FType.toString() === '0',
            'k-i-gear': FType.toString() === '1',
            'k-icon': true
        };
    };
    /**************************权限字段----结束------*********************************************/
    // 权限字段变化时，展示权限字段的分配结果
    AuthassignViewComponent.prototype.BuildResultPanel = function () {
        var _this = this;
        this.dataItems = Array();
        this.auresults.forEach(function (result) {
            var item = {
                title: result.groupId, content: result,
                expanded: true
            };
            _this.dataItems.push(item);
        });
    };
    /**************************数据操作事件----开始------*********************************************/
    // TODO 打开数据操作窗口
    AuthassignViewComponent.prototype.openAuthOpDialog = function () {
        // TODO 打开业务操作窗口
    };
    // 查看時，確定按鈕不可用
    AuthassignViewComponent.prototype.getCssOp = function () {
        if (this.canEditOp === true) {
            return 'btn btn-sm  mr-2  btn-primary';
        }
        else {
            return 'btn btn-sm  mr-2';
        }
    };
    // TODO 根据数据操作构造显示的权限数据操作名称
    AuthassignViewComponent.prototype.BuildDisplayAuthops = function (authOps) {
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(authOps)) {
            return null;
        }
        var authopNames = new Array();
        authOps.forEach(function (x) { authopNames.push(x.name); });
        return authopNames;
    };
    // TODO 显示分配的权限对象、权限操作弹出框
    AuthassignViewComponent.prototype.showAuthopsHelp = function (groupId, canEdit) {
        var _this = this;
        this.canEditOp = canEdit;
        this.checkedKeys = [];
        this.czTreeNavDialog = true;
        this.curResultGroup = this.auresults.find(function (x) { return x.groupId === groupId; });
        this.curResultGroup.authorizations.forEach(function (element) {
            // this.checkedKeys.push(element.id + '~' + element.name);
            if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(element.authOps) === false) {
                element.authOps.forEach(function (op) { _this.checkedKeys.push(element.id + '~' + element.name + '~' + op.id + '~' + op.name); });
            }
        });
        this.curResultGroupSelect = this.curResultGroup;
        // TODO 应当记录原被选中的，和最终被选中的进行比对
    };
    // 关闭 权限对象、权限操作弹出框
    AuthassignViewComponent.prototype.closeAuthopsHelp = function () {
        var _this = this;
        this.czTreeNavDialog = false;
        this.curResultGroup.authorizations = [];
        var authArray = [];
        var i = 0;
        // 先获取分配的权限对象
        this.checkedKeys.forEach(function (dataitem) {
            var s = dataitem.split('~');
            if (authArray.length === 0) {
                authArray.push({ id: s[0], name: s[1], authOps: [] });
                i++;
                // 此处 权限对象、数据操作 都是按顺序排列，先权限对象然后数据操作，再权限对象、数据操作，因此此处可以按照下述方式逐一添加权限对象
            }
            else if (!(authArray[i - 1].id === s[0])) {
                authArray.push({ id: s[0], name: s[1], authOps: [] });
                i++;
            }
        });
        // 获取分配的权限对象下的数据操作
        authArray.forEach(function (authorization) {
            var authOps = _this.checkedKeys.filter(function (x) { return x.split('~').length === 4 && x.split('~')[0] === authorization.id; });
            if (!Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(authOps)) {
                authOps.forEach(function (dataitem) {
                    var op = dataitem.split('~');
                    authorization.authOps.push({ id: op[2], name: op[3], parentId: op[0] });
                });
                _this.curResultGroup.authorizations.push(authorization);
            }
        });
        // 手工更新DataStorage
        var entity = this.resultRepository.getEntityById(this.curResultGroup.groupId);
        entity.authorizations = this.curResultGroup.authorizations;
        console.log('closeAuthopsHelp:');
        console.log(entity.authorizations);
    };
    Object.defineProperty(AuthassignViewComponent.prototype, "checkableSettings", {
        // 弹出框 分配的权限对象、权限操作控件特性
        get: function () {
            return {
                checkChildren: true,
                checkParents: true,
                enabled: true,
                mode: 'multiple'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthassignViewComponent.prototype, "selectableSettings", {
        /**************************数据操作事件----结束------*********************************************/
        /**************************业务数据事件----开始------*********************************************/
        // 弹出框 分配的业务数据
        get: function () {
            return {
                checkboxOnly: true,
                mode: 'multiple',
                enabled: true
            };
        },
        enumerable: true,
        configurable: true
    });
    // 查看時，確定按鈕不可用
    AuthassignViewComponent.prototype.getCssData = function () {
        if (this.canEditData === true) {
            return 'btn btn-sm  mr-2  btn-primary';
        }
        else {
            return 'btn btn-sm  mr-2';
        }
    };
    AuthassignViewComponent.prototype.ShowDatasHelp = function (groupId, canEdit) {
        var _this = this;
        //  已经分配的数据自动选中
        this.checkedDataKeys = [];
        this.isAllData = false;
        this.checkedDataKeys.forEach(function (data) { return console.log(data); });
        this.canEditData = canEdit;
        this.curResultGroup = this.auresults.find(function (x) { return x.groupId === groupId; });
        var findAll = this.curResultGroup.datas.find(function (x) { return x.data === '*'; });
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(findAll)) {
            this.curResultGroup.datas.forEach(function (data) {
                _this.checkedDataKeys.push(data.data);
            });
        }
        else {
            this.isAllData = true;
            // TODO  如何搞成 直接选中全部
            this.canAssignDatas.forEach(function (data) {
                _this.checkedDataKeys.push(data.id);
            });
        }
        this.dataTreeNavDialog = true;
    };
    AuthassignViewComponent.prototype.BuildDisplayData = function (data) {
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(data.find(function (x) { return x.data === '*'; }))) {
            return '部分权限';
        }
        return '全部权限';
    };
    AuthassignViewComponent.prototype.closeDataHelp = function () {
        var _this = this;
        this.dataTreeNavDialog = false;
        this.curResultGroup.datas = [];
        if (this.isAllData) {
            var bizdataDto = new __WEBPACK_IMPORTED_MODULE_10__auresultgroup_domain_entities_auresult_entity__["BizDataDTO"]();
            bizdataDto.data = '*';
            this.curResultGroup.datas.push(bizdataDto);
        }
        else {
            // 获取分配的业务数据，TODO  assid1
            this.checkedDataKeys.forEach(function (dataitem) {
                var bizdataDto = new __WEBPACK_IMPORTED_MODULE_10__auresultgroup_domain_entities_auresult_entity__["BizDataDTO"]();
                bizdataDto.data = dataitem;
                _this.curResultGroup.datas.push(bizdataDto);
            });
        }
        // 手工更新DataStorage
        var entity = this.resultRepository.getEntityById(this.curResultGroup.groupId);
        entity.datas = this.curResultGroup.datas;
    };
    AuthassignViewComponent.prototype.checkClick = function () {
        var _this = this;
        this.isAllData = !this.isAllData;
        if (this.isAllData) {
            // TODO  如何搞成 直接选中全部
            this.canAssignDatas.forEach(function (data) {
                _this.checkedDataKeys.push(data.id);
            });
        }
        else {
            this.checkedDataKeys = [];
        }
    };
    AuthassignViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-authassign-view',
            template: __webpack_require__("./src/app/modules/authassign/authassign-view/authassign-view.component.html"),
            styles: [__webpack_require__("./src/app/modules/authassign/authassign-view/authassign-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authfield_tree_app_index__["AuthfieldTreeViewmodel"],
            __WEBPACK_IMPORTED_MODULE_5__auresultgroup_app_index__["AuresultViewmodel"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_7__auresultgroup_domain_auresult_service__["AuresultService"],
            __WEBPACK_IMPORTED_MODULE_4__auresultgroup_domain_index__["AuresultRepository"],
            __WEBPACK_IMPORTED_MODULE_9__shared_session__["AuthassignSession"],
            __WEBPACK_IMPORTED_MODULE_12__gsp_sys_rtf_common__["FrameworkService"]])
    ], AuthassignViewComponent);
    return AuthassignViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/authassign/authassign.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthassignModule", function() { return AuthassignModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authassign_view_authassign_view_component__ = __webpack_require__("./src/app/modules/authassign/authassign-view/authassign-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authassign_routing_module__ = __webpack_require__("./src/app/modules/authassign/authassign.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authfield_tree_domain_index__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__authfield_tree_app_index__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auresultgroup_domain_index__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auresultgroup_app_index__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_session__ = __webpack_require__("./src/app/modules/authassign/shared/session.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AuthassignModule = /** @class */ (function () {
    function AuthassignModule() {
    }
    AuthassignModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_9__authassign_routing_module__["AuthassignRoutingModule"],
                __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_6__farris_devkit__["CommandModule"].setup(__WEBPACK_IMPORTED_MODULE_11__authfield_tree_app_index__["AuthfieldCommandHandlers"], []),
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_layout__["LayoutModule"]
            ],
            entryComponents: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__authassign_view_authassign_view_component__["AuthassignViewComponent"]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__authfield_tree_domain_index__["AuthfieldDOMAIN_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_11__authfield_tree_app_index__["AuthfieldTreeAPP_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_12__auresultgroup_domain_index__["AuresultDOMAIN_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_13__auresultgroup_app_index__["AuresultAPP_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_11__authfield_tree_app_index__["AuthfieldCommandHandlers"],
                __WEBPACK_IMPORTED_MODULE_6__farris_devkit__["RestfulService"],
                __WEBPACK_IMPORTED_MODULE_14__shared_session__["AuthassignSession"]
            ]
        })
    ], AuthassignModule);
    return AuthassignModule;
}());

//# sourceMappingURL=authassign.module.js.map

/***/ }),

/***/ "./src/app/modules/authassign/authassign.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthassignRoutingModule", function() { return AuthassignRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authassign_view_authassign_view_component__ = __webpack_require__("./src/app/modules/authassign/authassign-view/authassign-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__authassign_view_authassign_view_component__["AuthassignViewComponent"] }
];
var AuthassignRoutingModule = /** @class */ (function () {
    function AuthassignRoutingModule() {
    }
    AuthassignRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], AuthassignRoutingModule);
    return AuthassignRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/authassign/authfield-tree/app/authfield-tree-bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldTreeBindingdata", function() { return AuthfieldTreeBindingdata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_index__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/domain/index.ts");
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



var AuthfieldTreeBindingdata = /** @class */ (function (_super) {
    __extends(AuthfieldTreeBindingdata, _super);
    function AuthfieldTreeBindingdata(injector) {
        return _super.call(this, injector) || this;
    }
    AuthfieldTreeBindingdata = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_2__domain_index__["AuthfieldEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain_index__["AuthfieldTreeRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuthfieldTreeBindingdata);
    return AuthfieldTreeBindingdata;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/authassign/authfield-tree/app/authfield-tree-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldTreeForm", function() { return AuthfieldTreeForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authfield_tree_bindingdata__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/app/authfield-tree-bindingdata.ts");
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




var AuthfieldTreeForm = /** @class */ (function (_super) {
    __extends(AuthfieldTreeForm, _super);
    function AuthfieldTreeForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'Id',
            binding: 'FID'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthfieldTreeForm.prototype, "Id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'code',
            binding: 'FCode'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthfieldTreeForm.prototype, "Code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'name',
            binding: 'FName'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthfieldTreeForm.prototype, "Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'type',
            binding: 'FType'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthfieldTreeForm.prototype, "Type", void 0);
    AuthfieldTreeForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__authfield_tree_bindingdata__["AuthfieldTreeBindingdata"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuthfieldTreeForm);
    return AuthfieldTreeForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/authassign/authfield-tree/app/authfield-tree.viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldTreeViewmodel", function() { return AuthfieldTreeViewmodel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authfield_tree_bindingdata__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/app/authfield-tree-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authfield_tree_form__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/app/authfield-tree-form.ts");
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




//  import { AuthfieldTreeStatemachine } from './authfield-tree-statemachine';
//  import { AuthfieldTreeUistate} from './authfield-tree-uistate';
/**
 * 视图模型
 */
var AuthfieldTreeViewmodel = /** @class */ (function (_super) {
    __extends(AuthfieldTreeViewmodel, _super);
    //  public uiState: AuthfieldTreeUistate;
    /**
     * 构造函数
     */
    function AuthfieldTreeViewmodel(injector) {
        return _super.call(this, injector) || this;
        //  this.uiState = this.injector.get(AuthfieldTreeUistate);
    }
    /**
     * 表单加载
     */
    AuthfieldTreeViewmodel.prototype.formLoad = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'formLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AuthfieldTreeViewmodel.prototype, "formLoad", null);
    AuthfieldTreeViewmodel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__authfield_tree_bindingdata__["AuthfieldTreeBindingdata"],
            form: __WEBPACK_IMPORTED_MODULE_3__authfield_tree_form__["AuthfieldTreeForm"]
            // stateMachine: AuthfieldTreeStatemachine,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuthfieldTreeViewmodel);
    return AuthfieldTreeViewmodel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/authassign/authfield-tree/app/handler/authfield-tree-load.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldLoadHandler", function() { return AuthfieldLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_index__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/domain/index.ts");
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



// import { AuthfieldTreeUistate } from '../../app/authfield-tree-uistate';
// import { AuthfieldTreeStatemachine } from '../../app/authfield-tree-statemachine';
var AuthfieldLoadHandler = /** @class */ (function (_super) {
    __extends(AuthfieldLoadHandler, _super);
    function AuthfieldLoadHandler(dataService
        // private uiState: AuthfieldTreeUistate,
        // private stateMachine: AuthfieldTreeStatemachine
    ) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        return _this;
    }
    AuthfieldLoadHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('loadData', function () {
            // this.uiState.action = 'load';
            _this.dataService.getdata();
        });
    };
    AuthfieldLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'formLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_index__["AuthfieldService"]
            // private uiState: AuthfieldTreeUistate,
            // private stateMachine: AuthfieldTreeStatemachine
        ])
    ], AuthfieldLoadHandler);
    return AuthfieldLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/authassign/authfield-tree/app/handler/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldCommandHandlers", function() { return AuthfieldCommandHandlers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authfield_tree_load_handler__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/app/handler/authfield-tree-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auresultgroup_app_handler_load_handler__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/handler/load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auresultgroup_app_handler_add_handler__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/handler/add.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auresultgroup_app_handler_edit_handler__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/handler/edit.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auresultgroup_app_handler_save_handler__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/handler/save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auresultgroup_app_handler_close_handler__ = __webpack_require__("./src/app/modules/authassign/auresultgroup/app/handler/close.handler.ts");






var AuthfieldCommandHandlers = [
    __WEBPACK_IMPORTED_MODULE_0__authfield_tree_load_handler__["AuthfieldLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_1__auresultgroup_app_handler_load_handler__["AuresultLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_2__auresultgroup_app_handler_add_handler__["AuresultAddHandler"],
    __WEBPACK_IMPORTED_MODULE_3__auresultgroup_app_handler_edit_handler__["AuresultEditHandler"],
    __WEBPACK_IMPORTED_MODULE_4__auresultgroup_app_handler_save_handler__["AuresultSaveHandler"],
    __WEBPACK_IMPORTED_MODULE_5__auresultgroup_app_handler_close_handler__["CloseHandler"]
];



/***/ }),

/***/ "./src/app/modules/authassign/authfield-tree/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldTreeAPP_PROVIDERS", function() { return AuthfieldTreeAPP_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authfield_tree_bindingdata__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/app/authfield-tree-bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authfield_tree_form__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/app/authfield-tree-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authfield_tree_viewmodel__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/app/authfield-tree.viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handler_index__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/app/handler/index.ts");
/* unused harmony reexport AuthfieldTreeBindingdata */
/* unused harmony reexport AuthfieldTreeForm */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldTreeViewmodel", function() { return __WEBPACK_IMPORTED_MODULE_2__authfield_tree_viewmodel__["AuthfieldTreeViewmodel"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldCommandHandlers", function() { return __WEBPACK_IMPORTED_MODULE_3__handler_index__["AuthfieldCommandHandlers"]; });


// import { AuthfieldTreeStatemachine } from './authfield-tree-statemachine';

// import { AuthfieldTreeUistate } from './authfield-tree-uistate';

var AuthfieldTreeAPP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__authfield_tree_bindingdata__["AuthfieldTreeBindingdata"],
    __WEBPACK_IMPORTED_MODULE_1__authfield_tree_form__["AuthfieldTreeForm"],
    // AuthfieldTreeUistate,
    __WEBPACK_IMPORTED_MODULE_2__authfield_tree_viewmodel__["AuthfieldTreeViewmodel"]
    // AuthfieldTreeStatemachine
];



/***/ }),

/***/ "./src/app/modules/authassign/authfield-tree/domain/authfield-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldService", function() { return AuthfieldService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authfield_tree_datastorage__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/domain/authfield-tree-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_session__ = __webpack_require__("./src/app/modules/authassign/shared/session.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthfieldService = /** @class */ (function () {
    function AuthfieldService(rest, dataStorage, session) {
        this.rest = rest;
        this.dataStorage = dataStorage;
        this.session = session;
    }
    AuthfieldService.prototype.getdata = function () {
        var _this = this;
        var headers = this.session.getHeader();
        var url = this.session.getAuthFieldPath();
        this.rest.get(url, null, headers).subscribe(function (res) {
            console.log(res);
            if (res instanceof Array) {
                res.forEach(function (item) {
                    if (item.parentId === '') {
                        item.parentId = undefined;
                    }
                });
                _this.dataStorage.load(res);
            }
            else {
                if (res.parentId === '') {
                    res.parentId = undefined;
                }
                _this.dataStorage.load([res]);
            }
        });
    };
    AuthfieldService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_1__authfield_tree_datastorage__["AuthFieldTreeDatastorage"],
            __WEBPACK_IMPORTED_MODULE_3__shared_session__["AuthassignSession"]])
    ], AuthfieldService);
    return AuthfieldService;
}());



/***/ }),

/***/ "./src/app/modules/authassign/authfield-tree/domain/authfield-tree-datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldTreeDatastorage", function() { return AuthFieldTreeDatastorage; });
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


var AuthFieldTreeDatastorage = /** @class */ (function (_super) {
    __extends(AuthFieldTreeDatastorage, _super);
    function AuthFieldTreeDatastorage() {
        return _super.call(this) || this;
    }
    AuthFieldTreeDatastorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthFieldTreeDatastorage);
    return AuthFieldTreeDatastorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/authassign/authfield-tree/domain/authfield-tree-repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldTreeRepository", function() { return AuthfieldTreeRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authfield_tree_datastorage__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/domain/authfield-tree-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_authfield_entity__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/domain/entities/authfield.entity.ts");
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




var AuthfieldTreeRepository = /** @class */ (function (_super) {
    __extends(AuthfieldTreeRepository, _super);
    function AuthfieldTreeRepository(injector) {
        return _super.call(this, injector) || this;
    }
    AuthfieldTreeRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_2__authfield_tree_datastorage__["AuthFieldTreeDatastorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_3__entities_authfield_entity__["AuthfieldEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuthfieldTreeRepository);
    return AuthfieldTreeRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/authassign/authfield-tree/domain/entities/authfield.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldEntity", function() { return AuthfieldEntity; });
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
 * 权限字段实体
 */
var AuthfieldEntity = /** @class */ (function (_super) {
    __extends(AuthfieldEntity, _super);
    function AuthfieldEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'id',
            primary: true
        }),
        __metadata("design:type", String)
    ], AuthfieldEntity.prototype, "FID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'code'
        }),
        __metadata("design:type", String)
    ], AuthfieldEntity.prototype, "FCode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'name'
        }),
        __metadata("design:type", String)
    ], AuthfieldEntity.prototype, "FName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'type'
        }),
        __metadata("design:type", String)
    ], AuthfieldEntity.prototype, "FType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            dataField: 'parentId',
        }),
        __metadata("design:type", String)
    ], AuthfieldEntity.prototype, "FParentID", void 0);
    return AuthfieldEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/authassign/authfield-tree/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldDOMAIN_PROVIDERS", function() { return AuthfieldDOMAIN_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authfield_tree_datastorage__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/domain/authfield-tree-datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authfield_service__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/domain/authfield-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authfield_tree_repository__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/domain/authfield-tree-repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_authfield_entity__ = __webpack_require__("./src/app/modules/authassign/authfield-tree/domain/entities/authfield.entity.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldEntity", function() { return __WEBPACK_IMPORTED_MODULE_3__entities_authfield_entity__["AuthfieldEntity"]; });
/* unused harmony reexport AuthFieldTreeDatastorage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldService", function() { return __WEBPACK_IMPORTED_MODULE_1__authfield_service__["AuthfieldService"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthfieldTreeRepository", function() { return __WEBPACK_IMPORTED_MODULE_2__authfield_tree_repository__["AuthfieldTreeRepository"]; });




var AuthfieldDOMAIN_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__authfield_tree_datastorage__["AuthFieldTreeDatastorage"],
    __WEBPACK_IMPORTED_MODULE_1__authfield_service__["AuthfieldService"],
    __WEBPACK_IMPORTED_MODULE_2__authfield_tree_repository__["AuthfieldTreeRepository"]
];



/***/ }),

/***/ "./src/app/modules/authassign/shared/session.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthassignSession", function() { return AuthassignSession; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthassignSession = /** @class */ (function () {
    function AuthassignSession() {
        // 增加的分组  TODO Farris框架暂不支持 新增和删除集合，暂时这么处理
        this.addGroupIds = new Array();
        // 删除的分组  TODO Farris框架暂不支持 新增和删除集合，暂时这么处理
        this.delGroupIds = new Array();
    }
    /**
   * 获取岗位维护当前模块的路由地址
   */
    AuthassignSession.prototype.getPositionManagerRouter = function () {
        // user-manager是在数据库里配置的
        var frameWorkUrl = '/main/position-manager/' + this.funcId + '/positions';
        return frameWorkUrl;
    };
    /**
    * 权限分配结果路径
    */
    AuthassignSession.prototype.getResultPath = function () {
        var path = "/api/runtime/sys/v1.0/assignresults";
        return path;
    };
    /**
    * 权限字段路径
    */
    AuthassignSession.prototype.getAuthFieldPath = function () {
        var path = "/api/runtime/sys/v1.0/authFields";
        return path;
    };
    /**
    * 权限对象路径
    */
    AuthassignSession.prototype.getAuthorizationPath = function () {
        var path = "/api/runtime/sys/v1.0/authorizations";
        return path;
    };
    /**
     * 构造Header
     */
    AuthassignSession.prototype.getHeader = function () {
        // 测试用 session写死
        // const headers = new HttpHeaders().set('SessionId', '26715fcc-862f-4f5d-ac6b-38e8ff0d0a7e');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]().set('SessionId', this.sessionId);
        return { headers: headers };
    };
    /**
     * 获取上下文中的用户
     */
    AuthassignSession.prototype.getCurrentUserId = function () {
        // 测试用写死
        return 'lilitr';
    };
    AuthassignSession = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AuthassignSession);
    return AuthassignSession;
}());



/***/ })

},[],["angular","farris","rtf","progress","rxjs"],["angular","farris","rtf","progress","rxjs"]);
//# sourceMappingURL=authassign.module.chunk.js.map