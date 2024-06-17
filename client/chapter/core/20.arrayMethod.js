/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

/* 배열인지 체크하는 함수 */
// function isArray(data) {
//   return Object.prototype.toString.call([]).slice(8, -1).toLowerCase(); === 'array'
// }
// 위 코드를 arrow 함수로 바꿈.
// const isArray = (data) =>
//   Object.prototype.toString.call([]).slice(8, -1).toLowerCase() === 'array';

// isArray(data); // true | false

// function typeOf(data) {
//   Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
// }
// 위 코드를 arrow 함수로 바꿈.
// const typeOf = (data) =>
//   Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

// const isNull = (data) => typeOf(data) === 'null';
// const isNumber = (data) => typeOf(data) === 'number';

/* ------------------------------ */

const people = [
  {
    id: 0,
    name: '안재명',
    age: 25,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 1,
    name: '황선우',
    age: 51,
    job: '요식업 사장님',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 2,
    name: '유진',
    job: '디스코드 봇',
    age: 12,
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 3,
    name: '김한울',
    job: '비둘기',
    age: 39,
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/78.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

people.forEach((user) => {
  console.log(user.job);
});

// forEach 값을 반환하는 방법

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

const span = document.querySelectorAll('span');

// span은 유사배열
span.forEach((tag) => {
  tag.addEventListener('click', function () {
    this.style.color = 'dodgerblue';
  });
});

/* first.addEventListener('click', () => {
  console.log('first를 클릭하셨습니다.');
});
second.addEventListener('click', () => {
  console.log('second를 클릭하셨습니다.');
});
third.addEventListener('click', () => {
  console.log('third를 클릭하셨습니다.');
}); */

/* 원형 파괴 ----------------------------- */

// push
// people.push('admin');

// pop
// people.pop();

// unshift

// shift

// reverse : 값을 뒤집는다.
// people.reverse(); // 이대로 쓰면 원형을 파괴하기 때문에 아래와 같이 복사해야 사용해야됨. 자동으로 복사해주는 toReversed 사용 권장.

const arr = [...people];
arr.reverse();

console.log(arr);

// splice
// people.splice(0, 1, '안녕');

// sort
// + compare 함수가 필요하다.

function compare({ age: a }, { age: b }) {
  if (a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if (a == b) return 0; // 두 값이 같은 경우
  if (a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

people.sort(compare);

/* 새로운 배열 반환 ------------------------ */

// concat

// slice

// toSorted
const toSorted = people.toSorted(compare);

// toReversed : 알아서 복사해서 만들어주는 메서드

const toReversed = people.toReversed();
console.log(toReversed);

// toSpliced

const toSpliced = people.toSpliced(0, 2);

// map

// 이름만 담은 배열 반환

// const names = people.map((user) => {
//   return. user.name
// })
const names = people.map((user) => user.name);
console.log('이름만 담은: ', names);

// 현재 나이에 +2 배열 반환

// const = ages = people.map((user) => {
//   return user.age;
// })
const ages = people.map((user) => user.age + 2);
console.log('나이 +2: ', ages);

const cardTag = people.map(({ name, age, job, imgSrc, imgAlt }) => {
  let template = /* html */ `
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}.jpg" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li> <span class="strong">이름</span> : ${name}</li>
        <li> <span class="strong">나이</span> : ${age}</li>
        <li> <span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `;
  return template;
});

const ul = document.querySelector('ul');

cardTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

const 황 = people.find((item) => {
  return item.name === '황선우';
});

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

const filter = people.filter((item) => {
  return item.age > 20;
});

// console.log('filter: ', ...filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

// const reduce = people.reduce((acc,cur)=>{
//   return acc + cur.age
// },0)

const reduce = people.reduce((acc, cur) => acc + cur.age, 0);

const template = people.reduce((acc, cur) => {
  return acc + `<li class="userCard"> ${cur.name} : ${cur.age} </li>`;
}, '');

ul.insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '유진 정민 현주 재명';

// split
const stringToArray = str.split(' ');
console.log('stringToArray: ', stringToArray);

// join
const arrayToString = stringToArray.join(' ');
console.log('arrayToString: ', arrayToString);

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

/* forEach 함수로 만들어 보기 */
[1, 2, 3].forEach(() => {});

const forEach = (f, i) => {
  for (const a of i) f(a);
};

forEach(
  (item) => {
    console.log(item);
  },
  [1, 2, 3]
);

/* map 함수 만들기 */

const map = (f, i) => {
  let result = [];

  for (const a of i) {
    result.push(f(a));
  }
  return result;
};

console.log(map((n) => n + 2, [1, 2, 3]));

/* filter 함수 만들기 */

const _filter = (f, i) => {
  let result = [];

  for (const a of i) {
    if (f(a)) result.push(a);
  }
  return result;
};

console.log(_filter((n) => n > 3, [1, 2, 3, 4, 5]));

/* reduce 함수 만들기 */

const _reduce = (f, acc, i) => {
  if (!i) {
    i = acc;
    acc = i.shift();
    // i = acc[Symbol.iterator]();
    // acc = i.next().value
  }

  for (const a of i) {
    acc = f(acc, a);
  }

  return acc;
};

const add = (a, b) => a + b;

console.log(_reduce((t, p) => t + p.price, 0, products));

console.log(
  _reduce(
    add,
    map(
      (p) => p.price,
      _filter((p) => p.price < 10000, products)
    )
  )
);
