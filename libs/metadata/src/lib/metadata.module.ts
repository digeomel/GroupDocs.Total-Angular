import { CommonModule, DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  Api,
  CommonComponentsModule,
  ConfigService,
  ErrorInterceptorService,
  LoadingMaskInterceptorService,
  LoadingMaskService,
} from '@groupdocs.examples.angular/common-components';
import { TranslateModule } from '@ngx-translate/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { AccordionService } from './accordion.service';
import { AccordionGroupComponent } from './accordion/accordion-group/accordion-group.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { GdIntegerDirective } from './directives/gd-integer.directive';
import { MetadataAppComponent } from './metadata-app.component';
import { MetadataConfigService } from './metadata-config.service';
import { MetadataService } from './metadata.service';
import { PreviewStatusComponent } from './preview-status/preview-status.component';

export function initializeApp(metadataConfigService: MetadataConfigService) {
  const result = () => metadataConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [
    MetadataAppComponent,
    AccordionComponent,
    AccordionGroupComponent,
    GdIntegerDirective,
    ConfirmModalComponent,
    PreviewStatusComponent,
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    DpDatePickerModule,
    TranslateModule.forRoot(),
  ],
  exports: [
    MetadataAppComponent,
    CommonComponentsModule,
    AccordionComponent,
    AccordionGroupComponent,
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
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [MetadataConfigService],
      multi: true,
    },
    LoadingMaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: setupLoadingInterceptor,
      multi: true,
      deps: [LoadingMaskService],
    },
  ],
})
export class MetadataModule {
  static forRoot(apiEndpoint: string): ModuleWithProviders<MetadataModule> {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: MetadataModule,
    };
  }
}
