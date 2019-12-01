import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  people = [
    {name: 'avi' , birthYear: 1980},
    {name: 'dovi' , birthYear: 1985},
    {name: 'chaim' , birthYear: 1989},
    {name: 'dani' , birthYear: 1995},
    {name: 'yakov' , birthYear: 1999},
    {name: 'zelig' , birthYear: 2005},
    {name: 'getzel' , birthYear: 1984},
    {name: 'berish' , birthYear: 1997},
    {name: 'zalmen' , birthYear: 2012},
    {name: 'feivel' , birthYear: 1992},
    {name: 'beri' , birthYear: 1988},
  ]

  fnAgeByFn(yearofbirth:number):number{
    let thisYear:number = new Date().getFullYear();
    return thisYear - yearofbirth;
  }

}
