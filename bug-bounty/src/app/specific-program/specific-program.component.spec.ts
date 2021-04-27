import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificProgramComponent } from './specific-program.component';

describe('SpecificProgramComponent', () => {
  let component: SpecificProgramComponent;
  let fixture: ComponentFixture<SpecificProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
