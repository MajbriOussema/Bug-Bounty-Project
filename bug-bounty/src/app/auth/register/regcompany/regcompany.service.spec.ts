import { TestBed } from '@angular/core/testing';

import { RegcompanyService } from './regcompany.service';

describe('RegcompanyService', () => {
  let service: RegcompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegcompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
