import { Component, OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';

import { TodoService } from './todo.service'
import { Todos } from './mock-todo';
import { Todo } from './todo';
import { AddComponent } from './add.component';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  //providers: [ TodoService ]
})

export class ListComponent implements OnInit{
  todos: Todo[];
  selectedTodo: Todo;
  constructor(private todoservice:TodoService, private router:Router){}
  edit(todo: Todo): void{
    this.selectedTodo = todo;
    this.router.navigate(['/edit',this.selectedTodo.id]);
  }
  getTodos():void{
    this.todoservice.getTodos().then(todos=>this.todos=todos);
  }

  add():void{
  //  console.log(todo);
    this.router.navigate(['/add']);
  }


  ngOnInit():void{
    this.getTodos();
  }
}
