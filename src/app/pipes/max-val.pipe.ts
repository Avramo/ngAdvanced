import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxVal'
})
export class MaxValPipe implements PipeTransform {

  transform(numArr:number[]): any {
   let maxnumber =  Math.max(...numArr);
   console.log('MaxValPipe numArr=',numArr,' maxnumber',maxnumber);
   
    return maxnumber;
  }
}
