/* global clearContents */


import {
  attr,
  getNode,
  clearContents,
  insertLast,
} from "./lib/index.js";


function phase1() {
  // 1. input value 값 가져오기
  // - iput 선택하기
  // - input 에게 input 이벤트를 걸어준다.
  // - input.value 값을 가져온다.

  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');
  const result = getNode('.result');
  const clear = getNode('#clear');

  function handleInput() {
    const firstValue = Number(first.value); // 명시적 형변환
    const secondValue = +second.value; // 암시적 형변환

    const total = firstValue + secondValue;

    console.log(total);

    // result.textContent = ''; // 기존의 값을 비워주는 코드
    clearContents(result); // 'lib/dom/clearContents.js'에 있는 clearContents 함수 활용하여 기존 값 비우기

    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();

    clearContents(first);
    clearContents(second);
    result.textContent = '-';
  }

  first.addEventListener('input', handleInput);
  second.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}

phase1();

function phase2() {
  const calculator = getNode('.calculator');
  const result = getNode('.result');
  const clear = getNode('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

  function handleInput() {
    const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}
