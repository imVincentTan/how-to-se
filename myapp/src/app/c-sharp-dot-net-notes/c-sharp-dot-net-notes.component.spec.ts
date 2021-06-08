import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSharpDotNetNotesComponent } from './c-sharp-dot-net-notes.component';

describe('CSharpDotNetNotesComponent', () => {
  let component: CSharpDotNetNotesComponent;
  let fixture: ComponentFixture<CSharpDotNetNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSharpDotNetNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSharpDotNetNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
