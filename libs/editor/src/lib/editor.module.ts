import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
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
import { CreateDocumentModalComponent } from './create.document-modal/create.document-modal.component';
import { EditorAppComponent } from './editor-app.component';
import { EditorConfigService } from './editor-config.service';
import { EditorService } from './editor.service';

export function initializeApp(editorConfigService: EditorConfigService) {
  const result = () => editorConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [EditorAppComponent, CreateDocumentModalComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule,
    TranslateModule.forRoot(),
  ],
  exports: [
    CreateDocumentModalComponent,
    EditorAppComponent,
    CommonComponentsModule,
  ],
  providers: [
    EditorService,
    ConfigService,
    EditorConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [EditorConfigService],
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
export class EditorModule {
  constructor() {
    library.add(fas, far);
  }
  static forRoot(apiEndpoint: string): ModuleWithProviders<EditorModule> {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: EditorModule,
    };
  }
}
