/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CommonModals, FileCredentials, ModalService, NavigateService, PasswordService, UploadFilesService, WindowService, ZoomService } from "@groupdocs.examples.angular/common-components";
import { SourceFile, TemplateFieldTypes } from './app-models';
import { ParserService } from './parser.service';
import { TemplateService } from './template.service';
import { SourceFileService } from './source-file.service';
import { PlaceholderService } from './placeholder.service';
import { DocumentPageService } from './document-page.service';
export class ParserAppComponent {
    /**
     * @param {?} _modalService
     * @param {?} parserService
     * @param {?} sourceFileService
     * @param {?} templateService
     * @param {?} _zoomService
     * @param {?} _navigateService
     * @param {?} placeholderService
     * @param {?} documentPageService
     * @param {?} _uploadFilesService
     * @param {?} _passwordService
     * @param {?} windowService
     */
    constructor(_modalService, parserService, sourceFileService, templateService, _zoomService, _navigateService, placeholderService, documentPageService, _uploadFilesService, _passwordService, windowService) {
        this._modalService = _modalService;
        this._zoomService = _zoomService;
        this._navigateService = _navigateService;
        this._uploadFilesService = _uploadFilesService;
        this._passwordService = _passwordService;
        this.CREATE_FIELD_MODE = "createFieldMode";
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.documentError = null;
        this.isApiAvaible = true;
        this.fileWasDropped = false;
        this.files = [];
        this.parserService = parserService;
        this.sourceFileService = sourceFileService;
        this.templateService = templateService;
        this.placeholderService = placeholderService;
        this.documentPageService = documentPageService;
        windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.refreshZoom();
        }));
        this.sourceFileService.sourceFileChanged.subscribe((/**
         * @param {?} sourceFile
         * @return {?}
         */
        sourceFile => this.loadDocumentDescription(sourceFile)));
        this._uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        (uploads) => {
            if (uploads && uploads.length > 0) {
                this.parserService.upload(uploads.item(0), '', this.rewriteConfig).subscribe((/**
                 * @param {?} obj
                 * @return {?}
                 */
                (obj) => {
                    this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
                }));
            }
        }));
        this._passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        (pass) => {
            this.selectFile(this.sourceFileService.sourceFile.guid, pass, CommonModals.PasswordRequired);
        }));
    }
    // Menu
    /**
     * @return {?}
     */
    zoomIn() {
        /** @type {?} */
        const zoom = this._zoomService.zoom;
        if (zoom < 490) {
            this._zoomService.changeZoom(zoom + 10);
        }
    }
    /**
     * @return {?}
     */
    zoomOut() {
        /** @type {?} */
        const zoom = this._zoomService.zoom;
        if (zoom > 30) {
            this._zoomService.changeZoom(zoom - 10);
        }
    }
    /**
     * @return {?}
     */
    addFieldClick() {
        /** @type {?} */
        const template = this.templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        const field = template.createField("Field");
        field.fieldType = TemplateFieldTypes.FIXED;
        field.pageNumber = this.documentPageService.activePage;
        template.addField(field);
    }
    /**
     * @return {?}
     */
    addTableClick() {
        /** @type {?} */
        const template = this.templateService.currentTemplate;
        if (!template) {
            return;
        }
        /** @type {?} */
        const field = template.createField("Table");
        field.fieldType = TemplateFieldTypes.TABLE;
        field.pageNumber = this.documentPageService.activePage;
        template.addField(field);
    }
    // end of Menu
    /**
     * @return {?}
     */
    isFileLoaded() {
        return !this.documentError && this.document;
    }
    /**
     * @param {?} id
     * @param {?} fileShouldBeLoaded
     * @return {?}
     */
    openModal(id, fileShouldBeLoaded) {
        if (fileShouldBeLoaded && !this.isFileLoaded())
            return;
        this._modalService.open(id);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectDir($event) {
        this.parserService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        this.parserService.upload(null, $event, this.rewriteConfig).subscribe((/**
         * @return {?}
         */
        () => {
            this.selectDir('');
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    fileDropped($event) {
        this.fileWasDropped = $event;
    }
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    selectFile($event, password, modalId) {
        this.credentials = new FileCredentials($event, password);
        this.sourceFileService.sourceFile = new SourceFile($event, password);
        if (modalId) {
            this._modalService.close(modalId);
        }
    }
    /**
     * @return {?}
     */
    get rewriteConfig() {
        return this.parserConfig ? this.parserConfig.rewrite : true;
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.parserConfig ? this.parserConfig.upload : true;
    }
    /**
     * @return {?}
     */
    get browseConfig() {
        return this.parserConfig ? this.parserConfig.browse : true;
    }
    /**
     * @return {?}
     */
    get returnUrl() {
        return localStorage.getItem("returnUrl");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    reloadCurrentPage() {
        window.location.reload();
    }
    /**
     * @private
     * @param {?} sourceFile
     * @return {?}
     */
    loadDocumentDescription(sourceFile) {
        this.isApiAvaible = true;
        this.documentError = null;
        this._document = null;
        /** @type {?} */
        const operationState = this.placeholderService.startOperation("Loading document...");
        /** @type {?} */
        const observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this.documentPageService.setActivePage(1);
                this._document = response;
                operationState.complete();
                this.templateService.createTemplate();
                this.refreshZoom();
                this._navigateService.countPages = this.document.pages ? this.document.pages.length : 0;
                this._navigateService.currentPage = 1;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                this.documentError = this.parserService.getErrorMessage(err);
                operationState.error(err);
            }),
            complete: (/**
             * @return {?}
             */
            () => operationState.complete())
        };
        this.parserService.loadDocumentDescription(sourceFile).subscribe(observer);
    }
    /**
     * @return {?}
     */
    get document() {
        return this._document;
    }
    /**
     * @private
     * @return {?}
     */
    refreshZoom() {
        this._zoomService.changeZoom(this.getFitToWidth());
    }
    /**
     * @private
     * @return {?}
     */
    getFitToWidth() {
        if (!this.document) {
            return 100;
        }
        /** @type {?} */
        const surfaceWidth = window.innerWidth;
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        const pageWidth = this.ptToPx(this.document.pages[0].width);
        /** @type {?} */
        const pageHeight = this.ptToPx(this.document.pages[0].height);
        /** @type {?} */
        const offsetWidth = pageWidth ? pageWidth : surfaceWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / surfaceWidth) < 2)
            ? 200 - Math.round(offsetWidth * 100 / surfaceWidth)
            : Math.round(surfaceWidth * 100 / offsetWidth);
    }
    /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    ptToPx(pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    }
}
ParserAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-app-parser',
                template: "<gd-loading-mask></gd-loading-mask>\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"column\" [ngClass]=\"{'document-loaded': isFileLoaded()}\">\n      <div class=\"top-panel\">\n        <a class=\"logo-link\" [href]=\"returnUrl\">\n          <gd-logo [logo]=\"'parser'\" icon=\"glasses\"></gd-logo>\n        </a>\n        <gd-top-toolbar class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal, false)\"\n            *ngIf=\"browseConfig\"></gd-button>\n\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\" (click)=\"zoomOut()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'expand'\" [tooltip]=\"'Add text field'\" (click)=\"addFieldClick()\"></gd-button>\n          <gd-button *ngIf=\"!documentError && document\" [icon]=\"'table'\" [tooltip]=\"'Add table'\" (click)=\"addTableClick()\"></gd-button>\n        </gd-top-toolbar>\n      </div>\n       <gd-init-state [icon]=\"'glasses'\" [text]=\"'Drop file here to upload'\" *ngIf=\"documentError || !document\" (fileDropped)=\"fileDropped($event)\">\n        Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n        Or drop file here\n      </gd-init-state>\n\n      <div class=\"parser-wrapper\" *ngIf=\"!documentError && document\">\n        <gd-surface [document]=\"document\"></gd-surface>\n      </div>\n    </div>\n\n    <gd-parser-side-panel *ngIf=\"!documentError && document\"></gd-parser-side-panel>\n  </div>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n    (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\" [uploadConfig]=\"uploadConfig\">\n  </gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.logo-link{color:inherit;text-decoration:inherit}.doc-panel{display:-webkit-box;display:flex;height:calc(100vh - 60px);-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.top-panel{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.toolbar-panel{background-color:#3e4e5a;width:100%}.parser-wrapper{z-index:100;left:0;top:0;right:0;bottom:0}gd-parser-side-panel{position:absolute;right:0;top:60px;width:300px;height:calc(100vh - 60px);background-color:#fff}::ng-deep .tools .button{color:#fff!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column}::ng-deep .tools .button.inactive{color:#959da5!important}::ng-deep .tools .icon-button{margin:0 0 0 7px!important}.row{display:-webkit-box;display:flex}.column{width:100%;height:100vh;background-color:#e7e7e7;overflow:hidden}::ng-deep .gd-side-panel-body{background-color:#f4f4f4}::ng-deep .gd-side-panel-wrapper{width:464px!important}::ng-deep .page.excel{overflow:unset!important}@media (max-width:1037px){::ng-deep .tools gd-button:nth-child(1)>.icon-button{margin:0 0 0 10px!important}::ng-deep .tools .icon-button{height:60px;width:60px}::ng-deep .gd-side-panel-wrapper{width:375px!important}}"]
            }] }
];
/** @nocollapse */
ParserAppComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ParserService },
    { type: SourceFileService },
    { type: TemplateService },
    { type: ZoomService },
    { type: NavigateService },
    { type: PlaceholderService },
    { type: DocumentPageService },
    { type: UploadFilesService },
    { type: PasswordService },
    { type: WindowService }
];
ParserAppComponent.propDecorators = {
    sourceFile: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ParserAppComponent.prototype.sourceFile;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype.CREATE_FIELD_MODE;
    /** @type {?} */
    ParserAppComponent.prototype.browseFilesModal;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._document;
    /** @type {?} */
    ParserAppComponent.prototype.template;
    /** @type {?} */
    ParserAppComponent.prototype.parserConfig;
    /** @type {?} */
    ParserAppComponent.prototype.filePassword;
    /** @type {?} */
    ParserAppComponent.prototype.documentError;
    /** @type {?} */
    ParserAppComponent.prototype.isApiAvaible;
    /** @type {?} */
    ParserAppComponent.prototype.fileWasDropped;
    /** @type {?} */
    ParserAppComponent.prototype.files;
    /** @type {?} */
    ParserAppComponent.prototype.parserService;
    /** @type {?} */
    ParserAppComponent.prototype.sourceFileService;
    /** @type {?} */
    ParserAppComponent.prototype.templateService;
    /** @type {?} */
    ParserAppComponent.prototype.placeholderService;
    /** @type {?} */
    ParserAppComponent.prototype.documentPageService;
    /** @type {?} */
    ParserAppComponent.prototype.credentials;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._uploadFilesService;
    /**
     * @type {?}
     * @private
     */
    ParserAppComponent.prototype._passwordService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3BhcnNlci1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBRUwsWUFBWSxFQUNaLGVBQWUsRUFHZixZQUFZLEVBQ1osZUFBZSxFQUFzQixlQUFlLEVBQzVCLGtCQUFrQixFQUUxQyxhQUFhLEVBQ2IsV0FBVyxFQUdaLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFpRSxVQUFVLEVBQTJCLGtCQUFrQixFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQ2xLLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFPOUQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7SUF3QjdCLFlBQ1UsYUFBMkIsRUFDbkMsYUFBNEIsRUFDNUIsaUJBQW9DLEVBQ3BDLGVBQWdDLEVBQ3hCLFlBQXlCLEVBQ3pCLGdCQUFpQyxFQUN6QyxrQkFBc0MsRUFDdEMsbUJBQXdDLEVBQ2hDLG1CQUF1QyxFQUN2QyxnQkFBaUMsRUFDekMsYUFBNEI7UUFWcEIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFJM0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUdqQyx3QkFBbUIsR0FBbkIs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V0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7O0lBRU8sTUFBTSxDQUFDLEVBQVU7UUFDdkIsb0JBQW9CO1FBQ3BCLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7O1lBL05GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIseWxFQUEwQzs7YUFFM0M7Ozs7WUF2QkMsWUFBWTtZQVVMLGFBQWE7WUFHYixpQkFBaUI7WUFEakIsZUFBZTtZQVB0QixXQUFXO1lBSlgsZUFBZTtZQWNSLGtCQUFrQjtZQUVsQixtQkFBbUI7WUFmRixrQkFBa0I7WUFETCxlQUFlO1lBR3BELGFBQWE7Ozt5QkFxQlosS0FBSzs7OztJQUFOLHdDQUE0Qjs7Ozs7SUFFNUIsK0NBQXVEOztJQUV2RCw4Q0FBcUQ7Ozs7O0lBRXJELHVDQUF1Qzs7SUFDdkMsc0NBQW1COztJQUNuQiwwQ0FBMkI7O0lBQzNCLDBDQUFxQjs7SUFFckIsMkNBQTZCOztJQUM3QiwwQ0FBb0I7O0lBRXBCLDRDQUF1Qjs7SUFDdkIsbUNBQXdCOztJQUN4QiwyQ0FBNkI7O0lBQzdCLCtDQUFxQzs7SUFDckMsNkNBQWlDOztJQUNqQyxnREFBdUM7O0lBQ3ZDLGlEQUF5Qzs7SUFDekMseUNBQW9DOzs7OztJQUdsQywyQ0FBbUM7Ozs7O0lBSW5DLDBDQUFpQzs7Ozs7SUFDakMsOENBQXlDOzs7OztJQUd6QyxpREFBK0M7Ozs7O0lBQy9DLDhDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIENvbW1vbk1vZGFscyxcbiAgRmlsZUNyZWRlbnRpYWxzLFxuICBGaWxlTW9kZWwsIEZvcm1hdHRpbmcsXG4gIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgTW9kYWxTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsIFBhZ2VQcmVsb2FkU2VydmljZSwgUGFzc3dvcmRTZXJ2aWNlLFxuICBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIFV0aWxzLFxuICBXaW5kb3dTZXJ2aWNlLFxuICBab29tU2VydmljZSxcbiAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsXG4gIExvYWRpbmdNYXNrU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBEb2N1bWVudERlc2NyaXB0aW9uLCBEb2N1bWVudERlc2NyaXB0aW9uUmVzcG9uc2UsIFBhcnNlUmVzdWx0LCBTb3VyY2VGaWxlLCBUZW1wbGF0ZSwgVGVtcGxhdGVGaWVsZCwgVGVtcGxhdGVGaWVsZFR5cGVzLCBUZW1wbGF0ZUlkIH0gZnJvbSAnLi9hcHAtbW9kZWxzJztcbmltcG9ydCB7IFBhcnNlclNlcnZpY2UgfSBmcm9tICcuL3BhcnNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBhcnNlckNvbmZpZyB9IGZyb20gJy4vcGFyc2VyLWNvbmZpZyc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RlbXBsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU291cmNlRmlsZVNlcnZpY2UgfSBmcm9tICcuL3NvdXJjZS1maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGxhY2Vob2xkZXJTZXJ2aWNlIH0gZnJvbSAnLi9wbGFjZWhvbGRlci5zZXJ2aWNlJztcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy91dGlsJztcbmltcG9ydCB7IERvY3VtZW50UGFnZVNlcnZpY2UgfSBmcm9tICcuL2RvY3VtZW50LXBhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWFwcC1wYXJzZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyc2VyLWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhcnNlci1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXJzZXJBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzb3VyY2VGaWxlOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBDUkVBVEVfRklFTERfTU9ERSA9IFwiY3JlYXRlRmllbGRNb2RlXCI7XG5cbiAgcmVhZG9ubHkgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcblxuICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnREZXNjcmlwdGlvbjtcbiAgdGVtcGxhdGU6IFRlbXBsYXRlO1xuICBwYXJzZXJDb25maWc6IFBhcnNlckNvbmZpZztcbiAgZmlsZVBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgZG9jdW1lbnRFcnJvcjogc3RyaW5nID0gbnVsbDtcbiAgaXNBcGlBdmFpYmxlID0gdHJ1ZTtcblxuICBmaWxlV2FzRHJvcHBlZCA9IGZhbHNlO1xuICBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcbiAgcGFyc2VyU2VydmljZTogUGFyc2VyU2VydmljZTtcbiAgc291cmNlRmlsZVNlcnZpY2U6IFNvdXJjZUZpbGVTZXJ2aWNlO1xuICB0ZW1wbGF0ZVNlcnZpY2U6IFRlbXBsYXRlU2VydmljZTtcbiAgcGxhY2Vob2xkZXJTZXJ2aWNlOiBQbGFjZWhvbGRlclNlcnZpY2U7XG4gIGRvY3VtZW50UGFnZVNlcnZpY2U6IERvY3VtZW50UGFnZVNlcnZpY2U7XG4gIHB1YmxpYyBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHBhcnNlclNlcnZpY2U6IFBhcnNlclNlcnZpY2UsXG4gICAgc291cmNlRmlsZVNlcnZpY2U6IFNvdXJjZUZpbGVTZXJ2aWNlLFxuICAgIHRlbXBsYXRlU2VydmljZTogVGVtcGxhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICBwbGFjZWhvbGRlclNlcnZpY2U6IFBsYWNlaG9sZGVyU2VydmljZSxcbiAgICBkb2N1bWVudFBhZ2VTZXJ2aWNlOiBEb2N1bWVudFBhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3VwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3Bhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxuICAgIHdpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UpIHtcblxuICAgIHRoaXMucGFyc2VyU2VydmljZSA9IHBhcnNlclNlcnZpY2U7XG4gICAgdGhpcy5zb3VyY2VGaWxlU2VydmljZSA9IHNvdXJjZUZpbGVTZXJ2aWNlO1xuICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlID0gdGVtcGxhdGVTZXJ2aWNlO1xuICAgIHRoaXMucGxhY2Vob2xkZXJTZXJ2aWNlID0gcGxhY2Vob2xkZXJTZXJ2aWNlO1xuICAgIHRoaXMuZG9jdW1lbnRQYWdlU2VydmljZSA9IGRvY3VtZW50UGFnZVNlcnZpY2U7XG5cbiAgICB3aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlQ2hhbmdlZC5zdWJzY3JpYmUoc291cmNlRmlsZSA9PiB0aGlzLmxvYWREb2N1bWVudERlc2NyaXB0aW9uKHNvdXJjZUZpbGUpKVxuXG4gICAgdGhpcy5fdXBsb2FkRmlsZXNTZXJ2aWNlLnVwbG9hZHNDaGFuZ2Uuc3Vic2NyaWJlKCh1cGxvYWRzKSA9PiB7XG4gICAgICBpZiAodXBsb2FkcyAmJiB1cGxvYWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5wYXJzZXJTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oMCksICcnLCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX3Bhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE1lbnVcblxuICB6b29tSW4oKSB7XG4gICAgY29uc3Qgem9vbSA9IHRoaXMuX3pvb21TZXJ2aWNlLnpvb207XG5cbiAgICBpZiAoem9vbSA8IDQ5MCkge1xuICAgICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh6b29tICsgMTApO1xuICAgIH1cbiAgfVxuXG4gIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgem9vbSA9IHRoaXMuX3pvb21TZXJ2aWNlLnpvb207XG4gICAgaWYgKHpvb20gPiAzMCkge1xuICAgICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh6b29tIC0gMTApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZpZWxkQ2xpY2soKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGU7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkID0gdGVtcGxhdGUuY3JlYXRlRmllbGQoXCJGaWVsZFwiKTtcbiAgICBmaWVsZC5maWVsZFR5cGUgPSBUZW1wbGF0ZUZpZWxkVHlwZXMuRklYRUQ7XG4gICAgZmllbGQucGFnZU51bWJlciA9IHRoaXMuZG9jdW1lbnRQYWdlU2VydmljZS5hY3RpdmVQYWdlO1xuICAgIHRlbXBsYXRlLmFkZEZpZWxkKGZpZWxkKTtcbiAgfVxuXG4gIGFkZFRhYmxlQ2xpY2soKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGU7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkID0gdGVtcGxhdGUuY3JlYXRlRmllbGQoXCJUYWJsZVwiKTtcbiAgICBmaWVsZC5maWVsZFR5cGUgPSBUZW1wbGF0ZUZpZWxkVHlwZXMuVEFCTEU7XG4gICAgZmllbGQucGFnZU51bWJlciA9IHRoaXMuZG9jdW1lbnRQYWdlU2VydmljZS5hY3RpdmVQYWdlO1xuICAgIHRlbXBsYXRlLmFkZEZpZWxkKGZpZWxkKTtcbiAgfVxuXG4gIC8vIGVuZCBvZiBNZW51XG5cbiAgaXNGaWxlTG9hZGVkKCkge1xuICAgIHJldHVybiAhdGhpcy5kb2N1bWVudEVycm9yICYmIHRoaXMuZG9jdW1lbnQ7XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZywgZmlsZVNob3VsZEJlTG9hZGVkOiBib29sZWFuKSB7XG4gICAgaWYgKGZpbGVTaG91bGRCZUxvYWRlZCAmJiAhdGhpcy5pc0ZpbGVMb2FkZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMucGFyc2VyU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcbiAgfVxuXG4gIHVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMucGFyc2VyU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBmaWxlRHJvcHBlZCgkZXZlbnQpIHtcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xuICB9XG5cbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGaWxlQ3JlZGVudGlhbHMoJGV2ZW50LCBwYXNzd29yZCk7XG4gICAgdGhpcy5zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlID0gbmV3IFNvdXJjZUZpbGUoJGV2ZW50LCBwYXNzd29yZCk7XG5cbiAgICBpZiAobW9kYWxJZCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhcnNlckNvbmZpZyA/IHRoaXMucGFyc2VyQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXJDb25maWcgPyB0aGlzLnBhcnNlckNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXJDb25maWcgPyB0aGlzLnBhcnNlckNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHJldHVyblVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJldHVyblVybFwiKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcmVsb2FkQ3VycmVudFBhZ2UoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRG9jdW1lbnREZXNjcmlwdGlvbihzb3VyY2VGaWxlOiBTb3VyY2VGaWxlKSB7XG4gICAgdGhpcy5pc0FwaUF2YWlibGUgPSB0cnVlO1xuICAgIHRoaXMuZG9jdW1lbnRFcnJvciA9IG51bGw7XG4gICAgdGhpcy5fZG9jdW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgb3BlcmF0aW9uU3RhdGUgPSB0aGlzLnBsYWNlaG9sZGVyU2VydmljZS5zdGFydE9wZXJhdGlvbihcIkxvYWRpbmcgZG9jdW1lbnQuLi5cIik7XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IHtcbiAgICAgIG5leHQ6IChyZXNwb25zZTogRG9jdW1lbnREZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmRvY3VtZW50UGFnZVNlcnZpY2Uuc2V0QWN0aXZlUGFnZSgxKTtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSByZXNwb25zZTtcblxuICAgICAgICBvcGVyYXRpb25TdGF0ZS5jb21wbGV0ZSgpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlLmNyZWF0ZVRlbXBsYXRlKCk7XG4gICAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcblxuICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IHRoaXMuZG9jdW1lbnQucGFnZXMgPyB0aGlzLmRvY3VtZW50LnBhZ2VzLmxlbmd0aCA6IDA7XG4gICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnI6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmRvY3VtZW50RXJyb3IgPSB0aGlzLnBhcnNlclNlcnZpY2UuZ2V0RXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgIG9wZXJhdGlvblN0YXRlLmVycm9yKGVycik7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6ICgpID0+IG9wZXJhdGlvblN0YXRlLmNvbXBsZXRlKClcbiAgICB9O1xuXG4gICAgdGhpcy5wYXJzZXJTZXJ2aWNlLmxvYWREb2N1bWVudERlc2NyaXB0aW9uKHNvdXJjZUZpbGUpLnN1YnNjcmliZShvYnNlcnZlcik7XG4gIH1cblxuICBnZXQgZG9jdW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoWm9vbSgpIHtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuZ2V0Rml0VG9XaWR0aCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rml0VG9XaWR0aCgpIHtcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiAxMDA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3VyZmFjZVdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAvLyBJbWFnZXMgYW5kIEV4Y2VsLXJlbGF0ZWQgZmlsZXMgcmVjZWl2aW5nIGRpbWVuc2lvbnMgaW4gcHggZnJvbSBzZXJ2ZXJcbiAgICBjb25zdCBwYWdlV2lkdGggPSB0aGlzLnB0VG9QeCh0aGlzLmRvY3VtZW50LnBhZ2VzWzBdLndpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5kb2N1bWVudC5wYWdlc1swXS5oZWlnaHQpO1xuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gcGFnZVdpZHRoID8gcGFnZVdpZHRoIDogc3VyZmFjZVdpZHRoO1xuXG4gICAgcmV0dXJuIChwYWdlSGVpZ2h0ID4gcGFnZVdpZHRoICYmIE1hdGgucm91bmQob2Zmc2V0V2lkdGggLyBzdXJmYWNlV2lkdGgpIDwgMilcbiAgICAgID8gMjAwIC0gTWF0aC5yb3VuZChvZmZzZXRXaWR0aCAqIDEwMCAvIHN1cmZhY2VXaWR0aClcbiAgICAgIDogTWF0aC5yb3VuZChzdXJmYWNlV2lkdGggKiAxMDAgLyBvZmZzZXRXaWR0aCk7XG4gIH1cblxuICBwcml2YXRlIHB0VG9QeChwdDogbnVtYmVyKSB7XG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cbiAgICByZXR1cm4gcHQgKiA5NiAvIDcyO1xuICB9XG59Il19