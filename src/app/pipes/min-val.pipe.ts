import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minVal'
})
export class MinValPipe implements PipeTransform {

  transform(numArr:number[]): any {
    let minnumber =  Math.min(...numArr);
    console.log('MinValPipe numArr=',numArr,' minnumber',minnumber);
    
     return minnumber;
   }

}
