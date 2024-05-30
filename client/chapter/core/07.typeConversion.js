/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(String(YEAR));
console.log(typeof (YEAR + ' '));
//콘솔창에서 텍스트 색깔이 하얀색이면 문자형. 보라색이면 숫자형이다.

/* 암시적 숫자형 변환 */
let number = '100';

console.log(Number(number));
console.log(number * 1);
console.log(number / 1);
console.log(number - 1);
console.log(number % 1);
console.log(number ** 1);
console.log(number + 1); // '+'만 숫자형으로 변환되지 않고 문자형으로 접합된다.

// undefined, null
let days = null;
console.log(days + ' ');

let friends;
console.log(friends + '');

// boolean
let isClicked = true;

// console.log(String(isClicked));
console.log('isClicked', isClicked);
// dot log

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined => NaN

let friend;
console.log(Number(friend));

// null => 0

let money = null;
console.log(Number(money));

// boolean
// true = 1, false = 0
let isMarried = true;
console.log('isMarried', isMarried);

// string

let num = 100;
console.log(String(num));

console.log(num + ' ');

// numeric string

const width = '120.5px';

console.log(parseInt(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(' '));
console.log(Boolean('0'));
