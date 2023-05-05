import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import {
  ModalComponent
} from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'gd-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.less']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() promptText: string;
  @Input() acceptText: string;

  @Input() operationId: string;

  @Output() acceptEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();

  @ViewChild('modal', { static: true }) modalElement: ModalComponent;

  constructor() { }

  ngOnInit() {
  }

  acceptClick() {
      this.acceptEvent.emit(this.operationId);
  }

  cancelClick() {
    if (this.modalElement) {
      this.modalElement.cancelClose();
    }
  }

}
