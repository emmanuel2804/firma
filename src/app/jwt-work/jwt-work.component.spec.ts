import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtWorkComponent } from './jwt-work.component';

describe('JwtWorkComponent', () => {
  let component: JwtWorkComponent;
  let fixture: ComponentFixture<JwtWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwtWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
