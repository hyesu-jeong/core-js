/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* (엘리먼트를 찾는)요소 노드에서만 사용 가능 */
// - parentElement
// - children : 자식들의 집합(유사배열)
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest


// function getNode(node, context = document) {
//   if (typeof context == 'string') {
//     context = document.querySelector(context);
//   }
//   return context.querySelector(node);
// }

/* ---------------- 단일 요소 찾는 getNode 함수 --------------- */
function getNode(node, context = document) {
  // if(isString(context)) context = document.querySelector(context);

  // context가 document가 아니라면 querySelector를 돌아줘.
  // if()
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}

getNode('.list','#visual-section'); // ul

/* ---------------- 복수 요소 찾는 getNodes 함수 --------------- */
function getNodes(node, context = document) {

  // if()
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelectorAll(node);
}

getNodes('.list > li');








// 1. id가 visual-section인 section 태그 요소
// const visualSection = document.getElementById('visual-section');
// console.log('1. ', visualSection);
const section = document.querySelector('#visual-section');
console.log('1. ', section);


// 2. class가 list인 ul 태그 요소
// const list = document.getElementsByClassName('list');
const list = section.querySelector('.list');
console.log('2. ', list);


// 3. list 요소 안에 about li 태그 요소
// const about = document.querySelector('.list > li:nth-child(2)');
const about = list.querySelector('li:nth-child(2)');
console.log('3. ', about);


// const aboutLi = [...list.children].find((li)=>{
//   return li.textContent === 'about';
// })

// 위 코드 축약 버전
const aboutLi = [...list.children].find(li => li.textContent === 'about')

console.log(aboutLi)


// 4. name 속성이 search-box인 form 태그 요소
// const searchBox = document.querySelector('[name="search-box"]');
// console.log('4. ', searchBox);
const form = document.querySelector('form[name="search-box"]');


// 5. form 요소 안에 있는 모든 자식 요소
// const formChildren = document.querySelector('form').children;
// console.log('5. ', formChildren);
const children = form.children
// const children = form.querySelectorAll('*')
console.log('5. ', children);


// 6. form 요소 안에 있는 input 태그 요소
// const formInput = document.querySelector('form input');
// console.log('6. ', formInput);
/* ----------------- 마지막 요소 찾기 ---------------- */
// const input = form.lastElementChild;
const input = children[children.length -1];
console.log('6. ', input);





/* 문서 대상 확인 */
// - matches
// - contains
