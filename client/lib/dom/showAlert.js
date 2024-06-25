import { addClass, removeClass } from './css.js';
import { isString } from '../utils/type.js';
import { getNode } from './getNode.js';

/**
 *
 * @param {HTMLElement | String} node
 * @param {String} message
 * @param {Number} timeout
 * @returns {void} // 명시적으로 '이 함수는 아무것도 내보내지 않음' 의미
 */

export function showAlert(node, message, timeout = 1000) {
  if (isString(node)) node = getNode(node);

  node.textContent = message;

  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}
