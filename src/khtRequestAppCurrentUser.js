import config from './config';

/**
 * 获取用户信息
 */
export default function khtRequestAppCurrentUser() {
  if (config.isAndroidXZ) {
    // eslint-disable-next-line no-undef
    kht.khtRequestAppCurrentUser();
  } else if (config.isiOSXZ) {
    window.webkit.messageHandlers.khtRequestAppCurrentUser.postMessage({});
  }
}
