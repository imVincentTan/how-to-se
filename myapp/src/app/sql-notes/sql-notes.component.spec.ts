import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlNotesComponent } from './sql-notes.component';

describe('SqlNotesComponent', () => {
  let component: SqlNotesComponent;
  let fixture: ComponentFixture<SqlNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
