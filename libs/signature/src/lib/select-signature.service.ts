import {Observable, Subject} from "rxjs";
import {DraggableSignature} from "./signature-models";
import { Injectable } from "@angular/core";

@Injectable()
export class SelectSignatureService {
  private _observer: Subject<DraggableSignature> = new Subject();
  private readonly _selectSignature: Observable<DraggableSignature> = this._observer.asObservable();

  constructor() {
  }

  get selectSignature(): Observable<DraggableSignature> {
    return this._selectSignature;
  }

  select(sign: DraggableSignature): void {
    this._observer.next(sign);
  }
}
