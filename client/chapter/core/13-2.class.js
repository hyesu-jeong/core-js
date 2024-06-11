/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 1. 객체의 상속
// 2. 생성자 함수의 상속
//3. 생성자 함수 모던 방식 class


class Animal { 

  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.tail = true;
    this.stomach = [];
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }

}

const a = new Animal('포동이');



// 아래 코드 직역: "생성자 함수 만들래. Tiger 상속해줘. Animal로 부터"
class Tiger extends Animal {
  // extends: Tiger클래스를 만들건데 Animal을 확장시켜서 만들겠다. (상속 받을거다.)

  constructor(name, value) {
    super(name); // name은 Tiger가 아닌 Animal이 가지고 있으므로, super 를 통해 부모 constructor를 가져옴.
    this.options = value;
    this.pattern = '호랑이 무늬';
  }

  static bark(sound) {
    // 원래 인스턴스 메서드인데, 앞에 'static'을 입력하면 스태틱 메서드가 된다.
    return `${this.name}가 ${sound}라고 짖는다.`;
  }
  /* ------------- 밖에서 접근 안되도록 막는 방법 ------------ */
  // encapsulation : 밖에서 접근이 안되도록 막는
  // private : 밖에서 접근이 안되도록 막는 (https://ko.javascript.info/private-protected-properties-methods)
  // iife 패턴 : 즉시실행

  hunt(target) {
    return `${target}에게 조용히 접근한다.`;
  }
}

const 호랑이 = new Tiger('호돌이');
// bark (스태틱 메서드) 를 실행하려면 -> 호랑이.constructor.bark('어흥!')












// Model   (데이터)
// Veiw    (랜더링)
// Control (이벤트)


/* ----------------- TODO 리스트 ----------------- */

class Todo {
  target = null;
  registerButton = null;
  list = null;

  constructor({ input, button, renderPlace }) {
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace);
    this.todoListArray = [];
    this.data;

    this.registerEvent();

    this.target.addEventListener('input', () => {
      this.data = this.currentInputTodoData;
    });
  }

  get currentInputTodoData() {
    return this.target.value;
  }

  set currentInputTodoData(value) {
    this.target.value = value;
  }

  get todoList() {
    return this.todoListArray;
  }

  set todoList(value) {
    this.todoList.push(value);
  }

  #createList() {
    let template = `
      <li>${this.data}</li>
    `;
    return template;
  }

  render() {
    this.list.insertAdjacentHTML('beforeend', this.#createList());
    this.target.value = '';
  }

  addTodoData() {
    this.todoList = this.data;
  }

  registerEvent() {
    this.registerButton.addEventListener('click', () => {
      this.addTodoData();
      this.render();
    });
  }
}

const button = new Todo({
  input: '#todo',
  button: '.register',
  renderPlace: '.todoList',
});

const button2 = new Todo({
  input: '#todo2',
  button: '.register2',
  renderPlace: '.todoList2',
});