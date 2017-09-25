import { Component, OnInit, Input, OnChanges, Output, OnDestroy, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import _ from 'lodash';

import { TodoService } from './todo.service'
import { Todo } from './todo';
import { AddComponent } from './add.component';
import { StatsComponent } from './stats/stats.component';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./app.component.css']
})

export class ListComponent implements OnInit, OnChanges {
  todos: Todo[] = [];
  showTodos: Todo[] = [];
  filterType: string;
  filterName: string = '';
  selectedFilter: string = '';
  selectedTodo: Todo;
  constructor(private _todoservice: TodoService, private _router: Router) { }

  edit(todo: Todo): void {
    this.selectedTodo = todo;
    this._router.navigate(['/edit', this.selectedTodo.id]);
  }


  add(): void {
    this._router.navigate(['/add']);
  }
  ngOnInit() {
    this._todoservice.getTodos()
      .subscribe((todos) => {
        this.todos = todos
        this.showTodos = todos;
      }, (error) => { });
  }
  markTodo($event: any, mtodo: Todo) {
    this.showTodos = _.map(this.todos, (todo) => {
      if (todo.id === mtodo.id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    this.todos = this.showTodos;
  }
  ngOnChanges(changes) {
  }
  updateFilter(filters) {
    this.filterType = filters;
    if (filters == 'done') {
      this.showTodos = _.filter(this.todos, { 'complete': true });
    }
    else if (filters == 'todo') {
      this.showTodos = _.filter(this.todos, { 'complete': false });
    }
    else if (filters == 'all') {
      this.showTodos = _.filter(this.todos);
    }
  }
  showfilter(todo: Todo) {
    if (this.filterType === 'all') {

      return false;
    } else if (this.filterType === 'done') {

      if (todo.complete) {
        return true;
      }
    } else if (this.filterType === 'todo') {
      if (!todo.complete) {
        return true;
      }
    }
    return false;
  }
}
