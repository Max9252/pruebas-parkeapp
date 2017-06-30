import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CollapseModule } from 'ngx-bootstrap';
import { routing, appRoutingProviders } from './app.routing';
import {DropdownModule} from "ng2-dropdown";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { BsDropdownModule } from 'ngx-bootstrap';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { AgePipe } from './age.pipe';

import { AppComponent } from './app.component';
import { DatosUsuarioComponent } from './datos-usuario/datos-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { UsuarioService }  from './usuarios/usuario.service';



@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    DatosUsuarioComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule,
    routing,
    AngularMultiSelectModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    appRoutingProviders,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
