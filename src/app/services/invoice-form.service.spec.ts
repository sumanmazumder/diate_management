import { TestBed } from '@angular/core/testing';

import { InvoiceFormService } from './invoice-form.service';

describe('InvoiceFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceFormService = TestBed.get(InvoiceFormService);
    expect(service).toBeTruthy();
  });
});
