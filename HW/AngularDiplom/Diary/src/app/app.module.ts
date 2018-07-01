import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatIconModule, MatTableModule, MatSortModule, MatDialogModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.router';
import { DataFetcher } from './data-fetcher.service';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event-list/event-list.component';
import { PlacesComponent } from './places/places.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventListComponent,
    PlacesComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    routes,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQbAs-8MT-IqrBoviM2v4yDd0i6RXtqh0'
    })
  ],
  providers: [DataFetcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
