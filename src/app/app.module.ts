import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmbSelectModule } from 'projects/smb-select/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SmbSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
