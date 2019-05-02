import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticResumeComponent } from './static-resume.component';

describe('StaticResumeComponent', () => {
  let component: StaticResumeComponent;
  let fixture: ComponentFixture<StaticResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
