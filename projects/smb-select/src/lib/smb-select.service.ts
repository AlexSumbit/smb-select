import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class SmbSelectService {

  public valueChanged$: ReplaySubject<any> = new ReplaySubject<any>();

  constructor() {
  }

  changeValue(value) {
    this.valueChanged$.next(value);
  }
}
