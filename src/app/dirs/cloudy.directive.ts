import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCloudy]'
})
export class CloudyDirective {

  constructor(el:ElementRef) {
    this.el = el.nativeElement;
  }

  private el:HTMLElement;

  @HostListener ('mouseenter') blurAndShadow(){
    this.el.style.textShadow = "25px 25px 1.8px green";
    this.el.style.opacity = '.5';
  }
  @HostListener ('mouseleave') clearblurAndShadow(){
    this.el.style.textShadow = "0 0 0 black";
    this.el.style.opacity = '1';
  }
}
