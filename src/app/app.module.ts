import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InfoCharacterComponent } from './components/info-character/info-character.component';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/info-character/locations/locations.component';
import { EpisodesComponent } from "./components/info-character/episodes/episodes.component";
import { CardLocationComponent } from "./components/card-location/card-location.component";
import { CardEpisodesComponent } from "./components/card-episodes/card-episodes.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InfoCharacterComponent,
    HomeComponent,
    LocationsComponent,
    EpisodesComponent,
    CardEpisodesComponent,
    CardLocationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
