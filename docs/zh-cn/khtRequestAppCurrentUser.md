# khtRequestAppCurrentUser

---

网页 通过太平通获取用户信息
## 使用指南

```js
import * as TPTJS from 'tpt-js-sdk'
TPTJS.khtRequestAppCurrentUser();

// 定义一个回调函数 原生会触发khtGetAppCurrentUserInfo
window.khtGetAppCurrentUserInfo = (obj) => {
	// TODO 业务逻辑 obj是原生返回的用户信息
};
```


## khtGetAppCurrentUserInfo 返回参数

| 参数   | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| userId  | 用户id | string | - | - |
| userName  | 用户名 | String | - | - |
| realName  | 真是姓名 | String | - | - |
| phone  | 手机号 | String | - | - |
| email  | 邮箱 | String | - | - |
| authToken  | token | String | - | - |
| identificationStatus  | 是否实名认证 | `0`否, `1`是 | - | - |
| faceStatus  | 是否人脸验证 | `0`否, `1`是 | - | - |
| uuId  | uuId | String | - | - |
| internatCode  | 用户区号 | String | - | - |
| imgUrl  | 头像 | String | - | - |
| accountType |账户类型| string | - | - |


