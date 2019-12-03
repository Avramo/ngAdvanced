import { Pipe, PipeTransform, ElementRef } from '@angular/core';
import { MatDatepickerInput, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDateFormats } from '@angular/material/core';

@Pipe({
  name: 'toIsraeliDate'
})
export class ToIsraeliDatePipe implements PipeTransform {

  transform(value:Date): any {
    let month = value.getMonth();
    let day = value.getDate();
    let year = value.getFullYear();
    return `${month}/${day}/${year}`;
  }

}
