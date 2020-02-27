# callBackSignatureInfo

---

网页 签名回调
支持版本太平通版本 v4.0.24 以上

## 使用指南

```js
import * as TPTJS from 'tpt-js-sdk'
const signaInfo = { 
  signatureData: '', 
  signatureEncryptedData: '' 
}
TPTJS.callBackSignatureInfo(signaInfo);
```

## callBackSignatureInfo 参数

| 参数   | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| signatureData  | 签名 | string | - | - |
| signatureEncryptedData | 加密签名 | String | - | - |
