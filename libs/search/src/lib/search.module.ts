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
import { TranslateModule } from '@ngx-translate/core';
import { IndexedFileComponent } from './indexed-file/indexed-file.component';
import { IndexedFilesListComponent } from './indexed-files-list/indexed-files-list.component';
import { SearchAppComponent } from './search-app.component';
import { SearchBrowseFilesModalComponent } from './search-browse-files-modal/search-browse-files-modal.component';
import { SearchConfigService } from './search-config.service';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { SearchResultSummaryComponent } from './search-result-summary/search-result-summary.component';
import { SearchService } from './search.service';

export function initializeApp(searchConfigService: SearchConfigService) {
  const result = () => searchConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [
    SearchAppComponent,
    SearchPanelComponent,
    SearchResultSummaryComponent,
    SearchResultItemComponent,
    IndexedFilesListComponent,
    IndexedFileComponent,
    SearchBrowseFilesModalComponent,
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule,
    TranslateModule.forRoot(),
  ],
  exports: [
    SearchAppComponent,
    CommonComponentsModule,
    SearchPanelComponent,
    SearchResultSummaryComponent,
    SearchResultItemComponent,
    IndexedFilesListComponent,
    IndexedFileComponent,
    SearchBrowseFilesModalComponent,
  ],
  providers: [
    SearchService,
    ConfigService,
    SearchConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [SearchConfigService],
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
export class SearchModule {
  static forRoot(apiEndpoint: string): ModuleWithProviders<SearchModule> {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: SearchModule,
    };
  }
}
