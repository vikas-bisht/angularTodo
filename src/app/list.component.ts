import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import _ from 'lodash';

import { TodoService } from './todo.service'
import { Todos } from './mock-todo';
import { Todo } from './todo';
import { AddComponent } from './add.component';
import { StatsComponent } from './stats/stats.component';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  // directives: [ StatsComponent ]
})

export class ListComponent implements OnInit, OnChanges{
  todos: Todo[];
//  private log: string='';
  selectedTodo: Todo;
  constructor(private todoservice:TodoService, private router:Router){}

//  private logCheckbox(element:HTMLInputElement): void{
//    this.log += `Checkbox ${element.value} was ${element.checked?'':'un'}checked\n`
//  }

  edit(todo: Todo): void{
    this.selectedTodo = todo;
    this.router.navigate(['/edit',this.selectedTodo.id]);
  }
  getTodos():void{
    this.todoservice.getTodos().then(todos=>this.todos=todos);
  }

  add():void{
    this.router.navigate(['/add']);
  }
  ngOnInit():void{
    this.getTodos();
  }
  markTodo($event:any,mtodo:Todo){
    this.todos = _.map(this.todos,(todo) => {
      if(todo.id === mtodo.id){
          todo.complete = !todo.complete;
        //  console.log(todo);
        }
      return todo;
    });
  }
  ngOnChanges(changes){
  }
}
