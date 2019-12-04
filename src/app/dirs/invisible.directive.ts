import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInvisible]'
})
export class InvisibleDirective {


  private el:HTMLElement;

  constructor(el:ElementRef) {
    this.el = el.nativeElement;
    console.log('HighlightDirective constructor');
   }
   
   @HostListener('mouseover' ) onMouseOver(){
     this.el.style.visibility = 'hidden';
   }

   @HostListener('mouseleave' ) onMouseOut(){
    this.el.style.visibility = 'visible';
   } 

}