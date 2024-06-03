/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 10;

switch (a) {
  case 10:
    console.log('10입니다!');
    break;

  case 11:
    console.log('11입니다!');
    break;

  case 12:
    console.log('12입니다!');
    break;

  default:
    console.log('10, 11, 12가 아닙니다!');
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LATE_NIGHT;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;

  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;

  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;

  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case LATE_NIGHT || DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;

  default:
    console.log('아침, 점심, 저녁, 밤, 심야, 새벽이 아닙니다.');
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} else {
  console.log('아침, 점심, 저녁, 밤, 심야, 새벽이 아닙니다.');
}

/* switch vs. if -------------------------------------------------------- */

// * 함수는 하나의 기능만을 수행한다.
// * 개발 방법론: Separation of Concerns(SoC) 관심사의 분리
// * parameter: 매개변수
function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}


function getDay(value) {

  switch (value) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
    default:
      alert('잘못입력하셨습니다.');
  }

}

function weekend() {
  // getDay를 실행해서 일~월요일을 받아오는 함수

  const toDay = getDay(getRandom(7));

  // 해당 요일을 가지고 토,일 => 주말입니다.
  // 해당 요일을 가지고 나머지 요일 => 평일입니다.

  // if (toDay === '토' || toDay === '일') {
  //   return '주말입니다.';
  // } else {
  //   return '평일입니다.';
  // }

  // const day = toDay.includes('토') || toDay.includes('일') ? '주말입니다.' : '평일일입니다.'; 
  // return day;
 return toDay.includes('토') || toDay.includes('일')
   ? '주말입니다.'
   : '평일일입니다.'; 
}

console.log(weekend());