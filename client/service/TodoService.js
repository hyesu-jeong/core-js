class TodoService {
  static state = [];

  static initializeState(state) {
    this.state = state;
  }

  static AddTodoItem(id, value, checked) {
    this.state.push(id, value, checked);
    console.log(...this.state);
  }

  static DeleteTodoItem(id) {
    this.state = this.state.filter((t) => t.id !== id); // filter는 배열을 반환한다. 대상을 제외한 나머지를 찾을 때
    console.log(...this.state);
  }

  static CheckTodoItem(id) {
    const t = this.state.find((t) => t.id === id);
  }
}
