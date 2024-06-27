/* global gsap */

import {
  getNode,
  tiger,
  delayP,
  xhrPromise,
  renderUserCard,
  changeColor,
  renderSpinner,
  renderEmptyCard,
} from './lib/index.js';

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
  // 로딩 스피너 렌더링
  renderSpinner(userCardInner);

  await delayP(2000);

  try {
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        // gsap 애니메이션이 끝난 지점알려줌. 순수 js는 transition end가 있음.
        // getNode('.loadingSpinner').remove();
        this._targets[0].remove(); // 로딩 지워주는 코드 위에 코드와 동일하게 작동함.
      },
    });

    const response = await tiger.get(ENDPOINT);

    const data = response.data; // data는 배열

    data.forEach((user) => renderUserCard(userCardInner, user)); // 배열에 접근하기 위해 forEach

    changeColor('.user-card');

    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      stagger: {
        // stagger: 순서대로 나오는 거
        // each: 0.1,
        amount: 1, // 1초안에 다 나오는 거
        form: 'start', // 어디서 부터 시작할지 'center','edge', 'end' 도 있음
      },
    });
  } catch {
    console.error('에러가 발생했습니다!');
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

/* ----------- gsap 애니메이션 from/to ----------- */
// form : -부터 / 현재위치 스타일 잡고 여기서부터 모션 시작
// to : -까지 / 작성한 스타일 잡고 여기까지 완료
// set : 애니메이션이랑 관련없이 세팅만 해주는 거
