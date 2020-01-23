import { TestBed } from '@angular/core/testing';

import { TacksFormService } from './tacks-form.service';

describe('TacksFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TacksFormService = TestBed.get(TacksFormService);
    expect(service).toBeTruthy();
  });
});
