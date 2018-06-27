import { Component } from '@angular/core';
import { DataFetcher } from './data-fetcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testData: Array<string> = [];

  constructor(private _dataFetcherService: DataFetcher) {

  }

  ngOnInit() {
    this.testData = this._dataFetcherService.getAllEvents();
  }

  appName = 'Дневник';
  listName = 'Список';
  createName = 'Добавить';
  mapName = 'Карта';
}
