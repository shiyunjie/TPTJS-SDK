# intentMiniProgram

---

网页 通过太平通app唤起微信小程序 支持版本太平通版本 v1.1.20 以上

## 使用指南

```js
import * as TPTJS from 'tpt-js-sdk'
const obj = {
  userName: '',
  path: '',
  type: 0
}
TPTJS.intentMiniProgram(obj);
```

## khtAppRouteRequest 参数

| 参数   | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| userName  | 小程序原始id | string | - | - |
| path  | 拉起小程序页面的可带参路径，不填默认拉起小程序首页 | String | - | - |
| type | 可选打开版本| number  | `2` 体验版,`1` 开发版,`0` 正式版 | - |


