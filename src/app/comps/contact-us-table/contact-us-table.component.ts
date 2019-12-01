import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contact-us-table',
  templateUrl: './contact-us-table.component.html',
  styleUrls: ['./contact-us-table.component.css']
})
export class ContactUsTableComponent implements OnInit {

  constructor(public contactSVC:ContactUsService) { }

  ngOnInit() {
  }

}
