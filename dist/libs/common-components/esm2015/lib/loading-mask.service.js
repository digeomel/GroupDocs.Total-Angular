/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { Api } from "./config.service";
export class LoadingMaskService {
    constructor() {
        this.onLoadingChanged = new EventEmitter();
        this.stopList = [];
        this.requests = [];
        this.stopList.push(Api.SAVE_TEXT);
        this.stopList.push(Api.SAVE_OPTICAL_CODE);
    }
    /**
     * @param {?} req
     * @return {?}
     */
    onRequestStart(req) {
        /** @type {?} */
        const stop = this.stopList.find((/**
         * @param {?} x
         * @return {?}
         */
        x => req.url.includes(x)));
        if (!stop) {
            this.requests.push(req);
            this.notify();
        }
    }
    /**
     * @param {?} req
     * @return {?}
     */
    onRequestFinish(req) {
        /** @type {?} */
        const index = this.requests.indexOf(req);
        if (index !== -1) {
            this.requests.splice(index, 1);
        }
        this.notify();
    }
    /**
     * @private
     * @return {?}
     */
    notify() {
        this.onLoadingChanged.emit(this.requests.length !== 0);
    }
}
LoadingMaskService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoadingMaskService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    LoadingMaskService.prototype.onLoadingChanged;
    /**
     * @type {?}
     * @private
     */
    LoadingMaskService.prototype.stopList;
    /**
     * @type {?}
     * @private
     */
    LoadingMaskService.prototype.requests;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1tYXNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFBO0FBRXRELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUdyQyxNQUFNLE9BQU8sa0JBQWtCO0lBTTdCO1FBTEEscUJBQWdCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFFOUQsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBdUIsRUFBRSxDQUFDO1FBR3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxHQUFxQjs7Y0FDNUIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsR0FBcUI7O2NBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDeEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRU8sTUFBTTtRQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBOUJGLFVBQVU7Ozs7OztJQUVULDhDQUFzRTs7Ozs7SUFFdEUsc0NBQXNCOzs7OztJQUN0QixzQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7SHR0cFJlcXVlc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QXBpfSBmcm9tIFwiLi9jb25maWcuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9hZGluZ01hc2tTZXJ2aWNlIHtcbiAgb25Mb2FkaW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgc3RvcExpc3QgPSBbXTtcbiAgcHJpdmF0ZSByZXF1ZXN0czogSHR0cFJlcXVlc3Q8YW55PltdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5TQVZFX1RFWFQpO1xuICAgIHRoaXMuc3RvcExpc3QucHVzaChBcGkuU0FWRV9PUFRJQ0FMX0NPREUpO1xuICB9XG5cbiAgb25SZXF1ZXN0U3RhcnQocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogdm9pZCB7XG4gICAgY29uc3Qgc3RvcCA9IHRoaXMuc3RvcExpc3QuZmluZCh4ID0+IHJlcS51cmwuaW5jbHVkZXMoeCkpO1xuICAgIGlmICghc3RvcCkge1xuICAgICAgdGhpcy5yZXF1ZXN0cy5wdXNoKHJlcSk7XG4gICAgICB0aGlzLm5vdGlmeSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVxdWVzdEZpbmlzaChyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucmVxdWVzdHMuaW5kZXhPZihyZXEpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMucmVxdWVzdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgdGhpcy5ub3RpZnkoKTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5KCk6IHZvaWQge1xuICAgIHRoaXMub25Mb2FkaW5nQ2hhbmdlZC5lbWl0KHRoaXMucmVxdWVzdHMubGVuZ3RoICE9PSAwKTtcbiAgfVxufVxuIl19