import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     delay(() => {
//       first.style.top = '0px';
//       second.style.top = '0px';
//     });
//   });
// });

const p = new Promise((r, j) => {}); // new 생성자 함수는 무조건 객체이다.

const shouldRejected = false;

// 객체 합성
const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    // config = { ...defaultOptions, ...options }; // option과 defaultoption이 mixin이 된 상태의 객체
    Object.assign(config, options); // 위 코드와 동일한 기능을 함. Object.assign을 사용하면 config가 let이 아닌 const여도 작동한다.
  }

  let { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP(3000);

/* delayP()
  .then((res) => {
    console.log(res);
    first.style.top = '-100px';
    second.style.top = '100px';

    return delayP();
  })

  .then((res) => {
    console.log(res);
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';

    return delayP();
  })
  .then((res) => {
    first.style.top = '0px';
    second.style.top = '0px';
    console.log(res);
  });
 */

/* ---------------------------------------------- */
/*                  async와 await                 */
/* ---------------------------------------------- */

function d() {
  return new Promise((resolve, reject) => {
    resolve('데이터');
  });
}

// async 함수는 무 조 건 Promise object를 반환한다.
// await  2가지 기능 수행
//        1. result 꺼내오기
//        2. 코드 실행 흐름 제어

async function delayA(data) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공!');
    }, 2000);
  });

  // p.then((res)=>{
  //   console.log(res);
  // })

  const result = await p;

  console.log(result);
  return;
}

async function 라면끓이기() {
  const a = await delayP({ data: '물' });
  console.log(a);

  const b = await delayP({ data: '스프' });
  console.log(b);

  const c = await delayP({ data: '면' });
  console.log(c);

  const d = await delayP({ data: '그릇' });
  console.log(d);
}

// 라면끓이기();

/* --------------- 포켓몬 데이터 가져오기 --------------- */
async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/175');

  console.log(data.sprites.other.showdown['front_default']);

  insertLast(
    document.body,
    `<img src = "${data.sprites.other.showdown['front_default']}" alt="" />`
  );
}

getData();
