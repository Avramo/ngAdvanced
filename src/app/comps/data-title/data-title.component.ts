import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-title',
  templateUrl: './data-title.component.html',
  styleUrls: ['./data-title.component.css']
})
export class DataTitleComponent implements OnInit {

  constructor(
    public activatedRouter:ActivatedRoute,
    public router: Router
  ) { }

  titleFromRoute:string;

  ngOnInit() {
    this .activatedRouter.data.subscribe(data => {
      this.titleFromRoute = data.title
    })
  }

}
