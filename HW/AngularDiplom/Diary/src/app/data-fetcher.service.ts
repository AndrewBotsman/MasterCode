import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataFetcher {

  constructor() { }

  public getAllEvents(): Array<string> {
    try {
      let items: Array<string> = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(key, value);
        items.push(value);
      }
      return items;
    } catch (e) {
      console.error('Error enumarating data from localStorage', e);
      return null;
    }
  }

  public saveEvent(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  public getEvent(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  public removeEvent(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing from localStorage', e);
    }
  }

  public clearEvents(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Error clear localStorage', e);
    }
  }
}
