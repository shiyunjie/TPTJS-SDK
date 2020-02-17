import config from './config';

/**
 * 原生存值
 * @author john.bian
 * @param key 健值 'khtwebview_' 开头的字符串
 * @param value 要保持的值
 * @since 1.1.9
 */
export default function khtSaveString(key, value) {
  if (config.isAndroidXZ && config.isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.khtSaveString(key, value);
  } else if (config.isiOSXZ && config.isKhtAPP) {
    window.webkit.messageHandlers.khtSaveString.postMessage({ key, value });
  }
}
