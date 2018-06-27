import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { DataFetcher } from './data-fetcher.service';
import { EventListComponent } from './event-list/event-list.component';
import { PlacesComponent } from './places/places.component';
import { routes } from './app.router';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from "@angular/material";
import { AgmCoreModule } from '@agm/core';
// import { AgmCoreModule } from 'angular2-google-maps/core';
//import { GOOGLE_MAPS_PROVIDERS } from 'angular2-google-map/core';

// const googleMapsCore = AgmCoreModule.forRoot({
//   apiKey: 'AIzaSyAQbAs-8MT-IqrBoviM2v4yDd0i6RXtqh0',
// });

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventListComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    routes,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQbAs-8MT-IqrBoviM2v4yDd0i6RXtqh0'
    })
  ],
  providers: [DataFetcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
