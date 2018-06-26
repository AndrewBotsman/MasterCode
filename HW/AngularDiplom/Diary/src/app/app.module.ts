import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { DataFetcher } from './data-fetcher.service';
import { EventListComponent } from './event-list/event-list.component';
import { PlacesComponent } from './places/places.component';
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventListComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [DataFetcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
