import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { FormsModule } from '@angular/forms';


import { TodoService } from './todo.service';
import { Todo } from './todo';


@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./app.component.css']
})
export class EditComponent implements OnInit {

  @Input() todo: Todo;

  constructor(
    private todoservice: TodoService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.todoservice.getTodo(+params.get('id')))
      .subscribe(todo => this.todo = todo);
  }
  // ngOnInit(){
  // //  this.getTodos();
  // }
  goBack(): void {
    this.location.back();

  }
}
