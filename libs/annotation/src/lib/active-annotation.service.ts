import {Observable, Subject} from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ActiveAnnotationService {
  private _observer: Subject<number> = new Subject();
  private readonly _activeChange: Observable<number> = this._observer.asObservable();

  constructor() {
  }

  get activeChange(): Observable<number> {
    return this._activeChange;
  }

  changeActive(annId: number) {
    this._observer.next(annId);
  }
}

