import { TestBed } from '@angular/core/testing';

import { MedicalHistoryService } from './medical-history.service';

describe('MedicalHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicalHistoryService = TestBed.get(MedicalHistoryService);
    expect(service).toBeTruthy();
  });
});
