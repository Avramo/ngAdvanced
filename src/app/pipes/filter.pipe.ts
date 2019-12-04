import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr:string[], term:string ): string[] {
    let newArr = arr.filter(check => check.includes(term) )

    return newArr;
  }

}
