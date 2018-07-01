import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DataFetcher } from '../data-fetcher.service';

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
  coordsSelected = false;
  allPlaces = [];
  @Input() inputCoords: Array<string>;
  @Input() displayType: string;
  // @Output() outputCoords = [this.storedLat, this.storedLng];
  @Output() place = new EventEmitter<Array<string>>();

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

  placeChosen(coords: Array<string>) {
    this.place.emit(coords);
    this.coordsSelected = true;
  }
  // google maps zoom level
  // zoom: number = 8;

  constructor(private _service: DataFetcher) { }

  ngOnInit() {
    if (this.inputCoords !== undefined) {
      this.storedLat = Number.parseFloat(this.inputCoords[0]);
      this.storedLng = Number.parseFloat(this.inputCoords[1]);
    }
    this.displayType = this.displayType === undefined ? 'multi' : this.displayType;
    if(this.displayType === 'multi') {
      this.loadAllPlaces();
    }
  }

  loadAllPlaces() {
    const allEvents = this._service.getAllEvents();
    allEvents.forEach(event => {
      const e = JSON.parse(JSON.stringify(event));
      this.allPlaces.push({ lat: Number.parseFloat(e.eventMap[0]), lng: Number.parseFloat(e.eventMap[1]) });
    });
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    console.log($event);

    this._lat = $event.coords.lat;
    this._lng = $event.coords.lng;

    this.place.emit($event.coords);
    this.coordsSelected = true;
  }
}
