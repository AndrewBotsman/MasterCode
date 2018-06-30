import { Component, OnInit, Input, Output } from '@angular/core';

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
  private _lat = 49.988358;
  private _lng = 36.232845;
  initialLat = 49.988358;
  initialLng = 36.232845;

  @Input() inputCoords: Array<string>;
  @Output() OutputCoords = [this.storedLat, this.storedLng];

  public get storedLat() {
    return this._lat;
  }
  public set storedLat(lat: number) {
    this._lat = lat;
  }

  public get storedLng() {
    return this._lng;
  }
  public set storedLng(lng: number) {
    this._lng = lng;
  }

  // google maps zoom level
  // zoom: number = 8;

  constructor() { }

  ngOnInit() {
  }


  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    console.log($event);

    this._lng = $event.coords.lat;
    this._lng = $event.coords.lat;
  }
}
