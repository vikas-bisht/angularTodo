import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';


import { TodoService } from './todo.service';
import { Todo } from './todo';
import { Todos } from './mock-todo';

@Component({
  selector: 'edit',
  template: `
    <div *ngIf="todo">
      <h2>{{todo.name}} details!</h2>
      <div>
        <label>id: </label>{{todo.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="todo.name" placeholder="name"/>
      </div>
      <div><button (click)="goBack()">Save</button>
      </div>
    </div>

  `
})
export class EditComponent implements OnInit{

  @Input() todo: Todo;
  constructor(
  private todoservice: TodoService,
  private route: ActivatedRoute,
  private location: Location
) {}

  ngOnInit():void {
    this.route.paramMap
      .switchMap((params: ParamMap)=>this.todoservice.getTodo(+params.get('id')))
      .subscribe(todo=> this.todo =todo);
  }
  goBack(): void {
    this.location.back();
  }
}
