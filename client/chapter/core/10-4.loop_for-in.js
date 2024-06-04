/* ---------------- */
/* For In Loop      */
/* ---------------- */

// key in javaScript; // 해당 키가 'javaScript' 객체에 포함되어 있는가?

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

Object.prototype.nickName = 'tiger'; // 자바스크립트 객체에 'nickName' 속성을 추가함. (부모 객체를 훼손))

console.log( 'creator' in javaScript ); // true
console.log('toString' in javaScript); // true -> 할당한 객체에 해당 키가 없으면 부모 객체까지 확인하기 때문에 'true'로 나온다.
console.log('valueOf' in javaScript); // true -> 할당한 객체에 해당 키가 없으면 부모 객체까지 확인하기 때문에 'true'로 나온다.




// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인() 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty('nickName')); // false
// console.log(javaScript.hasOwnProperty('creator')); // true

/* ----------------- 메서드 빌려쓰기 ----------------- */
// console.log( Object.prototype.hasOwnProperty.call(javaScript, 'nickName') ); // false


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) // 부모 객체의 속성을 확인하지 않고 자신의 속성만 확인하는 코드.
  {
    // console.log(key);
    // console.log(key, javaScript[key]); // 객체의 속성과 값을 출력.
    // console.log(javaScript.key);
  }

}


const tens = [10, 100, 1000, 10_000];

for (let key in tens) {
  console.log(tens[key]);
}









/* ----------------- 객체의 속성을 변경할 수 없게 만드는 방법 ----------------- */
const obj = {};

Object.defineProperty(obj, 'age', {
  value: 10,
  writable: true, // 값을 변경할 수 있는가?
  enumerable: true, // 값을 조회 가능한가?
  configurable: true, // 값을 제거할 수 있는가?
});

Object.freeze(javaScript); // 객체의 속성을 변경할 수 없게 만든다.