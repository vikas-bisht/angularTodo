import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
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
})

export class ListComponent implements OnInit, OnChanges{
  todos: Todo[];
  showTodos: Todo[];
  public filterType : string;
  public filterName: string='';
  selectedFilter: string = '';
  selectedTodo: Todo;
  constructor(private todoservice:TodoService, private router:Router){}

  edit(todo: Todo): void{
    this.selectedTodo = todo;
    this.router.navigate(['/edit',this.selectedTodo.id]);
  }
  getTodos():void{
    this.todoservice.getTodos().then(todos=>{
      this.todos=todos;
      this.showTodos = todos;
    });
  }

  add():void{
    this.router.navigate(['/add']);
  }
  ngOnInit():void{
    this.getTodos();
  }
  markTodo($event:any,mtodo:Todo){
    this.showTodos = _.map(this.todos,(todo) => {
      if(todo.id === mtodo.id){
          todo.complete = !todo.complete;
        }
      return todo;
    });
    this.todos = this.showTodos;
  }
  ngOnChanges(changes){
  }
  updateFilter(filters){
      this.filterType = filters;
      if(filters == 'done') {
        this.showTodos = _.filter(this.todos, {'complete': true});
      }
      else if(filters=='todo'){
        this.showTodos = _.filter(this.todos, {'complete': false});
      }
      else if(filters=='all'){
        this.showTodos = _.filter(this.todos);
      }
  }
  showfilter(todo:Todo){
     if(this.filterType === 'all'){

        return false;
     }else if(this.filterType === 'done'){

         if(todo.complete){
            return true;
         }
     }else if(this.filterType === 'todo'){
         if(!todo.complete){
             return true;
         }
     }
     return false;
   }
}
