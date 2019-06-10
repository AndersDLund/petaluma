import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { JumbotronComponent } from './main/jumbotron/jumbotron.component';
import { WeatherComponent } from './main/jumbotron/weather/weather.component';
import { FeaturedEventComponent } from './main/featured-event/featured-event.component';
import { WineAndDineComponent } from './main/wine-and-dine/wine-and-dine.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JumbotronComponent,
    WeatherComponent,
    FeaturedEventComponent,
    WineAndDineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
