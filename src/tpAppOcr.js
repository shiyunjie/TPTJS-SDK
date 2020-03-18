import config from './config';

/**
 * 唤起原生OCR
 * @author john.bian
 * @param ocrInfo -> width, height, isForeground, compressImageQuality, includeBase64,
 * @since 1.2.9
 */
export default function tpAppOcr(ocrInfo) {
  // eslint-disable-next-line no-undef
  if (config.isAndroidXZ && kht.tpAppOcr && config.isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.tpAppOcr(ocrInfo);
  } else if (config.isiOSXZ && config.isKhtAPP
    && window.webkit.messageHandlers.tpAppOcr) {
    window.webkit.messageHandlers.tpAppOcr.postMessage(ocrInfo);
  }
}
