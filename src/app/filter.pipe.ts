import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "sort"
})
export class FilterPipe implements PipeTransform {
  transform(array: Array<any>, args: string): Array<string> {
    {
      array.sort((firsttodo: any, secondtodo: any) => {
        if (args) {
          if (firsttodo.name < secondtodo.name) {
            return -1;
          } else if (firsttodo.name > secondtodo.name) {
            return 1;
          } else {
            return 0;
          }
        } else {
          if (firsttodo.name > secondtodo.name) {
            return -1;
          } else if (firsttodo.name < secondtodo.name) {
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
