import { DataFetcher } from './data-fetcher.service';
import { UUID } from 'angular2-uuid';

export class EventModel {
    eventId = '';
    eventName = '';
    eventDescription = '';
    eventDate = '';
    eventOpinion = '';
    eventPhotoRef = '';
    eventVideoRef = '';
    eventMap = ['', ''];
    private _service = new DataFetcher();

    constructor(
        eventId: string,
        eventName: string,
        eventDescription: string,
        eventDate: string,
        eventOpinion: string,
        eventPhotoRef: string,
        eventVideoRef: string,
        eventMap: Array<string>
    ) {
        this.eventId = eventId;
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
            'eventId': this.eventId,
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
        this.eventId = storedEvent.eventId === null ? '-1' : storedEvent.eventId;
        this.eventName = storedEvent.eventName === null ? '' : storedEvent.eventName;
        this.eventDescription = storedEvent.eventDescription === null ? '' : storedEvent.eventDescription;
        this.eventDate = storedEvent.eventDate === null ? '' : storedEvent.eventDate;
        this.eventOpinion = storedEvent.eventOpinion === null ? '' : storedEvent.eventOpinion;
        this.eventPhotoRef = storedEvent.eventPhotoRef === null ? '' : storedEvent.eventPhotoRef;
        this.eventVideoRef = storedEvent.eventVideoRef === null ? '' : storedEvent.eventVideoRef;
        this.eventMap = storedEvent.eventMap === null ? ['', ''] : storedEvent.eventMap;
    }

    GetEvent(id: string): EventModel {
        const event = this._service.getEvent(id);
        console.log(event);
        this.PrepareObjectFromStore(event);
        return new EventModel(
            this.eventId,
            this.eventName,
            this.eventDescription,
            this.eventDate,
            this.eventOpinion,
            this.eventPhotoRef,
            this.eventVideoRef,
            this.eventMap
        );
    }

    SaveEvent(id: string): void {
        if (id === '-1' || id === null) {
            const uuid = UUID.UUID();
            this.eventId = '' + uuid;
        }

        const value = this.PrepareObjectToStore();
        console.log(value);
        this._service.saveEvent(this.eventId, value);
    }

    GetAllEvents(): any {
        return this._service.getAllEvents();
    }

    RemoveAllEvents(): void {
        this._service.clearEvents();
    }
}
