import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandwriteComponent } from './handwrite.component';

describe('HandwriteComponent', () => {
  let component: HandwriteComponent;
  let fixture: ComponentFixture<HandwriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandwriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandwriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
