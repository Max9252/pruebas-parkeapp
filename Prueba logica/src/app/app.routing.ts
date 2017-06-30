// src/app.routes.ts
/* Import Routes Config */
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DatosUsuarioComponent } from './datos-usuario/datos-usuario.component';

// src/app.routes.ts
export const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'datos-usuario/:id', component: DatosUsuarioComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
