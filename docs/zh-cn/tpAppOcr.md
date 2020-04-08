# tpAppShare

---

网页 调起Ocr识别

## 使用指南

```js
import * as TPTJS from 'tpt-js-sdk'
const OcrInfo = {
  width: 400, 
  height: 400 / 172 * 110, 
  isForeground: true, 
  type: 'card',
  compressImageQuality: 0.5, 
  includeBase64: true,
  callBack: 'ocrCallback'
}
TPTJS.tpAppOcr(OcrInfo);

//回调方法
function ocrCallback(e) {
  console.log(e)
}

```

## tpAppShare 参数

| 参数   | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| width  | 照片长 | number | - | - |
| height | 照片宽 | number | - | - |
| isForeground  | 是否人像面 | boolean | - | - |
| type  | 是否银行卡 | string | bank、card | - |
| compressImageQuality | 压缩比例 | number | - | - |
| includeBase64 | 是否返回base64 | boolean | - | - |

