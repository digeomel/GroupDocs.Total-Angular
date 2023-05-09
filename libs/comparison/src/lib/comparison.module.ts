import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  Api,
  CommonComponentsModule,
  ConfigService,
  ErrorInterceptorService,
  LoadingMaskInterceptorService,
  LoadingMaskService,
} from '@groupdocs.examples.angular/common-components';
import { TranslateModule } from '@ngx-translate/core';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { AddFilePanelComponent } from './add-file-panel/add-file-panel.component';
import { ComparisonAppComponent } from './comparison-app.component';
import { ComparisonConfigService } from './comparison-config.service';
import { ComparisonService } from './comparison.service';
import { DifferenceHighlightComponent } from './difference-highlight/difference-highlight.component';
import { DifferenceComponent } from './difference/difference.component';
import { DifferencesService } from './differences.service';
import { DifferencesComponent } from './differences/differences.component';
import { ResultDocumentComponent } from './result-document/result-document.component';
import { UploadFilePanelComponent } from './upload-file-panel/upload-file-panel.component';

export function initializeApp(
  comparisonConfigService: ComparisonConfigService
) {
  const result = () => comparisonConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [
    ComparisonAppComponent,
    AddFilePanelComponent,
    UploadFilePanelComponent,
    DifferenceComponent,
    DifferenceHighlightComponent,
    ResultDocumentComponent,
    DifferencesComponent,
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgClickOutsideDirective,
    TranslateModule.forRoot(),
    FormsModule,
  ],
  exports: [
    CommonComponentsModule,
    ComparisonAppComponent,
    AddFilePanelComponent,
    UploadFilePanelComponent,
    DifferenceComponent,
    DifferencesComponent,
    DifferenceHighlightComponent,
    ResultDocumentComponent,
  ],
  providers: [
    ComparisonService,
    ConfigService,
    DifferencesService,
    ComparisonConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ComparisonConfigService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
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
export class ComparisonModule {
  constructor() {
    library.add(fas, far);
  }

  static forRoot(apiEndpoint: string): ModuleWithProviders<ComparisonModule> {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: ComparisonModule,
    };
  }
}
