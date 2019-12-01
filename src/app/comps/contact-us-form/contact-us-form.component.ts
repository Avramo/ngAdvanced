import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { ContactUs } from 'src/app/models/contact-us';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {

  constructor(public contactUsSVC: ContactUsService) { }

  ngOnInit() {
  }
  message:string = 'fill out the form please'

  contactUsForm = new FormGroup({
    subject : new FormControl(''),
    content : new FormControl(''),
    name : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    address : new FormGroup({
      houseNumber: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
      zip: new FormControl(''),
    }),
    credit : new FormControl(''),
    gender : new FormControl(''),
    hasidut : new FormControl(''),
    age : new FormControl(''),
    whatsapp : new FormControl(''),
  })

  contactUsForm_onSubmit(){
    let contactus:ContactUs = this.contactUsForm.value
    if (contactus.whatsapp) {
      this.message = 'We\'ll contact you via whatsapp'
    } else {
      this.message = 'We\'ll call you '
    }
    console.log('contactus value', contactus);

    this.contactUsSVC.contactList.push(contactus)
  }

}