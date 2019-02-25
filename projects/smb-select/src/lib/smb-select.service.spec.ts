import { TestBed } from '@angular/core/testing';

import { SmbSelectService } from './smb-select.service';

describe('SmbSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmbSelectService = TestBed.get(SmbSelectService);
    expect(service).toBeTruthy();
  });
});
