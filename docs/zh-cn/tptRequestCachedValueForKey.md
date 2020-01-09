# tptRequestCachedValueForKey

---

网页 获取 原生缓存数据 v1.2.6
## 使用指南

```js
import * as TPTJS from 'tpt-js-sdk'
TPTJS.tptRequestCachedValueForKey();

// 定义一个回调函数 原生会触发tptCachedValue
window.tptCachedValue = (str) => {
	// TODO 业务逻辑 str是原生返回的内容
};
```


## tptRequestCachedValueForKey 参数

| 参数   | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| key  | 健值 | string | 需要以`khtwebview_`开头 | - |