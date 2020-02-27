import config from './config';

/**
 * 告诉原生签名回调
 * @author john.bian
 * @param signatureData: 签名
 * @param signatureEncryptedData: 加密后的签名
 * @since 4.0.4
 */
export default function callBackSignatureInfo({ signatureData, signatureEncryptedData }) {
  // eslint-disable-next-line no-undef
  if (config.isAndroidXZ && config.isKhtAPP && kht.callBackSignatureInfo) {
    // eslint-disable-next-line no-undef
    kht.callBackSignatureInfo(
      signatureData,
      signatureEncryptedData,
    );
  } else if (config.isiOSXZ && config.isKhtAPP
    && window.webkit.messageHandlers.callBackSignatureInfo) {
    window.webkit.messageHandlers
      .callBackSignatureInfo.postMessage({ signatureData, signatureEncryptedData });
  }
}
