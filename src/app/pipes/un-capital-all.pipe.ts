import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unCapitalAll'
})
export class UnCapitalAllPipe implements PipeTransform {

  transform(value:string): any {
    return value.toLowerCase();
  }

}
