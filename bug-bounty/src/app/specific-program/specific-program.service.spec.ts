import { TestBed } from '@angular/core/testing';

import { SpecificProgramService } from './specific-program.service';

describe('SpecificProgramService', () => {
  let service: SpecificProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
