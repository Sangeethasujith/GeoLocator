import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeocodeComponent } from './geocode/geocode.component';
import { ReverseGeocodeComponent } from './reverse-geocode/reverse-geocode.component';
import { CalculateDistanceComponent } from './calculate-distance/calculate-distance.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GeocodeComponent,
    ReverseGeocodeComponent,
    CalculateDistanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
