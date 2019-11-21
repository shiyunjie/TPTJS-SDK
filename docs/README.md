# TPTJS-SDK

## 支持的使⽤⽅式
### 支持 ES module
```
  npm install tpt-js-sdk
```
```js
  import * as TPTJS from 'tpt-js-sdk'; 
  TPTJS.khtAppRouteRequest('', 1, '', '', '');
```
### 支持 CJS
```
  npm install tpt-js-sdk
```
```js
  const TPTJS = require('tpt-js-sdk'); // ...
  TPTJS.khtAppRouteRequest('', 1, '', '', '');
``` 
### 支持 AMD
```
  npm install tpt-js-sdk
```
```js
require(['tpt-js-sdk'], function (TPTJS) { // ...
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

