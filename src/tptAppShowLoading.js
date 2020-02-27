import config from './config';

/**
 * h5唤起loading
 * @author john.bian
 * @param flag : 0/1
 * @since 4.0.24
 */
export default function tptAppShowLoading(flag) {
  // eslint-disable-next-line no-undef
  if (config.isAndroidXZ && config.isKhtAPP && kht.tptAppShowLoading) {
    // eslint-disable-next-line no-undef
    kht.tptAppShowLoading(flag === 1);
  } else if (config.isiOSXZ && config.isKhtAPP
    && window.webkit.messageHandlers.tptAppShowLoading) {
    window.webkit.messageHandlers.tptAppShowLoading.postMessage({ flag });
  }
}
