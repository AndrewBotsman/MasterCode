import { DataFetcher } from './data-fetcher.service';

export class EventModel {
    eventName = '';
    eventDescription = '';
    eventDate = '';
    eventOpinion = '';
    eventPhotoRef = '';
    eventVideoRef = '';
    eventMap = ['', ''];
    private _service = new DataFetcher();

    constructor(
        eventName: string,
        eventDescription: string,
        eventDate: string,
        eventOpinion: string,
        eventPhotoRef: string,
        eventVideoRef: string,
        eventMap: Array<string>
        ) {
        this.eventName = eventName;
        this.eventDescription = eventDescription;
        this.eventDate = eventDate;
        this.eventOpinion = eventOpinion;
        this.eventPhotoRef = eventPhotoRef;
        this.eventVideoRef = eventVideoRef;
        this.eventMap = eventMap;
    }

    PrepareObjectToStore(): any {
        return {
            'eventName': this.eventName,
            'eventDescription': this.eventDescription,
            'eventDate': this.eventDate,
            'eventOpinion': this.eventOpinion,
            'eventPhotoRef': this.eventPhotoRef,
            'eventVideoRef': this.eventVideoRef,
            'eventMap': this.eventMap
        };
    }

    PrepareObjectFromStore(storedEvent: EventModel): void {
        this.eventName = storedEvent.eventName;
        this.eventDescription = storedEvent.eventDescription;
        this.eventDate = storedEvent.eventDate;
        this.eventOpinion = storedEvent.eventOpinion;
        this.eventPhotoRef = storedEvent.eventPhotoRef;
        this.eventVideoRef = storedEvent.eventVideoRef;
        this.eventMap = storedEvent.eventMap;
    }

    GetEvent(id: string): any {
        const event = this._service.getEvent(id);
        console.log(event);
        return this.PrepareObjectFromStore(JSON.parse(event));
    }

    SaveEvent(id: string): void {
        const value = this.PrepareObjectToStore();
        console.log(value);

        if (id === '-1' || id === null) {
            console.log(this._service);
            console.log(this.GetAllEvents());

            const count: number = this.GetAllEvents() === undefined ? 0 : this.GetAllEvents().length;
            this._service.saveEvent('' + count, value);
        } else {
            this._service.saveEvent(id, value);
        }
    }

    GetAllEvents(): any {
        return this._service.getAllEvents();
    }

    RemoveAllEvents(): void {
        this._service.clearEvents();
    }
}
