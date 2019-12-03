import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-pipes',
  templateUrl: './practice-pipes.component.html',
  styleUrls: ['./practice-pipes.component.css']
})
export class PracticePipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  numb:number = 5;
  mult:number = 1;

}
