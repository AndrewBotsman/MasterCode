import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventModel } from '../event-model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { switchMap } from 'rxjs/operators';
import { DataFetcher } from '../data-fetcher.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  styles: [`
    agm-map {
      height: 200px;
      width: 300px;
    }
  `]
})

export class EventComponent implements OnInit {

  eventForm = new FormGroup({
    eventName: new FormControl(),
    eventDescription: new FormControl(),
    eventDate: new FormControl(),
    eventOpinion: new FormControl(),
    eventPhotoRef: new FormControl(),
    eventVideoRef: new FormControl(),
    eventMap: new FormControl(),
  });

  // eventModel = new EventModel();
  // eventObject = new FormControl();
  // eventName: string;
  // eventDescription: string;
  // eventDate: string;
  // eventOpinion: string;
  // eventPhotoRef: string;
  // eventVideoRef: string;
  // eventOpinons = new eventOpinions();

  eventNameInputPlaceholder = 'Название события';
  createEventFormName = 'Создание нового события';
  eventNameLabel = 'Введите название события:';
  eventDescriptionLabel = 'Описание:';
  eventDateInputLabel = 'Дата:';
  eventOpinionLabel = 'Как вы к этому относитесь:';
  eventOpinionPositive = 'Положительно';
  eventOpinionNegative = 'Отрицательно';
  eventOpinionNeutrale = 'Нейтрально';
  eventPhotoRefLabel = 'Ссылка на фото:';
  eventVideoRefLabel = 'Ссылка на видео:';
  eventShowButtonName = 'Показать';
  eventMapAreaLabel = 'Места:';
  eventSubmitButtonName = 'Сохранить';
  inputCoords: Array<string>;
  lat: number = 49.988358;
  lng: number = 36.232845;
  showDialog = false;
  eventRef = '';
  private _eventId = '-1';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DataFetcher
  ) { }

  ngOnInit() {
    this._eventId = this.route.snapshot.paramMap.get('id');
  }

  getUrl(id: string) {
    if (id === '' || id === undefined) {
    } else if (id === 'eventPhotoRef') {
      this.eventRef = this.eventForm.controls.eventPhotoRef.value;
    } else {
      this.eventRef = this.eventForm.controls.eventVideoRef.value;
    }
  }
  displayDialog(id?: string) {
    this.getUrl(id);
    console.log(id);
    console.log(this.eventRef);
    
    this.showDialog = !(this.showDialog);
  }
  OutputCoords(coords: Array<string>) {
    console.log(coords);
  }

  showPhoto(): void {
    console.log('Photo displyed!');
  }

  showVideo(): void {
    console.log('Video displyed!');
  }

  loadEvent(): void {
    let eventObject = new EventModel('', '', '', '', '', '', ['', '']);
    eventObject = eventObject.GetEvent(this._eventId);
    this.eventForm.patchValue(Object.keys(eventObject));
  }

  submit(): void {
    console.log(this.eventForm.value);

    const eventObj = new EventModel(
      this.eventForm.controls.eventName.value,
      this.eventForm.controls.eventDescription.value,
      this.eventForm.controls.eventDate.value,
      this.eventForm.controls.eventOpinion.value,
      this.eventForm.controls.eventPhotoRef.value,
      this.eventForm.controls.eventVideoRef.value,
      this.eventForm.controls.eventMap.value
    );
    eventObj.SaveEvent(this._eventId);
  }

  private patchValue(value: { [key: string]: any }, { onlySelf, emitEvent }: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
    Object.keys(value).forEach(name => {
      if (this.eventForm.controls[name]) {
        this.eventForm.controls[name].patchValue(value[name], { onlySelf: true, emitEvent });
      }
    });
  }


  // get eventPhotoRef() {return this.eventForm.get('eventPhotoRef')}
}
