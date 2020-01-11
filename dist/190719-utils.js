(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aUtils"] = factory();
	else
		root["aUtils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/*! exports provided: chunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return chunk; });\n/* \r\n将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组\r\n*/\r\n\r\nfunction chunk(array, size=1) {\r\n  const bigArr = []\r\n  let smallArr = []\r\n  // 如果是空数组, 直接返回空数组\r\n  if (array.length===0) {\r\n    return bigArr\r\n  }\r\n  // 处理size\r\n  if (size<1) {\r\n    size = 1\r\n  } /* else if (size>array.length) {\r\n    size = array.length\r\n  } */\r\n\r\n  array.forEach(item => {\r\n\r\n    // 将小数组bigArr中(只能放一次)\r\n    if (smallArr.length===0) {\r\n      bigArr.push(smallArr)\r\n    }\r\n\r\n    // 将元素添加到小数组\r\n    smallArr.push(item)\r\n\r\n    // 限制smallArr的最大长度是size\r\n    if (smallArr.length===size) {\r\n      smallArr = []\r\n    }\r\n  })\r\n\r\n  return bigArr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/compact.js":
/*!******************************!*\
  !*** ./src/array/compact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return compact; });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n/* \r\ncompact(array): 返回数组中所有真值元素组成的新数组\r\n*/\r\n\r\nfunction compact (array) {\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(array, item => item)\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/compact.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return concat; });\n/* \r\n语法: var new_array = concat(array, value1[, value2[, ...[, valueN]]]) \r\n功能: 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变 \r\n*/\r\nfunction concat (array, ...values) {\r\n  const arr = [...array]\r\n  // 遍历values, 将value或者value中的元素添加arr中\r\n  values.forEach(value => {\r\n    if (Array.isArray(value)) {\r\n      arr.push(...value)\r\n    } else {\r\n      arr.push(value)\r\n    }\r\n  })\r\n  \r\n  return arr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/declares.js":
/*!*******************************!*\
  !*** ./src/array/declares.js ***!
  \*******************************/
/*! exports provided: map, reduce, filter, find, findIndex, every, some */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return findIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return every; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return some; });\n\r\nfunction map (array, callback) {\r\n  const arr = []\r\n  // 遍历当前数组每个元素, 调用callback得到一个结果数据, 添加arr\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    arr.push(result)\r\n  }\r\n  return arr\r\n}\r\n\r\nfunction reduce (array,callback, initValue) {\r\n  // 结果为初始值\r\n  let total = initValue\r\n  // 遍历当前数组每个元素, 调用callback得到一个累加的结果数据\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    total = callback(total, element, index)\r\n  }\r\n\r\n  // 返回结果\r\n  return total\r\n}  \r\n\r\nfunction filter (array,callback) {\r\n  const arr = []\r\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 如果为true, 将当前element添加到arr\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (result) {\r\n      arr.push(element)\r\n    }\r\n  }\r\n  return arr\r\n}  \r\n\r\nfunction find (array,callback) {\r\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 如果为true, 返回当前元素\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (result) {\r\n      return element\r\n    }\r\n  }\r\n  return undefined\r\n}  \r\n\r\nfunction findIndex (array,callback) {\r\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 如果为true, 返回当前元素的下标\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (result) {\r\n      return index\r\n    }\r\n  }\r\n  return -1\r\n}  \r\n\r\nfunction every (array,callback) {\r\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 一旦是false, 返回false\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (!result) {\r\n      return false\r\n    }\r\n  }\r\n  return true\r\n}  \r\n\r\nfunction some (array,callback) {\r\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 一旦是true, 返回true\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (result) {\r\n      return true\r\n    }\r\n  }\r\n  return false\r\n}  \n\n//# sourceURL=webpack://aUtils/./src/array/declares.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/*! exports provided: difference, differences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return difference; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return differences; });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n/* \r\ndifference(arr1, arr2): 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)\r\n        如: difference([1,3,5,7], [5, 8])  ==> [1, 3, 7]\r\n*/\r\n\r\n\r\nfunction difference(arr1, arr2) {\r\n\r\n  // 处理特别情况\r\n  if (arr1.length===0) {\r\n    return []\r\n  } else if (arr2.length===0) {\r\n    return [...arr1]\r\n  }\r\n  \r\n  // 对数组进行过滤\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(arr1, item => arr2.indexOf(item)===-1)\r\n}\r\n\r\nfunction differences(arr1, ...arrays) {\r\n\r\n  // 处理特别情况\r\n  if (arr1.length===0) {\r\n    return []\r\n  } else if (arrays.length===0) {\r\n    return [...arr1]\r\n  }\r\n  \r\n  // 对数组进行过滤\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(arr1, item => {\r\n    let result = true // 假设当前元素在后面的所有数组都不存在\r\n    /* arrays.forEach(array => {\r\n      const index = array.indexOf(item)\r\n      if (index!==-1) {\r\n        result = false\r\n      }\r\n    }) */\r\n    for (let index = 0; index < arrays.length; index++) {\r\n      const array = arrays[index];\r\n      if (array.indexOf(item)!==-1) {\r\n        result = false\r\n        break // 结束当前for循环\r\n      }\r\n    }\r\n    return result\r\n  })\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/*! exports provided: drop, dropRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return dropRight; });\n/* \r\n1. drop(array, count): \r\n    得到数组过滤掉左边count个后剩余元素组成的数组\r\n    说明: 不改变当前数组, count默认是1\r\n    如: drop([1,3,5,7], 2) ===> [5, 7]\r\n2. dropRight(array, count): \r\n    得到数组过滤掉右边count个后剩余元素组成的数组\r\n    说明: 不改变数组, count默认是1\r\n    如: dropRight([1,3,5,7], 2) ===> [1, 3]   \r\n*/\r\n\r\nfunction drop(array, count=1) {\r\n  if (array.length==0) {\r\n    return []\r\n  }\r\n  if (count<1) {\r\n    count = 1\r\n  }\r\n  \r\n  return array.filter((item, index) => index>=count)\r\n}\r\n\r\nfunction dropRight(array, count=1) {\r\n  if (array.length==0) {\r\n    return []\r\n  }\r\n  if (count<1) {\r\n    count = 1\r\n  }\r\n  \r\n  return array.filter((item, index) => index<array.length-count)\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/*! exports provided: flatten1, flatten2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return flatten1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return flatten2; });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ \"./src/array/concat.js\");\n/* \r\n1. 理解: \r\n    取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中\r\n    如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]\r\n2. 实现:\r\n    方法一: 递归 + reduce() + concat()\r\n    方法二: ... + some() + concat()\r\n*/\r\n\r\n\r\n\r\n/* \r\n方法一: 递归 + reduce() + concat()\r\n*/\r\nfunction flatten1 (array) {\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"reduce\"])(array, (pre, item) => {\r\n    if (!Array.isArray(item)) {\r\n      pre.push(item)\r\n    } else {\r\n      pre = Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(pre, flatten1(item))\r\n    }\r\n    return pre\r\n  }, [])\r\n} // [1, 3, [2, 4]]\r\n\r\n/* \r\n[1, [3, [2, 4]]]\r\n\r\n[1]\r\n\r\n[3]\r\n\r\n[2, 4]\r\n\r\n[1, 3, 2, 4]\r\n*/\r\n\r\n/* \r\n方法二: ... + some() + concat()\r\n*/\r\nfunction flatten2 (array) {\r\n  let arr = Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])([], ...array)\r\n  while(Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"some\"])(arr, item => Array.isArray(item))) { // arr中有元素是数组\r\n    arr = Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])([], ...arr)\r\n  }\r\n\r\n  return arr\r\n} \r\n\n\n//# sourceURL=webpack://aUtils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/mergeArray.js":
/*!*********************************!*\
  !*** ./src/array/mergeArray.js ***!
  \*********************************/
/*! exports provided: mergeArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeArray\", function() { return mergeArray; });\n/* \r\n merge(arr1, arr2): 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)\r\n        如: merge([1,3,5,7,5], [1, 5, 8]) ==> [1, 3, 5, 7, 5, 8]\r\n*/\r\nfunction mergeArray(array, ...arrays) {\r\n  const result = [...array]\r\n\r\n  if (arrays.length===0) {\r\n    return result\r\n  }\r\n\r\n  arrays.forEach(itemArr => {\r\n    itemArr.forEach(item => {\r\n      if (result.indexOf(item)===-1) {\r\n        result.push(item)\r\n      }\r\n    })\r\n  })\r\n\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/mergeArray.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/*! exports provided: pull, pullAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return pull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return pullAll; });\n/* \r\n1. pull(array, ...values): \r\n        删除数组中与value相同的元素, 返回所有删除元素的数组\r\n        说明: 数组发生了改变\r\n        如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 数组变为[1, 5], 返回值为[3,3,7]\r\n    2. pullAll(array, values): \r\n        功能与pull一致, 只是参数变为数组\r\n        如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组变为[1, 5], 返回值为[3,3,7]\r\n*/\r\n\r\nfunction pull(array, ...values) {\r\n  const result = []\r\n\r\n  for (let index = 0; index < array.length; index++) {\r\n    const item = array[index];\r\n    if (values.indexOf(item)!==-1) {// 如果有\r\n      // 删除item\r\n      array.splice(index, 1)\r\n      // 将item添加到result数组\r\n      result.push(item)\r\n      index-- // 如果不做, 下一个元素就没有得到遍历\r\n    }\r\n  }\r\n\r\n  return result\r\n}\r\n\r\nfunction pullAll(array, values) {\r\n\r\n  return pull(array, ...values)\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\n/* \r\n语法: var new_array = slice(array, [begin[, end]])\r\n功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变\r\n*/\r\n\r\nfunction slice(array, begin, end) {\r\n  const arr = []\r\n\r\n  // 如果原数组是空组件, 直接返回\r\n  if (array.length===0) {\r\n    return arr\r\n  }\r\n  // 处理没有指定\r\n  begin = begin || 0\r\n  end = end || array.length\r\n  // 范围的限制\r\n  if (begin<0) {\r\n    begin = 0\r\n  }\r\n  if (end>array.length) {\r\n    end = array.length\r\n  }\r\n\r\n  for (let index = begin; index < end; index++) {\r\n    arr.push(array[index])\r\n  }\r\n\r\n  return arr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/*! exports provided: unique1, unique2, unique3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return unique1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return unique2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return unique3; });\n/* \r\n1. 理解: \r\n    根据当前数组产生一个去除重复元素后的新数组\r\n    如: [2, 3, 2, 7, 6, 7] ==> [2, 3, 7, 6]\r\n2. 实现:\r\n    方法1: 利用forEach()和indexOf()\r\n            说明: 本质是双重遍历, 效率差些\r\n    方法2: 利用forEach() + 对象容器\r\n            说明: 只需一重遍历, 效率高些\r\n    方法3: 利用ES6语法: from + Set 或者 ... + Set\r\n            说明: 编码简洁\r\n*/\r\n\r\n/* \r\n方法1: 利用forEach()和indexOf()\r\n    说明: 本质是双重遍历, 效率差些\r\n*/\r\nfunction unique1(array) {\r\n  console.log('unique1()')\r\n  const arr = []\r\n  // 遍历原数组\r\n  array.forEach(item => {\r\n    // 只有当item不在arr中, 才添加\r\n    if (arr.indexOf(item)===-1) {// 内部包含隐式遍历\r\n      arr.push(item)\r\n    }\r\n  })\r\n\r\n  return arr\r\n}\r\n\r\n/* \r\n方法2: 利用forEach() + 对象容器\r\n    说明: 只需一重遍历, 效率高些\r\n*/\r\nfunction unique2(array) {\r\n  const arr = []\r\n  const contain = {} // 属性名是item, 属性值true\r\n  // 遍历原数组\r\n  array.forEach(item => {\r\n    // 只有当item不在arr中, 才添加\r\n    // if (!contain[item]) {\r\n    if (!contain.hasOwnProperty(item)) { // 不需要遍历\r\n      arr.push(item)\r\n      contain[item] = true\r\n    }\r\n  })\r\n\r\n  return arr\r\n}\r\n\r\n/* \r\n方法3: 利用ES6语法: from + Set 或者 ... + Set\r\n  说明: 编码简洁\r\n*/\r\nfunction unique3(array) {\r\n  // return Array.from(new Set(array))\r\n  return [...new Set(array)]\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/unique.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/*! exports provided: apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return apply; });\nfunction apply (fn, obj, args) {\r\n  // 处理obj是undefined或者null的情况\r\n  if (obj===undefined || obj===null) {\r\n    obj = window\r\n  }\r\n\r\n  // 给obj添加一个方法: tempFn: this\r\n  obj.tempFn = fn\r\n  // 调用obj的tempFn方法, 传入rags参数, 得到返回值\r\n  const result = obj.tempFn(...args)\r\n  // 删除obj上的temFn\r\n  delete obj.tempFn\r\n  // 返回方法的返回值\r\n  return result\r\n\r\n  // return call(fn, obj, ...args)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return bind; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\n\r\nfunction bind (fn,obj, ...args) {\r\n  // 返回一个新函数\r\n  return (...args2) => {\r\n    // 调用原来函数, 指定this为obj, 参数列表由args和args2依次组成\r\n    return Object(_call__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fn, obj, ...args, ...args2)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return call; });\nfunction call (fn, obj, ...args) {\r\n  // console.log('call()')\r\n  // 执行函数\r\n  // this(...args)\r\n\r\n  // 处理obj是undefined或者null的情况\r\n  if (obj===undefined || obj===null) {\r\n    obj = window\r\n  }\r\n\r\n  // 给obj添加一个方法: tempFn: this\r\n  obj.tempFn = fn\r\n  // 调用obj的tempFn方法, 传入rags参数, 得到返回值\r\n  const result = obj.tempFn(...args)\r\n  // 删除obj上的temFn\r\n  delete obj.tempFn\r\n  // 返回方法的返回值\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* \r\n用来返回防抖函数的工具函数\r\n*/\r\nfunction debounce(callback, delay) {\r\n  return function (event) {\r\n\r\n    // 如果上次事件还没有真正处理, 取消它\r\n    // if (callback.timeoutId) { // 会查找原型链\r\n    if (callback.hasOwnProperty('timeoutId')) { // 不会查找原型链\r\n      // 清除\r\n      clearTimeout(callback.timeoutId)\r\n    }\r\n\r\n    // 发事件发生指定事件后才调用处理事件的回调函数\r\n    // 启动定时器, 只是准备真正处理\r\n    callback.timeoutId = setTimeout(() => {\r\n      // 正在处理事件\r\n      callback.call(this, event)\r\n      // 删除准备处理的标记\r\n      delete callback.timeoutId\r\n    }, delay)\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* \r\n用来返回节流函数的工具函数\r\n*/\r\nfunction throttle(callback, delay) {\r\n  let pre = 0 // 默认值不要是Date.now() ==> 第1次事件立即调用\r\n  return function (event) { // 节流函数/真正的事件回调函数   this是发生事件的标签\r\n    console.log('事件 throttle')\r\n    const current = Date.now()\r\n    if (current - pre > delay) { // 只有离上一次调用callback的时间差大于delay\r\n      // 调用真正处理事件的函数, this是事件源, 参数是event\r\n      callback.call(this, event)\r\n      // 记录此次调用的时间\r\n      pre = current\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: apply, call, bind, throttle, debounce, map, reduce, filter, find, findIndex, every, some, unique1, unique2, unique3, concat, slice, flatten1, flatten2, compact, chunk, difference, differences, mergeArray, pull, pullAll, drop, dropRight, newInstance, myInstanceOf, mergeObject, clone1, clone2, deepClone1, deepClone2, deepClone3, deepClone4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_0__[\"apply\"]; });\n\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_3__[\"throttle\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_4__[\"debounce\"]; });\n\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"reduce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"some\"]; });\n\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique3\"]; });\n\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _array_concat__WEBPACK_IMPORTED_MODULE_7__[\"concat\"]; });\n\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _array_slice__WEBPACK_IMPORTED_MODULE_8__[\"slice\"]; });\n\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten2\"]; });\n\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return _array_compact__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return _array_chunk__WEBPACK_IMPORTED_MODULE_11__[\"chunk\"]; });\n\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_12__[\"difference\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_12__[\"differences\"]; });\n\n/* harmony import */ var _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/mergeArray */ \"./src/array/mergeArray.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeArray\", function() { return _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__[\"mergeArray\"]; });\n\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pull\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pullAll\"]; });\n\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_15__[\"drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_15__[\"dropRight\"]; });\n\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return _object_newInstance__WEBPACK_IMPORTED_MODULE_16__[\"newInstance\"]; });\n\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__[\"myInstanceOf\"]; });\n\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__[\"mergeObject\"]; });\n\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_19__[\"clone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_19__[\"clone2\"]; });\n\n/* harmony import */ var _object_deepClone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./object/deepClone */ \"./src/object/deepClone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone3\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone4\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone4\"]; });\n\n/* \r\n入口js\r\n向外暴露工具函数\r\n*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/main.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/*! exports provided: clone1, clone2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return clone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return clone2; });\n/* \r\n实现浅拷贝\r\n        方法一: 利用ES6语法\r\n        方法二: 利用ES5语法: for...in\r\n*/\r\n\r\n/* \r\n方法一: 利用ES6语法\r\n*/\r\nfunction clone1 (target) {\r\n  if (target instanceof Array) {\r\n    // return [...target]\r\n    // return target.slice()\r\n    // return [].concat(target)\r\n    // return Array.from(target)\r\n    // return target.filter(value => true)\r\n    // return target.map(item => item)\r\n    return target.reduce((pre, item) => {\r\n      pre.push(item)\r\n      return pre\r\n    }, [])\r\n  } else if (target!==null && typeof target==='object') {\r\n    return {...target}\r\n  } else {// 如果不是数组或对象, 直接返回\r\n    return target\r\n  }\r\n}\r\n\r\nfunction clone2 (target) {\r\n  // 被处理的目标是数组/对象\r\n  if (target instanceof Array || (target!==null && typeof target==='object')) {\r\n    const cloneTarget = target instanceof Array ? [] : {}\r\n    for (const key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        cloneTarget[key] = target[key]\r\n      }\r\n    }\r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*\
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/*! exports provided: deepClone1, deepClone2, deepClone3, deepClone4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return deepClone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return deepClone2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return deepClone3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone4\", function() { return deepClone4; });\n/* \r\n实现深拷贝\r\n    1). 大众乞丐版\r\n        问题1: 函数属性会丢失\r\n        问题2: 循环引用会出错\r\n\r\n    2). 面试基础版本\r\n        解决问题1: 函数属性还没丢失\r\n        问题2: 循环引用会出错\r\n\r\n    3). 面试加强版本\r\n        解决问题2: 循环引用正常\r\n    4). 面试加强版本2(优化遍历性能)\r\n        数组: while | for | forEach() 优于 for-in | keys()&forEach() \r\n        对象: for-in 与 keys()&forEach() 差不多\r\n*/\r\n\r\nfunction deepClone1 (target) {\r\n  return JSON.parse(JSON.stringify(target))\r\n}\r\n\r\n/* \r\n解决了: 函数属性会丢失\r\n问题: 循环引用会出错\r\n*/\r\nfunction deepClone2 (target) {\r\n  // 被处理的目标是数组/对象\r\n  if (target instanceof Array || (target!==null && typeof target==='object')) {\r\n    const cloneTarget = target instanceof Array ? [] : {}\r\n    for (const key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        cloneTarget[key] = deepClone2(target[key])  // 对属性值进行递归处理\r\n      }\r\n    }\r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\r\n\r\n/* \r\n解决了: 函数属性会丢失\r\n解决: 循环引用会出错    \r\n解决思路:\r\n    目标: 同一个对旬/数组只能被克隆1次\r\n    创建克隆对象前:　如果克隆对象已经存在, 直接返回\r\n    创建克隆对象后: 保存克隆对象 \r\n    缓存容器结构: Map  key: target, value: cloneTaget\r\n*/\r\nfunction deepClone3 (target, map=new Map()) {\r\n  // 被处理的目标是数组/对象\r\n  if (target instanceof Array || (target!==null && typeof target==='object')) {\r\n    // map中存在对应的克隆对象, 直接将其返回\r\n    let cloneTarget = map.get(target)\r\n    if (cloneTarget) {\r\n      return cloneTarget // 不要对同一个对象进行多次clone\r\n    }\r\n    // 创建克隆对象\r\n    cloneTarget = target instanceof Array ? [] : {}\r\n    // 保存到map容器\r\n    map.set(target, cloneTarget)\r\n\r\n    for (const key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        cloneTarget[key] = deepClone3(target[key], map)  // 对属性值进行递归处理\r\n      }\r\n    }\r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\r\n\r\n/* \r\n优化数组的遍历: 不用for...in, 而用forEach\r\n*/\r\nfunction deepClone4 (target, map=new Map()) {\r\n  // 被处理的目标是数组/对象\r\n  if (target instanceof Array || (target!==null && typeof target==='object')) {\r\n    // map中存在对应的克隆对象, 直接将其返回\r\n    let cloneTarget = map.get(target)\r\n    if (cloneTarget) {\r\n      return cloneTarget // 不要对同一个对象进行多次clone\r\n    }\r\n    // 创建克隆对象\r\n    if (target instanceof Array) {\r\n      cloneTarget = []\r\n      // 保存到map容器\r\n      map.set(target, cloneTarget)\r\n      // 向数组添加元素\r\n      target.forEach((item, index) => {\r\n        cloneTarget[index] = deepClone4(item, map)\r\n      })\r\n    } else {\r\n      cloneTarget = {}\r\n      // 保存到map容器\r\n      map.set(target, cloneTarget)\r\n      // 向对象添加属性\r\n      for (const key in target) {\r\n        if (target.hasOwnProperty(key)) {\r\n          cloneTarget[key] = deepClone4(target[key], map)  // 对属性值进行递归处理\r\n        }\r\n      }\r\n    }\r\n    \r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/deepClone.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/*! exports provided: mergeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return mergeObject; });\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/concat */ \"./src/array/concat.js\");\n/* \r\n  语法: object mergeObject(...objs)\r\n    功能: 合并多个对象, 返回一个合并后对象(不改变原对象)\r\n    合并前:\r\n        { a: [{ x: 2 }, { y: 4 }], b: 1}\r\n        { a: { z: 3}, b: [2, 3], c: 'foo'}\r\n    合并后: \r\n        { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }\r\n*/\r\n\r\nfunction mergeObject(...objs) {\r\n  const result = {}\r\n\r\n  objs.forEach(obj => {\r\n    Object.keys(obj).forEach(key => {\r\n      const value = obj[key]\r\n      // result中没有key属性\r\n      if (!result.hasOwnProperty(key)) {\r\n        result[key] = value\r\n      } else { // result中有key属性\r\n        // 对原值与value进行合并生成新的数组\r\n        result[key] = Object(_array_concat__WEBPACK_IMPORTED_MODULE_0__[\"concat\"])([], result[key], value)\r\n      }\r\n    })\r\n  })\r\n\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/*! exports provided: myInstanceOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return myInstanceOf; });\n/* \r\n2. 自定义instanceof工具函数\r\n    语法: myInstanceOf(obj, Type)\r\n    功能: 判断obj是否是Type类型的实例\r\n    实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回tru, 否则返回false\r\n*/\r\n\r\nfunction myInstanceOf(obj, Type) {\r\n  // 得到一个原型对象\r\n  let protoObj = obj.__proto__\r\n  while (protoObj!==null) { // 存在原型对象\r\n    // 如果就是Type的原型对象, 直接返回true\r\n    if (protoObj===Type.prototype) {\r\n      return true\r\n    } \r\n    // 取出下一个原型对象, 并保存\r\n    protoObj = protoObj.__proto__\r\n  }\r\n  // 出了循环, 说明类型不匹配\r\n  return false\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/myInstanceOf.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/*! exports provided: newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return newInstance; });\n/* \r\n 1. 自定义new工具函数\r\n  语法: newInstance(Fn, ...args)\r\n  功能: 创建Fn构造函数的实例对象\r\n  实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj\r\n*/\r\n\r\nfunction newInstance(Fn, ...args) {\r\n  \r\n  // 创建一个空对象\r\n  const obj = {}\r\n  \r\n\r\n  // 调用Fn函数, 且指定this是新创建对象\r\n  const result = Fn.apply(obj, args)\r\n  \r\n  // 如果Fn执行返回的是对象类型, 最终的结果就是这个对象\r\n  if (result instanceof Object) {\r\n    return result\r\n  }\r\n\r\n  // 让原型对象是空的object对象, 且constructor属性为Fn\r\n  /* \r\n  obj.__proto__ = {}\r\n  obj.__proto__.constructor = Fn\r\n  问题: 创建每个实例的原型对象不是同一个(实际要求的是同一个)\r\n  */\r\n  obj.__proto__ = Fn.prototype  // 将构造函数的显示原型属性值赋值实例对象的隐式原型属性\r\n\r\n  // 返回新建的对象\r\n  return obj\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/newInstance.js?");

/***/ })

/******/ });
});