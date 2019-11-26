import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-app-user',
  templateUrl: './json-app-user.component.html',
  styleUrls: ['./json-app-user.component.css']
})
export class JsonAppUserComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute, public http:HttpClient) { }
  
  private api = 'https://jsonplaceholder.typicode.com/users/';
  user:any;

  ngOnInit() {
    this.activatedRoute.params.subscribe(parmz =>{
      let userid = parmz.id;
      console.log('JsonAppUserComponent ActivatedRoute parmz', parmz);

      this.http.get(this.api + userid)
        .subscribe(usr => this.user = usr)
      
    })

  }

}
