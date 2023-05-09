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
  ExceptionMessageService,
  LoadingMaskInterceptorService,
  LoadingMaskService,
} from '@groupdocs.examples.angular/common-components';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { FieldComponent } from './field/field.component';
import { ParserAppComponent } from './parser-app.component';
import { ParserConfigService } from './parser-config.service';
import { ParserService } from './parser.service';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { RenameModalComponent } from './rename-modal/rename-modal.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { SurfaceComponent } from './surface/surface.component';
import { TableViewerComponent } from './table-viewer/table-viewer.component';

export function initializeApp(parserConfigService: ParserConfigService) {
  const result = () => parserConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [
    ParserAppComponent,
    SurfaceComponent,
    FieldComponent,
    ConfirmationModalComponent,
    SidePanelComponent,
    RenameModalComponent,
    PlaceholderComponent,
    TableViewerComponent,
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    HttpClientModule,
    NgClickOutsideDirective,
    FontAwesomeModule,
  ],
  exports: [
    ParserAppComponent,
    FieldComponent,
    CommonComponentsModule,
    SurfaceComponent,
    SidePanelComponent,
  ],
  providers: [
    ParserService,
    ConfigService,
    ExceptionMessageService,
    ParserConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ParserConfigService],
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
export class ParserModule {
  constructor() {
    library.add(fas, far);
  }

  static forRoot(apiEndpoint: string): ModuleWithProviders<ParserModule> {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: ParserModule,
    };
  }
}
