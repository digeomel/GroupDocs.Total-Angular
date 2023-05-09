import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faChevronLeft,
  faChevronRight,
  faCircleNotch,
  faCloudDownloadAlt,
  faExclamationTriangle,
  faEye,
  faFile,
  faFolderOpen,
  faInfoCircle,
  faKey,
  faLevelUpAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { AddDynamicComponentService } from './add-dynamic-component.service';
import { BackFormattingService } from './back-formatting.service';
import { BrowseFilesModalComponent } from './browse-files-modal/browse-files-modal.component';
import { ButtonComponent } from './button/button.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { Api, ConfigService } from './config.service';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { DisabledCursorDirective } from './disabled-cursor.directive';
import { DndDirective } from './dnd.directive';
import { DocumentComponent } from './document/document.component';
import {
  DropDownComponent,
  DropDownItemComponent,
  DropDownItemsComponent,
  DropDownToggleComponent,
} from './drop-down/drop-down.component';
import { EditorDirective } from './editor.directive';
import { ErrorInterceptorService } from './error-interceptor.service';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { ExceptionMessageService } from './exception-message.service';
import { FileModel, FileService, FileUtil, Utils } from './file.service';
import { FormattingDirective } from './formatting.directive';
import { FormattingService } from './formatting.service';
import { HostDynamicDirective } from './host-dynamic.directive';
import { HostingDynamicComponentService } from './hosting-dynamic-component.service';
import { InitStateComponent } from './init-state/init-state.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { LoadingMaskInterceptorService } from './loading-mask-interceptor.service';
import { LoadingMaskService } from './loading-mask.service';
import { LoadingMaskComponent } from './loading-mask/loading-mask.component';
import { LogoComponent } from './logo/logo.component';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal/modal.component';
import { MouseWheelDirective } from './mousewheel.directive';
import { NavigateService } from './navigate.service';
import { OnCloseService } from './on-close.service';
import { PageMarkerDirective } from './page-marker.directive';
import { PagePreloadService } from './page-preload.service';
import { PageComponent } from './page/page.component';
import { PasswordRequiredComponent } from './password-required/password-required.component';
import { PasswordService } from './password.service';
import {
  HighlightSearchPipe,
  SanitizeHtmlPipe,
  SanitizeResourceHtmlPipe,
  SanitizeStylePipe,
} from './pipes';
import { RenderPrintDirective } from './render-print.directive';
import { RenderPrintService } from './render-print.service';
import { ResizingComponent } from './resizing/resizing.component';
import { RotationDirective } from './rotation.directive';
import { ScrollableDirective } from './scrollable.directive';
import { SearchService } from './search.service';
import { SearchComponent } from './search/search.component';
import { SearchableDirective } from './searchable.directive';
import { SelectComponent } from './select/select.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { TabActivatorService } from './tab-activator.service';
import { TabComponent } from './tab/tab.component';
import { TabbedToolbarsComponent } from './tabbed-toolbars/tabbed-toolbars.component';
import { TabsComponent } from './tabs/tabs.component';
import { TextMenuComponent } from './text-menu/text-menu.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TopTabActivatorService } from './top-tab-activator.service';
import { TopTabComponent } from './top-tab/top-tab.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { UploadFileZoneComponent } from './upload-file-zone/upload-file-zone.component';
import { UploadFilesService } from './upload-files.service';
import { ViewportService } from './viewport.service';
import { WindowService } from './window.service';
import { ZoomDirective } from './zoom.directive';
import { ZoomService } from './zoom.service';

const providers = [
  ConfigService,
  Api,
  ModalService,
  FileService,
  FileModel,
  FileUtil,
  Utils,
  SanitizeHtmlPipe,
  SanitizeResourceHtmlPipe,
  SanitizeStylePipe,
  HighlightSearchPipe,
  UploadFilesService,
  RenderPrintService,
  NavigateService,
  PagePreloadService,
  ZoomService,
  ExceptionMessageService,
  PasswordService,
  ErrorInterceptorService,
  SearchService,
  WindowService,
  ViewportService,
  FormattingService,
  BackFormattingService,
  OnCloseService,
  LoadingMaskInterceptorService,
  LoadingMaskService,
  TabActivatorService,
  AddDynamicComponentService,
  HostingDynamicComponentService,
  TopTabActivatorService,
];

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgClickOutsideDirective,
    TranslateModule,
  ],
  declarations: [
    TopToolbarComponent,
    SidePanelComponent,
    ButtonComponent,
    LogoComponent,
    TooltipComponent,
    ModalComponent,
    BrowseFilesModalComponent,
    DocumentComponent,
    PageComponent,
    SanitizeHtmlPipe,
    SanitizeResourceHtmlPipe,
    SanitizeStylePipe,
    HighlightSearchPipe,
    UploadFileZoneComponent,
    DndDirective,
    ScrollableDirective,
    MouseWheelDirective,
    ZoomDirective,
    SelectComponent,
    DisabledCursorDirective,
    RotationDirective,
    InitStateComponent,
    RenderPrintDirective,
    ErrorModalComponent,
    PasswordRequiredComponent,
    SearchComponent,
    SearchableDirective,
    TabbedToolbarsComponent,
    TabComponent,
    TabsComponent,
    ColorPickerComponent,
    FormattingDirective,
    SuccessModalComponent,
    EditorDirective,
    LoadingMaskComponent,
    DropDownComponent,
    DropDownItemComponent,
    DropDownItemsComponent,
    DropDownToggleComponent,
    LeftSideBarComponent,
    TooltipDirective,
    HostDynamicDirective,
    ResizingComponent,
    TopTabComponent,
    TextMenuComponent,
    ContextMenuComponent,
    PageMarkerDirective,
    ThumbnailsComponent,
  ],
  exports: [
    TopToolbarComponent,
    SidePanelComponent,
    ButtonComponent,
    LogoComponent,
    TooltipComponent,
    ModalComponent,
    BrowseFilesModalComponent,
    DocumentComponent,
    PageComponent,
    SanitizeResourceHtmlPipe,
    SanitizeStylePipe,
    HighlightSearchPipe,
    SanitizeHtmlPipe,
    UploadFileZoneComponent,
    ScrollableDirective,
    MouseWheelDirective,
    SelectComponent,
    RotationDirective,
    InitStateComponent,
    RenderPrintDirective,
    ErrorModalComponent,
    PasswordRequiredComponent,
    SearchComponent,
    SearchableDirective,
    TabbedToolbarsComponent,
    TabComponent,
    TabsComponent,
    ColorPickerComponent,
    FormattingDirective,
    SuccessModalComponent,
    LoadingMaskComponent,
    DndDirective,
    DropDownComponent,
    DropDownItemComponent,
    DropDownItemsComponent,
    DropDownToggleComponent,
    ZoomDirective,
    DropDownToggleComponent,
    LeftSideBarComponent,
    TooltipDirective,
    HostDynamicDirective,
    ResizingComponent,
    TopTabComponent,
    TextMenuComponent,
    ContextMenuComponent,
    PageMarkerDirective,
    ThumbnailsComponent,
  ],
  providers: providers,
})
export class CommonComponentsModule {
  constructor(library: FaIconLibrary) {
    // library.addIconPacks(fas, far); Not a good idea to add the whole libraries!
    library.addIcons(
      faCloudDownloadAlt,
      faCheck,
      faLevelUpAlt,
      faCircleNotch,
      faExclamationTriangle,
      faCircleNotch,
      faInfoCircle,
      faFile,
      faEye,
      faChevronLeft,
      faChevronRight,
      faTimes,
      faFolderOpen,
      faKey
    );
  }
}
