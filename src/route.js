import config from './config';
/**
 * 原生路由跳转
 * @param authorization number 1: 需要实名认证
 * @param detail string
 * @param loginStatus number 1: 登录 0: 不用登录
 * @param pageType string  RN HTML native
 * @param tagUrl string
 */

export default function khtAppRouteRequest(authorization, detail,
  loginStatus, pageType, tagUrl) {
  if (config.isAndroidXZ && config.isKhtAPP) {
    // eslint-disable-next-line no-undef
    kht.khtAppRouteRequest(
      authorization,
      detail,
      loginStatus,
      pageType,
      tagUrl,
    );
  } else if (config.isiOSXZ && config.isKhtAPP) {
    window.webkit.messageHandlers.khtAppRouteRequest.postMessage({
      authorization,
      detail,
      loginStatus,
      pageType,
      tagUrl,
    });
  }
}
