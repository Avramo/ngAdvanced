import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'u'
})
export class UPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
