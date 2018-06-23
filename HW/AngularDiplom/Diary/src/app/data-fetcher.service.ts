import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFetcher {

  constructor() { }

  GetEvent() {
    return 'Test data';
  }
}
