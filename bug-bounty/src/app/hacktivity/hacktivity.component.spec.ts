import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacktivityComponent } from './hacktivity.component';

describe('HacktivityComponent', () => {
  let component: HacktivityComponent;
  let fixture: ComponentFixture<HacktivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HacktivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HacktivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
