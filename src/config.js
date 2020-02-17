const uXZ = navigator.userAgent;
const isAndroidXZ = uXZ.indexOf('Android') > -1 || uXZ.indexOf('Linux') > -1; // android终端或者uc浏览器
const isiOSXZ = !!uXZ.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
const isKhtAPP = uXZ.indexOf('kehutong') > -1;
const uaXZ = window.navigator.userAgent.toLowerCase();
const isWeixin = uaXZ.indexOf('micromessenger') !== -1;

export default {
  isAndroidXZ,
  isiOSXZ,
  isWeixin,
  isKhtAPP,
};
