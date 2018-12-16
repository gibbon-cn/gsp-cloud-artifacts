webpackJsonp(["git-panel-package.module"],{

/***/ "./node_modules/diff/dist/diff.js":
/***/ (function(module, exports, __webpack_require__) {

/*!

 diff v3.4.0

Software License Agreement (BSD License)

Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Kevin Decker nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JsDiff"] = factory();
	else
		root["JsDiff"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.canonicalize = exports.convertChangesToXML = exports.convertChangesToDMP = exports.merge = exports.parsePatch = exports.applyPatches = exports.applyPatch = exports.createPatch = exports.createTwoFilesPatch = exports.structuredPatch = exports.diffArrays = exports.diffJson = exports.diffCss = exports.diffSentences = exports.diffTrimmedLines = exports.diffLines = exports.diffWordsWithSpace = exports.diffWords = exports.diffChars = exports.Diff = undefined;

	/*istanbul ignore end*/var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_character = __webpack_require__(2) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_word = __webpack_require__(3) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_line = __webpack_require__(5) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_sentence = __webpack_require__(6) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_css = __webpack_require__(7) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_json = __webpack_require__(8) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_array = __webpack_require__(9) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_apply = __webpack_require__(10) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_parse = __webpack_require__(11) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_merge = __webpack_require__(13) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_create = __webpack_require__(14) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_dmp = __webpack_require__(16) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_xml = __webpack_require__(17) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/* See LICENSE file for terms of use */

	/*
	 * Text diff implementation.
	 *
	 * This library supports the following APIS:
	 * JsDiff.diffChars: Character by character diff
	 * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
	 * JsDiff.diffLines: Line based diff
	 *
	 * JsDiff.diffCss: Diff targeted at CSS content
	 *
	 * These methods are based on the implementation proposed in
	 * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
	 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
	 */
	exports. /*istanbul ignore end*/Diff = _base2['default'];
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffChars = _character.diffChars;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWords = _word.diffWords;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWordsWithSpace = _word.diffWordsWithSpace;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffLines = _line.diffLines;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffTrimmedLines = _line.diffTrimmedLines;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffSentences = _sentence.diffSentences;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffCss = _css.diffCss;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffJson = _json.diffJson;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffArrays = _array.diffArrays;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/structuredPatch = _create.structuredPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createTwoFilesPatch = _create.createTwoFilesPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createPatch = _create.createPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatch = _apply.applyPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatches = _apply.applyPatches;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/parsePatch = _parse.parsePatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/merge = _merge.merge;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/convertChangesToDMP = _dmp.convertChangesToDMP;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/convertChangesToXML = _xml.convertChangesToXML;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/canonicalize = _json.canonicalize;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEaWZmIiwiZGlmZkNoYXJzIiwiZGlmZldvcmRzIiwiZGlmZldvcmRzV2l0aFNwYWNlIiwiZGlmZkxpbmVzIiwiZGlmZlRyaW1tZWRMaW5lcyIsImRpZmZTZW50ZW5jZXMiLCJkaWZmQ3NzIiwiZGlmZkpzb24iLCJkaWZmQXJyYXlzIiwic3RydWN0dXJlZFBhdGNoIiwiY3JlYXRlVHdvRmlsZXNQYXRjaCIsImNyZWF0ZVBhdGNoIiwiYXBwbHlQYXRjaCIsImFwcGx5UGF0Y2hlcyIsInBhcnNlUGF0Y2giLCJtZXJnZSIsImNvbnZlcnRDaGFuZ2VzVG9ETVAiLCJjb252ZXJ0Q2hhbmdlc1RvWE1MIiwiY2Fub25pY2FsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozt1QkFnQkE7Ozs7dUJBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFqQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O2dDQWtDRUEsSTt5REFFQUMsUzt5REFDQUMsUzt5REFDQUMsa0I7eURBQ0FDLFM7eURBQ0FDLGdCO3lEQUNBQyxhO3lEQUVBQyxPO3lEQUNBQyxRO3lEQUVBQyxVO3lEQUVBQyxlO3lEQUNBQyxtQjt5REFDQUMsVzt5REFDQUMsVTt5REFDQUMsWTt5REFDQUMsVTt5REFDQUMsSzt5REFDQUMsbUI7eURBQ0FDLG1CO3lEQUNBQyxZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2VlIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMgb2YgdXNlICovXG5cbi8qXG4gKiBUZXh0IGRpZmYgaW1wbGVtZW50YXRpb24uXG4gKlxuICogVGhpcyBsaWJyYXJ5IHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgQVBJUzpcbiAqIEpzRGlmZi5kaWZmQ2hhcnM6IENoYXJhY3RlciBieSBjaGFyYWN0ZXIgZGlmZlxuICogSnNEaWZmLmRpZmZXb3JkczogV29yZCAoYXMgZGVmaW5lZCBieSBcXGIgcmVnZXgpIGRpZmYgd2hpY2ggaWdub3JlcyB3aGl0ZXNwYWNlXG4gKiBKc0RpZmYuZGlmZkxpbmVzOiBMaW5lIGJhc2VkIGRpZmZcbiAqXG4gKiBKc0RpZmYuZGlmZkNzczogRGlmZiB0YXJnZXRlZCBhdCBDU1MgY29udGVudFxuICpcbiAqIFRoZXNlIG1ldGhvZHMgYXJlIGJhc2VkIG9uIHRoZSBpbXBsZW1lbnRhdGlvbiBwcm9wb3NlZCBpblxuICogXCJBbiBPKE5EKSBEaWZmZXJlbmNlIEFsZ29yaXRobSBhbmQgaXRzIFZhcmlhdGlvbnNcIiAoTXllcnMsIDE5ODYpLlxuICogaHR0cDovL2NpdGVzZWVyeC5pc3QucHN1LmVkdS92aWV3ZG9jL3N1bW1hcnk/ZG9pPTEwLjEuMS40LjY5MjdcbiAqL1xuaW1wb3J0IERpZmYgZnJvbSAnLi9kaWZmL2Jhc2UnO1xuaW1wb3J0IHtkaWZmQ2hhcnN9IGZyb20gJy4vZGlmZi9jaGFyYWN0ZXInO1xuaW1wb3J0IHtkaWZmV29yZHMsIGRpZmZXb3Jkc1dpdGhTcGFjZX0gZnJvbSAnLi9kaWZmL3dvcmQnO1xuaW1wb3J0IHtkaWZmTGluZXMsIGRpZmZUcmltbWVkTGluZXN9IGZyb20gJy4vZGlmZi9saW5lJztcbmltcG9ydCB7ZGlmZlNlbnRlbmNlc30gZnJvbSAnLi9kaWZmL3NlbnRlbmNlJztcblxuaW1wb3J0IHtkaWZmQ3NzfSBmcm9tICcuL2RpZmYvY3NzJztcbmltcG9ydCB7ZGlmZkpzb24sIGNhbm9uaWNhbGl6ZX0gZnJvbSAnLi9kaWZmL2pzb24nO1xuXG5pbXBvcnQge2RpZmZBcnJheXN9IGZyb20gJy4vZGlmZi9hcnJheSc7XG5cbmltcG9ydCB7YXBwbHlQYXRjaCwgYXBwbHlQYXRjaGVzfSBmcm9tICcuL3BhdGNoL2FwcGx5JztcbmltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXRjaC9wYXJzZSc7XG5pbXBvcnQge21lcmdlfSBmcm9tICcuL3BhdGNoL21lcmdlJztcbmltcG9ydCB7c3RydWN0dXJlZFBhdGNoLCBjcmVhdGVUd29GaWxlc1BhdGNoLCBjcmVhdGVQYXRjaH0gZnJvbSAnLi9wYXRjaC9jcmVhdGUnO1xuXG5pbXBvcnQge2NvbnZlcnRDaGFuZ2VzVG9ETVB9IGZyb20gJy4vY29udmVydC9kbXAnO1xuaW1wb3J0IHtjb252ZXJ0Q2hhbmdlc1RvWE1MfSBmcm9tICcuL2NvbnZlcnQveG1sJztcblxuZXhwb3J0IHtcbiAgRGlmZixcblxuICBkaWZmQ2hhcnMsXG4gIGRpZmZXb3JkcyxcbiAgZGlmZldvcmRzV2l0aFNwYWNlLFxuICBkaWZmTGluZXMsXG4gIGRpZmZUcmltbWVkTGluZXMsXG4gIGRpZmZTZW50ZW5jZXMsXG5cbiAgZGlmZkNzcyxcbiAgZGlmZkpzb24sXG5cbiAgZGlmZkFycmF5cyxcblxuICBzdHJ1Y3R1cmVkUGF0Y2gsXG4gIGNyZWF0ZVR3b0ZpbGVzUGF0Y2gsXG4gIGNyZWF0ZVBhdGNoLFxuICBhcHBseVBhdGNoLFxuICBhcHBseVBhdGNoZXMsXG4gIHBhcnNlUGF0Y2gsXG4gIG1lcmdlLFxuICBjb252ZXJ0Q2hhbmdlc1RvRE1QLFxuICBjb252ZXJ0Q2hhbmdlc1RvWE1MLFxuICBjYW5vbmljYWxpemVcbn07XG4iXX0=


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports['default'] = /*istanbul ignore end*/Diff;
	function Diff() {}

	Diff.prototype = {
	  /*istanbul ignore start*/ /*istanbul ignore end*/diff: function diff(oldString, newString) {
	    /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var callback = options.callback;
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    this.options = options;

	    var self = this;

	    function done(value) {
	      if (callback) {
	        setTimeout(function () {
	          callback(undefined, value);
	        }, 0);
	        return true;
	      } else {
	        return value;
	      }
	    }

	    // Allow subclasses to massage the input prior to running
	    oldString = this.castInput(oldString);
	    newString = this.castInput(newString);

	    oldString = this.removeEmpty(this.tokenize(oldString));
	    newString = this.removeEmpty(this.tokenize(newString));

	    var newLen = newString.length,
	        oldLen = oldString.length;
	    var editLength = 1;
	    var maxEditLength = newLen + oldLen;
	    var bestPath = [{ newPos: -1, components: [] }];

	    // Seed editLength = 0, i.e. the content starts with the same values
	    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
	    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
	      // Identity per the equality and tokenizer
	      return done([{ value: this.join(newString), count: newString.length }]);
	    }

	    // Main worker method. checks all permutations of a given edit length for acceptance.
	    function execEditLength() {
	      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
	        var basePath = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
	        var addPath = bestPath[diagonalPath - 1],
	            removePath = bestPath[diagonalPath + 1],
	            _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
	        if (addPath) {
	          // No one else is going to attempt to use this value, clear it
	          bestPath[diagonalPath - 1] = undefined;
	        }

	        var canAdd = addPath && addPath.newPos + 1 < newLen,
	            canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
	        if (!canAdd && !canRemove) {
	          // If this path is a terminal then prune
	          bestPath[diagonalPath] = undefined;
	          continue;
	        }

	        // Select the diagonal that we want to branch from. We select the prior
	        // path whose position in the new string is the farthest from the origin
	        // and does not pass the bounds of the diff graph
	        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
	          basePath = clonePath(removePath);
	          self.pushComponent(basePath.components, undefined, true);
	        } else {
	          basePath = addPath; // No need to clone, we've pulled it from the list
	          basePath.newPos++;
	          self.pushComponent(basePath.components, true, undefined);
	        }

	        _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

	        // If we have hit the end of both strings, then we are done
	        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
	          return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
	        } else {
	          // Otherwise track this path as a potential candidate and continue.
	          bestPath[diagonalPath] = basePath;
	        }
	      }

	      editLength++;
	    }

	    // Performs the length of edit iteration. Is a bit fugly as this has to support the
	    // sync and async mode which is never fun. Loops over execEditLength until a value
	    // is produced.
	    if (callback) {
	      (function exec() {
	        setTimeout(function () {
	          // This should not happen, but we want to be safe.
	          /* istanbul ignore next */
	          if (editLength > maxEditLength) {
	            return callback();
	          }

	          if (!execEditLength()) {
	            exec();
	          }
	        }, 0);
	      })();
	    } else {
	      while (editLength <= maxEditLength) {
	        var ret = execEditLength();
	        if (ret) {
	          return ret;
	        }
	      }
	    }
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/pushComponent: function pushComponent(components, added, removed) {
	    var last = components[components.length - 1];
	    if (last && last.added === added && last.removed === removed) {
	      // We need to clone here as the component clone operation is just
	      // as shallow array clone
	      components[components.length - 1] = { count: last.count + 1, added: added, removed: removed };
	    } else {
	      components.push({ count: 1, added: added, removed: removed });
	    }
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
	    var newLen = newString.length,
	        oldLen = oldString.length,
	        newPos = basePath.newPos,
	        oldPos = newPos - diagonalPath,
	        commonCount = 0;
	    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
	      newPos++;
	      oldPos++;
	      commonCount++;
	    }

	    if (commonCount) {
	      basePath.components.push({ count: commonCount });
	    }

	    basePath.newPos = newPos;
	    return oldPos;
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/equals: function equals(left, right) {
	    if (this.options.comparator) {
	      return this.options.comparator(left, right);
	    } else {
	      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
	    }
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/removeEmpty: function removeEmpty(array) {
	    var ret = [];
	    for (var i = 0; i < array.length; i++) {
	      if (array[i]) {
	        ret.push(array[i]);
	      }
	    }
	    return ret;
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/castInput: function castInput(value) {
	    return value;
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/tokenize: function tokenize(value) {
	    return value.split('');
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/join: function join(chars) {
	    return chars.join('');
	  }
	};

	function buildValues(diff, components, newString, oldString, useLongestToken) {
	  var componentPos = 0,
	      componentLen = components.length,
	      newPos = 0,
	      oldPos = 0;

	  for (; componentPos < componentLen; componentPos++) {
	    var component = components[componentPos];
	    if (!component.removed) {
	      if (!component.added && useLongestToken) {
	        var value = newString.slice(newPos, newPos + component.count);
	        value = value.map(function (value, i) {
	          var oldValue = oldString[oldPos + i];
	          return oldValue.length > value.length ? oldValue : value;
	        });

	        component.value = diff.join(value);
	      } else {
	        component.value = diff.join(newString.slice(newPos, newPos + component.count));
	      }
	      newPos += component.count;

	      // Common case
	      if (!component.added) {
	        oldPos += component.count;
	      }
	    } else {
	      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
	      oldPos += component.count;

	      // Reverse add and remove so removes are output first to match common convention
	      // The diffing algorithm is tied to add then remove output and this is the simplest
	      // route to get the desired output with minimal overhead.
	      if (componentPos && components[componentPos - 1].added) {
	        var tmp = components[componentPos - 1];
	        components[componentPos - 1] = components[componentPos];
	        components[componentPos] = tmp;
	      }
	    }
	  }

	  // Special case handle for when one terminal is ignored (i.e. whitespace).
	  // For this case we merge the terminal into the prior string and drop the change.
	  // This is only available for string mode.
	  var lastComponent = components[componentLen - 1];
	  if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
	    components[componentLen - 2].value += lastComponent.value;
	    components.pop();
	  }

	  return components;
	}

	function clonePath(path) {
	  return { newPos: path.newPos, components: path.components.slice(0) };
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Jhc2UuanMiXSwibmFtZXMiOlsiRGlmZiIsInByb3RvdHlwZSIsImRpZmYiLCJvbGRTdHJpbmciLCJuZXdTdHJpbmciLCJvcHRpb25zIiwiY2FsbGJhY2siLCJzZWxmIiwiZG9uZSIsInZhbHVlIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImNhc3RJbnB1dCIsInJlbW92ZUVtcHR5IiwidG9rZW5pemUiLCJuZXdMZW4iLCJsZW5ndGgiLCJvbGRMZW4iLCJlZGl0TGVuZ3RoIiwibWF4RWRpdExlbmd0aCIsImJlc3RQYXRoIiwibmV3UG9zIiwiY29tcG9uZW50cyIsIm9sZFBvcyIsImV4dHJhY3RDb21tb24iLCJqb2luIiwiY291bnQiLCJleGVjRWRpdExlbmd0aCIsImRpYWdvbmFsUGF0aCIsImJhc2VQYXRoIiwiYWRkUGF0aCIsInJlbW92ZVBhdGgiLCJjYW5BZGQiLCJjYW5SZW1vdmUiLCJjbG9uZVBhdGgiLCJwdXNoQ29tcG9uZW50IiwiYnVpbGRWYWx1ZXMiLCJ1c2VMb25nZXN0VG9rZW4iLCJleGVjIiwicmV0IiwiYWRkZWQiLCJyZW1vdmVkIiwibGFzdCIsInB1c2giLCJjb21tb25Db3VudCIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsImNvbXBhcmF0b3IiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJhcnJheSIsImkiLCJzcGxpdCIsImNoYXJzIiwiY29tcG9uZW50UG9zIiwiY29tcG9uZW50TGVuIiwiY29tcG9uZW50Iiwic2xpY2UiLCJtYXAiLCJvbGRWYWx1ZSIsInRtcCIsImxhc3RDb21wb25lbnQiLCJwb3AiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7NENBQXdCQSxJO0FBQVQsU0FBU0EsSUFBVCxHQUFnQixDQUFFOztBQUVqQ0EsS0FBS0MsU0FBTCxHQUFpQjtBQUFBLG1EQUNmQyxJQURlLGdCQUNWQyxTQURVLEVBQ0NDLFNBREQsRUFDMEI7QUFBQSx3REFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUN2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RUFBd0JBLFNBQVNrQyxVQUFVL0IsS0FBM0MsQ0FBVixDQUFsQjtBQUNBSCxnQkFBVWtDLFVBQVUvQixLQUFwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFJNkIsZ0JBQWdCakMsV0FBV2lDLGVBQWUsQ0FBMUIsRUFBNkJmLEtBQWpELEVBQXdEO0FBQ3RELFlBQUlxQixNQUFNdkMsV0FBV2lDLGVBQWUsQ0FBMUIsQ0FBVjtBQUNBakMsbUJBQVdpQyxlQUFlLENBQTFCLElBQStCakMsV0FBV2lDLFlBQVgsQ0FBL0I7QUFDQWpDLG1CQUFXaUMsWUFBWCxJQUEyQk0sR0FBM0I7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsTUFBSUMsZ0JBQWdCeEMsV0FBV2tDLGVBQWUsQ0FBMUIsQ0FBcEI7QUFDQSxNQUFJQSxlQUFlLENBQWYsSUFDRyxPQUFPTSxjQUFjckQsS0FBckIsS0FBK0IsUUFEbEMsS0FFSXFELGNBQWN0QixLQUFkLElBQXVCc0IsY0FBY3JCLE9BRnpDLEtBR0d2QyxLQUFLMkMsTUFBTCxDQUFZLEVBQVosRUFBZ0JpQixjQUFjckQsS0FBOUIsQ0FIUCxFQUc2QztBQUMzQ2EsZUFBV2tDLGVBQWUsQ0FBMUIsRUFBNkIvQyxLQUE3QixJQUFzQ3FELGNBQWNyRCxLQUFwRDtBQUNBYSxlQUFXeUMsR0FBWDtBQUNEOztBQUVELFNBQU96QyxVQUFQO0FBQ0Q7O0FBRUQsU0FBU1ksU0FBVCxDQUFtQjhCLElBQW5CLEVBQXlCO0FBQ3ZCLFNBQU8sRUFBRTNDLFFBQVEyQyxLQUFLM0MsTUFBZixFQUF1QkMsWUFBWTBDLEtBQUsxQyxVQUFMLENBQWdCb0MsS0FBaEIsQ0FBc0IsQ0FBdEIsQ0FBbkMsRUFBUDtBQUNEIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaWZmKCkge31cblxuRGlmZi5wcm90b3R5cGUgPSB7XG4gIGRpZmYob2xkU3RyaW5nLCBuZXdTdHJpbmcsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBkb25lKHZhbHVlKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2sodW5kZWZpbmVkLCB2YWx1ZSk7IH0sIDApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBbGxvdyBzdWJjbGFzc2VzIHRvIG1hc3NhZ2UgdGhlIGlucHV0IHByaW9yIHRvIHJ1bm5pbmdcbiAgICBvbGRTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChvbGRTdHJpbmcpO1xuICAgIG5ld1N0cmluZyA9IHRoaXMuY2FzdElucHV0KG5ld1N0cmluZyk7XG5cbiAgICBvbGRTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUob2xkU3RyaW5nKSk7XG4gICAgbmV3U3RyaW5nID0gdGhpcy5yZW1vdmVFbXB0eSh0aGlzLnRva2VuaXplKG5ld1N0cmluZykpO1xuXG4gICAgbGV0IG5ld0xlbiA9IG5ld1N0cmluZy5sZW5ndGgsIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGg7XG4gICAgbGV0IGVkaXRMZW5ndGggPSAxO1xuICAgIGxldCBtYXhFZGl0TGVuZ3RoID0gbmV3TGVuICsgb2xkTGVuO1xuICAgIGxldCBiZXN0UGF0aCA9IFt7IG5ld1BvczogLTEsIGNvbXBvbmVudHM6IFtdIH1dO1xuXG4gICAgLy8gU2VlZCBlZGl0TGVuZ3RoID0gMCwgaS5lLiB0aGUgY29udGVudCBzdGFydHMgd2l0aCB0aGUgc2FtZSB2YWx1ZXNcbiAgICBsZXQgb2xkUG9zID0gdGhpcy5leHRyYWN0Q29tbW9uKGJlc3RQYXRoWzBdLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgMCk7XG4gICAgaWYgKGJlc3RQYXRoWzBdLm5ld1BvcyArIDEgPj0gbmV3TGVuICYmIG9sZFBvcyArIDEgPj0gb2xkTGVuKSB7XG4gICAgICAvLyBJZGVudGl0eSBwZXIgdGhlIGVxdWFsaXR5IGFuZCB0b2tlbml6ZXJcbiAgICAgIHJldHVybiBkb25lKFt7dmFsdWU6IHRoaXMuam9pbihuZXdTdHJpbmcpLCBjb3VudDogbmV3U3RyaW5nLmxlbmd0aH1dKTtcbiAgICB9XG5cbiAgICAvLyBNYWluIHdvcmtlciBtZXRob2QuIGNoZWNrcyBhbGwgcGVybXV0YXRpb25zIG9mIGEgZ2l2ZW4gZWRpdCBsZW5ndGggZm9yIGFjY2VwdGFuY2UuXG4gICAgZnVuY3Rpb24gZXhlY0VkaXRMZW5ndGgoKSB7XG4gICAgICBmb3IgKGxldCBkaWFnb25hbFBhdGggPSAtMSAqIGVkaXRMZW5ndGg7IGRpYWdvbmFsUGF0aCA8PSBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggKz0gMikge1xuICAgICAgICBsZXQgYmFzZVBhdGg7XG4gICAgICAgIGxldCBhZGRQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0sXG4gICAgICAgICAgICByZW1vdmVQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoICsgMV0sXG4gICAgICAgICAgICBvbGRQb3MgPSAocmVtb3ZlUGF0aCA/IHJlbW92ZVBhdGgubmV3UG9zIDogMCkgLSBkaWFnb25hbFBhdGg7XG4gICAgICAgIGlmIChhZGRQYXRoKSB7XG4gICAgICAgICAgLy8gTm8gb25lIGVsc2UgaXMgZ29pbmcgdG8gYXR0ZW1wdCB0byB1c2UgdGhpcyB2YWx1ZSwgY2xlYXIgaXRcbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYW5BZGQgPSBhZGRQYXRoICYmIGFkZFBhdGgubmV3UG9zICsgMSA8IG5ld0xlbixcbiAgICAgICAgICAgIGNhblJlbW92ZSA9IHJlbW92ZVBhdGggJiYgMCA8PSBvbGRQb3MgJiYgb2xkUG9zIDwgb2xkTGVuO1xuICAgICAgICBpZiAoIWNhbkFkZCAmJiAhY2FuUmVtb3ZlKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBwYXRoIGlzIGEgdGVybWluYWwgdGhlbiBwcnVuZVxuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGRpYWdvbmFsIHRoYXQgd2Ugd2FudCB0byBicmFuY2ggZnJvbS4gV2Ugc2VsZWN0IHRoZSBwcmlvclxuICAgICAgICAvLyBwYXRoIHdob3NlIHBvc2l0aW9uIGluIHRoZSBuZXcgc3RyaW5nIGlzIHRoZSBmYXJ0aGVzdCBmcm9tIHRoZSBvcmlnaW5cbiAgICAgICAgLy8gYW5kIGRvZXMgbm90IHBhc3MgdGhlIGJvdW5kcyBvZiB0aGUgZGlmZiBncmFwaFxuICAgICAgICBpZiAoIWNhbkFkZCB8fCAoY2FuUmVtb3ZlICYmIGFkZFBhdGgubmV3UG9zIDwgcmVtb3ZlUGF0aC5uZXdQb3MpKSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBjbG9uZVBhdGgocmVtb3ZlUGF0aCk7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBhZGRQYXRoOyAgIC8vIE5vIG5lZWQgdG8gY2xvbmUsIHdlJ3ZlIHB1bGxlZCBpdCBmcm9tIHRoZSBsaXN0XG4gICAgICAgICAgYmFzZVBhdGgubmV3UG9zKys7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHRydWUsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbGRQb3MgPSBzZWxmLmV4dHJhY3RDb21tb24oYmFzZVBhdGgsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBkaWFnb25hbFBhdGgpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgaGl0IHRoZSBlbmQgb2YgYm90aCBzdHJpbmdzLCB0aGVuIHdlIGFyZSBkb25lXG4gICAgICAgIGlmIChiYXNlUGF0aC5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBvbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgICAgIHJldHVybiBkb25lKGJ1aWxkVmFsdWVzKHNlbGYsIGJhc2VQYXRoLmNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBzZWxmLnVzZUxvbmdlc3RUb2tlbikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSB0cmFjayB0aGlzIHBhdGggYXMgYSBwb3RlbnRpYWwgY2FuZGlkYXRlIGFuZCBjb250aW51ZS5cbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWRpdExlbmd0aCsrO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm1zIHRoZSBsZW5ndGggb2YgZWRpdCBpdGVyYXRpb24uIElzIGEgYml0IGZ1Z2x5IGFzIHRoaXMgaGFzIHRvIHN1cHBvcnQgdGhlXG4gICAgLy8gc3luYyBhbmQgYXN5bmMgbW9kZSB3aGljaCBpcyBuZXZlciBmdW4uIExvb3BzIG92ZXIgZXhlY0VkaXRMZW5ndGggdW50aWwgYSB2YWx1ZVxuICAgIC8vIGlzIHByb2R1Y2VkLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgKGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IHdlIHdhbnQgdG8gYmUgc2FmZS5cbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGlmIChlZGl0TGVuZ3RoID4gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFleGVjRWRpdExlbmd0aCgpKSB7XG4gICAgICAgICAgICBleGVjKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH0oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChlZGl0TGVuZ3RoIDw9IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgbGV0IHJldCA9IGV4ZWNFZGl0TGVuZ3RoKCk7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHB1c2hDb21wb25lbnQoY29tcG9uZW50cywgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICBsZXQgbGFzdCA9IGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXTtcbiAgICBpZiAobGFzdCAmJiBsYXN0LmFkZGVkID09PSBhZGRlZCAmJiBsYXN0LnJlbW92ZWQgPT09IHJlbW92ZWQpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gY2xvbmUgaGVyZSBhcyB0aGUgY29tcG9uZW50IGNsb25lIG9wZXJhdGlvbiBpcyBqdXN0XG4gICAgICAvLyBhcyBzaGFsbG93IGFycmF5IGNsb25lXG4gICAgICBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV0gPSB7Y291bnQ6IGxhc3QuY291bnQgKyAxLCBhZGRlZDogYWRkZWQsIHJlbW92ZWQ6IHJlbW92ZWQgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50cy5wdXNoKHtjb3VudDogMSwgYWRkZWQ6IGFkZGVkLCByZW1vdmVkOiByZW1vdmVkIH0pO1xuICAgIH1cbiAgfSxcbiAgZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCkge1xuICAgIGxldCBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxuICAgICAgICBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoLFxuICAgICAgICBuZXdQb3MgPSBiYXNlUGF0aC5uZXdQb3MsXG4gICAgICAgIG9sZFBvcyA9IG5ld1BvcyAtIGRpYWdvbmFsUGF0aCxcblxuICAgICAgICBjb21tb25Db3VudCA9IDA7XG4gICAgd2hpbGUgKG5ld1BvcyArIDEgPCBuZXdMZW4gJiYgb2xkUG9zICsgMSA8IG9sZExlbiAmJiB0aGlzLmVxdWFscyhuZXdTdHJpbmdbbmV3UG9zICsgMV0sIG9sZFN0cmluZ1tvbGRQb3MgKyAxXSkpIHtcbiAgICAgIG5ld1BvcysrO1xuICAgICAgb2xkUG9zKys7XG4gICAgICBjb21tb25Db3VudCsrO1xuICAgIH1cblxuICAgIGlmIChjb21tb25Db3VudCkge1xuICAgICAgYmFzZVBhdGguY29tcG9uZW50cy5wdXNoKHtjb3VudDogY29tbW9uQ291bnR9KTtcbiAgICB9XG5cbiAgICBiYXNlUGF0aC5uZXdQb3MgPSBuZXdQb3M7XG4gICAgcmV0dXJuIG9sZFBvcztcbiAgfSxcblxuICBlcXVhbHMobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29tcGFyYXRvcihsZWZ0LCByaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsZWZ0ID09PSByaWdodFxuICAgICAgICB8fCAodGhpcy5vcHRpb25zLmlnbm9yZUNhc2UgJiYgbGVmdC50b0xvd2VyQ2FzZSgpID09PSByaWdodC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUVtcHR5KGFycmF5KSB7XG4gICAgbGV0IHJldCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJheVtpXSkge1xuICAgICAgICByZXQucHVzaChhcnJheVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIGNhc3RJbnB1dCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgdG9rZW5pemUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoJycpO1xuICB9LFxuICBqb2luKGNoYXJzKSB7XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBidWlsZFZhbHVlcyhkaWZmLCBjb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgdXNlTG9uZ2VzdFRva2VuKSB7XG4gIGxldCBjb21wb25lbnRQb3MgPSAwLFxuICAgICAgY29tcG9uZW50TGVuID0gY29tcG9uZW50cy5sZW5ndGgsXG4gICAgICBuZXdQb3MgPSAwLFxuICAgICAgb2xkUG9zID0gMDtcblxuICBmb3IgKDsgY29tcG9uZW50UG9zIDwgY29tcG9uZW50TGVuOyBjb21wb25lbnRQb3MrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgaWYgKCFjb21wb25lbnQucmVtb3ZlZCkge1xuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQgJiYgdXNlTG9uZ2VzdFRva2VuKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCk7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uKHZhbHVlLCBpKSB7XG4gICAgICAgICAgbGV0IG9sZFZhbHVlID0gb2xkU3RyaW5nW29sZFBvcyArIGldO1xuICAgICAgICAgIHJldHVybiBvbGRWYWx1ZS5sZW5ndGggPiB2YWx1ZS5sZW5ndGggPyBvbGRWYWx1ZSA6IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4odmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgfVxuICAgICAgbmV3UG9zICs9IGNvbXBvbmVudC5jb3VudDtcblxuICAgICAgLy8gQ29tbW9uIGNhc2VcbiAgICAgIGlmICghY29tcG9uZW50LmFkZGVkKSB7XG4gICAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbihvbGRTdHJpbmcuc2xpY2Uob2xkUG9zLCBvbGRQb3MgKyBjb21wb25lbnQuY291bnQpKTtcbiAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7XG5cbiAgICAgIC8vIFJldmVyc2UgYWRkIGFuZCByZW1vdmUgc28gcmVtb3ZlcyBhcmUgb3V0cHV0IGZpcnN0IHRvIG1hdGNoIGNvbW1vbiBjb252ZW50aW9uXG4gICAgICAvLyBUaGUgZGlmZmluZyBhbGdvcml0aG0gaXMgdGllZCB0byBhZGQgdGhlbiByZW1vdmUgb3V0cHV0IGFuZCB0aGlzIGlzIHRoZSBzaW1wbGVzdFxuICAgICAgLy8gcm91dGUgdG8gZ2V0IHRoZSBkZXNpcmVkIG91dHB1dCB3aXRoIG1pbmltYWwgb3ZlcmhlYWQuXG4gICAgICBpZiAoY29tcG9uZW50UG9zICYmIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0uYWRkZWQpIHtcbiAgICAgICAgbGV0IHRtcCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV07XG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0gPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zXSA9IHRtcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTcGVjaWFsIGNhc2UgaGFuZGxlIGZvciB3aGVuIG9uZSB0ZXJtaW5hbCBpcyBpZ25vcmVkIChpLmUuIHdoaXRlc3BhY2UpLlxuICAvLyBGb3IgdGhpcyBjYXNlIHdlIG1lcmdlIHRoZSB0ZXJtaW5hbCBpbnRvIHRoZSBwcmlvciBzdHJpbmcgYW5kIGRyb3AgdGhlIGNoYW5nZS5cbiAgLy8gVGhpcyBpcyBvbmx5IGF2YWlsYWJsZSBmb3Igc3RyaW5nIG1vZGUuXG4gIGxldCBsYXN0Q29tcG9uZW50ID0gY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAxXTtcbiAgaWYgKGNvbXBvbmVudExlbiA+IDFcbiAgICAgICYmIHR5cGVvZiBsYXN0Q29tcG9uZW50LnZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgJiYgKGxhc3RDb21wb25lbnQuYWRkZWQgfHwgbGFzdENvbXBvbmVudC5yZW1vdmVkKVxuICAgICAgJiYgZGlmZi5lcXVhbHMoJycsIGxhc3RDb21wb25lbnQudmFsdWUpKSB7XG4gICAgY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAyXS52YWx1ZSArPSBsYXN0Q29tcG9uZW50LnZhbHVlO1xuICAgIGNvbXBvbmVudHMucG9wKCk7XG4gIH1cblxuICByZXR1cm4gY29tcG9uZW50cztcbn1cblxuZnVuY3Rpb24gY2xvbmVQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIHsgbmV3UG9zOiBwYXRoLm5ld1BvcywgY29tcG9uZW50czogcGF0aC5jb21wb25lbnRzLnNsaWNlKDApIH07XG59XG4iXX0=


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.characterDiff = undefined;
	exports. /*istanbul ignore end*/diffChars = diffChars;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var characterDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/characterDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	function diffChars(oldStr, newStr, options) {
	  return characterDiff.diff(oldStr, newStr, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2NoYXJhY3Rlci5qcyJdLCJuYW1lcyI6WyJkaWZmQ2hhcnMiLCJjaGFyYWN0ZXJEaWZmIiwib2xkU3RyIiwibmV3U3RyIiwib3B0aW9ucyIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBR2dCQSxTLEdBQUFBLFM7O0FBSGhCOzs7Ozs7dUJBRU8sSUFBTUMseUZBQWdCLHdFQUF0QjtBQUNBLFNBQVNELFNBQVQsQ0FBbUJFLE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQ0MsT0FBbkMsRUFBNEM7QUFBRSxTQUFPSCxjQUFjSSxJQUFkLENBQW1CSCxNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNDLE9BQW5DLENBQVA7QUFBcUQiLCJmaWxlIjoiY2hhcmFjdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGNvbnN0IGNoYXJhY3RlckRpZmYgPSBuZXcgRGlmZigpO1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZDaGFycyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykgeyByZXR1cm4gY2hhcmFjdGVyRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTsgfVxuIl19


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.wordDiff = undefined;
	exports. /*istanbul ignore end*/diffWords = diffWords;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWordsWithSpace = diffWordsWithSpace;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_params = __webpack_require__(4) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/ // Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode
	//
	// Ranges and exceptions:
	// Latin-1 Supplement, 0080–00FF
	//  - U+00D7  × Multiplication sign
	//  - U+00F7  ÷ Division sign
	// Latin Extended-A, 0100–017F
	// Latin Extended-B, 0180–024F
	// IPA Extensions, 0250–02AF
	// Spacing Modifier Letters, 02B0–02FF
	//  - U+02C7  ˇ &#711;  Caron
	//  - U+02D8  ˘ &#728;  Breve
	//  - U+02D9  ˙ &#729;  Dot Above
	//  - U+02DA  ˚ &#730;  Ring Above
	//  - U+02DB  ˛ &#731;  Ogonek
	//  - U+02DC  ˜ &#732;  Small Tilde
	//  - U+02DD  ˝ &#733;  Double Acute Accent
	// Latin Extended Additional, 1E00–1EFF
	var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;

	var reWhitespace = /\S/;

	var wordDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/wordDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	wordDiff.equals = function (left, right) {
	  if (this.options.ignoreCase) {
	    left = left.toLowerCase();
	    right = right.toLowerCase();
	  }
	  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
	};
	wordDiff.tokenize = function (value) {
	  var tokens = value.split(/(\s+|\b)/);

	  // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.
	  for (var i = 0; i < tokens.length - 1; i++) {
	    // If we have an empty string in the next field and we have only word chars before and after, merge
	    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
	      tokens[i] += tokens[i + 2];
	      tokens.splice(i + 1, 2);
	      i--;
	    }
	  }

	  return tokens;
	};

	function diffWords(oldStr, newStr, options) {
	  options = /*istanbul ignore start*/(0, _params.generateOptions) /*istanbul ignore end*/(options, { ignoreWhitespace: true });
	  return wordDiff.diff(oldStr, newStr, options);
	}

	function diffWordsWithSpace(oldStr, newStr, options) {
	  return wordDiff.diff(oldStr, newStr, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3dvcmQuanMiXSwibmFtZXMiOlsiZGlmZldvcmRzIiwiZGlmZldvcmRzV2l0aFNwYWNlIiwiZXh0ZW5kZWRXb3JkQ2hhcnMiLCJyZVdoaXRlc3BhY2UiLCJ3b3JkRGlmZiIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsIm9wdGlvbnMiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJpZ25vcmVXaGl0ZXNwYWNlIiwidGVzdCIsInRva2VuaXplIiwidmFsdWUiLCJ0b2tlbnMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJvbGRTdHIiLCJuZXdTdHIiLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7O2dDQW1EZ0JBLFMsR0FBQUEsUzt5REFLQUMsa0IsR0FBQUEsa0I7O0FBeERoQjs7Ozt1QkFDQTs7Ozt3QkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxvQkFBb0IsK0RBQTFCOztBQUVBLElBQU1DLGVBQWUsSUFBckI7O0FBRU8sSUFBTUMsK0VBQVcsd0VBQWpCO0FBQ1BBLFNBQVNDLE1BQVQsR0FBa0IsVUFBU0MsSUFBVCxFQUFlQyxLQUFmLEVBQXNCO0FBQ3RDLE1BQUksS0FBS0MsT0FBTCxDQUFhQyxVQUFqQixFQUE2QjtBQUMzQkgsV0FBT0EsS0FBS0ksV0FBTCxFQUFQO0FBQ0FILFlBQVFBLE1BQU1HLFdBQU4sRUFBUjtBQUNEO0FBQ0QsU0FBT0osU0FBU0MsS0FBVCxJQUFtQixLQUFLQyxPQUFMLENBQWFHLGdCQUFiLElBQWlDLENBQUNSLGFBQWFTLElBQWIsQ0FBa0JOLElBQWxCLENBQWxDLElBQTZELENBQUNILGFBQWFTLElBQWIsQ0FBa0JMLEtBQWxCLENBQXhGO0FBQ0QsQ0FORDtBQU9BSCxTQUFTUyxRQUFULEdBQW9CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEMsTUFBSUMsU0FBU0QsTUFBTUUsS0FBTixDQUFZLFVBQVosQ0FBYjs7QUFFQTtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixPQUFPRyxNQUFQLEdBQWdCLENBQXBDLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMxQztBQUNBLFFBQUksQ0FBQ0YsT0FBT0UsSUFBSSxDQUFYLENBQUQsSUFBa0JGLE9BQU9FLElBQUksQ0FBWCxDQUFsQixJQUNLZixrQkFBa0JVLElBQWxCLENBQXVCRyxPQUFPRSxDQUFQLENBQXZCLENBREwsSUFFS2Ysa0JBQWtCVSxJQUFsQixDQUF1QkcsT0FBT0UsSUFBSSxDQUFYLENBQXZCLENBRlQsRUFFZ0Q7QUFDOUNGLGFBQU9FLENBQVAsS0FBYUYsT0FBT0UsSUFBSSxDQUFYLENBQWI7QUFDQUYsYUFBT0ksTUFBUCxDQUFjRixJQUFJLENBQWxCLEVBQXFCLENBQXJCO0FBQ0FBO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPRixNQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JPLFNBQVNmLFNBQVQsQ0FBbUJvQixNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNiLE9BQW5DLEVBQTRDO0FBQ2pEQSxZQUFVLDhFQUFnQkEsT0FBaEIsRUFBeUIsRUFBQ0csa0JBQWtCLElBQW5CLEVBQXpCLENBQVY7QUFDQSxTQUFPUCxTQUFTa0IsSUFBVCxDQUFjRixNQUFkLEVBQXNCQyxNQUF0QixFQUE4QmIsT0FBOUIsQ0FBUDtBQUNEOztBQUVNLFNBQVNQLGtCQUFULENBQTRCbUIsTUFBNUIsRUFBb0NDLE1BQXBDLEVBQTRDYixPQUE1QyxFQUFxRDtBQUMxRCxTQUFPSixTQUFTa0IsSUFBVCxDQUFjRixNQUFkLEVBQXNCQyxNQUF0QixFQUE4QmIsT0FBOUIsQ0FBUDtBQUNEIiwiZmlsZSI6IndvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlmZiBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHtnZW5lcmF0ZU9wdGlvbnN9IGZyb20gJy4uL3V0aWwvcGFyYW1zJztcblxuLy8gQmFzZWQgb24gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fc2NyaXB0X2luX1VuaWNvZGVcbi8vXG4vLyBSYW5nZXMgYW5kIGV4Y2VwdGlvbnM6XG4vLyBMYXRpbi0xIFN1cHBsZW1lbnQsIDAwODDigJMwMEZGXG4vLyAgLSBVKzAwRDcgIMOXIE11bHRpcGxpY2F0aW9uIHNpZ25cbi8vICAtIFUrMDBGNyAgw7cgRGl2aXNpb24gc2lnblxuLy8gTGF0aW4gRXh0ZW5kZWQtQSwgMDEwMOKAkzAxN0Zcbi8vIExhdGluIEV4dGVuZGVkLUIsIDAxODDigJMwMjRGXG4vLyBJUEEgRXh0ZW5zaW9ucywgMDI1MOKAkzAyQUZcbi8vIFNwYWNpbmcgTW9kaWZpZXIgTGV0dGVycywgMDJCMOKAkzAyRkZcbi8vICAtIFUrMDJDNyAgy4cgJiM3MTE7ICBDYXJvblxuLy8gIC0gVSswMkQ4ICDLmCAmIzcyODsgIEJyZXZlXG4vLyAgLSBVKzAyRDkgIMuZICYjNzI5OyAgRG90IEFib3ZlXG4vLyAgLSBVKzAyREEgIMuaICYjNzMwOyAgUmluZyBBYm92ZVxuLy8gIC0gVSswMkRCICDLmyAmIzczMTsgIE9nb25la1xuLy8gIC0gVSswMkRDICDLnCAmIzczMjsgIFNtYWxsIFRpbGRlXG4vLyAgLSBVKzAyREQgIMudICYjNzMzOyAgRG91YmxlIEFjdXRlIEFjY2VudFxuLy8gTGF0aW4gRXh0ZW5kZWQgQWRkaXRpb25hbCwgMUUwMOKAkzFFRkZcbmNvbnN0IGV4dGVuZGVkV29yZENoYXJzID0gL15bYS16QS1aXFx1e0MwfS1cXHV7RkZ9XFx1e0Q4fS1cXHV7RjZ9XFx1e0Y4fS1cXHV7MkM2fVxcdXsyQzh9LVxcdXsyRDd9XFx1ezJERX0tXFx1ezJGRn1cXHV7MUUwMH0tXFx1ezFFRkZ9XSskL3U7XG5cbmNvbnN0IHJlV2hpdGVzcGFjZSA9IC9cXFMvO1xuXG5leHBvcnQgY29uc3Qgd29yZERpZmYgPSBuZXcgRGlmZigpO1xud29yZERpZmYuZXF1YWxzID0gZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5pZ25vcmVDYXNlKSB7XG4gICAgbGVmdCA9IGxlZnQudG9Mb3dlckNhc2UoKTtcbiAgICByaWdodCA9IHJpZ2h0LnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0IHx8ICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSAmJiAhcmVXaGl0ZXNwYWNlLnRlc3QobGVmdCkgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KHJpZ2h0KSk7XG59O1xud29yZERpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBsZXQgdG9rZW5zID0gdmFsdWUuc3BsaXQoLyhcXHMrfFxcYikvKTtcblxuICAvLyBKb2luIHRoZSBib3VuZGFyeSBzcGxpdHMgdGhhdCB3ZSBkbyBub3QgY29uc2lkZXIgdG8gYmUgYm91bmRhcmllcy4gVGhpcyBpcyBwcmltYXJpbHkgdGhlIGV4dGVuZGVkIExhdGluIGNoYXJhY3RlciBzZXQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIC8vIElmIHdlIGhhdmUgYW4gZW1wdHkgc3RyaW5nIGluIHRoZSBuZXh0IGZpZWxkIGFuZCB3ZSBoYXZlIG9ubHkgd29yZCBjaGFycyBiZWZvcmUgYW5kIGFmdGVyLCBtZXJnZVxuICAgIGlmICghdG9rZW5zW2kgKyAxXSAmJiB0b2tlbnNbaSArIDJdXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaV0pXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaSArIDJdKSkge1xuICAgICAgdG9rZW5zW2ldICs9IHRva2Vuc1tpICsgMl07XG4gICAgICB0b2tlbnMuc3BsaWNlKGkgKyAxLCAyKTtcbiAgICAgIGktLTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3JkcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICBvcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIHtpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3Jkc1dpdGhTcGFjZShvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG59XG4iXX0=


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/generateOptions = generateOptions;
	function generateOptions(options, defaults) {
	  if (typeof options === 'function') {
	    defaults.callback = options;
	  } else if (options) {
	    for (var name in options) {
	      /* istanbul ignore else */
	      if (options.hasOwnProperty(name)) {
	        defaults[name] = options[name];
	      }
	    }
	  }
	  return defaults;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3BhcmFtcy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZU9wdGlvbnMiLCJvcHRpb25zIiwiZGVmYXVsdHMiLCJjYWxsYmFjayIsIm5hbWUiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7O2dDQUFnQkEsZSxHQUFBQSxlO0FBQVQsU0FBU0EsZUFBVCxDQUF5QkMsT0FBekIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQ2pELE1BQUksT0FBT0QsT0FBUCxLQUFtQixVQUF2QixFQUFtQztBQUNqQ0MsYUFBU0MsUUFBVCxHQUFvQkYsT0FBcEI7QUFDRCxHQUZELE1BRU8sSUFBSUEsT0FBSixFQUFhO0FBQ2xCLFNBQUssSUFBSUcsSUFBVCxJQUFpQkgsT0FBakIsRUFBMEI7QUFDeEI7QUFDQSxVQUFJQSxRQUFRSSxjQUFSLENBQXVCRCxJQUF2QixDQUFKLEVBQWtDO0FBQ2hDRixpQkFBU0UsSUFBVCxJQUFpQkgsUUFBUUcsSUFBUixDQUFqQjtBQUNEO0FBQ0Y7QUFDRjtBQUNELFNBQU9GLFFBQVA7QUFDRCIsImZpbGUiOiJwYXJhbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRlZmF1bHRzLmNhbGxiYWNrID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmIChvcHRpb25zKSB7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgZGVmYXVsdHNbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGVmYXVsdHM7XG59XG4iXX0=


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.lineDiff = undefined;
	exports. /*istanbul ignore end*/diffLines = diffLines;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffTrimmedLines = diffTrimmedLines;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_params = __webpack_require__(4) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var lineDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/lineDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	lineDiff.tokenize = function (value) {
	  var retLines = [],
	      linesAndNewlines = value.split(/(\n|\r\n)/);

	  // Ignore the final empty token that occurs if the string ends with a new line
	  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
	    linesAndNewlines.pop();
	  }

	  // Merge the content and line separators into single tokens
	  for (var i = 0; i < linesAndNewlines.length; i++) {
	    var line = linesAndNewlines[i];

	    if (i % 2 && !this.options.newlineIsToken) {
	      retLines[retLines.length - 1] += line;
	    } else {
	      if (this.options.ignoreWhitespace) {
	        line = line.trim();
	      }
	      retLines.push(line);
	    }
	  }

	  return retLines;
	};

	function diffLines(oldStr, newStr, callback) {
	  return lineDiff.diff(oldStr, newStr, callback);
	}
	function diffTrimmedLines(oldStr, newStr, callback) {
	  var options = /*istanbul ignore start*/(0, _params.generateOptions) /*istanbul ignore end*/(callback, { ignoreWhitespace: true });
	  return lineDiff.diff(oldStr, newStr, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2xpbmUuanMiXSwibmFtZXMiOlsiZGlmZkxpbmVzIiwiZGlmZlRyaW1tZWRMaW5lcyIsImxpbmVEaWZmIiwidG9rZW5pemUiLCJ2YWx1ZSIsInJldExpbmVzIiwibGluZXNBbmROZXdsaW5lcyIsInNwbGl0IiwibGVuZ3RoIiwicG9wIiwiaSIsImxpbmUiLCJvcHRpb25zIiwibmV3bGluZUlzVG9rZW4iLCJpZ25vcmVXaGl0ZXNwYWNlIiwidHJpbSIsInB1c2giLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBOEJnQkEsUyxHQUFBQSxTO3lEQUNBQyxnQixHQUFBQSxnQjs7QUEvQmhCOzs7O3VCQUNBOzs7O3VCQUVPLElBQU1DLCtFQUFXLHdFQUFqQjtBQUNQQSxTQUFTQyxRQUFULEdBQW9CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEMsTUFBSUMsV0FBVyxFQUFmO0FBQUEsTUFDSUMsbUJBQW1CRixNQUFNRyxLQUFOLENBQVksV0FBWixDQUR2Qjs7QUFHQTtBQUNBLE1BQUksQ0FBQ0QsaUJBQWlCQSxpQkFBaUJFLE1BQWpCLEdBQTBCLENBQTNDLENBQUwsRUFBb0Q7QUFDbERGLHFCQUFpQkcsR0FBakI7QUFDRDs7QUFFRDtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixpQkFBaUJFLE1BQXJDLEVBQTZDRSxHQUE3QyxFQUFrRDtBQUNoRCxRQUFJQyxPQUFPTCxpQkFBaUJJLENBQWpCLENBQVg7O0FBRUEsUUFBSUEsSUFBSSxDQUFKLElBQVMsQ0FBQyxLQUFLRSxPQUFMLENBQWFDLGNBQTNCLEVBQTJDO0FBQ3pDUixlQUFTQSxTQUFTRyxNQUFULEdBQWtCLENBQTNCLEtBQWlDRyxJQUFqQztBQUNELEtBRkQsTUFFTztBQUNMLFVBQUksS0FBS0MsT0FBTCxDQUFhRSxnQkFBakIsRUFBbUM7QUFDakNILGVBQU9BLEtBQUtJLElBQUwsRUFBUDtBQUNEO0FBQ0RWLGVBQVNXLElBQVQsQ0FBY0wsSUFBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT04sUUFBUDtBQUNELENBeEJEOztBQTBCTyxTQUFTTCxTQUFULENBQW1CaUIsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxRQUFuQyxFQUE2QztBQUFFLFNBQU9qQixTQUFTa0IsSUFBVCxDQUFjSCxNQUFkLEVBQXNCQyxNQUF0QixFQUE4QkMsUUFBOUIsQ0FBUDtBQUFpRDtBQUNoRyxTQUFTbEIsZ0JBQVQsQ0FBMEJnQixNQUExQixFQUFrQ0MsTUFBbEMsRUFBMENDLFFBQTFDLEVBQW9EO0FBQ3pELE1BQUlQLFVBQVUsOEVBQWdCTyxRQUFoQixFQUEwQixFQUFDTCxrQkFBa0IsSUFBbkIsRUFBMUIsQ0FBZDtBQUNBLFNBQU9aLFNBQVNrQixJQUFULENBQWNILE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCTixPQUE5QixDQUFQO0FBQ0QiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2dlbmVyYXRlT3B0aW9uc30gZnJvbSAnLi4vdXRpbC9wYXJhbXMnO1xuXG5leHBvcnQgY29uc3QgbGluZURpZmYgPSBuZXcgRGlmZigpO1xubGluZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBsZXQgcmV0TGluZXMgPSBbXSxcbiAgICAgIGxpbmVzQW5kTmV3bGluZXMgPSB2YWx1ZS5zcGxpdCgvKFxcbnxcXHJcXG4pLyk7XG5cbiAgLy8gSWdub3JlIHRoZSBmaW5hbCBlbXB0eSB0b2tlbiB0aGF0IG9jY3VycyBpZiB0aGUgc3RyaW5nIGVuZHMgd2l0aCBhIG5ldyBsaW5lXG4gIGlmICghbGluZXNBbmROZXdsaW5lc1tsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgbGluZXNBbmROZXdsaW5lcy5wb3AoKTtcbiAgfVxuXG4gIC8vIE1lcmdlIHRoZSBjb250ZW50IGFuZCBsaW5lIHNlcGFyYXRvcnMgaW50byBzaW5nbGUgdG9rZW5zXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNBbmROZXdsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaW5lID0gbGluZXNBbmROZXdsaW5lc1tpXTtcblxuICAgIGlmIChpICUgMiAmJiAhdGhpcy5vcHRpb25zLm5ld2xpbmVJc1Rva2VuKSB7XG4gICAgICByZXRMaW5lc1tyZXRMaW5lcy5sZW5ndGggLSAxXSArPSBsaW5lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UpIHtcbiAgICAgICAgbGluZSA9IGxpbmUudHJpbSgpO1xuICAgICAgfVxuICAgICAgcmV0TGluZXMucHVzaChsaW5lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0TGluZXM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZkxpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykgeyByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spOyB9XG5leHBvcnQgZnVuY3Rpb24gZGlmZlRyaW1tZWRMaW5lcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgbGV0IG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoY2FsbGJhY2ssIHtpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gIHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cbiJdfQ==


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.sentenceDiff = undefined;
	exports. /*istanbul ignore end*/diffSentences = diffSentences;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var sentenceDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/sentenceDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	sentenceDiff.tokenize = function (value) {
	  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
	};

	function diffSentences(oldStr, newStr, callback) {
	  return sentenceDiff.diff(oldStr, newStr, callback);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3NlbnRlbmNlLmpzIl0sIm5hbWVzIjpbImRpZmZTZW50ZW5jZXMiLCJzZW50ZW5jZURpZmYiLCJ0b2tlbml6ZSIsInZhbHVlIiwic3BsaXQiLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBUWdCQSxhLEdBQUFBLGE7O0FBUmhCOzs7Ozs7dUJBR08sSUFBTUMsdUZBQWUsd0VBQXJCO0FBQ1BBLGFBQWFDLFFBQWIsR0FBd0IsVUFBU0MsS0FBVCxFQUFnQjtBQUN0QyxTQUFPQSxNQUFNQyxLQUFOLENBQVksdUJBQVosQ0FBUDtBQUNELENBRkQ7O0FBSU8sU0FBU0osYUFBVCxDQUF1QkssTUFBdkIsRUFBK0JDLE1BQS9CLEVBQXVDQyxRQUF2QyxFQUFpRDtBQUFFLFNBQU9OLGFBQWFPLElBQWIsQ0FBa0JILE1BQWxCLEVBQTBCQyxNQUExQixFQUFrQ0MsUUFBbEMsQ0FBUDtBQUFxRCIsImZpbGUiOiJzZW50ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cblxuZXhwb3J0IGNvbnN0IHNlbnRlbmNlRGlmZiA9IG5ldyBEaWZmKCk7XG5zZW50ZW5jZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoLyhcXFMuKz9bLiE/XSkoPz1cXHMrfCQpLyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZlNlbnRlbmNlcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHsgcmV0dXJuIHNlbnRlbmNlRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbiJdfQ==


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.cssDiff = undefined;
	exports. /*istanbul ignore end*/diffCss = diffCss;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var cssDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/cssDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	cssDiff.tokenize = function (value) {
	  return value.split(/([{}:;,]|\s+)/);
	};

	function diffCss(oldStr, newStr, callback) {
	  return cssDiff.diff(oldStr, newStr, callback);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Nzcy5qcyJdLCJuYW1lcyI6WyJkaWZmQ3NzIiwiY3NzRGlmZiIsInRva2VuaXplIiwidmFsdWUiLCJzcGxpdCIsIm9sZFN0ciIsIm5ld1N0ciIsImNhbGxiYWNrIiwiZGlmZiJdLCJtYXBwaW5ncyI6Ijs7OztnQ0FPZ0JBLE8sR0FBQUEsTzs7QUFQaEI7Ozs7Ozt1QkFFTyxJQUFNQyw2RUFBVSx3RUFBaEI7QUFDUEEsUUFBUUMsUUFBUixHQUFtQixVQUFTQyxLQUFULEVBQWdCO0FBQ2pDLFNBQU9BLE1BQU1DLEtBQU4sQ0FBWSxlQUFaLENBQVA7QUFDRCxDQUZEOztBQUlPLFNBQVNKLE9BQVQsQ0FBaUJLLE1BQWpCLEVBQXlCQyxNQUF6QixFQUFpQ0MsUUFBakMsRUFBMkM7QUFBRSxTQUFPTixRQUFRTyxJQUFSLENBQWFILE1BQWIsRUFBcUJDLE1BQXJCLEVBQTZCQyxRQUE3QixDQUFQO0FBQWdEIiwiZmlsZSI6ImNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBjc3NEaWZmID0gbmV3IERpZmYoKTtcbmNzc0RpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoLyhbe306OyxdfFxccyspLyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNzcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHsgcmV0dXJuIGNzc0RpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spOyB9XG4iXX0=


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.jsonDiff = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports. /*istanbul ignore end*/diffJson = diffJson;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/canonicalize = canonicalize;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_line = __webpack_require__(5) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var objectPrototypeToString = Object.prototype.toString;

	var jsonDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/jsonDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	// Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
	// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:
	jsonDiff.useLongestToken = true;

	jsonDiff.tokenize = /*istanbul ignore start*/_line.lineDiff /*istanbul ignore end*/.tokenize;
	jsonDiff.castInput = function (value) {
	  /*istanbul ignore start*/var /*istanbul ignore end*/undefinedReplacement = this.options.undefinedReplacement;


	  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value), function (k, v) {
	    if (typeof v === 'undefined') {
	      return undefinedReplacement;
	    }

	    return v;
	  }, '  ');
	};
	jsonDiff.equals = function (left, right) {
	  return (/*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'))
	  );
	};

	function diffJson(oldObj, newObj, options) {
	  return jsonDiff.diff(oldObj, newObj, options);
	}

	// This function handles the presence of circular references by bailing out when encountering an
	// object that is already on the "stack" of items being processed.
	function canonicalize(obj, stack, replacementStack) {
	  stack = stack || [];
	  replacementStack = replacementStack || [];

	  var i = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

	  for (i = 0; i < stack.length; i += 1) {
	    if (stack[i] === obj) {
	      return replacementStack[i];
	    }
	  }

	  var canonicalizedObj = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

	  if ('[object Array]' === objectPrototypeToString.call(obj)) {
	    stack.push(obj);
	    canonicalizedObj = new Array(obj.length);
	    replacementStack.push(canonicalizedObj);
	    for (i = 0; i < obj.length; i += 1) {
	      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack);
	    }
	    stack.pop();
	    replacementStack.pop();
	    return canonicalizedObj;
	  }

	  if (obj && obj.toJSON) {
	    obj = obj.toJSON();
	  }

	  if ( /*istanbul ignore start*/(typeof /*istanbul ignore end*/obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null) {
	    stack.push(obj);
	    canonicalizedObj = {};
	    replacementStack.push(canonicalizedObj);
	    var sortedKeys = [],
	        key = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
	    for (key in obj) {
	      /* istanbul ignore else */
	      if (obj.hasOwnProperty(key)) {
	        sortedKeys.push(key);
	      }
	    }
	    sortedKeys.sort();
	    for (i = 0; i < sortedKeys.length; i += 1) {
	      key = sortedKeys[i];
	      canonicalizedObj[key] = canonicalize(obj[key], stack, replacementStack);
	    }
	    stack.pop();
	    replacementStack.pop();
	  } else {
	    canonicalizedObj = obj;
	  }
	  return canonicalizedObj;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2pzb24uanMiXSwibmFtZXMiOlsiZGlmZkpzb24iLCJjYW5vbmljYWxpemUiLCJvYmplY3RQcm90b3R5cGVUb1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwianNvbkRpZmYiLCJ1c2VMb25nZXN0VG9rZW4iLCJ0b2tlbml6ZSIsImNhc3RJbnB1dCIsInZhbHVlIiwidW5kZWZpbmVkUmVwbGFjZW1lbnQiLCJvcHRpb25zIiwiSlNPTiIsInN0cmluZ2lmeSIsImsiLCJ2IiwiZXF1YWxzIiwibGVmdCIsInJpZ2h0IiwiY2FsbCIsInJlcGxhY2UiLCJvbGRPYmoiLCJuZXdPYmoiLCJkaWZmIiwib2JqIiwic3RhY2siLCJyZXBsYWNlbWVudFN0YWNrIiwiaSIsImxlbmd0aCIsImNhbm9uaWNhbGl6ZWRPYmoiLCJwdXNoIiwiQXJyYXkiLCJwb3AiLCJ0b0pTT04iLCJzb3J0ZWRLZXlzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJzb3J0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O2dDQTJCZ0JBLFEsR0FBQUEsUTt5REFJQUMsWSxHQUFBQSxZOztBQS9CaEI7Ozs7dUJBQ0E7Ozs7dUJBRUEsSUFBTUMsMEJBQTBCQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqRDs7QUFHTyxJQUFNQywrRUFBVyx3RUFBakI7QUFDUDtBQUNBO0FBQ0FBLFNBQVNDLGVBQVQsR0FBMkIsSUFBM0I7O0FBRUFELFNBQVNFLFFBQVQsR0FBb0IsZ0VBQVNBLFFBQTdCO0FBQ0FGLFNBQVNHLFNBQVQsR0FBcUIsVUFBU0MsS0FBVCxFQUFnQjtBQUFBLHNEQUM1QkMsb0JBRDRCLEdBQ0osS0FBS0MsT0FERCxDQUM1QkQsb0JBRDRCOzs7QUFHbkMsU0FBTyxPQUFPRCxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCQSxLQUE1QixHQUFvQ0csS0FBS0MsU0FBTCxDQUFlYixhQUFhUyxLQUFiLENBQWYsRUFBb0MsVUFBU0ssQ0FBVCxFQUFZQyxDQUFaLEVBQWU7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QUNELEdBbkJELE1BbUJPO0FBQ0xILHVCQUFtQkwsR0FBbkI7QUFDRDtBQUNELFNBQU9LLGdCQUFQO0FBQ0QiLCJmaWxlIjoianNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2xpbmVEaWZmfSBmcm9tICcuL2xpbmUnO1xuXG5jb25zdCBvYmplY3RQcm90b3R5cGVUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cblxuZXhwb3J0IGNvbnN0IGpzb25EaWZmID0gbmV3IERpZmYoKTtcbi8vIERpc2NyaW1pbmF0ZSBiZXR3ZWVuIHR3byBsaW5lcyBvZiBwcmV0dHktcHJpbnRlZCwgc2VyaWFsaXplZCBKU09OIHdoZXJlIG9uZSBvZiB0aGVtIGhhcyBhXG4vLyBkYW5nbGluZyBjb21tYSBhbmQgdGhlIG90aGVyIGRvZXNuJ3QuIFR1cm5zIG91dCBpbmNsdWRpbmcgdGhlIGRhbmdsaW5nIGNvbW1hIHlpZWxkcyB0aGUgbmljZXN0IG91dHB1dDpcbmpzb25EaWZmLnVzZUxvbmdlc3RUb2tlbiA9IHRydWU7XG5cbmpzb25EaWZmLnRva2VuaXplID0gbGluZURpZmYudG9rZW5pemU7XG5qc29uRGlmZi5jYXN0SW5wdXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBjb25zdCB7dW5kZWZpbmVkUmVwbGFjZW1lbnR9ID0gdGhpcy5vcHRpb25zO1xuXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeShjYW5vbmljYWxpemUodmFsdWUpLCBmdW5jdGlvbihrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFJlcGxhY2VtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9LCAnICAnKTtcbn07XG5qc29uRGlmZi5lcXVhbHMgPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICByZXR1cm4gRGlmZi5wcm90b3R5cGUuZXF1YWxzLmNhbGwoanNvbkRpZmYsIGxlZnQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJyksIHJpZ2h0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmSnNvbihvbGRPYmosIG5ld09iaiwgb3B0aW9ucykgeyByZXR1cm4ganNvbkRpZmYuZGlmZihvbGRPYmosIG5ld09iaiwgb3B0aW9ucyk7IH1cblxuLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSBwcmVzZW5jZSBvZiBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGJhaWxpbmcgb3V0IHdoZW4gZW5jb3VudGVyaW5nIGFuXG4vLyBvYmplY3QgdGhhdCBpcyBhbHJlYWR5IG9uIHRoZSBcInN0YWNrXCIgb2YgaXRlbXMgYmVpbmcgcHJvY2Vzc2VkLlxuZXhwb3J0IGZ1bmN0aW9uIGNhbm9uaWNhbGl6ZShvYmosIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrKSB7XG4gIHN0YWNrID0gc3RhY2sgfHwgW107XG4gIHJlcGxhY2VtZW50U3RhY2sgPSByZXBsYWNlbWVudFN0YWNrIHx8IFtdO1xuXG4gIGxldCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChzdGFja1tpXSA9PT0gb2JqKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZW1lbnRTdGFja1tpXTtcbiAgICB9XG4gIH1cblxuICBsZXQgY2Fub25pY2FsaXplZE9iajtcblxuICBpZiAoJ1tvYmplY3QgQXJyYXldJyA9PT0gb2JqZWN0UHJvdG90eXBlVG9TdHJpbmcuY2FsbChvYmopKSB7XG4gICAgc3RhY2sucHVzaChvYmopO1xuICAgIGNhbm9uaWNhbGl6ZWRPYmogPSBuZXcgQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgcmVwbGFjZW1lbnRTdGFjay5wdXNoKGNhbm9uaWNhbGl6ZWRPYmopO1xuICAgIGZvciAoaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmpbaV0gPSBjYW5vbmljYWxpemUob2JqW2ldLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjayk7XG4gICAgfVxuICAgIHN0YWNrLnBvcCgpO1xuICAgIHJlcGxhY2VtZW50U3RhY2sucG9wKCk7XG4gICAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XG4gIH1cblxuICBpZiAob2JqICYmIG9iai50b0pTT04pIHtcbiAgICBvYmogPSBvYmoudG9KU09OKCk7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgc3RhY2sucHVzaChvYmopO1xuICAgIGNhbm9uaWNhbGl6ZWRPYmogPSB7fTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG4gICAgbGV0IHNvcnRlZEtleXMgPSBbXSxcbiAgICAgICAga2V5O1xuICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzb3J0ZWRLZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgc29ydGVkS2V5cy5zb3J0KCk7XG4gICAgZm9yIChpID0gMDsgaSA8IHNvcnRlZEtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGtleSA9IHNvcnRlZEtleXNbaV07XG4gICAgICBjYW5vbmljYWxpemVkT2JqW2tleV0gPSBjYW5vbmljYWxpemUob2JqW2tleV0sIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrKTtcbiAgICB9XG4gICAgc3RhY2sucG9wKCk7XG4gICAgcmVwbGFjZW1lbnRTdGFjay5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBjYW5vbmljYWxpemVkT2JqID0gb2JqO1xuICB9XG4gIHJldHVybiBjYW5vbmljYWxpemVkT2JqO1xufVxuIl19


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.arrayDiff = undefined;
	exports. /*istanbul ignore end*/diffArrays = diffArrays;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var arrayDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/arrayDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	arrayDiff.tokenize = arrayDiff.join = function (value) {
	  return value.slice();
	};
	arrayDiff.removeEmpty = function (value) {
	  return value;
	};

	function diffArrays(oldArr, newArr, callback) {
	  return arrayDiff.diff(oldArr, newArr, callback);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2FycmF5LmpzIl0sIm5hbWVzIjpbImRpZmZBcnJheXMiLCJhcnJheURpZmYiLCJ0b2tlbml6ZSIsImpvaW4iLCJ2YWx1ZSIsInNsaWNlIiwicmVtb3ZlRW1wdHkiLCJvbGRBcnIiLCJuZXdBcnIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBVWdCQSxVLEdBQUFBLFU7O0FBVmhCOzs7Ozs7dUJBRU8sSUFBTUMsaUZBQVksd0VBQWxCO0FBQ1BBLFVBQVVDLFFBQVYsR0FBcUJELFVBQVVFLElBQVYsR0FBaUIsVUFBU0MsS0FBVCxFQUFnQjtBQUNwRCxTQUFPQSxNQUFNQyxLQUFOLEVBQVA7QUFDRCxDQUZEO0FBR0FKLFVBQVVLLFdBQVYsR0FBd0IsVUFBU0YsS0FBVCxFQUFnQjtBQUN0QyxTQUFPQSxLQUFQO0FBQ0QsQ0FGRDs7QUFJTyxTQUFTSixVQUFULENBQW9CTyxNQUFwQixFQUE0QkMsTUFBNUIsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUUsU0FBT1IsVUFBVVMsSUFBVixDQUFlSCxNQUFmLEVBQXVCQyxNQUF2QixFQUErQkMsUUFBL0IsQ0FBUDtBQUFrRCIsImZpbGUiOiJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBhcnJheURpZmYgPSBuZXcgRGlmZigpO1xuYXJyYXlEaWZmLnRva2VuaXplID0gYXJyYXlEaWZmLmpvaW4gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc2xpY2UoKTtcbn07XG5hcnJheURpZmYucmVtb3ZlRW1wdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZkFycmF5cyhvbGRBcnIsIG5ld0FyciwgY2FsbGJhY2spIHsgcmV0dXJuIGFycmF5RGlmZi5kaWZmKG9sZEFyciwgbmV3QXJyLCBjYWxsYmFjayk7IH1cbiJdfQ==


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/applyPatch = applyPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatches = applyPatches;

	var /*istanbul ignore start*/_parse = __webpack_require__(11) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_distanceIterator = __webpack_require__(12) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _distanceIterator2 = _interopRequireDefault(_distanceIterator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/function applyPatch(source, uniDiff) {
	  /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  if (typeof uniDiff === 'string') {
	    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
	  }

	  if (Array.isArray(uniDiff)) {
	    if (uniDiff.length > 1) {
	      throw new Error('applyPatch only works with a single input.');
	    }

	    uniDiff = uniDiff[0];
	  }

	  // Apply the diff to the input
	  var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
	      delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
	      hunks = uniDiff.hunks,
	      compareLine = options.compareLine || function (lineNumber, line, operation, patchContent) /*istanbul ignore start*/{
	    return (/*istanbul ignore end*/line === patchContent
	    );
	  },
	      errorCount = 0,
	      fuzzFactor = options.fuzzFactor || 0,
	      minLine = 0,
	      offset = 0,
	      removeEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/,
	      addEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

	  /**
	   * Checks if the hunk exactly fits on the provided location
	   */
	  function hunkFits(hunk, toPos) {
	    for (var j = 0; j < hunk.lines.length; j++) {
	      var line = hunk.lines[j],
	          operation = line[0],
	          content = line.substr(1);

	      if (operation === ' ' || operation === '-') {
	        // Context sanity check
	        if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
	          errorCount++;

	          if (errorCount > fuzzFactor) {
	            return false;
	          }
	        }
	        toPos++;
	      }
	    }

	    return true;
	  }

	  // Search best fit offsets for each hunk based on the previous ones
	  for (var i = 0; i < hunks.length; i++) {
	    var hunk = hunks[i],
	        maxLine = lines.length - hunk.oldLines,
	        localOffset = 0,
	        toPos = offset + hunk.oldStart - 1;

	    var iterator = /*istanbul ignore start*/(0, _distanceIterator2['default']) /*istanbul ignore end*/(toPos, minLine, maxLine);

	    for (; localOffset !== undefined; localOffset = iterator()) {
	      if (hunkFits(hunk, toPos + localOffset)) {
	        hunk.offset = offset += localOffset;
	        break;
	      }
	    }

	    if (localOffset === undefined) {
	      return false;
	    }

	    // Set lower text limit to end of the current hunk, so next ones don't try
	    // to fit over already patched text
	    minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
	  }

	  // Apply patch hunks
	  var diffOffset = 0;
	  for (var _i = 0; _i < hunks.length; _i++) {
	    var _hunk = hunks[_i],
	        _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;
	    diffOffset += _hunk.newLines - _hunk.oldLines;

	    if (_toPos < 0) {
	      // Creating a new file
	      _toPos = 0;
	    }

	    for (var j = 0; j < _hunk.lines.length; j++) {
	      var line = _hunk.lines[j],
	          operation = line[0],
	          content = line.substr(1),
	          delimiter = _hunk.linedelimiters[j];

	      if (operation === ' ') {
	        _toPos++;
	      } else if (operation === '-') {
	        lines.splice(_toPos, 1);
	        delimiters.splice(_toPos, 1);
	        /* istanbul ignore else */
	      } else if (operation === '+') {
	        lines.splice(_toPos, 0, content);
	        delimiters.splice(_toPos, 0, delimiter);
	        _toPos++;
	      } else if (operation === '\\') {
	        var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;
	        if (previousOperation === '+') {
	          removeEOFNL = true;
	        } else if (previousOperation === '-') {
	          addEOFNL = true;
	        }
	      }
	    }
	  }

	  // Handle EOFNL insertion/removal
	  if (removeEOFNL) {
	    while (!lines[lines.length - 1]) {
	      lines.pop();
	      delimiters.pop();
	    }
	  } else if (addEOFNL) {
	    lines.push('');
	    delimiters.push('\n');
	  }
	  for (var _k = 0; _k < lines.length - 1; _k++) {
	    lines[_k] = lines[_k] + delimiters[_k];
	  }
	  return lines.join('');
	}

	// Wrapper that supports multiple file patches via callbacks.
	function applyPatches(uniDiff, options) {
	  if (typeof uniDiff === 'string') {
	    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
	  }

	  var currentIndex = 0;
	  function processIndex() {
	    var index = uniDiff[currentIndex++];
	    if (!index) {
	      return options.complete();
	    }

	    options.loadFile(index, function (err, data) {
	      if (err) {
	        return options.complete(err);
	      }

	      var updatedContent = applyPatch(data, index, options);
	      options.patched(index, updatedContent, function (err) {
	        if (err) {
	          return options.complete(err);
	        }

	        processIndex();
	      });
	    });
	  }
	  processIndex();
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9hcHBseS5qcyJdLCJuYW1lcyI6WyJhcHBseVBhdGNoIiwiYXBwbHlQYXRjaGVzIiwic291cmNlIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJFcnJvciIsImxpbmVzIiwic3BsaXQiLCJkZWxpbWl0ZXJzIiwibWF0Y2giLCJodW5rcyIsImNvbXBhcmVMaW5lIiwibGluZU51bWJlciIsImxpbmUiLCJvcGVyYXRpb24iLCJwYXRjaENvbnRlbnQiLCJlcnJvckNvdW50IiwiZnV6ekZhY3RvciIsIm1pbkxpbmUiLCJvZmZzZXQiLCJyZW1vdmVFT0ZOTCIsImFkZEVPRk5MIiwiaHVua0ZpdHMiLCJodW5rIiwidG9Qb3MiLCJqIiwiY29udGVudCIsInN1YnN0ciIsImkiLCJtYXhMaW5lIiwib2xkTGluZXMiLCJsb2NhbE9mZnNldCIsIm9sZFN0YXJ0IiwiaXRlcmF0b3IiLCJ1bmRlZmluZWQiLCJkaWZmT2Zmc2V0IiwibmV3TGluZXMiLCJkZWxpbWl0ZXIiLCJsaW5lZGVsaW1pdGVycyIsInNwbGljZSIsInByZXZpb3VzT3BlcmF0aW9uIiwicG9wIiwicHVzaCIsIl9rIiwiam9pbiIsImN1cnJlbnRJbmRleCIsInByb2Nlc3NJbmRleCIsImluZGV4IiwiY29tcGxldGUiLCJsb2FkRmlsZSIsImVyciIsImRhdGEiLCJ1cGRhdGVkQ29udGVudCIsInBhdGNoZWQiXSwibWFwcGluZ3MiOiI7OztnQ0FHZ0JBLFUsR0FBQUEsVTt5REFvSUFDLFksR0FBQUEsWTs7QUF2SWhCOztBQUNBOzs7Ozs7dUJBRU8sU0FBU0QsVUFBVCxDQUFvQkUsTUFBcEIsRUFBNEJDLE9BQTVCLEVBQW1EO0FBQUEsc0RBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDeEQsTUFBSSxPQUFPRCxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CQSxjQUFVLHdFQUFXQSxPQUFYLENBQVY7QUFDRDs7QUFFRCxNQUFJRSxNQUFNQyxP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QUFQO0FBQ0Q7O0FBRUQsVUFBSUUsaUJBQWlCdkQsV0FBV3NELElBQVgsRUFBaUJKLEtBQWpCLEVBQXdCOUMsT0FBeEIsQ0FBckI7QUFDQUEsY0FBUW9ELE9BQVIsQ0FBZ0JOLEtBQWhCLEVBQXVCSyxjQUF2QixFQUF1QyxVQUFTRixHQUFULEVBQWM7QUFDbkQsWUFBSUEsR0FBSixFQUFTO0FBQ1AsaUJBQU9qRCxRQUFRK0MsUUFBUixDQUFpQkUsR0FBakIsQ0FBUDtBQUNEOztBQUVESjtBQUNELE9BTkQ7QUFPRCxLQWJEO0FBY0Q7QUFDREE7QUFDRCIsImZpbGUiOiJhcHBseS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQgZGlzdGFuY2VJdGVyYXRvciBmcm9tICcuLi91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0Y2goc291cmNlLCB1bmlEaWZmLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodW5pRGlmZikpIHtcbiAgICBpZiAodW5pRGlmZi5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwcGx5UGF0Y2ggb25seSB3b3JrcyB3aXRoIGEgc2luZ2xlIGlucHV0LicpO1xuICAgIH1cblxuICAgIHVuaURpZmYgPSB1bmlEaWZmWzBdO1xuICB9XG5cbiAgLy8gQXBwbHkgdGhlIGRpZmYgdG8gdGhlIGlucHV0XG4gIGxldCBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgIGRlbGltaXRlcnMgPSBzb3VyY2UubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgaHVua3MgPSB1bmlEaWZmLmh1bmtzLFxuXG4gICAgICBjb21wYXJlTGluZSA9IG9wdGlvbnMuY29tcGFyZUxpbmUgfHwgKChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudCkgPT4gbGluZSA9PT0gcGF0Y2hDb250ZW50KSxcbiAgICAgIGVycm9yQ291bnQgPSAwLFxuICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgbWluTGluZSA9IDAsXG4gICAgICBvZmZzZXQgPSAwLFxuXG4gICAgICByZW1vdmVFT0ZOTCxcbiAgICAgIGFkZEVPRk5MO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGh1bmsgZXhhY3RseSBmaXRzIG9uIHRoZSBwcm92aWRlZCBsb2NhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gaHVua0ZpdHMoaHVuaywgdG9Qb3MpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lWzBdLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLnN1YnN0cigxKTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgIC8vIENvbnRleHQgc2FuaXR5IGNoZWNrXG4gICAgICAgIGlmICghY29tcGFyZUxpbmUodG9Qb3MgKyAxLCBsaW5lc1t0b1Bvc10sIG9wZXJhdGlvbiwgY29udGVudCkpIHtcbiAgICAgICAgICBlcnJvckNvdW50Kys7XG5cbiAgICAgICAgICBpZiAoZXJyb3JDb3VudCA+IGZ1enpGYWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9Qb3MrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFNlYXJjaCBiZXN0IGZpdCBvZmZzZXRzIGZvciBlYWNoIGh1bmsgYmFzZWQgb24gdGhlIHByZXZpb3VzIG9uZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBodW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBodW5rID0gaHVua3NbaV0sXG4gICAgICAgIG1heExpbmUgPSBsaW5lcy5sZW5ndGggLSBodW5rLm9sZExpbmVzLFxuICAgICAgICBsb2NhbE9mZnNldCA9IDAsXG4gICAgICAgIHRvUG9zID0gb2Zmc2V0ICsgaHVuay5vbGRTdGFydCAtIDE7XG5cbiAgICBsZXQgaXRlcmF0b3IgPSBkaXN0YW5jZUl0ZXJhdG9yKHRvUG9zLCBtaW5MaW5lLCBtYXhMaW5lKTtcblxuICAgIGZvciAoOyBsb2NhbE9mZnNldCAhPT0gdW5kZWZpbmVkOyBsb2NhbE9mZnNldCA9IGl0ZXJhdG9yKCkpIHtcbiAgICAgIGlmIChodW5rRml0cyhodW5rLCB0b1BvcyArIGxvY2FsT2Zmc2V0KSkge1xuICAgICAgICBodW5rLm9mZnNldCA9IG9mZnNldCArPSBsb2NhbE9mZnNldDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsT2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgbG93ZXIgdGV4dCBsaW1pdCB0byBlbmQgb2YgdGhlIGN1cnJlbnQgaHVuaywgc28gbmV4dCBvbmVzIGRvbid0IHRyeVxuICAgIC8vIHRvIGZpdCBvdmVyIGFscmVhZHkgcGF0Y2hlZCB0ZXh0XG4gICAgbWluTGluZSA9IGh1bmsub2Zmc2V0ICsgaHVuay5vbGRTdGFydCArIGh1bmsub2xkTGluZXM7XG4gIH1cblxuICAvLyBBcHBseSBwYXRjaCBodW5rc1xuICBsZXQgZGlmZk9mZnNldCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgaHVuayA9IGh1bmtzW2ldLFxuICAgICAgICB0b1BvcyA9IGh1bmsub2xkU3RhcnQgKyBodW5rLm9mZnNldCArIGRpZmZPZmZzZXQgLSAxO1xuICAgIGRpZmZPZmZzZXQgKz0gaHVuay5uZXdMaW5lcyAtIGh1bmsub2xkTGluZXM7XG5cbiAgICBpZiAodG9Qb3MgPCAwKSB7IC8vIENyZWF0aW5nIGEgbmV3IGZpbGVcbiAgICAgIHRvUG9zID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lWzBdLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLnN1YnN0cigxKSxcbiAgICAgICAgICBkZWxpbWl0ZXIgPSBodW5rLmxpbmVkZWxpbWl0ZXJzW2pdO1xuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSAnICcpIHtcbiAgICAgICAgdG9Qb3MrKztcbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgbGluZXMuc3BsaWNlKHRvUG9zLCAxKTtcbiAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UodG9Qb3MsIDEpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgbGluZXMuc3BsaWNlKHRvUG9zLCAwLCBjb250ZW50KTtcbiAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UodG9Qb3MsIDAsIGRlbGltaXRlcik7XG4gICAgICAgIHRvUG9zKys7XG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIGxldCBwcmV2aW91c09wZXJhdGlvbiA9IGh1bmsubGluZXNbaiAtIDFdID8gaHVuay5saW5lc1tqIC0gMV1bMF0gOiBudWxsO1xuICAgICAgICBpZiAocHJldmlvdXNPcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIHJlbW92ZUVPRk5MID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgYWRkRU9GTkwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gSGFuZGxlIEVPRk5MIGluc2VydGlvbi9yZW1vdmFsXG4gIGlmIChyZW1vdmVFT0ZOTCkge1xuICAgIHdoaWxlICghbGluZXNbbGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIGxpbmVzLnBvcCgpO1xuICAgICAgZGVsaW1pdGVycy5wb3AoKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYWRkRU9GTkwpIHtcbiAgICBsaW5lcy5wdXNoKCcnKTtcbiAgICBkZWxpbWl0ZXJzLnB1c2goJ1xcbicpO1xuICB9XG4gIGZvciAobGV0IF9rID0gMDsgX2sgPCBsaW5lcy5sZW5ndGggLSAxOyBfaysrKSB7XG4gICAgbGluZXNbX2tdID0gbGluZXNbX2tdICsgZGVsaW1pdGVyc1tfa107XG4gIH1cbiAgcmV0dXJuIGxpbmVzLmpvaW4oJycpO1xufVxuXG4vLyBXcmFwcGVyIHRoYXQgc3VwcG9ydHMgbXVsdGlwbGUgZmlsZSBwYXRjaGVzIHZpYSBjYWxsYmFja3MuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXRjaGVzKHVuaURpZmYsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICB9XG5cbiAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gIGZ1bmN0aW9uIHByb2Nlc3NJbmRleCgpIHtcbiAgICBsZXQgaW5kZXggPSB1bmlEaWZmW2N1cnJlbnRJbmRleCsrXTtcbiAgICBpZiAoIWluZGV4KSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIG9wdGlvbnMubG9hZEZpbGUoaW5kZXgsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZShlcnIpO1xuICAgICAgfVxuXG4gICAgICBsZXQgdXBkYXRlZENvbnRlbnQgPSBhcHBseVBhdGNoKGRhdGEsIGluZGV4LCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMucGF0Y2hlZChpbmRleCwgdXBkYXRlZENvbnRlbnQsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2Nlc3NJbmRleCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcHJvY2Vzc0luZGV4KCk7XG59XG4iXX0=


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/parsePatch = parsePatch;
	function parsePatch(uniDiff) {
	  /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/),
	      delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [],
	      list = [],
	      i = 0;

	  function parseIndex() {
	    var index = {};
	    list.push(index);

	    // Parse diff metadata
	    while (i < diffstr.length) {
	      var line = diffstr[i];

	      // File header found, end parsing diff metadata
	      if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
	        break;
	      }

	      // Diff index
	      var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);
	      if (header) {
	        index.index = header[1];
	      }

	      i++;
	    }

	    // Parse file headers if they are defined. Unified diff requires them, but
	    // there's no technical issues to have an isolated hunk without file header
	    parseFileHeader(index);
	    parseFileHeader(index);

	    // Parse hunks
	    index.hunks = [];

	    while (i < diffstr.length) {
	      var _line = diffstr[i];

	      if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
	        break;
	      } else if (/^@@/.test(_line)) {
	        index.hunks.push(parseHunk());
	      } else if (_line && options.strict) {
	        // Ignore unexpected content unless in strict mode
	        throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
	      } else {
	        i++;
	      }
	    }
	  }

	  // Parses the --- and +++ headers, if none are found, no lines
	  // are consumed.
	  function parseFileHeader(index) {
	    var headerPattern = /^(---|\+\+\+)\s+([\S ]*)(?:\t(.*?)\s*)?$/;
	    var fileHeader = headerPattern.exec(diffstr[i]);
	    if (fileHeader) {
	      var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
	      var fileName = fileHeader[2].replace(/\\\\/g, '\\');
	      if (/^".*"$/.test(fileName)) {
	        fileName = fileName.substr(1, fileName.length - 2);
	      }
	      index[keyPrefix + 'FileName'] = fileName;
	      index[keyPrefix + 'Header'] = fileHeader[3];

	      i++;
	    }
	  }

	  // Parses a hunk
	  // This assumes that we are at the start of a hunk.
	  function parseHunk() {
	    var chunkHeaderIndex = i,
	        chunkHeaderLine = diffstr[i++],
	        chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);

	    var hunk = {
	      oldStart: +chunkHeader[1],
	      oldLines: +chunkHeader[2] || 1,
	      newStart: +chunkHeader[3],
	      newLines: +chunkHeader[4] || 1,
	      lines: [],
	      linedelimiters: []
	    };

	    var addCount = 0,
	        removeCount = 0;
	    for (; i < diffstr.length; i++) {
	      // Lines starting with '---' could be mistaken for the "remove line" operation
	      // But they could be the header for the next file. Therefore prune such cases out.
	      if (diffstr[i].indexOf('--- ') === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf('+++ ') === 0 && diffstr[i + 2].indexOf('@@') === 0) {
	        break;
	      }
	      var operation = diffstr[i][0];

	      if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
	        hunk.lines.push(diffstr[i]);
	        hunk.linedelimiters.push(delimiters[i] || '\n');

	        if (operation === '+') {
	          addCount++;
	        } else if (operation === '-') {
	          removeCount++;
	        } else if (operation === ' ') {
	          addCount++;
	          removeCount++;
	        }
	      } else {
	        break;
	      }
	    }

	    // Handle the empty block count case
	    if (!addCount && hunk.newLines === 1) {
	      hunk.newLines = 0;
	    }
	    if (!removeCount && hunk.oldLines === 1) {
	      hunk.oldLines = 0;
	    }

	    // Perform optional sanity checking
	    if (options.strict) {
	      if (addCount !== hunk.newLines) {
	        throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
	      }
	      if (removeCount !== hunk.oldLines) {
	        throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
	      }
	    }

	    return hunk;
	  }

	  while (i < diffstr.length) {
	    parseIndex();
	  }

	  return list;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9wYXJzZS5qcyJdLCJuYW1lcyI6WyJwYXJzZVBhdGNoIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJkaWZmc3RyIiwic3BsaXQiLCJkZWxpbWl0ZXJzIiwibWF0Y2giLCJsaXN0IiwiaSIsInBhcnNlSW5kZXgiLCJpbmRleCIsInB1c2giLCJsZW5ndGgiLCJsaW5lIiwidGVzdCIsImhlYWRlciIsImV4ZWMiLCJwYXJzZUZpbGVIZWFkZXIiLCJodW5rcyIsInBhcnNlSHVuayIsInN0cmljdCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlclBhdHRlcm4iLCJmaWxlSGVhZGVyIiwia2V5UHJlZml4IiwiZmlsZU5hbWUiLCJyZXBsYWNlIiwic3Vic3RyIiwiY2h1bmtIZWFkZXJJbmRleCIsImNodW5rSGVhZGVyTGluZSIsImNodW5rSGVhZGVyIiwiaHVuayIsIm9sZFN0YXJ0Iiwib2xkTGluZXMiLCJuZXdTdGFydCIsIm5ld0xpbmVzIiwibGluZXMiLCJsaW5lZGVsaW1pdGVycyIsImFkZENvdW50IiwicmVtb3ZlQ291bnQiLCJpbmRleE9mIiwib3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Z0NBQWdCQSxVLEdBQUFBLFU7QUFBVCxTQUFTQSxVQUFULENBQW9CQyxPQUFwQixFQUEyQztBQUFBLHNEQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQ2hELE1BQUlDLFVBQVVGLFFBQVFHLEtBQVIsQ0FBYyxxQkFBZCxDQUFkO0FBQUEsTUFDSUMsYUFBYUosUUFBUUssS0FBUixDQUFjLHNCQUFkLEtBQXlDLEVBRDFEO0FBQUEsTUFFSUMsT0FBTyxFQUZYO0FBQUEsTUFHSUMsSUFBSSxDQUhSOztBQUtBLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEIsUUFBSUMsUUFBUSxFQUFaO0FBQ0FILFNBQUtJLElBQUwsQ0FBVUQsS0FBVjs7QUFFQTtBQUNBLFdBQU9GLElBQUlMLFFBQVFTLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQUlDLE9BQU9WLFFB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Q0FBVSx3REFBd0RTLG1CQUFtQixDQUEzRSxDQUFWLENBQU47QUFDRDtBQUNGOztBQUVELFdBQU9HLElBQVA7QUFDRDs7QUFFRCxTQUFPekIsSUFBSUwsUUFBUVMsTUFBbkIsRUFBMkI7QUFDekJIO0FBQ0Q7O0FBRUQsU0FBT0YsSUFBUDtBQUNEIiwiZmlsZSI6InBhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGF0Y2godW5pRGlmZiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBkaWZmc3RyID0gdW5pRGlmZi5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgIGRlbGltaXRlcnMgPSB1bmlEaWZmLm1hdGNoKC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS9nKSB8fCBbXSxcbiAgICAgIGxpc3QgPSBbXSxcbiAgICAgIGkgPSAwO1xuXG4gIGZ1bmN0aW9uIHBhcnNlSW5kZXgoKSB7XG4gICAgbGV0IGluZGV4ID0ge307XG4gICAgbGlzdC5wdXNoKGluZGV4KTtcblxuICAgIC8vIFBhcnNlIGRpZmYgbWV0YWRhdGFcbiAgICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgICBsZXQgbGluZSA9IGRpZmZzdHJbaV07XG5cbiAgICAgIC8vIEZpbGUgaGVhZGVyIGZvdW5kLCBlbmQgcGFyc2luZyBkaWZmIG1ldGFkYXRhXG4gICAgICBpZiAoL14oXFwtXFwtXFwtfFxcK1xcK1xcK3xAQClcXHMvLnRlc3QobGluZSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIERpZmYgaW5kZXhcbiAgICAgIGxldCBoZWFkZXIgPSAoL14oPzpJbmRleDp8ZGlmZig/OiAtciBcXHcrKSspXFxzKyguKz8pXFxzKiQvKS5leGVjKGxpbmUpO1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICBpbmRleC5pbmRleCA9IGhlYWRlclsxXTtcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIGZpbGUgaGVhZGVycyBpZiB0aGV5IGFyZSBkZWZpbmVkLiBVbmlmaWVkIGRpZmYgcmVxdWlyZXMgdGhlbSwgYnV0XG4gICAgLy8gdGhlcmUncyBubyB0ZWNobmljYWwgaXNzdWVzIHRvIGhhdmUgYW4gaXNvbGF0ZWQgaHVuayB3aXRob3V0IGZpbGUgaGVhZGVyXG4gICAgcGFyc2VGaWxlSGVhZGVyKGluZGV4KTtcbiAgICBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpO1xuXG4gICAgLy8gUGFyc2UgaHVua3NcbiAgICBpbmRleC5odW5rcyA9IFtdO1xuXG4gICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgbGV0IGxpbmUgPSBkaWZmc3RyW2ldO1xuXG4gICAgICBpZiAoL14oSW5kZXg6fGRpZmZ8XFwtXFwtXFwtfFxcK1xcK1xcKylcXHMvLnRlc3QobGluZSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKC9eQEAvLnRlc3QobGluZSkpIHtcbiAgICAgICAgaW5kZXguaHVua3MucHVzaChwYXJzZUh1bmsoKSk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUgJiYgb3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgICAgLy8gSWdub3JlIHVuZXhwZWN0ZWQgY29udGVudCB1bmxlc3MgaW4gc3RyaWN0IG1vZGVcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGxpbmUgJyArIChpICsgMSkgKyAnICcgKyBKU09OLnN0cmluZ2lmeShsaW5lKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUGFyc2VzIHRoZSAtLS0gYW5kICsrKyBoZWFkZXJzLCBpZiBub25lIGFyZSBmb3VuZCwgbm8gbGluZXNcbiAgLy8gYXJlIGNvbnN1bWVkLlxuICBmdW5jdGlvbiBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpIHtcbiAgICBjb25zdCBoZWFkZXJQYXR0ZXJuID0gL14oLS0tfFxcK1xcK1xcKylcXHMrKFtcXFMgXSopKD86XFx0KC4qPylcXHMqKT8kLztcbiAgICBjb25zdCBmaWxlSGVhZGVyID0gaGVhZGVyUGF0dGVybi5leGVjKGRpZmZzdHJbaV0pO1xuICAgIGlmIChmaWxlSGVhZGVyKSB7XG4gICAgICBsZXQga2V5UHJlZml4ID0gZmlsZUhlYWRlclsxXSA9PT0gJy0tLScgPyAnb2xkJyA6ICduZXcnO1xuICAgICAgbGV0IGZpbGVOYW1lID0gZmlsZUhlYWRlclsyXS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpO1xuICAgICAgaWYgKC9eXCIuKlwiJC8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgZmlsZU5hbWUgPSBmaWxlTmFtZS5zdWJzdHIoMSwgZmlsZU5hbWUubGVuZ3RoIC0gMik7XG4gICAgICB9XG4gICAgICBpbmRleFtrZXlQcmVmaXggKyAnRmlsZU5hbWUnXSA9IGZpbGVOYW1lO1xuICAgICAgaW5kZXhba2V5UHJlZml4ICsgJ0hlYWRlciddID0gZmlsZUhlYWRlclszXTtcblxuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBhcnNlcyBhIGh1bmtcbiAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgd2UgYXJlIGF0IHRoZSBzdGFydCBvZiBhIGh1bmsuXG4gIGZ1bmN0aW9uIHBhcnNlSHVuaygpIHtcbiAgICBsZXQgY2h1bmtIZWFkZXJJbmRleCA9IGksXG4gICAgICAgIGNodW5rSGVhZGVyTGluZSA9IGRpZmZzdHJbaSsrXSxcbiAgICAgICAgY2h1bmtIZWFkZXIgPSBjaHVua0hlYWRlckxpbmUuc3BsaXQoL0BAIC0oXFxkKykoPzosKFxcZCspKT8gXFwrKFxcZCspKD86LChcXGQrKSk/IEBALyk7XG5cbiAgICBsZXQgaHVuayA9IHtcbiAgICAgIG9sZFN0YXJ0OiArY2h1bmtIZWFkZXJbMV0sXG4gICAgICBvbGRMaW5lczogK2NodW5rSGVhZGVyWzJdIHx8IDEsXG4gICAgICBuZXdTdGFydDogK2NodW5rSGVhZGVyWzNdLFxuICAgICAgbmV3TGluZXM6ICtjaHVua0hlYWRlcls0XSB8fCAxLFxuICAgICAgbGluZXM6IFtdLFxuICAgICAgbGluZWRlbGltaXRlcnM6IFtdXG4gICAgfTtcblxuICAgIGxldCBhZGRDb3VudCA9IDAsXG4gICAgICAgIHJlbW92ZUNvdW50ID0gMDtcbiAgICBmb3IgKDsgaSA8IGRpZmZzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIExpbmVzIHN0YXJ0aW5nIHdpdGggJy0tLScgY291bGQgYmUgbWlzdGFrZW4gZm9yIHRoZSBcInJlbW92ZSBsaW5lXCIgb3BlcmF0aW9uXG4gICAgICAvLyBCdXQgdGhleSBjb3VsZCBiZSB0aGUgaGVhZGVyIGZvciB0aGUgbmV4dCBmaWxlLiBUaGVyZWZvcmUgcHJ1bmUgc3VjaCBjYXNlcyBvdXQuXG4gICAgICBpZiAoZGlmZnN0cltpXS5pbmRleE9mKCctLS0gJykgPT09IDBcbiAgICAgICAgICAgICYmIChpICsgMiA8IGRpZmZzdHIubGVuZ3RoKVxuICAgICAgICAgICAgJiYgZGlmZnN0cltpICsgMV0uaW5kZXhPZignKysrICcpID09PSAwXG4gICAgICAgICAgICAmJiBkaWZmc3RyW2kgKyAyXS5pbmRleE9mKCdAQCcpID09PSAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBsZXQgb3BlcmF0aW9uID0gZGlmZnN0cltpXVswXTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJysnIHx8IG9wZXJhdGlvbiA9PT0gJy0nIHx8IG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIGh1bmsubGluZXMucHVzaChkaWZmc3RyW2ldKTtcbiAgICAgICAgaHVuay5saW5lZGVsaW1pdGVycy5wdXNoKGRlbGltaXRlcnNbaV0gfHwgJ1xcbicpO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIGFkZENvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgYWRkQ291bnQrKztcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdGhlIGVtcHR5IGJsb2NrIGNvdW50IGNhc2VcbiAgICBpZiAoIWFkZENvdW50ICYmIGh1bmsubmV3TGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsubmV3TGluZXMgPSAwO1xuICAgIH1cbiAgICBpZiAoIXJlbW92ZUNvdW50ICYmIGh1bmsub2xkTGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsub2xkTGluZXMgPSAwO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gb3B0aW9uYWwgc2FuaXR5IGNoZWNraW5nXG4gICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICBpZiAoYWRkQ291bnQgIT09IGh1bmsubmV3TGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBZGRlZCBsaW5lIGNvdW50IGRpZCBub3QgbWF0Y2ggZm9yIGh1bmsgYXQgbGluZSAnICsgKGNodW5rSGVhZGVySW5kZXggKyAxKSk7XG4gICAgICB9XG4gICAgICBpZiAocmVtb3ZlQ291bnQgIT09IGh1bmsub2xkTGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHVuaztcbiAgfVxuXG4gIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICBwYXJzZUluZGV4KCk7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cbiJdfQ==


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/"use strict";

	exports.__esModule = true;

	exports["default"] = /*istanbul ignore end*/function (start, minLine, maxLine) {
	  var wantForward = true,
	      backwardExhausted = false,
	      forwardExhausted = false,
	      localOffset = 1;

	  return function iterator() {
	    if (wantForward && !forwardExhausted) {
	      if (backwardExhausted) {
	        localOffset++;
	      } else {
	        wantForward = false;
	      }

	      // Check if trying to fit beyond text length, and if not, check it fits
	      // after offset location (or desired location on first iteration)
	      if (start + localOffset <= maxLine) {
	        return localOffset;
	      }

	      forwardExhausted = true;
	    }

	    if (!backwardExhausted) {
	      if (!forwardExhausted) {
	        wantForward = true;
	      }

	      // Check if trying to fit before text beginning, and if not, check it fits
	      // before offset location
	      if (minLine <= start - localOffset) {
	        return -localOffset++;
	      }

	      backwardExhausted = true;
	      return iterator();
	    }

	    // We tried to fit hunk before text beginning and beyond text length, then
	    // hunk can't fit on the text. Return undefined
	  };
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbInN0YXJ0IiwibWluTGluZSIsIm1heExpbmUiLCJ3YW50Rm9yd2FyZCIsImJhY2t3YXJkRXhoYXVzdGVkIiwiZm9yd2FyZEV4aGF1c3RlZCIsImxvY2FsT2Zmc2V0IiwiaXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7NENBR2UsVUFBU0EsS0FBVCxFQUFnQkMsT0FBaEIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQy9DLE1BQUlDLGNBQWMsSUFBbEI7QUFBQSxNQUNJQyxvQkFBb0IsS0FEeEI7QUFBQSxNQUVJQyxtQkFBbUIsS0FGdkI7QUFBQSxNQUdJQyxjQUFjLENBSGxCOztBQUtBLFNBQU8sU0FBU0MsUUFBVCxHQUFvQjtBQUN6QixRQUFJSixlQUFlLENBQUNFLGdCQUFwQixFQUFzQztBQUNwQyxVQUFJRCxpQkFBSixFQUF1QjtBQUNyQkU7QUFDRCxPQUZELE1BRU87QUFDTEgsc0JBQWMsS0FBZDtBQUNEOztBQUVEO0FBQ0E7QUFDQSxVQUFJSCxRQUFRTSxXQUFSLElBQXVCSixPQUEzQixFQUFvQztBQUNsQyxlQUFPSSxXQUFQO0FBQ0Q7O0FBRURELHlCQUFtQixJQUFuQjtBQUNEOztBQUVELFFBQUksQ0FBQ0QsaUJBQUwsRUFBd0I7QUFDdEIsVUFBSSxDQUFDQyxnQkFBTCxFQUF1QjtBQUNyQkYsc0JBQWMsSUFBZDtBQUNEOztBQUVEO0FBQ0E7QUFDQSxVQUFJRixXQUFXRCxRQUFRTSxXQUF2QixFQUFvQztBQUNsQyxlQUFPLENBQUNBLGFBQVI7QUFDRDs7QUFFREYsMEJBQW9CLElBQXBCO0FBQ0EsYUFBT0csVUFBUDtBQUNEOztBQUVEO0FBQ0E7QUFDRCxHQWxDRDtBQW1DRCxDIiwiZmlsZSI6ImRpc3RhbmNlLWl0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSXRlcmF0b3IgdGhhdCB0cmF2ZXJzZXMgaW4gdGhlIHJhbmdlIG9mIFttaW4sIG1heF0sIHN0ZXBwaW5nXG4vLyBieSBkaXN0YW5jZSBmcm9tIGEgZ2l2ZW4gc3RhcnQgcG9zaXRpb24uIEkuZS4gZm9yIFswLCA0XSwgd2l0aFxuLy8gc3RhcnQgb2YgMiwgdGhpcyB3aWxsIGl0ZXJhdGUgMiwgMywgMSwgNCwgMC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXJ0LCBtaW5MaW5lLCBtYXhMaW5lKSB7XG4gIGxldCB3YW50Rm9yd2FyZCA9IHRydWUsXG4gICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgbG9jYWxPZmZzZXQgPSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiBpdGVyYXRvcigpIHtcbiAgICBpZiAod2FudEZvcndhcmQgJiYgIWZvcndhcmRFeGhhdXN0ZWQpIHtcbiAgICAgIGlmIChiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICBsb2NhbE9mZnNldCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FudEZvcndhcmQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZXlvbmQgdGV4dCBsZW5ndGgsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcbiAgICAgIC8vIGFmdGVyIG9mZnNldCBsb2NhdGlvbiAob3IgZGVzaXJlZCBsb2NhdGlvbiBvbiBmaXJzdCBpdGVyYXRpb24pXG4gICAgICBpZiAoc3RhcnQgKyBsb2NhbE9mZnNldCA8PSBtYXhMaW5lKSB7XG4gICAgICAgIHJldHVybiBsb2NhbE9mZnNldDtcbiAgICAgIH1cblxuICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgaWYgKCFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgIHdhbnRGb3J3YXJkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZWZvcmUgdGV4dCBiZWdpbm5pbmcsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcbiAgICAgIC8vIGJlZm9yZSBvZmZzZXQgbG9jYXRpb25cbiAgICAgIGlmIChtaW5MaW5lIDw9IHN0YXJ0IC0gbG9jYWxPZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC1sb2NhbE9mZnNldCsrO1xuICAgICAgfVxuXG4gICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICByZXR1cm4gaXRlcmF0b3IoKTtcbiAgICB9XG5cbiAgICAvLyBXZSB0cmllZCB0byBmaXQgaHVuayBiZWZvcmUgdGV4dCBiZWdpbm5pbmcgYW5kIGJleW9uZCB0ZXh0IGxlbmd0aCwgdGhlblxuICAgIC8vIGh1bmsgY2FuJ3QgZml0IG9uIHRoZSB0ZXh0LiBSZXR1cm4gdW5kZWZpbmVkXG4gIH07XG59XG4iXX0=


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/calcLineCount = calcLineCount;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/merge = merge;

	var /*istanbul ignore start*/_create = __webpack_require__(14) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_parse = __webpack_require__(11) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_array = __webpack_require__(15) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/*istanbul ignore end*/function calcLineCount(hunk) {
	  /*istanbul ignore start*/var _calcOldNewLineCount = /*istanbul ignore end*/calcOldNewLineCount(hunk.lines),
	      oldLines = _calcOldNewLineCount.oldLines,
	      newLines = _calcOldNewLineCount.newLines;

	  if (oldLines !== undefined) {
	    hunk.oldLines = oldLines;
	  } else {
	    delete hunk.oldLines;
	  }

	  if (newLines !== undefined) {
	    hunk.newLines = newLines;
	  } else {
	    delete hunk.newLines;
	  }
	}

	function merge(mine, theirs, base) {
	  mine = loadPatch(mine, base);
	  theirs = loadPatch(theirs, base);

	  var ret = {};

	  // For index we just let it pass through as it doesn't have any necessary meaning.
	  // Leaving sanity checks on this to the API consumer that may know more about the
	  // meaning in their own context.
	  if (mine.index || theirs.index) {
	    ret.index = mine.index || theirs.index;
	  }

	  if (mine.newFileName || theirs.newFileName) {
	    if (!fileNameChanged(mine)) {
	      // No header or no change in ours, use theirs (and ours if theirs does not exist)
	      ret.oldFileName = theirs.oldFileName || mine.oldFileName;
	      ret.newFileName = theirs.newFileName || mine.newFileName;
	      ret.oldHeader = theirs.oldHeader || mine.oldHeader;
	      ret.newHeader = theirs.newHeader || mine.newHeader;
	    } else if (!fileNameChanged(theirs)) {
	      // No header or no change in theirs, use ours
	      ret.oldFileName = mine.oldFileName;
	      ret.newFileName = mine.newFileName;
	      ret.oldHeader = mine.oldHeader;
	      ret.newHeader = mine.newHeader;
	    } else {
	      // Both changed... figure it out
	      ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
	      ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
	      ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
	      ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
	    }
	  }

	  ret.hunks = [];

	  var mineIndex = 0,
	      theirsIndex = 0,
	      mineOffset = 0,
	      theirsOffset = 0;

	  while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
	    var mineCurrent = mine.hunks[mineIndex] || { oldStart: Infinity },
	        theirsCurrent = theirs.hunks[theirsIndex] || { oldStart: Infinity };

	    if (hunkBefore(mineCurrent, theirsCurrent)) {
	      // This patch does not overlap with any of the others, yay.
	      ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
	      mineIndex++;
	      theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
	    } else if (hunkBefore(theirsCurrent, mineCurrent)) {
	      // This patch does not overlap with any of the others, yay.
	      ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
	      theirsIndex++;
	      mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
	    } else {
	      // Overlap, merge as best we can
	      var mergedHunk = {
	        oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
	        oldLines: 0,
	        newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
	        newLines: 0,
	        lines: []
	      };
	      mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
	      theirsIndex++;
	      mineIndex++;

	      ret.hunks.push(mergedHunk);
	    }
	  }

	  return ret;
	}

	function loadPatch(param, base) {
	  if (typeof param === 'string') {
	    if (/^@@/m.test(param) || /^Index:/m.test(param)) {
	      return (/*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(param)[0]
	      );
	    }

	    if (!base) {
	      throw new Error('Must provide a base reference or pass in a patch');
	    }
	    return (/*istanbul ignore start*/(0, _create.structuredPatch) /*istanbul ignore end*/(undefined, undefined, base, param)
	    );
	  }

	  return param;
	}

	function fileNameChanged(patch) {
	  return patch.newFileName && patch.newFileName !== patch.oldFileName;
	}

	function selectField(index, mine, theirs) {
	  if (mine === theirs) {
	    return mine;
	  } else {
	    index.conflict = true;
	    return { mine: mine, theirs: theirs };
	  }
	}

	function hunkBefore(test, check) {
	  return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
	}

	function cloneHunk(hunk, offset) {
	  return {
	    oldStart: hunk.oldStart, oldLines: hunk.oldLines,
	    newStart: hunk.newStart + offset, newLines: hunk.newLines,
	    lines: hunk.lines
	  };
	}

	function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
	  // This will generally result in a conflicted hunk, but there are cases where the context
	  // is the only overlap where we can successfully merge the content here.
	  var mine = { offset: mineOffset, lines: mineLines, index: 0 },
	      their = { offset: theirOffset, lines: theirLines, index: 0 };

	  // Handle any leading content
	  insertLeading(hunk, mine, their);
	  insertLeading(hunk, their, mine);

	  // Now in the overlap content. Scan through and select the best changes from each.
	  while (mine.index < mine.lines.length && their.index < their.lines.length) {
	    var mineCurrent = mine.lines[mine.index],
	        theirCurrent = their.lines[their.index];

	    if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
	      // Both modified ...
	      mutualChange(hunk, mine, their);
	    } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
	      /*istanbul ignore start*/var _hunk$lines;

	      /*istanbul ignore end*/ // Mine inserted
	      /*istanbul ignore start*/(_hunk$lines = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/collectChange(mine)));
	    } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
	      /*istanbul ignore start*/var _hunk$lines2;

	      /*istanbul ignore end*/ // Theirs inserted
	      /*istanbul ignore start*/(_hunk$lines2 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines2 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/collectChange(their)));
	    } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
	      // Mine removed or edited
	      removal(hunk, mine, their);
	    } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
	      // Their removed or edited
	      removal(hunk, their, mine, true);
	    } else if (mineCurrent === theirCurrent) {
	      // Context identity
	      hunk.lines.push(mineCurrent);
	      mine.index++;
	      their.index++;
	    } else {
	      // Context mismatch
	      conflict(hunk, collectChange(mine), collectChange(their));
	    }
	  }

	  // Now push anything that may be remaining
	  insertTrailing(hunk, mine);
	  insertTrailing(hunk, their);

	  calcLineCount(hunk);
	}

	function mutualChange(hunk, mine, their) {
	  var myChanges = collectChange(mine),
	      theirChanges = collectChange(their);

	  if (allRemoves(myChanges) && allRemoves(theirChanges)) {
	    // Special case for remove changes that are supersets of one another
	    if ( /*istanbul ignore start*/(0, _array.arrayStartsWith) /*istanbul ignore end*/(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
	      /*istanbul ignore start*/var _hunk$lines3;

	      /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines3 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines3 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/myChanges));
	      return;
	    } else if ( /*istanbul ignore start*/(0, _array.arrayStartsWith) /*istanbul ignore end*/(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
	      /*istanbul ignore start*/var _hunk$lines4;

	      /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines4 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines4 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/theirChanges));
	      return;
	    }
	  } else if ( /*istanbul ignore start*/(0, _array.arrayEqual) /*istanbul ignore end*/(myChanges, theirChanges)) {
	    /*istanbul ignore start*/var _hunk$lines5;

	    /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines5 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines5 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/myChanges));
	    return;
	  }

	  conflict(hunk, myChanges, theirChanges);
	}

	function removal(hunk, mine, their, swap) {
	  var myChanges = collectChange(mine),
	      theirChanges = collectContext(their, myChanges);
	  if (theirChanges.merged) {
	    /*istanbul ignore start*/var _hunk$lines6;

	    /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines6 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines6 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/theirChanges.merged));
	  } else {
	    conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
	  }
	}

	function conflict(hunk, mine, their) {
	  hunk.conflict = true;
	  hunk.lines.push({
	    conflict: true,
	    mine: mine,
	    theirs: their
	  });
	}

	function insertLeading(hunk, insert, their) {
	  while (insert.offset < their.offset && insert.index < insert.lines.length) {
	    var line = insert.lines[insert.index++];
	    hunk.lines.push(line);
	    insert.offset++;
	  }
	}
	function insertTrailing(hunk, insert) {
	  while (insert.index < insert.lines.length) {
	    var line = insert.lines[insert.index++];
	    hunk.lines.push(line);
	  }
	}

	function collectChange(state) {
	  var ret = [],
	      operation = state.lines[state.index][0];
	  while (state.index < state.lines.length) {
	    var line = state.lines[state.index];

	    // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.
	    if (operation === '-' && line[0] === '+') {
	      operation = '+';
	    }

	    if (operation === line[0]) {
	      ret.push(line);
	      state.index++;
	    } else {
	      break;
	    }
	  }

	  return ret;
	}
	function collectContext(state, matchChanges) {
	  var changes = [],
	      merged = [],
	      matchIndex = 0,
	      contextChanges = false,
	      conflicted = false;
	  while (matchIndex < matchChanges.length && state.index < state.lines.length) {
	    var change = state.lines[state.index],
	        match = matchChanges[matchIndex];

	    // Once we've hit our add, then we are done
	    if (match[0] === '+') {
	      break;
	    }

	    contextChanges = contextChanges || change[0] !== ' ';

	    merged.push(match);
	    matchIndex++;

	    // Consume any additions in the other block as a conflict to attempt
	    // to pull in the remaining context after this
	    if (change[0] === '+') {
	      conflicted = true;

	      while (change[0] === '+') {
	        changes.push(change);
	        change = state.lines[++state.index];
	      }
	    }

	    if (match.substr(1) === change.substr(1)) {
	      changes.push(change);
	      state.index++;
	    } else {
	      conflicted = true;
	    }
	  }

	  if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
	    conflicted = true;
	  }

	  if (conflicted) {
	    return changes;
	  }

	  while (matchIndex < matchChanges.length) {
	    merged.push(matchChanges[matchIndex++]);
	  }

	  return {
	    merged: merged,
	    changes: changes
	  };
	}

	function allRemoves(changes) {
	  return changes.reduce(function (prev, change) {
	    return prev && change[0] === '-';
	  }, true);
	}
	function skipRemoveSuperset(state, removeChanges, delta) {
	  for (var i = 0; i < delta; i++) {
	    var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);
	    if (state.lines[state.index + i] !== ' ' + changeContent) {
	      return false;
	    }
	  }

	  state.index += delta;
	  return true;
	}

	function calcOldNewLineCount(lines) {
	  var oldLines = 0;
	  var newLines = 0;

	  lines.forEach(function (line) {
	    if (typeof line !== 'string') {
	      var myCount = calcOldNewLineCount(line.mine);
	      var theirCount = calcOldNewLineCount(line.theirs);

	      if (oldLines !== undefined) {
	        if (myCount.oldLines === theirCount.oldLines) {
	          oldLines += myCount.oldLines;
	        } else {
	          oldLines = undefined;
	        }
	      }

	      if (newLines !== undefined) {
	        if (myCount.newLines === theirCount.newLines) {
	          newLines += myCount.newLines;
	        } else {
	          newLines = undefined;
	        }
	      }
	    } else {
	      if (newLines !== undefined && (line[0] === '+' || line[0] === ' ')) {
	        newLines++;
	      }
	      if (oldLines !== undefined && (line[0] === '-' || line[0] === ' ')) {
	        oldLines++;
	      }
	    }
	  });

	  return { oldLines: oldLines, newLines: newLines };
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9tZXJnZS5qcyJdLCJuYW1lcyI6WyJjYWxjTGluZUNvdW50IiwibWVyZ2UiLCJodW5rIiwiY2FsY09sZE5ld0xpbmVDb3VudCIsImxpbmVzIiwib2xkTGluZXMiLCJuZXdMaW5lcyIsInVuZGVmaW5lZCIsIm1pbmUiLCJ0aGVpcnMiLCJiYXNlIiwibG9hZFBhdGNoIiwicmV0IiwiaW5kZXgiLCJuZXdGaWxlTmFtZSIsImZpbGVOYW1lQ2hhbmdlZCIsIm9sZEZpbGVOYW1lIiwib2xkSGVhZGVyIiwibmV3SGVhZGVyIiwic2VsZWN0RmllbGQiLCJodW5rcyIsIm1pbmVJbmRleCIsInRoZWlyc0luZGV4IiwibWluZU9mZnNldCIsInRoZWlyc09mZnNldCIsImxlbmd0aCIsIm1pbmVDdXJyZW50Iiwib2xkU3RhcnQiLCJJbmZpbml0eSIsInRoZWlyc0N1cnJlbnQiLCJodW5rQmVmb3JlIiwicHVzaCIsImNsb25lSHVuayIsIm1lcmdlZEh1bmsiLCJNYXRoIiwibWluIiwibmV3U3RhcnQiLCJtZXJnZUxpbmVzIiwicGFyYW0iLCJ0ZXN0IiwiRXJyb3IiLCJwYXRjaCIsImNvbmZsaWN0IiwiY2hlY2siLCJvZmZzZXQiLCJtaW5lTGluZXMiLCJ0aGVpck9mZnNldCIsInRoZWlyTGluZXMiLCJ0aGVpciIsImluc2VydExlYWRpbmciLCJ0aGVpckN1cnJlbnQiLCJtdXR1YWxDaGFuZ2UiLCJjb2xsZWN0Q2hhbmdlIiwicmVtb3ZhbCIsImluc2VydFRyYWlsaW5nIiwibXlDaGFuZ2VzIiwidGhlaXJDaGFuZ2VzIiwiYWxsUmVtb3ZlcyIsInNraXBSZW1vdmVTdXBlcnNldCIsInN3YXAiLCJjb2xsZWN0Q29udGV4dCIsIm1lcmdlZCIsImluc2VydCIsImxpbmUiLCJzdGF0ZSIsIm9wZXJhdGlvbiIsIm1hdGNoQ2hhbmdlcyIsImNoYW5nZXMiLCJtYXRjaEluZGV4IiwiY29udGV4dENoYW5nZXMiLCJjb25mbGljdGVkIiwiY2hhbmdlIiwibWF0Y2giLCJzdWJzdHIiLCJyZWR1Y2UiLCJwcmV2IiwicmVtb3ZlQ2hhbmdlcyIsImRlbHRhIiwiaSIsImNoYW5nZUNvbnRlbnQiLCJmb3JFYWNoIiwibXlDb3VudCIsInRoZWlyQ291bnQiXSwibWFwcGluZ3MiOiI7OztnQ0FLZ0JBLGEsR0FBQUEsYTt5REFnQkFDLEssR0FBQUEsSzs7QUFyQmhCOztBQUNBOztBQUVBOzs7O3VCQUVPLFNBQVNELGFBQVQsQ0FBdUJFLElBQXZCLEVBQTZCO0FBQUEsNkVBQ0xDLG9CQUFvQkQsS0FBS0UsS0FBekIsQ0FESztBQUFBLE1BQzNCQyxRQUQyQix3QkFDM0JBLFFBRDJCO0FBQUEsTUFDakJDLFFBRGlCLHdCQUNqQkEsUUFEaUI7O0FBR2xDLE1BQUlELGFBQWFFLFNBQWpCLEVBQTRCO0FBQzFCTCxTQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU9ILEtBQUtHLFFBQVo7QUFDRDs7QUFFRCxNQUFJQyxhQUFhQyxTQUFqQixFQUE0QjtBQUMxQkwsU0FBS0ksUUFBTCxHQUFnQkEsUUFBaEI7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPSixLQUFLSSxRQUFaO0FBQ0Q7QUFDRjs7QUFFTSxTQUFTTCxLQUFULENBQWVPLElBQWYsRUFBcUJDLE1BQXJCLEVBQTZCQyxJQUE3QixFQUFtQztBQUN4Q0YsU0FBT0csVUFBVUgsSUFBVixFQUFnQkUsSUFBaEIsQ0FBUDtBQUNBRCxXQUFTRSxVQUFVRixNQUFWLEVBQWtCQyxJQUFsQixDQUFUOztBQUVBLE1BQUlFLE1BQU0sRUFBVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFJSixLQUFLSyxLQUFMLElBQWNKLE9BQU9JLEtBQXpCLEVBQWdDO0FBQzlCRCxRQUFJQyxLQUFKLEdBQVlMLEtBQUtLLEtBQUwsSUFBY0osT0FBT0ksS0FBakM7QUFDRDs7QUFFRCxNQUFJTCxLQUFLTSxXQUFMLElBQW9CTCxPQUFPSyxXQUEvQixFQUE0QztBQUMxQyxRQUFJLENBQUNDLGdCQUFnQlAsSUFBaEIsQ0FBTCxF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Q0Q7QUFDRjs7QUFFRCxVQUFJRCxhQUFhQyxTQUFqQixFQUE0QjtBQUMxQixZQUFJMEUsUUFBUTNFLFFBQVIsS0FBcUI0RSxXQUFXNUUsUUFBcEMsRUFBOEM7QUFDNUNBLHNCQUFZMkUsUUFBUTNFLFFBQXBCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xBLHFCQUFXQyxTQUFYO0FBQ0Q7QUFDRjtBQUNGLEtBbkJELE1BbUJPO0FBQ0wsVUFBSUQsYUFBYUMsU0FBYixLQUEyQndELEtBQUssQ0FBTCxNQUFZLEdBQVosSUFBbUJBLEtBQUssQ0FBTCxNQUFZLEdBQTFELENBQUosRUFBb0U7QUFDbEV6RDtBQUNEO0FBQ0QsVUFBSUQsYUFBYUUsU0FBYixLQUEyQndELEtBQUssQ0FBTCxNQUFZLEdBQVosSUFBbUJBLEtBQUssQ0FBTCxNQUFZLEdBQTFELENBQUosRUFBb0U7QUFDbEUxRDtBQUNEO0FBQ0Y7QUFDRixHQTVCRDs7QUE4QkEsU0FBTyxFQUFDQSxrQkFBRCxFQUFXQyxrQkFBWCxFQUFQO0FBQ0QiLCJmaWxlIjoibWVyZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3N0cnVjdHVyZWRQYXRjaH0gZnJvbSAnLi9jcmVhdGUnO1xuaW1wb3J0IHtwYXJzZVBhdGNofSBmcm9tICcuL3BhcnNlJztcblxuaW1wb3J0IHthcnJheUVxdWFsLCBhcnJheVN0YXJ0c1dpdGh9IGZyb20gJy4uL3V0aWwvYXJyYXknO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY0xpbmVDb3VudChodW5rKSB7XG4gIGNvbnN0IHtvbGRMaW5lcywgbmV3TGluZXN9ID0gY2FsY09sZE5ld0xpbmVDb3VudChodW5rLmxpbmVzKTtcblxuICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGh1bmsub2xkTGluZXMgPSBvbGRMaW5lcztcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgaHVuay5vbGRMaW5lcztcbiAgfVxuXG4gIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaHVuay5uZXdMaW5lcyA9IG5ld0xpbmVzO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSBodW5rLm5ld0xpbmVzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShtaW5lLCB0aGVpcnMsIGJhc2UpIHtcbiAgbWluZSA9IGxvYWRQYXRjaChtaW5lLCBiYXNlKTtcbiAgdGhlaXJzID0gbG9hZFBhdGNoKHRoZWlycywgYmFzZSk7XG5cbiAgbGV0IHJldCA9IHt9O1xuXG4gIC8vIEZvciBpbmRleCB3ZSBqdXN0IGxldCBpdCBwYXNzIHRocm91Z2ggYXMgaXQgZG9lc24ndCBoYXZlIGFueSBuZWNlc3NhcnkgbWVhbmluZy5cbiAgLy8gTGVhdmluZyBzYW5pdHkgY2hlY2tzIG9uIHRoaXMgdG8gdGhlIEFQSSBjb25zdW1lciB0aGF0IG1heSBrbm93IG1vcmUgYWJvdXQgdGhlXG4gIC8vIG1lYW5pbmcgaW4gdGhlaXIgb3duIGNvbnRleHQuXG4gIGlmIChtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleCkge1xuICAgIHJldC5pbmRleCA9IG1pbmUuaW5kZXggfHwgdGhlaXJzLmluZGV4O1xuICB9XG5cbiAgaWYgKG1pbmUubmV3RmlsZU5hbWUgfHwgdGhlaXJzLm5ld0ZpbGVOYW1lKSB7XG4gICAgaWYgKCFmaWxlTmFtZUNoYW5nZWQobWluZSkpIHtcbiAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gb3VycywgdXNlIHRoZWlycyAoYW5kIG91cnMgaWYgdGhlaXJzIGRvZXMgbm90IGV4aXN0KVxuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gdGhlaXJzLm9sZEZpbGVOYW1lIHx8IG1pbmUub2xkRmlsZU5hbWU7XG4gICAgICByZXQubmV3RmlsZU5hbWUgPSB0aGVpcnMubmV3RmlsZU5hbWUgfHwgbWluZS5uZXdGaWxlTmFtZTtcbiAgICAgIHJldC5vbGRIZWFkZXIgPSB0aGVpcnMub2xkSGVhZGVyIHx8IG1pbmUub2xkSGVhZGVyO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IHRoZWlycy5uZXdIZWFkZXIgfHwgbWluZS5uZXdIZWFkZXI7XG4gICAgfSBlbHNlIGlmICghZmlsZU5hbWVDaGFuZ2VkKHRoZWlycykpIHtcbiAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gdGhlaXJzLCB1c2Ugb3Vyc1xuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gbWluZS5vbGRGaWxlTmFtZTtcbiAgICAgIHJldC5uZXdGaWxlTmFtZSA9IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICByZXQub2xkSGVhZGVyID0gbWluZS5vbGRIZWFkZXI7XG4gICAgICByZXQubmV3SGVhZGVyID0gbWluZS5uZXdIZWFkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJvdGggY2hhbmdlZC4uLiBmaWd1cmUgaXQgb3V0XG4gICAgICByZXQub2xkRmlsZU5hbWUgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUub2xkRmlsZU5hbWUsIHRoZWlycy5vbGRGaWxlTmFtZSk7XG4gICAgICByZXQubmV3RmlsZU5hbWUgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUubmV3RmlsZU5hbWUsIHRoZWlycy5uZXdGaWxlTmFtZSk7XG4gICAgICByZXQub2xkSGVhZGVyID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEhlYWRlciwgdGhlaXJzLm9sZEhlYWRlcik7XG4gICAgICByZXQubmV3SGVhZGVyID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0hlYWRlciwgdGhlaXJzLm5ld0hlYWRlcik7XG4gICAgfVxuICB9XG5cbiAgcmV0Lmh1bmtzID0gW107XG5cbiAgbGV0IG1pbmVJbmRleCA9IDAsXG4gICAgICB0aGVpcnNJbmRleCA9IDAsXG4gICAgICBtaW5lT2Zmc2V0ID0gMCxcbiAgICAgIHRoZWlyc09mZnNldCA9IDA7XG5cbiAgd2hpbGUgKG1pbmVJbmRleCA8IG1pbmUuaHVua3MubGVuZ3RoIHx8IHRoZWlyc0luZGV4IDwgdGhlaXJzLmh1bmtzLmxlbmd0aCkge1xuICAgIGxldCBtaW5lQ3VycmVudCA9IG1pbmUuaHVua3NbbWluZUluZGV4XSB8fCB7b2xkU3RhcnQ6IEluZmluaXR5fSxcbiAgICAgICAgdGhlaXJzQ3VycmVudCA9IHRoZWlycy5odW5rc1t0aGVpcnNJbmRleF0gfHwge29sZFN0YXJ0OiBJbmZpbml0eX07XG5cbiAgICBpZiAoaHVua0JlZm9yZShtaW5lQ3VycmVudCwgdGhlaXJzQ3VycmVudCkpIHtcbiAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsobWluZUN1cnJlbnQsIG1pbmVPZmZzZXQpKTtcbiAgICAgIG1pbmVJbmRleCsrO1xuICAgICAgdGhlaXJzT2Zmc2V0ICs9IG1pbmVDdXJyZW50Lm5ld0xpbmVzIC0gbWluZUN1cnJlbnQub2xkTGluZXM7XG4gICAgfSBlbHNlIGlmIChodW5rQmVmb3JlKHRoZWlyc0N1cnJlbnQsIG1pbmVDdXJyZW50KSkge1xuICAgICAgLy8gVGhpcyBwYXRjaCBkb2VzIG5vdCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBvdGhlcnMsIHlheS5cbiAgICAgIHJldC5odW5rcy5wdXNoKGNsb25lSHVuayh0aGVpcnNDdXJyZW50LCB0aGVpcnNPZmZzZXQpKTtcbiAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICBtaW5lT2Zmc2V0ICs9IHRoZWlyc0N1cnJlbnQubmV3TGluZXMgLSB0aGVpcnNDdXJyZW50Lm9sZExpbmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdmVybGFwLCBtZXJnZSBhcyBiZXN0IHdlIGNhblxuICAgICAgbGV0IG1lcmdlZEh1bmsgPSB7XG4gICAgICAgIG9sZFN0YXJ0OiBNYXRoLm1pbihtaW5lQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCksXG4gICAgICAgIG9sZExpbmVzOiAwLFxuICAgICAgICBuZXdTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQubmV3U3RhcnQgKyBtaW5lT2Zmc2V0LCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0ICsgdGhlaXJzT2Zmc2V0KSxcbiAgICAgICAgbmV3TGluZXM6IDAsXG4gICAgICAgIGxpbmVzOiBbXVxuICAgICAgfTtcbiAgICAgIG1lcmdlTGluZXMobWVyZ2VkSHVuaywgbWluZUN1cnJlbnQub2xkU3RhcnQsIG1pbmVDdXJyZW50LmxpbmVzLCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0LCB0aGVpcnNDdXJyZW50LmxpbmVzKTtcbiAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICBtaW5lSW5kZXgrKztcblxuICAgICAgcmV0Lmh1bmtzLnB1c2gobWVyZ2VkSHVuayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbG9hZFBhdGNoKHBhcmFtLCBiYXNlKSB7XG4gIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKC9eQEAvbS50ZXN0KHBhcmFtKSB8fCAoL15JbmRleDovbS50ZXN0KHBhcmFtKSkpIHtcbiAgICAgIHJldHVybiBwYXJzZVBhdGNoKHBhcmFtKVswXTtcbiAgICB9XG5cbiAgICBpZiAoIWJhc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGEgYmFzZSByZWZlcmVuY2Ugb3IgcGFzcyBpbiBhIHBhdGNoJyk7XG4gICAgfVxuICAgIHJldHVybiBzdHJ1Y3R1cmVkUGF0Y2godW5kZWZpbmVkLCB1bmRlZmluZWQsIGJhc2UsIHBhcmFtKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbTtcbn1cblxuZnVuY3Rpb24gZmlsZU5hbWVDaGFuZ2VkKHBhdGNoKSB7XG4gIHJldHVybiBwYXRjaC5uZXdGaWxlTmFtZSAmJiBwYXRjaC5uZXdGaWxlTmFtZSAhPT0gcGF0Y2gub2xkRmlsZU5hbWU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEZpZWxkKGluZGV4LCBtaW5lLCB0aGVpcnMpIHtcbiAgaWYgKG1pbmUgPT09IHRoZWlycykge1xuICAgIHJldHVybiBtaW5lO1xuICB9IGVsc2Uge1xuICAgIGluZGV4LmNvbmZsaWN0ID0gdHJ1ZTtcbiAgICByZXR1cm4ge21pbmUsIHRoZWlyc307XG4gIH1cbn1cblxuZnVuY3Rpb24gaHVua0JlZm9yZSh0ZXN0LCBjaGVjaykge1xuICByZXR1cm4gdGVzdC5vbGRTdGFydCA8IGNoZWNrLm9sZFN0YXJ0XG4gICAgJiYgKHRlc3Qub2xkU3RhcnQgKyB0ZXN0Lm9sZExpbmVzKSA8IGNoZWNrLm9sZFN0YXJ0O1xufVxuXG5mdW5jdGlvbiBjbG9uZUh1bmsoaHVuaywgb2Zmc2V0KSB7XG4gIHJldHVybiB7XG4gICAgb2xkU3RhcnQ6IGh1bmsub2xkU3RhcnQsIG9sZExpbmVzOiBodW5rLm9sZExpbmVzLFxuICAgIG5ld1N0YXJ0OiBodW5rLm5ld1N0YXJ0ICsgb2Zmc2V0LCBuZXdMaW5lczogaHVuay5uZXdMaW5lcyxcbiAgICBsaW5lczogaHVuay5saW5lc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZUxpbmVzKGh1bmssIG1pbmVPZmZzZXQsIG1pbmVMaW5lcywgdGhlaXJPZmZzZXQsIHRoZWlyTGluZXMpIHtcbiAgLy8gVGhpcyB3aWxsIGdlbmVyYWxseSByZXN1bHQgaW4gYSBjb25mbGljdGVkIGh1bmssIGJ1dCB0aGVyZSBhcmUgY2FzZXMgd2hlcmUgdGhlIGNvbnRleHRcbiAgLy8gaXMgdGhlIG9ubHkgb3ZlcmxhcCB3aGVyZSB3ZSBjYW4gc3VjY2Vzc2Z1bGx5IG1lcmdlIHRoZSBjb250ZW50IGhlcmUuXG4gIGxldCBtaW5lID0ge29mZnNldDogbWluZU9mZnNldCwgbGluZXM6IG1pbmVMaW5lcywgaW5kZXg6IDB9LFxuICAgICAgdGhlaXIgPSB7b2Zmc2V0OiB0aGVpck9mZnNldCwgbGluZXM6IHRoZWlyTGluZXMsIGluZGV4OiAwfTtcblxuICAvLyBIYW5kbGUgYW55IGxlYWRpbmcgY29udGVudFxuICBpbnNlcnRMZWFkaW5nKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgaW5zZXJ0TGVhZGluZyhodW5rLCB0aGVpciwgbWluZSk7XG5cbiAgLy8gTm93IGluIHRoZSBvdmVybGFwIGNvbnRlbnQuIFNjYW4gdGhyb3VnaCBhbmQgc2VsZWN0IHRoZSBiZXN0IGNoYW5nZXMgZnJvbSBlYWNoLlxuICB3aGlsZSAobWluZS5pbmRleCA8IG1pbmUubGluZXMubGVuZ3RoICYmIHRoZWlyLmluZGV4IDwgdGhlaXIubGluZXMubGVuZ3RoKSB7XG4gICAgbGV0IG1pbmVDdXJyZW50ID0gbWluZS5saW5lc1ttaW5lLmluZGV4XSxcbiAgICAgICAgdGhlaXJDdXJyZW50ID0gdGhlaXIubGluZXNbdGhlaXIuaW5kZXhdO1xuXG4gICAgaWYgKChtaW5lQ3VycmVudFswXSA9PT0gJy0nIHx8IG1pbmVDdXJyZW50WzBdID09PSAnKycpXG4gICAgICAgICYmICh0aGVpckN1cnJlbnRbMF0gPT09ICctJyB8fCB0aGVpckN1cnJlbnRbMF0gPT09ICcrJykpIHtcbiAgICAgIC8vIEJvdGggbW9kaWZpZWQgLi4uXG4gICAgICBtdXR1YWxDaGFuZ2UoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnRbMF0gPT09ICcrJyAmJiB0aGVpckN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLy8gTWluZSBpbnNlcnRlZFxuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiBjb2xsZWN0Q2hhbmdlKG1pbmUpKTtcbiAgICB9IGVsc2UgaWYgKHRoZWlyQ3VycmVudFswXSA9PT0gJysnICYmIG1pbmVDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8vIFRoZWlycyBpbnNlcnRlZFxuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiBjb2xsZWN0Q2hhbmdlKHRoZWlyKSk7XG4gICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudFswXSA9PT0gJy0nICYmIHRoZWlyQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAvLyBNaW5lIHJlbW92ZWQgb3IgZWRpdGVkXG4gICAgICByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICB9IGVsc2UgaWYgKHRoZWlyQ3VycmVudFswXSA9PT0gJy0nICYmIG1pbmVDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8vIFRoZWlyIHJlbW92ZWQgb3IgZWRpdGVkXG4gICAgICByZW1vdmFsKGh1bmssIHRoZWlyLCBtaW5lLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50ID09PSB0aGVpckN1cnJlbnQpIHtcbiAgICAgIC8vIENvbnRleHQgaWRlbnRpdHlcbiAgICAgIGh1bmsubGluZXMucHVzaChtaW5lQ3VycmVudCk7XG4gICAgICBtaW5lLmluZGV4Kys7XG4gICAgICB0aGVpci5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb250ZXh0IG1pc21hdGNoXG4gICAgICBjb25mbGljdChodW5rLCBjb2xsZWN0Q2hhbmdlKG1pbmUpLCBjb2xsZWN0Q2hhbmdlKHRoZWlyKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTm93IHB1c2ggYW55dGhpbmcgdGhhdCBtYXkgYmUgcmVtYWluaW5nXG4gIGluc2VydFRyYWlsaW5nKGh1bmssIG1pbmUpO1xuICBpbnNlcnRUcmFpbGluZyhodW5rLCB0aGVpcik7XG5cbiAgY2FsY0xpbmVDb3VudChodW5rKTtcbn1cblxuZnVuY3Rpb24gbXV0dWFsQ2hhbmdlKGh1bmssIG1pbmUsIHRoZWlyKSB7XG4gIGxldCBteUNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKG1pbmUpLFxuICAgICAgdGhlaXJDaGFuZ2VzID0gY29sbGVjdENoYW5nZSh0aGVpcik7XG5cbiAgaWYgKGFsbFJlbW92ZXMobXlDaGFuZ2VzKSAmJiBhbGxSZW1vdmVzKHRoZWlyQ2hhbmdlcykpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIHJlbW92ZSBjaGFuZ2VzIHRoYXQgYXJlIHN1cGVyc2V0cyBvZiBvbmUgYW5vdGhlclxuICAgIGlmIChhcnJheVN0YXJ0c1dpdGgobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpXG4gICAgICAgICYmIHNraXBSZW1vdmVTdXBlcnNldCh0aGVpciwgbXlDaGFuZ2VzLCBteUNoYW5nZXMubGVuZ3RoIC0gdGhlaXJDaGFuZ2VzLmxlbmd0aCkpIHtcbiAgICAgIGh1bmsubGluZXMucHVzaCguLi4gbXlDaGFuZ2VzKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGFycmF5U3RhcnRzV2l0aCh0aGVpckNoYW5nZXMsIG15Q2hhbmdlcylcbiAgICAgICAgJiYgc2tpcFJlbW92ZVN1cGVyc2V0KG1pbmUsIHRoZWlyQ2hhbmdlcywgdGhlaXJDaGFuZ2VzLmxlbmd0aCAtIG15Q2hhbmdlcy5sZW5ndGgpKSB7XG4gICAgICBodW5rLmxpbmVzLnB1c2goLi4uIHRoZWlyQ2hhbmdlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2UgaWYgKGFycmF5RXF1YWwobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpKSB7XG4gICAgaHVuay5saW5lcy5wdXNoKC4uLiBteUNoYW5nZXMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbmZsaWN0KGh1bmssIG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZhbChodW5rLCBtaW5lLCB0aGVpciwgc3dhcCkge1xuICBsZXQgbXlDaGFuZ2VzID0gY29sbGVjdENoYW5nZShtaW5lKSxcbiAgICAgIHRoZWlyQ2hhbmdlcyA9IGNvbGxlY3RDb250ZXh0KHRoZWlyLCBteUNoYW5nZXMpO1xuICBpZiAodGhlaXJDaGFuZ2VzLm1lcmdlZCkge1xuICAgIGh1bmsubGluZXMucHVzaCguLi4gdGhlaXJDaGFuZ2VzLm1lcmdlZCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmxpY3QoaHVuaywgc3dhcCA/IHRoZWlyQ2hhbmdlcyA6IG15Q2hhbmdlcywgc3dhcCA/IG15Q2hhbmdlcyA6IHRoZWlyQ2hhbmdlcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uZmxpY3QoaHVuaywgbWluZSwgdGhlaXIpIHtcbiAgaHVuay5jb25mbGljdCA9IHRydWU7XG4gIGh1bmsubGluZXMucHVzaCh7XG4gICAgY29uZmxpY3Q6IHRydWUsXG4gICAgbWluZTogbWluZSxcbiAgICB0aGVpcnM6IHRoZWlyXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRMZWFkaW5nKGh1bmssIGluc2VydCwgdGhlaXIpIHtcbiAgd2hpbGUgKGluc2VydC5vZmZzZXQgPCB0aGVpci5vZmZzZXQgJiYgaW5zZXJ0LmluZGV4IDwgaW5zZXJ0LmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBsaW5lID0gaW5zZXJ0LmxpbmVzW2luc2VydC5pbmRleCsrXTtcbiAgICBodW5rLmxpbmVzLnB1c2gobGluZSk7XG4gICAgaW5zZXJ0Lm9mZnNldCsrO1xuICB9XG59XG5mdW5jdGlvbiBpbnNlcnRUcmFpbGluZyhodW5rLCBpbnNlcnQpIHtcbiAgd2hpbGUgKGluc2VydC5pbmRleCA8IGluc2VydC5saW5lcy5sZW5ndGgpIHtcbiAgICBsZXQgbGluZSA9IGluc2VydC5saW5lc1tpbnNlcnQuaW5kZXgrK107XG4gICAgaHVuay5saW5lcy5wdXNoKGxpbmUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RDaGFuZ2Uoc3RhdGUpIHtcbiAgbGV0IHJldCA9IFtdLFxuICAgICAgb3BlcmF0aW9uID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdWzBdO1xuICB3aGlsZSAoc3RhdGUuaW5kZXggPCBzdGF0ZS5saW5lcy5sZW5ndGgpIHtcbiAgICBsZXQgbGluZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XTtcblxuICAgIC8vIEdyb3VwIGFkZGl0aW9ucyB0aGF0IGFyZSBpbW1lZGlhdGVseSBhZnRlciBzdWJ0cmFjdGlvbnMgYW5kIHRyZWF0IHRoZW0gYXMgb25lIFwiYXRvbWljXCIgbW9kaWZ5IGNoYW5nZS5cbiAgICBpZiAob3BlcmF0aW9uID09PSAnLScgJiYgbGluZVswXSA9PT0gJysnKSB7XG4gICAgICBvcGVyYXRpb24gPSAnKyc7XG4gICAgfVxuXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gbGluZVswXSkge1xuICAgICAgcmV0LnB1c2gobGluZSk7XG4gICAgICBzdGF0ZS5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuZnVuY3Rpb24gY29sbGVjdENvbnRleHQoc3RhdGUsIG1hdGNoQ2hhbmdlcykge1xuICBsZXQgY2hhbmdlcyA9IFtdLFxuICAgICAgbWVyZ2VkID0gW10sXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIGNvbnRleHRDaGFuZ2VzID0gZmFsc2UsXG4gICAgICBjb25mbGljdGVkID0gZmFsc2U7XG4gIHdoaWxlIChtYXRjaEluZGV4IDwgbWF0Y2hDaGFuZ2VzLmxlbmd0aFxuICAgICAgICAmJiBzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBjaGFuZ2UgPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF0sXG4gICAgICAgIG1hdGNoID0gbWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXhdO1xuXG4gICAgLy8gT25jZSB3ZSd2ZSBoaXQgb3VyIGFkZCwgdGhlbiB3ZSBhcmUgZG9uZVxuICAgIGlmIChtYXRjaFswXSA9PT0gJysnKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb250ZXh0Q2hhbmdlcyA9IGNvbnRleHRDaGFuZ2VzIHx8IGNoYW5nZVswXSAhPT0gJyAnO1xuXG4gICAgbWVyZ2VkLnB1c2gobWF0Y2gpO1xuICAgIG1hdGNoSW5kZXgrKztcblxuICAgIC8vIENvbnN1bWUgYW55IGFkZGl0aW9ucyBpbiB0aGUgb3RoZXIgYmxvY2sgYXMgYSBjb25mbGljdCB0byBhdHRlbXB0XG4gICAgLy8gdG8gcHVsbCBpbiB0aGUgcmVtYWluaW5nIGNvbnRleHQgYWZ0ZXIgdGhpc1xuICAgIGlmIChjaGFuZ2VbMF0gPT09ICcrJykge1xuICAgICAgY29uZmxpY3RlZCA9IHRydWU7XG5cbiAgICAgIHdoaWxlIChjaGFuZ2VbMF0gPT09ICcrJykge1xuICAgICAgICBjaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgY2hhbmdlID0gc3RhdGUubGluZXNbKytzdGF0ZS5pbmRleF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLnN1YnN0cigxKSA9PT0gY2hhbmdlLnN1YnN0cigxKSkge1xuICAgICAgY2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICBzdGF0ZS5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoKG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4XSB8fCAnJylbMF0gPT09ICcrJ1xuICAgICAgJiYgY29udGV4dENoYW5nZXMpIHtcbiAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChjb25mbGljdGVkKSB7XG4gICAgcmV0dXJuIGNoYW5nZXM7XG4gIH1cblxuICB3aGlsZSAobWF0Y2hJbmRleCA8IG1hdGNoQ2hhbmdlcy5sZW5ndGgpIHtcbiAgICBtZXJnZWQucHVzaChtYXRjaENoYW5nZXNbbWF0Y2hJbmRleCsrXSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1lcmdlZCxcbiAgICBjaGFuZ2VzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFsbFJlbW92ZXMoY2hhbmdlcykge1xuICByZXR1cm4gY2hhbmdlcy5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY2hhbmdlKSB7XG4gICAgcmV0dXJuIHByZXYgJiYgY2hhbmdlWzBdID09PSAnLSc7XG4gIH0sIHRydWUpO1xufVxuZnVuY3Rpb24gc2tpcFJlbW92ZVN1cGVyc2V0KHN0YXRlLCByZW1vdmVDaGFuZ2VzLCBkZWx0YSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbHRhOyBpKyspIHtcbiAgICBsZXQgY2hhbmdlQ29udGVudCA9IHJlbW92ZUNoYW5nZXNbcmVtb3ZlQ2hhbmdlcy5sZW5ndGggLSBkZWx0YSArIGldLnN1YnN0cigxKTtcbiAgICBpZiAoc3RhdGUubGluZXNbc3RhdGUuaW5kZXggKyBpXSAhPT0gJyAnICsgY2hhbmdlQ29udGVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLmluZGV4ICs9IGRlbHRhO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lcykge1xuICBsZXQgb2xkTGluZXMgPSAwO1xuICBsZXQgbmV3TGluZXMgPSAwO1xuXG4gIGxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgIGlmICh0eXBlb2YgbGluZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBteUNvdW50ID0gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lLm1pbmUpO1xuICAgICAgbGV0IHRoZWlyQ291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmUudGhlaXJzKTtcblxuICAgICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG15Q291bnQub2xkTGluZXMgPT09IHRoZWlyQ291bnQub2xkTGluZXMpIHtcbiAgICAgICAgICBvbGRMaW5lcyArPSBteUNvdW50Lm9sZExpbmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9sZExpbmVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChteUNvdW50Lm5ld0xpbmVzID09PSB0aGVpckNvdW50Lm5ld0xpbmVzKSB7XG4gICAgICAgICAgbmV3TGluZXMgKz0gbXlDb3VudC5uZXdMaW5lcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdMaW5lcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCAmJiAobGluZVswXSA9PT0gJysnIHx8IGxpbmVbMF0gPT09ICcgJykpIHtcbiAgICAgICAgbmV3TGluZXMrKztcbiAgICAgIH1cbiAgICAgIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkICYmIChsaW5lWzBdID09PSAnLScgfHwgbGluZVswXSA9PT0gJyAnKSkge1xuICAgICAgICBvbGRMaW5lcysrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtvbGRMaW5lcywgbmV3TGluZXN9O1xufVxuIl19


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/structuredPatch = structuredPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createTwoFilesPatch = createTwoFilesPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createPatch = createPatch;

	var /*istanbul ignore start*/_line = __webpack_require__(5) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/*istanbul ignore end*/function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
	  if (!options) {
	    options = {};
	  }
	  if (typeof options.context === 'undefined') {
	    options.context = 4;
	  }

	  var diff = /*istanbul ignore start*/(0, _line.diffLines) /*istanbul ignore end*/(oldStr, newStr, options);
	  diff.push({ value: '', lines: [] }); // Append an empty value to make cleanup easier

	  function contextLines(lines) {
	    return lines.map(function (entry) {
	      return ' ' + entry;
	    });
	  }

	  var hunks = [];
	  var oldRangeStart = 0,
	      newRangeStart = 0,
	      curRange = [],
	      oldLine = 1,
	      newLine = 1;

	  /*istanbul ignore start*/var _loop = function _loop( /*istanbul ignore end*/i) {
	    var current = diff[i],
	        lines = current.lines || current.value.replace(/\n$/, '').split('\n');
	    current.lines = lines;

	    if (current.added || current.removed) {
	      /*istanbul ignore start*/var _curRange;

	      /*istanbul ignore end*/ // If we have previous context, start with that
	      if (!oldRangeStart) {
	        var prev = diff[i - 1];
	        oldRangeStart = oldLine;
	        newRangeStart = newLine;

	        if (prev) {
	          curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
	          oldRangeStart -= curRange.length;
	          newRangeStart -= curRange.length;
	        }
	      }

	      // Output our changes
	      /*istanbul ignore start*/(_curRange = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/lines.map(function (entry) {
	        return (current.added ? '+' : '-') + entry;
	      })));

	      // Track the updated file position
	      if (current.added) {
	        newLine += lines.length;
	      } else {
	        oldLine += lines.length;
	      }
	    } else {
	      // Identical context lines. Track line changes
	      if (oldRangeStart) {
	        // Close out any changes that have been output (or join overlapping)
	        if (lines.length <= options.context * 2 && i < diff.length - 2) {
	          /*istanbul ignore start*/var _curRange2;

	          /*istanbul ignore end*/ // Overlapping
	          /*istanbul ignore start*/(_curRange2 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange2 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines)));
	        } else {
	          /*istanbul ignore start*/var _curRange3;

	          /*istanbul ignore end*/ // end the range and output
	          var contextSize = Math.min(lines.length, options.context);
	          /*istanbul ignore start*/(_curRange3 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange3 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines.slice(0, contextSize))));

	          var hunk = {
	            oldStart: oldRangeStart,
	            oldLines: oldLine - oldRangeStart + contextSize,
	            newStart: newRangeStart,
	            newLines: newLine - newRangeStart + contextSize,
	            lines: curRange
	          };
	          if (i >= diff.length - 2 && lines.length <= options.context) {
	            // EOF is inside this hunk
	            var oldEOFNewline = /\n$/.test(oldStr);
	            var newEOFNewline = /\n$/.test(newStr);
	            if (lines.length == 0 && !oldEOFNewline) {
	              // special case: old has no eol and no trailing context; no-nl can end up before adds
	              curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
	            } else if (!oldEOFNewline || !newEOFNewline) {
	              curRange.push('\\ No newline at end of file');
	            }
	          }
	          hunks.push(hunk);

	          oldRangeStart = 0;
	          newRangeStart = 0;
	          curRange = [];
	        }
	      }
	      oldLine += lines.length;
	      newLine += lines.length;
	    }
	  };

	  for (var i = 0; i < diff.length; i++) {
	    /*istanbul ignore start*/_loop( /*istanbul ignore end*/i);
	  }

	  return {
	    oldFileName: oldFileName, newFileName: newFileName,
	    oldHeader: oldHeader, newHeader: newHeader,
	    hunks: hunks
	  };
	}

	function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
	  var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);

	  var ret = [];
	  if (oldFileName == newFileName) {
	    ret.push('Index: ' + oldFileName);
	  }
	  ret.push('===================================================================');
	  ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
	  ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

	  for (var i = 0; i < diff.hunks.length; i++) {
	    var hunk = diff.hunks[i];
	    ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
	    ret.push.apply(ret, hunk.lines);
	  }

	  return ret.join('\n') + '\n';
	}

	function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
	  return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9jcmVhdGUuanMiXSwibmFtZXMiOlsic3RydWN0dXJlZFBhdGNoIiwiY3JlYXRlVHdvRmlsZXNQYXRjaCIsImNyZWF0ZVBhdGNoIiwib2xkRmlsZU5hbWUiLCJuZXdGaWxlTmFtZSIsIm9sZFN0ciIsIm5ld1N0ciIsIm9sZEhlYWRlciIsIm5ld0hlYWRlciIsIm9wdGlvbnMiLCJjb250ZXh0IiwiZGlmZiIsInB1c2giLCJ2YWx1ZSIsImxpbmVzIiwiY29udGV4dExpbmVzIiwibWFwIiwiZW50cnkiLCJodW5rcyIsIm9sZFJhbmdlU3RhcnQiLCJuZXdSYW5nZVN0YXJ0IiwiY3VyUmFuZ2UiLCJvbGRMaW5lIiwibmV3TGluZSIsImkiLCJjdXJyZW50IiwicmVwbGFjZSIsInNwbGl0IiwiYWRkZWQiLCJyZW1vdmVkIiwicHJldiIsInNsaWNlIiwibGVuZ3RoIiwiY29udGV4dFNpemUiLCJNYXRoIiwibWluIiwiaHVuayIsIm9sZFN0YXJ0Iiwib2xkTGluZXMiLCJuZXdTdGFydCIsIm5ld0xpbmVzIiwib2xkRU9GTmV3bGluZSIsInRlc3QiLCJuZXdFT0ZOZXdsaW5lIiwic3BsaWNlIiwicmV0IiwiYXBwbHkiLCJqb2luIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7OztnQ0FFZ0JBLGUsR0FBQUEsZTt5REFpR0FDLG1CLEdBQUFBLG1CO3lEQXdCQUMsVyxHQUFBQSxXOztBQTNIaEI7Ozs7dUJBRU8sU0FBU0YsZUFBVCxDQUF5QkcsV0FBekIsRUFBc0NDLFdBQXRDLEVBQW1EQyxNQUFuRCxFQUEyREMsTUFBM0QsRUFBbUVDLFNBQW5FLEVBQThFQyxTQUE5RSxFQUF5RkMsT0FBekYsRUFBa0c7QUFDdkcsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWkEsY0FBVSxFQUFWO0FBQ0Q7QUFDRCxNQUFJLE9BQU9BLFFBQVFDLE9BQWYsS0FBMkIsV0FBL0IsRUFBNEM7QUFDMUNELFlBQVFDLE9BQVIsR0FBa0IsQ0FBbEI7QUFDRDs7QUFFRCxN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QUEvQyxFQUEwREMsU0FBMUQsRUFBcUVDLE9BQXJFLEVBQThFO0FBQ25GLFNBQU9SLG9CQUFvQitDLFFBQXBCLEVBQThCQSxRQUE5QixFQUF3QzNDLE1BQXhDLEVBQWdEQyxNQUFoRCxFQUF3REMsU0FBeEQsRUFBbUVDLFNBQW5FLEVBQThFQyxPQUE5RSxDQUFQO0FBQ0QiLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkaWZmTGluZXN9IGZyb20gJy4uL2RpZmYvbGluZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5jb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMuY29udGV4dCA9IDQ7XG4gIH1cblxuICBjb25zdCBkaWZmID0gZGlmZkxpbmVzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgZGlmZi5wdXNoKHt2YWx1ZTogJycsIGxpbmVzOiBbXX0pOyAgIC8vIEFwcGVuZCBhbiBlbXB0eSB2YWx1ZSB0byBtYWtlIGNsZWFudXAgZWFzaWVyXG5cbiAgZnVuY3Rpb24gY29udGV4dExpbmVzKGxpbmVzKSB7XG4gICAgcmV0dXJuIGxpbmVzLm1hcChmdW5jdGlvbihlbnRyeSkgeyByZXR1cm4gJyAnICsgZW50cnk7IH0pO1xuICB9XG5cbiAgbGV0IGh1bmtzID0gW107XG4gIGxldCBvbGRSYW5nZVN0YXJ0ID0gMCwgbmV3UmFuZ2VTdGFydCA9IDAsIGN1clJhbmdlID0gW10sXG4gICAgICBvbGRMaW5lID0gMSwgbmV3TGluZSA9IDE7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkaWZmW2ldLFxuICAgICAgICAgIGxpbmVzID0gY3VycmVudC5saW5lcyB8fCBjdXJyZW50LnZhbHVlLnJlcGxhY2UoL1xcbiQvLCAnJykuc3BsaXQoJ1xcbicpO1xuICAgIGN1cnJlbnQubGluZXMgPSBsaW5lcztcblxuICAgIGlmIChjdXJyZW50LmFkZGVkIHx8IGN1cnJlbnQucmVtb3ZlZCkge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBwcmV2aW91cyBjb250ZXh0LCBzdGFydCB3aXRoIHRoYXRcbiAgICAgIGlmICghb2xkUmFuZ2VTdGFydCkge1xuICAgICAgICBjb25zdCBwcmV2ID0gZGlmZltpIC0gMV07XG4gICAgICAgIG9sZFJhbmdlU3RhcnQgPSBvbGRMaW5lO1xuICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gbmV3TGluZTtcblxuICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgIGN1clJhbmdlID0gb3B0aW9ucy5jb250ZXh0ID4gMCA/IGNvbnRleHRMaW5lcyhwcmV2LmxpbmVzLnNsaWNlKC1vcHRpb25zLmNvbnRleHQpKSA6IFtdO1xuICAgICAgICAgIG9sZFJhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgIG5ld1JhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE91dHB1dCBvdXIgY2hhbmdlc1xuICAgICAgY3VyUmFuZ2UucHVzaCguLi4gbGluZXMubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAoY3VycmVudC5hZGRlZCA/ICcrJyA6ICctJykgKyBlbnRyeTtcbiAgICAgIH0pKTtcblxuICAgICAgLy8gVHJhY2sgdGhlIHVwZGF0ZWQgZmlsZSBwb3NpdGlvblxuICAgICAgaWYgKGN1cnJlbnQuYWRkZWQpIHtcbiAgICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWRlbnRpY2FsIGNvbnRleHQgbGluZXMuIFRyYWNrIGxpbmUgY2hhbmdlc1xuICAgICAgaWYgKG9sZFJhbmdlU3RhcnQpIHtcbiAgICAgICAgLy8gQ2xvc2Ugb3V0IGFueSBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIG91dHB1dCAob3Igam9pbiBvdmVybGFwcGluZylcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQgKiAyICYmIGkgPCBkaWZmLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAvLyBPdmVybGFwcGluZ1xuICAgICAgICAgIGN1clJhbmdlLnB1c2goLi4uIGNvbnRleHRMaW5lcyhsaW5lcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVuZCB0aGUgcmFuZ2UgYW5kIG91dHB1dFxuICAgICAgICAgIGxldCBjb250ZXh0U2l6ZSA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgb3B0aW9ucy5jb250ZXh0KTtcbiAgICAgICAgICBjdXJSYW5nZS5wdXNoKC4uLiBjb250ZXh0TGluZXMobGluZXMuc2xpY2UoMCwgY29udGV4dFNpemUpKSk7XG5cbiAgICAgICAgICBsZXQgaHVuayA9IHtcbiAgICAgICAgICAgIG9sZFN0YXJ0OiBvbGRSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgb2xkTGluZXM6IChvbGRMaW5lIC0gb2xkUmFuZ2VTdGFydCArIGNvbnRleHRTaXplKSxcbiAgICAgICAgICAgIG5ld1N0YXJ0OiBuZXdSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgbmV3TGluZXM6IChuZXdMaW5lIC0gbmV3UmFuZ2VTdGFydCArIGNvbnRleHRTaXplKSxcbiAgICAgICAgICAgIGxpbmVzOiBjdXJSYW5nZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGkgPj0gZGlmZi5sZW5ndGggLSAyICYmIGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIEVPRiBpcyBpbnNpZGUgdGhpcyBodW5rXG4gICAgICAgICAgICBsZXQgb2xkRU9GTmV3bGluZSA9ICgvXFxuJC8udGVzdChvbGRTdHIpKTtcbiAgICAgICAgICAgIGxldCBuZXdFT0ZOZXdsaW5lID0gKC9cXG4kLy50ZXN0KG5ld1N0cikpO1xuICAgICAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA9PSAwICYmICFvbGRFT0ZOZXdsaW5lKSB7XG4gICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZTogb2xkIGhhcyBubyBlb2wgYW5kIG5vIHRyYWlsaW5nIGNvbnRleHQ7IG5vLW5sIGNhbiBlbmQgdXAgYmVmb3JlIGFkZHNcbiAgICAgICAgICAgICAgY3VyUmFuZ2Uuc3BsaWNlKGh1bmsub2xkTGluZXMsIDAsICdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW9sZEVPRk5ld2xpbmUgfHwgIW5ld0VPRk5ld2xpbmUpIHtcbiAgICAgICAgICAgICAgY3VyUmFuZ2UucHVzaCgnXFxcXCBObyBuZXdsaW5lIGF0IGVuZCBvZiBmaWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGh1bmtzLnB1c2goaHVuayk7XG5cbiAgICAgICAgICBvbGRSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICBjdXJSYW5nZSA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIG5ld0xpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb2xkRmlsZU5hbWU6IG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZTogbmV3RmlsZU5hbWUsXG4gICAgb2xkSGVhZGVyOiBvbGRIZWFkZXIsIG5ld0hlYWRlcjogbmV3SGVhZGVyLFxuICAgIGh1bmtzOiBodW5rc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHdvRmlsZXNQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICBjb25zdCBkaWZmID0gc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKTtcblxuICBjb25zdCByZXQgPSBbXTtcbiAgaWYgKG9sZEZpbGVOYW1lID09IG5ld0ZpbGVOYW1lKSB7XG4gICAgcmV0LnB1c2goJ0luZGV4OiAnICsgb2xkRmlsZU5hbWUpO1xuICB9XG4gIHJldC5wdXNoKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG4gIHJldC5wdXNoKCctLS0gJyArIGRpZmYub2xkRmlsZU5hbWUgKyAodHlwZW9mIGRpZmYub2xkSGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm9sZEhlYWRlcikpO1xuICByZXQucHVzaCgnKysrICcgKyBkaWZmLm5ld0ZpbGVOYW1lICsgKHR5cGVvZiBkaWZmLm5ld0hlYWRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6ICdcXHQnICsgZGlmZi5uZXdIZWFkZXIpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmYuaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBodW5rID0gZGlmZi5odW5rc1tpXTtcbiAgICByZXQucHVzaChcbiAgICAgICdAQCAtJyArIGh1bmsub2xkU3RhcnQgKyAnLCcgKyBodW5rLm9sZExpbmVzXG4gICAgICArICcgKycgKyBodW5rLm5ld1N0YXJ0ICsgJywnICsgaHVuay5uZXdMaW5lc1xuICAgICAgKyAnIEBAJ1xuICAgICk7XG4gICAgcmV0LnB1c2guYXBwbHkocmV0LCBodW5rLmxpbmVzKTtcbiAgfVxuXG4gIHJldHVybiByZXQuam9pbignXFxuJykgKyAnXFxuJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhdGNoKGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNyZWF0ZVR3b0ZpbGVzUGF0Y2goZmlsZU5hbWUsIGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpO1xufVxuIl19


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/"use strict";

	exports.__esModule = true;
	exports. /*istanbul ignore end*/arrayEqual = arrayEqual;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/arrayStartsWith = arrayStartsWith;
	function arrayEqual(a, b) {
	  if (a.length !== b.length) {
	    return false;
	  }

	  return arrayStartsWith(a, b);
	}

	function arrayStartsWith(array, start) {
	  if (start.length > array.length) {
	    return false;
	  }

	  for (var i = 0; i < start.length; i++) {
	    if (start[i] !== array[i]) {
	      return false;
	    }
	  }

	  return true;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5RXF1YWwiLCJhcnJheVN0YXJ0c1dpdGgiLCJhIiwiYiIsImxlbmd0aCIsImFycmF5Iiwic3RhcnQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Z0NBQWdCQSxVLEdBQUFBLFU7eURBUUFDLGUsR0FBQUEsZTtBQVJULFNBQVNELFVBQVQsQ0FBb0JFLENBQXBCLEVBQXVCQyxDQUF2QixFQUEwQjtBQUMvQixNQUFJRCxFQUFFRSxNQUFGLEtBQWFELEVBQUVDLE1BQW5CLEVBQTJCO0FBQ3pCLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU9ILGdCQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLENBQVA7QUFDRDs7QUFFTSxTQUFTRixlQUFULENBQXlCSSxLQUF6QixFQUFnQ0MsS0FBaEMsRUFBdUM7QUFDNUMsTUFBSUEsTUFBTUYsTUFBTixHQUFlQyxNQUFNRCxNQUF6QixFQUFpQztBQUMvQixXQUFPLEtBQVA7QUFDRDs7QUFFRCxPQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsTUFBTUYsTUFBMUIsRUFBa0NHLEdBQWxDLEVBQXVDO0FBQ3JDLFFBQUlELE1BQU1DLENBQU4sTUFBYUYsTUFBTUUsQ0FBTixDQUFqQixFQUEyQjtBQUN6QixhQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sSUFBUDtBQUNEIiwiZmlsZSI6ImFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFycmF5RXF1YWwoYSwgYikge1xuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5U3RhcnRzV2l0aChhLCBiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5U3RhcnRzV2l0aChhcnJheSwgc3RhcnQpIHtcbiAgaWYgKHN0YXJ0Lmxlbmd0aCA+IGFycmF5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3RhcnRbaV0gIT09IGFycmF5W2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/"use strict";

	exports.__esModule = true;
	exports. /*istanbul ignore end*/convertChangesToDMP = convertChangesToDMP;
	// See: http://code.google.com/p/google-diff-match-patch/wiki/API
	function convertChangesToDMP(changes) {
	  var ret = [],
	      change = /*istanbul ignore start*/void 0 /*istanbul ignore end*/,
	      operation = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
	  for (var i = 0; i < changes.length; i++) {
	    change = changes[i];
	    if (change.added) {
	      operation = 1;
	    } else if (change.removed) {
	      operation = -1;
	    } else {
	      operation = 0;
	    }

	    ret.push([operation, change.value]);
	  }
	  return ret;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L2RtcC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0Q2hhbmdlc1RvRE1QIiwiY2hhbmdlcyIsInJldCIsImNoYW5nZSIsIm9wZXJhdGlvbiIsImkiLCJsZW5ndGgiLCJhZGRlZCIsInJlbW92ZWQiLCJwdXNoIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7OztnQ0FDZ0JBLG1CLEdBQUFBLG1CO0FBRGhCO0FBQ08sU0FBU0EsbUJBQVQsQ0FBNkJDLE9BQTdCLEVBQXNDO0FBQzNDLE1BQUlDLE1BQU0sRUFBVjtBQUFBLE1BQ0lDLHdDQURKO0FBQUEsTUFFSUMsMkNBRko7QUFHQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosUUFBUUssTUFBNUIsRUFBb0NELEdBQXBDLEVBQXlDO0FBQ3ZDRixhQUFTRixRQUFRSSxDQUFSLENBQVQ7QUFDQSxRQUFJRixPQUFPSSxLQUFYLEVBQWtCO0FBQ2hCSCxrQkFBWSxDQUFaO0FBQ0QsS0FGRCxNQUVPLElBQUlELE9BQU9LLE9BQVgsRUFBb0I7QUFDekJKLGtCQUFZLENBQUMsQ0FBYjtBQUNELEtBRk0sTUFFQTtBQUNMQSxrQkFBWSxDQUFaO0FBQ0Q7O0FBRURGLFFBQUlPLElBQUosQ0FBUyxDQUFDTCxTQUFELEVBQVlELE9BQU9PLEtBQW5CLENBQVQ7QUFDRDtBQUNELFNBQU9SLEdBQVA7QUFDRCIsImZpbGUiOiJkbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZWU6IGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtZGlmZi1tYXRjaC1wYXRjaC93aWtpL0FQSVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRDaGFuZ2VzVG9ETVAoY2hhbmdlcykge1xuICBsZXQgcmV0ID0gW10sXG4gICAgICBjaGFuZ2UsXG4gICAgICBvcGVyYXRpb247XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgIGNoYW5nZSA9IGNoYW5nZXNbaV07XG4gICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgb3BlcmF0aW9uID0gMTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICBvcGVyYXRpb24gPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3BlcmF0aW9uID0gMDtcbiAgICB9XG5cbiAgICByZXQucHVzaChbb3BlcmF0aW9uLCBjaGFuZ2UudmFsdWVdKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIl19


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/convertChangesToXML = convertChangesToXML;
	function convertChangesToXML(changes) {
	  var ret = [];
	  for (var i = 0; i < changes.length; i++) {
	    var change = changes[i];
	    if (change.added) {
	      ret.push('<ins>');
	    } else if (change.removed) {
	      ret.push('<del>');
	    }

	    ret.push(escapeHTML(change.value));

	    if (change.added) {
	      ret.push('</ins>');
	    } else if (change.removed) {
	      ret.push('</del>');
	    }
	  }
	  return ret.join('');
	}

	function escapeHTML(s) {
	  var n = s;
	  n = n.replace(/&/g, '&amp;');
	  n = n.replace(/</g, '&lt;');
	  n = n.replace(/>/g, '&gt;');
	  n = n.replace(/"/g, '&quot;');

	  return n;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L3htbC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0Q2hhbmdlc1RvWE1MIiwiY2hhbmdlcyIsInJldCIsImkiLCJsZW5ndGgiLCJjaGFuZ2UiLCJhZGRlZCIsInB1c2giLCJyZW1vdmVkIiwiZXNjYXBlSFRNTCIsInZhbHVlIiwiam9pbiIsInMiLCJuIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7O2dDQUFnQkEsbUIsR0FBQUEsbUI7QUFBVCxTQUFTQSxtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFDM0MsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLFFBQVFHLE1BQTVCLEVBQW9DRCxHQUFwQyxFQUF5QztBQUN2QyxRQUFJRSxTQUFTSixRQUFRRSxDQUFSLENBQWI7QUFDQSxRQUFJRSxPQUFPQyxLQUFYLEVBQWtCO0FBQ2hCSixVQUFJSyxJQUFKLENBQVMsT0FBVDtBQUNELEtBRkQsTUFFTyxJQUFJRixPQUFPRyxPQUFYLEVBQW9CO0FBQ3pCTixVQUFJSyxJQUFKLENBQVMsT0FBVDtBQUNEOztBQUVETCxRQUFJSyxJQUFKLENBQVNFLFdBQVdKLE9BQU9LLEtBQWxCLENBQVQ7O0FBRUEsUUFBSUwsT0FBT0MsS0FBWCxFQUFrQjtBQUNoQkosVUFBSUssSUFBSixDQUFTLFFBQVQ7QUFDRCxLQUZELE1BRU8sSUFBSUYsT0FBT0csT0FBWCxFQUFvQjtBQUN6Qk4sVUFBSUssSUFBSixDQUFTLFFBQVQ7QUFDRDtBQUNGO0FBQ0QsU0FBT0wsSUFBSVMsSUFBSixDQUFTLEVBQVQsQ0FBUDtBQUNEOztBQUVELFNBQVNGLFVBQVQsQ0FBb0JHLENBQXBCLEVBQXVCO0FBQ3JCLE1BQUlDLElBQUlELENBQVI7QUFDQUMsTUFBSUEsRUFBRUMsT0FBRixDQUFVLElBQVYsRUFBZ0IsT0FBaEIsQ0FBSjtBQUNBRCxNQUFJQSxFQUFFQyxPQUFGLENBQVUsSUFBVixFQUFnQixNQUFoQixDQUFKO0FBQ0FELE1BQUlBLEVBQUVDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLE1BQWhCLENBQUo7QUFDQUQsTUFBSUEsRUFBRUMsT0FBRixDQUFVLElBQVYsRUFBZ0IsUUFBaEIsQ0FBSjs7QUFFQSxTQUFPRCxDQUFQO0FBQ0QiLCJmaWxlIjoieG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRDaGFuZ2VzVG9YTUwoY2hhbmdlcykge1xuICBsZXQgcmV0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgIHJldC5wdXNoKCc8aW5zPicpO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgIHJldC5wdXNoKCc8ZGVsPicpO1xuICAgIH1cblxuICAgIHJldC5wdXNoKGVzY2FwZUhUTUwoY2hhbmdlLnZhbHVlKSk7XG5cbiAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICByZXQucHVzaCgnPC9pbnM+Jyk7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgcmV0LnB1c2goJzwvZGVsPicpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVIVE1MKHMpIHtcbiAgbGV0IG4gPSBzO1xuICBuID0gbi5yZXBsYWNlKC8mL2csICcmYW1wOycpO1xuICBuID0gbi5yZXBsYWNlKC88L2csICcmbHQ7Jyk7XG4gIG4gPSBuLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgbiA9IG4ucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXG4gIHJldHVybiBuO1xufVxuIl19


/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./node_modules/diff2html/src/diff-parser.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *
 * Diff Parser (diff-parser.js)
 * Author: rtfpessoa
 *
 */

(function() {
  var utils = __webpack_require__("./node_modules/diff2html/src/utils.js").Utils;

  var LINE_TYPE = {
    INSERTS: 'd2h-ins',
    DELETES: 'd2h-del',
    INSERT_CHANGES: 'd2h-ins d2h-change',
    DELETE_CHANGES: 'd2h-del d2h-change',
    CONTEXT: 'd2h-cntx',
    INFO: 'd2h-info'
  };

  function DiffParser() {
  }

  DiffParser.prototype.LINE_TYPE = LINE_TYPE;

  DiffParser.prototype.generateDiffJson = function(diffInput, configuration) {
    var config = configuration || {};

    var files = [];
    var currentFile = null;
    var currentBlock = null;
    var oldLine = null;
    var oldLine2 = null; // Used for combined diff
    var newLine = null;

    var possibleOldName;
    var possibleNewName;

    /* Diff Header */
    var oldFileNameHeader = '--- ';
    var newFileNameHeader = '+++ ';
    var hunkHeaderPrefix = '@@';

    /* Add previous block(if exists) before start a new file */
    function saveBlock() {
      if (currentBlock) {
        currentFile.blocks.push(currentBlock);
        currentBlock = null;
      }
    }

    /*
     * Add previous file(if exists) before start a new one
     * if it has name (to avoid binary files errors)
     */
    function saveFile() {
      if (currentFile) {
        if (!currentFile.oldName) {
          currentFile.oldName = possibleOldName;
        }

        if (!currentFile.newName) {
          currentFile.newName = possibleNewName;
        }

        if (currentFile.newName) {
          files.push(currentFile);
          currentFile = null;
        }
      }

      possibleOldName = undefined;
      possibleNewName = undefined;
    }

    /* Create file structure */
    function startFile() {
      saveBlock();
      saveFile();

      currentFile = {};
      currentFile.blocks = [];
      currentFile.deletedLines = 0;
      currentFile.addedLines = 0;
    }

    function startBlock(line) {
      saveBlock();

      var values;

      /**
       * From Range:
       * -<start line>[,<number of lines>]
       *
       * To Range:
       * +<start line>[,<number of lines>]
       *
       * @@ from-file-range to-file-range @@
       *
       * @@@ from-file-range from-file-range to-file-range @@@
       *
       * number of lines is optional, if omited consider 0
       */

      if ((values = /^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@.*/.exec(line))) {
        currentFile.isCombined = false;
        oldLine = values[1];
        newLine = values[2];
      } else if ((values = /^@@@ -(\d+)(?:,\d+)? -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@@.*/.exec(line))) {
        currentFile.isCombined = true;
        oldLine = values[1];
        oldLine2 = values[2];
        newLine = values[3];
      } else {
        if (utils.startsWith(line, hunkHeaderPrefix)) {
          console.error('Failed to parse lines, starting in 0!');
        }

        oldLine = 0;
        newLine = 0;
        currentFile.isCombined = false;
      }

      /* Create block metadata */
      currentBlock = {};
      currentBlock.lines = [];
      currentBlock.oldStartLine = oldLine;
      currentBlock.oldStartLine2 = oldLine2;
      currentBlock.newStartLine = newLine;
      currentBlock.header = line;
    }

    function createLine(line) {
      var currentLine = {};
      currentLine.content = line;

      var newLinePrefixes = !currentFile.isCombined ? ['+'] : ['+', ' +'];
      var delLinePrefixes = !currentFile.isCombined ? ['-'] : ['-', ' -'];

      /* Fill the line data */
      if (utils.startsWith(line, newLinePrefixes)) {
        currentFile.addedLines++;

        currentLine.type = LINE_TYPE.INSERTS;
        currentLine.oldNumber = null;
        currentLine.newNumber = newLine++;

        currentBlock.lines.push(currentLine);
      } else if (utils.startsWith(line, delLinePrefixes)) {
        currentFile.deletedLines++;

        currentLine.type = LINE_TYPE.DELETES;
        currentLine.oldNumber = oldLine++;
        currentLine.newNumber = null;

        currentBlock.lines.push(currentLine);
      } else {
        currentLine.type = LINE_TYPE.CONTEXT;
        currentLine.oldNumber = oldLine++;
        currentLine.newNumber = newLine++;

        currentBlock.lines.push(currentLine);
      }
    }

    /*
     * Checks if there is a hunk header coming before a new file starts
     *
     * Hunk header is a group of three lines started by ( `--- ` , `+++ ` , `@@` )
     */
    function existHunkHeader(line, lineIdx) {
      var idx = lineIdx;

      while (idx < diffLines.length - 3) {
        if (utils.startsWith(line, 'diff')) {
          return false;
        }

        if (
          utils.startsWith(diffLines[idx], oldFileNameHeader) &&
          utils.startsWith(diffLines[idx + 1], newFileNameHeader) &&
          utils.startsWith(diffLines[idx + 2], hunkHeaderPrefix)
        ) {
          return true;
        }

        idx++;
      }

      return false;
    }

    var diffLines =
      diffInput.replace(/\\ No newline at end of file/g, '')
        .replace(/\r\n?/g, '\n')
        .split('\n');

    /* Diff */
    var oldMode = /^old mode (\d{6})/;
    var newMode = /^new mode (\d{6})/;
    var deletedFileMode = /^deleted file mode (\d{6})/;
    var newFileMode = /^new file mode (\d{6})/;

    var copyFrom = /^copy from "?(.+)"?/;
    var copyTo = /^copy to "?(.+)"?/;

    var renameFrom = /^rename from "?(.+)"?/;
    var renameTo = /^rename to "?(.+)"?/;

    var similarityIndex = /^similarity index (\d+)%/;
    var dissimilarityIndex = /^dissimilarity index (\d+)%/;
    var index = /^index ([0-9a-z]+)\.\.([0-9a-z]+)\s*(\d{6})?/;

    var binaryFiles = /^Binary files (.*) and (.*) differ/;
    var binaryDiff = /^GIT binary patch/;

    /* Combined Diff */
    var combinedIndex = /^index ([0-9a-z]+),([0-9a-z]+)\.\.([0-9a-z]+)/;
    var combinedMode = /^mode (\d{6}),(\d{6})\.\.(\d{6})/;
    var combinedNewFile = /^new file mode (\d{6})/;
    var combinedDeletedFile = /^deleted file mode (\d{6}),(\d{6})/;

    diffLines.forEach(function(line, lineIndex) {
      // Unmerged paths, and possibly other non-diffable files
      // https://github.com/scottgonzalez/pretty-diff/issues/11
      // Also, remove some useless lines
      if (!line || utils.startsWith(line, '*')) {
        return;
      }

      // Used to store regex capture groups
      var values;

      var prevLine = diffLines[lineIndex - 1];
      var nxtLine = diffLines[lineIndex + 1];
      var afterNxtLine = diffLines[lineIndex + 2];

      if (utils.startsWith(line, 'diff')) {
        startFile();

        // diff --git a/blocked_delta_results.png b/blocked_delta_results.png
        var gitDiffStart = /^diff --git "?(.+)"? "?(.+)"?/;
        if ((values = gitDiffStart.exec(line))) {
          possibleOldName = _getFilename(null, values[1], config.dstPrefix);
          possibleNewName = _getFilename(null, values[2], config.srcPrefix);
        }

        currentFile.isGitDiff = true;
        return;
      }

      if (!currentFile || // If we do not have a file yet, we should crete one
        (
          !currentFile.isGitDiff && currentFile && // If we already have some file in progress and
          (
            utils.startsWith(line, oldFileNameHeader) && // If we get to an old file path header line
            // And is followed by the new file path header line and the hunk header line
            utils.startsWith(nxtLine, newFileNameHeader) && utils.startsWith(afterNxtLine, hunkHeaderPrefix)
          )
        )
      ) {
        startFile();
      }

      /*
       * We need to make sure that we have the three lines of the header.
       * This avoids cases like the ones described in:
       *   - https://github.com/rtfpessoa/diff2html/issues/87
       */
      if (
        (utils.startsWith(line, oldFileNameHeader) &&
        utils.startsWith(nxtLine, newFileNameHeader)) ||

        (utils.startsWith(line, newFileNameHeader) &&
        utils.startsWith(prevLine, oldFileNameHeader))
      ) {
        /*
         * --- Date Timestamp[FractionalSeconds] TimeZone
         * --- 2002-02-21 23:30:39.942229878 -0800
         */
        if (currentFile && !currentFile.oldName &&
          utils.startsWith(line, '--- ') && (values = getSrcFilename(line, config))) {
          currentFile.oldName = values;
          currentFile.language = getExtension(currentFile.oldName, currentFile.language);
          return;
        }

        /*
         * +++ Date Timestamp[FractionalSeconds] TimeZone
         * +++ 2002-02-21 23:30:39.942229878 -0800
         */
        if (currentFile && !currentFile.newName &&
          utils.startsWith(line, '+++ ') && (values = getDstFilename(line, config))) {
          currentFile.newName = values;
          currentFile.language = getExtension(currentFile.newName, currentFile.language);
          return;
        }
      }

      if (
        (currentFile && utils.startsWith(line, hunkHeaderPrefix)) ||
        (currentFile.isGitDiff && currentFile && currentFile.oldName && currentFile.newName && !currentBlock)
      ) {
        startBlock(line);
        return;
      }

      /*
       * There are three types of diff lines. These lines are defined by the way they start.
       * 1. New line     starts with: +
       * 2. Old line     starts with: -
       * 3. Context line starts with: <SPACE>
       */
      if (currentBlock && (utils.startsWith(line, '+') || utils.startsWith(line, '-') || utils.startsWith(line, ' '))) {
        createLine(line);
        return;
      }

      var doesNotExistHunkHeader = !existHunkHeader(line, lineIndex);

      /*
       * Git diffs provide more information regarding files modes, renames, copies,
       * commits between changes and similarity indexes
       */
      if ((values = oldMode.exec(line))) {
        currentFile.oldMode = values[1];
      } else if ((values = newMode.exec(line))) {
        currentFile.newMode = values[1];
      } else if ((values = deletedFileMode.exec(line))) {
        currentFile.deletedFileMode = values[1];
        currentFile.isDeleted = true;
      } else if ((values = newFileMode.exec(line))) {
        currentFile.newFileMode = values[1];
        currentFile.isNew = true;
      } else if ((values = copyFrom.exec(line))) {
        if (doesNotExistHunkHeader) {
          currentFile.oldName = values[1];
        }
        currentFile.isCopy = true;
      } else if ((values = copyTo.exec(line))) {
        if (doesNotExistHunkHeader) {
          currentFile.newName = values[1];
        }
        currentFile.isCopy = true;
      } else if ((values = renameFrom.exec(line))) {
        if (doesNotExistHunkHeader) {
          currentFile.oldName = values[1];
        }
        currentFile.isRename = true;
      } else if ((values = renameTo.exec(line))) {
        if (doesNotExistHunkHeader) {
          currentFile.newName = values[1];
        }
        currentFile.isRename = true;
      } else if ((values = binaryFiles.exec(line))) {
        currentFile.isBinary = true;
        currentFile.oldName = _getFilename(null, values[1], config.srcPrefix);
        currentFile.newName = _getFilename(null, values[2], config.dstPrefix);
        startBlock('Binary file');
      } else if ((values = binaryDiff.exec(line))) {
        currentFile.isBinary = true;
        startBlock(line);
      } else if ((values = similarityIndex.exec(line))) {
        currentFile.unchangedPercentage = values[1];
      } else if ((values = dissimilarityIndex.exec(line))) {
        currentFile.changedPercentage = values[1];
      } else if ((values = index.exec(line))) {
        currentFile.checksumBefore = values[1];
        currentFile.checksumAfter = values[2];
        values[3] && (currentFile.mode = values[3]);
      } else if ((values = combinedIndex.exec(line))) {
        currentFile.checksumBefore = [values[2], values[3]];
        currentFile.checksumAfter = values[1];
      } else if ((values = combinedMode.exec(line))) {
        currentFile.oldMode = [values[2], values[3]];
        currentFile.newMode = values[1];
      } else if ((values = combinedNewFile.exec(line))) {
        currentFile.newFileMode = values[1];
        currentFile.isNew = true;
      } else if ((values = combinedDeletedFile.exec(line))) {
        currentFile.deletedFileMode = values[1];
        currentFile.isDeleted = true;
      }
    });

    saveBlock();
    saveFile();

    return files;
  };

  function getExtension(filename, language) {
    var nameSplit = filename.split('.');
    if (nameSplit.length > 1) {
      return nameSplit[nameSplit.length - 1];
    }

    return language;
  }

  function getSrcFilename(line, cfg) {
    return _getFilename('---', line, cfg.srcPrefix);
  }

  function getDstFilename(line, cfg) {
    return _getFilename('\\+\\+\\+', line, cfg.dstPrefix);
  }

  function _getFilename(linePrefix, line, extraPrefix) {
    var prefixes = ['a/', 'b/', 'i/', 'w/', 'c/', 'o/'];
    if (extraPrefix) {
      prefixes.push(extraPrefix);
    }

    var FilenameRegExp;
    if (linePrefix) {
      FilenameRegExp = new RegExp('^' + linePrefix + ' "?(.+?)"?$');
    } else {
      FilenameRegExp = new RegExp('^"?(.+?)"?$');
    }

    var filename;
    var values = FilenameRegExp.exec(line);
    if (values && values[1]) {
      filename = values[1];
      var matchingPrefixes = prefixes.filter(function(p) {
        return filename.indexOf(p) === 0;
      });

      if (matchingPrefixes[0]) {
        // Remove prefix if exists
        filename = filename.slice(matchingPrefixes[0].length);
      }

      // Cleanup timestamps generated by the unified diff (diff command) as specified in
      // https://www.gnu.org/software/diffutils/manual/html_node/Detailed-Unified.html
      // Ie: 2016-10-25 11:37:14.000000000 +0200
      filename = filename.replace(/\s+\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(?:\.\d+)? [-+]\d{4}.*$/, '');
    }

    return filename;
  }

  module.exports.DiffParser = new DiffParser();
})();


/***/ }),

/***/ "./node_modules/diff2html/src/diff2html.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*
 *
 * Diff to HTML (diff2html.js)
 * Author: rtfpessoa
 *
 */

(function() {
  var diffParser = __webpack_require__("./node_modules/diff2html/src/diff-parser.js").DiffParser;
  var htmlPrinter = __webpack_require__("./node_modules/diff2html/src/html-printer.js").HtmlPrinter;
  var utils = __webpack_require__("./node_modules/diff2html/src/utils.js").Utils;

  function Diff2Html() {
  }

  var defaultConfig = {
    wordByWord: true,
    outputFormat: 'line-by-line',
    matching: 'none',
    matchWordsThreshold: 0.25,
    matchingMaxComparisons: 2500,
    maxLineLengthHighlight: 10000
  };

  /*
   * Generates json object from string diff input
   */
  Diff2Html.prototype.getJsonFromDiff = function(diffInput, config) {
    var cfg = utils.safeConfig(config, defaultConfig);
    return diffParser.generateDiffJson(diffInput, cfg);
  };

  /*
   * Generates the html diff. The config parameter configures the output/input formats and other options
   */
  Diff2Html.prototype.getPrettyHtml = function(diffInput, config) {
    var cfg = utils.safeConfig(config, defaultConfig);

    var diffJson = diffInput;
    if (!cfg.inputFormat || cfg.inputFormat === 'diff') {
      diffJson = diffParser.generateDiffJson(diffInput, cfg);
    }

    var fileList = '';
    if (cfg.showFiles === true) {
      fileList = htmlPrinter.generateFileListSummary(diffJson, cfg);
    }

    var diffOutput = '';
    if (cfg.outputFormat === 'side-by-side') {
      diffOutput = htmlPrinter.generateSideBySideJsonHtml(diffJson, cfg);
    } else {
      diffOutput = htmlPrinter.generateLineByLineJsonHtml(diffJson, cfg);
    }

    return fileList + diffOutput;
  };

  /*
   * Deprecated methods - The following methods exist only to maintain compatibility with previous versions
   */

  /*
   * Generates pretty html from string diff input
   */
  Diff2Html.prototype.getPrettyHtmlFromDiff = function(diffInput, config) {
    var cfg = utils.safeConfig(config, defaultConfig);
    cfg.inputFormat = 'diff';
    cfg.outputFormat = 'line-by-line';
    return this.getPrettyHtml(diffInput, cfg);
  };

  /*
   * Generates pretty html from a json object
   */
  Diff2Html.prototype.getPrettyHtmlFromJson = function(diffJson, config) {
    var cfg = utils.safeConfig(config, defaultConfig);
    cfg.inputFormat = 'json';
    cfg.outputFormat = 'line-by-line';
    return this.getPrettyHtml(diffJson, cfg);
  };

  /*
   * Generates pretty side by side html from string diff input
   */
  Diff2Html.prototype.getPrettySideBySideHtmlFromDiff = function(diffInput, config) {
    var cfg = utils.safeConfig(config, defaultConfig);
    cfg.inputFormat = 'diff';
    cfg.outputFormat = 'side-by-side';
    return this.getPrettyHtml(diffInput, cfg);
  };

  /*
   * Generates pretty side by side html from a json object
   */
  Diff2Html.prototype.getPrettySideBySideHtmlFromJson = function(diffJson, config) {
    var cfg = utils.safeConfig(config, defaultConfig);
    cfg.inputFormat = 'json';
    cfg.outputFormat = 'side-by-side';
    return this.getPrettyHtml(diffJson, cfg);
  };

  var diffObject = new Diff2Html();
  module.exports.Diff2Html = diffObject;

  // Expose diff2html in the browser
  global.Diff2Html = diffObject;
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/diff2html/src/file-list-printer.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *
 * FileListPrinter (file-list-printer.js)
 * Author: nmatpt
 *
 */

(function() {
  var printerUtils = __webpack_require__("./node_modules/diff2html/src/printer-utils.js").PrinterUtils;

  var hoganUtils;

  var baseTemplatesPath = 'file-summary';
  var iconsBaseTemplatesPath = 'icon';

  function FileListPrinter(config) {
    this.config = config;

    var HoganJsUtils = __webpack_require__("./node_modules/diff2html/src/hoganjs-utils.js").HoganJsUtils;
    hoganUtils = new HoganJsUtils(config);
  }

  FileListPrinter.prototype.generateFileList = function(diffFiles) {
    var lineTemplate = hoganUtils.template(baseTemplatesPath, 'line');

    var files = diffFiles.map(function(file) {
      var fileTypeName = printerUtils.getFileTypeIcon(file);
      var iconTemplate = hoganUtils.template(iconsBaseTemplatesPath, fileTypeName);

      return lineTemplate.render({
        fileHtmlId: printerUtils.getHtmlId(file),
        fileName: printerUtils.getDiffName(file),
        deletedLines: '-' + file.deletedLines,
        addedLines: '+' + file.addedLines
      }, {
        fileIcon: iconTemplate
      });
    }).join('\n');

    return hoganUtils.render(baseTemplatesPath, 'wrapper', {
      filesNumber: diffFiles.length,
      files: files
    });
  };

  module.exports.FileListPrinter = FileListPrinter;
})();


/***/ }),

/***/ "./node_modules/diff2html/src/hoganjs-utils.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {/*
 *
 * Utils (hoganjs-utils.js)
 * Author: rtfpessoa
 *
 */

(function() {
  var fs = __webpack_require__(3);
  var path = __webpack_require__("./node_modules/path-browserify/index.js");
  var hogan = __webpack_require__("./node_modules/hogan.js/lib/hogan.js");

  var hoganTemplates = __webpack_require__("./node_modules/diff2html/src/templates/diff2html-templates.js");

  var extraTemplates;

  function HoganJsUtils(configuration) {
    this.config = configuration || {};
    extraTemplates = this.config.templates || {};

    var rawTemplates = this.config.rawTemplates || {};
    for (var templateName in rawTemplates) {
      if (rawTemplates.hasOwnProperty(templateName)) {
        if (!extraTemplates[templateName]) extraTemplates[templateName] = this.compile(rawTemplates[templateName]);
      }
    }
  }

  HoganJsUtils.prototype.render = function(namespace, view, params) {
    var template = this.template(namespace, view);
    if (template) {
      return template.render(params);
    }

    return null;
  };

  HoganJsUtils.prototype.template = function(namespace, view) {
    var templateKey = this._templateKey(namespace, view);

    return this._getTemplate(templateKey);
  };

  HoganJsUtils.prototype._getTemplate = function(templateKey) {
    var template;

    if (!this.config.noCache) {
      template = this._readFromCache(templateKey);
    }

    if (!template) {
      template = this._loadTemplate(templateKey);
    }

    return template;
  };

  HoganJsUtils.prototype._loadTemplate = function(templateKey) {
    var template;

    try {
      if (fs.readFileSync) {
        var templatesPath = path.resolve(__dirname, 'templates');
        var templatePath = path.join(templatesPath, templateKey);
        var templateContent = fs.readFileSync(templatePath + '.mustache', 'utf8');
        template = hogan.compile(templateContent);
        hoganTemplates[templateKey] = template;
      }
    } catch (e) {
      console.error('Failed to read (template: ' + templateKey + ') from fs: ' + e.message);
    }

    return template;
  };

  HoganJsUtils.prototype._readFromCache = function(templateKey) {
    return extraTemplates[templateKey] || hoganTemplates[templateKey];
  };

  HoganJsUtils.prototype._templateKey = function(namespace, view) {
    return namespace + '-' + view;
  };

  HoganJsUtils.prototype.compile = function(templateStr) {
    return hogan.compile(templateStr);
  };

  module.exports.HoganJsUtils = HoganJsUtils;
})();

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ "./node_modules/diff2html/src/html-printer.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *
 * HtmlPrinter (html-printer.js)
 * Author: rtfpessoa
 *
 */

(function() {
  var LineByLinePrinter = __webpack_require__("./node_modules/diff2html/src/line-by-line-printer.js").LineByLinePrinter;
  var SideBySidePrinter = __webpack_require__("./node_modules/diff2html/src/side-by-side-printer.js").SideBySidePrinter;
  var FileListPrinter = __webpack_require__("./node_modules/diff2html/src/file-list-printer.js").FileListPrinter;

  function HtmlPrinter() {
  }

  HtmlPrinter.prototype.generateLineByLineJsonHtml = function(diffFiles, config) {
    var lineByLinePrinter = new LineByLinePrinter(config);
    return lineByLinePrinter.generateLineByLineJsonHtml(diffFiles);
  };

  HtmlPrinter.prototype.generateSideBySideJsonHtml = function(diffFiles, config) {
    var sideBySidePrinter = new SideBySidePrinter(config);
    return sideBySidePrinter.generateSideBySideJsonHtml(diffFiles);
  };

  HtmlPrinter.prototype.generateFileListSummary = function(diffJson, config) {
    var fileListPrinter = new FileListPrinter(config);
    return fileListPrinter.generateFileList(diffJson);
  };

  module.exports.HtmlPrinter = new HtmlPrinter();
})();


/***/ }),

/***/ "./node_modules/diff2html/src/line-by-line-printer.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *
 * LineByLinePrinter (line-by-line-printer.js)
 * Author: rtfpessoa
 *
 */

(function() {
  var diffParser = __webpack_require__("./node_modules/diff2html/src/diff-parser.js").DiffParser;
  var printerUtils = __webpack_require__("./node_modules/diff2html/src/printer-utils.js").PrinterUtils;
  var utils = __webpack_require__("./node_modules/diff2html/src/utils.js").Utils;
  var Rematch = __webpack_require__("./node_modules/diff2html/src/rematch.js").Rematch;

  var hoganUtils;

  var genericTemplatesPath = 'generic';
  var baseTemplatesPath = 'line-by-line';
  var iconsBaseTemplatesPath = 'icon';
  var tagsBaseTemplatesPath = 'tag';

  function LineByLinePrinter(config) {
    this.config = config;

    var HoganJsUtils = __webpack_require__("./node_modules/diff2html/src/hoganjs-utils.js").HoganJsUtils;
    hoganUtils = new HoganJsUtils(config);
  }

  LineByLinePrinter.prototype.makeFileDiffHtml = function(file, diffs) {
    var fileDiffTemplate = hoganUtils.template(baseTemplatesPath, 'file-diff');
    var filePathTemplate = hoganUtils.template(genericTemplatesPath, 'file-path');
    var fileIconTemplate = hoganUtils.template(iconsBaseTemplatesPath, 'file');
    var fileTagTemplate = hoganUtils.template(tagsBaseTemplatesPath, printerUtils.getFileTypeIcon(file));

    return fileDiffTemplate.render({
      file: file,
      fileHtmlId: printerUtils.getHtmlId(file),
      diffs: diffs,
      filePath: filePathTemplate.render({
        fileDiffName: printerUtils.getDiffName(file)
      }, {
        fileIcon: fileIconTemplate,
        fileTag: fileTagTemplate
      })
    });
  };

  LineByLinePrinter.prototype.makeLineByLineHtmlWrapper = function(content) {
    return hoganUtils.render(genericTemplatesPath, 'wrapper', {'content': content});
  };

  LineByLinePrinter.prototype.generateLineByLineJsonHtml = function(diffFiles) {
    var that = this;
    var htmlDiffs = diffFiles.map(function(file) {
      var diffs;
      if (file.blocks.length) {
        diffs = that._generateFileHtml(file);
      } else {
        diffs = that._generateEmptyDiff();
      }
      return that.makeFileDiffHtml(file, diffs);
    });

    return this.makeLineByLineHtmlWrapper(htmlDiffs.join('\n'));
  };

  var matcher = Rematch.rematch(function(a, b) {
    var amod = a.content.substr(1);
    var bmod = b.content.substr(1);

    return Rematch.distance(amod, bmod);
  });

  LineByLinePrinter.prototype.makeColumnLineNumberHtml = function(block) {
    return hoganUtils.render(genericTemplatesPath, 'column-line-number', {
      diffParser: diffParser,
      blockHeader: utils.escape(block.header),
      lineClass: 'd2h-code-linenumber',
      contentClass: 'd2h-code-line'
    });
  };

  LineByLinePrinter.prototype._generateFileHtml = function(file) {
    var that = this;
    return file.blocks.map(function(block) {
      var lines = that.makeColumnLineNumberHtml(block);
      var oldLines = [];
      var newLines = [];

      function processChangeBlock() {
        var matches;
        var insertType;
        var deleteType;

        var comparisons = oldLines.length * newLines.length;
        var maxComparisons = that.config.matchingMaxComparisons || 2500;
        var doMatching = comparisons < maxComparisons && (that.config.matching === 'lines' ||
          that.config.matching === 'words');

        if (doMatching) {
          matches = matcher(oldLines, newLines);
          insertType = diffParser.LINE_TYPE.INSERT_CHANGES;
          deleteType = diffParser.LINE_TYPE.DELETE_CHANGES;
        } else {
          matches = [[oldLines, newLines]];
          insertType = diffParser.LINE_TYPE.INSERTS;
          deleteType = diffParser.LINE_TYPE.DELETES;
        }

        matches.forEach(function(match) {
          oldLines = match[0];
          newLines = match[1];

          var processedOldLines = [];
          var processedNewLines = [];

          var common = Math.min(oldLines.length, newLines.length);

          var oldLine, newLine;
          for (var j = 0; j < common; j++) {
            oldLine = oldLines[j];
            newLine = newLines[j];

            that.config.isCombined = file.isCombined;
            var diff = printerUtils.diffHighlight(oldLine.content, newLine.content, that.config);

            processedOldLines +=
              that.makeLineHtml(file.isCombined, deleteType, oldLine.oldNumber, oldLine.newNumber,
                diff.first.line, diff.first.prefix);
            processedNewLines +=
              that.makeLineHtml(file.isCombined, insertType, newLine.oldNumber, newLine.newNumber,
                diff.second.line, diff.second.prefix);
          }

          lines += processedOldLines + processedNewLines;
          lines += that._processLines(file.isCombined, oldLines.slice(common), newLines.slice(common));
        });

        oldLines = [];
        newLines = [];
      }

      for (var i = 0; i < block.lines.length; i++) {
        var line = block.lines[i];
        var escapedLine = utils.escape(line.content);

        if (line.type !== diffParser.LINE_TYPE.INSERTS &&
          (newLines.length > 0 || (line.type !== diffParser.LINE_TYPE.DELETES && oldLines.length > 0))) {
          processChangeBlock();
        }

        if (line.type === diffParser.LINE_TYPE.CONTEXT) {
          lines += that.makeLineHtml(file.isCombined, line.type, line.oldNumber, line.newNumber, escapedLine);
        } else if (line.type === diffParser.LINE_TYPE.INSERTS && !oldLines.length) {
          lines += that.makeLineHtml(file.isCombined, line.type, line.oldNumber, line.newNumber, escapedLine);
        } else if (line.type === diffParser.LINE_TYPE.DELETES) {
          oldLines.push(line);
        } else if (line.type === diffParser.LINE_TYPE.INSERTS && Boolean(oldLines.length)) {
          newLines.push(line);
        } else {
          console.error('Unknown state in html line-by-line generator');
          processChangeBlock();
        }
      }

      processChangeBlock();

      return lines;
    }).join('\n');
  };

  LineByLinePrinter.prototype._processLines = function(isCombined, oldLines, newLines) {
    var lines = '';

    for (var i = 0; i < oldLines.length; i++) {
      var oldLine = oldLines[i];
      var oldEscapedLine = utils.escape(oldLine.content);
      lines += this.makeLineHtml(isCombined, oldLine.type, oldLine.oldNumber, oldLine.newNumber, oldEscapedLine);
    }

    for (var j = 0; j < newLines.length; j++) {
      var newLine = newLines[j];
      var newEscapedLine = utils.escape(newLine.content);
      lines += this.makeLineHtml(isCombined, newLine.type, newLine.oldNumber, newLine.newNumber, newEscapedLine);
    }

    return lines;
  };

  LineByLinePrinter.prototype.makeLineHtml = function(isCombined, type, oldNumber, newNumber, content, possiblePrefix) {
    var lineNumberTemplate = hoganUtils.render(baseTemplatesPath, 'numbers', {
      oldNumber: utils.valueOrEmpty(oldNumber),
      newNumber: utils.valueOrEmpty(newNumber)
    });

    var lineWithoutPrefix = content;
    var prefix = possiblePrefix;

    if (!prefix) {
      var lineWithPrefix = printerUtils.separatePrefix(isCombined, content);
      prefix = lineWithPrefix.prefix;
      lineWithoutPrefix = lineWithPrefix.line;
    }

    return hoganUtils.render(genericTemplatesPath, 'line',
      {
        type: type,
        lineClass: 'd2h-code-linenumber',
        contentClass: 'd2h-code-line',
        prefix: prefix,
        content: lineWithoutPrefix,
        lineNumber: lineNumberTemplate
      });
  };

  LineByLinePrinter.prototype._generateEmptyDiff = function() {
    return hoganUtils.render(genericTemplatesPath, 'empty-diff', {
      contentClass: 'd2h-code-line',
      diffParser: diffParser
    });
  };

  module.exports.LineByLinePrinter = LineByLinePrinter;
})();


/***/ }),

/***/ "./node_modules/diff2html/src/printer-utils.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *
 * PrinterUtils (printer-utils.js)
 * Author: rtfpessoa
 *
 */

(function() {
  var jsDiff = __webpack_require__("./node_modules/diff/dist/diff.js");
  var utils = __webpack_require__("./node_modules/diff2html/src/utils.js").Utils;
  var Rematch = __webpack_require__("./node_modules/diff2html/src/rematch.js").Rematch;

  var separator = '/';

  function PrinterUtils() {
  }

  PrinterUtils.prototype.separatePrefix = function(isCombined, line) {
    var prefix;
    var lineWithoutPrefix;

    if (isCombined) {
      prefix = line.substring(0, 2);
      lineWithoutPrefix = line.substring(2);
    } else {
      prefix = line.substring(0, 1);
      lineWithoutPrefix = line.substring(1);
    }

    return {
      'prefix': prefix,
      'line': lineWithoutPrefix
    };
  };

  PrinterUtils.prototype.getHtmlId = function(file) {
    var hashCode = function(text) {
      var i, chr, len;
      var hash = 0;

      for (i = 0, len = text.length; i < len; i++) {
        chr = text.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }

      return hash;
    };

    return 'd2h-' + hashCode(this.getDiffName(file)).toString().slice(-6);
  };

  PrinterUtils.prototype.getDiffName = function(file) {
    var oldFilename = unifyPath(file.oldName);
    var newFilename = unifyPath(file.newName);

    if (oldFilename && newFilename && oldFilename !== newFilename && !isDevNullName(oldFilename) && !isDevNullName(newFilename)) {
      var prefixPaths = [];
      var suffixPaths = [];

      var oldFilenameParts = oldFilename.split(separator);
      var newFilenameParts = newFilename.split(separator);

      var oldFilenamePartsSize = oldFilenameParts.length;
      var newFilenamePartsSize = newFilenameParts.length;

      var i = 0;
      var j = oldFilenamePartsSize - 1;
      var k = newFilenamePartsSize - 1;

      while (i < j && i < k) {
        if (oldFilenameParts[i] === newFilenameParts[i]) {
          prefixPaths.push(newFilenameParts[i]);
          i += 1;
        } else {
          break;
        }
      }

      while (j > i && k > i) {
        if (oldFilenameParts[j] === newFilenameParts[k]) {
          suffixPaths.unshift(newFilenameParts[k]);
          j -= 1;
          k -= 1;
        } else {
          break;
        }
      }

      var finalPrefix = prefixPaths.join(separator);
      var finalSuffix = suffixPaths.join(separator);

      var oldRemainingPath = oldFilenameParts.slice(i, j + 1).join(separator);
      var newRemainingPath = newFilenameParts.slice(i, k + 1).join(separator);

      if (finalPrefix.length && finalSuffix.length) {
        return finalPrefix + separator + '{' + oldRemainingPath + ' → ' + newRemainingPath + '}' + separator + finalSuffix;
      } else if (finalPrefix.length) {
        return finalPrefix + separator + '{' + oldRemainingPath + ' → ' + newRemainingPath + '}';
      } else if (finalSuffix.length) {
        return '{' + oldRemainingPath + ' → ' + newRemainingPath + '}' + separator + finalSuffix;
      }

      return oldFilename + ' → ' + newFilename;
    } else if (newFilename && !isDevNullName(newFilename)) {
      return newFilename;
    } else if (oldFilename) {
      return oldFilename;
    }

    return 'unknown/file/path';
  };

  PrinterUtils.prototype.getFileTypeIcon = function(file) {
    var templateName = 'file-changed';

    if (file.isRename) {
      templateName = 'file-renamed';
    } else if (file.isCopy) {
      templateName = 'file-renamed';
    } else if (file.isNew) {
      templateName = 'file-added';
    } else if (file.isDeleted) {
      templateName = 'file-deleted';
    } else if (file.newName !== file.oldName) {
      // If file is not Added, not Deleted and the names changed it must be a rename :)
      templateName = 'file-renamed';
    }

    return templateName;
  };

  PrinterUtils.prototype.diffHighlight = function(diffLine1, diffLine2, config) {
    var linePrefix1, linePrefix2, unprefixedLine1, unprefixedLine2;

    var prefixSize = 1;

    if (config.isCombined) {
      prefixSize = 2;
    }

    linePrefix1 = diffLine1.substr(0, prefixSize);
    linePrefix2 = diffLine2.substr(0, prefixSize);
    unprefixedLine1 = diffLine1.substr(prefixSize);
    unprefixedLine2 = diffLine2.substr(prefixSize);

    if (unprefixedLine1.length > config.maxLineLengthHighlight ||
      unprefixedLine2.length > config.maxLineLengthHighlight) {
      return {
        first: {
          prefix: linePrefix1,
          line: utils.escape(unprefixedLine1)
        },
        second: {
          prefix: linePrefix2,
          line: utils.escape(unprefixedLine2)
        }
      };
    }

    var diff;
    if (config.charByChar) {
      diff = jsDiff.diffChars(unprefixedLine1, unprefixedLine2);
    } else {
      diff = jsDiff.diffWordsWithSpace(unprefixedLine1, unprefixedLine2);
    }

    var highlightedLine = '';

    var changedWords = [];
    if (!config.charByChar && config.matching === 'words') {
      var treshold = 0.25;

      if (typeof (config.matchWordsThreshold) !== 'undefined') {
        treshold = config.matchWordsThreshold;
      }

      var matcher = Rematch.rematch(function(a, b) {
        var amod = a.value;
        var bmod = b.value;

        return Rematch.distance(amod, bmod);
      });

      var removed = diff.filter(function isRemoved(element) {
        return element.removed;
      });

      var added = diff.filter(function isAdded(element) {
        return element.added;
      });

      var chunks = matcher(added, removed);
      chunks.forEach(function(chunk) {
        if (chunk[0].length === 1 && chunk[1].length === 1) {
          var dist = Rematch.distance(chunk[0][0].value, chunk[1][0].value);
          if (dist < treshold) {
            changedWords.push(chunk[0][0]);
            changedWords.push(chunk[1][0]);
          }
        }
      });
    }

    diff.forEach(function(part) {
      var addClass = changedWords.indexOf(part) > -1 ? ' class="d2h-change"' : '';
      var elemType = part.added ? 'ins' : part.removed ? 'del' : null;
      var escapedValue = utils.escape(part.value);

      if (elemType !== null) {
        highlightedLine += '<' + elemType + addClass + '>' + escapedValue + '</' + elemType + '>';
      } else {
        highlightedLine += escapedValue;
      }
    });

    return {
      first: {
        prefix: linePrefix1,
        line: removeIns(highlightedLine)
      },
      second: {
        prefix: linePrefix2,
        line: removeDel(highlightedLine)
      }
    };
  };

  function unifyPath(path) {
    if (path) {
      return path.replace('\\', '/');
    }

    return path;
  }

  function isDevNullName(name) {
    return name.indexOf('dev/null') !== -1;
  }

  function removeIns(line) {
    return line.replace(/(<ins[^>]*>((.|\n)*?)<\/ins>)/g, '');
  }

  function removeDel(line) {
    return line.replace(/(<del[^>]*>((.|\n)*?)<\/del>)/g, '');
  }

  module.exports.PrinterUtils = new PrinterUtils();
})();


/***/ }),

/***/ "./node_modules/diff2html/src/rematch.js":
/***/ (function(module, exports) {

/*
 *
 * Rematch (rematch.js)
 * Matching two sequences of objects by similarity
 * Author: W. Illmeyer, Nexxar GmbH
 *
 */

(function() {
  var Rematch = {};

  /*
   Copyright (c) 2011 Andrei Mackenzie
   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
   documentation files (the "Software"), to deal in the Software without restriction, including without limitation
   the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
   and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
   The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
   THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
   TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  function levenshtein(a, b) {
    if (a.length === 0) {
      return b.length;
    }
    if (b.length === 0) {
      return a.length;
    }

    var matrix = [];

    // Increment along the first column of each row
    var i;
    for (i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }

    // Increment each column in the first row
    var j;
    for (j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (i = 1; i <= b.length; i++) {
      for (j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // Substitution
            Math.min(matrix[i][j - 1] + 1, // Insertion
              matrix[i - 1][j] + 1)); // Deletion
        }
      }
    }

    return matrix[b.length][a.length];
  }

  Rematch.levenshtein = levenshtein;

  Rematch.distance = function distance(x, y) {
    x = x.trim();
    y = y.trim();
    var lev = levenshtein(x, y);
    var score = lev / (x.length + y.length);

    return score;
  };

  Rematch.rematch = function rematch(distanceFunction) {
    function findBestMatch(a, b, cache) {
      var bestMatchDist = Infinity;
      var bestMatch;
      for (var i = 0; i < a.length; ++i) {
        for (var j = 0; j < b.length; ++j) {
          var cacheKey = JSON.stringify([a[i], b[j]]);
          var md;
          if (cache.hasOwnProperty(cacheKey)) {
            md = cache[cacheKey];
          } else {
            md = distanceFunction(a[i], b[j]);
            cache[cacheKey] = md;
          }
          if (md < bestMatchDist) {
            bestMatchDist = md;
            bestMatch = {indexA: i, indexB: j, score: bestMatchDist};
          }
        }
      }

      return bestMatch;
    }

    function group(a, b, level, cache) {
      if (typeof (cache) === 'undefined') {
        cache = {};
      }

      var bm = findBestMatch(a, b, cache);

      if (!level) {
        level = 0;
      }

      if (!bm || (a.length + b.length < 3)) {
        return [[a, b]];
      }

      var a1 = a.slice(0, bm.indexA);
      var b1 = b.slice(0, bm.indexB);
      var aMatch = [a[bm.indexA]];
      var bMatch = [b[bm.indexB]];
      var tailA = bm.indexA + 1;
      var tailB = bm.indexB + 1;
      var a2 = a.slice(tailA);
      var b2 = b.slice(tailB);

      var group1 = group(a1, b1, level + 1, cache);
      var groupMatch = group(aMatch, bMatch, level + 1, cache);
      var group2 = group(a2, b2, level + 1, cache);
      var result = groupMatch;

      if (bm.indexA > 0 || bm.indexB > 0) {
        result = group1.concat(result);
      }

      if (a.length > tailA || b.length > tailB) {
        result = result.concat(group2);
      }

      return result;
    }

    return group;
  };

  module.exports.Rematch = Rematch;
})();


/***/ }),

/***/ "./node_modules/diff2html/src/side-by-side-printer.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *
 * HtmlPrinter (html-printer.js)
 * Author: rtfpessoa
 *
 */

(function() {
  var diffParser = __webpack_require__("./node_modules/diff2html/src/diff-parser.js").DiffParser;
  var printerUtils = __webpack_require__("./node_modules/diff2html/src/printer-utils.js").PrinterUtils;
  var utils = __webpack_require__("./node_modules/diff2html/src/utils.js").Utils;
  var Rematch = __webpack_require__("./node_modules/diff2html/src/rematch.js").Rematch;

  var hoganUtils;

  var genericTemplatesPath = 'generic';
  var baseTemplatesPath = 'side-by-side';
  var iconsBaseTemplatesPath = 'icon';
  var tagsBaseTemplatesPath = 'tag';

  var matcher = Rematch.rematch(function(a, b) {
    var amod = a.content.substr(1);
    var bmod = b.content.substr(1);

    return Rematch.distance(amod, bmod);
  });

  function SideBySidePrinter(config) {
    this.config = config;

    var HoganJsUtils = __webpack_require__("./node_modules/diff2html/src/hoganjs-utils.js").HoganJsUtils;
    hoganUtils = new HoganJsUtils(config);
  }

  SideBySidePrinter.prototype.makeDiffHtml = function(file, diffs) {
    var fileDiffTemplate = hoganUtils.template(baseTemplatesPath, 'file-diff');
    var filePathTemplate = hoganUtils.template(genericTemplatesPath, 'file-path');
    var fileIconTemplate = hoganUtils.template(iconsBaseTemplatesPath, 'file');
    var fileTagTemplate = hoganUtils.template(tagsBaseTemplatesPath, printerUtils.getFileTypeIcon(file));

    return fileDiffTemplate.render({
      file: file,
      fileHtmlId: printerUtils.getHtmlId(file),
      diffs: diffs,
      filePath: filePathTemplate.render({
        fileDiffName: printerUtils.getDiffName(file)
      }, {
        fileIcon: fileIconTemplate,
        fileTag: fileTagTemplate
      })
    });
  };

  SideBySidePrinter.prototype.generateSideBySideJsonHtml = function(diffFiles) {
    var that = this;

    var content = diffFiles.map(function(file) {
      var diffs;
      if (file.blocks.length) {
        diffs = that.generateSideBySideFileHtml(file);
      } else {
        diffs = that.generateEmptyDiff();
      }

      return that.makeDiffHtml(file, diffs);
    }).join('\n');

    return hoganUtils.render(genericTemplatesPath, 'wrapper', {'content': content});
  };

  SideBySidePrinter.prototype.makeSideHtml = function(blockHeader) {
    return hoganUtils.render(genericTemplatesPath, 'column-line-number', {
      diffParser: diffParser,
      blockHeader: utils.escape(blockHeader),
      lineClass: 'd2h-code-side-linenumber',
      contentClass: 'd2h-code-side-line'
    });
  };

  SideBySidePrinter.prototype.generateSideBySideFileHtml = function(file) {
    var that = this;
    var fileHtml = {};
    fileHtml.left = '';
    fileHtml.right = '';

    file.blocks.forEach(function(block) {
      fileHtml.left += that.makeSideHtml(block.header);
      fileHtml.right += that.makeSideHtml('');

      var oldLines = [];
      var newLines = [];

      function processChangeBlock() {
        var matches;
        var insertType;
        var deleteType;

        var comparisons = oldLines.length * newLines.length;
        var maxComparisons = that.config.matchingMaxComparisons || 2500;
        var doMatching = comparisons < maxComparisons && (that.config.matching === 'lines' ||
          that.config.matching === 'words');

        if (doMatching) {
          matches = matcher(oldLines, newLines);
          insertType = diffParser.LINE_TYPE.INSERT_CHANGES;
          deleteType = diffParser.LINE_TYPE.DELETE_CHANGES;
        } else {
          matches = [[oldLines, newLines]];
          insertType = diffParser.LINE_TYPE.INSERTS;
          deleteType = diffParser.LINE_TYPE.DELETES;
        }

        matches.forEach(function(match) {
          oldLines = match[0];
          newLines = match[1];

          var common = Math.min(oldLines.length, newLines.length);
          var max = Math.max(oldLines.length, newLines.length);

          for (var j = 0; j < common; j++) {
            var oldLine = oldLines[j];
            var newLine = newLines[j];

            that.config.isCombined = file.isCombined;

            var diff = printerUtils.diffHighlight(oldLine.content, newLine.content, that.config);

            fileHtml.left +=
              that.generateSingleLineHtml(file.isCombined, deleteType, oldLine.oldNumber,
                diff.first.line, diff.first.prefix);
            fileHtml.right +=
              that.generateSingleLineHtml(file.isCombined, insertType, newLine.newNumber,
                diff.second.line, diff.second.prefix);
          }

          if (max > common) {
            var oldSlice = oldLines.slice(common);
            var newSlice = newLines.slice(common);

            var tmpHtml = that.processLines(file.isCombined, oldSlice, newSlice);
            fileHtml.left += tmpHtml.left;
            fileHtml.right += tmpHtml.right;
          }
        });

        oldLines = [];
        newLines = [];
      }

      for (var i = 0; i < block.lines.length; i++) {
        var line = block.lines[i];
        var prefix = line.content[0];
        var escapedLine = utils.escape(line.content.substr(1));

        if (line.type !== diffParser.LINE_TYPE.INSERTS &&
          (newLines.length > 0 || (line.type !== diffParser.LINE_TYPE.DELETES && oldLines.length > 0))) {
          processChangeBlock();
        }

        if (line.type === diffParser.LINE_TYPE.CONTEXT) {
          fileHtml.left += that.generateSingleLineHtml(file.isCombined, line.type, line.oldNumber, escapedLine, prefix);
          fileHtml.right += that.generateSingleLineHtml(file.isCombined, line.type, line.newNumber, escapedLine, prefix);
        } else if (line.type === diffParser.LINE_TYPE.INSERTS && !oldLines.length) {
          fileHtml.left += that.generateSingleLineHtml(file.isCombined, diffParser.LINE_TYPE.CONTEXT, '', '', '');
          fileHtml.right += that.generateSingleLineHtml(file.isCombined, line.type, line.newNumber, escapedLine, prefix);
        } else if (line.type === diffParser.LINE_TYPE.DELETES) {
          oldLines.push(line);
        } else if (line.type === diffParser.LINE_TYPE.INSERTS && Boolean(oldLines.length)) {
          newLines.push(line);
        } else {
          console.error('unknown state in html side-by-side generator');
          processChangeBlock();
        }
      }

      processChangeBlock();
    });

    return fileHtml;
  };

  SideBySidePrinter.prototype.processLines = function(isCombined, oldLines, newLines) {
    var that = this;
    var fileHtml = {};
    fileHtml.left = '';
    fileHtml.right = '';

    var maxLinesNumber = Math.max(oldLines.length, newLines.length);
    for (var i = 0; i < maxLinesNumber; i++) {
      var oldLine = oldLines[i];
      var newLine = newLines[i];
      var oldContent;
      var newContent;
      var oldPrefix;
      var newPrefix;

      if (oldLine) {
        oldContent = utils.escape(oldLine.content.substr(1));
        oldPrefix = oldLine.content[0];
      }

      if (newLine) {
        newContent = utils.escape(newLine.content.substr(1));
        newPrefix = newLine.content[0];
      }

      if (oldLine && newLine) {
        fileHtml.left += that.generateSingleLineHtml(isCombined, oldLine.type, oldLine.oldNumber, oldContent, oldPrefix);
        fileHtml.right += that.generateSingleLineHtml(isCombined, newLine.type, newLine.newNumber, newContent, newPrefix);
      } else if (oldLine) {
        fileHtml.left += that.generateSingleLineHtml(isCombined, oldLine.type, oldLine.oldNumber, oldContent, oldPrefix);
        fileHtml.right += that.generateSingleLineHtml(isCombined, diffParser.LINE_TYPE.CONTEXT, '', '', '');
      } else if (newLine) {
        fileHtml.left += that.generateSingleLineHtml(isCombined, diffParser.LINE_TYPE.CONTEXT, '', '', '');
        fileHtml.right += that.generateSingleLineHtml(isCombined, newLine.type, newLine.newNumber, newContent, newPrefix);
      } else {
        console.error('How did it get here?');
      }
    }

    return fileHtml;
  };

  SideBySidePrinter.prototype.generateSingleLineHtml = function(isCombined, type, number, content, possiblePrefix) {
    var lineWithoutPrefix = content;
    var prefix = possiblePrefix;

    if (!prefix) {
      var lineWithPrefix = printerUtils.separatePrefix(isCombined, content);
      prefix = lineWithPrefix.prefix;
      lineWithoutPrefix = lineWithPrefix.line;
    }

    return hoganUtils.render(genericTemplatesPath, 'line',
      {
        type: type,
        lineClass: 'd2h-code-side-linenumber',
        contentClass: 'd2h-code-side-line',
        prefix: prefix,
        content: lineWithoutPrefix,
        lineNumber: number
      });
  };

  SideBySidePrinter.prototype.generateEmptyDiff = function() {
    var fileHtml = {};
    fileHtml.right = '';

    fileHtml.left = hoganUtils.render(genericTemplatesPath, 'empty-diff', {
      contentClass: 'd2h-code-side-line',
      diffParser: diffParser
    });

    return fileHtml;
  };

  module.exports.SideBySidePrinter = SideBySidePrinter;
})();


/***/ }),

/***/ "./node_modules/diff2html/src/templates/diff2html-templates.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function() {
if (!!!global.browserTemplates) global.browserTemplates = {};
var Hogan = __webpack_require__("./node_modules/hogan.js/lib/hogan.js");global.browserTemplates["file-summary-line"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<li class=\"d2h-file-list-line\">");t.b("\n" + i);t.b("    <span class=\"d2h-file-name-wrapper\">");t.b("\n" + i);t.b("      <span>");t.b(t.rp("<fileIcon0",c,p,""));t.b("</span>");t.b("\n" + i);t.b("      <a href=\"#");t.b(t.v(t.f("fileHtmlId",c,p,0)));t.b("\" class=\"d2h-file-name\">");t.b(t.v(t.f("fileName",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("      <span class=\"d2h-file-stats\">");t.b("\n" + i);t.b("          <span class=\"d2h-lines-added\">");t.b(t.v(t.f("addedLines",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("          <span class=\"d2h-lines-deleted\">");t.b(t.v(t.f("deletedLines",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("      </span>");t.b("\n" + i);t.b("    </span>");t.b("\n" + i);t.b("</li>");return t.fl(); },partials: {"<fileIcon0":{name:"fileIcon", partials: {}, subs: {  }}}, subs: {  }});
global.browserTemplates["file-summary-wrapper"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"d2h-file-list-wrapper\">");t.b("\n" + i);t.b("    <div class=\"d2h-file-list-header\">");t.b("\n" + i);t.b("        <span class=\"d2h-file-list-title\">Files changed (");t.b(t.v(t.f("filesNumber",c,p,0)));t.b(")</span>");t.b("\n" + i);t.b("        <a class=\"d2h-file-switch d2h-hide\">hide</a>");t.b("\n" + i);t.b("        <a class=\"d2h-file-switch d2h-show\">show</a>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <ol class=\"d2h-file-list\">");t.b("\n" + i);t.b("    ");t.b(t.t(t.f("files",c,p,0)));t.b("\n" + i);t.b("    </ol>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["generic-column-line-number"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<tr>");t.b("\n" + i);t.b("    <td class=\"");t.b(t.v(t.f("lineClass",c,p,0)));t.b(" ");t.b(t.v(t.d("diffParser.LINE_TYPE.INFO",c,p,0)));t.b("\"></td>");t.b("\n" + i);t.b("    <td class=\"");t.b(t.v(t.d("diffParser.LINE_TYPE.INFO",c,p,0)));t.b("\">");t.b("\n" + i);t.b("        <div class=\"");t.b(t.v(t.f("contentClass",c,p,0)));t.b(" ");t.b(t.v(t.d("diffParser.LINE_TYPE.INFO",c,p,0)));t.b("\">");t.b(t.t(t.f("blockHeader",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    </td>");t.b("\n" + i);t.b("</tr>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["generic-empty-diff"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<tr>");t.b("\n" + i);t.b("    <td class=\"");t.b(t.v(t.d("diffParser.LINE_TYPE.INFO",c,p,0)));t.b("\">");t.b("\n" + i);t.b("        <div class=\"");t.b(t.v(t.f("contentClass",c,p,0)));t.b(" ");t.b(t.v(t.d("diffParser.LINE_TYPE.INFO",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            File without changes");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </td>");t.b("\n" + i);t.b("</tr>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["generic-file-path"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<span class=\"d2h-file-name-wrapper\">");t.b("\n" + i);t.b("    <span class=\"d2h-icon-wrapper\">");t.b(t.rp("<fileIcon0",c,p,""));t.b("</span>");t.b("\n" + i);t.b("    <span class=\"d2h-file-name\">");t.b(t.v(t.f("fileDiffName",c,p,0)));t.b("</span>");t.b("\n" + i);t.b(t.rp("<fileTag1",c,p,"    "));t.b("</span>");return t.fl(); },partials: {"<fileIcon0":{name:"fileIcon", partials: {}, subs: {  }},"<fileTag1":{name:"fileTag", partials: {}, subs: {  }}}, subs: {  }});
global.browserTemplates["generic-line"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<tr>");t.b("\n" + i);t.b("    <td class=\"");t.b(t.v(t.f("lineClass",c,p,0)));t.b(" ");t.b(t.v(t.f("type",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      ");t.b(t.t(t.f("lineNumber",c,p,0)));t.b("\n" + i);t.b("    </td>");t.b("\n" + i);t.b("    <td class=\"");t.b(t.v(t.f("type",c,p,0)));t.b("\">");t.b("\n" + i);t.b("        <div class=\"");t.b(t.v(t.f("contentClass",c,p,0)));t.b(" ");t.b(t.v(t.f("type",c,p,0)));t.b("\">");t.b("\n" + i);if(t.s(t.f("prefix",c,p,1),c,p,0,171,247,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <span class=\"d2h-code-line-prefix\">");t.b(t.t(t.f("prefix",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}if(t.s(t.f("content",c,p,1),c,p,0,279,353,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <span class=\"d2h-code-line-ctn\">");t.b(t.t(t.f("content",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("        </div>");t.b("\n" + i);t.b("    </td>");t.b("\n" + i);t.b("</tr>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["generic-wrapper"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"d2h-wrapper\">");t.b("\n" + i);t.b("    ");t.b(t.t(t.f("content",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["icon-file-added"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-added\" height=\"16\" title=\"added\" version=\"1.1\" viewBox=\"0 0 14 16\"");t.b("\n" + i);t.b("     width=\"14\">");t.b("\n" + i);t.b("    <path d=\"M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM6 9H3V7h3V4h2v3h3v2H8v3H6V9z\"></path>");t.b("\n" + i);t.b("</svg>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["icon-file-changed"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-changed\" height=\"16\" title=\"modified\" version=\"1.1\"");t.b("\n" + i);t.b("     viewBox=\"0 0 14 16\" width=\"14\">");t.b("\n" + i);t.b("    <path d=\"M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z\"></path>");t.b("\n" + i);t.b("</svg>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["icon-file-deleted"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-deleted\" height=\"16\" title=\"removed\" version=\"1.1\"");t.b("\n" + i);t.b("     viewBox=\"0 0 14 16\" width=\"14\">");t.b("\n" + i);t.b("    <path d=\"M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM11 9H3V7h8v2z\"></path>");t.b("\n" + i);t.b("</svg>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["icon-file-renamed"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-moved\" height=\"16\" title=\"renamed\" version=\"1.1\"");t.b("\n" + i);t.b("     viewBox=\"0 0 14 16\" width=\"14\">");t.b("\n" + i);t.b("    <path d=\"M6 9H3V7h3V4l5 4-5 4V9z m8-7v12c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h12c0.55 0 1 0.45 1 1z m-1 0H1v12h12V2z\"></path>");t.b("\n" + i);t.b("</svg>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["icon-file"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<svg aria-hidden=\"true\" class=\"d2h-icon\" height=\"16\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\">");t.b("\n" + i);t.b("    <path d=\"M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z\"></path>");t.b("\n" + i);t.b("</svg>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["line-by-line-file-diff"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"");t.b(t.v(t.f("fileHtmlId",c,p,0)));t.b("\" class=\"d2h-file-wrapper\" data-lang=\"");t.b(t.v(t.d("file.language",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    <div class=\"d2h-file-header\">");t.b("\n" + i);t.b("    ");t.b(t.t(t.f("filePath",c,p,0)));t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"d2h-file-diff\">");t.b("\n" + i);t.b("        <div class=\"d2h-code-wrapper\">");t.b("\n" + i);t.b("            <table class=\"d2h-diff-table\">");t.b("\n" + i);t.b("                <tbody class=\"d2h-diff-tbody\">");t.b("\n" + i);t.b("                ");t.b(t.t(t.f("diffs",c,p,0)));t.b("\n" + i);t.b("                </tbody>");t.b("\n" + i);t.b("            </table>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["line-by-line-numbers"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"line-num1\">");t.b(t.v(t.f("oldNumber",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("<div class=\"line-num2\">");t.b(t.v(t.f("newNumber",c,p,0)));t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["side-by-side-file-diff"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"");t.b(t.v(t.f("fileHtmlId",c,p,0)));t.b("\" class=\"d2h-file-wrapper\" data-lang=\"");t.b(t.v(t.d("file.language",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    <div class=\"d2h-file-header\">");t.b("\n" + i);t.b("      ");t.b(t.t(t.f("filePath",c,p,0)));t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"d2h-files-diff\">");t.b("\n" + i);t.b("        <div class=\"d2h-file-side-diff\">");t.b("\n" + i);t.b("            <div class=\"d2h-code-wrapper\">");t.b("\n" + i);t.b("                <table class=\"d2h-diff-table\">");t.b("\n" + i);t.b("                    <tbody class=\"d2h-diff-tbody\">");t.b("\n" + i);t.b("                    ");t.b(t.t(t.d("diffs.left",c,p,0)));t.b("\n" + i);t.b("                    </tbody>");t.b("\n" + i);t.b("                </table>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"d2h-file-side-diff\">");t.b("\n" + i);t.b("            <div class=\"d2h-code-wrapper\">");t.b("\n" + i);t.b("                <table class=\"d2h-diff-table\">");t.b("\n" + i);t.b("                    <tbody class=\"d2h-diff-tbody\">");t.b("\n" + i);t.b("                    ");t.b(t.t(t.d("diffs.right",c,p,0)));t.b("\n" + i);t.b("                    </tbody>");t.b("\n" + i);t.b("                </table>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["tag-file-added"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<span class=\"d2h-tag d2h-added d2h-added-tag\">ADDED</span>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["tag-file-changed"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<span class=\"d2h-tag d2h-changed d2h-changed-tag\">CHANGED</span>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["tag-file-deleted"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<span class=\"d2h-tag d2h-deleted d2h-deleted-tag\">DELETED</span>");return t.fl(); },partials: {}, subs: {  }});
global.browserTemplates["tag-file-renamed"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<span class=\"d2h-tag d2h-moved d2h-moved-tag\">RENAMED</span>");return t.fl(); },partials: {}, subs: {  }});
module.exports = global.browserTemplates;
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/diff2html/src/utils.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *
 * Utils (utils.js)
 * Author: rtfpessoa
 *
 */

(function() {
  var merge = __webpack_require__("./node_modules/lodash/merge.js");

  function Utils() {
  }

  Utils.prototype.escape = function(str) {
    return str.slice(0)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
      .replace(/\t/g, '    ');
  };

  Utils.prototype.startsWith = function(str, start) {
    if (typeof start === 'object') {
      var result = false;
      start.forEach(function(s) {
        if (str.indexOf(s) === 0) {
          result = true;
        }
      });

      return result;
    }

    return str && str.indexOf(start) === 0;
  };

  Utils.prototype.valueOrEmpty = function(value) {
    return value || '';
  };

  Utils.prototype.safeConfig = function(cfg, defaultConfig) {
    var newCfg = {};
    merge(newCfg, defaultConfig, cfg);
    return newCfg;
  };

  module.exports.Utils = new Utils();
})();


/***/ }),

/***/ "./node_modules/hogan.js/lib/compiler.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      rLineSep = /\u2028/,
      rParagraphSep = /\u2029/;

  Hogan.tags = {
    '#': 1, '^': 2, '<': 3, '$': 4,
    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
    '{': 10, '&': 11, '_t': 12
  };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push({tag: '_t', text: new String(buf)});
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (tokens[j].text) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].text.toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[delimiters.length - 1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = Hogan.tags[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  // the tags allowed inside super templates
  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        tail = null,
        token = null;

    tail = stack[stack.length - 1];

    while (tokens.length > 0) {
      token = tokens.shift();

      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
        throw new Error('Illegal content in < super tag.');
      }

      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else if (token.tag == '\n') {
        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
      }

      instructions.push(token);
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  function stringifySubstitutions(obj) {
    var items = [];
    for (var key in obj) {
      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
    }
    return "{ " + items.join(",") + " }";
  }

  function stringifyPartials(codeObj) {
    var partials = [];
    for (var key in codeObj.partials) {
      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
    }
    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
  }

  Hogan.stringify = function(codeObj, text, options) {
    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
  }

  var serialNo = 0;
  Hogan.generate = function(tree, text, options) {
    serialNo = 0;
    var context = { code: '', subs: {}, partials: {} };
    Hogan.walk(tree, context);

    if (options.asString) {
      return this.stringify(context, text, options);
    }

    return this.makeTemplate(context, text, options);
  }

  Hogan.wrapMain = function(code) {
    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
  }

  Hogan.template = Hogan.Template;

  Hogan.makeTemplate = function(codeObj, text, options) {
    var template = this.makePartials(codeObj);
    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
    return new this.template(template, text, this, options);
  }

  Hogan.makePartials = function(codeObj) {
    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
    for (key in template.partials) {
      template.partials[key] = this.makePartials(template.partials[key]);
    }
    for (key in codeObj.subs) {
      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
    }
    return template;
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r')
            .replace(rLineSep, '\\u2028')
            .replace(rParagraphSep, '\\u2029');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function createPartial(node, context) {
    var prefix = "<" + (context.prefix || "");
    var sym = prefix + node.n + serialNo++;
    context.partials[sym] = {name: node.n, partials: {}};
    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
    return sym;
  }

  Hogan.codegen = {
    '#': function(node, context) {
      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
                      't.rs(c,p,' + 'function(c,p,t){';
      Hogan.walk(node.nodes, context);
      context.code += '});c.pop();}';
    },

    '^': function(node, context) {
      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
      Hogan.walk(node.nodes, context);
      context.code += '};';
    },

    '>': createPartial,
    '<': function(node, context) {
      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
      Hogan.walk(node.nodes, ctx);
      var template = context.partials[createPartial(node, context)];
      template.subs = ctx.subs;
      template.partials = ctx.partials;
    },

    '$': function(node, context) {
      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
      Hogan.walk(node.nodes, ctx);
      context.subs[node.n] = ctx.code;
      if (!context.inPartial) {
        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
      }
    },

    '\n': function(node, context) {
      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
    },

    '_v': function(node, context) {
      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    },

    '_t': function(node, context) {
      context.code += write('"' + esc(node.text) + '"');
    },

    '{': tripleStache,

    '&': tripleStache
  }

  function tripleStache(node, context) {
    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
  }

  function write(s) {
    return 't.b(' + s + ');';
  }

  Hogan.walk = function(nodelist, context) {
    var func;
    for (var i = 0, l = nodelist.length; i < l; i++) {
      func = Hogan.codegen[nodelist[i].tag];
      func && func(nodelist[i], context);
    }
    return context;
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  }

  Hogan.cache = {};

  Hogan.cacheKey = function(text, options) {
    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
  }

  Hogan.compile = function(text, options) {
    options = options || {};
    var key = Hogan.cacheKey(text, options);
    var template = this.cache[key];

    if (template) {
      var partials = template.partials;
      for (var name in partials) {
        delete partials[name].instance;
      }
      return template;
    }

    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = template;
  }
})( true ? exports : Hogan);


/***/ }),

/***/ "./node_modules/hogan.js/lib/hogan.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// This file is for use with Node.js. See dist/ for browser files.

var Hogan = __webpack_require__("./node_modules/hogan.js/lib/compiler.js");
Hogan.Template = __webpack_require__("./node_modules/hogan.js/lib/template.js").Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;


/***/ }),

/***/ "./node_modules/hogan.js/lib/template.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var Hogan = {};

(function (Hogan) {
  Hogan.Template = function (codeObj, text, compiler, options) {
    codeObj = codeObj || {};
    this.r = codeObj.code || this.r;
    this.c = compiler;
    this.options = options || {};
    this.text = text || '';
    this.partials = codeObj.partials || {};
    this.subs = codeObj.subs || {};
    this.buf = '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // ensurePartial
    ep: function(symbol, partials) {
      var partial = this.partials[symbol];

      // check to see that if we've instantiated this partial before
      var template = partials[partial.name];
      if (partial.instance && partial.base == template) {
        return partial.instance;
      }

      if (typeof template == 'string') {
        if (!this.c) {
          throw new Error("No compiler available.");
        }
        template = this.c.compile(template, this.options);
      }

      if (!template) {
        return null;
      }

      // We use this to check whether the partials dictionary has changed
      this.partials[symbol].base = template;

      if (partial.subs) {
        // Make sure we consider parent template now
        if (!partials.stackText) partials.stackText = {};
        for (key in partial.subs) {
          if (!partials.stackText[key]) {
            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
          }
        }
        template = createSpecializedPartial(template, partial.subs, partial.partials,
          this.stackSubs, this.stackPartials, partials.stackText);
      }
      this.partials[symbol].instance = template;

      return template;
    },

    // tries to find a partial in the current scope and render it
    rp: function(symbol, context, partials, indent) {
      var partial = this.ep(symbol, partials);
      if (!partial) {
        return '';
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ms(val, ctx, partials, inverted, start, end, tags);
      }

      pass = !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var found,
          names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          doModelGet = this.options.modelGet,
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        val = ctx[ctx.length - 1];
      } else {
        for (var i = 1; i < names.length; i++) {
          found = findInScope(names[i], val, doModelGet);
          if (found !== undefined) {
            cx = val;
            val = found;
          } else {
            val = '';
          }
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.mv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false,
          doModelGet = this.options.modelGet;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        val = findInScope(key, v, doModelGet);
        if (val !== undefined) {
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.mv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ls: function(func, cx, partials, text, tags) {
      var oldTags = this.options.delimiters;

      this.options.delimiters = tags;
      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
      this.options.delimiters = oldTags;

      return false;
    },

    // compile text
    ct: function(text, cx, partials) {
      if (this.options.disableLambda) {
        throw new Error('Lambda features disabled.');
      }
      return this.c.compile(text, this.options).render(cx, partials);
    },

    // template result buffering
    b: function(s) { this.buf += s; },

    fl: function() { var r = this.buf; this.buf = ''; return r; },

    // method replace section
    ms: function(func, ctx, partials, inverted, start, end, tags) {
      var textSource,
          cx = ctx[ctx.length - 1],
          result = func.call(cx);

      if (typeof result == 'function') {
        if (inverted) {
          return true;
        } else {
          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
        }
      }

      return result;
    },

    // method replace variable
    mv: function(func, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = func.call(cx);

      if (typeof result == 'function') {
        return this.ct(coerceToString(result.call(cx)), cx, partials);
      }

      return result;
    },

    sub: function(name, context, partials, indent) {
      var f = this.subs[name];
      if (f) {
        this.activeSub = name;
        f(context, partials, this, indent);
        this.activeSub = false;
      }
    }

  };

  //Find a key in an object
  function findInScope(key, scope, doModelGet) {
    var val;

    if (scope && typeof scope == 'object') {

      if (scope[key] !== undefined) {
        val = scope[key];

      // try lookup with get for backbone or similar model data
      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
        val = scope.get(key);
      }
    }

    return val;
  }

  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
    function PartialTemplate() {};
    PartialTemplate.prototype = instance;
    function Substitutions() {};
    Substitutions.prototype = instance.subs;
    var key;
    var partial = new PartialTemplate();
    partial.subs = new Substitutions();
    partial.subsText = {};  //hehe. substext.
    partial.buf = '';

    stackSubs = stackSubs || {};
    partial.stackSubs = stackSubs;
    partial.subsText = stackText;
    for (key in subs) {
      if (!stackSubs[key]) stackSubs[key] = subs[key];
    }
    for (key in stackSubs) {
      partial.subs[key] = stackSubs[key];
    }

    stackPartials = stackPartials || {};
    partial.stackPartials = stackPartials;
    for (key in partials) {
      if (!stackPartials[key]) stackPartials[key] = partials[key];
    }
    for (key in stackPartials) {
      partial.partials[key] = stackPartials[key];
    }

    return partial;
  }

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;

  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp, '&amp;')
        .replace(rLt, '&lt;')
        .replace(rGt, '&gt;')
        .replace(rApos, '&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})( true ? exports : Hogan);


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__("./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__("./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__("./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__("./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__("./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__("./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__("./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__("./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__("./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__("./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__("./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__("./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__("./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__("./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__("./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__("./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__("./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__("./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__("./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__("./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__("./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__("./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__("./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__("./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__("./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__("./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__("./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__("./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__("./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__("./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__("./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__("./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__("./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__("./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__("./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__("./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__("./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__("./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__("./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__("./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__("./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("./node_modules/lodash/identity.js"),
    overRest = __webpack_require__("./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__("./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__("./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__("./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__("./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__("./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__("./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__("./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__("./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__("./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  return key == '__proto__'
    ? undefined
    : object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__("./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__("./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__("./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__("./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__("./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__("./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__("./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__("./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__("./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/merge.js":
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__("./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__("./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__("./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
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

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/packages/git-panel-package/constants/mockdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_INFO", function() { return FILE_INFO; });
// 在离线状态下，选用Mock data
var FILE_INFO = [
    { fileName: '.gitignore', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true },
    { fileName: 'Dockerfile.yml', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true },
    { fileName: 'Dockerfile', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true },
    { fileName: 'fileheader1-1.js', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true },
    { fileName: 'fileheader2.json', filePath: './git-header/', fileStatus: 'U', fileStaged: false, fileTracked: false },
    { fileName: 'fileheader3.spec.ts', filePath: '/git-header/', fileStatus: 'D', fileStaged: true, fileTracked: true },
    { fileName: 'fileheader3.ts', filePath: '/git-header/', fileStatus: 'D', fileStaged: true, fileTracked: true },
    { fileName: 'fileheader4.html', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true },
    { fileName: 'fileheader5.css', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true },
    { fileName: 'fileheader6.less', filePath: '/git-header/', fileStatus: 'U', fileStaged: false, fileTracked: false },
    { fileName: 'fileheader7.png', filePath: '/git-header/', fileStatus: 'A', fileStaged: true, fileTracked: true },
    { fileName: 'fileheader8.jpg', filePath: '/git-header.ts/', fileStatus: 'A', fileStaged: true, fileTracked: true },
    { fileName: 'fileheader9.svg', filePath: '/git-header/', fileStatus: 'A', fileStaged: true, fileTracked: true },
    { fileName: 'fileheader10.md', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true }
];


/***/ }),

/***/ "./src/packages/git-panel-package/git-panel-package.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitPanelPackageModule", function() { return GitPanelPackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__package__ = __webpack_require__("./src/packages/git-panel-package/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_git_panel_git_panel_component__ = __webpack_require__("./src/packages/git-panel-package/views/git-panel/git-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_git_filelist_git_filelist_component__ = __webpack_require__("./src/packages/git-panel-package/views/git-filelist/git-filelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_common_components_git_file_item_git_file_item_component__ = __webpack_require__("./src/packages/git-panel-package/views/common-components/git-file-item/git-file-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_git_data_service__ = __webpack_require__("./src/packages/git-panel-package/services/git-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_git_dialog_push_dialog_git_push_dialog_component__ = __webpack_require__("./src/packages/git-panel-package/views/git-dialog/push-dialog/git-push-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_git_dialog_remote_add_dialog_git_remote_add_dialog_component__ = __webpack_require__("./src/packages/git-panel-package/views/git-dialog/remote-add-dialog/git-remote-add-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_git_panel_git_panel_state__ = __webpack_require__("./src/packages/git-panel-package/views/git-panel/git-panel.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_git_dialog_release_branch_dialog_git_release_branch_dialog_component__ = __webpack_require__("./src/packages/git-panel-package/views/git-dialog/release-branch-dialog/git-release-branch-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_git_dialog_pull_dialog_git_pull_dialog_component__ = __webpack_require__("./src/packages/git-panel-package/views/git-dialog/pull-dialog/git-pull-dialog.component.ts");
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




// import { BsDropdownModule } from '../../components/dropdown/dropdown.module';
 // component文件夹里的版本有问题待解决
 // component文件夹里的版本
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { AlertModule } from 'ngx-bootstrap/alert';












var GitPanelPackageModule = (function (_super) {
    __extends(GitPanelPackageModule, _super);
    function GitPanelPackageModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    GitPanelPackageModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_4__package__["GitPanelPackage"](gsp, this.cfr, this.injector);
    };
    GitPanelPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__views_git_dialog_release_branch_dialog_git_release_branch_dialog_component__["GitReleaseBranchDialogComponent"],
                __WEBPACK_IMPORTED_MODULE_11__views_git_dialog_remote_add_dialog_git_remote_add_dialog_component__["GitRemoteAddDialogComponent"],
                __WEBPACK_IMPORTED_MODULE_14__views_git_dialog_pull_dialog_git_pull_dialog_component__["GitPullDialogComponent"],
                __WEBPACK_IMPORTED_MODULE_10__views_git_dialog_push_dialog_git_push_dialog_component__["GitPushDialogComponent"],
                __WEBPACK_IMPORTED_MODULE_5__views_git_panel_git_panel_component__["GitPanelComponent"],
                __WEBPACK_IMPORTED_MODULE_6__views_git_filelist_git_filelist_component__["GitFilelistComponent"],
                __WEBPACK_IMPORTED_MODULE_7__views_common_components_git_file_item_git_file_item_component__["GitFileItemComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__farris_ui__["FarrisDialogModule"],
                __WEBPACK_IMPORTED_MODULE_9__farris_ui__["NotifyModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__farris_ui__["MessagerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__["AlertModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__["TooltipModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__["BsDropdownModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__views_git_panel_git_panel_state__["GitPanelState"],
                __WEBPACK_IMPORTED_MODULE_8__services_git_data_service__["GitDataService"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__views_git_dialog_release_branch_dialog_git_release_branch_dialog_component__["GitReleaseBranchDialogComponent"],
                __WEBPACK_IMPORTED_MODULE_11__views_git_dialog_remote_add_dialog_git_remote_add_dialog_component__["GitRemoteAddDialogComponent"],
                __WEBPACK_IMPORTED_MODULE_14__views_git_dialog_pull_dialog_git_pull_dialog_component__["GitPullDialogComponent"],
                __WEBPACK_IMPORTED_MODULE_10__views_git_dialog_push_dialog_git_push_dialog_component__["GitPushDialogComponent"],
                __WEBPACK_IMPORTED_MODULE_5__views_git_panel_git_panel_component__["GitPanelComponent"]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], GitPanelPackageModule);
    return GitPanelPackageModule;
}(__WEBPACK_IMPORTED_MODULE_3__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=git-panel-package.module.js.map

/***/ }),

/***/ "./src/packages/git-panel-package/models/file.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInfo", function() { return FileInfo; });
var FileInfo = (function () {
    function FileInfo(_a) {
        var fileName = _a.fileName, filePath = _a.filePath, fileStatus = _a.fileStatus, fileTracked = _a.fileTracked, fileStaged = _a.fileStaged;
        this._fileName = fileName;
        this._filePath = filePath;
        this._fileStatus = fileStatus;
        this._fileTracked = fileTracked;
        this._fileStaged = fileStaged;
    }
    Object.defineProperty(FileInfo.prototype, "fileName", {
        get: function () {
            return this._fileName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInfo.prototype, "filePath", {
        get: function () {
            return this._filePath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInfo.prototype, "fileStatus", {
        get: function () {
            return this._fileStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInfo.prototype, "fileTracked", {
        get: function () {
            return this._fileTracked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInfo.prototype, "fileStaged", {
        get: function () {
            return this._fileStaged;
        },
        enumerable: true,
        configurable: true
    });
    return FileInfo;
}());



/***/ }),

/***/ "./src/packages/git-panel-package/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitPanelPackage", function() { return GitPanelPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_git_panel_git_panel_component__ = __webpack_require__("./src/packages/git-panel-package/views/git-panel/git-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views__ = __webpack_require__("./src/packages/git-panel-package/views/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_git_panel_git_panel_state__ = __webpack_require__("./src/packages/git-panel-package/views/git-panel/git-panel.state.ts");
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




var id = 'gitPanel';
var GitPanelPackage = (function (_super) {
    __extends(GitPanelPackage, _super);
    function GitPanelPackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    GitPanelPackage.prototype.activate = function (state) {
        var _this = this;
        this.packageView = new __WEBPACK_IMPORTED_MODULE_2__views__["GitPanelPackageView"](state.gitPanelPackageViewState, this.cfr, this.injector);
        this.layoutPanel = this.gsp.workspace.getLeftDock().getActivePane().addItem({
            id: id,
            getTitle: function () { return 'Git'; },
            getElement: function () { return _this.packageView.getElement(); }
        }, {});
        // 处理file-tree-panel上的事件
        this.gitPanelState = this.injector.get(__WEBPACK_IMPORTED_MODULE_3__views_git_panel_git_panel_state__["GitPanelState"]);
        this.gitPanelState.gitInit.subscribe(function (data) { return _this.gitInitHandler(data); });
        this.gsp.eventBus.on(null, null, 'CurrentGitReposity', this, function (gitReposityPath) { return _this.updateGitProjectPath(gitReposityPath); });
        this.gsp.eventBus.on(null, null, 'FocusedNodePathInfo', this, function (focusedNodePathInfo) { return _this.updateFocusedNodePathInfo(focusedNodePathInfo); });
        this.gsp.eventBus.on(null, null, 'CurrentGitBranch', this, function (gitBranchPath) { return _this.updateGitBranchPath(gitBranchPath); });
    };
    GitPanelPackage.prototype.gitInitHandler = function (data) {
        this.gsp.eventBus.post('GitPanelPackage', this.constructor.name, 'GitInit', data);
    };
    GitPanelPackage.prototype.updateGitProjectPath = function (gitReposityPath) {
        var gitPanelComponent = this.packageView.getElement().instance;
        gitPanelComponent.setGitProjectPath(gitReposityPath);
    };
    GitPanelPackage.prototype.updateFocusedNodePathInfo = function (pathInfo) {
        var gitPanelComponent = this.packageView.getElement().instance;
        gitPanelComponent.setFocusedNodePathInfo(pathInfo);
    };
    GitPanelPackage.prototype.updateGitBranchPath = function (gitBranchInfo) {
        var gitPanelComponent = this.packageView.getElement().instance;
        gitPanelComponent.setGitBranchPath(gitBranchInfo);
    };
    GitPanelPackage.prototype.deactivate = function () {
        this.packageView.destroy();
        console.log('GitPanelPackageView deactivated. Need deserialize.');
    };
    GitPanelPackage.prototype.serialize = function () {
        return {
            gitPanelPackageViewState: this.packageView.serialize()
        };
    };
    GitPanelPackage.prototype.toggle = function () {
        // 布局面板需要提供toggle？
        // return (
        //   this.modelPanel.isVisible() ?
        //     this.modelPanel.hide() :
        //     this.modelPanel.show()
        // );
    };
    GitPanelPackage.prototype.getComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_1__views_git_panel_git_panel_component__["GitPanelComponent"];
    };
    return GitPanelPackage;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/git-panel-package/services/git-data-adapter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitDataAdapter", function() { return GitDataAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_file__ = __webpack_require__("./src/packages/git-panel-package/models/file.ts");

var GitDataAdapter = (function () {
    // https://stackoverflow.com/questions/42396804/how-to-write-a-service-constructor-that-requires-parameters-in-angular-2
    function GitDataAdapter(sourceData) {
        this.sourceData = sourceData;
    }
    /**
     * 对服务器端数据进行适配，获取Git面板所需git status所需数据
     * @returns git status Data(Array)
     * @example
      {
        "clean": false,
        "branchName": "master",
        "added": [],
        "changed": [],
        "removed": [],
        "modified": [],
        "untracked": [
          "1/foo.ts"
          ],
        "missing": [],
        "conflicting": [],
        "description": "On branch master\r\n\r\nChanges not staged for commit:\r\n\r\n\tnew file:   1/foo.ts\r\n"
      }
      => (适配)
      {
        {
          fileName: '.gitignore',
          filePath: '/git-header/',
          fileStatus: 'M',
          fileStaged: true,
          fileTracked: true
        },
        {
          fileName: 'fileheader2.json',
          filePath: './git-header/',
          fileStatus: 'U',
          fileStaged: false,
          fileTracked: false
        }
      }
     */
    GitDataAdapter.prototype.getAdaptedGitStatusData = function (sourceGitStatusData) {
        if (sourceGitStatusData === void 0) { sourceGitStatusData = this.sourceData; }
        var fileInfoArray = [];
        if (sourceGitStatusData == null || sourceGitStatusData.clean) {
            return fileInfoArray;
        }
        // sourceGitStatusData.branchName
        // untracked && added: State: U
        this.initGitStatusData(sourceGitStatusData.untracked, 'U', false, false, fileInfoArray);
        // untracked && modified: State: M
        this.initGitStatusData(sourceGitStatusData.modified, 'M', false, false, fileInfoArray);
        // untracked && missing: State: D
        this.initGitStatusData(sourceGitStatusData.missing, 'D', false, false, fileInfoArray);
        // tracked && added: Status A
        this.initGitStatusData(sourceGitStatusData.added, 'A', true, true, fileInfoArray);
        // tracked && changed: Status M
        this.initGitStatusData(sourceGitStatusData.changed, 'M', true, true, fileInfoArray);
        // tracked && removed: Status D
        this.initGitStatusData(sourceGitStatusData.removed, 'D', true, true, fileInfoArray);
        // merge && conflicting: Status M(待验证)
        // https://blog.csdn.net/xuanhun521/article/details/52994915
        if (sourceGitStatusData.conflicting
            && sourceGitStatusData.conflicting.length !== 0) {
            // 后续版本添加
            console.log('Warning: Currently Not Support to Display Conflicting Data');
        }
        // sourceGitStatusData.description
        return fileInfoArray;
    };
    /**
     * 基于从服务器端获取的Git Status数据，初始化git面板数据
     * @param srcGitStatusFiles
     * @param fileState
     * @param fileStatus
     * @param fileTracked
     * @param destFiles
     */
    GitDataAdapter.prototype.initGitStatusData = function (srcGitStatusFiles, fileState, fileStatus, fileTracked, destFiles) {
        if (srcGitStatusFiles
            && srcGitStatusFiles.length !== 0) {
            srcGitStatusFiles.forEach(function (fileInfoStr) {
                var lastIndex = fileInfoStr.lastIndexOf('/');
                var localFileInfo = new __WEBPACK_IMPORTED_MODULE_0__models_file__["FileInfo"]({
                    fileName: fileInfoStr.substr(lastIndex + 1, fileInfoStr.length),
                    filePath: fileInfoStr.substr(0, lastIndex),
                    fileStatus: fileState,
                    fileTracked: fileTracked,
                    fileStaged: fileStatus
                });
                destFiles.push(localFileInfo);
            });
        }
    };
    return GitDataAdapter;
}());



/***/ }),

/***/ "./src/packages/git-panel-package/services/git-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitDataService", function() { return GitDataService; });
/* unused harmony export BranchData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__git_data_adapter__ = __webpack_require__("./src/packages/git-panel-package/services/git-data-adapter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// access environment.SERVER_IP
var SERVER_IP = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["environment"].SERVER_IP;
var GIT_BASE_PATH = '/api/dev/main/v1.0/git';
var GIT_INIT = '/init';
var GIT_STATUS = '/status';
var GIT_COMMIT = '/commit';
var GIT_RESET = '/reset';
var GIT_ADD = '/add';
var GIT_BRANCH = '/branch';
var GIT_CHECKOUI = '/checkout';
var GIT_PULL = '/pull';
var GIT_PUSH = '/push';
var GIT_ADDR = '/addr';
var GIT_REMOTE = '/remote';
var GIT_REV_PARSE = '/revparse';
var GitDataService = (function () {
    // TypeScript 构造器语法同时定义参数和属性。
    // TypeScript's constructor syntax for declaring parameters and properties simultaneously.
    // 注入Http服务
    function GitDataService(http) {
        this.http = http;
        this.messages = [];
    }
    /**
     * 获取git revparse信息
     */
    GitDataService.prototype.getGitRevParse = function (projectPath, revInfo) {
        var http = this.http;
        var url = this.getGitRevParseUrl(projectPath, revInfo);
        var gitRevParseSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        http.get(url, { responseType: 'text' }).subscribe(function (result) {
            // async send git revparse info
            gitRevParseSubject.next(result.toString());
        });
        return gitRevParseSubject;
    };
    /**
     * 获取远程仓库
     * git remote
     */
    GitDataService.prototype.getGitRemote = function (projectPath, remoteName, verbose) {
        if (verbose === void 0) { verbose = false; }
        var http = this.http;
        var url = this.getGitRemoteUrl(projectPath);
        if (undefined !== remoteName && null !== remoteName && remoteName.length > 0) {
            url += '&remoteName=' + remoteName;
        }
        url += '&verbose=' + verbose;
        var gitRemoteSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        http.get(url, { observe: 'response' }).subscribe(function (result) {
            console.log('git remote result is:' + result);
            gitRemoteSubject.next(result);
        });
        return gitRemoteSubject;
    };
    /**
     * 添加远程仓库
     * git remote add <name> <url>
     */
    GitDataService.prototype.postGitRemoteAdd = function (projectPath, brachName, remoteUrl, branches) {
        if (branches === void 0) { branches = []; }
        var url = this.getGitRemoteUrl(projectPath);
        var body = {
            name: brachName,
            url: remoteUrl,
            branches: branches,
        };
        return this._postGitCommandWithOptions(url, body, { observe: 'response' });
    };
    /**
     * 初始化Git存储库
     * git init
     * @param projectPath
     */
    GitDataService.prototype.postGitInit = function (projectPath) {
        var url = this.getGitInitUrl(projectPath);
        return this._postGitCommand(url, null);
    };
    /**
     * 发布分支
     * git push -u origin master
     * @param projectPath
     */
    GitDataService.prototype.postReleaseBranch = function (projectPath, remoteReposity, branchName, userName, passWord) {
        return this.postGitPush(projectPath, remoteReposity, branchName, userName, passWord);
    };
    /**
     * 向指定仓库push
     * git push
     * @param projectPath
     */
    GitDataService.prototype.postGitPush = function (projectPath, remoteReposity, branchName, userName, passWord, refspecArray) {
        if (projectPath == null || projectPath.length < 0) {
            console.log('Project path is null or empty.');
            return;
        }
        var url = this.getGitPushUrl(projectPath);
        var body = {
            remote: remoteReposity,
            branchname: branchName,
            username: userName,
            password: passWord
        };
        return this._postGitCommandWithOptions(url, body, { observe: 'response' });
    };
    /**
     * pull指定工程
     * git pull
     * @param projectPath
     * @param filePath
     */
    GitDataService.prototype.postGitPull = function (projectPath, userName, passWord, remoteReposityName, isRebase) {
        var url = this.getGitPullUrl(projectPath);
        var body = {
            remote: remoteReposityName,
            rebase: isRebase,
            username: userName,
            password: passWord
        };
        return this._postGitCommandWithOptions(url, body, { observe: 'response' });
    };
    /**
     * checkout命令
     * git checkout branchName
     * @param projectPath
     * @param branchName
     * @param createNewBranch
     * @param chosenfiles
     * @param forceRecoverFile
     */
    GitDataService.prototype.postGitCheckout = function (projectPath, branchName, createNewBranch, chosenfiles, forceRecoverFile) {
        if (createNewBranch === void 0) { createNewBranch = false; }
        if (chosenfiles === void 0) { chosenfiles = []; }
        if (forceRecoverFile === void 0) { forceRecoverFile = false; }
        var url = this.getGitCheckoutUrl(projectPath);
        var body = {
            name: branchName,
            createnew: createNewBranch,
            files: chosenfiles,
            force: forceRecoverFile
        };
        return this._postGitCommand(url, body);
    };
    /**
     * 获取Git branch数据
     * @param projectPath 工程所在路径
     */
    GitDataService.prototype.getGitBranchData = function (projectPath) {
        var _this = this;
        if (projectPath === void 0) { projectPath = ''; }
        var http = this.http;
        var url = this.getGitBranchUrl(projectPath);
        var gitBranchDataSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        http.get(url).subscribe(function (result) {
            console.log('gitBranchArray' + result);
            var branchData = _this.getAdaptedGitBranchData(result);
            if (branchData.length > 0) {
                gitBranchDataSubject.next(branchData);
            }
        });
        return gitBranchDataSubject;
    };
    GitDataService.prototype.getAdaptedGitBranchData = function (result) {
        var branchArray = [];
        if (result && result.length > 0) {
            result.forEach(function (element) {
                var branch = new BranchData(element);
                branchArray.push(branch);
            });
        }
        return branchArray;
    };
    /**
     * 添加指定文件到暂存区
     * git add filename
     * @param projectPath
     * @param filePath
     */
    GitDataService.prototype.postGitAdd = function (projectPath, filePath) {
        var filesPathArray = [];
        filesPathArray.push(filePath);
        var url = this.getGitAddUrl(projectPath);
        var body = {
            filePattern: filesPathArray
        };
        return this._postGitCommand(url, body);
    };
    /**
     * 放弃指定文件的更改
     * git checkout -- filename
     * @param projectPath 工程所在路径
     * @param filePath 文件路径信息
     */
    GitDataService.prototype.discardAddedFile = function (projectPath, fileName) {
        var files = [];
        files.push(fileName);
        return this.postGitCheckout(projectPath, '', false, files, true);
    };
    /**
     * 撤销指定的暂存文件
     * git reset HEAD fileName
     * @param projectPath 工程所在路径
     * @param filePath 文件路径信息
     */
    GitDataService.prototype.cancelStagedFile = function (projectPath, filePath) {
        var filesPathArray = [];
        filesPathArray.push(filePath);
        return this.postGitReset(projectPath, 'HEAD', filesPathArray, 'mixed');
    };
    /**
     * 撤销上次Git Commit命令
     * git reset HEAD~2
     * @param projectPath 工程所在路径
     */
    GitDataService.prototype.cancelLastGitCommit = function (projectPath) {
        return this.postGitReset(projectPath, 'HEAD~', [], 'mixed');
    };
    /**
     * 执行Git Reset命令
     * git reset
     * @param projectPath 工程所在路径
     */
    GitDataService.prototype.postGitReset = function (projectPath, localCommit, localFilePattern, localMode) {
        if (localCommit === void 0) { localCommit = 'HEAD'; }
        if (localFilePattern === void 0) { localFilePattern = []; }
        if (localMode === void 0) { localMode = 'mixed'; }
        var url = this.getGitResetUrl(projectPath);
        var body = {
            commit: localCommit,
            filepattern: localFilePattern,
            mode: localMode // soft|Mixed(default)|hard)
        };
        return this._postGitCommand(url, body);
    };
    /**
     * 推送Git Commit命令
     * @param projectPath 工程所在路径
     * @param commitMessage comit message
     */
    GitDataService.prototype.postGitCommit = function (projectPath, commitMessage) {
        var url = this.getGitCommitUrl(projectPath);
        var body = {
            message: commitMessage
        };
        return this._postGitCommand(url, body);
    };
    GitDataService.prototype._postGitCommand = function (postUrl, body) {
        var http = this.http;
        return http.post(postUrl, body)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError('postGitCommand', postUrl)));
    };
    GitDataService.prototype._postGitCommandWithOptions = function (postUrl, body, options) {
        var http = this.http;
        return http.post(postUrl, body, options);
    };
    GitDataService.prototype.add = function (message) {
        this.messages.push(message);
    };
    GitDataService.prototype.clear = function () {
        this.messages = [];
    };
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    GitDataService.prototype.handleError = function (serviceName, operation, result) {
        var _this = this;
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            _this.add(serviceName + ": " + operation + " failed: " + message);
            // Let the app keep running by returning a safe result.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])(result);
        };
    };
    /**
     * 获取Git Status数据
     * @param projectPath 工程所在路径
     */
    GitDataService.prototype.getGitStatusData = function (projectPath) {
        if (projectPath === void 0) { projectPath = ''; }
        var http = this.http;
        var url = this.getGitStatusDataUrl(projectPath);
        if (url.length <= 0) {
            return null;
        }
        var gitStatusDataSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        http.get(url).subscribe(function (result) {
            // 获取数据后，对数据进行适配
            var gitStatusDataAdapter = new __WEBPACK_IMPORTED_MODULE_6__git_data_adapter__["GitDataAdapter"](result);
            var gitStatusDataArray = gitStatusDataAdapter.getAdaptedGitStatusData();
            console.log('gitStatusDataArray' + gitStatusDataArray);
            if (gitStatusDataArray != null) {
                gitStatusDataSubject.next(gitStatusDataArray);
            }
        });
        return gitStatusDataSubject;
    };
    /**
     * 获取指定路径的git仓库路径，逐级向上查找，没有则返回空
     */
    GitDataService.prototype.getGitAddress = function (currentPath) {
        if (currentPath === void 0) { currentPath = ''; }
        var http = this.http;
        var url = this.getGitAddrUrl(currentPath);
        var gitAddrSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        http.get(url, { responseType: 'text' }).subscribe(function (result) {
            // 获取git仓库的路径信息
            console.log('gitAddr:' + result);
            gitAddrSubject.next(result.toString());
        });
        return gitAddrSubject;
    };
    GitDataService.prototype._getGitCommand = function (postUrl, body) {
        var http = this.http;
        return http.post(postUrl, body)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError('getGitCommand', postUrl)));
    };
    /**
     * get git addr web api
     * @param currentRelativePath
     */
    GitDataService.prototype.getGitAddrUrl = function (currentRelativePath) {
        var localRelativePath = currentRelativePath.replace(/\\/g, '/');
        var url = SERVER_IP + GIT_BASE_PATH + GIT_ADDR;
        if (0 === localRelativePath.length) {
            return;
        }
        url += '?wsPath=' + localRelativePath;
        return url;
    };
    /**
     * get git revParse(parse revision names) web api
     * https://stackoverflow.com/questions/15798862/what-does-git-rev-parse-do
     * @param projectPath
     */
    GitDataService.prototype.getGitRevParseUrl = function (projectPath, revInfo) {
        var url = this._getGitBaseUrl(projectPath, GIT_REV_PARSE);
        return url += '&revision=' + revInfo;
    };
    /**
     * get git remote web api
     * @param projectPath
     */
    GitDataService.prototype.getGitRemoteUrl = function (projectPath) {
        return this._getGitBaseUrl(projectPath, GIT_REMOTE);
    };
    /**
     * get git init web api
     * @param projectPath
     */
    GitDataService.prototype.getGitInitUrl = function (projectPath) {
        return this._getGitBaseUrl(projectPath, GIT_INIT);
    };
    /**
     * get git push web api
     * @param projectPath
     */
    GitDataService.prototype.getGitPushUrl = function (projectPath) {
        return this._getGitBaseUrl(projectPath, GIT_PUSH);
    };
    /**
     * get git pull web api
     * @param projectPath
     */
    GitDataService.prototype.getGitPullUrl = function (projectPath) {
        return this._getGitBaseUrl(projectPath, GIT_PULL);
    };
    /**
     * get git checkout web api
     * @param projectPath
     */
    GitDataService.prototype.getGitCheckoutUrl = function (projectPath) {
        return this._getGitBaseUrl(projectPath, GIT_CHECKOUI);
    };
    /**
     * get git branch web api
     * @param projectPath
     * @param listMode
     */
    GitDataService.prototype.getGitBranchUrl = function (projectPath, listMode) {
        if (listMode === void 0) { listMode = '0'; }
        var url = this._getGitBaseUrl(projectPath, GIT_BRANCH);
        return url += '&listMode=' + listMode;
    };
    /**
     * get git add web api
     * @param projectPath
     */
    GitDataService.prototype.getGitAddUrl = function (projectPath) {
        return this._getGitBaseUrl(projectPath, GIT_ADD);
    };
    /**
     * get git reset web api
     * @param projectPath
     */
    GitDataService.prototype.getGitResetUrl = function (projectPath) {
        return this._getGitBaseUrl(projectPath, GIT_RESET);
    };
    /**
     * get git commit web api
     * @param projectPath
     */
    GitDataService.prototype.getGitCommitUrl = function (projectPath) {
        return this._getGitBaseUrl(projectPath, GIT_COMMIT);
    };
    /**
     * get git status web api
     * @param projectPath
     */
    GitDataService.prototype.getGitStatusDataUrl = function (projectPath) {
        return this._getGitBaseUrl(projectPath, GIT_STATUS);
    };
    GitDataService.prototype._getGitBaseUrl = function (projectPath, operator) {
        var url = SERVER_IP + GIT_BASE_PATH + operator;
        if (projectPath.length <= 0) {
            return '';
        }
        url += '?projectPath=' + projectPath;
        return url;
    };
    GitDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]])
    ], GitDataService);
    return GitDataService;
}());

var BranchData = (function () {
    function BranchData(_a) {
        var name = _a.name, displayName = _a.displayName, active = _a.active, remote = _a.remote;
        this._fullName = name;
        this._displayName = displayName;
        this._activeBranch = active;
        this._remoteBranch = remote;
    }
    Object.defineProperty(BranchData.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BranchData.prototype, "displayName", {
        get: function () {
            return this._displayName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BranchData.prototype, "active", {
        get: function () {
            return this._activeBranch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BranchData.prototype, "remote", {
        get: function () {
            return this._remoteBranch;
        },
        enumerable: true,
        configurable: true
    });
    return BranchData;
}());



/***/ }),

/***/ "./src/packages/git-panel-package/views/common-components/git-file-item/git-file-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".git-file-item {\n  height: 1.5rem;\n}\n\n/* 划过文件列表，显示深色底色 */\n.hover-shadow :hover {\n  background-color: #e6e6e6;\n}\n\n.line-through {\n  text-decoration: line-through;\n  -webkit-text-decoration-color: black;\n          text-decoration-color: black;\n}\n\n.git-file-item > * {\n  font-size: 0.8rem;\n}\n\n.git-file-item .file-info {\n  white-space: nowrap; /*强制span不换行*/\n  display: inline-block; /*将span当做块级元素对待*/\n  width: calc(100% - 20px); /*限制宽度*/\n  overflow: hidden; /*超出宽度部分隐藏*/\n  text-overflow: ellipsis; /*超出部分以点号代替*/\n}\n\n.git-file-item .file-status-added {\n  color: rgb(58, 240, 180);\n}\n.git-file-item .file-status-modified {\n  color: rgb(255, 210, 125);\n}\n.git-file-item .file-status-deleted {\n  color: rgb(231, 77, 85);\n}\n.git-file-item .file-status-untracked {\n  color: rgb(59, 142, 197);\n}\n\n/* .git-file-item .right-button {\n  display: none !important;\n}\n\n.git-file-item :hover .right-button {\n  display: inline-block;\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/git-panel-package/views/common-components/git-file-item/git-file-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"git-file-item hover-shadow cursor-pointer d-flex justify-content-between\"\n  *ngIf=\"fileItem\">\n\n  <div id=\"file-information\" class=\"file-info\" (click)=\"getFileDetails(fileItem)\"\n    tooltip={{fileItem.filePath}}{{fileItem.fileName}} placement=\"bottom\" delay=\"1000\">\n\n    <!-- 左侧文件图标 -->\n    <div style=\"display: inline-block\">\n      <!-- <i class=\"icon-fork\"></i> -->\n      <img src={{fileIconPath}} alt=\"\" style=\"width: 1.1rem; height: 1.1rem;\">\n    </div>\n\n    <!-- 文件名 -->\n    <div class=\"d-inline-block\" [class.line-through]=\"isDeleted\">\n      {{fileItem.fileName}}\n    </div>\n\n    <!-- 文件路径 -->\n    <div class=\"ml-2 d-inline-block\" style=\"color: rgba(128, 128, 128, 0.75);\">\n      {{fileItem.filePath}}\n    </div>\n\n  </div>\n\n  <!-- 暂存/取消暂存、放弃更改按钮 -->\n  <div id=\"right-button\" class=\"hover-no-shadow right-button d-inline-block font-weight-bold float-right d-flex justify-content-end mx-1\" style=\"max-width: 3rem;\">\n    <i *ngIf=\"fileItem.fileStaged === false\" class=\"icon-undo mx-1\" tooltip=\"放弃更改\" placement=\"bottom\" delay=\"1000\" (click)=\"discardFile(fileItem)\"></i>\n    <i *ngIf=\"fileItem.fileStaged === true\" class=\"icon-minus mx-1\" tooltip=\"取消暂存\" placement=\"bottom\" delay=\"1000\" (click)=\"removeFile(fileItem)\"></i>\n    <i *ngIf=\"fileItem.fileStaged === false\" class=\"icon-plus-1 mx-1\" tooltip=\"暂存更改\" placement=\"bottom\" delay=\"1000\" (click)=\"addFile(fileItem)\"></i>\n  </div>\n\n  <!-- 右侧标识符，指示该文件状态 -->\n  <div class=\"d-inline-block float-right d-flex font-weight-bold hover-no-shadow\" style=\"width: 1rem;\">\n    <label style=\"margin-bottom: 0\"\n      [ngStyle]=\"{'color':fileStatusClassName === 'file-status-added' ? '#3f9ee4' : (fileStatusClassName === 'file-status-deleted' ? '#e64b55' : (fileStatusClassName === 'file-status-modified' ? '#dca14b' : '#79c796')) }\"\n    >\n      {{fileItem.fileStatus}}\n    </label>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/packages/git-panel-package/views/common-components/git-file-item/git-file-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitFileItemComponent", function() { return GitFileItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_file__ = __webpack_require__("./src/packages/git-panel-package/models/file.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_diff2html__ = __webpack_require__("./node_modules/diff2html/src/diff2html.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_diff2html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_diff2html__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { EventBus, EventBusProxy } from '../../../../../event/index';

var GitFileItemComponent = (function () {
    function GitFileItemComponent() {
        this.isAdded = false;
        this.isModified = false;
        this.isDeleted = false;
        this.isUntracked = false;
        // tslint:disable-next-line:no-output-on-prefix
        this.onAddFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onRemoveFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onDiscardFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // this.eb = ebus;
    }
    GitFileItemComponent.prototype.ngOnInit = function () {
        this.getFileIcon();
        this.getFileStatusClass();
    };
    /**
     * 点击一个文件的file-item时，在页面中间的编辑器中显示该文件的版本差异
     * 先调用API，读取该文件的git diff输出语句
     * 将该git diff语句传入Diff2Html.getPrettyHtml方法，返回页面差异的HTML
     */
    GitFileItemComponent.prototype.getHtmlFromDiff = function () {
        // tslint:disable-next-line:max-line-length
        var strInput = "diff --git a/src/app/app.component.ts b/src/app/app.component.ts\nindex 7b0f672..cd5f4c1 100644\n--- a/src/app/app.component.ts\n+++ b/src/app/app.component.ts\n@@ -1,10 +1,20 @@\n+" + this.fileItem.fileName + "\n-import { Component } from '@angular/core';\n+import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';\n+import { DomSanitizer } from '@angular/platform-browser';\n+import {Diff2Html} from 'diff2html';\n\n @Component({\n   selector: 'app-root',\n   templateUrl: './app.component.html',\n   styleUrls: ['./app.component.css']\n })\n-export class AppComponent {\n+export class AppComponent implements OnInit {\n   title = 'app';\n+  outputHtml: string;\n+\n+  ngOnInit() {\n+    // tslint:disable-next-line:max-line-length\n+    const strInput = '--- a/server/vendor/goooolang.org/x/sys/unix/zsyscall_linux_mipsle.go\n+++ b/server/vendor/golang.org/x/sys/unix/zsyscall_linux_mipsle.go\n@@ -1035,6 +1035,17 @@ func Prctl(option int, arg2 uintptr, arg3 uintptr, arg4 uintptr, arg5 uintptr) (\n \n // THIS FILE IS GENERATED BY THE COMMAND AT THE TOP; DO NOT EDIT\n \n+func Pselect(nfd int, r *FdSet, w *FdSet, e *FdSet, timeout *Timespec, sigmask *Sigset_t) (n int, err error) {\n+\tr0, _, e1 := Syscall6(SYS_PSELECT6, uintptr(nfd), uintptr(unsafe.Pointer(r)), uintptr(unsafe.Pointer(w)), uintptr(unsafe.Pointer(e)), uintptr(unsafe.Pointer(timeout)), uintptr(unsafe.Pointer(sigmask)))\n+\tn = int(r0)\n+\tif e1 != 0 {\n+\t\terr = errnoErr(e1)\n+\t}\n+\treturn\n+}\n+\n+// THIS FILE IS GENERATED BY THE COMMAND AT THE TOP; DO NOT EDIT\n+\n func read(fd int, p []byte) (n int, err error) {\n \tvar _p0 unsafe.Pointer\n \tif len(p) > 0 {\n';\n+    const outputHtml = Diff2Html.getPrettyHtml(strInput, {inputFormat: 'diff', showFiles: true, matching: 'lines', outputFormat: 'side-by-side'});\n+    this.outputHtml = outputHtml;\n+  }\n }\n";
        var outputHtml = __WEBPACK_IMPORTED_MODULE_2_diff2html__["Diff2Html"].getPrettyHtml(strInput, { inputFormat: 'diff', showFiles: false, matching: 'lines', outputFormat: 'side-by-side' });
        this.outputHtml = outputHtml;
    };
    /**
     * 根据文件名取得文件的扩展名
     */
    GitFileItemComponent.prototype.getFileIcon = function () {
        var fileName = this.fileItem.fileName;
        var fileExtension = '';
        if (fileName.split('.').length === 1) {
            fileExtension = fileName.split('.')[0];
        }
        else {
            // 有扩展名，形如.gitignore、head.html、head.ts等
            if (fileName.split('.').length === 2) {
                fileExtension = fileName.split('.')[fileName.split('.').length - 1];
            }
            else {
                // 有扩展名，形如head.component.spec.ts等，将最后两块连接起来进行解析（待商榷）
                fileExtension = fileName.split('.')[fileName.split('.').length - 2] + '.' + fileName.split('.')[fileName.split('.').length - 1];
            }
        }
        var fileIconName = 'file_type_' + fileExtension + '.svg';
        var fileIconPath = './assets/icon/' + fileIconName;
        this.fileIconName = fileIconName;
        this.fileIconPath = fileIconPath;
    };
    /**
     * 获取该文件的git状态，根据状态显示不同颜色
     */
    GitFileItemComponent.prototype.getFileStatusClass = function () {
        var fileStatus = this.fileItem.fileStatus;
        var fileStatusClassName;
        switch (fileStatus) {
            case 'M':
                this.isModified = true;
                fileStatusClassName = 'file-status-modified';
                break;
            case 'U':
                this.isUntracked = true;
                fileStatusClassName = 'file-status-untracked';
                break;
            case 'D':
                this.isDeleted = true;
                fileStatusClassName = 'file-status-deleted';
                break;
            case 'A':
                this.isAdded = true;
                fileStatusClassName = 'file-status-added';
                break;
            default:
                fileStatusClassName = '';
                break;
        }
        this.fileStatusClassName = fileStatusClassName;
    };
    GitFileItemComponent.prototype.addFile = function (file) {
        this.clickAdd(file);
    };
    GitFileItemComponent.prototype.removeFile = function (file) {
        this.clickRemove(file);
    };
    GitFileItemComponent.prototype.discardFile = function (file) {
        this.clickDiscard(file);
    };
    GitFileItemComponent.prototype.getFileDetails = function (file) {
        // // 下列三行代码从constructor中移来
        // this.ebp = this.eb.getProxy(this, () => 'c10001');
        // this.ebp.register(['file-diff']);
        // console.log('c1 constructor');
        // // 根据file的fileName和filePath，调用API，获取文件的详细信息，得到git diff信息，使用插件进行差异展示
        // console.log(file);
        // console.log('git diff: ' + file.filePath + file.fileName);
        // this.getHtmlFromDiff();
        // this.ebp.post('file-diff', this.outputHtml);
    };
    GitFileItemComponent.prototype.clickAdd = function (file) {
        this.onAddFile.emit(file);
    };
    GitFileItemComponent.prototype.clickRemove = function (file) {
        this.onRemoveFile.emit(file);
    };
    GitFileItemComponent.prototype.clickDiscard = function (file) {
        this.onDiscardFile.emit(file);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_file__["FileInfo"])
    ], GitFileItemComponent.prototype, "fileItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GitFileItemComponent.prototype, "onAddFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GitFileItemComponent.prototype, "onRemoveFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GitFileItemComponent.prototype, "onDiscardFile", void 0);
    GitFileItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-git-file-item',
            template: __webpack_require__("./src/packages/git-panel-package/views/common-components/git-file-item/git-file-item.component.html"),
            styles: [__webpack_require__("./src/packages/git-panel-package/views/common-components/git-file-item/git-file-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GitFileItemComponent);
    return GitFileItemComponent;
}());



/***/ }),

/***/ "./src/packages/git-panel-package/views/git-dialog/pull-dialog/git-pull-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/git-panel-package/views/git-dialog/pull-dialog/git-pull-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group-wrap pullNameAndPassword\">\n  <div class=\"form-group nameControl\">\n    <label for=\"nameLabel\" class=\"nameLabel\">\n      <strong>用户名：</strong>\n    </label>\n    <input type=\"text\" class=\"form-control nameInput\" placeholder=\"User Name\" required [(ngModel)]=\"gitPullName\">\n  </div>\n\n  <div class=\"form-group passwordControl\">\n    <label for=\"passwordLabel\" class=\"passwordLabel\">\n      <strong>密码：</strong>\n    </label>\n    <input type=\"password\" class=\"form-control passwordInput\" placeholder=\"Password\" required [(ngModel)]=\"gitPullPassword\" >\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/packages/git-panel-package/views/git-dialog/pull-dialog/git-pull-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitPullDialogComponent", function() { return GitPullDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GitPullDialogComponent = (function () {
    function GitPullDialogComponent() {
    }
    Object.defineProperty(GitPullDialogComponent.prototype, "GitPullName", {
        get: function () {
            return this.gitPullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitPullDialogComponent.prototype, "GitPullPassword", {
        get: function () {
            return this.gitPullPassword;
        },
        enumerable: true,
        configurable: true
    });
    GitPullDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'git-pull-dialog',
            template: __webpack_require__("./src/packages/git-panel-package/views/git-dialog/pull-dialog/git-pull-dialog.component.html"),
            styles: [__webpack_require__("./src/packages/git-panel-package/views/git-dialog/pull-dialog/git-pull-dialog.component.css")]
        })
    ], GitPullDialogComponent);
    return GitPullDialogComponent;
}());



/***/ }),

/***/ "./src/packages/git-panel-package/views/git-dialog/push-dialog/git-push-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/git-panel-package/views/git-dialog/push-dialog/git-push-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group-wrap pushNameAndPassword\">\n  <div class=\"form-group nameControl\">\n    <label for=\"nameLabel\" class=\"nameLabel\">\n      <strong>用户名：</strong>\n    </label>\n    <input type=\"text\" class=\"form-control nameInput\" placeholder=\"User Name\" required [(ngModel)]=\"gitPushName\">\n  </div>\n\n  <div class=\"form-group passwordControl\">\n    <label for=\"passwordLabel\" class=\"passwordLabel\">\n      <strong>密码：</strong>\n    </label>\n    <input type=\"password\" class=\"form-control passwordInput\" placeholder=\"Password\" required [(ngModel)]=\"gitPushPassword\" >\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/packages/git-panel-package/views/git-dialog/push-dialog/git-push-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitPushDialogComponent", function() { return GitPushDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GitPushDialogComponent = (function () {
    function GitPushDialogComponent() {
    }
    Object.defineProperty(GitPushDialogComponent.prototype, "GitPushName", {
        get: function () {
            return this.gitPushName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitPushDialogComponent.prototype, "GitPushPassword", {
        get: function () {
            return this.gitPushPassword;
        },
        enumerable: true,
        configurable: true
    });
    GitPushDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'git-push-dialog',
            template: __webpack_require__("./src/packages/git-panel-package/views/git-dialog/push-dialog/git-push-dialog.component.html"),
            styles: [__webpack_require__("./src/packages/git-panel-package/views/git-dialog/push-dialog/git-push-dialog.component.css")]
        })
    ], GitPushDialogComponent);
    return GitPushDialogComponent;
}());



/***/ }),

/***/ "./src/packages/git-panel-package/views/git-dialog/release-branch-dialog/git-release-branch-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/git-panel-package/views/git-dialog/release-branch-dialog/git-release-branch-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group-wrap ReleaseNameAndPassword\">\n  <div class=\"form-group nameControl\">\n    <label for=\"nameLabel\" class=\"nameLabel\">\n      <strong>用户名：</strong>\n    </label>\n    <input type=\"text\" class=\"form-control nameInput\" placeholder=\"User Name\" required [(ngModel)]=\"userName\">\n  </div>\n\n  <div class=\"form-group passwordControl\">\n    <label for=\"passwordLabel\" class=\"passwordLabel\">\n      <strong>密码：</strong>\n    </label>\n    <input type=\"password\" class=\"form-control passwordInput\" placeholder=\"Password\" required [(ngModel)]=\"password\" >\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/packages/git-panel-package/views/git-dialog/release-branch-dialog/git-release-branch-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitReleaseBranchDialogComponent", function() { return GitReleaseBranchDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GitReleaseBranchDialogComponent = (function () {
    function GitReleaseBranchDialogComponent() {
    }
    Object.defineProperty(GitReleaseBranchDialogComponent.prototype, "UserName", {
        get: function () {
            return this.userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitReleaseBranchDialogComponent.prototype, "Password", {
        get: function () {
            return this.password;
        },
        enumerable: true,
        configurable: true
    });
    GitReleaseBranchDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'git-release-branch-dialog',
            template: __webpack_require__("./src/packages/git-panel-package/views/git-dialog/release-branch-dialog/git-release-branch-dialog.component.html"),
            styles: [__webpack_require__("./src/packages/git-panel-package/views/git-dialog/release-branch-dialog/git-release-branch-dialog.component.css")]
        })
    ], GitReleaseBranchDialogComponent);
    return GitReleaseBranchDialogComponent;
}());



/***/ }),

/***/ "./src/packages/git-panel-package/views/git-dialog/remote-add-dialog/git-remote-add-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/git-panel-package/views/git-dialog/remote-add-dialog/git-remote-add-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group-wrap gitRemoteReposityAdd\">\n  <div class=\"form-group remoteReposityControl\">\n    <label for=\"remoteNameLabel\" class=\"remoteNameLabel\">\n      <strong>远程仓库名称：</strong>\n    </label>\n    <input type=\"text\" class=\"form-control remoteNameInput\" placeholder=\"Name\" required [(ngModel)]=\"remoteReposityName\">\n    \n    <label for=\"remoteUrlLabel\" class=\"remoteUrlLabel\">\n      <strong>远程仓库URL：</strong>\n    </label>\n    <input type=\"text\" class=\"form-control remoteUrlInput\" placeholder=\"URL\" required [(ngModel)]=\"remoteReposityUrl\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/packages/git-panel-package/views/git-dialog/remote-add-dialog/git-remote-add-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitRemoteAddDialogComponent", function() { return GitRemoteAddDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GitRemoteAddDialogComponent = (function () {
    // http://www.ruanyifeng.com/blog/2014/06/git_remote.html
    function GitRemoteAddDialogComponent() {
    }
    Object.defineProperty(GitRemoteAddDialogComponent.prototype, "RemoteReposityUrl", {
        get: function () {
            return this.remoteReposityUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitRemoteAddDialogComponent.prototype, "RemoteReposityName", {
        get: function () {
            return this.remoteReposityName;
        },
        enumerable: true,
        configurable: true
    });
    GitRemoteAddDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'git-remote-add-dialog',
            template: __webpack_require__("./src/packages/git-panel-package/views/git-dialog/remote-add-dialog/git-remote-add-dialog.component.html"),
            styles: [__webpack_require__("./src/packages/git-panel-package/views/git-dialog/remote-add-dialog/git-remote-add-dialog.component.css")]
        })
        // http://www.ruanyifeng.com/blog/2014/06/git_remote.html
    ], GitRemoteAddDialogComponent);
    return GitRemoteAddDialogComponent;
}());



/***/ }),

/***/ "./src/packages/git-panel-package/views/git-filelist/git-filelist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".git-filelist .control-bar{\n  height: 1rem;\n  margin-top: 0.8rem;\n}\n\n.git-filelist .control-bar .control-bar-left{\n  float: left;\n  font-weight: bold;\n}\n.git-filelist .control-bar .control-bar-left .control-bar-left-label{\n  margin-bottom: 0;\n}\n\n.git-filelist .control-bar .control-bar-right{\n  float: right;\n}\n\n.git-filelist .control-bar .control-bar-right .control-bar-right-span{\n  margin-bottom: 0;\n  padding: 0 5px;\n  background-color: #dcdcdc;\n  border-radius: 9px;\n}\n\n.git-filelist .control-bar .control-bar-right > *{\n  margin-left: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/git-panel-package/views/git-filelist/git-filelist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"git-filelist\">\n  \n  <!-- 暂存的更改 -->\n  <div *ngIf=\"stagedFiles.length > 0\" class=\"control-bar cursor-pointer\">\n    <div class=\"control-bar-left\">\n      <label class=\"control-bar-left-label\">暂存的更改</label>\n    </div>\n    <div class=\"control-bar-right\">\n      <i class=\"demo-icon icon-minus\" (click)=\"removeAllStagedFiles()\" tooltip=\"取消所有暂存\" placement=\"bottom\" delay=\"1000\"></i>\n      <span class=\"control-bar-right-span\">{{stagedFiles.length}}</span>\n    </div>\n  </div>\n\n  <div style=\"margin-top: 10px;\">\n    <div *ngFor=\"let fileitem of stagedFiles\" >\n      <app-git-file-item [fileItem]=\"fileitem\" (onRemoveFile)=\"onRemoveFile($event)\"></app-git-file-item>\n    </div>\n  </div>\n\n  <!-- 未暂存更改 -->\n  <div *ngIf=\"otherFiles.length > 0\" class=\"control-bar cursor-pointer\">\n    <div class=\"control-bar-left\">\n      <label class=\"control-bar-left-label\">更改</label>\n    </div>\n    <div class=\"control-bar-right\">\n      <i class=\"demo-icon icon-undo\" (click)=\"discardAllEdit()\" tooltip=\"放弃所有更改\" placement=\"bottom\" delay=\"1000\"></i>\n      <i class=\"demo-icon icon-plus-1\" (click)=\"stageAllFiles()\" tooltip=\"暂存所有更改\" placement=\"bottom\" delay=\"1000\"></i>\n      <span class=\"control-bar-right-span\">{{otherFiles.length}}</span>\n    </div>\n  </div>\n\n  <div style=\"margin-top: 10px;\">\n    <!-- 这里展示otherfiles是否有问题？需要后期测试检验 -->\n    <div *ngFor=\"let fileitem of otherFiles\" >\n      <app-git-file-item [fileItem]=\"fileitem\" (onAddFile)=\"onAddFile($event)\" (onDiscardFile)=\"onDiscardFile($event)\"></app-git-file-item>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/packages/git-panel-package/views/git-filelist/git-filelist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitFilelistComponent", function() { return GitFilelistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_git_data_service__ = __webpack_require__("./src/packages/git-panel-package/services/git-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FILE_PATH_SEPARATOR = '/';
var GitFilelistComponent = (function () {
    function GitFilelistComponent(gitDataService) {
        this.gitDataService = gitDataService;
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GitFilelistComponent.prototype.ngOnInit = function () { };
    GitFilelistComponent.prototype.ngOnChanges = function () {
        console.log(this.fileList);
        var allFiles = this.fileList || [];
        var untrackedFiles = allFiles.filter(function (file, index) {
            return file.fileTracked === false;
        });
        var trackedFiles = allFiles.filter(function (file, index) {
            return file.fileTracked === true;
        });
        var stagedFiles = allFiles.filter(function (file, index) {
            return file.fileStaged === true;
        });
        var unStagedFiles = allFiles.filter(function (file, index) {
            return file.fileStaged === false;
        });
        var otherFiles = unStagedFiles.concat(untrackedFiles);
        otherFiles = Array.from(new Set(otherFiles));
        this.unStagedFiles = unStagedFiles;
        this.trackedFiles = trackedFiles;
        this.untrackedFiles = untrackedFiles;
        this.stagedFiles = stagedFiles; // 暂存的更改文件，在上方区域显示的文件
        this.otherFiles = otherFiles; // 除了staged阶段的文件，在下方区域显示的文件
    };
    // 每次点击“+”、“-”、“刷新”、“提交”等按钮，执行该方法，调用API，从服务器取得最新的文件（状态）列表
    GitFilelistComponent.prototype.fetchFilesFromServer = function () {
        var _this = this;
        console.log('updating files...');
        // TODO: 调用API，从服务器获取新的文件及其状态列表，替换该方法
        // this.updatedFileList = this.fileList;
        var self = this;
        self.gitDataService.getGitStatusData(self.gitProjectPath).subscribe(function (gitStatusData) {
            self.updatedFileList = gitStatusData;
            // this.updatedFileList = this.fileList.concat(
            //   {fileName: Math.ceil(Math.random() * 10) * Math.ceil(Math.random() * 10) +
            //     'fileheader.js', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true}
            //   );
            // emit至git-panel,更新父组件（git-panel）的文件列表，git-panel中弹出菜单的各种方法更可以操作数据
            // (单纯让git-panel中弹出菜单的各种方法操作数据，其实不需要emit，因为调用API，同样可以操作远程数据)
            self.event.emit(_this.updatedFileList);
        });
    };
    /**
   * 点击“+”按钮，将指定文件放到暂存区
   * 执行API：git add filename
   * @param file
   * @param nextFunction
   * @param errorFunction
   */
    GitFilelistComponent.prototype.gitAdd = function (file) {
        // 执行API：git add filename
        var fileRelativePath = this._getFileRelativePath(file);
        console.log('git add ' + fileRelativePath);
        return this.gitDataService.postGitAdd(this.gitProjectPath, fileRelativePath);
    };
    /**
     * 点击“放弃更改”按钮，放弃该文件的修改操作
     * 执行撤销修改API：git checkout -- filename
     * @param file
     * @param nextFunction
     * @param errorFunction
     */
    GitFilelistComponent.prototype.gitDiscard = function (file) {
        // 执行API：git checkout -- filename
        console.log('git checkout -- ' + file.filePath + file.fileName);
        var fileNameWithPath = this._getFileRelativePath(file);
        return this.gitDataService.discardAddedFile(this.gitProjectPath, fileNameWithPath);
    };
    GitFilelistComponent.prototype._getFileRelativePath = function (file) {
        var fileRelativePath = '';
        if (file.filePath.length <= 0) {
            fileRelativePath = file.fileName;
        }
        else {
            fileRelativePath = file.filePath + FILE_PATH_SEPARATOR + file.fileName;
        }
        return fileRelativePath;
    };
    /**
     * 点击“-”按钮，撤销暂存的文件
     * 执行API：git reset HEAD fileName
     */
    GitFilelistComponent.prototype.gitRemove = function (file) {
        // 执行API：git reset HEAD fileName
        var fileRelativePath = this._getFileRelativePath(file);
        console.log('git reset HEAD ' + fileRelativePath);
        return this.gitDataService.cancelStagedFile(this.gitProjectPath, fileRelativePath);
    };
    // 点击“放弃更改”按钮，放弃该文件的修改操作
    GitFilelistComponent.prototype.onDiscardFile = function (file) {
        var _this = this;
        this.gitDiscard(file).subscribe(function (next) {
            _this.fetchFilesFromServer();
        });
    };
    /**
     * 点击文件item上的+号按钮，进行git add，从服务器端传回更新后的文件（状态）列表
     * @param file
     */
    GitFilelistComponent.prototype.onAddFile = function (file) {
        var _this = this;
        // 这些操作只针对mock数据，后期需要删除
        // this.otherFiles.splice(this.otherFiles.indexOf(file), 1);
        // const addedFile = file;
        // addedFile.fileStaged = true;
        // addedFile.fileTracked = true;
        // this.stagedFiles.push(addedFile);
        // 保留
        this.gitAdd(file).subscribe(function (next) {
            _this.fetchFilesFromServer();
        });
    };
    /**
     * 点击文件item上的-号按钮，撤销上次git add操作，从服务器端传回更新后的文件（状态）列表
     * @param file
     */
    GitFilelistComponent.prototype.onRemoveFile = function (file) {
        var _this = this;
        // 这些操作只针对mock数据，后期需要删除
        // this.stagedFiles.splice(this.stagedFiles.indexOf(file), 1);
        // const removedFile = file;
        // removedFile.fileStaged = false;
        // removedFile.fileTracked = false;
        // this.otherFiles.push(removedFile);
        // 保留
        this.gitRemove(file).subscribe(function (next) {
            _this.fetchFilesFromServer();
        });
    };
    GitFilelistComponent.prototype.stageAllFiles = function () {
        // git add -A -- .
        console.log('git add -A -- .');
        this.fetchFilesFromServer();
    };
    GitFilelistComponent.prototype.removeAllStagedFiles = function () {
        // git reset -q HEAD -- .
        console.log('git reset -q HEAD -- .');
        this.fetchFilesFromServer();
    };
    GitFilelistComponent.prototype.discardAllEdit = function () {
        // git checkout -- .
        console.log('git checkout -- .');
        this.fetchFilesFromServer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GitFilelistComponent.prototype, "gitProjectPath", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GitFilelistComponent.prototype, "fileList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GitFilelistComponent.prototype, "event", void 0);
    GitFilelistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-git-filelist',
            template: __webpack_require__("./src/packages/git-panel-package/views/git-filelist/git-filelist.component.html"),
            styles: [__webpack_require__("./src/packages/git-panel-package/views/git-filelist/git-filelist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_git_data_service__["GitDataService"]])
    ], GitFilelistComponent);
    return GitFilelistComponent;
}());



/***/ }),

/***/ "./src/packages/git-panel-package/views/git-panel/git-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gitpanel {\n    background-color: #f6f6f6;\n    padding: 10px 14px;\n    /* position: absolute; */\n    bottom: 8px;\n    top: 37px;\n    right: 0px;\n    left: 0px;\n    font-size: 0.8rem;\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Chrome/Safari/Opera */\n    /* Konqueror */\n    -moz-user-select: none;\n    /* Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    /* Non-prefixed version, currently not supported by any browser */\n}\n\n.gitpanel .git-header .header-label {\n    white-space: nowrap;\n    /*强制span不换行*/\n    display: inline-block;\n    /*将span当做块级元素对待*/\n    width: calc(100% - 7rem);\n    /*限制宽度*/\n    overflow: hidden;\n    /*超出宽度部分隐藏*/\n    text-overflow: ellipsis;\n    /*超出部分以点号代替*/\n}\n\n.gitpanel .git-header .header-icon {\n    float: right;\n}\n\n.gitpanel .git-header .header-icon .demo-icon {\n    margin-left: 10px;\n}\n\n.dropdown-menu {\n    font-size: 0.8rem;\n}\n\n.gitpanel .git-header .git-input>input[type=\"text\"] {\n    width: 100%;\n    height: 2.0rem;\n    border: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/git-panel-package/views/git-panel/git-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gitpanel w-100 d-flex flex-column\">\n  <div *ngFor=\"let alert of alerts\">\n    <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\">{{ alert.msg }}</alert>\n  </div>\n  <div class=\"git-header d-flex flex-column\">\n    <div>\n      <div class=\"header-label\"><label>源代码管理器：GIT</label></div>\n      <div class=\"header-icon cursor-pointer\">\n        <!-- Notes：tooltip是ngx-bootstrap@2.0.5中的组件，新版（如3.0.0）组件会出现错误 -->\n        <i *ngIf=\"needInitGitReposity\" class=\"demo-icon icon-github\" tooltip=\"初始化存储库\" placement=\"bottom\" delay=\"1000\" (click)=\"initGitReposity()\"></i>\n        \n        <i *ngIf=\"!needInitGitReposity\" class=\"demo-icon icon-cw\" tooltip=\"刷新\" placement=\"bottom\" delay=\"1000\" (click)=\"refresh()\"></i>\n        <i *ngIf=\"!needInitGitReposity\" class=\"demo-icon icon-ok\" tooltip=\"提交\" placement=\"bottom\" delay=\"1000\" (click)=\"commit()\"></i>\n\n        <div *ngIf=\"!needInitGitReposity\" class=\"btn-group\" dropdown>\n          <i class=\"demo-icon icon-ellipsis\" id=\"button-basic\" dropdownToggle aria-controls=\"dropdown-basic\"></i>\n          <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" role=\"menu\" aria-labelledby=\"button-basic\">\n\n            <!-- <li role=\"menuitem\" (click)=\"asyncToGit()\">\n              <a class=\"dropdown-item menu-item-highlight\">同步</a>\n            </li> -->\n            <li role=\"menuitem\" (click)=\"gitPull()\">\n              <a class=\"dropdown-item menu-item-highlight\">拉取</a>\n            </li>\n            <!-- <li role=\"menuitem\" (click)=\"gitPullWithRebase()\">\n              <a class=\"dropdown-item menu-item-highlight\">拉取（变基）</a>\n            </li> -->\n            <li role=\"menuitem\" (click)=\"gitPush()\">\n              <a class=\"dropdown-item\">推送</a>\n            </li>\n            \n            <li class=\"divider dropdown-divider\"></li>\n            \n            <li role=\"menuitem\" (click)=\"gitReleaseBranch()\">\n              <a class=\"dropdown-item\">发布分支</a>\n            </li>\n\n            <li class=\"divider dropdown-divider\"></li>\n\n            <li role=\"menuitem\" (click)=\"gitRemoteAdd()\">\n              <a class=\"dropdown-item\">添加远程仓库</a>\n            </li>\n\n            <li class=\"divider dropdown-divider\"></li>\n\n            <!-- <li role=\"menuitem\" (click)=\"commitAllFiles()\">\n              <a class=\"dropdown-item\">全部提交</a>\n            </li>\n            <li role=\"menuitem\">\n              <a class=\"dropdown-item\">全部提交(修改)</a>\n            </li>\n            <li role=\"menuitem\">\n              <a class=\"dropdown-item\">全部提交(已签名)</a>\n            </li> -->\n            <li role=\"menuitem\" (click)=\"commitStagedFiles()\">\n              <a class=\"dropdown-item\">提交已暂存文件</a>\n            </li>\n            <li role=\"menuitem\" (click)=\"resetLastCommittedFiles()\">\n              <a class=\"dropdown-item\">撤销上次提交</a>\n            </li>\n\n            <!-- <li class=\"divider dropdown-divider\"></li>\n\n            <li role=\"menuitem\" (click)=\"removeAllStagedFiles()\">\n              <a class=\"dropdown-item\">取消暂存所有修改</a>\n            </li>\n            <li role=\"menuitem\">\n              <a class=\"dropdown-item\">放弃所有修改</a>\n            </li>\n            <li role=\"menuitem\" (click)=\"stageAllFiles()\">\n              <a class=\"dropdown-item\">暂存所有修改</a>\n            </li> -->\n          </ul>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"git-input\">\n      <input type=\"text\" class=\"comment-input\" placeholder=\"消息（按Ctrl+Enter提交）\" [(ngModel)]=\"comment\" (keyup.control.enter)=\"addCommentThenCommit()\" />\n    </div>\n  </div>\n\n  <div class=\"w-100\" style=\"flex: 1 1; overflow: auto;\">\n    <app-git-filelist *ngIf=\"!needInitGitReposity\" [fileList]=\"files\" [gitProjectPath]=\"gitProjectPath\" (event)=\"getData($event)\"></app-git-filelist>\n  </div>\n</div>\n\n<ng-template #btnPushOkRef>\n  <button class=\"k-button k-primary git-push-ok\" (click)=\"postPush()\">确定</button>\n</ng-template>\n<farris-dialog #GitPushDialog [buttons]=\"btnPushOkRef\">\n  push对话框\n</farris-dialog>\n\n<ng-template #btnPullOkRef>\n  <button class=\"k-button k-primary git-pull-ok\" (click)=\"postPull()\">确定</button>\n</ng-template>\n<farris-dialog #GitPullDialog [buttons]=\"btnPullOkRef\">\n  pull对话框\n</farris-dialog>\n\n<ng-template #btnRemoteAddRef>\n  <button class=\"k-button k-primary git-remote-add\" (click)=\"postGitRemoteAdd()\">添加</button>\n</ng-template>\n<farris-dialog #RemoteAddDialog [buttons]=\"btnRemoteAddRef\">\n  添加远程分支对话框\n</farris-dialog>\n\n<ng-template #btnReleaseBranchRef>\n  <button class=\"k-button k-primary git-release-banch\" (click)=\"postReleaseBranch()\">发布</button>\n</ng-template>\n<farris-dialog #ReleaseBranchDialog [buttons]=\"btnReleaseBranchRef\">\n  分支发布对话框\n</farris-dialog>\n\n"

/***/ }),

/***/ "./src/packages/git-panel-package/views/git-panel/git-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitPanelComponent", function() { return GitPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_file__ = __webpack_require__("./src/packages/git-panel-package/models/file.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_git_data_service__ = __webpack_require__("./src/packages/git-panel-package/services/git-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_mockdata__ = __webpack_require__("./src/packages/git-panel-package/constants/mockdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__farris_ui__ = __webpack_require__("./node_modules/@farris/ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__farris_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__farris_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__git_dialog_push_dialog_git_push_dialog_component__ = __webpack_require__("./src/packages/git-panel-package/views/git-dialog/push-dialog/git-push-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__git_panel_state__ = __webpack_require__("./src/packages/git-panel-package/views/git-panel/git-panel.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__git_dialog_remote_add_dialog_git_remote_add_dialog_component__ = __webpack_require__("./src/packages/git-panel-package/views/git-dialog/remote-add-dialog/git-remote-add-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__git_dialog_release_branch_dialog_git_release_branch_dialog_component__ = __webpack_require__("./src/packages/git-panel-package/views/git-dialog/release-branch-dialog/git-release-branch-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__git_dialog_pull_dialog_git_pull_dialog_component__ = __webpack_require__("./src/packages/git-panel-package/views/git-dialog/pull-dialog/git-pull-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var GitPanelComponent = (function () {
    function GitPanelComponent(gitDataService, modalService, msgService, notifyService, gitPanelState) {
        this.gitDataService = gitDataService;
        this.modalService = modalService;
        this.msgService = msgService;
        this.notifyService = notifyService;
        this.gitPanelState = gitPanelState;
        this.gitProjectPath = '';
        this.gitBranchPath = '';
        this.focusedNodePathInfo = '';
        this.needInitGitReposity = true;
        this.files = []; // 从git服务器获取的文件列表
        this.comment = '';
        this.message = '';
        this.alerts = [];
        this.mock = false; // 使用mock方式获取数据，默认false(仅自测时使用)
        this.gitRemoteAddWarning = '不存在远程仓库，请先添加远程仓库';
    }
    GitPanelComponent.prototype.ngOnInit = function () { };
    GitPanelComponent.prototype.setGitBranchPath = function (gitBranchPath) {
        this.gitBranchPath = gitBranchPath;
    };
    GitPanelComponent.prototype.setFocusedNodePathInfo = function (focusedNodePath) {
        this.focusedNodePathInfo = focusedNodePath;
    };
    // 已包含Git仓库时，重置needInitGitReposity Flag
    GitPanelComponent.prototype.setNeedInitGitReposity = function () {
        if (this.gitProjectPath && this.gitProjectPath.length > 0) {
            this.needInitGitReposity = false;
        }
        else {
            this.needInitGitReposity = true;
        }
    };
    GitPanelComponent.prototype.setGitProjectPath = function (relativeProjectPath) {
        console.log('Git project path is:' + relativeProjectPath);
        this.gitProjectPath = relativeProjectPath;
        this.setNeedInitGitReposity();
        // 动态获取gitProjectPath后，更新文件列表
        this.fetchFilesFromServer();
    };
    GitPanelComponent.prototype.ngAfterViewInit = function () {
        // 从远程Git服务器得到的文件列表，更新this.files
        this.fetchFilesFromServer();
    };
    // 该方法接收了fileList子组件发射的event数据，用于更新panel的this.files
    GitPanelComponent.prototype.getData = function (event) {
        this.files = event;
        console.log(this.files);
    };
    /**
     * 以下为panel顶部刷新、提交按钮的回调方法以及输入框、弹出菜单中的各按钮的回调方法
     * 点击“提交按钮”
     */
    GitPanelComponent.prototype.commit = function () {
        var _this = this;
        // 将暂存区的文件列表提交 git commit -m "xxx"
        // 首先检查input中是否已经输入message信息
        if (this.comment === '') {
            // console.log('Please input some message when committing...');
            this.alerts.push({
                type: 'warning',
                msg: "Please input some message when committing...",
                timeout: 3000
            });
            return false;
        }
        this.message = this.comment;
        // API: git commit -m "xxx"
        this.gitDataService.postGitCommit(this.gitProjectPath, this.message).subscribe(function () {
            console.log('Git commit -m' + _this.message);
            // 清空this.message
            _this.message = '';
            _this.comment = '';
            _this.fetchFilesFromServer();
        });
    };
    // 输入框回调方法(按下Ctrl+Enter，直接commit)
    GitPanelComponent.prototype.addCommentThenCommit = function () {
        this.message = this.comment;
        // 调用commit API，staged文件进行commit
        console.log('Git commit -m ' + this.message);
        this.comment = '';
    };
    // 点击弹出菜单中的“同步”按钮(该功能用处较少，优先级较低)
    GitPanelComponent.prototype.asyncToGit = function () {
        // API
        console.log('Async to git server...');
    };
    /**
     * 点击弹出菜单的“拉取”
     * API: git pull
     */
    GitPanelComponent.prototype.gitPull = function () {
        this.showPullDialog();
    };
    /**
     * post拉取
     */
    GitPanelComponent.prototype.postPull = function () {
        var _this = this;
        this.dlgGitPull.close();
        var userName = this.dlgGitPull.content.GitPullName;
        var password = this.dlgGitPull.content.GitPullPassword;
        if (null === userName || undefined === userName
            || null === password || undefined === password) {
            this.msgService.warning('执行pull操作时，检测到用户名或密码为空');
            return;
        }
        // 获取远程仓库
        this._getGitRemoteRepoisty(function (remoteReposity) {
            _this._postPull(_this.gitProjectPath, userName, password, remoteReposity);
        }, function () {
            _this.msgService.error(_this.gitRemoteAddWarning);
        });
    };
    // /**
    //  * post拉取变基
    //  */
    // postPullRebase() {
    //   this.dlgGitPullRebase.close();
    //   const userName = this.dlgGitPull.content.GitPullName;
    //   const password = this.dlgGitPull.content.GitPullPassword;
    //   if (null === userName || undefined === userName
    //     || null === password || undefined === password) {
    //     this.msgService.warning('执行pull操作时，检测到用户名或密码为空');
    //     return;
    //   }
    //   // 获取远程仓库
    //   this._getGitRemoteRepoisty(
    //     (remoteReposity) => {
    //       this._postPull(this.gitProjectPath, userName, password, remoteReposity);
    //     },
    //     () => {
    //       this.msgService.error(this.gitRemoteAddWarning);
    //     }
    //   );
    // }
    /**
     * 点击弹出菜单的“拉取（变基）”
     * API: git pull --rebase origin master
     */
    GitPanelComponent.prototype.gitPullWithRebase = function () {
        // this.showPullRebaseDialog();
    };
    /**
     * post 拉取基础方法
     * @param gitProjectPath git工程路径
     * @param userName 用户名
     * @param password 密码
     * @param remoteReposity 远程仓库名称
     * @param isRebase 是否拉取变基
     */
    GitPanelComponent.prototype._postPull = function (gitProjectPath, userName, password, remoteReposity, isRebase) {
        var _this = this;
        if (isRebase === void 0) { isRebase = false; }
        this.gitDataService.postGitPull(gitProjectPath, userName, password, remoteReposity, isRebase).subscribe(function (pullHttpResponse) {
            if (200 === pullHttpResponse.status) {
                _this.notifyService.success('拉取操作执行成功');
                // 调用git status -> fetch data from server -> update file list panel
                _this.fetchFilesFromServer();
            }
            else {
                _this.msgService.error('拉取操作执行失败。详细内容如下：' + pullHttpResponse.Message);
            }
        }, function (pullHttpErrorResponse) {
            _this.msgService.error('拉取操作执行失败。详细内容如下：' + pullHttpErrorResponse.error.Message);
        });
    };
    /**
     * 点击弹出菜单的“推送”
     * API: git push
     */
    GitPanelComponent.prototype.gitPush = function () {
        this.showPushDialog();
    };
    /**
     * 获取远程仓库（默认使用第一个）
     * api: git remote -v
     * @param successCallback 获取远程仓库成功后回调
     * @param errorCallback 获取远程仓库失败后回调
     */
    GitPanelComponent.prototype._getGitRemoteRepoisty = function (successCallback, errorCallback) {
        var _this = this;
        this.gitDataService.getGitRemote(this.gitProjectPath, null, true).subscribe(function (httpResponse) {
            if (null != httpResponse.body && httpResponse.body.length > 0) {
                var currentRemote = httpResponse.body[0];
                var remoteReposityName = currentRemote.name;
                if (null != remoteReposityName && remoteReposityName.length > 0) {
                    successCallback(remoteReposityName);
                }
                else {
                    errorCallback();
                }
            }
            else {
                _this.msgService.warning(_this.gitRemoteAddWarning);
                return;
            }
        }, function (httpErrorResponse) {
            _this.msgService.error('获取远程仓库失败。失败原因是：' + httpErrorResponse.error.Message);
        });
    };
    /**
     * post推送
     */
    GitPanelComponent.prototype.postPush = function () {
        var _this = this;
        this.dlgGitPush.close();
        var branchName = this.gitBranchPath;
        if (null === branchName || undefined === branchName) {
            this.msgService.warning('执行push操作时，检测到本地分支为空');
            return;
        }
        var userName = this.dlgGitPush.content.GitPushName;
        var password = this.dlgGitPush.content.GitPushPassword;
        if (null === userName || undefined === userName
            || null === password || undefined === password) {
            this.msgService.warning('执行push操作时，检测到用户名或密码为空');
            return;
        }
        // 获取远程仓库
        this._getGitRemoteRepoisty(function (remoteReposity) {
            _this.gitDataService.postGitPush(_this.gitProjectPath, remoteReposity, branchName, userName, password).subscribe(function (httpResponse) {
                if (httpResponse.status === 200) {
                    _this.notifyService.success('推送成功');
                    // 调用git status -> fetch data from server -> update file list panel
                    _this.fetchFilesFromServer();
                }
                else {
                    _this.msgService.warning('推送失败');
                }
            }, function (httpErrorResponse) {
                _this.msgService.error('Git Push 失败。失败原因是：' + httpErrorResponse.error.Message);
            });
        }, function () {
            _this.msgService.error(_this.gitRemoteAddWarning);
        });
    };
    /**
     * 点击弹出菜单的“发布分支”
     * API: git push -u origin master
     */
    GitPanelComponent.prototype.gitReleaseBranch = function () {
        this.showReleaseBranchDialog();
    };
    /**
     * post发布分支
     */
    GitPanelComponent.prototype.postReleaseBranch = function () {
        var _this = this;
        this.dlgGitReleaseBranch.close();
        // 获取当前分支
        var currentBranch = this.gitBranchPath;
        if (null === currentBranch || undefined === currentBranch) {
            this.msgService.warning('发布分支时，检测到本地分支为空');
            return;
        }
        var userName = this.dlgGitReleaseBranch.content.UserName;
        var password = this.dlgGitReleaseBranch.content.Password;
        if (null === userName || undefined === userName
            || null === password || undefined === password) {
            this.msgService.warning('执行push操作时，检测到用户名或密码为空');
            return;
        }
        // 获取远程仓库
        this._getGitRemoteRepoisty(function (remoteReposity) {
            _this.gitDataService.postReleaseBranch(_this.gitProjectPath, remoteReposity, currentBranch, userName, password).subscribe(function (httpResponse) {
                if (httpResponse.status === 200) {
                    _this.notifyService.success('发布分支成功');
                }
                else {
                    _this.msgService.warning('发布分支失败');
                }
            }, function (httpErrorResponse) {
                _this.msgService.error('发布分支失败。失败原因是：' + httpErrorResponse.error.Message);
            });
        }, function () {
            _this.msgService.error(_this.gitRemoteAddWarning);
        });
    };
    /**
     * 添加远程仓库
     */
    GitPanelComponent.prototype.gitRemoteAdd = function () {
        this.showRemoteAddDialog();
    };
    /**
     * post待添加的远程仓库
     */
    GitPanelComponent.prototype.postGitRemoteAdd = function () {
        var _this = this;
        this.dlgGitRemoteAdd.close();
        var name = this.dlgGitRemoteAdd.content.RemoteReposityName;
        if (undefined === name || null === name || name.length <= 0) {
            this.msgService.warning('指定远程仓库的name不能为空');
            return;
        }
        var remoteUrl = this.dlgGitRemoteAdd.content.RemoteReposityUrl;
        if (undefined === remoteUrl || null === remoteUrl || remoteUrl.length <= 0) {
            this.msgService.warning('指定远程仓库的url不能为空');
            return;
        }
        // todo：远程仓库url的合法性检测
        // 执行推送
        this.gitDataService.postGitRemoteAdd(this.gitProjectPath, name, remoteUrl).subscribe(function (remoteAddHttpResponse) {
            if (200 === remoteAddHttpResponse.status) {
                _this.notifyService.success('成功添加远程仓库');
            }
            else {
                _this.msgService.error('添加远程仓库失败');
            }
        }, function (httpErrorResponse) {
            _this.msgService.error('git remote add失败。失败原因是：' + httpErrorResponse.error.Message);
        });
    };
    /**
     * 发布分支对话框
     */
    GitPanelComponent.prototype.showReleaseBranchDialog = function () {
        this.dlgGitReleaseBranch = this.modalService.show(__WEBPACK_IMPORTED_MODULE_8__git_dialog_release_branch_dialog_git_release_branch_dialog_component__["GitReleaseBranchDialogComponent"], {
            title: '发布分支',
            width: 350, height: 250,
            buttons: this.btnReleaseBranch,
            showButtons: true,
            showMaxButton: false,
            resizable: false
        });
    };
    /**
     * 远程仓库添加对话框
     */
    GitPanelComponent.prototype.showRemoteAddDialog = function () {
        this.dlgGitRemoteAdd = this.modalService.show(__WEBPACK_IMPORTED_MODULE_7__git_dialog_remote_add_dialog_git_remote_add_dialog_component__["GitRemoteAddDialogComponent"], {
            title: '添加远程仓库',
            width: 350, height: 250,
            buttons: this.btnRemoteAdd,
            showButtons: true,
            showMaxButton: false,
            resizable: false
        });
    };
    /**
     * 拉取对话框
     */
    GitPanelComponent.prototype.showPullDialog = function () {
        this.dlgGitPull = this.modalService.show(__WEBPACK_IMPORTED_MODULE_9__git_dialog_pull_dialog_git_pull_dialog_component__["GitPullDialogComponent"], {
            title: 'Git Pull',
            width: 400, height: 300,
            buttons: this.btnPullOk,
            showButtons: true,
            showMaxButton: false,
            resizable: false
        });
    };
    /**
     * 推送对话框
     */
    GitPanelComponent.prototype.showPushDialog = function () {
        this.dlgGitPush = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__git_dialog_push_dialog_git_push_dialog_component__["GitPushDialogComponent"], {
            title: 'Git Push',
            width: 400, height: 300,
            buttons: this.btnPushOk,
            showButtons: true,
            showMaxButton: false,
            resizable: false
        });
    };
    // 点击弹出菜单“全部提交”
    GitPanelComponent.prototype.commitAllFiles = function () {
        console.log('git add .');
        this.commitStagedFiles();
        // 调用git status -> fetch data from server -> update file list panel
    };
    /**
     * 点击弹出菜单“提交已暂存文件”
     * API: git commit -m "xxx"
     */
    GitPanelComponent.prototype.commitStagedFiles = function () {
        console.log('Committing staged files to server...');
        this.commit();
    };
    /**
     * 点击弹出菜单“撤销上次提交”
     */
    GitPanelComponent.prototype.resetLastCommittedFiles = function () {
        var _this = this;
        // API: git reset HEAD~
        console.log('Resetting last committed files...');
        this.gitDataService.cancelLastGitCommit(this.gitProjectPath).subscribe(function () {
            console.log('git reset HEAD~');
            _this.fetchFilesFromServer();
        });
    };
    // 点击弹出菜单“暂存所有修改”
    GitPanelComponent.prototype.stageAllFiles = function () {
        // API: git add .
        console.log('Staging all files...');
        // 调用git status -> fetch data from server -> update file list panel
        this.fetchFilesFromServer();
    };
    // 点击弹出菜单“取消暂存所有修改”
    GitPanelComponent.prototype.removeAllStagedFiles = function () {
        // API: git reset HEAD .
        console.log('Removing all staged files...');
        // 调用git status -> fetch data from server -> update file list panel
        this.fetchFilesFromServer();
    };
    /**
     * API: 从服务器获取文件列表
     * @example this.files = newFileArray
     */
    GitPanelComponent.prototype.fetchFilesFromServer = function () {
        if (this.mock) {
            this.fetchFilesByMock();
            return;
        }
        if (!this.gitProjectPath || this.gitProjectPath.length <= 0) {
            console.log('When fetching Files From the Server, project path is  null');
            return;
        }
        var self = this;
        self.gitDataService.getGitStatusData(self.gitProjectPath).subscribe(function (data) {
            self.files = data;
            console.log(' Already got file list from server');
            console.log(self.files);
        });
        console.log('Getting file list from server...');
    };
    /**
     * 使用mock方式fetch Files Data
     */
    GitPanelComponent.prototype.fetchFilesByMock = function () {
        var _this = this;
        var fileInfoArray = __WEBPACK_IMPORTED_MODULE_3__constants_mockdata__["FILE_INFO"];
        this.files = [];
        fileInfoArray.forEach(function (element) {
            var tempFileInfo = new __WEBPACK_IMPORTED_MODULE_1__models_file__["FileInfo"](element);
            _this.files.push(tempFileInfo);
        });
    };
    /**
     * 点击“刷新”按钮
     */
    GitPanelComponent.prototype.refresh = function () {
        // 重新从服务器返回文件（状态）列表
        this.fetchFilesFromServer();
    };
    /**
     * 点击“初始化存储库”按钮
     */
    GitPanelComponent.prototype.initGitReposity = function () {
        var _this = this;
        var self = this;
        self.gitDataService.postGitInit(self.focusedNodePathInfo).subscribe(function (data) {
            console.log('Init git reposity done');
            // 成功执行 git init
            self.gitProjectPath = self.focusedNodePathInfo;
            _this.setNeedInitGitReposity();
            // 发射git init事件
            _this.gitPanelState.gitInit.emit(_this);
            self.fetchFilesFromServer();
        }, function (error) {
            console.log('Git init observable object is null');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btnPushOkRef'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], GitPanelComponent.prototype, "btnPushOk", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btnPullOkRef'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], GitPanelComponent.prototype, "btnPullOk", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btnRemoteAddRef'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], GitPanelComponent.prototype, "btnRemoteAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btnReleaseBranchRef'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], GitPanelComponent.prototype, "btnReleaseBranch", void 0);
    GitPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-git-panel',
            template: __webpack_require__("./src/packages/git-panel-package/views/git-panel/git-panel.component.html"),
            styles: [__webpack_require__("./src/packages/git-panel-package/views/git-panel/git-panel.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__farris_ui__["BsModalService"]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_git_data_service__["GitDataService"], __WEBPACK_IMPORTED_MODULE_4__farris_ui__["BsModalService"],
            __WEBPACK_IMPORTED_MODULE_4__farris_ui__["MessagerService"], __WEBPACK_IMPORTED_MODULE_4__farris_ui__["NotifyService"], __WEBPACK_IMPORTED_MODULE_6__git_panel_state__["GitPanelState"]])
    ], GitPanelComponent);
    return GitPanelComponent;
}());



/***/ }),

/***/ "./src/packages/git-panel-package/views/git-panel/git-panel.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitPanelState", function() { return GitPanelState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GitPanelState = (function () {
    function GitPanelState() {
        this.gitInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GitPanelState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GitPanelState);
    return GitPanelState;
}());



/***/ }),

/***/ "./src/packages/git-panel-package/views/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitPanelPackageView", function() { return GitPanelPackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__git_panel_git_panel_component__ = __webpack_require__("./src/packages/git-panel-package/views/git-panel/git-panel.component.ts");
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


var GitPanelPackageView = (function (_super) {
    __extends(GitPanelPackageView, _super);
    function GitPanelPackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        _this.element = cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__git_panel_git_panel_component__["GitPanelComponent"]).create(injector);
        return _this;
    }
    GitPanelPackageView.prototype.serialize = function () { };
    GitPanelPackageView.prototype.destroy = function () {
    };
    return GitPanelPackageView;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["PackageView"]));



/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[]);
//# sourceMappingURL=git-panel-package.module.chunk.js.map