import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit, OnChanges {
  @Input() closable = true;
  @Input() visible: boolean;
  @Input() url: string;
  @Input() type: string;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  isYoutube: Boolean = false;
  constructor(private _sanuzator: DomSanitizer) { }

  ngOnChanges() {
    this.isYoutube = this.url.indexOf('youtube') > 0;
  }

  youtubeUrl() {
    const url = this._sanuzator.bypassSecurityTrustResourceUrl(this.url);
    console.log(url);
    return url;
  }

  ngOnInit() {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
