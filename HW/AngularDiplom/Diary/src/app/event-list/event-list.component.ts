import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataFetcher } from '../data-fetcher.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { EventModel } from '../event-model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit, AfterViewInit {

  eventColumnName = 'Название события';
  eventDateColumnName = 'Дата';
  searchName = 'Поиск';
  clearEventsButtonName = 'Удалить все события';
  editEventButtonName = 'Редактировать';
  removeEventButtonName = 'Удалить';

  empty: Boolean = true;
  changed: Boolean = false;
  eventArray = [];
  dataSource: any;
  displayedColumns = ['eventName', 'eventDate', 'editButton', 'removeButton'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _dataFetcherService: DataFetcher) {
    this.eventArray = _dataFetcherService.getAllEvents();
    this.dataSource = new MatTableDataSource(this.eventArray);
    this.dataSource.filterPredicate = (data: EventModel, filter: string) => data.eventName.indexOf(filter) !== -1;
    this.empty = this.eventArray === undefined;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  removeEvents(): void {
    this._dataFetcherService.clearEvents();
    this.eventArray = [];
    this.dataSource = new MatTableDataSource(this.eventArray);
    this.empty = true;
  }

  removeEvent(id: string) {
    this._dataFetcherService.removeEvent(id);
    this._deleteRow(id);
    this.empty = this.eventArray.length === 0;
  }

  editEvent(id: string) {
    const eventObject = this._dataFetcherService.getEvent(id);
    eventObject.loadEvent(id);
  }

  private _deleteRow(id) {
    for (let i = 0; i < this.eventArray.length; ++i) {
      if (this.eventArray[i].eventId === id) {
        this.eventArray.splice(i, 1);
        const cloned = this.eventArray.map(x => Object.assign({}, x));
        this.dataSource = new MatTableDataSource(cloned);
        break;
      }
    }
  }
}
