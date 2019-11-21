# TPTJS-SDK

## ⽀支持的使⽤用⽅方式
### ⽀支持 ES module
```
  npm install TPTJS-SDK
```
```js
  import * as TPTJS from 'TPTJS-SDK'; 
  TPTJS.khtAppRouteRequest('', '1', '', '', '');
```
### ⽀支持 CJS
```
  npm install TPTJS-SDK
```
```js
  const TPTJS = require('TPTJS-SDK'); // ...
  TPTJS.khtAppRouteRequest('', '1', '', '', '');
``` 
### ⽀支持 AMD
```
  npm install TPTJS-SDK
```
```js
require(['TPTJS-SDK'], function (TPTJS) { // ...
TPTJS.khtAppRouteRequest('', '1', '', '', '');
```
### 可以直接通过 script 引⼊入
<script src="https://ecustomer.tp95589.com/static/SDK/jsSdk.min.js"></script> 
  <script>
  // Global variabl
  TPTJS.khtAppRouteRequest('', '1', '', '', '');
  // Property in the window object
  window. TPTJS.khtAppRouteRequest('', '1', '', '', ''); 
</script>
