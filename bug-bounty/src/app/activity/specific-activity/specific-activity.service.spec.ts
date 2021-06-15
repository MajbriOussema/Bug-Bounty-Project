import { TestBed } from '@angular/core/testing';

import { SpecificActivityService } from './specific-activity.service';

describe('SpecificActivityService', () => {
  let service: SpecificActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
