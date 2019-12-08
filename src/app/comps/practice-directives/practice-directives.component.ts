import { Component, OnInit, Input } from '@angular/core';
import { SelectvalueService } from 'src/app/services/selectvalue.service';

@Component({
  selector: 'app-practice-directives',
  templateUrl: './practice-directives.component.html',
  styleUrls: ['./practice-directives.component.css']
})
export class PracticeDirectivesComponent implements OnInit {

  constructor(public selectValSVC:SelectvalueService) { }
@Input() myInput:string; 
  ngOnInit() {
  }

}
