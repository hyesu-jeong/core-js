/* -------------------- */
/* Do While Loop        */
/* -------------------- */


// let i = 0;
 
// do {
//   console.log(i);

//   if (i === 3) {
//    console.log('3입니다.');
//   }

//   i++;
// } while (i < 5);







// do ~ while 문 (역순환)
// /- prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// /- 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// /- 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// /- 순환 중단


// let result = prompt('순환 횟수를 입력하세요.');

// do {
//   console.log(result);

//   if (result < 0) { 
//     console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');
//     break;
//   }

//   result--;
// } while (result >= 0); // 마이너스(음수) 값이 0보다 작을 경우 순환 중단




// do ~ while 문 (순환)
// /- 위 do ~ while 문을 순방향으로 순환되도록 설정


// let count = 0;

// do {
//   console.log(count);
//   count++;
// } while (result--)



// * HTML class 가져오기
// let first = document.querySelector('.first'); // document : HTML 문서 객체


// - first의 다음 요소(Element)인 second 요소(Element) 가져오기

// 1. nodeType : 노드 타입 (https://developer.mozilla.org/en-US/)을 활용한 방법
// do {

//     first = first.nextSibling;

// } while (first.nodeType !== 1); // 1 : Element 노드 타입 (https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
  
  function next(node) {
    //다음 형제 노드가 나오는 next 함수 만들기
    // if (first.nodeType === 1) {
    //   return first.nextElementSibling;
    //  }

    // node가 문자일때만 실행하도록 조건문 추가 => validation : 코드가 안전하게 실행되도록 확인하는 과정.
    if (typeof node === 'string') node = document.querySelector(node);

    do {
      node = node.nextSibling;
    } while (node.nodeType !== 1);
    return node;
  }

  const second = next('.first'); // .second 요소(Element) 가져오기



// 2. .nextElementSibling :.nextElementSibling 메서드를 활용한 방법
 
// .nextSibling : 다음 형제 노드(node) 띄어쓰기, 줄바꿈, 주석 다 읽음
// .nextElementSibling : 다음 형제 노드(node) 클래스 가져오기


//- 이전 형제 노드가 나오는 prev 함수 만들기
prev(second) // .first 요소(Element) 가져오기


//이전 형제 노드가 나오는 prev 함수
function prev(node) { 

  if (typeof node === 'string') node = document.querySelector(node);

  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);
  return node;      
}

const previous = prev('.second'); // .first 요소(Element) 가져오기




let nickName = 'tiger';
console.log(nickName);

if (nickName) {
  let nickName = 'yamoo';
  console.log(nickName);
}

console.log(nickName);


let ba = 10;
let aa = 5;
const func1 = (aa) => aa + ba;
console.log('func1',func1)
const func2 = (aa) => aa + ba;
console.log('func2',func2)
const func3 = (aa) => {
  aa + ba;
};
console.log('func3',func3)
const func4 = (aa) => ({ result: aa + ba });
console.log('func4',func4)