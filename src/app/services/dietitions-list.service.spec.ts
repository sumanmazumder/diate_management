import { TestBed } from '@angular/core/testing';

import { DietitionsListService } from './dietitions-list.service';

describe('DietitionsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DietitionsListService = TestBed.get(DietitionsListService);
    expect(service).toBeTruthy();
  });
});
