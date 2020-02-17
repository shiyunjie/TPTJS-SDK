import config from './config';

/**
 * 获取用户信息
 */
export default function khtRequestAppCurrentUser() {
  // eslint-disable-next-line no-undef
  if (config.isAndroidXZ && kht.khtRequestAppCurrentUser && config.isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.khtRequestAppCurrentUser();
  } else if (config.isiOSXZ && config.isKhtAPP
    && window.webkit.messageHandlers.khtRequestAppCurrentUser) {
    window.webkit.messageHandlers.khtRequestAppCurrentUser.postMessage({});
  }
}
