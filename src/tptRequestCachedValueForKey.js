import config from './config';

/**
 * 获取缓存中的数据接收1个参数
 * @param key
 */
export default function tptRequestCachedValueForKey(key) {
  // eslint-disable-next-line no-undef
  if (config.isAndroidXZ && config.isKhtAPP && kht.tptRequestCachedValueForKey) {
    // eslint-disable-next-line no-undef
    kht.tptRequestCachedValueForKey(key);
  } else if (config.isiOSXZ && config.isKhtAPP
    && window.webkit.messageHandlers.tptRequestCachedValueForKey) {
    window.webkit.messageHandlers.tptRequestCachedValueForKey.postMessage({ key });
  }
}
