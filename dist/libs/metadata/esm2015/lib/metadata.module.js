/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MetadataAppComponent } from './metadata-app.component';
import { Api, CommonComponentsModule, ErrorInterceptorService, LoadingMaskInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { MetadataService } from "./metadata.service";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { MetadataConfigService } from "./metadata-config.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionComponent } from "./accordion/accordion.component";
import { AccordionGroupComponent } from "./accordion/accordion-group/accordion-group.component";
import { FormsModule } from '@angular/forms';
import { AccordionService } from './accordion.service';
import { GdIntegerDirective } from "./directives/gd-integer.directive";
import { DpDatePickerModule } from 'ng2-date-picker';
import { ConfirmModalComponent } from "./confirm-modal/confirm-modal.component";
/**
 * @param {?} metadataConfigService
 * @return {?}
 */
export function initializeApp(metadataConfigService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => metadataConfigService.load());
    return result;
}
// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
/**
 * @param {?} service
 * @return {?}
 */
export function setupLoadingInterceptor(service) {
    return new LoadingMaskInterceptorService(service);
}
export class MetadataModule {
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: MetadataModule
        };
    }
}
MetadataModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MetadataAppComponent,
                    AccordionComponent,
                    AccordionGroupComponent,
                    GdIntegerDirective,
                    ConfirmModalComponent
                ],
                imports: [
                    BrowserModule,
                    CommonComponentsModule,
                    HttpClientModule,
                    FontAwesomeModule,
                    FormsModule,
                    DpDatePickerModule
                ],
                exports: [
                    MetadataAppComponent,
                    CommonComponentsModule,
                    AccordionComponent,
                    AccordionGroupComponent
                ],
                providers: [
                    MetadataService,
                    AccordionService,
                    ConfigService,
                    DatePipe,
                    MetadataConfigService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: ErrorInterceptorService,
                        multi: true
                    },
                    {
                        provide: APP_INITIALIZER,
                        useFactory: initializeApp,
                        deps: [MetadataConfigService], multi: true
                    },
                    LoadingMaskService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useFactory: setupLoadingInterceptor,
                        multi: true,
                        deps: [LoadingMaskService]
                    }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL21ldGFkYXRhLyIsInNvdXJjZXMiOlsibGliL21ldGFkYXRhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUNMLEdBQUcsRUFDSCxzQkFBc0IsRUFDdEIsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQ3RELGtCQUFrQixFQUNuQixNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQUVoRixNQUFNLFVBQVUsYUFBYSxDQUFDLHFCQUE0Qzs7VUFDbEUsTUFBTTs7O0lBQUksR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbEQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQUlELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxPQUEyQjtJQUNqRSxPQUFPLElBQUksNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQWlERCxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFvQjtRQUNqQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFBO1FBQ3RDLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztTQUN6QixDQUFDO0lBQ0osQ0FBQzs7O1lBckRGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQixrQkFBa0I7b0JBQ2xCLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixxQkFBcUI7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLFdBQVc7b0JBQ1gsa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUc7b0JBQ1Isb0JBQW9CO29CQUNwQixzQkFBc0I7b0JBQ3RCLGtCQUFrQjtvQkFDbEIsdUJBQXVCO2lCQUN4QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsUUFBUTtvQkFDUixxQkFBcUI7b0JBQ3JCO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsYUFBYTt3QkFDekIsSUFBSSxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSTtxQkFDM0M7b0JBQ0Qsa0JBQWtCO29CQUNsQjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixVQUFVLEVBQUUsdUJBQXVCO3dCQUNuQyxLQUFLLEVBQUUsSUFBSTt3QkFDWCxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDM0I7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YUFwcENvbXBvbmVudCB9IGZyb20gJy4vbWV0YWRhdGEtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgQXBpLFxyXG4gIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXHJcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxyXG4gIExvYWRpbmdNYXNrU2VydmljZVxyXG59IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gXCIuL21ldGFkYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTWV0YWRhdGFDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vbWV0YWRhdGEtY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IEFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFjY29yZGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSBcIi4vYWNjb3JkaW9uL2FjY29yZGlvbi1ncm91cC9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSAnLi9hY2NvcmRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEdkSW50ZWdlckRpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvZ2QtaW50ZWdlci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgRHBEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnbmcyLWRhdGUtcGlja2VyJztcclxuaW1wb3J0IHsgQ29uZmlybU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAobWV0YWRhdGFDb25maWdTZXJ2aWNlOiBNZXRhZGF0YUNvbmZpZ1NlcnZpY2UpIHtcclxuICBjb25zdCByZXN1bHQgPSAgKCkgPT4gbWV0YWRhdGFDb25maWdTZXJ2aWNlLmxvYWQoKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBOT1RFOiB0aGlzIGlzIHJlcXVpcmVkIGR1cmluZyBsaWJyYXJ5IGNvbXBpbGF0aW9uIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMzYyOSNpc3N1ZWNvbW1lbnQtNDQwOTQyOTgxXHJcbi8vIEBkeW5hbWljXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcihzZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UpIHtcclxuICByZXR1cm4gbmV3IExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlKHNlcnZpY2UpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTWV0YWRhdGFBcHBDb21wb25lbnQsXHJcbiAgICBBY2NvcmRpb25Db21wb25lbnQsXHJcbiAgICBBY2NvcmRpb25Hcm91cENvbXBvbmVudCxcclxuICAgIEdkSW50ZWdlckRpcmVjdGl2ZSxcclxuICAgIENvbmZpcm1Nb2RhbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIERwRGF0ZVBpY2tlck1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0cyA6IFtcclxuICAgIE1ldGFkYXRhQXBwQ29tcG9uZW50LFxyXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcclxuICAgIEFjY29yZGlvbkNvbXBvbmVudCxcclxuICAgIEFjY29yZGlvbkdyb3VwQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE1ldGFkYXRhU2VydmljZSxcclxuICAgIEFjY29yZGlvblNlcnZpY2UsXHJcbiAgICBDb25maWdTZXJ2aWNlLFxyXG4gICAgRGF0ZVBpcGUsXHJcbiAgICBNZXRhZGF0YUNvbmZpZ1NlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXHJcbiAgICAgIGRlcHM6IFtNZXRhZGF0YUNvbmZpZ1NlcnZpY2VdLCBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIExvYWRpbmdNYXNrU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IHNldHVwTG9hZGluZ0ludGVyY2VwdG9yLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgZGVwczogW0xvYWRpbmdNYXNrU2VydmljZV1cclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXRhZGF0YU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoYXBpRW5kcG9pbnQgOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIEFwaS5ERUZBVUxUX0FQSV9FTkRQT0lOVCA9IGFwaUVuZHBvaW50XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTWV0YWRhdGFNb2R1bGVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==