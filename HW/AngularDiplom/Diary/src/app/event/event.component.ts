import { Component, OnInit } from '@angular/core';

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

  eventNameInputPlaceholder = 'Название события';
  eventNameLabel = 'Введите название события:';
  eventDescriptionTextareaLabel = 'Описание:';
  eventDateInputLabel = 'Дата:';
  eventOpinionLabel = 'Как вы к этому относитесь:';
  eventOpinionPositive = 'Положительно';
  eventOpinionNegative = 'Отрицательно';
  eventOpinionNeutrale = 'Нейтрально';
  eventPhotoRefLabel = 'Ссылка на фото:';
  eventVideooRefLabel = 'Ссылка на видео:';
  eventShowButtonName = 'Показать';
  eventMapAreaLabel = 'Места:';
  eventSubmitButtonName = 'Сохранить';
  lat: number = 49.988358;
  lng: number = 36.232845;

  constructor() { }

  ngOnInit() {
  }

  showPhoto(): void {
    console.log('Photo displyed!');
  }

  showVideo(): void {
    console.log('Video displyed!');
  }
}
