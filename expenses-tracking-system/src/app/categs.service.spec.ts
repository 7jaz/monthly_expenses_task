import { TestBed } from '@angular/core/testing';

import { CategsService } from './categs.service';

describe('CategsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategsService = TestBed.get(CategsService);
    expect(service).toBeTruthy();
  });
});
