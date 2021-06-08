import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingNotesComponent } from './styling-notes.component';

describe('StylingNotesComponent', () => {
  let component: StylingNotesComponent;
  let fixture: ComponentFixture<StylingNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylingNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
