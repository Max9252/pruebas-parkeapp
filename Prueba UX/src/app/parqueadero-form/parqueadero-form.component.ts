import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-parqueadero-form',
  templateUrl: './parqueadero-form.component.html',
  styleUrls: ['./parqueadero-form.component.css']
})
export class ParqueaderoFormComponent {

  complexForm: FormGroup;
  dropdownList = [];
  selectedItems = [];
  pasoUno:boolean;
  pasoDos:boolean;
  pasoTres:boolean;
  pasoCuatro:boolean;
  transferencia:boolean;
  giro:boolean;

  constructor(fb: FormBuilder) {
  }

  ngOnInit() {
    
    this.pasoUno = true;
    this.pasoDos = false;
    this.pasoTres = false;
    this.pasoCuatro = false;
    this.transferencia = false;
    this.giro = false;

    this.dropdownList = [
      { "id": 18, "itemName": "Accesible para discapacitados" },
      { "id": 30, "itemName": "Cubierto" },
      { "id": 40, "itemName": "Cámaras de seguridad" },
      { "id": 60, "itemName": "Vigilado" },
      { "id": 70, "itemName": "Servicio de 24 horas" },
      { "id": 80, "itemName": "Valet Parking" }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Características",
      selectAllText: 'Seleccionar Todo',
      unSelectAllText: 'Borrar Todo',
      enableSearchFilter: false
    };


  }
  dropdownSettings = {};

  onItemSelect(item) {
    console.log("Seleccionado");
  }
  OnItemDeSelect(item) {
    console.log("Seleccionado");
  }

  onMetodoPagoChange(option) {
    if(option.value === '1'){
      this.transferencia = true;
      if(this.giro){
        this.giro = false;
      }
    }else{
      this.giro = true;
      if(this.transferencia){
        this.transferencia = false;
      }
    }
  }

  registrar(){
    console.log("Registrado");
  }


}
