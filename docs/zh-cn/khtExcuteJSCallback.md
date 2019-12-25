# khtExcuteJSCallback

---

网页 告诉原生 什么时候执行特定callback

## 使用指南

```js
import * as TPTJS from 'tpt-js-sdk'
TPTJS.khtExcuteJSCallback('khtwebview_invitesPage_refresh', '111');
```

## khtExcuteJSCallback 参数

| 参数   | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| excuteTime  | 调用时机 | string | `WebViewWillPop`webview出栈, `APPShare`分享, `APPEnterBackground`APP进入后台, `APPEnterForeground`APP进入前台  | - |
| callBack  | 回调方法 | String | - | - |
