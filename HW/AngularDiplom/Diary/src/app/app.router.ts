import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event/event.component';
import { PlacesComponent } from './places/places.component';

export const router: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: EventListComponent },
    { path: 'event', component: EventComponent },
    { path: 'event/:id', component: EventComponent },
    { path: 'places', component: PlacesComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
