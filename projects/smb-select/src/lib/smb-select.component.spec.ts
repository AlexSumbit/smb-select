import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmbSelectComponent } from './smb-select.component';

describe('SmbSelectComponent', () => {
  let component: SmbSelectComponent;
  let fixture: ComponentFixture<SmbSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmbSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmbSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
