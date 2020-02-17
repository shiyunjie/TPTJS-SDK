import config from './config';

/**
 * 获取用户信息
 */
export default function khtRequestAppInfo() {
  if (config.isAndroidXZ && config.isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.khtRequestAppInfo();
  } else if (config.isiOSXZ && config.isKhtAPP) {
    window.webkit.messageHandlers.khtRequestAppInfo.postMessage({});
  }
}
