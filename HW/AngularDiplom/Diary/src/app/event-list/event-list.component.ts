import { Component, OnInit } from '@angular/core';
import { DataFetcher } from '../data-fetcher.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventName = 'Название события';
  eventDateName = 'Дата';
  searchName = 'Поиск';
  clearEventsbuttonName = "Удалить все события";

  empty: Boolean = true;

  dataSource: any = [];
    // [{
    //   'eventId': '1',
    //   'eventName': 'TestEvent',
    //   'eventDate': '27.06.2018'
    // },
    // {
    //   'eventId': '2',
    //   'eventName': 'TestEvent2',
    //   'eventDate': '27.06.2018'
    // }];

  displayedColumns = ['eventName', 'eventDate'];

  constructor(private _dataFetcherService: DataFetcher) {
    this.dataSource = _dataFetcherService.getAllEvents();
    this.empty = this.dataSource == undefined; //&& this.dataSource.map(d => d.length === 0).startWith(false);
  }

  ngOnInit() {
    console.log(this.dataSource);
    console.log(this.empty);
  }

  removeEvents(): void{
    this._dataFetcherService.clearEvents();
  }
}
