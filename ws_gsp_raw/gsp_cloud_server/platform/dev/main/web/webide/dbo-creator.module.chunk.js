webpackJsonp(["dbo-creator.module"],{

/***/ "./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);



/**
 * @hidden
 */
const isPresent = (value) => value !== null && value !== undefined;
/* unused harmony export isPresent */

/**
 * @hidden
 */
const isBlank = (value) => value === null || value === undefined;
/* unused harmony export isBlank */

/**
 * @hidden
 */
const isArray = (value) => Array.isArray(value);
/* unused harmony export isArray */

/**
 * @hidden
 */
const isTruthy = (value) => !!value;
/* unused harmony export isTruthy */

/**
 * @hidden
 */
const isNullOrEmptyString = (value) => isBlank(value) || (value.trim && value.trim().length === 0);
/* harmony export (immutable) */ __webpack_exports__["isNullOrEmptyString"] = isNullOrEmptyString;

/**
 * @hidden
 */
const isChanged = (propertyName, changes, skipFirstChange = true) => (changes[propertyName] && (!changes[propertyName].isFirstChange() || !skipFirstChange) &&
    changes[propertyName].previousValue !== changes[propertyName].currentValue);
/* unused harmony export isChanged */

/**
 * @hidden
 */
const anyChanged = (propertyNames, changes, skipFirstChange = true) => propertyNames.some(name => isChanged(name, changes, skipFirstChange));
/* unused harmony export anyChanged */

/**
 * @hidden
 */
const observe = (list) => Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_merge__["merge"])(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(list), list.changes);
/* unused harmony export observe */

/**
 * @hidden
 */
const isUniversal = () => typeof document === 'undefined';
/* unused harmony export isUniversal */

/**
 * @hidden
 */
const extractFormat = (format) => {
    if (!isNullOrEmptyString(format) && format.startsWith('{0:')) {
        return format.slice(3, format.length - 1);
    }
    return format;
};
/* unused harmony export extractFormat */

/**
 * @hidden
 */
const not = (fn) => (...args) => !fn.apply(null, args);
/* unused harmony export not */

/**
 * @hidden
 */
const or = (...conditions) => (value) => conditions.reduce((acc, x) => acc || x(value), false);
/* unused harmony export or */

/**
 * @hidden
 */
const and = (...conditions) => (value) => conditions.reduce((acc, x) => acc && x(value), true);
/* unused harmony export and */

/**
 * @hidden
 */
const Skip = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]("Skip");
/* unused harmony export Skip */
 // tslint:disable-line:variable-name
/**
 * @hidden
 */
const guid = () => {
    let id = "";
    let i;
    let random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0; // tslint:disable-line:no-bitwise
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            id += "-";
        }
        // tslint:disable-next-line:no-bitwise
        id += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return id;
};
/* unused harmony export guid */



/***/ }),

/***/ "./node_modules/immutable/dist/immutable.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Immutable = factory());
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function Iterator(next) {
      this.next = next;
    }

    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); }
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(Map, KeyedCollection);

    // @pragma Construction

    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
      return emptyMap().withMutations(function(map ) {
        for (var i = 0; i < keyValues.length; i += 2) {
          if (i + 1 >= keyValues.length) {
            throw new Error('Missing value for key: ' + keyValues[i]);
          }
          map.set(keyValues[i], keyValues[i + 1]);
        }
      });
    };

    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };

    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };

    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      if (this._map && !this._map.has(k)) {
        var defaultVal = this._defaultValues[k];
        if (v === defaultVal) {
          return this;
        }
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection);

    // @pragma Construction

    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    Set.of = function(/*...values*/) {
      return this(arguments);
    };

    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findEntry: function(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    findLastEntry: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },

    findLastKey: function(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    lastKeyOf: function(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    keySeq: function() {
      return Range(0, this.size);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));

/***/ }),

/***/ "./src/packages/dbo-creator/dbo-creator.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DboCreatorModule", function() { return DboCreatorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dbo_creator_dbo_creator_component__ = __webpack_require__("./src/packages/dbo-creator/dbo-creator/dbo-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__package__ = __webpack_require__("./src/packages/dbo-creator/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabledesigner_frame_view_tabledesigner_frame_database_object_service__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/database-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabledesigner_frame_view_tabledesigner_frame_table_designer_module__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-designer.module.ts");
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










var DboCreatorModule = (function (_super) {
    __extends(DboCreatorModule, _super);
    function DboCreatorModule(cfr, injector) {
        var _this = _super.call(this) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    DboCreatorModule.prototype.initPackage = function (gsp) {
        this.package = new __WEBPACK_IMPORTED_MODULE_7__package__["DBOCreateWizardPackage"](gsp, this.cfr, this.injector);
    };
    DboCreatorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dropdowns__["DropDownsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__tabledesigner_frame_view_tabledesigner_frame_table_designer_module__["TableDesignerModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__tabledesigner_frame_view_tabledesigner_frame_database_object_service__["DatabaseObjectService"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dbo_creator_dbo_creator_component__["DboCreatorComponent"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__dbo_creator_dbo_creator_component__["DboCreatorComponent"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], DboCreatorModule);
    return DboCreatorModule;
}(__WEBPACK_IMPORTED_MODULE_6__farris_ide_devkit__["PackageModule"]));

//# sourceMappingURL=dbo-creator.module.js.map

/***/ }),

/***/ "./src/packages/dbo-creator/dbo-creator/dbo-create-wizard-package-view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DboCreateWizardPackageView", function() { return DboCreateWizardPackageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dbo_creator_component__ = __webpack_require__("./src/packages/dbo-creator/dbo-creator/dbo-creator.component.ts");
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


var DboCreateWizardPackageView = (function (_super) {
    __extends(DboCreateWizardPackageView, _super);
    function DboCreateWizardPackageView(serializedState, cfr, injector) {
        var _this = _super.call(this, serializedState) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        _this.element = cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__dbo_creator_component__["DboCreatorComponent"]).create(injector);
        return _this;
    }
    return DboCreateWizardPackageView;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["PackageView"]));



/***/ }),

/***/ "./src/packages/dbo-creator/dbo-creator/dbo-creator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".templateBlock\r\n{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.infoBlock {\r\n  width: 100%;\r\n  min-width: 360px;\r\n}\r\n\r\n.dboName,\r\n.dboCode,\r\n.dboType,\r\n.dboDescription {\r\n    display: block;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin-top: 1rem;\r\n    margin-left: 1.5rem;\r\n}\r\n\r\n.infoBlock label\r\n{\r\n    width: 100px;\r\n}\r\n\r\n.k-textbox.form-control {\r\n  height: 30px;\r\n}\r\n\r\n.kendo-dropdownlist {\r\n  height: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/dbo-creator/dbo-creator/dbo-creator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"infoBlock\" >\r\n  <div class=\"dboCode\">\r\n    <span class=\"ui-float-label\">\r\n      <label for=\"dboCode\" style=\"display: inline-block; width: 40px;\">编号</label>\r\n<input id=\"dboCode\" class=\"form-control textInput\" type=\"text\" style=\"display: inline-block; width: 300px;\"\r\n        kendoTextBox [(ngModel)]=\"code\" #dboCode=\"ngModel\" required>\r\n    </span>\r\n    <div [hidden]=\"dboCode.valid || dboCode.pristine\" class=\"alert-danger\">\r\n      Code is required\r\n    </div>\r\n  </div>\r\n  <div class=\"dboName\">\r\n    <span class=\"ui-float-label\">\r\n      <label for=\"dboName\" style=\"display: inline-block; width: 40px;\">名称</label>\r\n<input id=\"dboName\" class=\"form-control textInput\" style=\"display: inline-block; width: 300px;\" type=\"text\"\r\n        kendoTextBox [(ngModel)]=\"name\" #dboName=\"ngModel\" required>\r\n    </span>\r\n    <div [hidden]=\"dboName.valid || dboName.pristine\" class=\"alert-danger\">\r\n      Name is required\r\n    </div>\r\n  </div>\r\n<div class=\"dboType\">\r\n    <span class=\"ui-float-label;\" >\r\n      <label for=\"dboType\" style=\"display: inline-block; width: 40px;\">类型</label>\r\n      <kendo-dropdownlist class=\"kendo-dropdownlist\" style=\"display: inline-block; width: 300px; height:30px;\"\r\n  #typeChoose [defaultItem]=\"defaultItem\"  [data]=\"dboTypes\"\r\n        [textField]=\"'text'\" [valueField]=\"'value'\"  [valuePrimitive]=\"true\" (selectionChange)=\"selectType($event)\">\r\n      </kendo-dropdownlist>\r\n    </span>\r\n  </div>\r\n  <ng-template #modalFooter>\r\n    <div class=\"btns\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary btn-sm px-3 mx-2\" (click)=\"okClick()\">确定</button>\r\n      <button type=\"button\" class=\"btn btn-outline-secondary btn-sm px-3 mx-2\" (click)=\"clickCloseModal()\">取消</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<app-error-stack-window [triggerShowWindow]=\"showErrorStackWindow\" [errorStackHead]=\"errorStackHead\" [errorStack]=\"errorStack\"></app-error-stack-window>\r\n"

/***/ }),

/***/ "./src/packages/dbo-creator/dbo-creator/dbo-creator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DboCreatorComponent", function() { return DboCreatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dbotypes__ = __webpack_require__("./src/packages/dbo-creator/dbotypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabledesigner_frame_view_tabledesigner_frame_utils_lib_databaseobjecttable__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjecttable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabledesigner_frame_view_tabledesigner_frame_utils_lib_databaseobjectcolumn__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectcolumn.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabledesigner_frame_view_tabledesigner_frame_utils_lib_databaseobjectspvf__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectspvf.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabledesigner_frame_view_tabledesigner_frame_database_object_service__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/database-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_grid_dist_es2015_utils__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es2015/utils.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DboCreatorComponent = (function () {
    function DboCreatorComponent(service) {
        this.service = service;
        this.createDboEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dboTypes = __WEBPACK_IMPORTED_MODULE_1__dbotypes__["DboTypes"];
        this.createDbo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.defaultItem = { index: 0, text: '表', value: __WEBPACK_IMPORTED_MODULE_1__dbotypes__["DboType"].Table };
        /**
        * 异常堆栈窗口是否显示
        */
        this.showErrorStackWindow = false;
        this.errorToken = '#GSPDBOError#';
        this.savedErrorToken = '#saved#';
        this.modalClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createDboSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DboCreatorComponent.prototype.ngOnInit = function () {
        // this.isProjectShown = false;
        this.relativePath = this.path.substring(1, this.path.lastIndexOf('/'));
        this.selectedType = 0;
    };
    /**
   * 关闭模态框
   */
    DboCreatorComponent.prototype.clickCloseModal = function () {
        this.modalClosed.emit();
    };
    DboCreatorComponent.prototype.okClick = function () {
        var _this = this;
        var dbo = null;
        if (Object(__WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(this.code)) {
            alert('编号不能为空');
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_grid_dist_es2015_utils__["isNullOrEmptyString"])(this.name)) {
            alert('名称不能为空');
            return;
        }
        if (this.selectedType === 0) {
            dbo = this.BuildNewTable();
        }
        else {
            dbo = new __WEBPACK_IMPORTED_MODULE_4__tabledesigner_frame_view_tabledesigner_frame_utils_lib_databaseobjectspvf__["DatabaseObjectSPVF"](this.code, this.name, this.selectedType);
        }
        this.service.createDatabaseObject(this.relativePath, '', dbo).subscribe(function () {
            alert('创建成功。');
            _this.modalClosed.emit();
            _this.createDboSuccess.emit(_this.path);
            _this.createDboEvent.emit(_this.path + '/' + _this.code + '.dbo');
        }, function (error) {
            var head = '创建失败。';
            var errorString = (error.text ? error.text() : error.text);
            _this.handleErrorString(head, errorString);
        });
    };
    /**
   * 显示异常堆栈
   */
    DboCreatorComponent.prototype.showErrorStack = function (errorHead, errorMessage) {
        this.errorStackHead = errorHead;
        this.errorStack = errorMessage;
        this.showErrorStackWindow = !this.showErrorStackWindow;
    };
    /**
       * 异常处理
       * @param head
       * @param errorString
       */
    DboCreatorComponent.prototype.handleErrorString = function (head, errorString) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_6_util__["isNullOrUndefined"])(errorString) && errorString.includes(this.errorToken)) {
            var strings = errorString.split(this.errorToken);
            var errorMessage = strings[1];
            this.showErrorStack(head, errorMessage);
        }
        else {
            this.showErrorStack(head, errorString);
        }
    };
    /**
    * 返回值类型切换事件
    * @param selectedIndex 返回值类型集合中的索引
    */
    DboCreatorComponent.prototype.selectType = function (_a) {
        var value = _a.value;
        this.selectedType = value;
    };
    DboCreatorComponent.prototype.BuildNewTable = function () {
        var table = new __WEBPACK_IMPORTED_MODULE_2__tabledesigner_frame_view_tabledesigner_frame_utils_lib_databaseobjecttable__["DatabaseObjectTable"](this.code, this.name);
        var column = new __WEBPACK_IMPORTED_MODULE_3__tabledesigner_frame_view_tabledesigner_frame_utils_lib_databaseobjectcolumn__["DatabaseObjectColumn"]();
        column.code = 'id';
        column.name = 'id';
        column.isUnique = true;
        column.isNullable = false;
        column.ifPrimaryKey = true;
        table.columns.push(column);
        return table;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalFooter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DboCreatorComponent.prototype, "modalFooter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DboCreatorComponent.prototype, "createDboEvent", void 0);
    DboCreatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dbo-creator',
            template: __webpack_require__("./src/packages/dbo-creator/dbo-creator/dbo-creator.component.html"),
            styles: [__webpack_require__("./src/packages/dbo-creator/dbo-creator/dbo-creator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__tabledesigner_frame_view_tabledesigner_frame_database_object_service__["DatabaseObjectService"]])
    ], DboCreatorComponent);
    return DboCreatorComponent;
}());



/***/ }),

/***/ "./src/packages/dbo-creator/dbotypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DboType", function() { return DboType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DboTypes", function() { return DboTypes; });
var DboType;
(function (DboType) {
    /// <summary>
    /// 表
    /// </summary>
    DboType[DboType["Table"] = 0] = "Table";
    /// <summary>
    /// 视图
    /// </summary>
    DboType[DboType["View"] = 1] = "View";
    /// <summary>
    /// 函数
    /// </summary>
    DboType[DboType["Function"] = 2] = "Function";
    /// <summary>
    /// 存储过程
    /// </summary>
    DboType[DboType["StoreProcedure"] = 5] = "StoreProcedure";
})(DboType || (DboType = {}));
var DboTypes = [
    // { index: 0, text: '', value: DboType.Table}
    { index: 1, text: '视图(功能完善中)', value: DboType.View },
    { index: 2, text: '函数(功能完善中)', value: DboType.Function },
    { index: 5, text: '存储过程(功能完善中)', value: DboType.StoreProcedure }
];


/***/ }),

/***/ "./src/packages/dbo-creator/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBOCreateWizardPackage", function() { return DBOCreateWizardPackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__ = __webpack_require__("./node_modules/@farris/ide-devkit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dbo_creator_dbo_creator_component__ = __webpack_require__("./src/packages/dbo-creator/dbo-creator/dbo-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dbo_creator_dbo_create_wizard_package_view__ = __webpack_require__("./src/packages/dbo-creator/dbo-creator/dbo-create-wizard-package-view.ts");
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



var DBOCreateWizardPackage = (function (_super) {
    __extends(DBOCreateWizardPackage, _super);
    function DBOCreateWizardPackage(gsp, cfr, injector) {
        var _this = _super.call(this, gsp) || this;
        _this.cfr = cfr;
        _this.injector = injector;
        return _this;
    }
    DBOCreateWizardPackage.prototype.activate = function (state) {
        var _this = this;
        this.gsp.eventBus.on(null, null, 'Command:newDbo', this, function () { return _this.showModal(); });
    };
    DBOCreateWizardPackage.prototype.deactivate = function () { };
    DBOCreateWizardPackage.prototype.serialize = function () {
        return {
            FormCreateWizardPackageViewState: this.packageView.serialize()
        };
    };
    DBOCreateWizardPackage.prototype.toggle = function () { };
    DBOCreateWizardPackage.prototype.getComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_1__dbo_creator_dbo_creator_component__["DboCreatorComponent"];
    };
    DBOCreateWizardPackage.prototype.showModal = function () {
        var _this = this;
        var packageView = new __WEBPACK_IMPORTED_MODULE_2__dbo_creator_dbo_create_wizard_package_view__["DboCreateWizardPackageView"]({}, this.cfr, this.injector);
        var title = '新建数据库对象';
        var comp = packageView.getElement().instance;
        var isShow = true;
        this.gsp.eventBus.requestFor('FileTreePanelPackage', 'dboCreate', 'AccessFileTree', { action: '6' }, function (nodeInfo) {
            if (!nodeInfo) {
                alert('请先选择dbo存放目录');
                isShow = false;
                return;
            }
            if (!nodeInfo.nodePath) {
                alert('请先选择dbo存放目录');
                isShow = false;
                return;
            }
            if (nodeInfo.nodeType === 'folder' || nodeInfo.nodeType === 'project') {
                comp.path = nodeInfo.nodePath + '/';
            }
            else if (nodeInfo.nodeType === 'file') {
                var handledPath = nodeInfo.nodePath.replace(/\\/g, '/');
                comp.path = handledPath.substring(0, handledPath.lastIndexOf('/'));
            }
            else {
                console.log('unknowed type');
                alert('请选择合适的存放目录！');
                isShow = false;
                return;
            }
        });
        if (!isShow) {
            return;
        }
        if (comp) {
            comp.createDboSuccess.subscribe(function () { _this.refreshTree(); });
            comp.createDboEvent.subscribe(function (data) { return _this.createDbo(data); });
        }
        var modalPanel = this.gsp.workspace.addModalPanel({
            item: {
                element: packageView.getElement(),
                modalOptions: {
                    title: title,
                    width: 420,
                    height: 320,
                    buttons: comp.modalFooter,
                    showMaxButton: false
                }
            }
        });
        comp.modalClosed.subscribe(function () { return modalPanel.destroy(); });
    };
    DBOCreateWizardPackage.prototype.createDbo = function (data) {
        // this.gsp.eventBus.post(DBOCreateWizardPackage, this.id, 'Command:CreateMetadata', data);
        this.gsp.workspace.open(data);
    };
    DBOCreateWizardPackage.prototype.refreshTree = function () {
        this.gsp.eventBus.requestFor('FileTreePanelPackage', 'dboCreate', 'AccessFileTree', { action: '5' }, function () {
            console.log('event has been deal done');
        });
    };
    return DBOCreateWizardPackage;
}(__WEBPACK_IMPORTED_MODULE_0__farris_ide_devkit__["Package"]));



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/base/listbase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBase", function() { return ListBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("./node_modules/immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapbase__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/base/mapbase.ts");




var ListBase = (function () {
    /**
     * 构造函数
     */
    function ListBase(value) {
        /**
         * 选中新节点
         */
        this.selectNewItem = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        /**
         * 视图层刷新事件
         */
        this.refreshView = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(value)) {
            return;
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_0_immutable__["List"].isList(value)) {
                this.data = this.getListOfMapBase(value);
            }
            else {
                this.data = this.getListOfMapBase(Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])(value));
            }
        }
        this.selectNewSubscriptions = new Array();
    }
    ListBase.prototype.equals = function (value) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["is"])(this.data, value.data);
    };
    ListBase.prototype.getListOfMapBase = function (values) {
        var list = values;
        var _loop_1 = function (i) {
            list.update(i, function (value) { return new __WEBPACK_IMPORTED_MODULE_3__mapbase__["MapBase"](values[i]); });
        };
        for (var i = 0; i < values.size; i++) {
            _loop_1(i);
        }
        return list;
    };
    ListBase.prototype.setSelectIndex = function (index) {
        // if (this.currentSelectIndex === index && index != 0) {
        // 万一是由于删除引起的刷新，则虽然选中的索引不变，但是仍然需要刷新。
        // 本判断可避免多次重复刷新
        // 但是由于number类型初始值为0，所以无法避免第一行的重复选中导致的刷新
        // return;
        // }
        this.unsubscribeSelectNewItem();
        this.currentSelectIndex = +index;
        this.selectNewItem.next(this.get(this.currentSelectIndex));
        this.subscribeSelectNewItem(this.currentSelectItem);
    };
    ListBase.prototype.setSelectIndexByID = function (id) {
        var index = this.getIndexByID(id);
        this.setSelectIndex(index);
    };
    ListBase.prototype.getItemByID = function (id) {
        var _this = this;
        var list = this.data;
        for (var i = 0; i < list.size; i++) {
            var column = list.get(i);
            var currentID = column.get('id');
            if (id === currentID) {
                var subscription = column.refreshView.subscribe(function (item) {
                    _this.refreshViewLayer();
                });
                return column;
            }
        }
        return null;
    };
    ListBase.prototype.getI18nItem = function () {
        var _this = this;
        var items = new Array();
        var list = this.data;
        for (var i = 0; i < list.size; i++) {
            var column = list.get(i);
            var isMultiLanguage = column.get('isMultiLanguage');
            if (isMultiLanguage) {
                var subscription = column.refreshView.subscribe(function (item) {
                    _this.refreshViewLayer();
                });
                items.push(column);
            }
        }
        return items;
    };
    /**
     * 刷新视图层
     */
    ListBase.prototype.refreshViewLayer = function () {
        this.refreshView.next(this);
    };
    /**
     * 查
     * @param index
     */
    ListBase.prototype.get = function (index) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.data)) {
            return;
        }
        return this.data.get(+index);
    };
    /**
     * 改
     * @param index
     * @param updater
     */
    ListBase.prototype.update = function (index, updater) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.data)) {
            return;
        }
        this.data = this.data.update(index, updater);
        this.refreshViewLayer();
    };
    ListBase.prototype.set = function (index, newValue) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.data)) {
            return;
        }
        this.data = this.data.set(index, newValue);
        this.refreshViewLayer();
    };
    /**
     * 删
     * @param index
     */
    ListBase.prototype.remove = function (index) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.data)) {
            return;
        }
        this.data = this.data.delete(+index);
        this.refreshViewLayer();
    };
    /**
     * 增在最前
     * @param value
     */
    ListBase.prototype.unshift = function (value) {
        if (!this.data) {
            this.data = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])();
        }
        this.data = this.data.unshift(value);
        this.refreshViewLayer();
    };
    /**
     * 增在最后
     * @param value
     */
    ListBase.prototype.add = function (value) {
        if (!this.data) {
            this.data = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])();
        }
        this.data = this.data.push(value);
        this.refreshViewLayer();
    };
    ListBase.prototype.merge = function (values) {
        if (!this.data) {
            this.data = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])();
        }
        this.data = this.data.merge(values.data);
        this.refreshViewLayer();
    };
    ListBase.prototype.toJS = function () {
        var list = this.data;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(list)) {
            return;
        }
        var array = list.toJS();
        return array;
    };
    ListBase.prototype.clear = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.data)) {
            return;
        }
        this.data = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])();
        this.refreshViewLayer();
    };
    Object.defineProperty(ListBase.prototype, "length", {
        get: function () {
            if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.data)) {
                return;
            }
            return this.data.size;
        },
        enumerable: true,
        configurable: true
    });
    ListBase.prototype.contains = function (item) {
        return this.data.contains(item);
    };
    ListBase.prototype.getIndexByID = function (id) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.data)) {
            return -1;
        }
        var list = this.data;
        for (var i = 0; i < list.size; i++) {
            var column = list.get(i);
            var currentID = column.get('id');
            if (id === currentID) {
                return i;
            }
        }
        return -1;
    };
    ListBase.prototype.removeByID = function (id) {
        var index = this.getIndexByID(id);
        if (index === -1) {
            // alert('当前没有选中项。');
            return;
        }
        this.remove(index);
    };
    ListBase.prototype.updateByID = function (id, updater) {
        var index = this.getIndexByID(id);
        if (index === -1) {
            // alert('当前没有选中项。');
            return;
        }
        this.update(index, updater);
    };
    Object.defineProperty(ListBase.prototype, "currentSelectItem", {
        get: function () {
            if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.currentSelectIndex)) {
                return null;
            }
            else {
                var item = this.get(this.currentSelectIndex);
                if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(item)) {
                    return null;
                }
                return item;
            }
        },
        enumerable: true,
        configurable: true
    });
    ListBase.prototype.subscribeSelectNewItem = function (item) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(item)) {
            return;
        }
        var selectNewItemSubscription = item.refreshView.subscribe(function (value) {
            _this.refreshViewLayer();
        });
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.selectNewSubscriptions)) {
            this.selectNewSubscriptions = new Array();
        }
        this.selectNewSubscriptions.push(selectNewItemSubscription);
    };
    ListBase.prototype.unsubscribeSelectNewItem = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.selectNewSubscriptions) || this.selectNewSubscriptions.length === 0) {
            return;
        }
        else {
            while (this.selectNewSubscriptions.length > 0) {
                var subscription = this.selectNewSubscriptions.pop();
                subscription.unsubscribe();
            }
        }
    };
    return ListBase;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/base/mapbase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBase", function() { return MapBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("./node_modules/immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);



var MapBase = (function () {
    /**
     * 构造函数
     */
    function MapBase(value) {
        /**
         * 视图层刷新事件
         */
        this.refreshView = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(value)) {
            // this.data = Map();
            return;
        }
        else {
            // this.data = Map(value);
            if (__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"].isMap(value)) {
                this.data = value;
            }
            else {
                this.data = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])(value);
            }
        }
    }
    /**
     * 刷新视图层
     */
    MapBase.prototype.refreshViewLayer = function () {
        this.refreshView.next(this);
    };
    /**
     * 查
     * @param path
     */
    MapBase.prototype.get = function (path) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.data)) {
            return;
        }
        return this.data.get(path);
    };
    MapBase.prototype.getIn = function (path) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.data)) {
            return;
        }
        return this.data.getIn(path);
    };
    MapBase.prototype.set = function (path, newValue) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.data)) {
            return;
        }
        this.data = this.data.set(path, newValue);
        this.refreshViewLayer();
    };
    /**
     * 改
     * @param path
     * @param updater value=>fx(value)形式
     */
    MapBase.prototype.update = function (path, updater) {
        // if (path.length > 0) {
        //     this.data = this.data.updateIn(path as string[], newValue);
        // }
        // else {
        // this.data = this.data.update(path, newValue);
        // }
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.data)) {
            return;
        }
        this.data = this.data.update(path, updater);
        this.refreshViewLayer();
    };
    MapBase.prototype.toJS = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.data)) {
            return;
        }
        return this.data.toJS();
    };
    return MapBase;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/basic-info-card/basic-info-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".baseInfoInput {\r\n  display: inline-block;\r\n  width: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/basic-info-card/basic-info-card.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"p-1\" [formGroup]=\"formGroup\">\r\n<label class=\"k-form-field mb-10\" style=\"display: inline-block; width: 300px;\">\r\n    <span style=\"padding-bottom: 1px;\">编号</span>\r\n<input class=\"k-textbox\" style=\"display: inline-block; height:30px;\" formControlName=\"code\" [readonly]=\"true\" />\r\n  </label>\r\n\r\n<label class=\"k-form-field mb-0\" style=\"display: inline-block; width: 300px;\">\r\n    <span style=\"padding-bottom: 1px;\">名称</span>\r\n<input class=\"k-textbox\" style=\"display: inline-block; height:30px;\" formControlName=\"name\" />\r\n  </label>\r\n<label class=\"k-form-field mb-0\" style=\"display: inline-block; width: 300px;\">\r\n    <span style=\"padding-bottom: 1px;\">描述</span>\r\n<input class=\"k-textbox\" style=\"display: inline-block; height:30px;\" formControlName=\"description\" />\r\n  </label>\r\n<div class=\"mb-2 mt-2\" style=\"display: inline-block; width: 300px;\">\r\n<input #IsI18nObject class=\"k-checkbox\" id=\"isI18nObject\" type=\"checkbox\" formControlName=\"isI18nObject\"\r\n(click)=\"changeIsI18nObjectCheck(IsI18nObject.checked)\" />\r\n    <label class=\"k-checkbox-label\" for=\"isI18nObject\">多语</label>\r\n  </div>\r\n<div class=\"mb-2 mt-2\" style=\"display: inline-block; width: 300px;\">\r\n<input #IsFiscalTable class=\"k-checkbox\" id=\"isFiscalTable\" type=\"checkbox\" formControlName=\"isFiscalTable\" \r\n(click)=\"changeIsFiscalTableCheck(IsFiscalTable.checked)\" />\r\n    <label class=\"k-checkbox-label\" for=\"isFiscalTable\">年度表</label>\r\n  </div>\r\n<div class=\"mb-2 mt-2\" style=\"display: inline-block; width: 300px;\">\r\n<input #IsSynHis class=\"k-checkbox\" id=\"isSynHis\" type=\"checkbox\" formControlName=\"isSynHis\" \r\n(click)=\"changeIsSynHisTableCheck(IsSynHis.checked)\" />\r\n    <label class=\"k-checkbox-label\" for=\"isSynHis\">同步历史表</label>\r\n  </div>\r\n<div class=\"mb-2 mt-2\" style=\"display: inline-block; width: 300px;\">\r\n<input #IsUsingTimeStamp class=\"k-checkbox\" id=\"isUsingTimeStamp\" type=\"checkbox\" formControlName=\"isUsingTimeStamp\" \r\n(click)=\"changeIsUsingTimeStampCheck(IsUsingTimeStamp.checked)\"/>\r\n    <label class=\"k-checkbox-label\" for=\"isUsingTimeStamp\">启用时间戳字段</label>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/basic-info-card/basic-info-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoCardComponent", function() { return BasicInfoCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_lib_databaseobjecttable__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjecttable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_lib_databaseobjecttableview__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjecttableview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__const_databaseobjectcolumnconst__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/const/databaseobjectcolumnconst.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { MessagerService } from '@farris/ui';

var BasicInfoCardComponent = (function () {
    function BasicInfoCardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        /**
          * viewAction视图层刷新事件订阅
          */
        this.refreshSubscriptions = new Array();
    }
    BasicInfoCardComponent.prototype.ngOnInit = function () {
        this.load();
        this.tempDatabseObject = this.databaseObject;
    };
    BasicInfoCardComponent.prototype.ngOnChanges = function (changes) {
        this.tempDatabseObject = this.databaseObject;
        this.refresh();
    };
    BasicInfoCardComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeRefreshLayer();
    };
    /**
     * 加载
     */
    BasicInfoCardComponent.prototype.load = function () {
        this.createForm();
        this.refresh();
    };
    /**
     * 刷新
     */
    BasicInfoCardComponent.prototype.refresh = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.currentView)) {
            this.clearFormValue();
            return;
        }
        this.unsubscribeRefreshLayer();
        this.databaseObject = this.currentView.toJS();
        this.setFormValue(this.databaseObject);
        this.subscribeRefreshViewLayer();
    };
    BasicInfoCardComponent.prototype.changeIsI18nObjectCheck = function (isMultiLanguage) {
        if (!isMultiLanguage && this.tempDatabseObject.isI18nObject) {
            alert('数据库对象设置为多语并保存后不允许再改成不是多语。');
            this.currentView.IsI18nObject = true;
            return;
        }
        else {
            var mulityLanguageColumns = this.currentView.columns.getI18nItem();
            if (!isMultiLanguage && !Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(mulityLanguageColumns)) {
                // alert('存在字段设置为启用多语，请取消后将数据库对象设置为不启用');
                // this.messager.question('存在字段设置为启用多语，继续将使所有字段设为不启用多语，是否继续？',
                //                 () => this.okCallback(mulityLanguageColumns));
                this.okCallback(mulityLanguageColumns);
                return;
            }
            else {
                this.currentView.IsI18nObject = isMultiLanguage;
            }
        }
    };
    BasicInfoCardComponent.prototype.okCallback = function (mulityLanguageColumns) {
        var _this = this;
        mulityLanguageColumns.forEach(function (item) {
            _this.updateValueByElementId(item.get('id'), __WEBPACK_IMPORTED_MODULE_5__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsMultiLanguage, false);
        });
        this.currentView.IsI18nObject = false;
    };
    BasicInfoCardComponent.prototype.changeIsFiscalTableCheck = function (isFiscalTable) {
        if (!isFiscalTable && this.tempDatabseObject.isFiscalTable) {
            alert('数据库对象设置为年度表并保存后不允许再改成不是年度表。');
            this.currentView.IsFiscalTable = true;
            return;
        }
        else {
            this.currentView.IsFiscalTable = isFiscalTable;
        }
    };
    BasicInfoCardComponent.prototype.changeIsSynHisTableCheck = function (isSynHis) {
        if (!isSynHis && this.tempDatabseObject.isSynHis) {
            alert('数据库对象设置为同步历史表并保存后不允许再改成不同步历史表。');
            this.currentView.IsSynHis = true;
            return;
        }
        else {
            this.currentView.IsSynHis = isSynHis;
        }
    };
    BasicInfoCardComponent.prototype.changeIsUsingTimeStampCheck = function (isUsingTimeStamp) {
        if (!isUsingTimeStamp && this.tempDatabseObject.isUsingTimeStamp) {
            alert('数据库对象设置启用时间戳字段并保存后不允许再改成不启用。');
            this.currentView.IsUsingTimeStamp = true;
            return;
        }
        else {
            this.currentView.IsUsingTimeStamp = isUsingTimeStamp;
        }
    };
    /**
  * 根据字段ID更新属性值
  * @param elementId 字段ID
  * @param propertyName 属性名
  * @param propertyValue 属性值
  */
    BasicInfoCardComponent.prototype.updateValueByElementId = function (elementId, propertyName, propertyValue) {
        this.currentView.columns.updateByID(elementId, function (elementView) {
            elementView.update(propertyName, function (oldValue) { return propertyValue; });
            return elementView;
        });
    };
    /**
     * 初始化表单
     */
    BasicInfoCardComponent.prototype.createForm = function () {
        this.formGroup = this.formBuilder.group({
            code: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            isI18nObject: [false, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            isFiscalTable: [false, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            isUsingTimeStamp: [false, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            isSynHis: [false, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
        });
    };
    /**
     * 表单赋值
     * @param be
     */
    BasicInfoCardComponent.prototype.setFormValue = function (databaseObject) {
        this.unsubscribeFormGroupValueChanges();
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(databaseObject)) {
            this.clearFormValue();
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.formGroup)) {
            this.createForm();
        }
        this.formGroup.enable();
        this.formGroup.patchValue({
            code: databaseObject.code || '',
            name: databaseObject.name || '',
            description: databaseObject.description || '',
            isI18nObject: databaseObject.isI18nObject || false,
            isFiscalTable: databaseObject.isFiscalTable || false,
            isUsingTimeStamp: databaseObject.isUsingTimeStamp || false,
            isSynHis: databaseObject.isSynHis || false
        });
        this.subscribeFormGroupValueChanges();
    };
    /**
     * 表单清空
     */
    BasicInfoCardComponent.prototype.clearFormValue = function () {
        this.unsubscribeFormGroupValueChanges();
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.formGroup)) {
            this.createForm();
        }
        this.formGroup.disable();
        this.formGroup.patchValue({
            code: '',
            name: '',
            description: '',
            isI18nObject: false,
            isFiscalTable: false,
            isUsingTimeStamp: false,
            isSynHis: false
        });
        this.subscribeFormGroupValueChanges();
    };
    /**
     * 订阅表单值改变事件
     */
    BasicInfoCardComponent.prototype.subscribeFormGroupValueChanges = function () {
        var _this = this;
        var subscriptionCode = this.formGroup.controls.code.valueChanges.subscribe(function (code) {
            _this.currentView.Code = code;
        });
        var subscriptionName = this.formGroup.controls.name.valueChanges.subscribe(function (name) {
            _this.currentView.Name = name;
        });
        var subscriptionIsFiscalTable = this.formGroup.controls.isFiscalTable.valueChanges.subscribe(function (isFiscalTable) {
            _this.currentView.IsFiscalTable = isFiscalTable;
        });
        var subscriptionIsUsingTimeStamp = this.formGroup.controls.isUsingTimeStamp.valueChanges.subscribe(function (isUsingTimeStamp) {
            _this.currentView.IsUsingTimeStamp = isUsingTimeStamp;
        });
        var subscriptionIsSynHis = this.formGroup.controls.isSynHis.valueChanges.subscribe(function (isSynHis) {
            _this.currentView.IsSynHis = isSynHis;
        });
        var subscriptionIsI18nObject = this.formGroup.controls.isI18nObject.valueChanges.subscribe(function (isI18nObject) {
            _this.currentView.IsI18nObject = isI18nObject;
        });
        var subscriptionDescription = this.formGroup.controls.description.valueChanges.subscribe(function (description) {
            _this.currentView.Description = description;
        });
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.formGroupSubscriptions)) {
            this.formGroupSubscriptions = new Array();
        }
        this.formGroupSubscriptions.push(subscriptionCode);
        this.formGroupSubscriptions.push(subscriptionName);
        this.formGroupSubscriptions.push(subscriptionIsI18nObject);
        this.formGroupSubscriptions.push(subscriptionDescription);
        this.formGroupSubscriptions.push(subscriptionIsFiscalTable);
        this.formGroupSubscriptions.push(subscriptionIsUsingTimeStamp);
        this.formGroupSubscriptions.push(subscriptionIsSynHis);
    };
    /**
     * 订阅viewAction视图层刷新事件
     */
    BasicInfoCardComponent.prototype.subscribeRefreshViewLayer = function () {
        var _this = this;
        var subscription = this.currentView.refreshView.subscribe(function (value) {
            _this.databaseObject = value.toJS();
            _this.setFormValue(_this.databaseObject);
        });
        this.refreshSubscriptions.push(subscription);
    };
    /**
     * 取消订阅viewAction视图层刷新事件
     */
    BasicInfoCardComponent.prototype.unsubscribeRefreshLayer = function () {
        if (this.refreshSubscriptions) {
            while (this.refreshSubscriptions.length > 0) {
                var subscription = this.refreshSubscriptions.pop();
                subscription.unsubscribe();
            }
        }
    };
    /**
     * 取消订阅表单值改变事件
     */
    BasicInfoCardComponent.prototype.unsubscribeFormGroupValueChanges = function () {
        if (this.formGroupSubscriptions && this.formGroupSubscriptions.length > 0) {
            while (this.formGroupSubscriptions.length > 0) {
                var subscription = this.formGroupSubscriptions.pop();
                subscription.unsubscribe();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__utils_lib_databaseobjecttable__["DatabaseObjectTable"])
    ], BasicInfoCardComponent.prototype, "databaseObject", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__utils_lib_databaseobjecttableview__["DatabaseObjectTableView"])
    ], BasicInfoCardComponent.prototype, "currentView", void 0);
    BasicInfoCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basic-info-card',
            template: __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/basic-info-card/basic-info-card.component.html"),
            styles: [__webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/basic-info-card/basic-info-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
    ], BasicInfoCardComponent);
    return BasicInfoCardComponent;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/columns-manager/ColumnsUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPDBODataTypeConvert", function() { return GSPDBODataTypeConvert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_lib_datatype__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/datatype.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * 字段数据类型
 */
var GSPDBODataTypeConvert = (function () {
    function GSPDBODataTypeConvert() {
    }
    GSPDBODataTypeConvert.prototype.transform = function (column) {
        var dataType = column.dataType;
        if (Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(dataType)) {
            alert('dataType为空');
        }
        return __WEBPACK_IMPORTED_MODULE_1__utils_lib_datatype__["GSPDBODataTypes"].find(function (item) { return item.value === dataType; }).text;
    };
    GSPDBODataTypeConvert.prototype.remove = function () {
    };
    GSPDBODataTypeConvert.prototype.addHandler = function () {
    };
    GSPDBODataTypeConvert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'gspDBODataTypeConvert' })
    ], GSPDBODataTypeConvert);
    return GSPDBODataTypeConvert;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/columns-manager/columns-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n\r\n.calc-rules.createNav {\r\n  background: #e8edf2;\r\n  height: 40px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle {\r\n  padding: 0px 10px;\r\n  color: #666666;\r\n  line-height: 40px;\r\n  cursor: pointer;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.active {\r\n  color: #FFFFFF;\r\n  background-color: #0072c6 !important;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle:not(:first-child).active {\r\n  margin-left: -17px;\r\n  padding-left: 25px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.disable {\r\n  color: #cdcdcf;\r\n}\r\n\r\n.calc-rules .triangle_border_right {\r\n  width: 0;\r\n  height: 0;\r\n  border-width: 20px 0 20px 18px;\r\n  border-style: solid;\r\n  border-color: transparent transparent transparent #cccccc;\r\n  position: relative;\r\n}\r\n\r\n.calc-rules .triangle_border_right span {\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border-width: 20px 0px 20px 18px;\r\n  border-style: solid;\r\n  border-color: transparent transparent transparent #e8edf2;\r\n  position: absolute;\r\n  top: -20px;\r\n  left: -20px;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active {\r\n  width: 0;\r\n  height: 0;\r\n  border-width: 20px 0 20px 20px;\r\n  border-color: transparent transparent transparent #e8edf2;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active span {\r\n  border-width: 20px 0 20px 20px;\r\n  border-color: transparent transparent transparent #0072c6;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/columns-manager/columns-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: auto;display:flex;flex:1;\">\r\n<kendo-grid #grid style=\"flex: 1 auto\" [data]=\"cols\" (cellClick)=\"cellClickHandler($event)\" (cellClose)=\"cellCloseHandler($event)\"\r\n (cancel)=\"cancelAddNewItemHandler($event)\" (save)=\"confirmHandler($event)\" (remove)=\"removeColumn($event)\" (add)=\"addHandler($event)\"\r\n    [selectable]=\"true\" [kendoGridSelectBy]=\"'id'\" [selectedKeys]=\"selectedColumns\">\r\n<kendo-grid-column [class]=\"{'g-grid-cell': true}\" field=\"code\" title=\"编号\" width=\"90\" [headerStyle]=\"{'text-align': 'center'}\"></kendo-grid-column>\r\n    <kendo-grid-column [class]=\"{'g-grid-cell': true}\" field=\"name\" title=\"名称\" width=\"90\" [headerStyle]=\"{'text-align': 'center'}\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"dataType\" title=\"数据类型\" width=\"120\" [headerStyle]=\"{'text-align': 'center'}\">\r\n      <ng-template kendoGridCellTemplate let-dataItem>\r\n        {{dataItem|gspDBODataTypeConvert}}\r\n      </ng-template>\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\" let-column=\"column\" let-formGroup=\"formGroup\">\r\n        <kendo-dropdownlist #dataType [data]=\"dataTypes\" [textField]=\"'text'\" [valueField]=\"'value'\" [value]=\"selectedValue\" [valuePrimitive]=\"true\"\r\n          [formControl]=\"formGroup.get('dataType')\">\r\n        </kendo-dropdownlist>\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column field=\"length\" editor=\"numeric\" format=\"{0:d}\" title=\"长度\" width=\"55\" [style]=\"{'text-align': 'right'}\"\r\n      [headerStyle]=\"{'text-align': 'center'}\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"precision\" editor=\"numeric\" format=\"{0:d}\" title=\"精度\" width=\"55\" [style]=\"{'text-align': 'right'}\"\r\n      [headerStyle]=\"{'text-align': 'center'}\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"scale\" editor=\"numeric\" format=\"{0:d}\" title=\"小数位数\" width=\"55\" [style]=\"{'text-align': 'right'}\"\r\n      [headerStyle]=\"{'text-align': 'center'}\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"defaultValue\" title=\"默认值\" width=\"90\" [headerStyle]=\"{'text-align': 'center'}\"></kendo-grid-column>\r\n<div *ngIf=\"databaseObjectView\">\r\n  <div *ngIf=\"databaseObjectView.IsI18nObject\">\r\n    <kendo-grid-column field=\"isMultiLanguage\" title=\"多语\" width=\"55\" [headerStyle]=\"{'text-align': 'center'}\">\r\n      <ng-template kendoGridCellTemplate let-dataItem>\r\n        <input #IsMultiLanguageColumn type=\"checkbox\" [checked]=\"dataItem.isMultiLanguage\" (click)=\"changeIsMultiLanguageCheck(IsMultiLanguageColumn.checked,dataItem)\" />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n  </div>\r\n</div>\r\n    <kendo-grid-column field=\"isUnique\" title=\"唯一\" width=\"55\" [headerStyle]=\"{'text-align': 'center'}\">\r\n      <ng-template kendoGridCellTemplate let-dataItem>\r\n        <input #IsUniqueColumn type=\"checkbox\" [checked]=\"dataItem.isUnique\" (click)=\"changeIsUniqueCheck(IsUniqueColumn.checked,dataItem)\"\r\n        />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"isNullable\" title=\"非空\" width=\"55\" [headerStyle]=\"{'text-align': 'center'}\">\r\n      <ng-template kendoGridCellTemplate let-dataItem>\r\n        <input #IsNullableColumn type=\"checkbox\" [checked]=\"!dataItem.isNullable\" (click)=\"changeIsNullableCheck(IsNullableColumn.checked,dataItem)\"\r\n        />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"ifPrimaryKey\" title=\"主键\" width=\"55\" [headerStyle]=\"{'text-align': 'center'}\">\r\n      <ng-template kendoGridCellTemplate let-dataItem>\r\n        <input #IfPrimaryKeyColumn type=\"checkbox\" [checked]=\"dataItem.ifPrimaryKey\" (click)=\"changeIfPrimaryKeyCheck(IfPrimaryKeyColumn.checked,dataItem)\"\r\n        />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n  </kendo-grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/columns-manager/columns-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnsManagerComponent", function() { return ColumnsManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_lib_databaseobjecttable__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjecttable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_lib_databaseobjectcolumn__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectcolumn.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/const/databaseobjectcolumnconst.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_lib_datatype__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/datatype.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_immutable__ = __webpack_require__("./node_modules/immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_lib_databaseobjecttableview__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjecttableview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_lib_databaseobjectcolumnview__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectcolumnview.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ColumnsManagerComponent = (function () {
    function ColumnsManagerComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.selectedColumns = [];
        this.dataTypes = __WEBPACK_IMPORTED_MODULE_5__utils_lib_datatype__["GSPDBODataTypes"];
        this.subscriptions = new Array();
    }
    ColumnsManagerComponent.prototype.ngOnInit = function () {
        this.databaseObjectView = this.currentView;
        if (!Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(this.databaseObjectView)) {
            this.cols = this.databaseObjectView.columns.toJS();
            this.setColumnIsMultiLanguageProperty();
        }
        this.databaseObject = this.databaseObject;
    };
    ColumnsManagerComponent.prototype.ngOnChanges = function (changes) {
        if (changes['databaseObject']) {
            this.databaseObject = changes['databaseObject'].currentValue;
            this.databaseObject = this.databaseObject;
        }
        if (changes['currentView']) {
            this.closeGridCell();
            // 更新viewObject
            this.databaseObjectView = this.currentView;
            this.setColumnIsMultiLanguageProperty();
            this.refresh();
        }
    };
    ColumnsManagerComponent.prototype.setColumnIsMultiLanguageProperty = function () {
        var _this = this;
        if (!Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(this.databaseObject) && !Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(this.databaseObject.multiLanguageColumns)) {
            this.databaseObject.multiLanguageColumns.forEach(function (item) {
                _this.setIsMultiLanguage(item, true);
            });
        }
    };
    ColumnsManagerComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeRefreshView();
    };
    ColumnsManagerComponent.prototype.closeGridCell = function () {
        // 关闭所有正在编辑中的单元格
        this.grid.closeCell();
        // 取消所有编辑中的列
        this.grid.cancelCell();
        // 取消新增行
        this.grid.closeRow(-1);
    };
    ColumnsManagerComponent.prototype.dataStateChange = function (state) {
    };
    ColumnsManagerComponent.prototype.refresh = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(this.databaseObjectView)) {
            this.cols = null;
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(this.databaseObjectView.columns)) {
            this.cols = null;
        }
        // 更新当前启用业务字段的be字段
        this.cols = this.databaseObjectView.columns.toJS();
        this.subscribeRefreshView();
    };
    /**
         * 订阅视图刷新事件
         */
    ColumnsManagerComponent.prototype.subscribeRefreshView = function () {
        var _this = this;
        this.unsubscribeRefreshView();
        // 订阅当前关联数据源的值刷新事件
        // 每次刷新后，需重新绑定字段列表的事件
        var refreshViewSubscription = this.databaseObjectView.columns.refreshView.subscribe(function (value) {
            if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(_this.databaseObjectView)) {
                _this.cols = null;
                return;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(_this.databaseObjectView.columns)) {
                _this.cols = null;
            }
            _this.cols = _this.databaseObjectView.columns.toJS();
        });
        this.subscriptions.push(refreshViewSubscription);
    };
    /**
     * 取消订阅视图刷新事件
     */
    ColumnsManagerComponent.prototype.unsubscribeRefreshView = function () {
        while (this.subscriptions.length > 0) {
            var subscription = this.subscriptions.pop();
            subscription.unsubscribe();
        }
    };
    ColumnsManagerComponent.prototype.addColumn = function () {
        var newColumn = new __WEBPACK_IMPORTED_MODULE_3__utils_lib_databaseobjectcolumn__["DatabaseObjectColumn"]();
        this.addNewcolumn(newColumn);
    };
    ColumnsManagerComponent.prototype.addNewcolumn = function (item) {
        this.databaseObjectView.columns.add(new __WEBPACK_IMPORTED_MODULE_11__utils_lib_databaseobjectcolumnview__["DatabaseObjectColumnView"](Object(__WEBPACK_IMPORTED_MODULE_9_immutable__["Map"])(item)));
    };
    ColumnsManagerComponent.prototype.deleteColumn = function () {
        if (this.selectedColumns.length === 0) {
            alert('请先选中要删除的字段。');
        }
        else {
            while (this.selectedColumns.length !== 0) {
                var id = this.selectedColumns.pop();
                if (this.canRemove(id)) {
                    this.databaseObjectView.columns.removeByID(id);
                }
            }
        }
    };
    /**
       * 新增后的行按钮（确认）
       */
    ColumnsManagerComponent.prototype.confirmHandler = function (_a) {
        var sender = _a.sender, formGroup = _a.formGroup, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        if (formGroup.valid) {
            var ele = this.mergeFormGroupValue(formGroup);
            this.addNewcolumn(ele);
            sender.closeRow(rowIndex);
        }
    };
    /**
     * 合并表格中的信息与默认新增信息
     * @param formGroup
     */
    ColumnsManagerComponent.prototype.mergeFormGroupValue = function (formGroup) {
        if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(formGroup)) {
            alert('当前字段信息未定义。'); // 异常
        }
        var ele = formGroup.value['column'];
        ele.code = formGroup.value['code'];
        ele.name = formGroup.value['name'];
        ele.id = formGroup.value['id'];
        ele.length = formGroup.value['length'];
        ele.precision = formGroup.value['precision'];
        ele.dataType = formGroup.value['dataType'];
        ele.scale = formGroup.value['scale'];
        ele.isUnique = formGroup.value['isUnique'];
        ele.isNullable = formGroup.value['isNullable'];
        ele.ifPrimaryKey = formGroup.value['ifPrimaryKey'];
        ele.defaultValue = formGroup.value['defaultValue'];
        return ele;
    };
    /**
     * 新增后的行按钮（取消）
     */
    ColumnsManagerComponent.prototype.cancelAddNewItemHandler = function (args) {
        var sender = args.sender, rowIndex = args.rowIndex;
        sender.closeRow(rowIndex);
    };
    /**
   * 当前字段是否可删除
   * @param id
   */
    ColumnsManagerComponent.prototype.canRemove = function (id) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(this.databaseObject.columns.find(function (item) { return item.id === id; }))) {
            alert('字段保存后不允许删除。');
            return false;
        }
        var indexes = this.currentView.indexes.toJS();
        var isCanRemove = true;
        if (!Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(indexes) && indexes.length > 0) {
            indexes.forEach(function (index) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(index.columns.find(function (column) { return column.id === id; }))) {
                    alert('该字段被索引关联，无法删除，请确认。');
                    isCanRemove = false;
                    return;
                }
            });
        }
        return isCanRemove;
    };
    /**
        * 单击触发编辑
        * @param param0
        */
    ColumnsManagerComponent.prototype.cellClickHandler = function (args) {
        var sender = args.sender, rowIndex = args.rowIndex, columnIndex = args.columnIndex, column = args.column, dataItem = args.dataItem, isEdited = args.isEdited, isNew = args.isNew;
        // 若为新增行，不响应
        if (rowIndex === -1) {
            return;
        }
        // 选中当前字段
        this.databaseObjectView.columns.setSelectIndexByID(dataItem.id);
        // ② 编辑属性
        switch (column.field) {
            // 编辑数据编号
            case __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].Code:
                if (!this.CanChangeCode(dataItem)) {
                    return;
                }
                // 此处不使用return,因为可以修改的时候还是要调用下方的editCell方法的
                break;
            // 编辑数据类型
            case __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].DataType:
                if (!this.CanChangeDataType(dataItem)) {
                    return;
                }
                // 此处不使用return,因为可以修改的时候还是要调用下方的editCell方法的
                break;
            // 编辑是否多语,不显示编辑框
            case __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsMultiLanguage:
                break;
            // 编辑长度/精度，某些数据类型不可编辑
            case __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].Length:
                if (!this.CanChangeLength(dataItem)) {
                    // alert('当前数据类型不允许修改字段长度。');
                    return;
                }
                // 此处不使用return,因为可以修改的时候还是要调用下方的editCell方法的
                break;
            case __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].Precision:
                if (!this.CanChangePresicion(dataItem)) {
                    // alert('当前数据类型不允许修改字段精度。');
                    return;
                }
                // 此处不使用return,因为可以修改的时候还是要调用下方的editCell方法的
                break;
            case __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].Scale:
                if (!this.CanChangeScale(dataItem)) {
                    // alert('当前数据类型不允许修改字段精度。');
                    return;
                }
                // 此处不使用return,因为可以修改的时候还是要调用下方的editCell方法的
                break;
            case __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsNullable:
            case __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsUnique:
            case __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IfPrimaryKey:
                return;
        }
        if (!isEdited) {
            sender.editCell(rowIndex, columnIndex, this.createFormGroup(dataItem));
            return;
        }
    };
    ColumnsManagerComponent.prototype.createFormGroup = function (column) {
        return this.formBuilder.group({
            'code': [column.code],
            'name': [column.name],
            'length': [column.length, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[0-9]{1,4}')])],
            'precision': [column.precision, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[0-9]{1,3}')])],
            'scale': [column.scale, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[0-9]{1,2}')])],
            'dataType': this.getDataTypeWithUdt(column),
            'isUnique': [column.isUnique],
            'isNullable': [column.isNullable],
            'ifPrimaryKey': [column.ifPrimaryKey],
            'defaultValue': [column.defaultValue],
            'id': [column.id],
            'column': [column],
        });
    };
    ColumnsManagerComponent.prototype.getDataTypeWithUdt = function (ele) {
        return ele.dataType;
    };
    /**
     * 编辑结束
     * @param args
     */
    ColumnsManagerComponent.prototype.cellCloseHandler = function (args) {
        var sender = args.sender, formGroup = args.formGroup, dataItem = args.dataItem, rowIndex = args.rowIndex, column = args.column;
        if (!formGroup.valid) {
            // 若验证不通过，则编辑器不失焦
            args.preventDefault();
        }
        else if (formGroup.dirty) {
            var propertyName = column.field;
            var newValue = formGroup.value[propertyName];
            // 当前属性赋值
            this.changeCurrentProperty(propertyName, dataItem, newValue);
            // 处理相关的属性[是否多语、关联枚举、标签]
            this.changeRelativeProperty(propertyName, dataItem, newValue);
        }
    };
    ColumnsManagerComponent.prototype.changeCurrentProperty = function (propertyName, dataItem, newValue) {
        // ③ 允许修改属性
        this.updateValueByElementId(dataItem.id, propertyName, newValue);
    };
    /**
     * 处理相关的属性[是否多语、关联枚举、标签]
     * @param propertyName 属性名
     * @param dataItem 当前字段
     * @param newValue 属性值
     */
    ColumnsManagerComponent.prototype.changeRelativeProperty = function (propertyName, dataItem, newValue) {
        // ① 处理是否多语，若当前是否多语为是，修改数据类型/对象类型，将影响是否多语属性值
        if (!Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(this.getViewElementById(dataItem.id))) {
            var isMultiLanguage = this.getViewElementById(dataItem.id).get(__WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsMultiLanguage);
            if (isMultiLanguage) {
                // 1-1 切换字段数据类型，若不是文本类型，则设置是否多语为否
                if (propertyName === __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].DataType) {
                    if (newValue !== __WEBPACK_IMPORTED_MODULE_5__utils_lib_datatype__["DataType"].Varchar && newValue !== __WEBPACK_IMPORTED_MODULE_5__utils_lib_datatype__["DataType"].Clob) {
                        this.setIsMultiLanguage(dataItem.id, false);
                    }
                }
            }
        }
        // ③ 若标签为空，自动填充编号
        // 修改编号值时，判断若标签为空，则将标签赋同样的值
        if (propertyName === __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].Code && newValue.length > 0) {
            var currentElement = this.databaseObjectView.columns.getItemByID(dataItem.id);
            var ID = currentElement.get(__WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].ID);
            if (Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(ID) || ID.length === 0) {
                currentElement.update(__WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].ID, function (oldValue) { return newValue; });
            }
        }
        // ④ 若调整数据类型，则长度精度随之改变
        if (propertyName === __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].DataType) {
            this.changeLengthPrecisionByType(newValue, dataItem);
        }
    };
    /**
   * 修改[是否多语]复选框状态
   * @param isMultiLanguage 是否多语
   * @param column 当前字段
   */
    ColumnsManagerComponent.prototype.changeIsMultiLanguageCheck = function (isMultiLanguage, column) {
        // 以下情况不允许多语：
        // 1.字段类型非[文本、备注]；
        // 2.ID类型的字段，不允许多语，包括ID,ParentID,关联字段；
        if (isMultiLanguage === true) {
            if (column.dataType !== __WEBPACK_IMPORTED_MODULE_5__utils_lib_datatype__["DataType"].Char && column.dataType !== __WEBPACK_IMPORTED_MODULE_5__utils_lib_datatype__["DataType"].Varchar && column.dataType !== __WEBPACK_IMPORTED_MODULE_5__utils_lib_datatype__["DataType"].Clob
                && column.dataType !== __WEBPACK_IMPORTED_MODULE_5__utils_lib_datatype__["DataType"].NChar && column.dataType !== __WEBPACK_IMPORTED_MODULE_5__utils_lib_datatype__["DataType"].NVarchar && column.dataType !== __WEBPACK_IMPORTED_MODULE_5__utils_lib_datatype__["DataType"].NClob) {
                alert('数据类型为[字符型][文本][备注][NChar][NVarchar][NClob]时，可设置为多语。');
                this.setIsMultiLanguage(column.id, false);
                return;
            }
            if (this.isIDType(column)) {
                alert('主键的字段不允许设置为多语。');
                this.setIsMultiLanguage(column.id, false);
                return;
            }
        }
        else {
            var currentColumn = this.databaseObject.columns.find(function (item) { return item.id === column.id; });
            var currentColumn1 = this.databaseObject.multiLanguageColumns.find(function (item) { return item === column.id; });
            if (!Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(currentColumn) && !Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(currentColumn1)) {
                alert('字段设置为多语并保存后不允许再改成不是多语。');
                this.setIsMultiLanguage(column.id, true);
                return;
            }
        }
        this.updateValueByElementId(column.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsMultiLanguage, isMultiLanguage);
    };
    /**
   * 修改[是否唯一]复选框状态
   * @param IsUnique 是否唯一
   * @param column 当前字段
   */
    ColumnsManagerComponent.prototype.changeIsUniqueCheck = function (isUnique, column) {
        var columns = this.currentView.columns.toJS();
        var primaryKeyColumns = [];
        columns.forEach(function (item) {
            if (item.ifPrimaryKey) {
                primaryKeyColumns.push(primaryKeyColumns);
            }
        });
        if (!isUnique && column.ifPrimaryKey && primaryKeyColumns.length === 1) {
            alert('当前主键列必须唯一。');
            this.updateValueByElementId(column.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsUnique, true);
            return;
        }
        this.updateValueByElementId(column.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsUnique, isUnique);
    };
    /**
  * 修改[是否非空]复选框状态
  * @param isNullable 是否非空
  * @param column 当前字段
  */
    ColumnsManagerComponent.prototype.changeIsNullableCheck = function (isNotNull, column) {
        if (column.ifPrimaryKey) {
            alert('设置成主键的字段，必须是非空的。');
            this.updateValueByElementId(column.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsNullable, false);
            return;
        }
        this.updateValueByElementId(column.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsNullable, !isNotNull);
        if (isNotNull) {
            this.updateValueByElementId(column.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsNullable, false);
        }
    };
    /**
  * 修改[是否主键]复选框状态
  * @param ifPrimaryKey 是否主键
  * @param column 当前字段
  */
    ColumnsManagerComponent.prototype.changeIfPrimaryKeyCheck = function (ifPrimaryKey, column) {
        var columns = this.currentView.columns.toJS();
        var countPK = 0;
        columns.forEach(function (columnPK) {
            if (columnPK.ifPrimaryKey) {
                countPK = countPK + 1;
            }
        });
        if (ifPrimaryKey === true) {
            if (column.isMultiLanguage) {
                alert('多语的字段不能被设置成主键，请确认。');
                this.updateValueByElementId(column.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IfPrimaryKey, false);
                return;
            }
            if (!column.isUnique) {
                this.updateValueByElementId(column.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsUnique, true);
            }
            if (column.isNullable) {
                this.updateValueByElementId(column.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsNullable, false);
            }
        }
        else {
            if (countPK === 2 && !ifPrimaryKey) {
                this.updateValueByElementId(column.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IfPrimaryKey, false);
                var columns1 = this.currentView.columns.toJS();
                var elseColumnWithPK = columns1.find(function (elseColumn) { return elseColumn.ifPrimaryKey === true; });
                if (!elseColumnWithPK.IsUnique) {
                    this.updateValueByElementId(elseColumnWithPK.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsUnique, true);
                }
            }
        }
        this.updateValueByElementId(column.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IfPrimaryKey, ifPrimaryKey);
    };
    /**
      * 设置是否多语属性为否
      * @param elementId 字段ID
      */
    ColumnsManagerComponent.prototype.setIsMultiLanguage = function (elementId, isMultiLanguage) {
        this.updateValueByElementId(elementId, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].IsMultiLanguage, isMultiLanguage);
    };
    /**
     * 切换数据类型时，带出长度精度
     */
    ColumnsManagerComponent.prototype.changeLengthPrecisionByType = function (type, dataItem) {
        if (type !== dataItem.dataType) {
            var length_1 = this.dataTypes.find(function (item) { return item.value === type; }).length;
            var precision = this.dataTypes.find(function (item) { return item.value === type; }).precision;
            this.updateValueByElementId(dataItem.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].Length, length_1);
            this.updateValueByElementId(dataItem.id, __WEBPACK_IMPORTED_MODULE_4__const_databaseobjectcolumnconst__["DatabaseObjectColumnConst"].Precision, precision);
        }
    };
    /**
   * 根据字段ID更新属性值
   * @param elementId 字段ID
   * @param propertyName 属性名
   * @param propertyValue 属性值
   */
    ColumnsManagerComponent.prototype.updateValueByElementId = function (elementId, propertyName, propertyValue) {
        this.databaseObjectView.columns.updateByID(elementId, function (elementView) {
            elementView.update(propertyName, function (oldValue) { return propertyValue; });
            return elementView;
        });
    };
    /**
         * 关联字段展示部分的数据源
         * @param id 字段ID
         */
    ColumnsManagerComponent.prototype.getViewElementById = function (id) {
        return this.databaseObjectView.columns.getItemByID(id);
    };
    /**
  * 是否可编辑编号
  * @param column 当前字段
  */
    ColumnsManagerComponent.prototype.CanChangeCode = function (column) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_8_util__["isNullOrUndefined"])(this.databaseObject.columns.find(function (item) { return item.id === column.id; }))) {
            return false;
        }
        return true;
    };
    /**
   * 是否可编辑数据类型(id类型字段不可修改数据类型)
   * @param column 当前字段
   */
    ColumnsManagerComponent.prototype.CanChangeDataType = function (column) {
        // 【原因】关联-数据类型不可修改；但是，当前是业务字段数据类型，需要修改为文本-22-0；所以应该在可以修改数据类型的控制那里，添加假设当前为业务字段，则可以修改数据类型；
        if (this.isIDType(column)) {
            if (column.dataType !== __WEBPACK_IMPORTED_MODULE_5__utils_lib_datatype__["DataType"].Varchar) {
                return true;
            }
            else {
                // alert('ID类型字段数据类型不可修改。');
                return false;
            }
        }
        return true;
    };
    /**
     * 是否可编辑字段长度(1.ID类型字段不可修改长度；2.某些数据类型不可修改长度；)
     * @param column 当前字段
     */
    ColumnsManagerComponent.prototype.CanChangeLength = function (column) {
        if (this.isIDType(column)) {
            // alert('ID类型字段长度不可修改。');
            return false;
        }
        return this.dataTypes.find(function (item) { return item.value === column.dataType; }).canChangeLength;
    };
    /**
     * 是否可编辑字段长度(1.ID类型字段不可修改精度；2.某些数据类型不可修改精度；)
     * @param column 当前字段
     */
    ColumnsManagerComponent.prototype.CanChangePresicion = function (column) {
        if (this.isIDType(column)) {
            // alert('ID类型字段精度不可修改。');
            return false;
        }
        return this.dataTypes.find(function (item) { return item.value === column.dataType; }).canChangePresicion;
    };
    ColumnsManagerComponent.prototype.CanChangeScale = function (column) {
        return this.dataTypes.find(function (item) { return item.value === column.dataType; }).canChangeScale;
    };
    ColumnsManagerComponent.prototype.CanChangeNullConstraint = function (column) {
        if (column.ifPrimaryKey) {
            // alert('ID类型字段精度不可修改。');
            return false;
        }
        return true;
    };
    ColumnsManagerComponent.prototype.CanChangeUniqueConstraint = function (column) {
        if (column.ifPrimaryKey) {
            // alert('ID类型字段精度不可修改。');
            return false;
        }
        return true;
    };
    ColumnsManagerComponent.prototype.CanChangePrimaryKey = function (column) {
        return true;
    };
    /**
   * 是否id类型字段
   * 包含id,parentId,关联字段
   * @param column 当前字段
   */
    ColumnsManagerComponent.prototype.isIDType = function (column) {
        return column.ifPrimaryKey;
    };
    ColumnsManagerComponent.prototype.tabSelectChange = function (args) {
    };
    ColumnsManagerComponent.prototype.removeColumn = function (args) {
    };
    ColumnsManagerComponent.prototype.addHandler = function (args) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__utils_lib_databaseobjecttable__["DatabaseObjectTable"])
    ], ColumnsManagerComponent.prototype, "databaseObject", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__utils_lib_databaseobjecttableview__["DatabaseObjectTableView"])
    ], ColumnsManagerComponent.prototype, "currentView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grid'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid__["GridComponent"])
    ], ColumnsManagerComponent.prototype, "grid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dataType'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__["DropDownListComponent"])
    ], ColumnsManagerComponent.prototype, "chooseDataType", void 0);
    ColumnsManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-columns-manager',
            template: __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/columns-manager/columns-manager.component.html"),
            styles: [__webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/columns-manager/columns-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], ColumnsManagerComponent);
    return ColumnsManagerComponent;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/const/baseconst.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseConst", function() { return BaseConst; });
var BaseConst = (function () {
    function BaseConst() {
    }
    BaseConst.ID = 'id';
    BaseConst.Name = 'name';
    BaseConst.Code = 'code';
    return BaseConst;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/const/databaseobjectcolumnconst.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectColumnConst", function() { return DatabaseObjectColumnConst; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseconst__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/const/baseconst.ts");
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

var DatabaseObjectColumnConst = (function (_super) {
    __extends(DatabaseObjectColumnConst, _super);
    function DatabaseObjectColumnConst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 字段
    DatabaseObjectColumnConst.IsMultiLanguage = 'isMultiLanguage';
    DatabaseObjectColumnConst.DefaultValue = 'defaultValue';
    // 数据类型
    DatabaseObjectColumnConst.DataType = 'dataType';
    DatabaseObjectColumnConst.Length = 'length';
    DatabaseObjectColumnConst.Precision = 'precision';
    DatabaseObjectColumnConst.Scale = 'scale';
    DatabaseObjectColumnConst.IsNullable = 'isNullable';
    DatabaseObjectColumnConst.IsUnique = 'isUnique';
    DatabaseObjectColumnConst.IfPrimaryKey = 'ifPrimaryKey';
    return DatabaseObjectColumnConst;
}(__WEBPACK_IMPORTED_MODULE_0__baseconst__["BaseConst"]));



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/const/databaseobjectconst.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectConst", function() { return DatabaseObjectConst; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseconst__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/const/baseconst.ts");
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

var DatabaseObjectConst = (function (_super) {
    __extends(DatabaseObjectConst, _super);
    function DatabaseObjectConst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatabaseObjectConst.Columns = 'columns';
    DatabaseObjectConst.Code = 'code';
    DatabaseObjectConst.Name = 'name';
    DatabaseObjectConst.Description = 'description';
    DatabaseObjectConst.Indexes = 'indexes';
    DatabaseObjectConst.IsI18nObject = 'isI18nObject';
    DatabaseObjectConst.IsFiscalTable = 'isFiscalTable';
    DatabaseObjectConst.IsUsingTimeStamp = 'isUsingTimeStamp';
    DatabaseObjectConst.IsSynHis = 'isSynHis';
    DatabaseObjectConst.PrimaryKey = 'primaryKey';
    return DatabaseObjectConst;
}(__WEBPACK_IMPORTED_MODULE_0__baseconst__["BaseConst"]));



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/const/databaseobjectindexconst.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectIndexConst", function() { return DatabaseObjectIndexConst; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseconst__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/const/baseconst.ts");
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

var DatabaseObjectIndexConst = (function (_super) {
    __extends(DatabaseObjectIndexConst, _super);
    function DatabaseObjectIndexConst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 字段
    DatabaseObjectIndexConst.IsCluster_Constraint = 'isCluster_Constraint';
    DatabaseObjectIndexConst.IsUnique_Constraint = 'isUnique_Constraint';
    DatabaseObjectIndexConst.IfPrimary_Key = 'ifPrimary_Key';
    DatabaseObjectIndexConst.Columns = 'columns';
    return DatabaseObjectIndexConst;
}(__WEBPACK_IMPORTED_MODULE_0__baseconst__["BaseConst"]));



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/database-object.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectService", function() { return DatabaseObjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_lib_DatabaseObjectDto__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/DatabaseObjectDto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DatabaseObjectService = (function () {
    function DatabaseObjectService(http) {
        this.http = http;
        this.DBO_Base_Path = '/api/dev/main/v1.0/database-objects';
        this.databaseObjectUrl = '';
        this.Server_IP = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["environment"].SERVER_IP;
    }
    DatabaseObjectService.prototype.createDatabaseObject = function (relativePath, fileName, table) {
        // this.refactorDatabaseObject(relativePath, fileName, table);
        // const dto = new DatabaseObjectDto(relativePath, fileName, 'Table', JSON.stringify(table));
        var url2 = this.Server_IP + this.DBO_Base_Path;
        return this.http.post(url2, this.getDto(relativePath, fileName, table), this.getOptions());
    };
    DatabaseObjectService.prototype.getDto = function (relativePath, fileName, table) {
        table = this.buildMulitiLanguageColumns(table);
        table = this.buildPrimaryKey(table);
        var dto = new __WEBPACK_IMPORTED_MODULE_4__utils_lib_DatabaseObjectDto__["DatabaseObjectDto"](relativePath, fileName, 'Table', JSON.stringify(table));
        return dto;
    };
    DatabaseObjectService.prototype.getOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'as');
        headers.append('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            params: {},
            headers: headers
        });
        return options;
    };
    DatabaseObjectService.prototype.saveDatabaseObject = function (relativePath, fileName, table) {
        /* table = this.buildMulitiLanguageColumns(table);
         table = this.buildPrimaryKey(table);
         const dto = new DatabaseObjectDto(relativePath, fileName, 'Table', JSON.stringify(table));
     
         const headers = new Headers();
         headers.append('Content-Type', 'application/json');
         headers.append('Authorization', 'as');
         headers.append('Access-Control-Allow-Origin', '*');
         const options = new RequestOptions({
           params: {},
           headers: headers
         }); */
        var url2 = this.Server_IP + this.DBO_Base_Path;
        return this.http.put(url2, this.getDto(relativePath, fileName, table), this.getOptions());
    };
    DatabaseObjectService.prototype.LoadDBO = function (url) {
        var dboFullPath = url.replace(/\\/g, '/');
        var dboUrl = this.Server_IP + this.DBO_Base_Path + dboFullPath;
        return this.http.get(dboUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    DatabaseObjectService.prototype.buildMulitiLanguageColumns = function (table) {
        if (Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(table.multiLanguageColumns)) {
            table.multiLanguageColumns = new Array();
            this.pushMulitiLanguageColumns(table);
        }
        else {
            this.pushMulitiLanguageColumns(table);
        }
        return table;
    };
    DatabaseObjectService.prototype.pushMulitiLanguageColumns = function (table) {
        table.columns.forEach(function (column) {
            if (column.isMultiLanguage && table.multiLanguageColumns.find(function (item) { return item === column.id; }) == null) {
                table.multiLanguageColumns.push(column.id);
            }
        });
    };
    DatabaseObjectService.prototype.buildPrimaryKey = function (table) {
        if (Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(table.primaryKey)) {
            table.primaryKey = new Array();
            this.pushPrimaryKey(table);
        }
        else {
            this.pushPrimaryKey(table);
        }
        return table;
    };
    DatabaseObjectService.prototype.pushPrimaryKey = function (table) {
        table.columns.forEach(function (column) {
            if (column.ifPrimaryKey && table.primaryKey.find(function (item) { return item === column.id; }) == null) {
                table.primaryKey.push(column.id);
            }
        });
    };
    DatabaseObjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], DatabaseObjectService);
    return DatabaseObjectService;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/error-stack-window/error-stack-window.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/error-stack-window/error-stack-window.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-dialog *ngIf=\"showErrorStackWindow\" (close)=\"closeErrorStackWindow()\" width=\"800\">\r\n    <kendo-dialog-titlebar>\r\n        异常信息\r\n    </kendo-dialog-titlebar>\r\n\r\n    <div class=\"mb-1\" style=\"padding:0;margin:0;\">{{errorStackHead}} </div>\r\n    <div style=\"padding:0;margin:0\">\r\n        详细信息如下:\r\n        <pre id=errorStack style=\"height: 360px; padding:0;margin:0;user-select: text;\">{{errorStack}}</pre>\r\n    </div>\r\n    <kendo-dialog-actions>\r\n        <button class=\"k-button\" (click)=\"copyErrorStack()\">复制</button>\r\n        <button class=\"k-button k-primary\" (click)=\"closeErrorStackWindow()\">确认</button>\r\n    </kendo-dialog-actions>\r\n</kendo-dialog>"

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/error-stack-window/error-stack-window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStackWindowComponent", function() { return ErrorStackWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorStackWindowComponent = (function () {
    function ErrorStackWindowComponent() {
        /**
         * 异常堆栈窗口是否显示
         */
        this.showErrorStackWindow = false;
        this.errorToken = '#GSPDBOError#';
    }
    ErrorStackWindowComponent.prototype.ngOnInit = function () {
    };
    ErrorStackWindowComponent.prototype.ngOnChanges = function (changes) {
        // 初次加载不显示
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(changes.triggerShowWindow) || Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(changes.triggerShowWindow.previousValue)) {
            return;
        }
        if (!this.showErrorStackWindow) {
            this.showModal();
        }
    };
    ErrorStackWindowComponent.prototype.showModal = function () {
        this.showErrorStackWindow = true;
    };
    /**
     * 关闭弹窗
     */
    ErrorStackWindowComponent.prototype.closeErrorStackWindow = function () {
        this.showErrorStackWindow = false;
    };
    /**
     * 复制异常堆栈信息
     */
    ErrorStackWindowComponent.prototype.copyErrorStack = function () {
        var range = document.createRange();
        range.selectNode(document.getElementById('errorStack'));
        var selection = window.getSelection();
        if (selection.rangeCount > 0) {
            selection.removeAllRanges();
        }
        selection.addRange(range);
        document.execCommand('copy');
        alert('复制成功！');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ErrorStackWindowComponent.prototype, "triggerShowWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ErrorStackWindowComponent.prototype, "errorStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ErrorStackWindowComponent.prototype, "errorStackHead", void 0);
    ErrorStackWindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error-stack-window',
            template: __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/error-stack-window/error-stack-window.component.html"),
            styles: [__webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/error-stack-window/error-stack-window.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorStackWindowComponent);
    return ErrorStackWindowComponent;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/indexes-manager/indexes-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n\r\n.calc-rules.createNav {\r\n  background: #e8edf2;\r\n  height: 40px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle {\r\n  padding: 0px 10px;\r\n  color: #666666;\r\n  line-height: 40px;\r\n  cursor: pointer;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.active {\r\n  color: #FFFFFF;\r\n  background-color: #0072c6 !important;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle:not(:first-child).active {\r\n  margin-left: -17px;\r\n  padding-left: 25px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.disable {\r\n  color: #cdcdcf;\r\n}\r\n\r\n.calc-rules .triangle_border_right {\r\n  width: 0;\r\n  height: 0;\r\n  border-width: 20px 0 20px 18px;\r\n  border-style: solid;\r\n  border-color: transparent transparent transparent #cccccc;\r\n  position: relative;\r\n}\r\n\r\n.calc-rules .triangle_border_right span {\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border-width: 20px 0px 20px 18px;\r\n  border-style: solid;\r\n  border-color: transparent transparent transparent #e8edf2;\r\n  position: absolute;\r\n  top: -20px;\r\n  left: -20px;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active {\r\n  width: 0;\r\n  height: 0;\r\n  border-width: 20px 0 20px 20px;\r\n  border-color: transparent transparent transparent #e8edf2;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active span {\r\n  border-width: 20px 0 20px 20px;\r\n  border-color: transparent transparent transparent #0072c6;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/indexes-manager/indexes-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light border-bottom mb-1 py-1\">\r\n  <button kendoButton class=\"mr-1\" [look]=\"'bare'\" (click)=\"addIndex()\">新增索引</button>\r\n  <button kendoButton class=\"mr-1\" [look]=\"'bare'\" (click)=\"deleteIndex()\">删除索引</button>\r\n  <button kendoButton class=\"mr-1\" [look]=\"'bare'\" (click)=\"editIndexColumns()\">编辑索引关联字段</button>\r\n</div>\r\n<div class=\"d-flex mr-1\" style=\"flex:1;height: 100%;\">\r\n<div class=\"k-grid border-right d-flex mr-1\" style=\" width: 70%;\">\r\n    <kendo-grid #grid style=\"flex: 1 auto\" [data]=\"indexes\" (cellClick)=\"cellClickHandler($event)\"\r\n      (cellClose)=\"cellCloseHandler($event)\" (cancel)=\"cancelAddNewItemHandler($event)\" (save)=\"confirmHandler($event)\"\r\n      (remove)=\"removeColumn($event)\" (add)=\"addHandler($event)\" [selectable]=\"true\" [kendoGridSelectBy]=\"'id'\"\r\n      [selectedKeys]=\"selectedIndexes\">\r\n      <kendo-grid-column [class]=\"{'g-grid-cell': true}\" field=\"code\" title=\"索引编号\" width=\"90\" [headerStyle]=\"{'text-align': 'center'}\"></kendo-grid-column>\r\n      <kendo-grid-column [class]=\"{'g-grid-cell': true}\" field=\"name\" title=\"索引名称\" width=\"90\" [headerStyle]=\"{'text-align': 'center'}\"></kendo-grid-column>\r\n<kendo-grid-column field=\"isUnique_Constraint\" title=\"唯一\" width=\"55\" [headerStyle]=\"{'text-align': 'center'}\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n<input #IsUniqueColumn type=\"checkbox\" [checked]=\"dataItem.isUnique_Constraint\" (click)=\"changeIsUniqueCheck(IsUniqueColumn.checked,dataItem)\" />\r\n        </ng-template>\r\n      </kendo-grid-column>\r\n<kendo-grid-column field=\"isCluster_Constraint\" title=\"聚集索引\" width=\"55\" [headerStyle]=\"{'text-align': 'center'}\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n<input #IsClusterColumn type=\"checkbox\" [checked]=\"dataItem.isCluster_Constraint\" (click)=\"changeIsClusterCheck(IsClusterColumn.checked,dataItem)\" />\r\n        </ng-template>\r\n      </kendo-grid-column>\r\n      <kendo-grid-column field=\"ifPrimary_Key\" title=\"主键\" width=\"55\" [headerStyle]=\"{'text-align': 'center'}\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n          <input #IfPrimaryKeyColumn type=\"checkbox\" [checked]=\"dataItem.ifPrimary_Key\" (click)=\"changeIfPrimaryKeyCheck(IfPrimaryKeyColumn.checked,dataItem)\" />\r\n        </ng-template>\r\n      </kendo-grid-column>\r\n    </kendo-grid>\r\n  </div>\r\n<div class=\"k-grid border-left border-right d-flex mr-1\" style=\" width: 30%;\">\r\n<app-table-index-column-grid #tabelIndexColumnGrid [currentView]=\"currentView\" [currentIndexView]=\"currentIndexView\"></app-table-index-column-grid>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/indexes-manager/indexes-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexesManagerComponent", function() { return IndexesManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_lib_databaseobjecttable__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjecttable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable__ = __webpack_require__("./node_modules/immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_lib_databaseobjecttableview__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjecttableview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_lib_databaseobjectindex__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectindex.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_lib_databaseobjectindexview__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectindexview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_lib_databaseobjectindexviewlist__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectindexviewlist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__const_databaseobjectindexconst__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/const/databaseobjectindexconst.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__table_index_column_grid_table_index_column_grid_component__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-grid/table-index-column-grid.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var IndexesManagerComponent = (function () {
    function IndexesManagerComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.selectedIndexes = [];
        this.subscriptions = new Array();
    }
    IndexesManagerComponent.prototype.ngOnInit = function () {
        this.databaseObjectView = this.currentView;
    };
    IndexesManagerComponent.prototype.ngOnChanges = function (changes) {
        if (changes['databaseObject']) {
            this.databaseObject = changes['databaseObject'].currentValue;
            this.indexes = this.databaseObject.indexes;
        }
        if (changes['currentView']) {
            this.closeGridCell();
            // 更新viewObject
            this.databaseObjectView = changes['currentView'].currentValue;
            this.refresh();
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.indexes)) {
            this.currentIndex = this.indexes[0];
            this.currentIndexView = this.currentView.indexes.getItemByID(this.currentIndex.id);
        }
    };
    IndexesManagerComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeRefreshView();
    };
    IndexesManagerComponent.prototype.closeGridCell = function () {
        // 关闭所有正在编辑中的单元格
        this.grid.closeCell();
        // 取消所有编辑中的列
        this.grid.cancelCell();
        // 取消新增行
        this.grid.closeRow(-1);
    };
    IndexesManagerComponent.prototype.dataStateChange = function (state) {
    };
    IndexesManagerComponent.prototype.refresh = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.databaseObjectView)) {
            return;
        }
        this.currentDatabaseObject = this.databaseObjectView.toJS();
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.databaseObjectView.indexes) || this.databaseObjectView.indexes.length <= 0) {
            this.currentIndexView = null;
            this.indexes = null;
        }
        else {
            this.indexes = this.databaseObjectView.indexes.toJS();
        }
        this.subscribeRefreshView();
    };
    /**
         * 订阅视图刷新事件
         */
    IndexesManagerComponent.prototype.subscribeRefreshView = function () {
        var _this = this;
        this.unsubscribeRefreshView();
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.databaseObjectView.indexes)) {
            this.currentIndex = null;
            return;
        }
        // 订阅当前关联数据源的值刷新事件
        // 每次刷新后，需重新绑定字段列表的事件
        var refreshViewSubscription = this.databaseObjectView.indexes.refreshView.subscribe(function (value) {
            if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(_this.databaseObjectView)) {
                return;
            }
            _this.currentDatabaseObject = _this.databaseObjectView.toJS();
            if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(_this.databaseObjectView.indexes) || _this.databaseObjectView.indexes.length <= 0) {
                _this.indexes = null;
                _this.currentIndex = null;
                _this.currentIndexView = null;
            }
            else {
                _this.indexes = _this.databaseObjectView.indexes.toJS();
                if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(_this.currentIndex)) {
                    _this.currentIndex = _this.indexes[0];
                }
                _this.currentIndexView = _this.currentView.indexes.getItemByID(_this.currentIndex.id);
            }
        });
        this.subscriptions.push(refreshViewSubscription);
    };
    /**
     * 取消订阅视图刷新事件
     */
    IndexesManagerComponent.prototype.unsubscribeRefreshView = function () {
        while (this.subscriptions.length > 0) {
            var subscription = this.subscriptions.pop();
            subscription.unsubscribe();
        }
    };
    IndexesManagerComponent.prototype.addIndex = function () {
        var newIndex = new __WEBPACK_IMPORTED_MODULE_7__utils_lib_databaseobjectindex__["DatabaseObjectIndex"]();
        this.addNewIndex(newIndex);
    };
    IndexesManagerComponent.prototype.addNewIndex = function (item) {
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.databaseObjectView.indexes) || this.databaseObjectView.indexes.length <= 0) {
            this.databaseObjectView.indexes = new __WEBPACK_IMPORTED_MODULE_9__utils_lib_databaseobjectindexviewlist__["DatabaseObjectIndexViewList"](new Array());
        }
        this.databaseObjectView.indexes.add(new __WEBPACK_IMPORTED_MODULE_8__utils_lib_databaseobjectindexview__["DatabaseObjectIndexView"](Object(__WEBPACK_IMPORTED_MODULE_5_immutable__["Map"])(item)));
        this.refresh();
    };
    IndexesManagerComponent.prototype.deleteIndex = function () {
        if (this.selectedIndexes.length === 0) {
            alert('请先选中要删除的字段。');
        }
        else {
            // while (this.selectedIndexes.length !== 0) {
            var id = this.selectedIndexes.pop();
            this.databaseObjectView.indexes.removeByID(id);
            // }
        }
    };
    /**
       * 新增后的行按钮（确认）
       */
    IndexesManagerComponent.prototype.confirmHandler = function (_a) {
        var sender = _a.sender, formGroup = _a.formGroup, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        if (formGroup.valid) {
            var ele = this.mergeFormGroupValue(formGroup);
            this.addNewIndex(ele);
            sender.closeRow(rowIndex);
        }
    };
    /**
     * 合并表格中的信息与默认新增信息
     * @param formGroup
     */
    IndexesManagerComponent.prototype.mergeFormGroupValue = function (formGroup) {
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(formGroup)) {
            alert('当前字段信息未定义。'); // 异常
        }
        var ele = formGroup.value['column'];
        ele.Name = formGroup.value['Name'];
        ele.ID = formGroup.value['ID'];
        ele.IsUnique = formGroup.value['IsUnique'];
        ele.IsCluster = formGroup.value['IsCluster'];
        ele.IfPrimaryKey = formGroup.value['IfPrimaryKey'];
        ele.Columns = formGroup.value['Columns'];
        return ele;
    };
    /**
     * 新增后的行按钮（取消）
     */
    IndexesManagerComponent.prototype.cancelAddNewItemHandler = function (args) {
        var sender = args.sender, rowIndex = args.rowIndex;
        sender.closeRow(rowIndex);
    };
    IndexesManagerComponent.prototype.cellClickHandler = function (args) {
        var sender = args.sender, rowIndex = args.rowIndex, columnIndex = args.columnIndex, column = args.column, dataItem = args.dataItem, isEdited = args.isEdited, isNew = args.isNew;
        // 若为新增行，不响应
        if (rowIndex === -1) {
            return;
        }
        // 选中当前字段
        this.databaseObjectView.indexes.setSelectIndexByID(dataItem.id);
        this.selectChanged(dataItem);
        // ② 编辑属性
        if (!isEdited) {
            sender.editCell(rowIndex, columnIndex, this.createFormGroup(dataItem));
            return;
        }
    };
    IndexesManagerComponent.prototype.createFormGroup = function (index) {
        return this.formBuilder.group({
            'code': [index.code],
            'name': [index.name],
            'isCluster': [index.isCluster],
            'isUnique': [index.isUnique],
            'ifPrimaryKey': [index.ifPrimaryKey],
            'id': [index.id],
            'index': [index],
            'columns': [index.columns]
        });
    };
    IndexesManagerComponent.prototype.cellCloseHandler = function (args) {
        var sender = args.sender, formGroup = args.formGroup, dataItem = args.dataItem, rowIndex = args.rowIndex, column = args.column;
        if (!formGroup.valid) {
            // 若验证不通过，则编辑器不失焦
            args.preventDefault();
        }
        else if (formGroup.dirty) {
            var propertyName = column.field;
            var newValue = formGroup.value[propertyName];
            // 当前属性赋值
            this.changeCurrentProperty(propertyName, dataItem, newValue);
        }
    };
    IndexesManagerComponent.prototype.changeCurrentProperty = function (propertyName, dataItem, newValue) {
        // ③ 允许修改属性
        this.updateValueByElementId(dataItem.id, propertyName, newValue);
    };
    /**
  * 根据字段ID更新属性值
  * @param elementId 字段ID
  * @param propertyName 属性名
  * @param propertyValue 属性值
  */
    IndexesManagerComponent.prototype.updateValueByElementId = function (elementId, propertyName, propertyValue) {
        this.databaseObjectView.indexes.updateByID(elementId, function (elementView) {
            elementView.update(propertyName, function (oldValue) { return propertyValue; });
            return elementView;
        });
    };
    IndexesManagerComponent.prototype.removeColumn = function (args) {
    };
    IndexesManagerComponent.prototype.addHandler = function (args) {
    };
    IndexesManagerComponent.prototype.changeIsUniqueCheck = function (isUnique, index) {
        this.updateValueByElementId(index.id, __WEBPACK_IMPORTED_MODULE_10__const_databaseobjectindexconst__["DatabaseObjectIndexConst"].IsUnique_Constraint, isUnique);
    };
    IndexesManagerComponent.prototype.changeIsClusterCheck = function (isCluster, index) {
        if (!isCluster) {
            this.updateValueByElementId(index.id, __WEBPACK_IMPORTED_MODULE_10__const_databaseobjectindexconst__["DatabaseObjectIndexConst"].IsCluster_Constraint, isCluster);
            return;
        }
        var indexes = this.currentView.indexes.toJS();
        var isExistCluster = false;
        indexes.forEach(function (eccIndex) {
            if (eccIndex.isCluster_Constraint) {
                isExistCluster = true;
            }
        });
        if (isExistCluster) {
            alert('索引集合中已存在聚集索引，不允许当前索引添加聚集属性。');
            this.updateValueByElementId(index.id, __WEBPACK_IMPORTED_MODULE_10__const_databaseobjectindexconst__["DatabaseObjectIndexConst"].IsCluster_Constraint, false);
            return;
        }
        this.updateValueByElementId(index.id, __WEBPACK_IMPORTED_MODULE_10__const_databaseobjectindexconst__["DatabaseObjectIndexConst"].IsCluster_Constraint, isCluster);
    };
    IndexesManagerComponent.prototype.changeIfPrimaryKeyCheck = function (ifPrimaryKey, index) {
        if (!ifPrimaryKey) {
            this.updateValueByElementId(index.id, __WEBPACK_IMPORTED_MODULE_10__const_databaseobjectindexconst__["DatabaseObjectIndexConst"].IfPrimary_Key, ifPrimaryKey);
            return;
        }
        var indexes = this.currentView.indexes.toJS();
        var isExistPrimaryKeyIndex = false;
        indexes.forEach(function (eccIndex) {
            if (eccIndex.ifPrimary_Key) {
                isExistPrimaryKeyIndex = true;
            }
        });
        if (isExistPrimaryKeyIndex) {
            alert('索引集合中已存在含有主键的索引，不允许当前索引添加主键。');
            this.updateValueByElementId(index.id, __WEBPACK_IMPORTED_MODULE_10__const_databaseobjectindexconst__["DatabaseObjectIndexConst"].IfPrimary_Key, false);
            return;
        }
        this.updateValueByElementId(index.id, __WEBPACK_IMPORTED_MODULE_10__const_databaseobjectindexconst__["DatabaseObjectIndexConst"].IfPrimary_Key, ifPrimaryKey);
    };
    IndexesManagerComponent.prototype.selectChanged = function (dataItem) {
        this.currentIndex = dataItem;
        this.currentIndexView = this.currentView.indexes.getItemByID(dataItem.id);
    };
    IndexesManagerComponent.prototype.editIndexColumns = function () {
        if (this.selectedIndexes.length === 0) {
            alert('请先选中要编辑的索引字段。');
            return;
        }
        else {
            // while (this.selectedIndexes.length !== 0) {
            this.tabelIndexColumnGrid.editIndexColumns();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__utils_lib_databaseobjecttable__["DatabaseObjectTable"])
    ], IndexesManagerComponent.prototype, "databaseObject", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__utils_lib_databaseobjecttableview__["DatabaseObjectTableView"])
    ], IndexesManagerComponent.prototype, "currentView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grid'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["GridComponent"])
    ], IndexesManagerComponent.prototype, "grid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tabelIndexColumnGrid'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__table_index_column_grid_table_index_column_grid_component__["TableIndexColumnGridComponent"])
    ], IndexesManagerComponent.prototype, "tabelIndexColumnGrid", void 0);
    IndexesManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-indexes-manager',
            template: __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/indexes-manager/indexes-manager.component.html"),
            styles: [__webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/indexes-manager/indexes-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], IndexesManagerComponent);
    return IndexesManagerComponent;
}());

// }


/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-designer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDesignerModule", function() { return TableDesignerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_designer_table_designer_component__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-designer/table-designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__columns_manager_columns_manager_component__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/columns-manager/columns-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__indexes_manager_indexes_manager_component__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/indexes-manager/indexes-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_object_service__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/database-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_treeview__ = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__columns_manager_ColumnsUtils__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/columns-manager/ColumnsUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__progress_kendo_angular_dialog__ = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__progress_kendo_angular_popup__ = __webpack_require__("./node_modules/@progress/kendo-angular-popup/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__basic_info_card_basic_info_card_component__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/basic-info-card/basic-info-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__table_index_column_grid_table_index_column_grid_component__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-grid/table-index-column-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__table_index_column_edit_table_index_column_edit_component__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-edit/table-index-column-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__error_stack_window_error_stack_window_component__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/error-stack-window/error-stack-window.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















// import { MessagerModule } from '@farris/ui';
var TableDesignerModule = (function () {
    function TableDesignerModule() {
    }
    TableDesignerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_15__progress_kendo_angular_buttons__["ButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_grid__["GridModule"],
                __WEBPACK_IMPORTED_MODULE_13__progress_kendo_angular_layout__["SplitterModule"],
                __WEBPACK_IMPORTED_MODULE_14__progress_kendo_angular_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_16__progress_kendo_angular_popup__["PopupModule"],
                __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_dropdowns__["DropDownsModule"],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_inputs__["InputsModule"],
                __WEBPACK_IMPORTED_MODULE_15__progress_kendo_angular_buttons__["ButtonGroupModule"],
                __WEBPACK_IMPORTED_MODULE_15__progress_kendo_angular_buttons__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_13__progress_kendo_angular_layout__["LayoutModule"],
                __WEBPACK_IMPORTED_MODULE_10__progress_kendo_angular_treeview__["TreeViewModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_dropdowns__["DropDownListModule"],
                // MessagerModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__table_designer_table_designer_component__["TableDesignerComponent"], __WEBPACK_IMPORTED_MODULE_20__error_stack_window_error_stack_window_component__["ErrorStackWindowComponent"]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__table_designer_table_designer_component__["TableDesignerComponent"], __WEBPACK_IMPORTED_MODULE_5__database_object_service__["DatabaseObjectService"], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["HttpClient"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__table_designer_table_designer_component__["TableDesignerComponent"]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__table_designer_table_designer_component__["TableDesignerComponent"],
                __WEBPACK_IMPORTED_MODULE_3__columns_manager_columns_manager_component__["ColumnsManagerComponent"],
                __WEBPACK_IMPORTED_MODULE_11__columns_manager_ColumnsUtils__["GSPDBODataTypeConvert"],
                __WEBPACK_IMPORTED_MODULE_4__indexes_manager_indexes_manager_component__["IndexesManagerComponent"],
                __WEBPACK_IMPORTED_MODULE_17__basic_info_card_basic_info_card_component__["BasicInfoCardComponent"],
                __WEBPACK_IMPORTED_MODULE_18__table_index_column_grid_table_index_column_grid_component__["TableIndexColumnGridComponent"],
                __WEBPACK_IMPORTED_MODULE_19__table_index_column_edit_table_index_column_edit_component__["TableIndexColumnEditComponent"],
                __WEBPACK_IMPORTED_MODULE_20__error_stack_window_error_stack_window_component__["ErrorStackWindowComponent"]
            ]
        })
    ], TableDesignerModule);
    return TableDesignerModule;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-designer/table-designer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".baseInfoInput {\r\n  display: inline-block;\r\n  width: 300px;\r\n}\r\n\r\n:host {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n#tableManager .k-content {\r\n  padding: 0 !important;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.calc-rules.createNav {\r\n  background: #e8edf2;\r\n  height: 40px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle {\r\n  padding: 0px 10px;\r\n  color: #666666;\r\n  line-height: 40px;\r\n  cursor: pointer;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.active {\r\n  color: #FFFFFF;\r\n  background-color: #0072c6 !important;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle:not(:first-child).active {\r\n  margin-left: -17px;\r\n  padding-left: 25px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.disable {\r\n  color: #cdcdcf;\r\n}\r\n\r\n.calc-rules .triangle_border_right {\r\n  width: 0;\r\n  height: 0;\r\n  border-width: 20px 0 20px 18px;\r\n  border-style: solid;\r\n  border-color: transparent transparent transparent #cccccc;\r\n  position: relative;\r\n}\r\n\r\n.calc-rules .triangle_border_right span {\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border-width: 20px 0px 20px 18px;\r\n  border-style: solid;\r\n  border-color: transparent transparent transparent #e8edf2;\r\n  position: absolute;\r\n  top: -20px;\r\n  left: -20px;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active {\r\n  width: 0;\r\n  height: 0;\r\n  border-width: 20px 0 20px 20px;\r\n  border-color: transparent transparent transparent #e8edf2;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active span {\r\n  border-width: 20px 0 20px 20px;\r\n  border-color: transparent transparent transparent #0072c6;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-designer/table-designer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\" style=\"flex:1;\">\r\n  <div class=\"border-bottom\">\r\n    <button kendoButton [look]=\"'bare'\" (click)=\"saveDatabaseObject()\">保存</button>\r\n    <button kendoButton [look]=\"'bare'\" (click)=\"reloadDatabaseObject()\">撤销</button>\r\n  </div>\r\n  <div id=\"tableManager\" style=\"overflow-y:auto; flex: 1; display: flex; flex-direction: column;\">\r\n    <div id=\"objTree\" class=\"d-flex\" style=\"flex: 1; flex-direction: row;\">\r\n      <div class=\"d-flex\" style=\"flex:1; flex-direction: column\">\r\n        <app-basic-info-card #basicInfoCard [databaseObject]=\"databaseObject\" [currentView]=\"currentView\"></app-basic-info-card>\r\n        <kendo-tabstrip #tab style=\"flex: 1;\" (tabSelect)=\"tabSelectChange($event)\">\r\n          <kendo-tabstrip-tab [selected]=\"currentTabTitle===tabNameColumn\" style=\"flex: 1;\" [title]=\"tabNameColumn\">\r\n            <ng-template kendoTabContent>\r\n              <div class=\"bg-light border-bottom mb-1 py-1\">\r\n                <button kendoButton class=\"mr-1\" [look]=\"'bare'\" (click)=\"addColumn()\">新增字段</button>\r\n                <button kendoButton class=\"mr-1\" [look]=\"'bare'\" (click)=\"deleteColumn()\">删除字段</button>\r\n              </div>\r\n              <app-columns-manager #columnCollection [databaseObject]=\"databaseObject\" [currentView]=\"currentView\"></app-columns-manager>\r\n            </ng-template>\r\n          </kendo-tabstrip-tab>\r\n          <kendo-tabstrip-tab [selected]=\"currentTabTitle===tabNameIndex\" style=\"flex: 1;\" [title]=\"tabNameIndex\">\r\n            <ng-template kendoTabContent>\r\n              <app-indexes-manager #indexCollection [databaseObject]=\"databaseObject\" [currentView]=\"currentView\"></app-indexes-manager>\r\n            </ng-template>\r\n          </kendo-tabstrip-tab>\r\n        </kendo-tabstrip>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-error-stack-window [triggerShowWindow]=\"showErrorStackWindow\" [errorStackHead]=\"errorStackHead\" [errorStack]=\"errorStack\"></app-error-stack-window>\r\n"

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-designer/table-designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDesignerComponent", function() { return TableDesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__columns_manager_columns_manager_component__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/columns-manager/columns-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_object_service__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/database-object.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_lib_databaseobjecttableview__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjecttableview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__indexes_manager_indexes_manager_component__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/indexes-manager/indexes-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basic_info_card_basic_info_card_component__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/basic-info-card/basic-info-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TableDesignerComponent = (function () {
    function TableDesignerComponent(databaseObjectService) {
        this.databaseObjectService = databaseObjectService;
        this.tabNameColumn = '字段集合';
        this.tabNameIndex = '索引集合';
        this.currentTabTitle = this.tabNameColumn;
        /**
       * 异常堆栈窗口是否显示
       */
        this.showErrorStackWindow = false;
        this.errorToken = '#GSPDBOError#';
        this.savedErrorToken = '#saved#';
    }
    TableDesignerComponent.prototype.ngOnInit = function () {
        // 解析URL，获取relativePath和fileName
        this.resolveUrl();
        this.reloadDatabaseObject();
    };
    TableDesignerComponent.prototype.resolveUrl = function () {
        this.fileUri = this.fileUri.replace(/\\/g, '/');
        var s = this.fileUri.split('/');
        this.fileName = s[s.length - 1];
        this.relativePath = this.fileUri.substring(1, this.fileUri.lastIndexOf('/'));
    };
    TableDesignerComponent.prototype.saveDatabaseObject = function () {
        var _this = this;
        if (!Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(this.columnCollection)) {
            this.columnCollection.closeGridCell();
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(this.indexCollection)) {
            this.indexCollection.closeGridCell();
        }
        var table = this.currentView.toJS();
        this.databaseObjectService.saveDatabaseObject(this.relativePath, this.fileName, table).subscribe(function (response) {
            if (response.status === 200) {
                alert('保存成功！');
                _this.reloadDatabaseObject();
            }
        }, function (error) {
            var head = '保存失败。';
            var errorString = (error.text ? error.text() : error.text);
            _this.handleErrorString(head, errorString);
        });
    };
    /**
   * 显示异常堆栈
   */
    TableDesignerComponent.prototype.showErrorStack = function (errorHead, errorMessage) {
        this.errorStackHead = errorHead;
        this.errorStack = errorMessage;
        this.showErrorStackWindow = !this.showErrorStackWindow;
    };
    /**
       * 异常处理
       * @param head
       * @param errorString
       */
    TableDesignerComponent.prototype.handleErrorString = function (head, errorString) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(errorString) && errorString.includes(this.errorToken)) {
            var strings = errorString.split(this.errorToken);
            var errorMessage = strings[1];
            this.showErrorStack(head, errorMessage);
        }
        else {
            this.showErrorStack(head, errorString);
        }
    };
    TableDesignerComponent.prototype.reloadDatabaseObject = function () {
        var _this = this;
        this.databaseObjectService.LoadDBO(this.fileUri).subscribe(function (result) {
            _this.databaseObject = result;
            _this.currentView = new __WEBPACK_IMPORTED_MODULE_3__utils_lib_databaseobjecttableview__["DatabaseObjectTableView"](result);
        });
    };
    TableDesignerComponent.prototype.addColumn = function () {
        this.columnCollection.addColumn();
    };
    TableDesignerComponent.prototype.deleteColumn = function () {
        this.columnCollection.deleteColumn();
    };
    TableDesignerComponent.prototype.tabSelectChange = function (args) {
        var title = args.title;
        this.currentTabTitle = title;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('columnCollection'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__columns_manager_columns_manager_component__["ColumnsManagerComponent"])
    ], TableDesignerComponent.prototype, "columnCollection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('indexCollection'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__indexes_manager_indexes_manager_component__["IndexesManagerComponent"])
    ], TableDesignerComponent.prototype, "indexCollection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('basicInfoCard'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__basic_info_card_basic_info_card_component__["BasicInfoCardComponent"])
    ], TableDesignerComponent.prototype, "basicInfoCard", void 0);
    TableDesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-designer',
            template: __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-designer/table-designer.component.html"),
            styles: [__webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-designer/table-designer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__database_object_service__["DatabaseObjectService"]])
    ], TableDesignerComponent);
    return TableDesignerComponent;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-edit/table-index-column-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n#bemain .k-content {\r\n  padding: 0 !important;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.calc-rules.createNav {\r\n  background: #e8edf2;\r\n  height: 40px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle {\r\n  padding: 0px 10px;\r\n  color: #666666;\r\n  line-height: 40px;\r\n  cursor: pointer;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.active {\r\n  color: #FFFFFF;\r\n  background-color: #0072c6 !important;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle:not(:first-child).active {\r\n  margin-left: -17px;\r\n  padding-left: 25px;\r\n}\r\n\r\n.calc-rules.createNav .stepTitle.disable {\r\n  color: #cdcdcf;\r\n}\r\n\r\n.calc-rules .triangle_border_right {\r\n  width: 0;\r\n  height: 0;\r\n  border-width: 20px 0 20px 18px;\r\n  border-style: solid;\r\n  border-color: transparent transparent transparent #cccccc;\r\n  position: relative;\r\n}\r\n\r\n.calc-rules .triangle_border_right span {\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border-width: 20px 0px 20px 18px;\r\n  border-style: solid;\r\n  border-color: transparent transparent transparent #e8edf2;\r\n  position: absolute;\r\n  top: -20px;\r\n  left: -20px;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active {\r\n  width: 0;\r\n  height: 0;\r\n  border-width: 20px 0 20px 20px;\r\n  border-color: transparent transparent transparent #e8edf2;\r\n}\r\n\r\n.calc-rules .triangle_border_right.active span {\r\n  border-width: 20px 0 20px 20px;\r\n  border-color: transparent transparent transparent #0072c6;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-edit/table-index-column-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-dialog *ngIf=\"active\" (close)=\"closeForm()\" width=\"800\" height=\"800\">\r\n  <kendo-dialog-titlebar>\r\n    索引关联字段编辑\r\n  </kendo-dialog-titlebar>\r\n  <div class=\"d-flex\" style=\"flex: 1; flex-direction: row;\">\r\n    <div class=\"d-flex\" style=\"flex:1; flex-direction: row\">\r\n      <kendo-grid #grid style=\"height: 100%;\" [data]=\"columns\" [selectable]=\"selectableSettings\" [kendoGridSelectBy]=\"'id'\"\r\n[selectedKeys]=\"eleSelection\" >\r\n\r\n        <kendo-grid-checkbox-column width=\"30\" resizable=\"false\" showSelectAll=\"true\"></kendo-grid-checkbox-column>\r\n<kendo-grid-column field=\"code\" title=\"字段编号\" width=\"100\" [headerStyle]=\"{'text-align': 'center'}\" ></kendo-grid-column>\r\n<kendo-grid-column field=\"name\" title=\"字段名称\" width=\"100\" [headerStyle]=\"{'text-align': 'center'}\" >\r\n        </kendo-grid-column>\r\n      </kendo-grid>\r\n    </div>\r\n  </div>\r\n  <kendo-dialog-actions>\r\n    <button class=\"k-button k-primary\" (click)=\"onConfirm($event)\">确认</button>\r\n    <button class=\"k-button\" (click)=\"onCancel($event)\">取消</button>\r\n  </kendo-dialog-actions>\r\n</kendo-dialog>\r\n"

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-edit/table-index-column-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableIndexColumnEditComponent", function() { return TableIndexColumnEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_lib_databaseobjecttableview__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjecttableview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_lib_databaseobjectindex__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectindex.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_lib_requestelement__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/requestelement.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TableIndexColumnEditComponent = (function () {
    function TableIndexColumnEditComponent() {
        this.active = false;
        this.selectedKeys = [];
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * 允许多选
         */
        this.selectableSettings = {
            mode: 'multiple'
        };
        /**
         * 当前引用字段id集合，设置为选中
         */
        this.eleSelection = [];
    }
    TableIndexColumnEditComponent.prototype.ngOnInit = function () {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(this.currentView) && !Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(this.currentView.columns)) {
            this.columns = this.currentView.columns.toJS();
        }
    };
    TableIndexColumnEditComponent.prototype.ngOnChanges = function (changes) {
        if (changes['currentView']) {
            this.currentView = changes['currentView'].currentValue;
            this.columns = this.currentView.columns.toJS();
        }
        if (changes['currentIndex']) {
            this.currentIndex = changes['currentIndex'].currentValue;
        }
    };
    /**
     * 加载
     * @param refViewElements 关联字段集合
     * @param refModel 关联模型
     */
    TableIndexColumnEditComponent.prototype.load = function (index, columns, currentObject) {
        this.active = true;
        // 设置当前选中对象
        this.currentIndex = index ? index : this.currentIndex;
        if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(this.currentIndex)) {
            this.selectedKeys = [this.currentIndex.id];
        }
        this.getObjectElements(currentObject);
        this.getSelectElements(columns);
    };
    /**
     * 获取当前引用字段集合
     * @param refModel 关联模型
     */
    TableIndexColumnEditComponent.prototype.getObjectElements = function (currentObject) {
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(currentObject) || Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(currentObject.columns)) {
            this.columns = [];
            return;
        }
        this.columns = currentObject.columns;
    };
    /**
     * 根据当前引用字段集合获取选中状态
     */
    TableIndexColumnEditComponent.prototype.getSelectElements = function (columns) {
        var _this = this;
        this.eleSelection = [];
        if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(columns)) {
            columns.forEach(function (item) {
                if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(_this.eleSelection.find(function (selection) { return selection === item.id; }))) {
                    _this.eleSelection.push(item.id);
                }
            });
        }
    };
    TableIndexColumnEditComponent.prototype.onConfirm = function (e) {
        e.preventDefault();
        var requestElement = new __WEBPACK_IMPORTED_MODULE_4__utils_lib_requestelement__["RequestElement"]();
        requestElement.RequestElementKey = this.currentIndex.id;
        // 若选中子节点，则记录当前子节点ID，否则key为空
        if (this.eleSelection.length === 0) {
            this.save.emit(null);
        }
        else {
            requestElement.RequestElementValue = this.eleSelection;
            this.save.emit(requestElement);
        }
        this.closeForm();
    };
    TableIndexColumnEditComponent.prototype.onCancel = function (e) {
        e.preventDefault();
        this.closeForm();
    };
    TableIndexColumnEditComponent.prototype.closeForm = function () {
        this.active = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__utils_lib_databaseobjecttableview__["DatabaseObjectTableView"])
    ], TableIndexColumnEditComponent.prototype, "currentView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__utils_lib_databaseobjectindex__["DatabaseObjectIndex"])
    ], TableIndexColumnEditComponent.prototype, "currentIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TableIndexColumnEditComponent.prototype, "cancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TableIndexColumnEditComponent.prototype, "save", void 0);
    TableIndexColumnEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-index-column-edit',
            template: __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-edit/table-index-column-edit.component.html"),
            styles: [__webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-edit/table-index-column-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableIndexColumnEditComponent);
    return TableIndexColumnEditComponent;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-grid/table-index-column-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-grid/table-index-column-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid style=\"flex: 1;height: 100%;\" #grid [data]=\"indexColumns\">\r\n  <kendo-grid-column field=\"code\" title=\"字段编号\" width=\"100\" [headerStyle]=\"{'text-align': 'center'}\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"name\" title=\"字段名称\" width=\"100\" [headerStyle]=\"{'text-align': 'center'}\">\r\n  </kendo-grid-column>\r\n</kendo-grid>\r\n\r\n<app-table-index-column-edit #indexColumnsEdit [currentView]=\"currentView\" [currentIndex]=\"currentIndex\"\r\n (save)=\"saveHandler($event)\" (cancel)=\"cancelHandler($event)\">\r\n</app-table-index-column-edit>"

/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-grid/table-index-column-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableIndexColumnGridComponent", function() { return TableIndexColumnGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_index_column_edit_table_index_column_edit_component__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-edit/table-index-column-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_lib_databaseobjectindexview__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectindexview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_lib_databaseobjecttableview__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjecttableview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__const_databaseobjectindexconst__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/const/databaseobjectindexconst.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_lib_databaseobjectindexviewlist__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectindexviewlist.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TableIndexColumnGridComponent = (function () {
    function TableIndexColumnGridComponent() {
        this.subscriptions = new Array();
    }
    TableIndexColumnGridComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    TableIndexColumnGridComponent.prototype.ngOnChanges = function (changes) {
        if (changes['currentView']) {
            this.currentView = changes['currentView'].currentValue;
            this.table = this.currentView.toJS();
        }
        if (changes['currentIndexView']) {
            this.currentIndexView = changes['currentIndexView'].currentValue;
            if (!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.currentIndexView)) {
                this.currentIndex = this.currentIndexView.toJS();
            }
        }
        this.refresh();
    };
    TableIndexColumnGridComponent.prototype.refresh = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.currentIndexView) || Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.currentIndexView.columns)
            || this.currentIndexView.columns.length <= 0) {
            this.clearAllData();
            return;
        }
        else {
            this.indexColumns = this.currentIndexView.columns.toJS();
        }
    };
    TableIndexColumnGridComponent.prototype.clearAllData = function () {
        this.indexColumns = null;
    };
    TableIndexColumnGridComponent.prototype.closeGridCell = function () {
        // 关闭所有正在编辑中的单元格
        this.grid.closeCell();
        // 取消所有编辑中的列
        this.grid.cancelCell();
        // 取消新增行
        this.grid.closeRow(-1);
    };
    TableIndexColumnGridComponent.prototype.saveHandler = function (requestKeyValuePair) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(requestKeyValuePair)) {
            this.refresh();
            return;
        }
        var selectedIndexColumn = [];
        if (!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(requestKeyValuePair.RequestElementValue) && requestKeyValuePair.RequestElementValue.length > 0) {
            requestKeyValuePair.RequestElementValue.forEach(function (item) {
                var column = _this.currentView.columns.getItemByID(item).toJS();
                selectedIndexColumn.push(column);
            });
        }
        var columns = new __WEBPACK_IMPORTED_MODULE_7__utils_lib_databaseobjectindexviewlist__["DatabaseObjectIndexViewList"](selectedIndexColumn);
        this.updateValueByElementId(this.currentIndex.id, __WEBPACK_IMPORTED_MODULE_6__const_databaseobjectindexconst__["DatabaseObjectIndexConst"].Columns, columns);
        this.currentIndexView.update(__WEBPACK_IMPORTED_MODULE_6__const_databaseobjectindexconst__["DatabaseObjectIndexConst"].Columns, function (oldValue) { return columns; });
        this.refresh();
    };
    /**
  * 根据字段ID更新属性值
  * @param elementId 字段ID
  * @param propertyName 属性名
  * @param propertyValue 属性值
  */
    TableIndexColumnGridComponent.prototype.updateValueByElementId = function (elementId, propertyName, propertyValue) {
        this.currentView.indexes.updateByID(elementId, function (elementView) {
            elementView.update(propertyName, function (oldValue) { return propertyValue; });
            return elementView;
        });
    };
    TableIndexColumnGridComponent.prototype.cancelHandler = function (args) {
    };
    TableIndexColumnGridComponent.prototype.editIndexColumns = function () {
        this.editElements.load(this.currentIndex, this.indexColumns, this.table);
    };
    /**
         * 订阅视图刷新事件
         */
    TableIndexColumnGridComponent.prototype.subscribeRefreshView = function () {
        var _this = this;
        this.unsubscribeRefreshView();
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.currentView.indexes)) {
            return;
        }
        // 订阅当前关联数据源的值刷新事件
        // 每次刷新后，需重新绑定字段列表的事件
        var refreshViewSubscription = this.currentView.indexes.refreshView.subscribe(function (value) {
            if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(_this.currentView)) {
                _this.indexColumns = null;
                _this.currentIndexView = null;
                return;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(_this.currentIndexView)) {
                _this.indexColumns = null;
                _this.currentIndexView = null;
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(_this.currentIndexView.columns)
                || _this.currentIndexView.columns.length <= 0) {
                _this.indexColumns = null;
            }
            else {
                _this.indexColumns = _this.currentIndexView.columns.toJS();
            }
        });
        this.subscriptions.push(refreshViewSubscription);
    };
    /**
     * 取消订阅视图刷新事件
     */
    TableIndexColumnGridComponent.prototype.unsubscribeRefreshView = function () {
        while (this.subscriptions.length > 0) {
            var subscription = this.subscriptions.pop();
            subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grid'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_grid__["GridComponent"])
    ], TableIndexColumnGridComponent.prototype, "grid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('indexColumnsEdit'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__table_index_column_edit_table_index_column_edit_component__["TableIndexColumnEditComponent"])
    ], TableIndexColumnGridComponent.prototype, "editElements", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__utils_lib_databaseobjecttableview__["DatabaseObjectTableView"])
    ], TableIndexColumnGridComponent.prototype, "currentView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__utils_lib_databaseobjectindexview__["DatabaseObjectIndexView"])
    ], TableIndexColumnGridComponent.prototype, "currentIndexView", void 0);
    TableIndexColumnGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-index-column-grid',
            template: __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-grid/table-index-column-grid.component.html"),
            styles: [__webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/table-index-column-grid/table-index-column-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableIndexColumnGridComponent);
    return TableIndexColumnGridComponent;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/DatabaseObjectDto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectDto", function() { return DatabaseObjectDto; });
var DatabaseObjectDto = (function () {
    function DatabaseObjectDto(path, fileName, type, content) {
        this.path = path;
        this.fileName = fileName;
        this.type = type;
        this.content = content;
    }
    return DatabaseObjectDto;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectcolumn.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectColumn", function() { return DatabaseObjectColumn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guid__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/guid.ts");

var DatabaseObjectColumn = (function () {
    function DatabaseObjectColumn() {
        this.id = __WEBPACK_IMPORTED_MODULE_0__guid__["Guid"].newGuid();
        this.length = 36;
        this.precision = 0;
        this.dataType = 1;
        this.isNullable = true;
        this.ifPrimaryKey = false;
        this.scale = 0;
        this.defaultValue = '';
        this.isMultiLanguage = false;
    }
    return DatabaseObjectColumn;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectcolumnview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectColumnView", function() { return DatabaseObjectColumnView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_mapbase__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/base/mapbase.ts");
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

var DatabaseObjectColumnView = (function (_super) {
    __extends(DatabaseObjectColumnView, _super);
    /**
    * 构造函数
    * @param element
    */
    function DatabaseObjectColumnView(element) {
        return _super.call(this, element) || this;
    }
    return DatabaseObjectColumnView;
}(__WEBPACK_IMPORTED_MODULE_0__base_mapbase__["MapBase"]));



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectcolumnviewlist.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectColumnViewList", function() { return DatabaseObjectColumnViewList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_listbase__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/base/listbase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__databaseobjectcolumnview__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectcolumnview.ts");
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



var DatabaseObjectColumnViewList = (function (_super) {
    __extends(DatabaseObjectColumnViewList, _super);
    function DatabaseObjectColumnViewList(elements) {
        var _this = _super.call(this, elements) || this;
        if (elements) {
            _this.data = _this.getElements(_this.data);
        }
        return _this;
    }
    /**
     * 构造时获取当前对象的字段集合列表的List
     * @param elementArray
     */
    DatabaseObjectColumnViewList.prototype.getElements = function (elementArray) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(elementArray)) {
            return;
        }
        var databaseObjectColumnList = elementArray;
        if (elementArray.size > 0) {
            var _loop_1 = function (i) {
                databaseObjectColumnList = databaseObjectColumnList.update(i, function (obj) { return _this.getViewElement(elementArray.get(i)); });
            };
            for (var i = 0; i < elementArray.size; i++) {
                _loop_1(i);
            }
            return databaseObjectColumnList;
        }
    };
    /**
     * 构造时获取字段的Map
     * @param element
     */
    DatabaseObjectColumnViewList.prototype.getViewElement = function (element) {
        var viewEle = new __WEBPACK_IMPORTED_MODULE_2__databaseobjectcolumnview__["DatabaseObjectColumnView"](element);
        return viewEle;
    };
    return DatabaseObjectColumnViewList;
}(__WEBPACK_IMPORTED_MODULE_1__base_listbase__["ListBase"]));



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectindex.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectIndex", function() { return DatabaseObjectIndex; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guid__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/guid.ts");

var DatabaseObjectIndex = (function () {
    function DatabaseObjectIndex() {
        this.id = __WEBPACK_IMPORTED_MODULE_0__guid__["Guid"].newGuid();
        this.isUnique_Constraint = false;
        this.isCluster_Constraint = false;
        this.IfPrimary_Key = false;
        this.columns = new Array();
    }
    return DatabaseObjectIndex;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectindexview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectIndexView", function() { return DatabaseObjectIndexView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_mapbase__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/base/mapbase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__databaseobjectcolumnviewlist__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectcolumnviewlist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__const_databaseobjectconst__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/const/databaseobjectconst.ts");
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




var DatabaseObjectIndexView = (function (_super) {
    __extends(DatabaseObjectIndexView, _super);
    /**
    * 构造函数
    * @param element
    */
    function DatabaseObjectIndexView(element) {
        var _this = _super.call(this, element) || this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(element)) {
            return _this;
        }
        _this.data = _this.getCurrentViewObject(_this.data);
        return _this;
    }
    /**
 * 获取对象的Map
 * @param bizObject
 */
    DatabaseObjectIndexView.prototype.getCurrentViewObject = function (indexView) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(indexView)) {
            return;
        }
        var vo = indexView;
        vo = vo.update(__WEBPACK_IMPORTED_MODULE_3__const_databaseobjectconst__["DatabaseObjectConst"].Columns, function (columns) { return _this.getDatabaseObjectColumnViewList(columns); });
        return vo;
    };
    DatabaseObjectIndexView.prototype.getDatabaseObjectColumnViewList = function (bizElements) {
        var elementList = new __WEBPACK_IMPORTED_MODULE_2__databaseobjectcolumnviewlist__["DatabaseObjectColumnViewList"](bizElements);
        return elementList;
    };
    Object.defineProperty(DatabaseObjectIndexView.prototype, "columns", {
        get: function () {
            return this.get(__WEBPACK_IMPORTED_MODULE_3__const_databaseobjectconst__["DatabaseObjectConst"].Columns);
        },
        set: function (value) {
            this.set(__WEBPACK_IMPORTED_MODULE_3__const_databaseobjectconst__["DatabaseObjectConst"].Columns, value);
        },
        enumerable: true,
        configurable: true
    });
    return DatabaseObjectIndexView;
}(__WEBPACK_IMPORTED_MODULE_0__base_mapbase__["MapBase"]));



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectindexviewlist.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectIndexViewList", function() { return DatabaseObjectIndexViewList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_listbase__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/base/listbase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__databaseobjectindexview__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectindexview.ts");
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



var DatabaseObjectIndexViewList = (function (_super) {
    __extends(DatabaseObjectIndexViewList, _super);
    function DatabaseObjectIndexViewList(elements) {
        var _this = _super.call(this, elements) || this;
        if (elements) {
            _this.data = _this.getElements(_this.data);
        }
        return _this;
    }
    /**
     * 构造时获取当前对象的字段集合列表的List
     * @param elementArray
     */
    DatabaseObjectIndexViewList.prototype.getElements = function (elementArray) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(elementArray)) {
            return;
        }
        var databaseObjectIndexList = elementArray;
        if (elementArray.size > 0) {
            var _loop_1 = function (i) {
                databaseObjectIndexList = databaseObjectIndexList.update(i, function (obj) { return _this.getViewElement(elementArray.get(i)); });
            };
            for (var i = 0; i < elementArray.size; i++) {
                _loop_1(i);
            }
            return databaseObjectIndexList;
        }
    };
    /**
     * 构造时获取字段的Map
     * @param element
     */
    DatabaseObjectIndexViewList.prototype.getViewElement = function (element) {
        var viewEle = new __WEBPACK_IMPORTED_MODULE_2__databaseobjectindexview__["DatabaseObjectIndexView"](element);
        return viewEle;
    };
    return DatabaseObjectIndexViewList;
}(__WEBPACK_IMPORTED_MODULE_1__base_listbase__["ListBase"]));



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectspvf.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectSPVF", function() { return DatabaseObjectSPVF; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guid__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/guid.ts");

var DatabaseObjectSPVF = (function () {
    function DatabaseObjectSPVF(code, name, type) {
        this.id = __WEBPACK_IMPORTED_MODULE_0__guid__["Guid"].newGuid();
        this.code = code;
        this.name = name;
        this.type = 0;
    }
    return DatabaseObjectSPVF;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjecttable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectTable", function() { return DatabaseObjectTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guid__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/guid.ts");

var DatabaseObjectTable = (function () {
    function DatabaseObjectTable(code, name) {
        this.id = __WEBPACK_IMPORTED_MODULE_0__guid__["Guid"].newGuid();
        this.code = code;
        this.name = name;
        this.type = 0;
        this.columns = [];
        this.indexes = [];
        this.multiLanguageColumns = [];
        this.isI18nObject = false;
        this.isFiscalTable = false;
        this.isUsingTimeStamp = false;
        this.isSynHis = false;
        this.description = '';
        this.primaryKey = [];
    }
    return DatabaseObjectTable;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjecttableview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseObjectTableView", function() { return DatabaseObjectTableView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__databaseobjectcolumnviewlist__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectcolumnviewlist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_mapbase__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/base/mapbase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/const/databaseobjectconst.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__databaseobjectindexviewlist__ = __webpack_require__("./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/databaseobjectindexviewlist.ts");
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






var DatabaseObjectTableView = (function (_super) {
    __extends(DatabaseObjectTableView, _super);
    /**
     * 构造函数
     * @param object
     */
    function DatabaseObjectTableView(object) {
        var _this = _super.call(this, object) || this;
        /**
         * 业务对象名刷新事件
         */
        _this.refreshName = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(object)) {
            return _this;
        }
        _this.data = _this.getCurrentViewObject(_this.data);
        return _this;
    }
    /**
     * 获取对象的Map
     * @param bizObject
     */
    DatabaseObjectTableView.prototype.getCurrentViewObject = function (databseObject) {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(databseObject)) {
            return;
        }
        var vo = databseObject;
        vo = vo.update(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].Columns, function (columns) { return _this.getDatabaseObjectColumnViewList(columns); });
        vo = vo.update(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].Indexes, function (indeses) { return _this.getDatabaseObjectIndexViewList(indeses); });
        return vo;
    };
    DatabaseObjectTableView.prototype.getDatabaseObjectColumnViewList = function (bizElements) {
        var elementList = new __WEBPACK_IMPORTED_MODULE_0__databaseobjectcolumnviewlist__["DatabaseObjectColumnViewList"](bizElements);
        return elementList;
    };
    DatabaseObjectTableView.prototype.getDatabaseObjectIndexViewList = function (bizElements) {
        var elementList = new __WEBPACK_IMPORTED_MODULE_5__databaseobjectindexviewlist__["DatabaseObjectIndexViewList"](bizElements);
        return elementList;
    };
    Object.defineProperty(DatabaseObjectTableView.prototype, "columns", {
        get: function () {
            return this.get(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].Columns);
        },
        set: function (value) {
            this.set(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].Columns, value);
            this.refreshName.next(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseObjectTableView.prototype, "indexes", {
        get: function () {
            return this.get(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].Indexes);
        },
        set: function (value) {
            this.set(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].Indexes, value);
            this.refreshName.next(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseObjectTableView.prototype, "ID", {
        get: function () {
            return this.get(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].ID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseObjectTableView.prototype, "Description", {
        get: function () {
            return this.get(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].Description);
        },
        set: function (description) {
            this.set(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].Description, description);
            this.refreshName.next(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseObjectTableView.prototype, "Name", {
        get: function () {
            return this.get(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].Name);
        },
        set: function (name) {
            this.set(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].Name, name);
            this.refreshName.next(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseObjectTableView.prototype, "IsI18nObject", {
        get: function () {
            return this.get(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].IsI18nObject);
        },
        set: function (isI18nObject) {
            this.set(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].IsI18nObject, isI18nObject);
            this.refreshName.next(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseObjectTableView.prototype, "IsFiscalTable", {
        get: function () {
            return this.get(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].IsFiscalTable);
        },
        set: function (isFiscalTable) {
            this.set(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].IsFiscalTable, isFiscalTable);
            this.refreshName.next(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseObjectTableView.prototype, "IsUsingTimeStamp", {
        get: function () {
            return this.get(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].IsFiscalTable);
        },
        set: function (isUsingTimeStamp) {
            this.set(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].IsUsingTimeStamp, isUsingTimeStamp);
            this.refreshName.next(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseObjectTableView.prototype, "IsSynHis", {
        get: function () {
            return this.get(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].IsSynHis);
        },
        set: function (isSynHis) {
            this.set(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].IsSynHis, isSynHis);
            this.refreshName.next(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseObjectTableView.prototype, "Code", {
        get: function () {
            return this.get(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].Code);
        },
        set: function (code) {
            this.set(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].Code, code);
            this.refreshName.next(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseObjectTableView.prototype, "PrimaryKey", {
        get: function () {
            return this.get(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].PrimaryKey);
        },
        set: function (primaryKey) {
            this.set(__WEBPACK_IMPORTED_MODULE_2__const_databaseobjectconst__["DatabaseObjectConst"].PrimaryKey, primaryKey);
            this.refreshName.next(true);
        },
        enumerable: true,
        configurable: true
    });
    return DatabaseObjectTableView;
}(__WEBPACK_IMPORTED_MODULE_1__base_mapbase__["MapBase"]));



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/datatype.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return DataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSPDBODataTypes", function() { return GSPDBODataTypes; });
/**
 * 字段数据类型
 */
var DataType;
(function (DataType) {
    /**
    * 字符型
    */
    DataType[DataType["Char"] = 0] = "Char";
    /**
     * 文本
     */
    DataType[DataType["Varchar"] = 1] = "Varchar";
    /**
     * 备注
     */
    DataType[DataType["Clob"] = 2] = "Clob";
    /**
     * 整数
     */
    DataType[DataType["Int"] = 3] = "Int";
    /**
     * 浮点数
     */
    DataType[DataType["Decimal"] = 4] = "Decimal";
    /**
     * 日期型
     */
    DataType[DataType["DateTime"] = 5] = "DateTime";
    /**
     * 时间戳型
     */
    DataType[DataType["TimeStamp"] = 6] = "TimeStamp";
    /**
     * 二进制
     */
    DataType[DataType["Blob"] = 7] = "Blob";
    /**
     * Unicode字符数据类型
     */
    DataType[DataType["NChar"] = 8] = "NChar";
    /**
     * Unicode字符串数据类型
     */
    DataType[DataType["NVarchar"] = 9] = "NVarchar";
    /**
     * Unicode长文本
     */
    DataType[DataType["NClob"] = 10] = "NClob";
})(DataType || (DataType = {}));

var GSPDBODataTypes = [
    {
        text: '文本', value: DataType.Varchar, canChangeLength: true,
        canChangePresicion: false, canChangeScale: false, length: 22, precision: 0, scale: 0
    },
    {
        text: '备注', value: DataType.Clob, canChangeLength: false,
        canChangePresicion: false, canChangeScale: false, length: 0, precision: 0, scale: 0
    },
    {
        text: '整数', value: DataType.Int, canChangeLength: false,
        canChangePresicion: false, canChangeScale: false, length: 0, precision: 0, scale: 0
    },
    {
        text: '浮点数字', value: DataType.Decimal, canChangeLength: true,
        canChangePresicion: true, canChangeScale: true, length: 0, precision: 18, scale: 0
    },
    {
        text: '字符型', value: DataType.Char, canChangeLength: false,
        canChangePresicion: false, canChangeScale: false, length: 1, precision: 0, scale: 0
    },
    {
        text: '日期', value: DataType.DateTime, canChangeLength: false,
        canChangePresicion: false, canChangeScale: false, length: 0, precision: 0, scale: 0
    },
    {
        text: '时间戳', value: DataType.TimeStamp, canChangeLength: false,
        canChangePresicion: false, canChangeScale: false, length: 0, precision: 0, scale: 0
    },
    {
        text: '二进制', value: DataType.Blob, canChangeLength: false,
        canChangePresicion: false, canChangeScale: false, length: 0, precision: 0, scale: 0
    },
    {
        text: 'NChar', value: DataType.NChar, canChangeLength: true,
        canChangePresicion: false, canChangeScale: false, length: 0, precision: 0, scale: 0
    },
    {
        text: 'NVarchar', value: DataType.NVarchar, canChangeLength: true,
        canChangePresicion: false, canChangeScale: false, length: 0, precision: 0, scale: 0
    },
    {
        text: 'NClob', value: DataType.NClob, canChangeLength: false,
        canChangePresicion: false, canChangeScale: false, length: 0, precision: 0, scale: 0
    }
];


/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/guid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());



/***/ }),

/***/ "./src/packages/tabledesigner-frame/view/tabledesigner-frame/utils/lib/requestelement.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestElement", function() { return RequestElement; });
var RequestElement = (function () {
    function RequestElement() {
    }
    return RequestElement;
}());



/***/ })

},[]);
//# sourceMappingURL=dbo-creator.module.chunk.js.map