import config from './config';

/**
 * 唤起小程序
 * @param userName  小程序原始id
 * @param path 小程序路径
 * @param type 可选打开开发版（1），体验版（2），正式版（0）number
 */
export default function intentMiniProgram({ userName, path, type }) {
  const obj = {
    userName,
    path,
    type,
  };
  if (config.isAndroidXZ && config.isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.intentMiniProgram(JSON.stringify(obj));
  } else if (config.isiOSXZ && config.isKhtAPP) {
    window.webkit.messageHandlers.intentMiniProgram.postMessage(obj);
  }
}
