import { Component, OnInit, QueryList, ContentChildren, ElementRef } from '@angular/core';
import { SelectOptionComponent } from './select-option/select-option.component';

@Component({
  selector: 'smb-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.css']
})
export class SelectDropdownComponent implements OnInit {

  @ContentChildren(SelectOptionComponent) options: QueryList<SelectOptionComponent>;

  constructor(
    public elementRef: ElementRef
  ) { }

  ngOnInit() {
  }

  getOptionContentByValue(value): string {
    if (this.options) {
      const opts = this.options.toArray();
      const option = opts.filter(item => item.value === value)[0];

      if (option) {
        return option.elementRef.nativeElement.innerHTML;
      }
    }

    return '';
  }

}
