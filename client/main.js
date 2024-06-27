/* global gsap */

import { getNode, tiger, xhrPromise, renderUserCard } from './lib/index.js';

const getData = async () => {
  const data = await xhrPromise.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  console.log(data);
};

// getData();

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// 1. user의 data fetch 해주세요.
// - tiger.get

// 2. fetch data의 user name 콘솔 출력 해주세요.
// - 데이터 유형 파악 ex) 객체, 배열, 숫자, 문자
// - 적당한 메서드 사용하기

// 3. 유저 이름 화면에 렌더링

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  const response = await tiger.get(ENDPOINT);

  const data = response.data; // data는 배열

  data.forEach((user) => renderUserCard(userCardInner, user)); // 배열에 접근하기 위해 forEach
}

renderUserList();
