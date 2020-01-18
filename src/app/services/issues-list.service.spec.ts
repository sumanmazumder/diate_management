import { TestBed } from '@angular/core/testing';

import { IssuesListService } from './issues-list.service';

describe('IssuesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssuesListService = TestBed.get(IssuesListService);
    expect(service).toBeTruthy();
  });
});
