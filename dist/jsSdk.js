(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TPTJS-SDK"] = factory();
	else
		root["TPTJS-SDK"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _intentMiniProgram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _khtRequestAppCurrentUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _khtSaveString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _khtRequestAppInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _tpAppShare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _tpH5Share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _khtExcuteJSCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _tptRequestCachedValueForKey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _callBackSignatureInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var _tptAppShowLoading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12);
/* harmony import */ var _tptShareForTargetURL__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13);













/* harmony default export */ __webpack_exports__["default"] = ({
  khtAppRouteRequest: _route__WEBPACK_IMPORTED_MODULE_0__["default"],
  intentMiniProgram: _intentMiniProgram__WEBPACK_IMPORTED_MODULE_1__["default"],
  khtRequestAppCurrentUser: _khtRequestAppCurrentUser__WEBPACK_IMPORTED_MODULE_2__["default"],
  khtSaveString: _khtSaveString__WEBPACK_IMPORTED_MODULE_3__["default"],
  khtRequestAppInfo: _khtRequestAppInfo__WEBPACK_IMPORTED_MODULE_4__["default"],
  tpAppShare: _tpAppShare__WEBPACK_IMPORTED_MODULE_5__["default"],
  tpH5Share: _tpH5Share__WEBPACK_IMPORTED_MODULE_6__["default"],
  khtExcuteJSCallback: _khtExcuteJSCallback__WEBPACK_IMPORTED_MODULE_7__["default"],
  tptRequestCachedValueForKey: _tptRequestCachedValueForKey__WEBPACK_IMPORTED_MODULE_8__["default"],
  callBackSignatureInfo: _callBackSignatureInfo__WEBPACK_IMPORTED_MODULE_9__["default"],
  tptAppShowLoading: _tptAppShowLoading__WEBPACK_IMPORTED_MODULE_10__["default"],
  tptShareForTargetURL: _tptShareForTargetURL__WEBPACK_IMPORTED_MODULE_11__["default"],
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return khtAppRouteRequest; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * 原生路由跳转
 * @param authorization number 1: 需要实名认证
 * @param detail string
 * @param loginStatus number 1: 登录 0: 不用登录
 * @param pageType string  RN HTML native
 * @param tagUrl string
 */

function khtAppRouteRequest(authorization, detail,
  loginStatus, pageType, tagUrl) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.khtAppRouteRequest(
      authorization,
      detail,
      loginStatus,
      pageType,
      tagUrl,
    );
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    window.webkit.messageHandlers.khtAppRouteRequest.postMessage({
      authorization,
      detail,
      loginStatus,
      pageType,
      tagUrl,
    });
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const uXZ = navigator.userAgent;
const isAndroidXZ = uXZ.indexOf('Android') > -1 || uXZ.indexOf('Linux') > -1; // android终端或者uc浏览器
const isiOSXZ = !!uXZ.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
const isKhtAPP = uXZ.indexOf('kehutong') > -1;
const uaXZ = window.navigator.userAgent.toLowerCase();
const isWeixin = uaXZ.indexOf('micromessenger') !== -1;

/* harmony default export */ __webpack_exports__["default"] = ({
  isAndroidXZ,
  isiOSXZ,
  isWeixin,
  isKhtAPP,
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return intentMiniProgram; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * 唤起小程序
 * @param userName  小程序原始id
 * @param path 小程序路径
 * @param type 可选打开开发版（1），体验版（2），正式版（0）number
 */
function intentMiniProgram({ userName, path, type }) {
  const obj = {
    userName,
    path,
    type,
  };
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.intentMiniProgram(JSON.stringify(obj));
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    window.webkit.messageHandlers.intentMiniProgram.postMessage(obj);
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return khtRequestAppCurrentUser; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * 获取用户信息
 */
function khtRequestAppCurrentUser() {
  // eslint-disable-next-line no-undef
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ && kht.khtRequestAppCurrentUser && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.khtRequestAppCurrentUser();
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP
    && window.webkit.messageHandlers.khtRequestAppCurrentUser) {
    window.webkit.messageHandlers.khtRequestAppCurrentUser.postMessage({});
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return khtSaveString; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * 原生存值
 * @author john.bian
 * @param key 健值 'khtwebview_' 开头的字符串
 * @param value 要保持的值
 * @since 1.1.9
 */
function khtSaveString(key, value) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.khtSaveString(key, value);
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    window.webkit.messageHandlers.khtSaveString.postMessage({ key, value });
  }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return khtRequestAppInfo; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * 获取用户信息
 */
function khtRequestAppInfo() {
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.khtRequestAppInfo();
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    window.webkit.messageHandlers.khtRequestAppInfo.postMessage({});
  }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tpAppShare; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * 唤起原生分享
 * @author john.bian
 * @param shareInfo -> title imgUrl url content
 * @since 1.1.8
 */
function tpAppShare(shareInfo) {
  // eslint-disable-next-line no-undef
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ && kht.tpAppShare && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.tpAppShare(shareInfo.imgUrl,
      shareInfo.title, shareInfo.content, shareInfo.url);
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP
    && window.webkit.messageHandlers.tpAppShare) {
    window.webkit.messageHandlers.tpAppShare.postMessage(shareInfo);
  }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tpH5Share; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * h5唤起原生分享
 * @author john.bian
 * @param shareInfo -> title imgUrl url content
 * @since 1.1.5
 */
function tpH5Share(shareInfo) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.showShareMenu(
      shareInfo.title,
      shareInfo.content,
      shareInfo.imgUrl,
      shareInfo.url,
    );
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    window.webkit.messageHandlers.Share.postMessage(shareInfo);
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return khtExcuteJSCallback; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * @author johnbian
 * @param excuteTime 调用时机
 * @param callBack 回调方法
 * @description 告诉app何时执行js回调
 * @since 1.20.0
 */
function khtExcuteJSCallback(excuteTime, callBack) {
  // eslint-disable-next-line no-undef
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ && kht.khtExcuteJSCallback && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.khtExcuteJSCallback(excuteTime, callBack);
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ
    && window.webkit.messageHandlers.khtExcuteJSCallback
    && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP) {
    window.webkit.messageHandlers.khtExcuteJSCallback.postMessage({ excuteTime, callBack });
  }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tptRequestCachedValueForKey; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * 获取缓存中的数据接收1个参数
 * @param key
 */
function tptRequestCachedValueForKey(key) {
  // eslint-disable-next-line no-undef
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP && kht.tptRequestCachedValueForKey) {
    // eslint-disable-next-line no-undef
    kht.tptRequestCachedValueForKey(key);
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP
    && window.webkit.messageHandlers.tptRequestCachedValueForKey) {
    window.webkit.messageHandlers.tptRequestCachedValueForKey.postMessage({ key });
  }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return callBackSignatureInfo; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * 告诉原生签名回调
 * @author john.bian
 * @param signatureData: 签名
 * @param signatureEncryptedData: 加密后的签名
 * @since 4.0.4
 */
function callBackSignatureInfo({ signatureData, signatureEncryptedData }) {
  // eslint-disable-next-line no-undef
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP && kht.callBackSignatureInfo) {
    // eslint-disable-next-line no-undef
    kht.callBackSignatureInfo(
      signatureData,
      signatureEncryptedData,
    );
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP
    && window.webkit.messageHandlers.callBackSignatureInfo) {
    window.webkit.messageHandlers
      .callBackSignatureInfo.postMessage({ signatureData, signatureEncryptedData });
  }
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tptAppShowLoading; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * h5唤起loading
 * @author john.bian
 * @param flag : 0/1
 * @since 4.0.24
 */
function tptAppShowLoading(flag) {
  // eslint-disable-next-line no-undef
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isAndroidXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP && kht.tptAppShowLoading) {
    // eslint-disable-next-line no-undef
    kht.tptAppShowLoading(flag === 1);
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isiOSXZ && _config__WEBPACK_IMPORTED_MODULE_0__["default"].isKhtAPP
    && window.webkit.messageHandlers.tptAppShowLoading) {
    window.webkit.messageHandlers.tptAppShowLoading.postMessage({ flag });
  }
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tptShareForTargetURL; });
/**
 * 唤起目标页面分享按钮
 * @param targetUrl
 * @param title
 * @param imgUrl
 * @param url
 * @param content
 * @since 1.2.6
 */
function tptShareForTargetURL({
  targetUrl, title, imgUrl, url, content,
}) {
  if (config.isAndroidXZ && config.isKhtAPP && kht.tptShareForTargetURL) {
    /* eslint no-undef: 0 */
    kht.tptShareForTargetURL(targetUrl, title, imgUrl, url, content);
  } else if (config.isiOSXZ && config.isKhtAPP
    && window.webkit.messageHandlers.tptShareForTargetURL) {
    window.webkit.messageHandlers.tptShareForTargetURL.postMessage({
      targetUrl,
      title,
      imgUrl,
      url,
      content,
    });
  }
}


/***/ })
/******/ ])["default"];
});