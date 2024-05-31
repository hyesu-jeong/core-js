/* ---------------- */
/* Operators        */
/* ---------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;
console.log(unary); // 숫자형 10

// 이항 연산자
let binary = a + b;
console.log(binary); // 문자열 1030

// 이항 연산자 - 명시적 변환
let binary2 = Number(a) + Number(b);
console.log(binary2); // 숫자형 40

// 삼항 연산자
// let ternary = a > 10 - true : false;
// console.log(ternary); // false

// - 연산자와 식은 값을 반환한다.
// - 비교 연산자는 문자형을 숫자형으로 암시적 형 변환을 한다.

// 산술 연산자: 덧셈
let addition = 1 + 2;
console.log(addition); // 3

// 산술 연산자: 뺄셈
let subtraction = 10 - 1;
console.log(subtraction); // 9

// 산술 연산자: 곱셈
let multiplication = 20 * 2;
console.log(multiplication); // 40

// 산술 연산자: 나눗셈
let division = 30 / 2;
console.log(division); // 15

// 산술 연산자: 나머지
let remainder = 10 % 3;
console.log(remainder); // 1

// ? 요거 밑에 에러 찾아보기
if (a % 2 != 0) {
  console.log('홀수야!');
}

// 산술 연산자: 거듭 제곱
let power = 2 ** 3;
console.log('power', power);
console.log(Math.pow(2, 53));

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';
console.log(coercionTypeConversion); // 27

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];
console.log(onlyWorkDefaultValues); // 1,2,34,5,6
// - 배열끼리는 식을 쓸 수 없다.

// 배열을 합치려면 .concat() 메서드를 사용하세요.
let onlyWorkDefaultValues2 = [1, 2, 3].concat([4, 5, 6]);
console.log(onlyWorkDefaultValues2); // 1,2,3,4,5,6

// 오늘날에 많이 쓰이는 배열 합성 방법
let first = [1, 2, 3];
let second = [4, 5, 6];

console.log(first);
console.log(second);

// - spread syntax (전개 구문)
// -spread operator (전개 연산자)
console.log([...first, ...second]);

console.log(first.concat(second));
// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

console.clear();

let counter = 0;

console.log(counter++);
console.log(counter);

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3;

// - 위 코드를 계행 해서 정리해보기
let total = count % 4;
count /= 2;
let pow = count ** 3;
total = total * count + pow;

console.log('total', total); //135
