import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcAgePipe'
})
export class CalcAgePipePipe implements PipeTransform {

  transform(birthYear:number): number {
    let thisYear:number = new Date().getFullYear();
    return thisYear - birthYear;
  }

}
