import { Directive, ElementRef, AfterContentChecked } from '@angular/core';

@Directive({
  selector: '[appLogaftercontcheck]'
})
export class LogaftercontcheckDirective implements AfterContentChecked{
////////////////   NOT WORKING   !!!!!! 
  
  elmnt:HTMLElement;
  
  constructor(el:ElementRef) {
    this.elmnt = el.nativeElement;
  }

ngAfterContentChecked(): void {
  console.log('LogaftercontcheckDirective ', this.elmnt.textContent);
}

}
