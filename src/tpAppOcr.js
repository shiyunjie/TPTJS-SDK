import config from './config';

/**
 * 唤起原生OCR
 * @author john.bian
 * @param ocrInfo -> width, height, isForeground, type,compressImageQuality, includeBase64, callBack
 * @since 1.2.9
 */
export default function tpAppOcr(ocrInfo) {
  // eslint-disable-next-line no-undef
  if (config.isAndroidXZ && kht.tpAppOcr && config.isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.tpAppOcr(ocrInfo.width,
      ocrInfo.height,
      ocrInfo.type,
      ocrInfo.isForeground,
      ocrInfo.compressImageQuality,
      ocrInfo.includeBase64,
      ocrInfo.callBack);
  } else if (config.isiOSXZ && config.isKhtAPP
    && window.webkit.messageHandlers.tpAppOcr) {
    window.webkit.messageHandlers.tpAppOcr.postMessage(ocrInfo);
  }
}
