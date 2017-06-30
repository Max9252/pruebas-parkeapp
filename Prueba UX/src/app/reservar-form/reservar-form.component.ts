import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-reservar-form',
  templateUrl: './reservar-form.component.html',
  styleUrls: ['./reservar-form.component.css']
})
export class ReservarFormComponent implements OnInit {
  pasoUno:boolean;
  pasoDos:boolean;
  pasoTres:boolean;
  constructor() { }

  private myDatePickerOptions: IMyDpOptions = {
      // other options...
      dateFormat: 'dd/mm/yyyy',
  };

  // Initialized to specific date (09.10.2018).
  private model: Object = { date: { year: 2017, month: 6, day: 30 } };

  ngOnInit() {
      this.pasoUno = true;
      this.pasoDos = false;
      this.pasoTres = false;
  }

}
