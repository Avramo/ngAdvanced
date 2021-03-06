import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sayHello'
})
export class SayHelloPipe implements PipeTransform {

  transform(value:string ): string {
    if (value){
      return `Hello ${value}`;
    }
    return null;
  }

}
