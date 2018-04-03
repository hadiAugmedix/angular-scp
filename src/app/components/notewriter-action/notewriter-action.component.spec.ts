import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotewriterActionComponent } from './notewriter-action.component';

describe('NotewriterActionComponent', () => {
  let component: NotewriterActionComponent;
  let fixture: ComponentFixture<NotewriterActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotewriterActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotewriterActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
