class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // 커스텀 태그가 생겼을 때. 딱 1회 호출함.
    console.log('탄생함');
  }

  disconnectedCallback() {
    // 커스텀 태그가 없어졌을 때
    console.log('죽음');
  }
}

customElements.define('c-element', MyElement); // define 정의를 해줘야 사용 가능.

const elem = document.createElement('c-element');

const app = document.getElementById('app');

app.appendChild(elem);
