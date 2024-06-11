/* --------- */
/* Object    */
/* --------- */

/* global isObject */

const html = /* html */ `
  <h1>title</h1>
  <div class="first">
    hello
  </div>
`;


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-zxk!#$!@',
  name: 'tiger',
  email: 'seonbeom2@euid.dev',
  isLogin: false,
  Permissions: 'paid',
}

// 점(.) 표기법

console.log('authUser.uid',authUser.uid)

// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법


// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log("authUser['uid']", authUser['uid'])
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']); // getter
console.log(authUser['Permissions'] =  'allPass' );





Object.prototype.nickName = '호랑이';


//객체 안에 키가 있는지 확인 방법

// in 문
console.log('uid' in authUser);

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(key, authUser[key]);
  }
}




// 객체의 key 만을 모아서 배열을 반환하는 메서드 Object.keys()
const keyList = Object.keys(authUser);

console.log(keyList);




// 객체의 value 만을 모아서 배열을 반환하는 메서드 Object.values()

const valueList = Object.values(authUser);

console.log(valueList);




/* Object.keys(authUser)를 함수로 만들어 보기 */

function getPropertiesList(obj) {
  
  let result = [];

  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      result.push(key);
    }
  }

  return result;

}

getPropertiesList(authUser); // ['uid', 'name', 'email', 'isLogin', 'Permissions']


console.clear();

// 프로퍼티 제거(remove) or 삭제(delete)
// 제거(remove) : 비워두기 (key는 남겨두고 value만 삭제)
// 삭제(delete) : 메모리 날림

// 객체가 맞는지 
function removeProperty(obj,key){

  if(isObject(obj)){
    obj[key] = null;
  }
}

removeProperty(authUser,'name') // authUser.name = null;





function deleteProperty(obj,key){

  if(isObject(obj)){
    delete obj[key]
  }

}

deleteProperty(authUser,'name') // undefined









// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel


function createUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  }
}


// authentication :인증을 뜻할 때





// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99'; // authorization: 권한을 뜻할 때
let isLogin = true;


const student = {
  name,
  email,
  authorization,
  isLogin,
}




// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0
}


isEmptyObject({}) // true
isEmptyObject(student) // false




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// 순서(order)를 바꿀 수 없음.

const arr = [10, 100, 1000, 10_000];

/* 
const [a0, a1, a2, a3, , a5] = arr; // 안쓰는 배열은 비워두면 됨.
const a0 = arr[0];
const a1 = arr[1];
const a2 = arr[2];
const a3 = arr[3];

console.log(a0, a1, a2, a3); // 10 100 1000 10000
 */

const [a0, ...rest] = arr;


for (let [key, value] of Object.entries(authUser)) {

  // console.log(key, value);

}
 


const [first,second] = document.querySelectorAll('span');

// const first = spanList[0];
// const second = spanList[1];

// const first = document.querySelector; ('first');
// const second = document.querySelector; ('second');
// const hundred = document.querySelectorAll('span')[100]; // 100번째 span 코드 가져올 때 예시








/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

// 순서(order)를 바꿀 수 있음. key와 변수명이 동일해야 함. => 변수명 O

const salaries = {
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300,
}

// const 함정민 = salaries.함정민;
// const 지유진 = salaries.지유진;
// const 이진용 = salaries.이진용;
// const 한상학 = salaries.한상학;
// 위 코드를 아래와 같이 객체 구조 분해 할당 해줌

// const {함정민, 지유진, 이진용, 한상학} = salaries;

// console.log( 함정민, 지유진, 이진용, 한상학 ); // 95, 110, 15, 300

// 객체 구조 분해 할당을 사용해 salaries 객체의 프로퍼티 이름을 바꿔보기
 const {함정민:ham = 100, 지유진:ji, 한상학: han, 이진용: lee, 장주원 = 500} = salaries;

console.log(ham, ji, han, lee); // 95, 110, 300, 15

console.log(장주원); // 위에서 key를 할당하지 않아도 구조 분해 할당에서 추가해줄 수 있다. value 지정없이 key만 할당하면 'undefined'가 나옴
 
function createUserObject({
  name = '철수',
  age,
  gender,
  job: j = '홈프로텍터',
} = {}) {
  // const {name,age,gender,job} = obj;

  return { name, age, gender, job: j };
}

const data = {
  name: 'beom',
  age: 40,
  gender: 'male',
  job: 'developer',
  address: '서울시 강남구 역삼동',
  phone: '010-1234-5678',
};

const person = createUserObject(data);