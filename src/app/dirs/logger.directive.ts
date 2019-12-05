import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogger]'
})
export class LoggerDirective {

  private el:HTMLElement;

  constructor(el:ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener ('click') logOnClick(){
    console.log('LoggerDirective element clicked=', this.el);
    
  }

}
