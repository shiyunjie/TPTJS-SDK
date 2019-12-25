import config from './config';

/**
 * @author johnbian
 * @param excuteTime 调用时机
 * @param callBack 回调方法
 * @description 告诉app何时执行js回调
 * @since 1.20.0
 */
export default function khtExcuteJSCallback(excuteTime, callBack) {
  // eslint-disable-next-line no-undef
  if (config.isAndroidXZ && kht.khtExcuteJSCallback) {
    // eslint-disable-next-line no-undef
    kht.khtExcuteJSCallback(excuteTime, callBack);
  } else if (config.isiOSXZ && window.webkit.messageHandlers.khtExcuteJSCallback) {
    window.webkit.messageHandlers.khtExcuteJSCallback.postMessage({ excuteTime, callBack });
  }
}
