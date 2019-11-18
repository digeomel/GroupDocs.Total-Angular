import { AfterViewInit, OnInit } from '@angular/core';
import { Position, AddedSignature } from "../signature-models";
import { Formatting } from "@groupdocs.examples.angular/common-components";
import { SignatureService } from "../signature.service";
import { RemoveSignatureService } from "../remove-signature.service";
import { ActiveSignatureService } from "../active-signature.service";
import { SignaturesHolderService } from "../signatures-holder.service";
import { CopySignatureService } from "../copy-signature.service";
export declare class Signature implements OnInit, AfterViewInit {
    private _signatureService;
    private _removeSignatureService;
    private _copySignatureService;
    private _activeSignatureService;
    private _signaturesHolderService;
    id: number;
    data: AddedSignature;
    position: Position;
    type: string;
    pageWidth: number;
    pageHeight: number;
    active: boolean;
    unlock: boolean;
    private oldPosition;
    private subject;
    constructor(_signatureService: SignatureService, _removeSignatureService: RemoveSignatureService, _copySignatureService: CopySignatureService, _activeSignatureService: ActiveSignatureService, _signaturesHolderService: SignaturesHolderService);
    ngOnInit(): void;
    getData(): string;
    dragOver($event: DragEvent): void;
    dragStart($event: DragEvent): void;
    dragging($event: any): void;
    isOnPage(position: any): any;
    isText(): boolean;
    getFormatting(): Formatting;
    saveTextSignature($event: Formatting): void;
    private fillFormatting;
    remove(): void;
    activation(): void;
    isDigital(): boolean;
    width($event: any): void;
    height($event: any): void;
    left($event: any): void;
    top($event: any): void;
    notifyChanges(): void;
    drop($event: DragEvent): void;
    isInit(): boolean;
    onCopySign(): void;
    ngAfterViewInit(): void;
    private correctPosition;
    saveText(value: string): void;
    private sendSaveText;
    hideMenu($event: any): void;
    getMenuShift(): number;
}
