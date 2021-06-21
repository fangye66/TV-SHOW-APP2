import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TVSHOWComponent } from './tv-show/tv-show.component';
import {HttpClientModule} from '@angular/common/http'
import { ShowService } from './show.service';
@NgModule({
  declarations: [
    AppComponent,
    TVSHOWComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
