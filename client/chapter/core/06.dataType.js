/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = 'Hello'; // string literal
const single = 'Hello';
const backtick = `Hello ${double + single}`;

console.log(backtick);

/* 자료형은 결국 함수로 만든 객체의 조합이다. 자바스크립트의 모든 것은 객체로 이루어져있다. */
const str = new String('hello');
// constructor function 자바스크립트에 내장되어 있는 '생성자 함수'로 String 객체를 만든다.
// '생성자 함수' 앞에는 'new'를 붙인다.
console.log(str);

// 4. 정수, 부동 소수점 숫자(길이 제약)

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;
console.log(typeof bigInt);

const num = BigInt(123); // 비교적 최근에 만들어진 코드는 '생성자 함수' 앞에 'new'를 붙이지 않아도 된다.
console.log(num);

// 6. 참(true, yes) 또는 거짓(false, no)

const isActive = false;
console.log(typeof isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.clear(); //콘솔에서 위에 있는 것을 지운다.

const obj = {
  name: 'John',
  // name은 key, 'John'은 value
}; // object literal 방식
console.log(obj);

const obj2 = new Object({
  name: 'Mike',
}); // constructor function 방식
console.log(obj2);

// 8. 고유한 식별자(unique identifier)

const id = Symbol('uuid');
const id2 = Symbol('uuid');

console.log(typeof id);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

const user1 = {
  name: 'tiger',
  age: 20,
};

console.log(user1);

// Array

const arr = [10, 100, 1000];
console.log(arr);

const newArray = new Array(1, 2, 3); // constructor function 방식
console.log(newArray);

const arrempty = new Array(10).fill(2);
console.log(arrempty);

// function

function plus(a, b) {
  console.log(a + b);
}

plus(10, 20);
plus(10, 30);


const user2 = {
  name: 'tiger',
  age: 20,
  sum: function (a, b) {
    return a + b
  },

  /* 객체 메서드 함수를 사용하는 방식 */
  sayHi: function () {  // 1 normal function
    return 'hello'
  },
  sayHi2: () => {       // 2 arrow function
    return 'hi'
  },
  sayHi3() {            // 3 concise method 해당방식을 가장 많이 쓴다.
    return 'holla'
  }

}

console.log(user2.sayHi())
console.log(user2.sayHi2())
console.log(user2.sayHi3())


// this

