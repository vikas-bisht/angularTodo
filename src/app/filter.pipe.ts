import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';
import { ListComponent } from './list.component';

@Pipe({
  name: "sort"
})
export class FilterPipe implements PipeTransform {
  transform(array: Array<any>, args: string): Array<string> {
    {
      array.sort((a: any, b: any) => {
        if (args) {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        } else {
          if (a.name > b.name) {
            return -1;
          } else if (a.name < b.name) {
            return 1;
          } else {
            return 0;
          }
        }
      });
      return array;
    }
  }
}
