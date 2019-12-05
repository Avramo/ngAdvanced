import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLoggerValue]'
})
export class LoggerValueDirective {

  private el:HTMLInputElement;
  constructor(el:ElementRef) {
    this.el = el.nativeElement;
  }
  
  @HostListener ('input') inputHappened(){
    console.log('LoggerValueDirective input event value= ', this.el.value);
    
  }
  

}