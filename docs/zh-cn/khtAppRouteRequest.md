# khtAppRouteRequest

---

网页 跳转到太平通app里面原生页面（包括 rn页面）

## 使用指南

```js
import * as TPTJS from 'tpt-js-sdk'
TPTJS.khtAppRouteRequest('', 1, '', '', '');
```

## khtAppRouteRequest 参数

| 参数   | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| authorization  | 是否需要实名认证 | number | `1` 需要,`0` 不需要 | - |
| detail  | 非必要值不需补充传 空字符串 | String | - | - |
| loginStatus | 是否需要登录。| number  | `1` 需要,`0` 不需要 | - |
| pageType | 跳转页面类型  | String  | `RN`,`HTML`,`native` | - |
| tagUrl | 具体路径 | String  | tagUrl | - |

## pageType 为 'native' tagUrl 可选值

| 可选值   | 说明   |
| ---   | ---- |
| LogIn  | 登录页面 |
| RealNameAuthentication  | 实名认证 |
| khtBack  | 退出webview |

## pageType 为 'RN' tagUrl 可选值

| 可选值   | 说明   |
| ---   | ---- |
| 26  | 签到页面 |
| 30  | 健步行 |

## pageType 为 'html' tagUrl 值 为具体的网页url

