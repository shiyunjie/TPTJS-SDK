import config from './config';

/**
 * h5保存图片到相册
 * @author john.bian
 * @param imgBase64 : base64图片
 * @since 1.3.0
 */
export default function tptAppShowMenuDialog(imgBase64) {
  // eslint-disable-next-line no-undef
  if (config.isKhtAPP && config.isAndroidXZ && kht.tptAppShowMenuDialog) {
    // eslint-disable-next-line no-undef
    kht.tptAppShowMenuDialog(imgBase64);
  } else if (config.isiOSXZ && config.isKhtAPP
    && window.webkit.messageHandlers.tptAppShowMenuDialog) {
    window.webkit.messageHandlers.tptAppShowMenuDialog.postMessage({ image: imgBase64 });
  }
}
