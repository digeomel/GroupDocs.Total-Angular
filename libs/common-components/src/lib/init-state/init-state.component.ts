import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'gd-init-state',
  templateUrl: './init-state.component.html',
  styleUrls: ['./init-state.component.less']
})
export class InitStateComponent implements OnInit {
  @Input() icon: IconName;
  @Input() text: string;
  @Output() fileDropped = new EventEmitter<boolean>();
  showUploadFile = false;

  constructor() {
  }

  ngOnInit() {
  }

  dropped($event) {
    if ($event) {
      this.fileDropped.emit($event);
      this.showUploadFile = false;
    }
  }
}
