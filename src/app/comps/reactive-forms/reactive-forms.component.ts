import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  name = new FormControl('');
  phone = new FormControl('');

  newLeads:{}[] = [];

  constructor() { }

  ngOnInit() {
  }

  addLead(){
    this.newLeads.push({
      name:this.name.value,
      phone:this.phone.value,
    })
  }
// ///////////////////

sheep = new FormControl('');
setDefaultSheepName(){
  this.sheep.setValue('maaahhh')
}

}
