import { Directive, Input, HostListener, ElementRef, AfterContentChecked } from '@angular/core';
import { SelectvalueService } from '../services/selectvalue.service';

@Directive({
  selector: '[appSelectViaSVC]'
})
export class SelectViaSVCDirective implements AfterContentChecked{
  ngAfterContentChecked(): void {
    console.log('SelectViaSVCDirective  ngAfterContentChecked');
  }

  private elmnt:HTMLElement;
  private selectEL:HTMLSelectElement;
  
  constructor(public selectValSVC:SelectvalueService, el:ElementRef) {
    this.elmnt = el.nativeElement;
    

  }

  @HostListener('change', ['$event']) selectChanged(event){
      console.log('SelectViaSVCDirective select changed!!!', event);
      /// set value thru comp thru svc //////
      let select:string = event.srcElement.value;
      this.selectValSVC.selectedInSelectValueSVC = select;

      ///// get and set value through directive NOT using SVC at ALL ////
      this.selectEL = this.elmnt.querySelector('select');
      this.elmnt.querySelectorAll('span')[4].innerHTML = this.selectEL.value.bold();
      console.log('SelectViaSVCDirective selected value= ', this.selectEL.value);
      

    }
}
 
