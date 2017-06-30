import { Injectable } from '@angular/core';

export class Usuario {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public email: string,
    public company: string,
    public phoneNumber: number
  ) {}
}

let  USUARIOS = [
  new Usuario ( 1, "Glendora", 25, null, null, null ),
  new Usuario ( 2, "Lynda", 80, null, null, null ),
  new Usuario ( 3, "Manuel", 15, null, null, null ),
  new Usuario ( 4, "Janey", 33, null, null, null ),
  new Usuario ( 5, "Zonia", 42, null, null, null ),
  new Usuario ( 6, "Giselle", 19, null, null, null ),
  new Usuario ( 7, "Euna", 16, null, null, null ),
  new Usuario ( 8, "Antwan", 56, null, null, null ),
  new Usuario ( 9, "Avelina", 46, null, null, null ),
  new Usuario ( 10, "Valarie", 37, null, null, null ),
];

let usuariosPromise = Promise.resolve(USUARIOS);

@Injectable()
export class UsuarioService {
  getUsuarios() { return usuariosPromise; }

  getUsuario(id: number | string) {
    return usuariosPromise
      .then(usuarios => usuarios.find(usuario => usuario.id == +id));
  }
}
