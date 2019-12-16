import config from './config';

/**
 * 唤起原生分享
 * @author john.bian
 * @param shareInfo -> title imgUrl url content
 * @since 1.1.8
 */
export default function tpAppShare(shareInfo) {
  if (config.isAndroidXZ) {
    // eslint-disable-next-line no-undef
    kht.tpAppShare(shareInfo.imgUrl,
      shareInfo.title, shareInfo.content, shareInfo.url);
  } else if (config.isiOSXZ) {
    window.webkit.messageHandlers.tpAppShare.postMessage(shareInfo);
  }
}
