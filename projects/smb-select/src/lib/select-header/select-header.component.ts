import { SmbSelectService } from './../smb-select.service';
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'smb-select-header',
  templateUrl: './select-header.component.html',
  styleUrls: ['./select-header.component.css']
})
export class SelectHeaderComponent implements OnInit {

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef
  ) { }

  ngOnInit() {
  }

  setHeader(content: string) {
    this._renderer.setProperty(this._elementRef.nativeElement, 'innerHTML', content);
  }
}
