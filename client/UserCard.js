class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = /* html */ `
    <button type="button">btn</button>
    `;

    this.button = this.shadowRoot.querySelector('button');
  }

  connectedCallback() {
    // this.button.addEventListener('click', this.clickMe.bind(this));
    this.button.addEventListener('click', () => this.clickMe());
  }

  clickMe() {
    console.log(this);
  }
}

customElements.define('user-card', UserCard);

/* ------------------ bind 설명 ----------------- */

// function sum(){
//   console.log(this);
// }

// sum() // undefined
// sum.call({}) // {} => 실행
// sum.apply({}) // {} => 실행
// const n = sum.bind({}) // {} => 실행 x

// n()
