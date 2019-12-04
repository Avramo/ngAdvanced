import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'increase'
})
export class IncreasePipe implements PipeTransform {

  transform(value:number): any {
    if (value) {
    return ++value;
      
    }
    return ''
  }

}
