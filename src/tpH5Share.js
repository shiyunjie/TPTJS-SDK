import config from './config';

/**
 * h5唤起原生分享
 * @author john.bian
 * @param shareInfo -> title imgUrl url content
 * @since 1.1.5
 */
export default function tpH5Share(shareInfo) {
  if (config.isAndroidXZ) {
    // eslint-disable-next-line no-undef
    kht.showShareMenu(
      shareInfo.title,
      shareInfo.content,
      shareInfo.imgUrl,
      shareInfo.url,
    );
  } else if (config.isiOSXZ) {
    window.webkit.messageHandlers.Share.postMessage(shareInfo);
  }
}
