import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as _ from 'lodash';
import { Location } from '@angular/common';


import { TodoService } from './todo.service'
import { Todo } from './todo';


@Component({
  selector: 'add',
  templateUrl: './add.component.html'
})

export class AddComponent {
  constructor(private todoservice: TodoService, private location: Location) { }
  todo: Todo[] = [];
  add(todo): void {
    todo.id = _.random(0, 500);
    this.todoservice.addTodo(todo);
    this.location.back();
  }
}
