import { TestBed } from '@angular/core/testing';

import { CafeService } from './cafe.service';

describe('CafeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CafeService = TestBed.get(CafeService);
    expect(service).toBeTruthy();
  });
});
