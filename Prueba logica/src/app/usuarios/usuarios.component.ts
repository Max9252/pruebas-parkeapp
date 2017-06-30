import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { Usuario, UsuarioService }  from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  usuarios: Observable<Usuario[]>;
  filtro: number = 1000;
  private selectedId: number;
  dropdownList = [];
  selectedItems = [];

  selectedRow: Number;
  setClickedRow: Function;

  constructor(
    private service: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) {
  };

  ngOnInit() {
    this.dropdownList = [
      { "id": 18, "itemName": "Menores de 18" },
      { "id": 30, "itemName": "Menores de 30" },
      { "id": 40, "itemName": "Menores de 40" },
      { "id": 60, "itemName": "Menores de 60" },
      { "id": 70, "itemName": "Menores de 70" },
      { "id": 80, "itemName": "Menores de 80" }
    ];
    this.dropdownSettings = {
      singleSelection: true,
      text: "Filtro por edad",
      selectAllText: 'Seleccionar Todo',
      unSelectAllText: 'Borrar Todo',
      enableSearchFilter: false
    };

    this.usuarios = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getUsuarios();
      });
  }
  isSelected(usuario: Usuario) { return usuario.id === this.selectedId; }


  dropdownSettings = {};

  onItemSelect(item) {
    this.filtro = item.id;
  }
  OnItemDeSelect(item) {
    this.filtro = 1000;
  }

  onSelect(usuario: Usuario) {
    this.router.navigate(['/datos-usuario', usuario.id]);
  }

}
