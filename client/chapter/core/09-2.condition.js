/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log('AandB', AandB);

// 논리곱 할당 연산자 Logical AND Assigment
// a &&= b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log('AorB', AorB);

// 논리합 할당 연산자 Logical OR Assigment
// a ||= b;

// 부정 연산자
let reverseValue = !value;
console.log('reverseValue', reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
console.log('whichFalsy', whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };
console.log('whichTruthy', whichTruthy);

// 로그인 구현하기

let userName = prompt('사용자 이름을 입력해주세요.');

if (userName?.toLowerCase() === 'admin') {
  let password = prompt('비밀번호를 입력해주세요.');

  if (password?.toLowerCase() === 'themaster') {
    alert('환영합니다!');
  } else if (
    password === null ||
    password === '' ||
    password.replace(/\s*/g, '') === ''
  ) {
    alert('취소되었습니다.');
  } else {
    alert('인증에 실패하였습니다.');
  }
} else if (userName === null || userName === '') {
  alert('취소되었습니다.');
} else {
  alert('인증되지 않은 사용자입니다.');
}
