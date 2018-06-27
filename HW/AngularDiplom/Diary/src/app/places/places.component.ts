import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  styles: [`
    agm-map {
      height: 600px;
      width: 800px;
    }
  `]
})
export class PlacesComponent implements OnInit {
  // initial center position for the map
  lat: number = 49.988358;
  lng: number = 36.232845;

  // google maps zoom level
  zoom: number = 8;

  constructor() { }

  ngOnInit() {
  }


  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng
    // });
  }
}
