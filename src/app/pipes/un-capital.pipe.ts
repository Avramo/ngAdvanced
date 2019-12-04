import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unCapital'
})
export class UnCapitalPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(value.charAt(0), value.charAt(0).toLowerCase() ) ;
  }

}
