import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  transform(value: string): string {
    let firstLetter = value.charAt(0).toUpperCase();
    value = value.replace(value.charAt(0),firstLetter)
    return value;
  }

}
