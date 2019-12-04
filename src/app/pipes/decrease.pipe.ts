import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decrease'
})
export class DecreasePipe implements PipeTransform {

  transform(value:number): any {
    if (value) {
      return --value;
    }
    return '';
  }

}
