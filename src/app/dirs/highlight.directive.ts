import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight')  highlightColor:string;

  private el:HTMLElement;

  constructor(el:ElementRef) {
    this.el = el.nativeElement;///// what does this mean???
    console.log('HighlightDirective constructor');
    
   }

   @HostListener('mouseenter') onMouseEnter(){
     this.highlight(this.highlightColor || 'cyan');
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

   private highlight(color:string){
     this.el.style.backgroundColor = color;
     if (!color) {
      this.el.style.backgroundColor = 'lightgrey';
    }
   }
}
