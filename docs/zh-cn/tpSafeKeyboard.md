# tpSafeKeyboard

---

网页 调起安全键盘

## 使用指南

```js
import * as TPTJS from 'tpt-js-sdk'
const safeKeyboardInfo = {
  callBackMethod: 'keyboardCallback'
}
TPTJS.tpAppSafeKeyboard(safeKeyboardInfo);

//回调方法
function keyboardCallback(e) {
  console.log(e)
}

```

## tpAppShare 参数

| 参数   | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| callBackMethod | 回调方法名称 | string | - | - |

