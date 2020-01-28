import { TestBed } from '@angular/core/testing';

import { DietChatService } from './diet-chat.service';

describe('DietChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DietChatService = TestBed.get(DietChatService);
    expect(service).toBeTruthy();
  });
});
