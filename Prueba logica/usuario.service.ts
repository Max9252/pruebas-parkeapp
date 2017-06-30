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
  new Usuario ( 1, "Glendora", 25, "glenadora@gmail.com", "Microsoft", 3008511651 ),
  new Usuario ( 2, "Lynda", 80, "lynda@gmail.com", "Nestle", 3008511652 ),
  new Usuario ( 3, "Manuel", 15, "Manuel@gmail.com", "Intel", 3008511653 ),
  new Usuario ( 4, "Janey", 33, "Janey@gmail.com", "Une", 3008511654 ),
  new Usuario ( 5, "Zonia", 42, "Zonia@gmail.com", "Claro", 3008511655 ),
  new Usuario ( 6, "Giselle", 19, "Giselle@gmail.com", "Renault", 3008511656 ),
  new Usuario ( 7, "Euna", 16, "Euna@gmail.com", "Samsung", 3008511657 ),
  new Usuario ( 8, "Antwan", 56, "Antwan@gmail.com", "Apple", 3008511658 ),
  new Usuario ( 9, "Avelina", 46, "Avelina@gmail.com", "Google", 3008511659 ),
  new Usuario ( 10, "Valarie", 37, "Valarie@gmail.com", "Lenovo", 30085116510 ),
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
