/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler() {
  console.log('DOMEvent클릭했어요!');
}


// 2. DOM 프로퍼티 : element.onclick = handler

const first = getNode('.first');
// first.onclick = handler;


// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(e) { // evnet = evt = e : 지원하는 이벤트 객체로 가져다 쓸 수 있다.
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);
  // console.log('addEventListener 클릭했어요!');
}

// first.addEventListener('click', handleClick)
// first.addEventListener('mousedown', handleClick)
// first.addEventListener('mouseup', handleClick)



const second = getNode('.second');

// second.addEventListener('click',firstEventRemove)

// function bindEvent(node, type, handler) {
//   if (isString(node)) node = getNode(node);

//   node.addEventListener(type, handler);

//   return () => node.removeEventListener(type, handler);
// }


// const firstEventRemove = bindEvent('.first','click', handleClick)

// second.addEventListener('click', firstEventRemove);



/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener


const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall(e) {
  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${y - ball.offsetHeight / 2}px)`;
}

// ground.addEventListener('click', handleClickBall);



/* --------- 마우스 따라다니게 하는 이벤트 handMove -------- */

function handleMove({ offsetX: x, offsetY: y }) {
  console.log(x, y);

  let template = /* html */ `
    <div class="emotion" style="top:${y-16}px; left:${x-16}px;">❤️</div>
  `;

  insertLast(ground, template);
}

/* ------------- 부화를 많이 가져오는 이벤트들 ------------- */
// mousemove
// ground.addEventListener('mousemove', handleMove);
// // resize
// window.addEventListener('resize', () => {
//   console.log('resize!');
// });

/* --------------- 부화 방지를 위한 코드 --------------- */
// throttle : 수도꼭지
// debounce : 공 튀김 방비


// - debounce

// let timeout;

// function debounce(callback) {

//   clearTimeout(timeout);

//   timeout = setTimeout(() => {
//     callback();
//   },1000)
// }

// debounce(() => {
//   console.log('hello');
// })

// 클로저로 만들기
function debounce(callback, limit = 500) {
  let timeout;
  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}

// ground.addEventListener('mousemove', debounce(handleMove));




/* ----------------- throttle ----------------- */

// call(this,a,a,a,a), apply(this,[a,a,a,a])

function throttle(callback, limit = 200) {
  let waiting = false;

  return function (e) {
    if (!waiting) {
      callback.call(this, e);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

ground.addEventListener('mousemove', throttle(handleMove));