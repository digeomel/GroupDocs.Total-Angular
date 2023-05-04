import { Component, ElementRef, OnInit } from '@angular/core';
import { DocumentComponent, NavigateService, WindowService, ZoomDirective, ZoomService } from '@groupdocs.examples.angular/common-components';
import * as jquery from 'jquery';
import { DifferencesService } from '../differences.service';
import { CompareResult } from '../models';
const $ = jquery;

@Component({
  selector: 'gd-result-document',
  templateUrl: './result-document.component.html',
  styleUrls: ['./result-document.component.less'], // @TODO: this is replicated from base component until styles inheritance supported added to angular
  providers : [ZoomService],
  viewProviders : [ZoomDirective]
})
export class ResultDocumentComponent extends DocumentComponent implements OnInit  {
  private changesService : DifferencesService;

  constructor(_elementRef: ElementRef<HTMLElement>,
              zoomService: ZoomService,
              changeService : DifferencesService,
              windowService: WindowService,
              navigateService: NavigateService) {
    super(_elementRef, zoomService, windowService, navigateService);
    this.changesService = changeService;
  }

  asCompareResult(obj: any): CompareResult {
    return obj as CompareResult;
  }

  close(){
    this.changesService.setActiveChange(null)
  }

  ngOnInit(){
  }
}
