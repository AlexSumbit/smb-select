import { NgModule } from '@angular/core';
import { SmbSelectComponent } from './smb-select.component';
import { SelectHeaderComponent } from './select-header/select-header.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { SelectOptionComponent } from './select-dropdown/select-option/select-option.component';

@NgModule({
  imports: [
  ],
  declarations: [SmbSelectComponent, SelectHeaderComponent, SelectDropdownComponent, SelectOptionComponent],
  exports: [SmbSelectComponent, SelectHeaderComponent, SelectDropdownComponent, SelectOptionComponent]
})
export class SmbSelectModule { }
