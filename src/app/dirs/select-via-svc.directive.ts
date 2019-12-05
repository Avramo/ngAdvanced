import { Directive, Input, HostListener, ElementRef, AfterContentChecked } from '@angular/core';
import { SelectvalueService } from '../services/selectvalue.service';

@Directive({
  selector: '[appSelectViaSVC]'
})
export class SelectViaSVCDirective implements AfterContentChecked{
  ngAfterContentChecked(): void {
    throw new Error("Method not implemented.");
  }

  private el:HTMLElement;
  select:HTMLElement;

  constructor(public selectValSVC:SelectvalueService, el:ElementRef) {
    this.el = el.nativeElement;
    this.select = this.el.querySelector('select');
  }

  @HostListener('change') selectChanged(){
    console.log('SelectViaSVCDirective select changed!!!', this.select);
    
    
    // this.selectValSVC.selectedInSelectValueSVC = select.value;
    // this.el.querySelectorAll('span')[2].innerHTML = select.value;
    // console.log('selected value= ', select.value);
    

  }
  
}
