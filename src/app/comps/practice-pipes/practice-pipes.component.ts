import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-practice-pipes',
  templateUrl: './practice-pipes.component.html',
  styleUrls: ['./practice-pipes.component.css']
})
export class PracticePipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  firstUpper:string = 'hello';
  numb:number = 5;
  mult:number = 1;
  lwrTxt:string = "try me";
  now:Date = new Date();
  usDate:Date = this.now;
  smallText:string = 'try me';
  bigText:string = 'TRY ME';
  name:string = 'there';
  number:number = 0 ;
  minusNum:number = 1 ;
  _15NamesArr:string[] = [
    'Abish',' Berish',' Chatzkel',' Berel',' Gimpel',' Zusha',' Zanvil',' Zelig',' Zorach',
    ' Getzel',' Yukel',' Yankel',' Yekel',' Shmerel',' Laibel',
  ];
  searchTerm:string = 'search here';
  _10numbersArr:number[] = [2, 3, 55, 84, 66, 123, 46, 85, 22, 33]

}
