import { Component, OnInit, ViewChild } from '@angular/core';
import { DataFetcher } from '../data-fetcher.service';
import { MatSort } from '@angular/material';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit {

  eventColumnName = 'Название события';
  eventDateColumnName = 'Дата';
  searchName = 'Поиск';
  clearEventsbuttonName = 'Удалить все события';
  empty: Boolean = true;
  dataSource: any = [];
  displayedColumns = ['eventName', 'eventDate'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _dataFetcherService: DataFetcher) {
    this.dataSource = _dataFetcherService.getAllEvents();
    this.empty = this.dataSource === undefined;
  }

  ngOnInit() {
    console.log(this.dataSource);
    // console.log(this.empty);
  }

  removeEvents(): void {
    this._dataFetcherService.clearEvents();
  }

  removeEvent(id: string) {
    this._dataFetcherService.removeEvent(id);
  }

  editEvent(id: string) {
    const eventObject = this._dataFetcherService.getEvent(id);

    eventObject.loadEvent(id);
  }
}
