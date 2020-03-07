# tpH5Share

---

网页 调用微信分享

## 使用指南

```js
import * as TPTJS from 'tpt-js-sdk'
const shareInfo = {
  title: '',
  imgUrl: '',
  url: '',
  content: ''
}
TPTJS.tpH5Share(shareInfo);
```

## tpAppShare 参数

| 参数   | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| title  | 文章标题 | string | - | - |
| imgUrl | 缩略图 | String | - | - |
| url  | 文章地址 | string | - | - |
| content | 简介（副标题） | String | - | - |

