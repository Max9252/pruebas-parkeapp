// src/app.routes.ts
/* Import Routes Config */
import { Routes, RouterModule } from '@angular/router';
import { ReservarFormComponent } from './reservar-form/reservar-form.component';
import { ParqueaderoFormComponent } from './parqueadero-form/parqueadero-form.component';
import { PrincipalComponent } from './principal/principal.component';

// src/app.routes.ts
export const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'registro-parqueadero', component: ParqueaderoFormComponent },
  { path: 'reserva-parqueadero', component: ReservarFormComponent },
  { path: 'principal', component: PrincipalComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
