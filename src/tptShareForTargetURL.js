import config from './config';

/**
 * 唤起目标页面分享按钮
 * @param targetUrl
 * @param title
 * @param imgUrl
 * @param url
 * @param content
 * @since 1.2.6
 */
export default function tptShareForTargetURL({
  targetUrl, title, imgUrl, url, content,
}) {
  if (config.isAndroidXZ && config.isKhtAPP && kht.tptShareForTargetURL) {
    /* eslint no-undef: 0 */
    kht.tptShareForTargetURL(targetUrl, title, imgUrl, url, content);
  } else if (config.isiOSXZ && config.isKhtAPP
    && window.webkit.messageHandlers.tptShareForTargetURL) {
    window.webkit.messageHandlers.tptShareForTargetURL.postMessage({
      targetUrl,
      title,
      imgUrl,
      url,
      content,
    });
  }
}
