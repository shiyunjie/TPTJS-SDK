# 介绍

----
### 网页去调用太平通app原生方法 jsSDK

## 支持的使⽤⽅式
### 支持 ES module
```
  npm install TPTJS-SDK
```
```js
  import * as TPTJS from 'TPTJS-SDK'; 
  TPTJS.khtAppRouteRequest('', 1, '', '', '');
```
### 支持 CJS
```
  npm install TPTJS-SDK
```
```js
  const TPTJS = require('TPTJS-SDK'); // ...
  TPTJS.khtAppRouteRequest('', 1, '', '', '');
``` 
### 支持 AMD
```
  npm install TPTJS-SDK
```
```js
require(['TPTJS-SDK'], function (TPTJS) { // ...
TPTJS.khtAppRouteRequest('', 1, '', '', '');
```
### 可以直接通过 script 引⼊入 (暂时没有cdn 所以不建议适用)
```
  <script src="**/jsSdk.min.js"><script> 
  <script>
    // Global variabl
    TPTJS.khtAppRouteRequest('', '1', '', '', '');
    // Property in the window object
    window. TPTJS.khtAppRouteRequest('', '1', '', '', ''); 
  </script>
```

