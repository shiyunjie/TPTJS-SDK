import config from './config';

/**
 * 唤起原生分享
 * @author john.bian
 * @param shareInfo -> title imgUrl url content
 * @since 1.1.8
 */
export default function tpAppShare(shareInfo) {
  // eslint-disable-next-line no-undef
  if (config.isAndroidXZ && kht.tpAppShare && config.isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.tpAppShare(shareInfo.imgUrl,
      shareInfo.title, shareInfo.content, shareInfo.url);
  } else if (config.isiOSXZ && config.isKhtAPP
    && window.webkit.messageHandlers.tpAppShare) {
    window.webkit.messageHandlers.tpAppShare.postMessage(shareInfo);
  }
}
