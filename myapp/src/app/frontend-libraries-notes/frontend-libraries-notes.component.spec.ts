import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendLibrariesNotesComponent } from './frontend-libraries-notes.component';

describe('FrontendLibrariesNotesComponent', () => {
  let component: FrontendLibrariesNotesComponent;
  let fixture: ComponentFixture<FrontendLibrariesNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendLibrariesNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendLibrariesNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
