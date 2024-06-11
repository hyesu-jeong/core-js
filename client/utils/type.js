/* 객체인지 확인하는 함수 */
function isObject(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'object'
  );
}
