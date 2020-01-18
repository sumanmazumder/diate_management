import { TestBed } from '@angular/core/testing';

import { NotesListService } from './notes-list.service';

describe('NotesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesListService = TestBed.get(NotesListService);
    expect(service).toBeTruthy();
  });
});
