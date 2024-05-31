/* ---------------- */
/* Condition        */
/* ---------------- */

/* const result = prompt('자바스크립트의 "공식" 이름은 무엇일까요?', '');

if (result === 'ECMAScript') {
  console.log('정답입니다!');
} else {
  console.log('모르셨나요? 정답은 ECMAScript입니다!');
}
 */

function watchingMovie() {
  // 그 영화 봤니?
  //     ↓
  // Yes | No
  //     | 영화 볼거니?
  //           ↓
  //       Yes | No

  // 영화 봤니?
  let didWatchMovie = confirm('그 영화 봤니?');

  if (didWatchMovie) {
    console.log('그 영화 참 재밌더라!');
  } else {
    let goingToWatchMovie = confirm('영화 볼거니?');
    if (goingToWatchMovie) {
      //영화 볼거야
      let withWho = prompt('누구랑 볼거니?');

      if (withWho === 'You') {
        console.log('사랑해');
      }
    } else {
      // 안볼거야
      console.log('그래 나중에 한번 꼭 봐!');
    }
  }
}

// 영화 볼거니?

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자 '?' 삼항식

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// const message =
//   didWatchMovie === 'yes' ? '그 영화 참 재밌더라!' : '다음에 같이 볼래?';

// - 아래와 같이 .includes() 메서드를 활용할 수 있다.
const message = didWatchMovie.includes('yes')
  ? '그 영화 참 재밌더라!'
  : goingToWatchMovie.includes('yes')
    ? '언제 볼까? 재밌겠다.'
    : '그래...';

// 멀티 조건부 연산자 식

function render(node, isActive) {
  let template = `
    <div>${isActive ? '안녕~~!!' : '잘가~~!!'}</div>
  `;
  node.insertAdjacentHTML('beforeend', template);
}

// console에서 render(document.body,true) 실행해서 확인 가능하다.
