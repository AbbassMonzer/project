import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './pages/person/person.component';

import { AddressComponent } from './pages/address/address.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { KendoComponent } from './components/kendo/kendo.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
