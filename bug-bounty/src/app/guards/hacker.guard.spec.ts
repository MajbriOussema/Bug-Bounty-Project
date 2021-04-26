import { TestBed } from '@angular/core/testing';

import { HackerGuard } from './hacker.guard';

describe('HackerGuard', () => {
  let guard: HackerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HackerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
