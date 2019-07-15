/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class TabsComponent {
    constructor() {
        this.tabs = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    addTab(tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
    /**
     * @param {?} tabComponent
     * @return {?}
     */
    selectTab(tabComponent) {
        this.tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        (tab) => {
            tab.active = false;
        }));
        tabComponent.active = true;
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-tabs',
                template: "<div class=\"gd-tabs\">\n  <div [ngClass]=\"(tab.active) ? 'gd-tab active' : 'gd-tab'\" *ngFor=\"let tab of tabs\" (mousedown)=\"selectTab(tab)\">\n    <div class=\"title\">{{tab.tabTitle}}</div>\n    <fa-icon [icon]=\"['fas',tab.icon]\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n  </div>\n</div>\n<ng-content></ng-content>\n",
                styles: [".gd-tabs{display:flex}.gd-tab{text-align:center;font-size:11px;color:#e5e5e5;height:30px;line-height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center}.gd-tab .icon{display:none;font-size:14px;margin:auto 23px}.gd-tab .title{margin:auto 23px}.gd-tab.active{background-color:#fff;color:#3e4e5a;font-weight:700}@media (max-width:480px){.gd-tab{height:60px;line-height:60px}.gd-tab .title{display:none}.gd-tab .icon{display:block}}"]
            }] }
];
/** @nocollapse */
TabsComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    TabsComponent.prototype.tabs;
    /** @type {?} */
    TabsComponent.prototype.active;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGFicy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQVFoRCxNQUFNLE9BQU8sYUFBYTtJQUl4QjtRQUhBLFNBQUksR0FBbUIsRUFBRSxDQUFDO0lBSzFCLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBaUI7UUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxZQUEyQjtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3hCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO1FBQ0gsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsaVZBQW9DOzthQUVyQzs7Ozs7O0lBRUMsNkJBQTBCOztJQUMxQiwrQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFiQ29tcG9uZW50fSBmcm9tIFwiLi4vdGFiL3RhYi5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFicy5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0YWJzOiBUYWJDb21wb25lbnRbXSA9IFtdO1xuICBhY3RpdmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgYWRkVGFiKHRhYjogVGFiQ29tcG9uZW50KSB7XG4gICAgaWYgKHRoaXMudGFicy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRhYi5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnRhYnMucHVzaCh0YWIpO1xuICB9XG5cbiAgc2VsZWN0VGFiKHRhYkNvbXBvbmVudDogVGFic0NvbXBvbmVudCkge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIHRhYi5hY3RpdmUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0YWJDb21wb25lbnQuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG59XG4iXX0=