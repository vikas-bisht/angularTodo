import { Component, Input, OnInit, OnChanges } from '@angular/core';
import _ from 'lodash';
import { Stats } from './stats';

import { Todo } from './../todo';

@Component({
  selector: 'stats' ,
  templateUrl: './stats.component.html'
})

export class StatsComponent implements OnInit, OnChanges{
  @Input() todos: Todo[]=[];
  stats={} ;
  ngOnInit(){
    this.updateStats(this.todos);
  }

  ngOnChanges(changes){
    this.updateStats(changes.todos.currentValue);
  }
  updateStats(todos){
    let  done = 0;
    let left = 0;
    _.forEach(todos,(todo:Todo,key)=>{
      if(todo.complete){
        done++;
      }
      else{
        left++;
      }
    })
    this.stats['done']=done;
    this.stats['todo']=left;
    }
}
