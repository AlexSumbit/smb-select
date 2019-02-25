import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHeaderComponent } from './select-header.component';

describe('SelectHeaderComponent', () => {
  let component: SelectHeaderComponent;
  let fixture: ComponentFixture<SelectHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
