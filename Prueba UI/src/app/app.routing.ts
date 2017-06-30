// src/app.routes.ts
/* Import Routes Config */
import { Routes, RouterModule } from '@angular/router';
import { OnBoardingPageComponent } from './on-boarding-page/on-boarding-page.component';
import { FinishComponent } from './finish/finish.component';

// src/app.routes.ts
export const routes: Routes = [
  { path: '', redirectTo: 'slide-entrada', pathMatch: 'full' },
  { path: 'slide-entrada', component: OnBoardingPageComponent },
  { path: 'finish', component: FinishComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
