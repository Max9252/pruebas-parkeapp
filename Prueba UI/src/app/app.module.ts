import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdButtonModule, MdCheckboxModule, MdCardModule, MdRadioModule, MdIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FinishComponent } from './finish/finish.component';

import { OnBoardingPageComponent } from './on-boarding-page/on-boarding-page.component';


import { routing, appRoutingProviders } from './app.routing';


import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    OnBoardingPageComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    routing,
    MdRadioModule,
    appRoutingProviders,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
