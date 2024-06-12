/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// portableFan && portableFan.photos && portableFan.animate


// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

portableFan.photes?.animate

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

const fullName = portableFan.getFullName?.();

console.log( fullName )

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.




// sync(동기) async(비동기) web

console.log(1);
console.log(2);

setTimeout(function () {
  console.log(3);
}, 1000)

console.log(4);
console.log(5);



const button = document.querySelector('.my-button');



const id = setTimeout(() => {    // setTimeout: 일정 시간 뒤에 실행되도록 하는 함수.
  const template = /* html */ `
    <button type="button" class="my-button">my-utton</button>
  `;
  document.body.insertAdjacentHTML('beforeend', template);
}, 3000);

// clearTimeout(id); // clear the timer

button?.addEventListener('click', () => { 
  console.log('클릭');
})

// 비동기 에러가 발생할 때 에러가 나지 않도록 해주는 옵셔널 체이닝


// setInterval: 일정한 시간 간격으로 지속적으로 반복해서 작업을 실행할 때 사용하는 함수
// let count = 0;

// const id2 = setInterval(() => {
//   console.log(++count);

//   document.querySelector('.first').style.transform =
//     `translateY(${count}px) rotate(${count}deg)`;

//   if (count >= 500) {
//     // clearInterval(id2)
//   }
// }, 10);

// clearInterval(id2); // clear the timer

let counter = 0;

function animation() {
  console.log(++counter);

    document.querySelector('.first').style.transform =
      `translateY(${counter}px) rotate(${counter}deg)`;

  const id = requestAnimationFrame(animation);

  if (counter >= 100) {
    cancelAnimationFrame(id);
  }
}

animation()
















