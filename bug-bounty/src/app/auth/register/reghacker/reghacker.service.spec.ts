import { TestBed } from '@angular/core/testing';

import { ReghackerService } from './reghacker.service';

describe('ReghackerService', () => {
  let service: ReghackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReghackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
