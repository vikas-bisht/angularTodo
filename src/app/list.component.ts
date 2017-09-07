import { Component, OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';

import { TodoService } from './todo.service'
import { Todos } from './mock-todo';
import { Todo } from './todo';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  //providers: [ TodoService ]
})

export class ListComponent implements OnInit{
  todos: Todo[];
  selectedTodo: Todo;
  constructor(private todoservice:TodoService, private router:Router){}

  getTodos():void{
    this.todoservice.getTodos().then(todos=>this.todos=todos);
  }

  


  ngOnInit():void{
    this.getTodos();
  }
}
