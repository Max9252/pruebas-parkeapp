import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { Ng2FileInputModule } from 'ng2-file-input'; // <-- import the module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { MyDatePickerModule } from 'mydatepicker';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';


import { AppComponent } from './app.component';
import { ReservarFormComponent } from './reservar-form/reservar-form.component';
import { ParqueaderoFormComponent } from './parqueadero-form/parqueadero-form.component';
import { PrincipalComponent } from './principal/principal.component';
import {GooglePlaceModule} from 'ng2-google-place-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    ReservarFormComponent,
    ParqueaderoFormComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Including the ReactiveFormsModule in our application
    ReactiveFormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(), // Add Bootstrap module here.
    Ng2FileInputModule.forRoot(
      {
        dropText: "",
        browseText: "Elegir",
        removeText: "Retirar",
        invalidFileText: "El archivo seleccionado es invalido",
        invalidFileTimeout: 8000,
        removable: true,
        multiple: false,
        showPreviews: true,
        extensions: ['jpg', 'png'],
      }
    ),
    AngularMultiSelectModule,
    MyDatePickerModule,
    GooglePlaceModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
