import {Observable, Observer} from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class PagePreloadService {
  private readonly _checkPreload: Observable<number>;
  private _observer: Observer<number>;

  constructor() {
    this._checkPreload = new Observable(observer =>
      this._observer = observer);
  }

  get checkPreload(): Observable<number> {
    return this._checkPreload;
  }

  changeLastPageInView(page: number) {
    if(this._observer) {
      this._observer.next(page);
    }
  }
}
