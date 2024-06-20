

/* const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');

aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {
    const target = a.lastElementChild;

    // 모든 depth 높이를 0
    depthList.forEach((depth) => {
      depth.style.height = '0';
    });

    // 마우스가 올라간 a의 depth 높이를 100px
    target.style.height = '100px';
  });
}) */


const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = t => t.style.height = 0;

aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {
    const target = a.lastElementChild;

    // 내가 선택한 depth를 제외한 항목 0

    // 모든 depth 높이를 0
    depthList.forEach(h);

    target.style.height = '100px';
  });
});


header.addEventListener('mouseleave', () => depthList.forEach(h))