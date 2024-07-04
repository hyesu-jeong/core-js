import { TodoItem } from '../TodoItem/TodoItem.js';

const TodoTemplate = document.createElement('template');
TodoTemplate.innerHTML = `
  <style>@import url('./components/TodoList/TodoList.css');</style>
  <div class="container kanit-semibold">
    <h1>To Do List <img src="../assets/checklist.png" alt="체크리스트" /></h1>
    <ul class="todo"></ul>
    <button type="button" class="add-item">+</button>
  </div>
`;

export class TodoList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(TodoTemplate.content.cloneNode(true));

    this.container = this.shadowRoot.querySelector('.container');
    this.todo = this.container.querySelector('.todo');
    this.addButton = this.container.querySelector('.add-item');
  }

  connectedCallback() {
    // event 생성
    this.addButton.addEventListener('click', () => this.addTodoItem());
  }

  addTodoItem() {
    const todoItem = new TodoItem(Date.now(), '', false); // 클래스는 생성자 함수이다.
    this.todo.appendChild(todoItem);
  }
}
