import config from './config';

/**
 * 唤起原生密码键盘
 * @author shiyunjie
 * @param keyboardInfo -> callBackMethod
 * @since 1.3.0
 */
export default function tpAppSafeKeyboard(keyboardInfo) {
  const keyboardParam = {
    messageName: 'verifyPaymentPassword',
    callBackMethod: keyboardInfo.callBackMethod,
  };
  // eslint-disable-next-line no-undef
  if (config.isAndroidXZ && kht.tptSendMessageToTPApp && config.isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.tptSendMessageToTPApp(JSON.stringify(keyboardParam));
  } else if (config.isiOSXZ && config.isKhtAPP
    && window.webkit.messageHandlers.tptSendMessageToTPApp) {
    window.webkit.messageHandlers.tptSendMessageToTPApp.postMessage(keyboardParam);
  }
}
