import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontcoolComponent } from './fontcool.component';

describe('FontcoolComponent', () => {
  let component: FontcoolComponent;
  let fixture: ComponentFixture<FontcoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontcoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontcoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
