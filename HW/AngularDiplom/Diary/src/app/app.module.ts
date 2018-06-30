import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { DataFetcher } from './data-fetcher.service';
import { EventListComponent } from './event-list/event-list.component';
import { PlacesComponent } from './places/places.component';
import { routes } from './app.router';
import { MatIconModule, MatTableModule, MatSortModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
// import { AgmCoreModule } from 'angular2-google-maps/core';
// import { GOOGLE_MAPS_PROVIDERS } from 'angular2-google-map/core';

// const googleMapsCore = AgmCoreModule.forRoot({
//   apiKey: 'AIzaSyAQbAs-8MT-IqrBoviM2v4yDd0i6RXtqh0',
// });

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
    routes,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQbAs-8MT-IqrBoviM2v4yDd0i6RXtqh0'
    }),
    ReactiveFormsModule
  ],
  providers: [DataFetcher],
  bootstrap: [AppComponent]
})
export class AppModule { }

// interface EventModel {
//   eventName: string;
//   eventDecription: string;
//   eventData: string;
//   eventOpinion: string;
//   eventPhotoRef: string;
//   eventVideoRef: string;
//   eventMap: {
//     latitude: number;
//     longitude: number;
//   };
// }

// export class EventClass {
//   eventName: string;
//   eventDecription: string;
//   eventDate: string;
//   eventOpinion: string;
//   eventPhotoRef: string;
//   eventVideoRef: string;
//   eventMap: Array<string>;
//   private _service: DataFetcher;

//   constructor(
//     eventName: string,
//     eventDecription: string,
//     eventDate: string,
//     eventOpinion: string,
//     eventPhotoRef: string,
//     eventVideoRef: string,
//     eventMap: Array<string>) {
//     this.eventName = eventName;
//     this.eventDecription = eventDecription;
//     this.eventDate = eventDate;
//     this.eventOpinion = eventOpinion;
//     this.eventPhotoRef = eventPhotoRef;
//     this.eventVideoRef = eventVideoRef;
//     this.eventMap = eventMap;
//     this._service = new DataFetcher();
//   }

//   PrepareObjectToStore(): any {
//     return {
//       'eventName': this.eventName,
//       'eventDecription': this.eventDecription,
//       'eventDate': this.eventDate,
//       'eventOpinion': this.eventOpinion,
//       'eventPhotoRef': this.eventPhotoRef,
//       'eventVideoRef': this.eventVideoRef,
//       'eventMap': this.eventMap
//     };
//   }

//   PrepareObjectFromStore(storedEvent: EventClass): void {
//     this.eventName = storedEvent.eventName;
//     this.eventDecription = storedEvent.eventDecription;
//     this.eventDate = storedEvent.eventDate;
//     this.eventOpinion = storedEvent.eventOpinion;
//     this.eventPhotoRef = storedEvent.eventPhotoRef;
//     this.eventVideoRef = storedEvent.eventVideoRef;
//     this.eventMap = storedEvent.eventMap;
//   }

//   GetEvent(id: string): any {
//     const event = this._service.getEvent(id);
//     console.log(event);

//     return this.PrepareObjectFromStore(JSON.parse(event));
//   }

//   SaveEvent(id: string): void {
//     const value = this.PrepareObjectToStore();
//     console.log(value);

//     if (id === '-1') {
//       console.log(this._service);
//       console.log(this.GetAllEvents());

//       const count: number = this.GetAllEvents() === undefined ? 0 : this.GetAllEvents().length;
//       this._service.saveEvent('' + ((count > 0) ? (count - 1) : 0), value);
//     } else {
//       this._service.saveEvent(id, value);
//     }
//   }

//   GetAllEvents(): any {
//     return this._service.getAllEvents();
//   }

//   RemoveAllEvents(): void {
//     this._service.clearEvents();
//   }
// }
