import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDevToolsNotesComponent } from './core-dev-tools-notes.component';

describe('CoreDevToolsNotesComponent', () => {
  let component: CoreDevToolsNotesComponent;
  let fixture: ComponentFixture<CoreDevToolsNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreDevToolsNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreDevToolsNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
