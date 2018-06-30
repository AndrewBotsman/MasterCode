import { Component, OnInit, ViewChild } from '@angular/core';
import { DataFetcher } from '../data-fetcher.service';
import { MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit {

  eventColumnName = 'Название события';
  eventDateColumnName = 'Дата';
  searchName = 'Поиск';
  clearEventsButtonName = 'Удалить все события';
  editEventButtonName = 'Редактировать';
  removeEventButtonName = 'Удалить';

  empty: Boolean = true;
  changed: Boolean = false;
  dataSource = [];
  displayedColumns = ['eventName', 'eventDate', 'editButton', 'removeButton'];

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
    // this.router.navigateByUrl('/list');
    // .splice(x, 1);
    this.dataSource = [];
    this.empty = true;
  }

  removeEvent(id: string) {
    this._dataFetcherService.removeEvent(id);
    this._deleteRow(id);
  }

  editEvent(id: string) {
    const eventObject = this._dataFetcherService.getEvent(id);
    eventObject.loadEvent(id);
  }

  private _deleteRow(id) {
    for (let i = 0; i < this.dataSource.length; ++i) {
      if (this.dataSource[i].eventId === id) {
        this.dataSource.splice(i, 1);
        const cloned = this.dataSource.map(x => Object.assign({}, x));
        this.dataSource = cloned;
        break;
      }
    }
  }
}
