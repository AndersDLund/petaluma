import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ParallaxModule } from 'ngx-parallax';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { JumbotronComponent } from './main/jumbotron/jumbotron.component';
import { WeatherComponent } from './main/jumbotron/weather/weather.component';
import { FeaturedEventComponent } from './main/featured-event/featured-event.component';
import { WineAndDineComponent } from './main/wine-and-dine/wine-and-dine.component';
import { ParallaxQuoteComponent } from './main/parallax-quote/parallax-quote.component';
import { ExploreComponent } from './main/explore/explore.component';
import { NewsComponent } from './main/news/news.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SocialComponent } from './main/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JumbotronComponent,
    WeatherComponent,
    FeaturedEventComponent,
    WineAndDineComponent,
    ParallaxQuoteComponent,
    ExploreComponent,
    NewsComponent,
    FooterComponent,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
