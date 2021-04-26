import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReghackerComponent } from './reghacker.component';

describe('ReghackerComponent', () => {
  let component: ReghackerComponent;
  let fixture: ComponentFixture<ReghackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReghackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReghackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
