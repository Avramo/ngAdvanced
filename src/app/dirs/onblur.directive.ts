import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnblur]'
})
export class OnblurDirective {

  private el:HTMLElement;

  constructor(el:ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener ('blur') whenBlur(){
    alert("hey don't leave me!")
  }

}
