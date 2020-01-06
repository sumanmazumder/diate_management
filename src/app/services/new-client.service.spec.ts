import { TestBed } from '@angular/core/testing';

import { NewClientService } from './new-client.service';

describe('NewClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewClientService = TestBed.get(NewClientService);
    expect(service).toBeTruthy();
  });
});
