import { AfterViewInit, OnInit } from '@angular/core';
import { EditorService } from "./editor.service";
import { FileDescription, FileModel, ModalService, UploadFilesService, PasswordService, FileCredentials, FormattingService, Formatting, BackFormattingService, OnCloseService, SelectionService, EditHtmlService, RenderPrintService, WindowService, LoadingMaskService, Option } from '@groupdocs.examples.angular/common-components';
import { EditorConfig } from "./editor-config";
import { EditorConfigService } from "./editor-config.service";
export declare class EditorAppComponent implements OnInit, AfterViewInit {
    private _editorService;
    private _modalService;
    private _windowService;
    private _formattingService;
    private _backFormattingService;
    private _onCloseService;
    private _selectionService;
    private _htmlService;
    private _renderPrintService;
    private _loadingMaskService;
    title: string;
    files: FileModel[];
    file: FileDescription;
    editorConfig: EditorConfig;
    formatDisabled: boolean;
    downloadDisabled: boolean;
    credentials: FileCredentials;
    browseFilesModal: string;
    isDesktop: boolean;
    formatting: Formatting;
    fontSizeOptions: {
        value: number;
        name: string;
        separator: boolean;
    }[];
    fontOptions: any[];
    bgColorPickerShow: boolean;
    colorPickerShow: boolean;
    active: boolean;
    textBackup: string;
    private isIE;
    isLoading: boolean;
    fileWasDropped: false;
    selectFontShow: boolean;
    selectFontSizeShow: boolean;
    newFile: boolean;
    constructor(_editorService: EditorService, _modalService: ModalService, configService: EditorConfigService, uploadFilesService: UploadFilesService, passwordService: PasswordService, _windowService: WindowService, _formattingService: FormattingService, _backFormattingService: BackFormattingService, _onCloseService: OnCloseService, _selectionService: SelectionService, _htmlService: EditHtmlService, _renderPrintService: RenderPrintService, _loadingMaskService: LoadingMaskService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    readonly rewriteConfig: boolean;
    readonly downloadConfig: boolean;
    readonly uploadConfig: boolean;
    readonly printConfig: boolean;
    readonly browseConfig: boolean;
    readonly enableRightClickConfig: boolean;
    readonly pageSelectorConfig: boolean;
    readonly createNewFileConfig: boolean;
    openModal(id: string): void;
    openSave(): void;
    selectDir($event: string): void;
    private ptToPx;
    onRightClick($event: MouseEvent): boolean;
    createFile(): void;
    selectFile($event: string, password: string, modalId: string): void;
    fileDropped($event: any): void;
    private loadFile;
    private clearData;
    upload($event: string): void;
    selectFontSize($event: Option): void;
    selectFont($event: Option): void;
    toggleColorPicker($event: any, bg: boolean): void;
    toggleFontSelect($event: any, isFontName: boolean): void;
    selectColor($event: string): void;
    toggleBold(event: any): void;
    toggleUndo(): void;
    toggleRedo(): void;
    toggleItalic(event: any): void;
    toggleUnderline(event: any): void;
    hideAll($event: any): void;
    toggleStrikeout(event: any): void;
    toggleAlign(align: string): void;
    toggleList(list: string): void;
    downloadFile(): void;
    save(): void;
    saveFile(credentials: FileCredentials): void;
    saveNewFile(credentials: FileCredentials): void;
    getPageWithRootTags(data: any, guid: any): string;
    printFile(): void;
    onCloseModal($event: any): void;
}
