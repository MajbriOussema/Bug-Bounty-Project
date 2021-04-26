import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegcompanyComponent } from './regcompany.component';

describe('RegcompanyComponent', () => {
  let component: RegcompanyComponent;
  let fixture: ComponentFixture<RegcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
