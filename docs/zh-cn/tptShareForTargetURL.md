# tptShareForTargetURL

---

网页 调用微信分享 目标页面 用于导航栏 

## 使用指南

```js
import * as TPTJS from 'tpt-js-sdk'
const shareInfo = {
  targetUrl: '',
  title: '',
  imgUrl: '',
  url: '',
  content: ''
}
TPTJS.tptShareForTargetURL(shareInfo);
```

## tptShareForTargetURL 参数

| 参数   | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| targetUrl  | 目标页面url | string | - | - |
| title  | 文章标题 | string | - | - |
| imgUrl | 缩略图 | String | - | - |
| url  | 文章地址 | string | - | - |
| content | 简介（副标题） | String | - | - |

