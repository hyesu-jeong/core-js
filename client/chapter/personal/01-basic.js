// *연산자
/*
const mathScore = prompt('수학 몇점?');
const engScore = prompt('영어 몇점?');

const result = (mathScore + engScore) / 2; // 문자 연산자이기 때문에 연결되어 출력 50 + 50 / 2 = 2525
const result = (+mathScore + +engScore) / 2; // 입력한 점수의 나누기 2로 정상 출력 50 + 50 / 2 = 50
*/
// console.log(result);

// *조건문
// if: if문이 true일 때 실행되는 코드
// else: if문이 false일 때 실행되는 코드
// else if: if문이 false이고 else if문이 true일 때 실행되는 코드

const age = 10;

if (age > 19) {
  console.log('환영 합니다.'); // 이 줄이 true라면 실행됩니다.
} else if (age === 19) {
  console.log('수능 잘치세요'); // 위에 줄이 false이고, 이 줄이 true라면 실행됩니다.
} else {
  console.log('안녕히 가세요.'); // 윗줄 모두 false면 이 줄이 실행됩니다.
}

// *함수
// 매개변수가 있는 함수

let msg = `Hello`; // 전역변수 (global variable)
console.log('함수 호출 전');
console.log(msg); // Hello

function sayHello(name) {
  if (name) {
    msg += `, ${name}`;
  }
  console.log('함수 내부');
  // 지역변수 (local variable)
  console.log(msg);
}

sayHello(); // Hello
sayHello('John'); // Hello, John
console.log('함수 호출 후');
console.log(msg); // Hello, John

// 전역변수와 지역변수

let name = 'Mike';

function sayHi(name) {
  console.log(name);
}

sayHi(); // undefined
sayHi('John'); // John

/* -------------------------------------------- */

/* 객체 */
