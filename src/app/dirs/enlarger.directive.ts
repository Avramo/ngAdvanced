import { Directive, ElementRef, HostListener } from '@angular/core';
import { isNumber } from 'util';

@Directive({
  selector: '[appEnlarger]'
})
export class EnlargerDirective {

  constructor(el:ElementRef) {
    this.el = el.nativeElement;
   }

  private el:HTMLElement;

  @HostListener ('click') enlargeTxtOnClick(){
    // this.el.style.fontSize = '1.5em'
    let fontSize = this.el.style.fontSize;
    console.log('fontsize= ', fontSize);
    // if (fontSize) {
    //   let sizeNum = fontSize.replace('pt', '');
    //   let num:number = sizeNum. ;
    //   num += 0.5;
    //   console.log('fontsize changed= ', fontSize);
    //   this.el.style.fontSize = num + 'em';
    // }
    // else{
      this.el.style.fontSize = '14pt'
    }
  // }


}
