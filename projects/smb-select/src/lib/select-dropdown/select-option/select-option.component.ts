import { SmbSelectService } from './../../smb-select.service';
import { Component, OnInit, ElementRef, Input, HostListener } from '@angular/core';

@Component({
  selector: 'smb-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.css']
})
export class SelectOptionComponent implements OnInit {

  @Input('value') value;

  @HostListener('click') onClick() {
    this._select.changeValue(this.value);
  }

  constructor(
    public elementRef: ElementRef,
    private _select: SmbSelectService
  ) {
  }


  ngOnInit() {
  }

}
