




/* 
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


header.addEventListener('mouseleave', () => depthList.forEach(h)) */


/* --------------------------------------------------- */
/*                GSAP 으로 만들어 보기                */
/* --------------------------------------------------- */

/* global gsap */

const aList = document.querySelectorAll('nav a');

aList.forEach((a) => {

  const target = a.lastElementChild;

  const tl = gsap.timeline({paused:true})
    .to(target, {height:100,ease: "power3.inOut"})

  
  a.addEventListener('mouseenter', () => tl.play())
  a.addEventListener('mouseleave', () => tl.reverse())
  
})