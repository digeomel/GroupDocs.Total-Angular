import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  Api,
  CommonComponentsModule,
  ConfigService,
  ErrorInterceptorService,
  LoadingMaskInterceptorService,
  LoadingMaskService,
} from '@groupdocs.examples.angular/common-components';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ExcelDocumentComponent } from './excel-document/excel-document.component';
import { ExcelPageComponent } from './excel-page/excel-page.component';
import { RunPresentationComponent } from './run-presentation/run-presentation.component';
import { ViewerTranslateLoader } from './translation/viewer-translate.loader';
import { ViewerAppComponent } from './viewer-app.component';
import { ViewerConfigService } from './viewer-config.service';
import { ViewerService } from './viewer.service';

export function initializeApp(viewerConfigService: ViewerConfigService) {
  const result = () => viewerConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

// AoT requires an exported function for factories
export function translateLoaderFactory() {
  return new ViewerTranslateLoader();
}

@NgModule({
  declarations: [
    ViewerAppComponent,
    RunPresentationComponent,
    ExcelDocumentComponent,
    ExcelPageComponent,
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
      },
    }),
  ],
  exports: [
    ViewerAppComponent,
    RunPresentationComponent,
    ExcelDocumentComponent,
    ExcelPageComponent,
    CommonComponentsModule,
  ],
  providers: [
    ViewerService,
    ConfigService,
    ViewerConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ViewerConfigService],
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
export class ViewerModule {
  static forRoot(apiEndpoint: string): ModuleWithProviders<ViewerModule> {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: ViewerModule,
    };
  }
}
