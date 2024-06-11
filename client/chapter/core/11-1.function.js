/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

// 함수 선언        // (priceA, priceB, ... ) : 매개 변수 = parameter = 인자      // = 0 : default parameter
// function calcPrice(priceA, priceB, priceC, priceD = 0) {
  function calcPrice(
    priceA,
    priceB,
    priceC = getRandomValue(),
    priceD = getRandomValue()
  ) {
    // validation : 확인 하는 과정
    // if (priceC === undefined) { priceC = 0;}
    // if(!priceC) priceC = 0;
    // priceC = priceC || 0;
    // priceC ||= 0;
    // priceC = priceC ?? 0;
    // priceC ??= 0;

    // console.log(priceA + priceB + priceC + priceD);
  }

// 함수 호출

const result = calcPrice(1000,3000); // (1000, 3000, ... ) : 함수를 호출할 때 쓰는 aguments(인수)

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건
// todo : 재사용성이 좋아야 한다.
// todo : 함수의 이름을 잘 지어야 한다. (동사) / 가동성 => 읽었을 때 바로 기능을 알 수 있다.
// todo : 전역의 오염을 막는다.
// todo : 하나의 기능만을 수행해야 한다.




/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;

function rem(pxValue, base = 16) {

  if (!pxValue) {
    throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.')
  }

  // 타입 가드 : 타입을 막아서 원하는 코드로 나오게 해주는 것.
  if (typeof pxValue ==='string') {
    pxValue = parseInt(pxValue, 10);
  }

  if (typeof base === 'string') {
    base = parseInt(base, 10);
  }
  
  return pxValue / base +'rem';
}

// parseFloat
// parseInt

/* ----- TDD : Test Driven Development 테스트 코드 작성. 페이스북에서 만든 테스트 사이트: https://jestjs.io/ ---- */
console.assert(rem(20) === '1.25rem');
console.assert(rem('25px') === '1.5625rem');
console.assert(rem('30px', 10) === '3rem');


// css(node: string, prop: string, value: number|strung) : string;
let css;





/* ---------------- 객체에 접근하는 방법 --------------- */
// 점 표기법     => 변수로 사용 X
// 대괄호 표기법 => 변수로 사용 O

// const first = document.querySelector('.first');

function setStyle(node, prop, value) {

  if (typeof node === 'string') node = document.querySelector(node); 
  
  if (typeof prop !== 'string') throw new Error('prop은 문자열이어야 합니다.');
  
  if (!value) throw new Error('value는 필수 입력 값 입니다.');

  node.style[prop] = value;
}

// => first.style.color = 'blue'; 해당 코드를 아래와 같이 변수로 만들 수 있다.
setStyle('.first', 'color', 'blue');











// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
