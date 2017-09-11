import { Component, Input, OnInit, OnChanges } from '@angular/core';
import _ from 'lodash';
import { Stats } from './stats';

import { Todo } from './../todo';

@Component({
  selector: 'stats' ,
  templateUrl: './stats.component.html'
})

export class StatsComponent implements OnInit, OnChanges{
  @Input('init') todos: Todo[]=[];
  stats: Stats;
  ngOnInit(){
    this.updateStats(this.todos);
  }

  ngOnChanges(changes){
    this.updateStats(changes.todos.currentValue);
  }
  updateStats(todos){
    let done = _.reduce(todos, (completed, todo: Todo)=>{
      if(todo.complete){
        completed++;
      }
      return completed;
    },0);
    let todo = _.reduce(todos, (left,todo: Todo)=>{
      if(!todo.complete){
        left++;
      }
      return left;
    },0)
      this.stats= new Stats(todo,done);
    }
}
