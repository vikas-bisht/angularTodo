import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { constant } from './constant';
@Injectable()

export class TodoService {
  _url: string = constant.url;
  serviceData: any;
  constructor(private _http: Http) { }
  todos: Todo[] = [];
  todo: Todo;
  getTodos(): Observable<Todo[]> {

    if (this.serviceData && this.serviceData.length > 0) {
      return Observable.of(this.serviceData);
    } else {
      return this._http.get(this._url)
        .map((res) => {
          this.serviceData = res.json() || {};
          console.log(this.serviceData)
          return res.json();
        })
        .catch(this.handleError);
    }
  }
  getTodo(id: number): Observable<Todo> {
    return this.getTodos()
      .map(todos => todos.find(todo => todo.id == id));
  }
  handleError(error: any) {
    let errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
  }

  addTodo(todo) {
    this.serviceData.push(todo);
  }
}
