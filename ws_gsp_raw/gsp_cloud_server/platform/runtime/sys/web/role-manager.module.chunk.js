webpackJsonp(["role-manager.module"],{

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

/***/ "./src/app/modules/common/entity/result-package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPackage", function() { return ResultPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultPackage = /** @class */ (function () {
    function ResultPackage() {
        this.removingResults = new Array();
        this.addingResults = new Array();
    }
    ResultPackage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
        /**二元关系实体增量包 */
        ,
        __metadata("design:paramtypes", [])
    ], ResultPackage);
    return ResultPackage;
}());



/***/ }),

/***/ "./src/app/modules/common/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_result_package__ = __webpack_require__("./src/app/modules/common/entity/result-package.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SysManagerUtil", function() { return __WEBPACK_IMPORTED_MODULE_0__util_sys_manager_util__["SysManagerUtil"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPackage", function() { return __WEBPACK_IMPORTED_MODULE_1__entity_result_package__["ResultPackage"]; });

// import { GSPPositionEntity } from './entity/gspposition.entity';




/***/ }),

/***/ "./src/app/modules/common/util/sys-manager-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysManagerUtil", function() { return SysManagerUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__);
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
 * 系统管理相关session、webapi等公用方法
 */
var SysManagerUtil = /** @class */ (function () {
    function SysManagerUtil(sessionCache) {
        this.sessionCache = sessionCache;
        this.isView = false;
        var apiPath = '/api/runtime/sys/v1.0';
        this.userWebApi = apiPath + '/users';
        this.userPositionWebApi = apiPath + '/user-position';
        this.sysOrgWebApi = apiPath + '/sysOrgs';
        this.positionWebApi = apiPath + '/positions';
        this.roleWebApi = apiPath + '/roles';
        this.positionRoleWebApi = apiPath + '/position-role';
        this.operationWebApi = apiPath + '/funcOperations';
    }
    /**
     * 获取用户维护当前模块的路由地址
     */
    SysManagerUtil.prototype.getUserManageRouter = function () {
        // user-manager是在数据库里配置的
        var frameWorkUrl = '/main/user-manager/' + this.funcId + '/users';
        return frameWorkUrl;
    };
    /**
     * 获取岗位维护当前模块的路由地址
     */
    SysManagerUtil.prototype.getPositionManagerRouter = function () {
        // user-manager是在数据库里配置的
        var frameWorkUrl = '/main/position-manager/' + this.funcId + '/positions';
        return frameWorkUrl;
    };
    SysManagerUtil.prototype.getRoleManagerRouter = function () {
        var frameWorkUrl = '/main/role-manager/' + this.funcId + '/';
        return frameWorkUrl;
    };
    /**
     * 构造Header
     */
    SysManagerUtil.prototype.getHeader = function () {
        this.sessionId = this.getSessionId();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]().set('SessionId', this.sessionId);
        // 此处key必须是headers
        return { headers: headers };
    };
    /**
     * 获取当前用户的sessionId
     */
    SysManagerUtil.prototype.getSessionId = function () {
        return this.sessionCache.get('session');
    };
    /**Guid生成 */
    SysManagerUtil.prototype.getGuid36 = function () {
        function S4() {
            // tslint:disable-next-line:no-bitwise
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
    };
    SysManagerUtil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__gsp_sys_rtf_common__["CacheService"]])
    ], SysManagerUtil);
    return SysManagerUtil;
}());



/***/ }),

/***/ "./src/app/modules/rolemanager/funcoperation/assign-funcop/assign-funcop.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/rolemanager/funcoperation/assign-funcop/assign-funcop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex g-main\">\r\n  <div class=\"col\">\r\n    <div class=\"d-flex flex-row  g-main px-1\" style=\"overflow:hidden;\">\r\n      <div class=\"col\">\r\n        <div class=\"d-flex flex-column g-main\">\r\n          <!--工具栏了 BEGIN-->\r\n          <div class=\"pt-2 mb-2\">\r\n            <div class=\"row pt-2 mb-2\">\r\n              <div class=\"col-sm-12 col-md-3\">\r\n                <h1 class=\"h4 d-inline-block\">分配功能权限</h1>\r\n              </div>\r\n              <div class=\"col-sm-12 col-md-9\">\r\n                <div class=\"pr-2 text-right\">\r\n                  <button type=\"button\" (click)=\"save()\" class=\"btn btn-sm btn-default\">保存 </button>\r\n                  <button type=\"button\" (click)=\"close()\" class=\"btn btn-sm btn-default mr-1\">关闭</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--工具栏 END-->\r\n          <div class=\"flex-auto\" style=\"overflow-y:auto;\">\r\n            <!--表体 BEGIN-->\r\n            <ng-container>\r\n              <kendo-tabstrip>\r\n                <kendo-tabstrip-tab [title]=\"'通过功能操作分配'\" [selected]=\"true\">\r\n                  <ng-template kendoTabContent>\r\n                    <kendo-treeview style=\"width:100%;height:100%\" [nodes]=\"opsLoadData\" textField=\"name\"\r\n                      kendoTreeViewExpandable kendoTreeViewFlatDataBinding idField=\"id\" parentIdField=\"parentId\"\r\n                      (selectionChange)=\"handleSelection($event)\" [(checkedKeys)]=\"checkedKeys\" [checkBy]=\"'id'\"\r\n                      [kendoTreeViewCheckable]=\"checkableSettings\"  [(expandedKeys)]=\"expandedKeys\"   [expandBy]=\"'id'\"> \r\n                      <ng-template kendoTreeViewNodeTemplate let-dataItem>\r\n                        <span [ngClass]=\"iconClass(dataItem)\"></span>\r\n                        {{dataItem.name}}\r\n                      </ng-template>\r\n                    </kendo-treeview>\r\n                  </ng-template>\r\n                </kendo-tabstrip-tab>\r\n              \r\n                <kendo-tabstrip-tab [title]=\"'通过菜单分配'\">\r\n                  <ng-template kendoTabContent>\r\n                       <h3>待实现</h3>\r\n                  </ng-template>\r\n                </kendo-tabstrip-tab>\r\n                <kendo-tabstrip-tab [title]=\"'通过WebAPI分配'\">\r\n                  <ng-template kendoTabContent>\r\n                       <h3>待实现</h3>\r\n                  </ng-template>\r\n                </kendo-tabstrip-tab>\r\n              </kendo-tabstrip>\r\n            </ng-container>\r\n            <!--表体 END-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/rolemanager/funcoperation/assign-funcop/assign-funcop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignFuncopComponent", function() { return AssignFuncopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entity_result_package__ = __webpack_require__("./src/app/modules/rolemanager/funcoperation/entity/result-package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_funcoperation_service__ = __webpack_require__("./src/app/modules/rolemanager/funcoperation/service/funcoperation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__("./src/app/modules/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AssignFuncopComponent = /** @class */ (function () {
    function AssignFuncopComponent(funcopService, route, router, sessionmanager) {
        this.funcopService = funcopService;
        this.route = route;
        this.router = router;
        this.sessionmanager = sessionmanager;
        this.checkedKeys = [];
        this.expandedKeys = ['ERP'];
        this.opsHasAssigned = [];
        this.children = function (dataItem) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(dataItem.children); };
        this.hasChildren = function (dataItem) { return !!dataItem.children && dataItem.children.length > 0; };
    }
    AssignFuncopComponent.prototype.fetchChildren = function (node) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(node.children);
    };
    AssignFuncopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.roleId = params.get('id');
        });
        this.funcopService.getFuncopsByRoleId(this.roleId).subscribe(function (data) {
            data.map(function (x) {
                _this.checkedKeys.push(x);
                _this.opsHasAssigned.push(x);
            });
        });
        this.funcopService.getFuncoperations().subscribe(function (data) {
            _this.opsLoadData = data;
            console.log('opsLoadData');
            console.log(_this.opsLoadData);
            // 第一层直接展开
            _this.opsLoadData.forEach(function (x) {
                if (Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(x.parentId)) {
                    _this.expandedKeys.push(x.id);
                }
            });
        });
        // this.opsLoadData = this.funcopService.getFuncoperations();
    };
    Object.defineProperty(AssignFuncopComponent.prototype, "checkableSettings", {
        // 弹出框 分配的功能操作控件特性
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
    // 弹出框 分配的功能操作控件图标样式
    AssignFuncopComponent.prototype.iconClass = function (_a) {
        var type = _a.type;
        return {
            'k-i-folder': type.toString() !== '1',
            'k-i-gear': type.toString() === '1',
            'k-icon': true
        };
    };
    AssignFuncopComponent.prototype.save = function () {
        var _this = this;
        var obj = new __WEBPACK_IMPORTED_MODULE_4__entity_result_package__["ResultPackage"]();
        obj.removingResults = this.opsHasAssigned.filter(function (item) { return _this.checkedKeys.indexOf(item) < 0; });
        obj.addingResults = this.checkedKeys.filter(function (item) { return _this.opsHasAssigned.indexOf(item) < 0; });
        obj.ownerId = this.roleId;
        this.funcopService.saveFuncopPermission(obj);
        this.opsHasAssigned = [];
        this.checkedKeys.map(function (x) { return _this.opsHasAssigned.push(x); });
    };
    AssignFuncopComponent.prototype.close = function () {
        this.router.navigate([this.sessionmanager.getRoleManagerRouter(), 'roles']);
    };
    AssignFuncopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-assign-funcop',
            template: __webpack_require__("./src/app/modules/rolemanager/funcoperation/assign-funcop/assign-funcop.component.html"),
            styles: [__webpack_require__("./src/app/modules/rolemanager/funcoperation/assign-funcop/assign-funcop.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__service_funcoperation_service__["FuncOperationService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_6__common__["SysManagerUtil"]])
    ], AssignFuncopComponent);
    return AssignFuncopComponent;
}());



/***/ }),

/***/ "./src/app/modules/rolemanager/funcoperation/entity/result-package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPackage", function() { return ResultPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultPackage = /** @class */ (function () {
    function ResultPackage() {
        this.removingResults = new Array();
        this.addingResults = new Array();
    }
    ResultPackage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
        /**二元关系实体增量包 */
        ,
        __metadata("design:paramtypes", [])
    ], ResultPackage);
    return ResultPackage;
}());



/***/ }),

/***/ "./src/app/modules/rolemanager/funcoperation/service/funcoperation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncOperationService", function() { return FuncOperationService; });
/* unused harmony export testDataFuncOperation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__("./src/app/modules/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuncOperationService = /** @class */ (function () {
    function FuncOperationService(rest, sessionmanager) {
        this.rest = rest;
        this.sessionmanager = sessionmanager;
    }
    FuncOperationService.prototype.getFuncoperations = function () {
        var url = '/api/runtime/sys/v1.0/FuncOperations/all';
        var datas = new Array();
        return this.rest.get(url, null, this.sessionmanager.getHeader()).map(function (res) {
            datas = res;
            datas.forEach(function (data) {
                if (data.parentId === '' || Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(data.parentId)) {
                    data.parentId = undefined;
                }
            });
            return datas;
        });
    };
    // 获取功能组分配的功能操作
    FuncOperationService.prototype.getFuncopsByRoleId = function (roleId) {
        var url = '/api/runtime/sys/v1.0/Role-Operation/operationIds/role/' + roleId;
        return this.rest.get(url, null, this.sessionmanager.getHeader()).map(function (res) {
            return res;
        });
    };
    /**修改用功能组分配的功能操作 */
    FuncOperationService.prototype.saveFuncopPermission = function (body) {
        var url = '/api/runtime/sys/v1.0/Role-Operation/role';
        var headers = this.sessionmanager.getHeader();
        //   const queryParams = {
        //     subjectType: 'role',
        //     objectType: 'operation'
        // };
        console.log(body);
        this.rest.post(url, body, null, headers).subscribe();
        alert('保存成功');
    };
    FuncOperationService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(result);
        };
    };
    FuncOperationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_4__common__["SysManagerUtil"]])
    ], FuncOperationService);
    return FuncOperationService;
}());

// 功能操作
var testDataFuncOperation = [
    {
        'id': 'ERP',
        'code': 'ERP',
        'name': 'ERP',
        'type': 0,
        'parentId': undefined,
        'sortOrder': 0
    },
    {
        'id': 'queryBE',
        'code': 'queryBE',
        'name': '查询',
        'type': 1,
        'parentId': 'ERP',
        'sortOrder': 0
    },
    {
        'id': 'editBE',
        'code': 'editBE',
        'name': '编辑',
        'type': 1,
        'parentId': 'ERP',
        'sortOrder': 1
    }
];


/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/app/handler/close.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseHandler", function() { return CloseHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__("./src/app/modules/common/index.ts");
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
    function CloseHandler(sessionmanager, router) {
        var _this = _super.call(this) || this;
        _this.sessionmanager = sessionmanager;
        _this.router = router;
        return _this;
    }
    CloseHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('close', function () {
            _this.router.navigate([_this.sessionmanager.getRoleManagerRouter(), 'roles']);
        });
    };
    CloseHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommandHandler"])({
            commandName: 'close'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__common__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], CloseHandler);
    return CloseHandler;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/app/handler/form-load.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoadHandler", function() { return FormLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_index__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_detail_statemachine__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__role_detail_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.uistate.ts");
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





var FormLoadHandler = /** @class */ (function (_super) {
    __extends(FormLoadHandler, _super);
    function FormLoadHandler(dataService, uiState, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        return _this;
    }
    FormLoadHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('loadData', function () {
            var dataId = _this.uiState.dataId;
            if (dataId === 'new') {
                _this.stateMachine['add']();
                _this.dataService.loadNewData();
            }
            else {
                _this.stateMachine['edit']();
                _this.dataService.loadData(dataId);
            }
        });
    };
    FormLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'formLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_index__["FuncgroupDataService"],
            __WEBPACK_IMPORTED_MODULE_4__role_detail_uistate__["GSPRoleDetailUIState"],
            __WEBPACK_IMPORTED_MODULE_3__role_detail_statemachine__["FuncgroupStateMachine"]])
    ], FormLoadHandler);
    return FormLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/app/handler/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export commandHandlers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_load_handler__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/handler/form-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__save_handler__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/handler/save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__close_handler__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/handler/close.handler.ts");



var commandHandlers = [
    __WEBPACK_IMPORTED_MODULE_0__form_load_handler__["FormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_1__save_handler__["SaveHandler"],
    __WEBPACK_IMPORTED_MODULE_2__close_handler__["CloseHandler"]
];



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/app/handler/save.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveHandler", function() { return SaveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_role_detail_dataservice__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/domain/role-detail.dataservice.ts");
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



var SaveHandler = /** @class */ (function (_super) {
    __extends(SaveHandler, _super);
    function SaveHandler(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        return _this;
    }
    SaveHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('save', function () {
            _this.dataService.save();
        });
    };
    SaveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'save'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_role_detail_dataservice__["FuncgroupDataService"]])
    ], SaveHandler);
    return SaveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_PROVIDERS", function() { return APP_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__role_detail_bindingdata__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__role_detail_form__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_detail_statemachine__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_detail_viewmodel__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__role_detail_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handler_index__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/handler/index.ts");
/* unused harmony reexport FuncgroupBindingData */
/* unused harmony reexport BaseinfoForm */
/* unused harmony reexport LimitinfoForm */
/* unused harmony reexport AuthorizationForm */
/* unused harmony reexport FuncgroupStateMachine */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupViewModel", function() { return __WEBPACK_IMPORTED_MODULE_3__role_detail_viewmodel__["FuncgroupViewModel"]; });
/* unused harmony reexport GSPRoleDetailUIState */
/* unused harmony reexport commandHandlers */






var APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__role_detail_bindingdata__["FuncgroupBindingData"],
    __WEBPACK_IMPORTED_MODULE_1__role_detail_form__["BaseinfoForm"], __WEBPACK_IMPORTED_MODULE_1__role_detail_form__["LimitinfoForm"], __WEBPACK_IMPORTED_MODULE_1__role_detail_form__["AuthorizationForm"],
    __WEBPACK_IMPORTED_MODULE_2__role_detail_statemachine__["FuncgroupStateMachine"],
    __WEBPACK_IMPORTED_MODULE_3__role_detail_viewmodel__["FuncgroupViewModel"],
    __WEBPACK_IMPORTED_MODULE_4__role_detail_uistate__["GSPRoleDetailUIState"],
];



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/app/role-detail.bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupBindingData", function() { return FuncgroupBindingData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_index__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/domain/index.ts");
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



var FuncgroupBindingData = /** @class */ (function (_super) {
    __extends(FuncgroupBindingData, _super);
    function FuncgroupBindingData(injector) {
        return _super.call(this, injector) || this;
    }
    FuncgroupBindingData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_2__domain_index__["GSPRoleEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain_index__["FuncgroupRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FuncgroupBindingData);
    return FuncgroupBindingData;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/app/role-detail.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseinfoForm", function() { return BaseinfoForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitinfoForm", function() { return LimitinfoForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationForm", function() { return AuthorizationForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_detail_bindingdata__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.bindingdata.ts");
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




var BaseinfoForm = /** @class */ (function (_super) {
    __extends(BaseinfoForm, _super);
    function BaseinfoForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'id',
            binding: 'id'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BaseinfoForm.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'code',
            binding: 'code'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BaseinfoForm.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'name',
            binding: 'name'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BaseinfoForm.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'roleGroup',
            binding: 'roleGroup'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BaseinfoForm.prototype, "roleGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'note',
            binding: 'note'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BaseinfoForm.prototype, "note", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'validFrom',
            binding: 'validFrom'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BaseinfoForm.prototype, "validFrom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'validTo',
            binding: 'validTo'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BaseinfoForm.prototype, "validTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'state',
            binding: 'state'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], BaseinfoForm.prototype, "state", void 0);
    BaseinfoForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__role_detail_bindingdata__["FuncgroupBindingData"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], BaseinfoForm);
    return BaseinfoForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));
var LimitinfoForm = /** @class */ (function (_super) {
    __extends(LimitinfoForm, _super);
    function LimitinfoForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'isstop',
            binding: 'Isstop'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], LimitinfoForm.prototype, "isstop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'isnolimit',
            binding: 'Isnolimit'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], LimitinfoForm.prototype, "isnolimit", void 0);
    LimitinfoForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__role_detail_bindingdata__["FuncgroupBindingData"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], LimitinfoForm);
    return LimitinfoForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));
var AuthorizationForm = /** @class */ (function (_super) {
    __extends(AuthorizationForm, _super);
    function AuthorizationForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'id',
            binding: 'Id'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthorizationForm.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'code',
            binding: 'Code'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthorizationForm.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'name',
            binding: 'Name'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], AuthorizationForm.prototype, "name", void 0);
    AuthorizationForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__role_detail_bindingdata__["FuncgroupBindingData"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuthorizationForm);
    return AuthorizationForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/app/role-detail.statemachine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupStateMachine", function() { return FuncgroupStateMachine; });
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


var FuncgroupStateMachine = /** @class */ (function (_super) {
    __extends(FuncgroupStateMachine, _super);
    function FuncgroupStateMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])({ initialState: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], FuncgroupStateMachine.prototype, "viewState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], FuncgroupStateMachine.prototype, "addState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], FuncgroupStateMachine.prototype, "editState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], FuncgroupStateMachine.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], FuncgroupStateMachine.prototype, "canEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], FuncgroupStateMachine.prototype, "canCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], FuncgroupStateMachine.prototype, "canSave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'addState' || context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], FuncgroupStateMachine.prototype, "canInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'addState' }),
        __metadata("design:type", Function)
    ], FuncgroupStateMachine.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], FuncgroupStateMachine.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'viewState' }),
        __metadata("design:type", Function)
    ], FuncgroupStateMachine.prototype, "view", void 0);
    FuncgroupStateMachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgStatemachine"])()
    ], FuncgroupStateMachine);
    return FuncgroupStateMachine;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["StateMachine"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/app/role-detail.uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPRoleDetailUIState", function() { return GSPRoleDetailUIState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**功能组相关UI状态 */
var GSPRoleDetailUIState = /** @class */ (function () {
    function GSPRoleDetailUIState() {
        /**是否需要保存岗位和功能组 */
        this.needSavePosRole = false;
    }
    GSPRoleDetailUIState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GSPRoleDetailUIState);
    return GSPRoleDetailUIState;
}());



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/app/role-detail.viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupViewModel", function() { return FuncgroupViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_detail_bindingdata__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_detail_form__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__role_detail_statemachine__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__role_detail_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.uistate.ts");
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
var FuncgroupViewModel = /** @class */ (function (_super) {
    __extends(FuncgroupViewModel, _super);
    /**
     * 构造函数
     */
    function FuncgroupViewModel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_5__role_detail_uistate__["GSPRoleDetailUIState"]);
        return _this;
    }
    /**
     * 表单加载
     */
    FuncgroupViewModel.prototype.formLoad = function () { };
    /**
     * 保存
     */
    FuncgroupViewModel.prototype.save = function () { };
    /**
     * 关闭
     */
    FuncgroupViewModel.prototype.close = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'formLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuncgroupViewModel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'save'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuncgroupViewModel.prototype, "save", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'close'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuncgroupViewModel.prototype, "close", null);
    FuncgroupViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__role_detail_bindingdata__["FuncgroupBindingData"],
            form: __WEBPACK_IMPORTED_MODULE_3__role_detail_form__["BaseinfoForm"],
            stateMachine: __WEBPACK_IMPORTED_MODULE_4__role_detail_statemachine__["FuncgroupStateMachine"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FuncgroupViewModel);
    return FuncgroupViewModel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/domain/entities/role.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPRoleEntity", function() { return GSPRoleEntity; });
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

var GSPRoleEntity = /** @class */ (function (_super) {
    __extends(GSPRoleEntity, _super);
    function GSPRoleEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(true),
        __metadata("design:type", String)
    ], GSPRoleEntity.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPRoleEntity.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPRoleEntity.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPRoleEntity.prototype, "roleGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPRoleEntity.prototype, "note", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPRoleEntity.prototype, "validFrom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPRoleEntity.prototype, "validTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPRoleEntity.prototype, "state", void 0);
    return GSPRoleEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN_PROVIDERS1", function() { return DOMAIN_PROVIDERS1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_role_entity__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/domain/entities/role.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__role_detail_datastorage__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/domain/role-detail.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_detail_repository__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/domain/role-detail.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_detail_dataservice__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/domain/role-detail.dataservice.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPRoleEntity", function() { return __WEBPACK_IMPORTED_MODULE_0__entities_role_entity__["GSPRoleEntity"]; });
/* unused harmony reexport FuncgroupDataStorage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupRepository", function() { return __WEBPACK_IMPORTED_MODULE_2__role_detail_repository__["FuncgroupRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupDataService", function() { return __WEBPACK_IMPORTED_MODULE_3__role_detail_dataservice__["FuncgroupDataService"]; });




var DOMAIN_PROVIDERS1 = [
    __WEBPACK_IMPORTED_MODULE_1__role_detail_datastorage__["FuncgroupDataStorage"],
    __WEBPACK_IMPORTED_MODULE_2__role_detail_repository__["FuncgroupRepository"],
    __WEBPACK_IMPORTED_MODULE_3__role_detail_dataservice__["FuncgroupDataService"],
];



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/domain/role-detail.dataservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupDataService", function() { return FuncgroupDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__role_detail_datastorage__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/domain/role-detail.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_detail_repository__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/domain/role-detail.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_role_detail_statemachine__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_role_detail_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/role-detail.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__position_role_domain__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FuncgroupDataService = /** @class */ (function () {
    function FuncgroupDataService(rest, fungroupDetailStore, roleRep, sessionmanager, roleStateMachine, posRoleUIState, posRoleService) {
        this.rest = rest;
        this.fungroupDetailStore = fungroupDetailStore;
        this.roleRep = roleRep;
        this.sessionmanager = sessionmanager;
        this.roleStateMachine = roleStateMachine;
        this.posRoleUIState = posRoleUIState;
        this.posRoleService = posRoleService;
    }
    /**
     * 加载数据
     */
    FuncgroupDataService.prototype.loadData = function (dataId) {
        var _this = this;
        var url = this.sessionmanager.roleWebApi;
        this.rest.get(url + '/' + dataId, null, this.sessionmanager.getHeader()).subscribe(function (result) {
            _this.fungroupDetailStore.load(result);
            console.log(result);
        });
    };
    /**
     * 保存
     */
    FuncgroupDataService.prototype.save = function () {
        var newRole = this.roleRep.getAllEntities()[0];
        newRole.roleGroup = 'admin';
        if (this.roleStateMachine.context.state === 'addState') {
            this.saveAddRole(newRole);
        }
        else {
            this.saveEditRole(newRole);
        }
    };
    FuncgroupDataService.prototype.saveAddRole = function (role) {
        var _this = this;
        var roleUrl = this.sessionmanager.roleWebApi;
        var headers = this.sessionmanager.getHeader();
        this.rest.post(roleUrl, role.data, null, headers)
            .subscribe(function (result) {
            // 这个地方必须要重新load一下，否则再去编辑的时候一些字段没有值服务端校验出错
            _this.loadData(result);
            // 需要同步岗位和功能组
            if (_this.posRoleUIState.needSavePosRole) {
                _this.posRoleService.modifyPosByRole()
                    .subscribe(function () { });
            }
            // 保存后应该走编辑状态
            _this.roleStateMachine['edit']();
            alert('功能组保存成功');
        }, function (error) {
            console.log(error);
            alert(error.error.Message);
        });
    };
    FuncgroupDataService.prototype.saveEditRole = function (role) {
        var _this = this;
        var roleUrl = this.sessionmanager.roleWebApi;
        var headers = this.sessionmanager.getHeader();
        this.rest.put(roleUrl, role.data, null, headers)
            .subscribe(function (result) {
            if (_this.posRoleUIState.needSavePosRole) {
                _this.posRoleService.modifyPosByRole()
                    .subscribe(function () { });
            }
            // 保存后应该走编辑状态
            _this.roleStateMachine['edit']();
            alert('功能组保存成功');
        }, function (error) {
            console.log(error);
            alert(error.error.Message);
        });
    };
    /**
    * 新增
    */
    FuncgroupDataService.prototype.loadNewData = function () {
        var _this = this;
        this.fungroupDetailStore.clear();
        var url = this.sessionmanager.roleWebApi;
        this.rest.get(url + '/new', null, this.sessionmanager.getHeader()).subscribe(function (result) {
            _this.posRoleUIState.dataId = result[0]['id'];
            _this.fungroupDetailStore.load(result);
        });
    };
    FuncgroupDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_1__role_detail_datastorage__["FuncgroupDataStorage"],
            __WEBPACK_IMPORTED_MODULE_2__role_detail_repository__["FuncgroupRepository"],
            __WEBPACK_IMPORTED_MODULE_4__common__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_5__app_role_detail_statemachine__["FuncgroupStateMachine"],
            __WEBPACK_IMPORTED_MODULE_6__app_role_detail_uistate__["GSPRoleDetailUIState"],
            __WEBPACK_IMPORTED_MODULE_7__position_role_domain__["GSPPosRoleService"]])
    ], FuncgroupDataService);
    return FuncgroupDataService;
}());



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/domain/role-detail.datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupDataStorage", function() { return FuncgroupDataStorage; });
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


var FuncgroupDataStorage = /** @class */ (function (_super) {
    __extends(FuncgroupDataStorage, _super);
    function FuncgroupDataStorage() {
        return _super.call(this) || this;
    }
    FuncgroupDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FuncgroupDataStorage);
    return FuncgroupDataStorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/domain/role-detail.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupRepository", function() { return FuncgroupRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_role_entity__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/domain/entities/role.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_detail_datastorage__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/domain/role-detail.datastorage.ts");
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




var FuncgroupRepository = /** @class */ (function (_super) {
    __extends(FuncgroupRepository, _super);
    function FuncgroupRepository(injector) {
        return _super.call(this, injector) || this;
    }
    FuncgroupRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_3__role_detail_datastorage__["FuncgroupDataStorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_2__entities_role_entity__["GSPRoleEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FuncgroupRepository);
    return FuncgroupRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/help/list-help/list-help.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/help/list-help/list-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" [ngClass]=\"{'show d-block':isShow}\">\n  <div class=\"modal-dialog modal-dialog-centered gw-page-dialog\" style=\"font-size: 13px;max-width:40%;\">\n    <div class=\"modal-content\" style=\"width:100%;height:500px;\">\n      <div class=\"modal-header\">\n        <div class=\"clearfix p-2\">\n          <h6 class=\"modal-title float-left\">{{title}}</h6>\n          <button class=\"close\" (click)=\"isShow=false\">\n            <span>×</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <kendo-grid [class]=\"'flex-auto'\" [selectable]=\"selectableSettings\" [kendoGridSelectBy]=\"'id'\" [selectedKeys]=\"curSelectedKeys\"\n          [kendoGridBinding]=\"data\" [height]=\"350\">\n          <kendo-grid-checkbox-column width=\"10%\"></kendo-grid-checkbox-column>\n          <kendo-grid-column field=\"code\" title=\"编号\" width=\"40%\"></kendo-grid-column>\n          <kendo-grid-column field=\"name\" title=\"名称\" width=\"50%\"></kendo-grid-column>\n        </kendo-grid>\n      </div>\n      <div class=\"modal-footer\">\n        <!--\n        <div pr-2 text-left class=\"col-xs-3\">\n          <span>全选</span>\n          <input type=\"checkbox\" style=\"zoom:120%;\" id=\"checkAllData\" name=\"checkAllData\" [checked]=\"true\">\n        </div>\n        -->\n        <div text-right p-2 class=\"col-xs-9\">\n          <button class=\"btn btn-sm  mr-2  btn-primary \" [disabled]=\"\" style=\"font-size: 13px;line-height: 1.2;\"\n            (click)=\"btnOk()\">确定</button>\n          <button class=\"btn btn-sm mr-2\" style=\"background:#e3e4e4!important;font-size: 13px;line-height: 1.2;\"\n            (click)=\"isShow=false\">取消</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n"

/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/help/list-help/list-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHelpComponent", function() { return ListHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_role_domain__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListHelpComponent = /** @class */ (function () {
    function ListHelpComponent(posRoleService) {
        this.posRoleService = posRoleService;
        /**帮助标题 */
        this.title = '帮助';
        /**输出事件 */
        this.selectedAfterOk = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // 多选模式
        this.selectableSettings = {
            checkboxOnly: true,
            mode: 'multiple',
            enabled: true
        };
    }
    ListHelpComponent.prototype.ngOnInit = function () {
    };
    /**输入属性变化后 */
    ListHelpComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // 只有显示属性变化后才能起作用
        if (changes['isShow']) {
            // 第一次加载页面的时候,会有第一次变化
            if (changes.isShow.firstChange) {
                // 首次进来不取数、不显示
                this.isShow = false;
                return;
            }
            // 按钮触发进来
            this.isShow = true;
            // 服务端获取数据
            this.posRoleService.getAllPositions()
                .subscribe(function (result) {
                _this.data = result;
                _this.curSelectedKeys = [];
                if (_this.initSelectedKeys) {
                    _this.initSelectedKeys.map(function (item) { return _this.curSelectedKeys.push(item); });
                }
            }, function (error) {
                console.log('功能组授权岗位时获取岗位列表失败');
                console.log(error);
            });
        }
    };
    /**帮助确定按钮 */
    ListHelpComponent.prototype.btnOk = function () {
        var _this = this;
        this.closeDialog();
        // 根据选中行获取实体数据
        var selectPosEntity = [];
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(this.curSelectedKeys)
            .map(function (item) { return _this.data.find(function (pos) { return pos['id'] === item; }); })
            .subscribe(function (item) { return selectPosEntity.push(item); });
        // 发射当前选中数据
        this.selectedAfterOk.next(selectPosEntity);
    };
    ListHelpComponent.prototype.showDialog = function () {
        this.isShow = true;
    };
    ListHelpComponent.prototype.closeDialog = function () {
        this.isShow = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ListHelpComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ListHelpComponent.prototype, "isShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ListHelpComponent.prototype, "initSelectedKeys", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ListHelpComponent.prototype, "selectedAfterOk", void 0);
    ListHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-help',
            template: __webpack_require__("./src/app/modules/rolemanager/role-detail/help/list-help/list-help.component.html"),
            styles: [__webpack_require__("./src/app/modules/rolemanager/role-detail/help/list-help/list-help.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__position_role_domain__["GSPPosRoleService"]])
    ], ListHelpComponent);
    return ListHelpComponent;
}());



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/app/gsp-pos-role.bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleBindingData", function() { return GSPPosRoleBindingData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_gspposition_entity__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/gspposition.entity.ts");
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
 * 岗位详情绑定数据
 */
var GSPPosRoleBindingData = /** @class */ (function (_super) {
    __extends(GSPPosRoleBindingData, _super);
    function GSPPosRoleBindingData(injector) {
        return _super.call(this, injector) || this;
    }
    GSPPosRoleBindingData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_3__domain_gspposition_entity__["GSPPositionEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain__["GSPPosRoleRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPPosRoleBindingData);
    return GSPPosRoleBindingData;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/app/gsp-pos-role.uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleUIState", function() { return GSPPosRoleUIState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * 功能组岗位组件UI状态
 */
var GSPPosRoleUIState = /** @class */ (function () {
    function GSPPosRoleUIState() {
        /** 选择的岗位列表，用于在界面上删除时的单行选择*/
        this.selectPosList = [];
        /**第一次岗位列表备份 */
        this.posIdBackUpList = [];
        /**当前界面上岗位内码 */
        this.curPosIdList = [];
        /** 设置岗位功能组帮助的状态值*/
        this.posRoleHelpFlag = false;
    }
    GSPPosRoleUIState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GSPPosRoleUIState);
    return GSPPosRoleUIState;
}());



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/app/gsp-pos-role.viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleViewModel", function() { return GSPPosRoleViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_bindingdata__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/gsp-pos-role.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_pos_role_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/gsp-pos-role.uistate.ts");
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
 * 功能组和岗位关系详情视图模型
 */
var GSPPosRoleViewModel = /** @class */ (function (_super) {
    __extends(GSPPosRoleViewModel, _super);
    /**
     * 构造函数
     */
    function GSPPosRoleViewModel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_3__gsp_pos_role_uistate__["GSPPosRoleUIState"]);
        return _this;
    }
    /**
     * 功能组和岗位关系加载
     */
    GSPPosRoleViewModel.prototype.formLoad = function () { };
    /**设置功能组岗位关系 */
    GSPPosRoleViewModel.prototype.setUserPos = function () { };
    /**保存功能组岗位关系 */
    GSPPosRoleViewModel.prototype.savePosRole = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'posRoleFormLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPPosRoleViewModel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'setPosRole'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPPosRoleViewModel.prototype, "setUserPos", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'savePosRole'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GSPPosRoleViewModel.prototype, "savePosRole", null);
    GSPPosRoleViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_bindingdata__["GSPPosRoleBindingData"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPPosRoleViewModel);
    return GSPPosRoleViewModel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/app/handlers/gsp-pos-role.formload.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoadPosRoleHandler", function() { return FormLoadPosRoleHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__ = __webpack_require__("./node_modules/rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/gsp-pos-role.uistate.ts");
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
 * 功能组岗位详情页面加载
 */
var FormLoadPosRoleHandler = /** @class */ (function (_super) {
    __extends(FormLoadPosRoleHandler, _super);
    function FormLoadPosRoleHandler(posRoleService, posRoleStore, posRoleState) {
        var _this = _super.call(this) || this;
        _this.posRoleService = posRoleService;
        _this.posRoleStore = posRoleStore;
        _this.posRoleState = posRoleState;
        return _this;
    }
    FormLoadPosRoleHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('loadData', function () {
            // 根据用户内码获取分配的岗位
            var dataId = _this.posRoleState.curRoleId;
            _this.posRoleService.getPositionsByRoleId(dataId).subscribe(function (result) {
                // 加载数据
                _this.posRoleStore.load(result);
                // 清空数据，然后备份,用于最后保存时的对比比较
                _this.posRoleState.posIdBackUpList = [];
                // 子组件输入属性绑定值，连动当前界面和岗位帮助选择数据
                _this.posRoleState.curPosIdList = [];
                __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(result)
                    .map(function (item) { return item['id']; })
                    .subscribe(function (item) {
                    _this.posRoleState.posIdBackUpList.push(item);
                    _this.posRoleState.curPosIdList.push(item);
                });
            });
        });
    };
    FormLoadPosRoleHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'posRoleFormLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__domain__["GSPPosRoleService"],
            __WEBPACK_IMPORTED_MODULE_4__domain__["GSPPosRoleDataStorage"],
            __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_uistate__["GSPPosRoleUIState"]])
    ], FormLoadPosRoleHandler);
    return FormLoadPosRoleHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/app/handlers/gsp-pos-role.save.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavePosRoleHandler", function() { return SavePosRoleHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/index.ts");
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
 * 功能组岗位详情页面保存
 */
var SavePosRoleHandler = /** @class */ (function (_super) {
    __extends(SavePosRoleHandler, _super);
    function SavePosRoleHandler(posRoleService) {
        var _this = _super.call(this) || this;
        _this.posRoleService = posRoleService;
        return _this;
    }
    SavePosRoleHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('save', function () {
            _this.posRoleService.modifyPosByRole().subscribe(function (result) {
                alert('功能组授权岗位保存成功');
            }, function (error) {
                console.log(error);
                console.log('功能组授权岗位失败');
            });
        });
    };
    SavePosRoleHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'savePosRole'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain__["GSPPosRoleService"]])
    ], SavePosRoleHandler);
    return SavePosRoleHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/app/handlers/gsp-pos-role.set.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPosRoleHandler", function() { return SetPosRoleHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_gsp_pos_role_repository__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/gsp-pos-role.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_pos_role_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/gsp-pos-role.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
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
 * 功能组岗位详情页面新增
 */
var SetPosRoleHandler = /** @class */ (function (_super) {
    __extends(SetPosRoleHandler, _super);
    function SetPosRoleHandler(posRoleUIState, posRoleRep) {
        var _this = _super.call(this) || this;
        _this.posRoleUIState = posRoleUIState;
        _this.posRoleRep = posRoleRep;
        return _this;
    }
    // TODO: 需要展开
    SetPosRoleHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('add', function () {
            // 打开帮助
            _this.posRoleUIState.posRoleHelpFlag = !_this.posRoleUIState.posRoleHelpFlag;
            var curPosList = _this.posRoleRep.getAllEntities();
            console.log(curPosList);
        });
    };
    SetPosRoleHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["NgCommandHandler"])({
            commandName: 'setPosRole'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__gsp_pos_role_uistate__["GSPPosRoleUIState"],
            __WEBPACK_IMPORTED_MODULE_0__domain_gsp_pos_role_repository__["GSPPosRoleRepository"]])
    ], SetPosRoleHandler);
    return SetPosRoleHandler;
}(__WEBPACK_IMPORTED_MODULE_3__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posRole_App_Providers", function() { return posRole_App_Providers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handlers_gsp_pos_role_save_handler__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/handlers/gsp-pos-role.save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handlers_gsp_pos_role_set_handler__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/handlers/gsp-pos-role.set.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handlers_gsp_pos_role_formload_handler__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/handlers/gsp-pos-role.formload.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gsp_pos_role_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/gsp-pos-role.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gsp_pos_role_bindingdata__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/gsp-pos-role.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_viewmodel__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/gsp-pos-role.viewmodel.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoadPosRoleHandler", function() { return __WEBPACK_IMPORTED_MODULE_2__handlers_gsp_pos_role_formload_handler__["FormLoadPosRoleHandler"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SetPosRoleHandler", function() { return __WEBPACK_IMPORTED_MODULE_1__handlers_gsp_pos_role_set_handler__["SetPosRoleHandler"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SavePosRoleHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__handlers_gsp_pos_role_save_handler__["SavePosRoleHandler"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleUIState", function() { return __WEBPACK_IMPORTED_MODULE_3__gsp_pos_role_uistate__["GSPPosRoleUIState"]; });
/* unused harmony reexport GSPPosRoleBindingData */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleViewModel", function() { return __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_viewmodel__["GSPPosRoleViewModel"]; });






var posRole_App_Providers = [
    __WEBPACK_IMPORTED_MODULE_3__gsp_pos_role_uistate__["GSPPosRoleUIState"],
    __WEBPACK_IMPORTED_MODULE_4__gsp_pos_role_bindingdata__["GSPPosRoleBindingData"],
    __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_viewmodel__["GSPPosRoleViewModel"]
];
// 导出用户和岗位APP域所有成员



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/domain/gsp-pos-role.dataservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleService", function() { return GSPPosRoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_util_sys_manager_util__ = __webpack_require__("./src/app/modules/common/util/sys-manager-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_gsp_pos_role_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/gsp-pos-role.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_repository__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/gsp-pos-role.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__("./src/app/modules/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**功能组岗位关联关系获取岗位数据 */
var GSPPosRoleService = /** @class */ (function () {
    function GSPPosRoleService(rest, posRoleState, sessionUtil, posRoleRep) {
        this.rest = rest;
        this.posRoleState = posRoleState;
        this.sessionUtil = sessionUtil;
        this.posRoleRep = posRoleRep;
    }
    /**根据功能组内码获取分配的岗位 */
    GSPPosRoleService.prototype.getPositionsByRoleId = function (roleId) {
        var headers = this.sessionUtil.getHeader();
        var getPosByUserUrl = this.sessionUtil.positionRoleWebApi + '/roles/' + roleId + '/positions';
        return this.rest.get(getPosByUserUrl, null, headers);
    };
    /**修改功能组和岗位的关联关系 */
    GSPPosRoleService.prototype.modifyPosByRole = function () {
        var _this = this;
        var roleId = this.posRoleState.curRoleId;
        var curPosIdList = this.posRoleRep.getAllEntities().map(function (item) { return item.id; });
        var posIdBackUpList = this.posRoleState.posIdBackUpList;
        // 获取新增和删除的,这个地方需要新增一个可观察者对象
        var addList = curPosIdList.filter(function (item) { return posIdBackUpList.indexOf(item) < 0; });
        var removeList = posIdBackUpList.filter(function (item) { return curPosIdList.indexOf(item) < 0; });
        var posRolePkg = new __WEBPACK_IMPORTED_MODULE_6__common__["ResultPackage"]();
        posRolePkg.ownerId = roleId;
        posRolePkg.addingResults = addList;
        posRolePkg.removingResults = removeList;
        // 无需走请求
        if (addList.length === 0 && removeList.length === 0) {
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) { return observer.next(); });
        }
        console.log('add');
        console.log(addList);
        console.log('remove');
        console.log(removeList);
        var headers = this.sessionUtil.getHeader();
        var posRoleWebUrl = this.sessionUtil.positionRoleWebApi;
        var queryParams = {
            subjectType: 'role',
            objectType: 'position'
        };
        return this.rest.post(posRoleWebUrl, posRolePkg, queryParams, headers)
            .map(function (item) {
            _this.posRoleState.posIdBackUpList = curPosIdList;
            return item;
        });
    };
    /**获取所有岗位 */
    GSPPosRoleService.prototype.getAllPositions = function () {
        var headers = this.sessionUtil.getHeader();
        var posUrl = this.sessionUtil.positionWebApi + '/all';
        return this.rest.get(posUrl, null, headers);
    };
    GSPPosRoleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_4__app_gsp_pos_role_uistate__["GSPPosRoleUIState"],
            __WEBPACK_IMPORTED_MODULE_0__common_util_sys_manager_util__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_5__gsp_pos_role_repository__["GSPPosRoleRepository"]])
    ], GSPPosRoleService);
    return GSPPosRoleService;
}());



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/domain/gsp-pos-role.datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleDataStorage", function() { return GSPPosRoleDataStorage; });
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


/**
 * 岗位列表数据存储
 */
var GSPPosRoleDataStorage = /** @class */ (function (_super) {
    __extends(GSPPosRoleDataStorage, _super);
    function GSPPosRoleDataStorage() {
        return _super.call(this) || this;
    }
    GSPPosRoleDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GSPPosRoleDataStorage);
    return GSPPosRoleDataStorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/domain/gsp-pos-role.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleRepository", function() { return GSPPosRoleRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_datastorage__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/gsp-pos-role.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gspposition_entity__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/gspposition.entity.ts");
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
 * 岗位仓库持久化层
 */
var GSPPosRoleRepository = /** @class */ (function (_super) {
    __extends(GSPPosRoleRepository, _super);
    function GSPPosRoleRepository(injector) {
        return _super.call(this, injector) || this;
    }
    GSPPosRoleRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_datastorage__["GSPPosRoleDataStorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_3__gspposition_entity__["GSPPositionEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GSPPosRoleRepository);
    return GSPPosRoleRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/domain/gspposition.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPositionEntity", function() { return GSPPositionEntity; });
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
 * 岗位关系实体
 */
var GSPPositionEntity = /** @class */ (function (_super) {
    __extends(GSPPositionEntity, _super);
    function GSPPositionEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(true),
        __metadata("design:type", String)
    ], GSPPositionEntity.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPositionEntity.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], GSPPositionEntity.prototype, "name", void 0);
    return GSPPositionEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posRole_Domain_Providers", function() { return posRole_Domain_Providers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gsp_pos_role_datastorage__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/gsp-pos-role.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gsp_pos_role_repository__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/gsp-pos-role.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_dataservice__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/gsp-pos-role.dataservice.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleDataStorage", function() { return __WEBPACK_IMPORTED_MODULE_0__gsp_pos_role_datastorage__["GSPPosRoleDataStorage"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleRepository", function() { return __WEBPACK_IMPORTED_MODULE_1__gsp_pos_role_repository__["GSPPosRoleRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GSPPosRoleService", function() { return __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_dataservice__["GSPPosRoleService"]; });



// 功能组岗位相关服务
var posRole_Domain_Providers = [
    __WEBPACK_IMPORTED_MODULE_0__gsp_pos_role_datastorage__["GSPPosRoleDataStorage"],
    __WEBPACK_IMPORTED_MODULE_1__gsp_pos_role_repository__["GSPPosRoleRepository"],
    __WEBPACK_IMPORTED_MODULE_2__gsp_pos_role_dataservice__["GSPPosRoleService"]
];
// 导出Domain域所有成员



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/pos-role.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/pos-role.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"mt-1\">\r\n        <button type=\"button\" \r\n        [disabled]=\"false\"\r\n        (click)=\"this.posRoleVm.setUserPos()\" \r\n        class=\"btn btn-sm btn-default\">设置岗位</button>\r\n        <button type=\"button\" \r\n        [disabled]=\"false\"\r\n        (click)=\"this.posRoleVm.savePosRole()\"\r\n         class=\"btn btn-sm btn-default\">保存</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-12\">\r\n      <kendo-grid\r\n       [kendoGridSelectBy]=\"'id'\" \r\n       [selectable]=\"this.selectableSettings\"\r\n       [selectedKeys] = \"this.posRoleVm.uiState.selectPosList\"\r\n       [kendoGridBinding]=\"this.posRoleVm.bindingData.list\">\r\n        <kendo-grid-column field=\"code\" title=\"岗位编号\" width=\"40%\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"name\" title=\"岗位名称\" width=\"60%\"></kendo-grid-column>\r\n      </kendo-grid>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-list-help \r\n[title]=\"'岗位帮助'\" \r\n[initSelectedKeys]=\"this.posRoleVm.uiState.curPosIdList\"\r\n[isShow]=\"this.posRoleVm.uiState.posRoleHelpFlag\"\r\n(selectedAfterOk)=\"afterPosSelected($event)\"></app-list-help>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/position-role/pos-role.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosRoleComponent", function() { return PosRoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_gspposition_entity__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/gspposition.entity.ts");
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
 * 功能组岗位关系列表
 */
var PosRoleComponent = /** @class */ (function () {
    function PosRoleComponent(posRoleVm, posRoleState, posRoleRep) {
        this.posRoleVm = posRoleVm;
        this.posRoleState = posRoleState;
        this.posRoleRep = posRoleRep;
        this.selectableSettings = {
            checkboxOnly: true,
            mode: 'single'
        };
    }
    PosRoleComponent.prototype.ngOnInit = function () {
    };
    PosRoleComponent.prototype.ngOnChanges = function (changes) {
        // 加载数据
        this.posRoleVm.uiState.selectPosList = [];
        // 一定要给复制
        this.posRoleState.curRoleId = this.curRoleId;
        // TODO: 这个地方目前只有一个问题，输入属性触发变化，但是用不上
        this.posRoleVm.formLoad();
    };
    /** 授权岗位的时候回调函数*/
    PosRoleComponent.prototype.afterPosSelected = function (args) {
        var _this = this;
        // 更新值
        var newPosEntityList = [];
        this.posRoleVm.uiState.curPosIdList = [];
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(args).subscribe(function (item) {
            newPosEntityList.push(new __WEBPACK_IMPORTED_MODULE_4__domain_gspposition_entity__["GSPPositionEntity"](item));
            _this.posRoleVm.uiState.curPosIdList.push(item['id']);
        });
        this.posRoleRep.clear();
        this.posRoleRep.addEntities(newPosEntityList);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PosRoleComponent.prototype, "curRoleId", void 0);
    PosRoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pos-role',
            template: __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/pos-role.component.html"),
            styles: [__webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/pos-role.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app__["GSPPosRoleViewModel"],
            __WEBPACK_IMPORTED_MODULE_2__app__["GSPPosRoleUIState"],
            __WEBPACK_IMPORTED_MODULE_3__domain__["GSPPosRoleRepository"]])
    ], PosRoleComponent);
    return PosRoleComponent;
}());



/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/role-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/role-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex g-main\">\r\n  <div class=\"col\">\r\n    <div class=\"d-flex flex-row  g-main px-2\" style=\"overflow:hidden;\">\r\n      <div class=\"col\">\r\n        <div class=\"d-flex flex-column g-main\">\r\n          <div class=\"pt-2 mb-2\">\r\n            <div class=\"row pt-2 mb-2\">\r\n              <div class=\"col-sm-12 col-md-3 pt-2\">\r\n                <h1 class=\"h4 d-inline-block\">功能组详情</h1>\r\n              </div>\r\n              <div class=\"col-sm-12 col-md-9\">\r\n                <div class=\"pr-2 text-right\">\r\n                  <!-- <button type=\"button\" (click)=\"viewModel.add()\" class=\"btn btn-sm btn-default\">新增 </button>\r\n                  <button type=\"button\" (click)=\"viewModel.remove()\" class=\"btn btn-sm btn-default\">删除 </button> -->\r\n                  <button type=\"button\" (click)=\"saveRole()\" class=\"btn btn-sm btn-default\">保存</button>\r\n                  <button type=\"button\" (click)=\"viewModel.close()\" class=\"btn btn-sm btn-default mr-1\">返回</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"flex-auto\" style=\"overflow-y:auto;\" id=\"attachmentParent\">\r\n            <kendo-tabstrip>\r\n              <kendo-tabstrip-tab [title]=\"'基本信息'\" [selected]=\"true\">\r\n                <ng-template kendoTabContent>\r\n                  <form class=\"k-form p-2\" [formGroup]=\"viewModel.form\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-md-6 pb-1\">\r\n                        <label class=\"k-form-field\">\r\n                          <span>编号* </span>\r\n                          <div class=\"d-flex\">\r\n                            <input formControlName=\"code\" class=\"k-textbox w-100\" />\r\n                          </div>\r\n                        </label>\r\n                        <label class=\"k-form-field\">\r\n                            <span>名称* </span>\r\n                            <div class=\"d-flex\">\r\n                              <input formControlName=\"name\" class=\"k-textbox w-100\" />\r\n                            </div>\r\n                          </label>\r\n                        <label class=\"k-form-field\">\r\n                          <span>描述 </span>\r\n                          <textarea formControlName=\"note\" rows=1.5 class=\"k-textarea w-100\" ></textarea>\r\n                        </label>\r\n                        <!-- <label class=\"k-form-field\">\r\n                          <span>分类 </span>\r\n                          <input formControlName=\"roleGroup\" class=\"k-textbox w-100\" />\r\n                        </label> -->\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </ng-template>\r\n              </kendo-tabstrip-tab>\r\n            </kendo-tabstrip>\r\n\r\n            <ng-container>\r\n              <kendo-tabstrip>\r\n                <kendo-tabstrip-tab [title]=\"'期限设置'\" [selected]=\"true\">\r\n                  <ng-template kendoTabContent>\r\n                    <div [formGroup]=\"viewModel.form\">\r\n                      <div style=\"margin-left:10px;margin-top:15px\">\r\n                        <div style=\"vertical-align:middle;\">\r\n                          <input type=\"checkbox\" formControlName=\"state\" />\r\n                          <span>启用 </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <!-- <div>\r\n                      <div style=\"margin-left:10px;margin-top:15px\">\r\n                        <div style=\"vertical-align:middle;\">\r\n                          <input type=\"checkbox\" />\r\n                          <span>不限期限 </span>\r\n                        </div>\r\n                      </div>\r\n                    </div> -->\r\n                    <form class=\"k-form p-2\" [formGroup]=\"viewModel.form\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-md-6 pb-1\">\r\n                          <label class=\"k-form-field\">\r\n                            <span>开始日期 </span>\r\n                            <div class=\"d-flex\">\r\n                              <input formControlName=\"validFrom\" class=\"k-textbox w-100\" />\r\n                            </div>\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-6 pb-1\">\r\n                          <label class=\"k-form-field\">\r\n                            <span>截止日期 </span>\r\n                            <div class=\"d-flex\">\r\n                              <input formControlName=\"validTo\" class=\"k-textbox py-1 px-2 w-100\" />\r\n                            </div>\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </ng-template>\r\n                </kendo-tabstrip-tab>\r\n\r\n                <kendo-tabstrip-tab [title]=\"'授权岗位'\">\r\n                  <ng-template kendoTabContent>\r\n                    <app-pos-role [curRoleId]=\"this.viewModel.uiState.dataId\"></app-pos-role>\r\n                  </ng-template>\r\n                </kendo-tabstrip-tab>\r\n              </kendo-tabstrip>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/rolemanager/role-detail/role-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupComponent", function() { return FuncgroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_index__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_role_pos_role_component__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/pos-role.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuncgroupComponent = /** @class */ (function () {
    function FuncgroupComponent(viewModel, route) {
        this.viewModel = viewModel;
        this.route = route;
    }
    FuncgroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.viewModel.uiState.dataId = params.get('id');
            _this.viewModel.uiState.action = params.get('action');
            _this.viewModel.formLoad();
        });
    };
    FuncgroupComponent.prototype.saveRole = function () {
        // 复原
        this.viewModel.uiState.needSavePosRole = false;
        // 保存岗位和功能组标志
        if (this.posRoleChild) {
            this.viewModel.uiState.needSavePosRole = true;
        }
        this.viewModel.save();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__position_role_pos_role_component__["PosRoleComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__position_role_pos_role_component__["PosRoleComponent"])
    ], FuncgroupComponent.prototype, "posRoleChild", void 0);
    FuncgroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-role-detail',
            template: __webpack_require__("./src/app/modules/rolemanager/role-detail/role-detail.component.html"),
            styles: [__webpack_require__("./src/app/modules/rolemanager/role-detail/role-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_index__["FuncgroupViewModel"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], FuncgroupComponent);
    return FuncgroupComponent;
}());



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/app/handler/form-load.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupFormLoadHandler", function() { return FuncgroupFormLoadHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_index__ = __webpack_require__("./src/app/modules/rolemanager/role-list/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_list_statemachine__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__role_list_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.uistate.ts");
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





var FuncgroupFormLoadHandler = /** @class */ (function (_super) {
    __extends(FuncgroupFormLoadHandler, _super);
    function FuncgroupFormLoadHandler(dataService, uiState, stateMachine) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        _this.stateMachine = stateMachine;
        return _this;
    }
    FuncgroupFormLoadHandler.prototype.schedule = function () {
        var _this = this;
        // 数据加载
        this.addTask('loadData', function () {
            _this.uiState.action = 'load';
            _this.dataService.getdata();
        });
        // 状态迁移
        // this.addTask('transitState', () => {
        //   const action = this.uiState.action;
        //   this.stateMachine[action]();
        // });
    };
    FuncgroupFormLoadHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'role-list-formLoad'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_index__["FuncgroupService"],
            __WEBPACK_IMPORTED_MODULE_4__role_list_uistate__["FuncgroupTreeUistate"],
            __WEBPACK_IMPORTED_MODULE_3__role_list_statemachine__["FuncgroupTreeStatemachine"]])
    ], FuncgroupFormLoadHandler);
    return FuncgroupFormLoadHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/app/handler/remove.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveHandler", function() { return RemoveHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_role_list_service__ = __webpack_require__("./src/app/modules/rolemanager/role-list/domain/role-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_list_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.uistate.ts");
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




var RemoveHandler = /** @class */ (function (_super) {
    __extends(RemoveHandler, _super);
    function RemoveHandler(dataService, uiState) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.uiState = uiState;
        return _this;
    }
    RemoveHandler.prototype.schedule = function () {
        var _this = this;
        // 删除选中
        this.addTask('remove', function () {
            var dataIds = _this.uiState.selectedIds;
            _this.uiState.selectedIds = [];
            if (dataIds.length === 0) {
                alert('请选择要删除的功能组！');
            }
            else {
                _this.dataService.remove(dataIds);
            }
        });
    };
    RemoveHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommandHandler"])({
            commandName: 'remove'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__domain_role_list_service__["FuncgroupService"],
            __WEBPACK_IMPORTED_MODULE_3__role_list_uistate__["FuncgroupTreeUistate"]])
    ], RemoveHandler);
    return RemoveHandler;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/app/handler/route.handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteHandler", function() { return RouteHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_list_bindingdata__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__role_list_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common__ = __webpack_require__("./src/app/modules/common/index.ts");
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






var RouteHandler = /** @class */ (function (_super) {
    __extends(RouteHandler, _super);
    function RouteHandler(sessionmanager, router, bindingData, uiState) {
        var _this = _super.call(this) || this;
        _this.sessionmanager = sessionmanager;
        _this.router = router;
        _this.bindingData = bindingData;
        _this.uiState = uiState;
        return _this;
    }
    RouteHandler.prototype.schedule = function () {
        var _this = this;
        this.addTask('route', function (lastResult, context) {
            var command = context.command;
            var action = command.params.action;
            var dataIds = _this.uiState.selectedIds;
            if (action === 'edit' || action === 'assignOp') {
                if (dataIds.length === 0) {
                    alert('请选择要编辑的功能组！');
                    return;
                }
                if (dataIds.length > 1) {
                    alert('请选择一个功能组！');
                    return;
                }
            }
            if (action === 'assignOp') {
                _this.router.navigate([_this.sessionmanager.getRoleManagerRouter(), 'role-assignop', dataIds[0]]);
                return;
            }
            var id = (action === 'add') ? 'new' : dataIds[0];
            _this.router.navigate([_this.sessionmanager.getRoleManagerRouter(), 'roles', id]);
        });
    };
    RouteHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgCommandHandler"])({
            commandName: 'route'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__common__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__role_list_bindingdata__["FuncgroupTreeBindingdata"],
            __WEBPACK_IMPORTED_MODULE_4__role_list_uistate__["FuncgroupTreeUistate"]])
    ], RouteHandler);
    return RouteHandler;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["CommandHandler"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNCGROP_PROVIDER", function() { return FUNCGROP_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcgroupCommandHandler", function() { return funcgroupCommandHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__role_list_form__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__role_list_statemachine__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_list_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.uistate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_list_viewmodel__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__role_list_bindingdata__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handler_form_load_handler__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/handler/form-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__handler_route_handler__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/handler/route.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__handler_remove_handler__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/handler/remove.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__role_detail_app_handler_form_load_handler__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/handler/form-load.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__role_detail_app_handler_save_handler__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/handler/save.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__role_detail_app_handler_close_handler__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/handler/close.handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__role_detail_position_role_app__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/index.ts");
/* unused harmony reexport FuncgroupTreeBindingdata */
/* unused harmony reexport FuncgroupTreeViewmodel */
/* unused harmony reexport FuncgroupTreeForm */
/* unused harmony reexport FuncgroupTreeStatemachine */
/* unused harmony reexport FuncgroupTreeUistate */












var funcgroupCommandHandler = [
    __WEBPACK_IMPORTED_MODULE_5__handler_form_load_handler__["FuncgroupFormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_7__handler_remove_handler__["RemoveHandler"],
    __WEBPACK_IMPORTED_MODULE_6__handler_route_handler__["RouteHandler"],
    __WEBPACK_IMPORTED_MODULE_8__role_detail_app_handler_form_load_handler__["FormLoadHandler"],
    __WEBPACK_IMPORTED_MODULE_9__role_detail_app_handler_save_handler__["SaveHandler"],
    __WEBPACK_IMPORTED_MODULE_10__role_detail_app_handler_close_handler__["CloseHandler"],
    // 授权岗位添加
    __WEBPACK_IMPORTED_MODULE_11__role_detail_position_role_app__["SetPosRoleHandler"],
    __WEBPACK_IMPORTED_MODULE_11__role_detail_position_role_app__["SavePosRoleHandler"],
    __WEBPACK_IMPORTED_MODULE_11__role_detail_position_role_app__["FormLoadPosRoleHandler"]
];
var FUNCGROP_PROVIDER = [
    __WEBPACK_IMPORTED_MODULE_4__role_list_bindingdata__["FuncgroupTreeBindingdata"],
    __WEBPACK_IMPORTED_MODULE_3__role_list_viewmodel__["FuncgroupTreeViewmodel"],
    __WEBPACK_IMPORTED_MODULE_0__role_list_form__["FuncgroupTreeForm"],
    __WEBPACK_IMPORTED_MODULE_1__role_list_statemachine__["FuncgroupTreeStatemachine"],
    __WEBPACK_IMPORTED_MODULE_2__role_list_uistate__["FuncgroupTreeUistate"]
];



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/app/role-list.bindingdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupTreeBindingdata", function() { return FuncgroupTreeBindingdata; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_index__ = __webpack_require__("./src/app/modules/rolemanager/role-list/domain/index.ts");
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



var FuncgroupTreeBindingdata = /** @class */ (function (_super) {
    __extends(FuncgroupTreeBindingdata, _super);
    function FuncgroupTreeBindingdata(injector) {
        return _super.call(this, injector) || this;
    }
    FuncgroupTreeBindingdata = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgBindingData"])({
            entity: __WEBPACK_IMPORTED_MODULE_2__domain_index__["RoleListEntity"],
            repository: __WEBPACK_IMPORTED_MODULE_2__domain_index__["FuncgroupTreeRepository"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FuncgroupTreeBindingdata);
    return FuncgroupTreeBindingdata;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["BindingData"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/app/role-list.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupTreeForm", function() { return FuncgroupTreeForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_list_bindingdata__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.bindingdata.ts");
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




var FuncgroupTreeForm = /** @class */ (function (_super) {
    __extends(FuncgroupTreeForm, _super);
    function FuncgroupTreeForm(injector) {
        return _super.call(this, injector) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'Id',
            binding: 'FID'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FuncgroupTreeForm.prototype, "Id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'code',
            binding: 'FCode'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FuncgroupTreeForm.prototype, "Code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'name',
            binding: 'FName'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FuncgroupTreeForm.prototype, "Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'path',
            binding: 'FPath'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FuncgroupTreeForm.prototype, "Path", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'layer',
            binding: 'FLayer'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FuncgroupTreeForm.prototype, "Layer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'isdetail',
            binding: 'FIsdetail'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FuncgroupTreeForm.prototype, "Isdetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'roleGroup',
            binding: 'roleGroup'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FuncgroupTreeForm.prototype, "roleGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'sortorder',
            binding: 'FSortorder'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FuncgroupTreeForm.prototype, "Sortorder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'sysinit',
            binding: 'FSysinit'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FuncgroupTreeForm.prototype, "Sysinit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgFormControl"])({
            name: 'note',
            binding: 'note'
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], FuncgroupTreeForm.prototype, "note", void 0);
    FuncgroupTreeForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["NgForm"])({
            bindingData: __WEBPACK_IMPORTED_MODULE_3__role_list_bindingdata__["FuncgroupTreeBindingdata"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FuncgroupTreeForm);
    return FuncgroupTreeForm;
}(__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["Form"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/app/role-list.statemachine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupTreeStatemachine", function() { return FuncgroupTreeStatemachine; });
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


var FuncgroupTreeStatemachine = /** @class */ (function (_super) {
    __extends(FuncgroupTreeStatemachine, _super);
    function FuncgroupTreeStatemachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], FuncgroupTreeStatemachine.prototype, "editState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgState"])({ initialState: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__farris_devkit__["State"])
    ], FuncgroupTreeStatemachine.prototype, "viewState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'viewState'; }
        }),
        __metadata("design:type", Boolean)
    ], FuncgroupTreeStatemachine.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], FuncgroupTreeStatemachine.prototype, "canEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], FuncgroupTreeStatemachine.prototype, "canDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRenderState"])({
            render: function (context) { return context.state === 'editState'; }
        }),
        __metadata("design:type", Boolean)
    ], FuncgroupTreeStatemachine.prototype, "canInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'editState' }),
        __metadata("design:type", Function)
    ], FuncgroupTreeStatemachine.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgAction"])({ transitTo: 'viewState' }),
        __metadata("design:type", Function)
    ], FuncgroupTreeStatemachine.prototype, "view", void 0);
    FuncgroupTreeStatemachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgStatemachine"])()
    ], FuncgroupTreeStatemachine);
    return FuncgroupTreeStatemachine;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["StateMachine"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/app/role-list.uistate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupTreeUistate", function() { return FuncgroupTreeUistate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FuncgroupTreeUistate = /** @class */ (function () {
    function FuncgroupTreeUistate() {
        this.selectedIds = [];
    }
    FuncgroupTreeUistate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], FuncgroupTreeUistate);
    return FuncgroupTreeUistate;
}());



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/app/role-list.viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupTreeViewmodel", function() { return FuncgroupTreeViewmodel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_list_bindingdata__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.bindingdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_list_form__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__role_list_statemachine__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.statemachine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__role_list_uistate__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.uistate.ts");
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
var FuncgroupTreeViewmodel = /** @class */ (function (_super) {
    __extends(FuncgroupTreeViewmodel, _super);
    /**
     * 构造函数
     */
    function FuncgroupTreeViewmodel(injector) {
        var _this = _super.call(this, injector) || this;
        _this.uiState = _this.injector.get(__WEBPACK_IMPORTED_MODULE_5__role_list_uistate__["FuncgroupTreeUistate"]);
        return _this;
    }
    /**
     * 表单加载
     */
    FuncgroupTreeViewmodel.prototype.formLoad = function () { };
    /**
     * 新增
     */
    FuncgroupTreeViewmodel.prototype.add = function () { };
    /**
     * 编辑
     */
    FuncgroupTreeViewmodel.prototype.edit = function () { };
    /**
     * 关闭
     */
    FuncgroupTreeViewmodel.prototype.close = function () { };
    /**
     * 删除
     */
    FuncgroupTreeViewmodel.prototype.remove = function () { };
    /**
     * 分配功能权限
     */
    FuncgroupTreeViewmodel.prototype.assignOp = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'role-list-formLoad'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuncgroupTreeViewmodel.prototype, "formLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'route',
            params: {
                action: 'add'
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuncgroupTreeViewmodel.prototype, "add", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'route',
            params: {
                action: 'edit'
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuncgroupTreeViewmodel.prototype, "edit", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'close',
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuncgroupTreeViewmodel.prototype, "close", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'remove',
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuncgroupTreeViewmodel.prototype, "remove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgCommand"])({
            name: 'route',
            params: {
                action: 'assignOp'
            }
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuncgroupTreeViewmodel.prototype, "assignOp", null);
    FuncgroupTreeViewmodel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgViewModel"])({
            children: [],
            binding: __WEBPACK_IMPORTED_MODULE_2__role_list_bindingdata__["FuncgroupTreeBindingdata"],
            form: __WEBPACK_IMPORTED_MODULE_3__role_list_form__["FuncgroupTreeForm"],
            stateMachine: __WEBPACK_IMPORTED_MODULE_4__role_list_statemachine__["FuncgroupTreeStatemachine"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FuncgroupTreeViewmodel);
    return FuncgroupTreeViewmodel;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["ViewModel"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/domain/entities/role-list.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListEntity", function() { return RoleListEntity; });
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
 * 功能组列表实体
 */
var RoleListEntity = /** @class */ (function (_super) {
    __extends(RoleListEntity, _super);
    function RoleListEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])({
            primary: true
        }),
        __metadata("design:type", String)
    ], RoleListEntity.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], RoleListEntity.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], RoleListEntity.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], RoleListEntity.prototype, "roleGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], RoleListEntity.prototype, "creatorName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["NgField"])(),
        __metadata("design:type", String)
    ], RoleListEntity.prototype, "note", void 0);
    return RoleListEntity;
}(__WEBPACK_IMPORTED_MODULE_0__farris_devkit__["Entity"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/domain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN_PROVIDERS", function() { return DOMAIN_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_role_list_entity__ = __webpack_require__("./src/app/modules/rolemanager/role-list/domain/entities/role-list.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__role_list_datastorage__ = __webpack_require__("./src/app/modules/rolemanager/role-list/domain/role-list.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_list_repository__ = __webpack_require__("./src/app/modules/rolemanager/role-list/domain/role-list.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_list_service__ = __webpack_require__("./src/app/modules/rolemanager/role-list/domain/role-list.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListEntity", function() { return __WEBPACK_IMPORTED_MODULE_0__entities_role_list_entity__["RoleListEntity"]; });
/* unused harmony reexport FuncgroupTreeDatastorage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupTreeRepository", function() { return __WEBPACK_IMPORTED_MODULE_2__role_list_repository__["FuncgroupTreeRepository"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupService", function() { return __WEBPACK_IMPORTED_MODULE_3__role_list_service__["FuncgroupService"]; });




var DOMAIN_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_1__role_list_datastorage__["FuncgroupTreeDatastorage"],
    __WEBPACK_IMPORTED_MODULE_2__role_list_repository__["FuncgroupTreeRepository"],
    __WEBPACK_IMPORTED_MODULE_3__role_list_service__["FuncgroupService"],
];



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/domain/role-list.datastorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupTreeDatastorage", function() { return FuncgroupTreeDatastorage; });
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


var FuncgroupTreeDatastorage = /** @class */ (function (_super) {
    __extends(FuncgroupTreeDatastorage, _super);
    function FuncgroupTreeDatastorage() {
        return _super.call(this) || this;
    }
    FuncgroupTreeDatastorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FuncgroupTreeDatastorage);
    return FuncgroupTreeDatastorage;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["MemoryStorage"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/domain/role-list.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupTreeRepository", function() { return FuncgroupTreeRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_role_list_entity__ = __webpack_require__("./src/app/modules/rolemanager/role-list/domain/entities/role-list.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_list_datastorage__ = __webpack_require__("./src/app/modules/rolemanager/role-list/domain/role-list.datastorage.ts");
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




var FuncgroupTreeRepository = /** @class */ (function (_super) {
    __extends(FuncgroupTreeRepository, _super);
    function FuncgroupTreeRepository(injector) {
        return _super.call(this, injector) || this;
    }
    FuncgroupTreeRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["NgRepository"])({
            from: __WEBPACK_IMPORTED_MODULE_3__role_list_datastorage__["FuncgroupTreeDatastorage"],
            entityType: __WEBPACK_IMPORTED_MODULE_2__entities_role_list_entity__["RoleListEntity"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], FuncgroupTreeRepository);
    return FuncgroupTreeRepository;
}(__WEBPACK_IMPORTED_MODULE_1__farris_devkit__["Repository"]));



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/domain/role-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupService", function() { return FuncgroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__role_list_datastorage__ = __webpack_require__("./src/app/modules/rolemanager/role-list/domain/role-list.datastorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__("./src/app/modules/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuncgroupService = /** @class */ (function () {
    function FuncgroupService(rest, datastorage, sessionmanager) {
        this.rest = rest;
        this.datastorage = datastorage;
        this.sessionmanager = sessionmanager;
    }
    FuncgroupService.prototype.getdata = function () {
        var _this = this;
        var url = this.sessionmanager.roleWebApi;
        this.rest.get(url + '/all', null, this.sessionmanager.getHeader()).subscribe(function (result) {
            console.log(result);
            _this.datastorage.load(result);
        });
    };
    /**
     * 删除并重新加载
     */
    FuncgroupService.prototype.remove = function (id) {
        var _this = this;
        var url = this.sessionmanager.roleWebApi;
        this.rest.delete(url + '/' + id, null, this.sessionmanager.getHeader()).subscribe(function () {
            _this.getdata();
            alert('删除成功');
        });
    };
    FuncgroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__farris_devkit__["RestfulService"],
            __WEBPACK_IMPORTED_MODULE_1__role_list_datastorage__["FuncgroupTreeDatastorage"],
            __WEBPACK_IMPORTED_MODULE_3__common__["SysManagerUtil"]])
    ], FuncgroupService);
    return FuncgroupService;
}());



/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/role-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/role-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex g-main\">\r\n  <div class=\"col\">\r\n    <div class=\"d-flex flex-row  g-main px-2\" style=\"overflow:hidden;\">\r\n      <div class=\"col\">\r\n        <div class=\"d-flex flex-column g-main\">\r\n          <div class=\"pt-2 mb-2\">\r\n            <div class=\"row pt-2 mb-2\">\r\n              <div class=\"col-sm-12 col-md-3 pt-2\">\r\n                <h1 class=\"h4 d-inline-block\">功能组列表</h1>\r\n                <!-- <div class=\"card\">\r\n\r\n                  <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 \">\r\n                    <kendo-treeview style=\"width:200px\" [nodes]=\"data\" textField=\"FName\" kendoTreeViewExpandable kendoTreeViewFlatDataBinding\r\n                      idField=\"FID\" parentIdField=\"FParentid\"  (selectionChange)=\"handleSelection($event)\"> </kendo-treeview>\r\n                  </div>\r\n\r\n                </div> -->\r\n              </div>\r\n              <div class=\"col-sm-12 col-md-9\">\r\n                <div class=\"pr-2 text-right\">\r\n                  <button type=\"button\" (click)=\"viewModel.add()\"  class=\"btn btn-sm btn-primary\">新增</button>\r\n                  <button type=\"button\" (click)=\"viewModel.edit()\"  class=\"btn btn-sm btn-default\">编辑</button>\r\n                  <button type=\"button\" (click)=\"viewModel.remove()\"  class=\"btn btn-sm btn-default\">删除</button>\r\n                  <button type=\"button\" (click)=\"viewModel.assignOp()\"  class=\"btn btn-sm btn-default\">分配功能权限</button>                 \r\n                  <!-- <button type=\"button\" (click)=\"viewModel.close()\" class=\"btn btn-sm btn-default mr-1\">关闭</button> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"flex-auto d-flex\" style=\"position:relative;\">\r\n            <kendo-grid \r\n            [class]=\"'flex-auto'\" \r\n            [selectable]=\"selectableSettings\" \r\n            [kendoGridSelectBy]=\"'id'\" \r\n            [selectedKeys]=\"viewModel.uiState.selectedIds\"\r\n            [kendoGridBinding]=\"roleList\">\r\n              <kendo-grid-checkbox-column showSelectAll=\"true\" width=\"5%\"></kendo-grid-checkbox-column>\r\n              <kendo-grid-column field=\"code\" title=\"功能组编号\" width=\"25%\"></kendo-grid-column>\r\n              <kendo-grid-column field=\"name\" title=\"功能组名称\" width=\"25%\"></kendo-grid-column>\r\n              <kendo-grid-column field=\"creatorName\" title=\"创建者\" width=\"20%\"></kendo-grid-column>\r\n              <kendo-grid-column field=\"note\" title=\"描述\" width=\"25%\"></kendo-grid-column>\r\n            </kendo-grid>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/rolemanager/role-list/role-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncgroupTreeComponent", function() { return FuncgroupTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_role_list_viewmodel__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/role-list.viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain__ = __webpack_require__("./src/app/modules/rolemanager/role-list/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gsp_sys_rtf_common__ = __webpack_require__("./node_modules/@gsp-sys/rtf-common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gsp_sys_rtf_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__gsp_sys_rtf_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common__ = __webpack_require__("./src/app/modules/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FuncgroupTreeComponent = /** @class */ (function () {
    function FuncgroupTreeComponent(viewModel, dataService, route, currentSession, frmService) {
        this.viewModel = viewModel;
        this.dataService = dataService;
        this.route = route;
        this.currentSession = currentSession;
        this.frmService = frmService;
        // 分页模式
        this.pageSetting = {
            buttonCount: 5,
            info: false,
            pageSizes: true,
            previousNext: true
        };
    }
    FuncgroupTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            if (params.has('funcid')) {
                _this.currentSession.funcId = params.get('funcid');
                console.log('sessionId:' + _this.currentSession.getSessionId());
                // this.currentSession.sessionId = this.frmService.getCurrentSession(this.currentSession.funcId);
            }
        });
        this.viewModel.bindingData.changes.subscribe(function (result) {
            _this.roleList = _this.viewModel.bindingData.list.toJSON();
        });
        this.viewModel.uiState.selectedIds = [];
        this.viewModel.formLoad();
        this.selectableSettings = {
            checkboxOnly: true,
            mode: 'single'
        };
    };
    FuncgroupTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__("./src/app/modules/rolemanager/role-list/role-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/rolemanager/role-list/role-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_role_list_viewmodel__["FuncgroupTreeViewmodel"],
            __WEBPACK_IMPORTED_MODULE_2__domain__["FuncgroupService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_5__common__["SysManagerUtil"],
            __WEBPACK_IMPORTED_MODULE_4__gsp_sys_rtf_common__["FrameworkService"]])
    ], FuncgroupTreeComponent);
    return FuncgroupTreeComponent;
}());



/***/ }),

/***/ "./src/app/modules/rolemanager/role-manager.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagerModule", function() { return RoleManagerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_list_role_list_component__ = __webpack_require__("./src/app/modules/rolemanager/role-list/role-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dateinputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-dateinputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__farris_devkit__ = __webpack_require__("./node_modules/@farris/devkit/esm5/devkit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__role_list_app__ = __webpack_require__("./src/app/modules/rolemanager/role-list/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__role_detail_app__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__role_list_domain__ = __webpack_require__("./src/app/modules/rolemanager/role-list/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__role_detail_domain__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__role_detail_role_detail_component__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/role-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__role_manager_route_module__ = __webpack_require__("./src/app/modules/rolemanager/role-manager.route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__funcoperation_assign_funcop_assign_funcop_component__ = __webpack_require__("./src/app/modules/rolemanager/funcoperation/assign-funcop/assign-funcop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__funcoperation_service_funcoperation_service__ = __webpack_require__("./src/app/modules/rolemanager/funcoperation/service/funcoperation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common__ = __webpack_require__("./src/app/modules/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__role_detail_position_role_pos_role_component__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/pos-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__role_detail_position_role_app__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__role_detail_position_role_domain__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/position-role/domain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__role_detail_help_list_help_list_help_component__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/help/list-help/list-help.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { KendoBindingModule} from '@farris/kendo-binding';












var RoleManagerModule = /** @class */ (function () {
    function RoleManagerModule() {
    }
    RoleManagerModule.prototype.constrctor = function () {
    };
    RoleManagerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__role_detail_role_detail_component__["FuncgroupComponent"],
                __WEBPACK_IMPORTED_MODULE_2__role_list_role_list_component__["FuncgroupTreeComponent"],
                __WEBPACK_IMPORTED_MODULE_15__funcoperation_assign_funcop_assign_funcop_component__["AssignFuncopComponent"],
                __WEBPACK_IMPORTED_MODULE_18__role_detail_position_role_pos_role_component__["PosRoleComponent"],
                __WEBPACK_IMPORTED_MODULE_21__role_detail_help_list_help_list_help_component__["ListHelpComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dateinputs__["DateInputsModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_14__role_manager_route_module__["GSPRoleManagerRoutingModule"],
                __WEBPACK_IMPORTED_MODULE_7__farris_devkit__["CommandModule"].setup(__WEBPACK_IMPORTED_MODULE_9__role_list_app__["funcgroupCommandHandler"], [])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__farris_devkit__["RestfulService"],
                __WEBPACK_IMPORTED_MODULE_11__role_list_domain__["DOMAIN_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_9__role_list_app__["FUNCGROP_PROVIDER"],
                __WEBPACK_IMPORTED_MODULE_12__role_detail_domain__["DOMAIN_PROVIDERS1"],
                __WEBPACK_IMPORTED_MODULE_10__role_detail_app__["APP_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_16__funcoperation_service_funcoperation_service__["FuncOperationService"],
                __WEBPACK_IMPORTED_MODULE_17__common__["SysManagerUtil"],
                // 授权岗位添加
                __WEBPACK_IMPORTED_MODULE_20__role_detail_position_role_domain__["posRole_Domain_Providers"],
                __WEBPACK_IMPORTED_MODULE_19__role_detail_position_role_app__["posRole_App_Providers"],
            ]
        })
    ], RoleManagerModule);
    return RoleManagerModule;
}());

//# sourceMappingURL=role-manager.module.js.map

/***/ }),

/***/ "./src/app/modules/rolemanager/role-manager.route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPRoleManagerRoutingModule", function() { return GSPRoleManagerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__role_list_role_list_component__ = __webpack_require__("./src/app/modules/rolemanager/role-list/role-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_detail_role_detail_component__ = __webpack_require__("./src/app/modules/rolemanager/role-detail/role-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__funcoperation_assign_funcop_assign_funcop_component__ = __webpack_require__("./src/app/modules/rolemanager/funcoperation/assign-funcop/assign-funcop.component.ts");




var routes = [
    /**列表页面 */
    { path: 'roles', component: __WEBPACK_IMPORTED_MODULE_1__role_list_role_list_component__["FuncgroupTreeComponent"] },
    /**详情页面 */
    { path: 'roles/:id', component: __WEBPACK_IMPORTED_MODULE_2__role_detail_role_detail_component__["FuncgroupComponent"] },
    { path: 'role-assignop/:id', component: __WEBPACK_IMPORTED_MODULE_3__funcoperation_assign_funcop_assign_funcop_component__["AssignFuncopComponent"] },
    { path: 'role-detail/new', component: __WEBPACK_IMPORTED_MODULE_2__role_detail_role_detail_component__["FuncgroupComponent"] },
    { path: '/:ssid', redirectTo: 'roles' },
    { path: '**', redirectTo: 'roles' }
];
var GSPRoleManagerRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ })

},[],["angular","farris","rtf","progress","rxjs"],["angular","farris","rtf","progress","rxjs"]);
//# sourceMappingURL=role-manager.module.chunk.js.map