import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { DataFetcher } from './data-fetcher.service';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'list',
      component: EventListComponent
    },
    {
      path: 'event',
      component: EventComponent
    }])
  ],
  providers: [DataFetcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
