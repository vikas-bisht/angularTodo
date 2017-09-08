import { Injectable } from  '@angular/core';
import { Todo } from './todo';
import { Todos } from './mock-todo';

@Injectable()

export class TodoService{
  todos:Todo[]= Todos;
  getTodos(): Promise<Todo[]>{
    return Promise.resolve(Todos);
  }
  getTodo(id: number): Promise<Todo>{
    return this.getTodos()
    .then(todo => todo.find(todo=> todo.id===id));
  }
  addTodo(value:Todo){
    this.todos.push(value);
  }
}
