/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인

const first = getNode('.first');

console.log(first.hasAttribute('class'));
console.log(first.hasAttribute('id'));

// - elementNode.getAttribute(name) – 속성값을 가져옴

console.log(first.getAttribute('class').split(' '));
//.split(' ') : 띄어쓰기로 구분되어 있는 String을 배열로 바꿀 수 있음.

console.log(first.getAttribute('sayHi'));
console.log(first.getAttribute('data-value'));



// - elementNode.setAttribute(name, value) – 속성값을 변경함

first.setAttribute('id','tiger')



// - elementNode.removeAttribute(name) – 속성값을 지움

first.removeAttribute('id')


// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes)


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset


first.dataset.name = 'hyesu' // setter
console.log(first.dataset.name);

console.log(first.getAttribute('data-name'));






/* -------------------- Error 함수 만들어 보기 ------------------------ */
function typeError(message) {
  return new TypeError(message + '문자 타입 이어야 합니다.');
}
// 사용 예시
// function setAttr(){
//   if (value === undefined) {
//     typeError('setAttr 함수의 두 번째 인수는');
//   }
// }





/* -------------------- getAttribute 함수 만들기 ------------------------ */

function getAttr(node, prop) {

  // if(typeof node === 'string') node = document.querySelector(node);
  if(isString(node)) node = getNode(node) // 위 코드를 기존에 만든 함수로 활용한 단축 버전
  
  if (!isString(prop)) throw new TypeError('getAttr: prop must be a string');

  return node.getAttribute(prop)

}

getAttr('.first', 'sayHi') // 'hola'




/* -------------------- setAttribute 함수 만들기 ------------------------ */

function setAttr(node, prop, value) {

  // if(typeof node ==='string') node = document.querySelector(node);
  if(isString(node)) node = getNode(node) // 위 코드를 기존에 만든 함수로 활용한 단축 버전
  
  if (!isString(prop)) throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');

  if (value === '') {
    node.removeAttribute(prop);
    return; // value가 공란일 경우 여기까지만 값을 반환하고, 이후에 있는 코드는 읽지 않음.
  }

  // prop에 data가 있다면 dataset으로 넣기
    if (prop.startsWith('data')) {
      prop = prop.slice(5);
      node.dataset[prop] = value;
      return;
    }

  if(!value) throw new ReferenceError('setAttr 함수의 세 번째 인수는 필수 입력값 입니다.')

  node.setAttribute(prop, value) // 보통 getter는 return을 가지지만 setter는 return을 가지지 않는다.

}

setAttr('.second', 'data-name', 'tiger')




/* ---------------------- getAttribute + setAttribute 합친 attr 함수 ---------------------- */

// function attr(node, prop, value) {
//   if (!value) {
//     return getAttr(node, prop);
//   } else {
//     setAttr(node, prop, value);
//   }
// }

// 위 코드를 arrow 함수로 함축한 버전(3항연산자)
const attr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node,prop,value)

attr('.fist', 'class') //getter
attr('.fist', 'class', 'tiger') //setter




