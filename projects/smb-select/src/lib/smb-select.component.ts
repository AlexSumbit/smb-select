import { SelectHeaderComponent } from './select-header/select-header.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { SmbSelectService } from './smb-select.service';
import { Component, OnInit, forwardRef, AfterContentInit, Output, EventEmitter, ElementRef, ContentChild, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'smb-select',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./smb-select.component.css'],
  providers: [
    SmbSelectService,
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SmbSelectComponent)
    }
  ]
})
export class SmbSelectComponent implements OnInit, ControlValueAccessor, AfterContentInit {

  @Output('change') change: EventEmitter<any> = new EventEmitter<any>();

  public value: any;

  private _dropdownVisible: boolean;
  private _isDisabled: boolean;

  private _dropdownEl: ElementRef;

  @ContentChild(SelectDropdownComponent) dropdown: SelectDropdownComponent;
  @ContentChild(SelectHeaderComponent) header: SelectHeaderComponent;

  @HostListener('document:click', ['$event.target']) clickedOutside(target) {
    const clickedInside = this._elementRef.nativeElement.contains(target);

    if (clickedInside) {
      this._dropdownVisible = !this._dropdownVisible;
    } else {
      this._dropdownVisible = false;
    }
    this.setDropdownVisible();
  }

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    private _select: SmbSelectService
  ) { }

  ngOnInit() {
    this._dropdownEl = this.dropdown.elementRef;

    this._select.valueChanged$.subscribe(value => this.writeValue(value));
  }

  ngAfterContentInit() {
    if (!isNullOrUndefined(this.value)) {
      this.setHeader(this.dropdown.getOptionContentByValue(this.value));
    }
  }

  onTouched = (_: any) => {
  };

  onChange = (_: any) => {
  };

  triggerChange() {
    this.change.next(this.value);
  }

  setDropdownVisible(): void {
    if (this._dropdownVisible && !this._isDisabled) {
      this._renderer.setStyle(this._dropdownEl.nativeElement, 'display', 'block');

      setTimeout(() => {
        this._renderer.setStyle(this._dropdownEl.nativeElement, 'transform', 'translateY(-50%) scaleY(1) scaleX(1)');
      });

    } else {
      this._renderer.setStyle(this._dropdownEl.nativeElement, 'display', 'none');
      this._renderer.setStyle(this._dropdownEl.nativeElement, 'transform', 'translateY(-50%) scaleY(0) scaleX(0.9)');
    }
  }

  setHeader(content): void {
    this.header.setHeader(content);
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    const action = isDisabled ? 'addClass' : 'removeClass';
    this._isDisabled = isDisabled;

    this._renderer[action](this._elementRef.nativeElement, 'disabled');
  }

  writeValue(value: any): void {
    if (!isNullOrUndefined(value)) {
      this.value = value;
      this.setHeader(this.dropdown.getOptionContentByValue(value));
      this.onChange(value);
      this.triggerChange();
    }
  }

}
