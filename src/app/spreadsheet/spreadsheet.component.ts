import { Component, ElementRef, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Spreadsheet } from 'src/assets/codebase/spreadsheet';
import {IDataWithStyles} from "../../assets/codebase/types/ts-spreadsheet/sources/types";

@Component({
  selector: 'app-spreadsheet',
  template: `<div #widget class='widget-box-wide'></div>`
})
export class SpreadsheetComponent implements AfterViewInit, OnDestroy {
  @ViewChild('widget') container: ElementRef;
  spreadsheet: Spreadsheet;


  ngAfterViewInit() {
    this.spreadsheet = new Spreadsheet(this.container.nativeElement, {
    });
    this.spreadsheet.setStyle("A1", { background: "#F4D679" });
  }

  ngOnDestroy() {
  }
}
