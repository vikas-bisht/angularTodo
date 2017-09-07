import { Injectable } from  '@angular/core';
import { Todo } from './todo';
import { Todos } from './mock-todo';

@Injectable()

export class TodoService{
  todos:Todo[]= Todos;
  getTodos(): Promise<Todo[]>{
    return Promise.resolve(Todos);
  }


}
