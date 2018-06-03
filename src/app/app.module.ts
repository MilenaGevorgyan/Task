import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgmCoreModule } from '@agm/core';
import { KeyupComponent } from './keyup/keyup.component';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap
      //apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw',
      libraries:["places"]
    })
  ],
  declarations: [ AppComponent, HelloComponent, KeyupComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
