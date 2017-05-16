import {Todo} from './todo';

export class Index {
  constructor() {
    this.heading = 'Todos';
    this.todos = [];
    this.todoDescription = '';
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription));
      this.lastAction = `Added new item: ${this.todoDescription}`;
      this.todoDescription = '';
    }
  }

  todoChecked(todo) {
    this.lastAction = `Marked ${todo.description} as ${todo.done ? 'done' : 'incomplete'}.`;
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.lastAction = `Removed item: ${todo.description}`;

      this.todos.splice(index, 1);
    }
  }
}
