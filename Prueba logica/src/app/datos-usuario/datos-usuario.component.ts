import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Usuario, UsuarioService }  from '../usuarios/usuario.service';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: UsuarioService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getUsuario(+params['id']))
      .subscribe((usuario: Usuario) => this.usuario = usuario);
  }

  cargarUsuarios() {
  let idUsuario = this.usuario ? this.usuario.id : null;
  this.router.navigate(['/usuarios', { id: idUsuario, foo: 'foo' }]);
}

}
