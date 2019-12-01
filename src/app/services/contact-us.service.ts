import { Injectable } from '@angular/core';
import { ContactUs } from '../models/contact-us';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor() { }

  contactList:ContactUs[] = [];

}
