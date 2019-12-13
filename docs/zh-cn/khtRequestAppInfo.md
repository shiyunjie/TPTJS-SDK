# khtRequestAppInfo

---

网页 通过太平通获取设备信息
## 使用指南

```js
import * as TPTJS from 'tpt-js-sdk'
TPTJS.khtRequestAppInfo();

// 定义一个回调函数 原生会触发khtGetAppCurrentUserInfo
window.khtGetAppInfo = (obj) => {
	// TODO 业务逻辑 obj是原生返回的用户信息
};
```


## khtGetAppInfo 返回参数

| 参数   | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| appVersion  | app原生版本号 | string | - | - |
| configVersion  | 配置文件版本 | String | - | - |
| deviceId  | 设备ID/设备号 | String | - | - |
| model  | 设备机型名称 | String | - | - |
| oem  | 供应商 | String | - | - |
| osVersion  | 系统平台版本 | String | - | - |
| phoneType  | 系统平台信息 | `Android`,`IOS` | - | - |
| rnVersion  | Rn版本 | String | - | - |